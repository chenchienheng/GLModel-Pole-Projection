import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

// Synthetic DOM/fetch checks only: not a browser or semantic validator.
const source = readFileSync(new URL('./app.js', import.meta.url), 'utf8');

async function render({ drift = false, failedURL, malformedURL } = {}) {
  const elements = new Map();
  const document = {
    getElementById(id) {
      if (!elements.has(id)) {
        const classes = new Set();
        elements.set(id, { textContent: '', innerHTML: '', classes,
          classList: { add: x => classes.add(x), toggle() {} } });
      }
      return elements.get(id);
    },
    querySelectorAll: () => [],
  };
  const otherID = drift ? 'TEST-WORLD-B' : 'TEST-WORLD-A';
  const payloads = {
    'world.json': { stable_id: 'TEST-WORLD-A', state: { lifecycle: 'TEST' }, relations: [] },
    'visual-bindings.json': { world_id: otherID, bindings: [] },
    'rebuild-manifest.json': { subject_id: otherID, rebuild_status: 'UNPROVEN', holds: ['TEST_WORLD_HOLD'] },
    'active-state.json': { active_holds: [{ hold_id: 'TEST_DCP_HOLD', owner: 'fixture', reason: 'unresolved' }] },
  };
  await vm.runInNewContext(source, { document, fetch: async url => {
    const name = url.split('/').pop();
    return {
      ok: name !== failedURL, status: name === failedURL ? 503 : 200,
      json: async () => {
        if (name === malformedURL) throw new SyntaxError('Invalid fixture JSON');
        return payloads[name] ?? {};
      },
      text: async () => '',
    };
  } });
  return elements;
}

for (const drift of [false, true]) {
  test(`loaded data does not claim semantic validation (identity drift: ${drift})`, async () => {
    const elements = await render({ drift });
    const status = elements.get('status');
    assert.match(status.textContent, /資料已載入.*尚未執行語義驗證/);
    assert.equal(status.classes.has('ok'), false);
    assert.equal(status.classes.has('warning'), true);
    assert.match(elements.get('holds').innerHTML, /TEST_WORLD_HOLD/);
    assert.match(elements.get('dcp-holds').innerHTML, /TEST_DCP_HOLD/);
  });
}

for (const options of [
  { failedURL: 'world.json' },
  { failedURL: 'authority-gate-matrix.json' },
  { malformedURL: 'visual-bindings.json' },
]) {
  test(`failed load remains an error: ${JSON.stringify(options)}`, async () => {
    const elements = await render(options);
    assert.equal(elements.get('status').textContent, 'LOAD ERROR');
    assert.equal(elements.get('status').classes.has('ok'), false);
    assert.match(elements.get('summary').innerHTML, /錯誤/);
  });
}
