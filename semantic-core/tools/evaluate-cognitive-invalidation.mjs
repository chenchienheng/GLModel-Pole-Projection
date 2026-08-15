import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dcpRoot = path.resolve(here, '../dcp');
const read = async p => JSON.parse(await fs.readFile(path.join(dcpRoot, p), 'utf8'));

const payload = await read('instances/cognitive-invalidation-specimens.json');
const ceilingRank = ['UNKNOWN','CANDIDATE','TO_VERIFY','CASE_SUPPORTED','VERIFIED_BOUNDED','APPROVED','RUNTIME_PROVEN'];
const capAt = (current, ceiling) => ceilingRank[Math.min(ceilingRank.indexOf(current), ceilingRank.indexOf(ceiling))];
const degradingEvents = new Set(['EVIDENCE_APPLICABILITY_FAILURE','AUTHORITY_WITHDRAWN','EVIDENCE_STALE','EVIDENCE_CONTRADICTED']);
const results = [];
let failed = false;

for (const specimen of payload.specimens || []) {
  const nodes = new Map((specimen.support_nodes || []).map(n => [n.support_id, n]));
  const reverse = new Map();
  for (const node of nodes.values()) {
    for (const dep of node.dependencies || []) {
      if (!reverse.has(dep.target)) reverse.set(dep.target, new Set());
      reverse.get(dep.target).add(node.support_id);
    }
  }

  const directlyAffected = new Set(specimen.event?.targets || []);
  const affected = new Set(directlyAffected);
  const queue = [...directlyAffected];
  while (queue.length) {
    const id = queue.shift();
    for (const dependent of reverse.get(id) || []) {
      if (!affected.has(dependent)) {
        affected.add(dependent);
        queue.push(dependent);
      }
    }
  }

  const recomputedCeilings = {};
  for (const id of affected) {
    const node = nodes.get(id);
    if (!node) continue;
    recomputedCeilings[id] = degradingEvents.has(specimen.event?.type)
      ? capAt(node.claim_ceiling, 'TO_VERIFY')
      : node.claim_ceiling;
  }

  const actualInvalidated = [...affected].sort();
  const actualPreserved = [...nodes.keys()].filter(id => !affected.has(id)).sort();
  const expectedInvalidated = [...(specimen.expected?.invalidate || [])].sort();
  const expectedPreserved = [...(specimen.expected?.preserve || [])].sort();
  const errors = [];
  if (JSON.stringify(actualInvalidated) !== JSON.stringify(expectedInvalidated)) errors.push('AFFECTED_SET_MISMATCH');
  if (JSON.stringify(actualPreserved) !== JSON.stringify(expectedPreserved)) errors.push('PRESERVED_SET_MISMATCH');
  if (specimen.expected?.whole_world_rebuild === false && specimen.expected?.recompute_scope !== 'AFFECTED_CONE') errors.push('WHOLE_WORLD_REBUILD_SCOPE_DRIFT');
  for (const [id, expected] of Object.entries(specimen.expected?.resulting_claim_ceiling || {})) {
    if (recomputedCeilings[id] !== expected) errors.push(`CLAIM_CEILING_MISMATCH:${id}:${recomputedCeilings[id]}!=${expected}`);
  }
  if (errors.length) failed = true;
  results.push({
    specimen_id: specimen.specimen_id,
    event_id: specimen.event?.event_id,
    affected: actualInvalidated,
    preserved: actualPreserved,
    recomputed_claim_ceiling: recomputedCeilings,
    whole_world_rebuild: false,
    status: errors.length ? 'FAIL' : 'PASS_BOUNDED',
    errors
  });
}

console.log(JSON.stringify({
  profile: 'DCP_COGNITIVE_INVALIDATION_EVALUATION',
  runtime: false,
  scope: 'BOUNDED_SPECIMENS_ONLY',
  status: failed ? 'FAIL' : 'PASS_BOUNDED',
  results
}, null, 2));
if (failed) process.exitCode = 1;
