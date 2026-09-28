import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

// Synthetic DOM/fetch checks only: not a browser or semantic validator.
const source = readFileSync(new URL('./app.js', import.meta.url), 'utf8');

async function render({ drift = false, failedURL, failedURLs = [], malformedURL, rejectedURL, unreadableTextURL, payloadOverrides = {}, textOverrides = {} } = {}) {
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
    'active-state.json': { active_holds: [{ hold_id: 'TEST_DCP_HOLD', owner: 'fixture', reason: 'unresolved' }], active_conflicts: [], pending_returns: [] },
  };
  await vm.runInNewContext(source, { document, fetch: async url => {
    if (url === rejectedURL) throw new TypeError('Failed to fetch');
    const name = url.split('/').pop();
    return {
      ok: name !== failedURL && !failedURLs.includes(name),
      status: name === failedURL || failedURLs.includes(name) ? 503 : 200,
      json: async () => {
        if (name === malformedURL) throw new SyntaxError('Invalid fixture JSON');
        return Object.hasOwn(payloadOverrides, name) ? payloadOverrides[name] : payloads[name] ?? {};
      },
      text: async () => {
        if (url === unreadableTextURL) throw new TypeError('Body read failed');
        return textOverrides[url] ?? '';
      },
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
    const failedSummary = options.failedURL === 'authority-gate-matrix.json' ? 'dcp-summary' : 'summary';
    assert.match(elements.get(failedSummary).innerHTML, /錯誤/);
    // The detailed error must remain outside the toggleable view panels.
    const error = elements.get('load-error');
    assert.equal(error?.hidden, false);
    assert.ok(error.textContent.length > 0);
  });
}

test('load error alert belongs to neither toggleable view', () => {
  const html = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
  const alert = html.indexOf('id="load-error"');
  assert.ok(alert >= 0);
  assert.ok(alert < html.indexOf('id="world-view"'));
  assert.ok(alert < html.indexOf('id="dcp-view"'));
  assert.match(html, /id="load-error"[^>]*role="alert"[^>]*hidden/);
});

test('simultaneous world and DCP failures both remain visible', async () => {
  const elements = await render({ failedURLs: ['world.json', 'authority-gate-matrix.json'] });
  assert.equal(elements.get('status').textContent, 'LOAD ERROR');
  const error = elements.get('load-error');
  assert.equal(error.hidden, false);
  for (const message of ['world.json: 503', 'authority-gate-matrix.json: 503']) {
    assert.ok(error.textContent.includes(message), `missing diagnostic: ${message}`);
    const summary = message.startsWith('world') ? 'summary' : 'dcp-summary';
    assert.ok(elements.get(summary).innerHTML.includes(message));
  }
});

for (const [failedURL, preservedSummary] of [
  ['authority-gate-matrix.json', 'summary'],
  ['world.json', 'dcp-summary'],
]) {
  test(`failure in ${failedURL} preserves the other view's successful summary`, async () => {
    const baseline = await render();
    const failed = await render({ failedURL });
    assert.ok(baseline.get(preservedSummary).innerHTML.length > 0);
    assert.equal(failed.get(preservedSummary).innerHTML, baseline.get(preservedSummary).innerHTML);
    assert.equal(failed.get('status').textContent, 'LOAD ERROR');
  });
}

const collectionCases = [
  ['rebuild-manifest.json', 'holds', 'summary', 'holds', 'dcp-summary'],
  ['active-state.json', 'active_holds', 'dcp-summary', 'dcp-holds', 'summary'],
  ['active-state.json', 'active_conflicts', 'dcp-summary', 'dcp-holds', 'summary'],
  ['active-state.json', 'pending_returns', 'dcp-summary', 'dcp-pending', 'summary'],
];
const collectionPayloads = {
  'rebuild-manifest.json': JSON.parse(readFileSync(new URL('../specimens/gui-lu/rebuild-manifest.json', import.meta.url))),
  'active-state.json': JSON.parse(readFileSync(new URL('../dcp/instances/active-state.json', import.meta.url))),
};

for (const [filename, field, failedSummary, list, unaffectedSummary] of collectionCases) {
  for (const invalid of [undefined, null, false, 0, '', {}, 'not-an-array']) {
    test(`${filename}.${field} rejects ${JSON.stringify(invalid)} instead of claiming no entries`, async () => {
      const payload = { ...collectionPayloads[filename], [field]: invalid };
      if (invalid === undefined) delete payload[field];
      const baseline = await render();
      const elements = await render({ payloadOverrides: { [filename]: payload } });
      assert.equal(elements.get('status').textContent, 'LOAD ERROR');
      assert.ok(elements.get('load-error').textContent.includes(`${filename}: ${field}`));
      assert.match(elements.get(failedSummary).innerHTML, /錯誤/);
      assert.equal(elements.get(list)?.innerHTML ?? '', '');
      assert.equal(elements.get(unaffectedSummary).innerHTML, baseline.get(unaffectedSummary).innerHTML);
    });
  }
}

test('explicit empty arrays describe only absence in the loaded source', async () => {
  const elements = await render({ payloadOverrides: {
    'rebuild-manifest.json': { ...collectionPayloads['rebuild-manifest.json'], holds: [] },
    'active-state.json': { ...collectionPayloads['active-state.json'], active_holds: [], active_conflicts: [], pending_returns: [] },
  } });
  assert.match(elements.get('status').textContent, /資料已載入.*尚未執行語義驗證/);
  assert.match(elements.get('holds').innerHTML, /此來源未列出 Hold/);
  assert.match(elements.get('dcp-holds').innerHTML, /此來源未列出 Hold／Conflict/);
  assert.match(elements.get('dcp-pending').innerHTML, /此來源未列出 Pending Return/);
});

test('committed specimen collections remain readable without claiming semantic validation', async () => {
  const elements = await render({ payloadOverrides: collectionPayloads });
  assert.match(elements.get('status').textContent, /資料已載入.*尚未執行語義驗證/);
  assert.match(elements.get('holds').innerHTML, /GLMODEL_EXACT_GEOMETRY_VALIDATION_PENDING/);
  assert.match(elements.get('dcp-holds').innerHTML, /HOLD-GUI-LU-GEOMETRY-EVIDENCE/);
  assert.match(elements.get('dcp-pending').innerHTML, /RET-GLMODEL-DOMAIN-NATIVE-BINDING/);
});

for (const scenario of [
  {
    name: 'malformed world event after hold formatting',
    options: { textOverrides: { '../specimens/gui-lu/events.jsonl': 'null' } },
    failedSummary: 'summary', failedPanels: ['relations', 'anchors', 'holds', 'events', 'human'],
    preservedPanels: ['dcp-summary', 'dcp-holds', 'dcp-pending'],
  },
  {
    name: 'malformed DCP growth after hold and return formatting',
    options: { payloadOverrides: { 'growth-memory-model.json': { capability_levels: {} } } },
    failedSummary: 'dcp-summary',
    failedPanels: ['dcp-families', 'dcp-guards', 'dcp-holds', 'dcp-pending', 'dcp-rights', 'dcp-returns', 'dcp-growth', 'dcp-claims', 'dcp-diagram', 'dcp-matrix', 'dcp-human'],
    preservedPanels: ['summary', 'holds'],
  },
]) {
  test(`late formatting failure leaves no partial view: ${scenario.name}`, async () => {
    const baseline = await render();
    const failed = await render(scenario.options);
    assert.equal(failed.get('status').textContent, 'LOAD ERROR');
    assert.equal(failed.get('load-error').hidden, false);
    assert.match(failed.get(scenario.failedSummary).innerHTML, /錯誤/);
    for (const id of scenario.failedPanels) {
      assert.equal(failed.get(id)?.innerHTML ?? '', '', `${id} contains a partial result`);
      assert.equal(failed.get(id)?.textContent ?? '', '', `${id} contains partial text`);
    }
    for (const id of scenario.preservedPanels) {
      assert.equal(failed.get(id).innerHTML, baseline.get(id).innerHTML, `${id} must remain usable`);
    }
  });
}

for (const scenario of [
  { options: { rejectedURL: '../specimens/gui-lu/world.json' }, file: '../specimens/gui-lu/world.json', stage: '請求失敗' },
  { options: { rejectedURL: '../dcp/current/authority-gate-matrix.json' }, file: '../dcp/current/authority-gate-matrix.json', stage: '請求失敗' },
  { options: { malformedURL: 'visual-bindings.json' }, file: '../specimens/gui-lu/visual-bindings.json', stage: 'JSON 讀取或解析失敗' },
  { options: { malformedURL: 'active-state.json' }, file: '../dcp/instances/active-state.json', stage: 'JSON 讀取或解析失敗' },
  { options: { unreadableTextURL: '../dcp/HUMAN.zh-TW.md' }, file: '../dcp/HUMAN.zh-TW.md', stage: '文字讀取失敗' },
]) {
  test(`load diagnostics locate ${scenario.file}: ${scenario.stage}`, async () => {
    const elements = await render(scenario.options);
    assert.equal(elements.get('status').textContent, 'LOAD ERROR');
    const detail = elements.get('load-error').textContent;
    assert.ok(detail.includes(scenario.file), `missing source: ${detail}`);
    assert.ok(detail.includes(scenario.stage), `missing stage: ${detail}`);
  });
}

test('malformed JSONL reports the original line including preceding blanks', async () => {
  const elements = await render({ textOverrides: {
    '../specimens/gui-lu/events.jsonl': '\n{"event_id":"TEST","event_type":"TEST"}\n\ninvalid-json',
  } });
  assert.equal(elements.get('status').textContent, 'LOAD ERROR');
  assert.ok(elements.get('load-error').textContent.includes('../specimens/gui-lu/events.jsonl:4:'));
});
