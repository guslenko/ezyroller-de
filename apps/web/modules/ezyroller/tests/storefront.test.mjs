import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { withEzyrollerTranslations } from '../i18n.ts';

const baseUrl = process.env.EZYROLLER_TEST_URL || 'http://localhost:3000';
const languages = ['de', 'en', 'fr', 'it', 'es', 'pl'];
const messages = (locale) =>
  JSON.parse(readFileSync(new URL(`../runtime/lang/${locale}.json`, import.meta.url), 'utf8'));
const escapeHtml = (text) =>
  String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

async function page(path) {
  const response = await fetch(`${baseUrl}${path}`, { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${path} must render successfully`);
  const html = await response.text();
  // Check the rendered markup, not Nuxt's serialized payload where untranslated data might hide a failure.
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
}

test('keeps new upstream locales/files and gives shop translations final precedence', () => {
  const upstream = {
    locales: [
      { code: 'de', files: ['de.json', 'de-new-feature.json'] },
      { code: 'nl', file: 'nl.json' },
    ],
  };
  const result = withEzyrollerTranslations(upstream);
  assert.deepEqual(result.locales[0].files, [
    'de.json',
    'de-new-feature.json',
    '../../modules/ezyroller/runtime/lang/de.json',
  ]);
  assert.deepEqual(result.locales[1], upstream.locales[1]);
  assert.deepEqual(upstream.locales[0].files, ['de.json', 'de-new-feature.json']);
});

for (const locale of languages) {
  test(`renders the branded homepage and comparison table in ${locale}`, async () => {
    const html = await page(`/${locale}`);
    const text = messages(locale);
    assert.ok(html.includes(escapeHtml(text.homeTitle)), `${locale}: custom page title is missing`);
    assert.ok(html.includes(escapeHtml(text.videoCta)), `${locale}: custom hero CTA is missing`);
    assert.ok(html.includes(escapeHtml(text.pwtitle)), `${locale}: comparison heading is missing`);
    assert.ok(html.includes(escapeHtml(text.textWidgetCopy)), `${locale}: branded footer is missing`);
  });
}

for (const [path, titleKey] of [
  ['/kontakt', 'contacttitle'],
  ['/business', 'businesstitle'],
  ['/widerrufsformular', null],
  ['/our-story', 'ourStoryTitle'],
  ['/find-ezyroller', 'findEzyrollerTitle'],
]) {
  test(`preserves custom route ${path}`, async () => {
    const html = await page(path);
    const title = titleKey ? messages('de')[titleKey] : 'Widerrufsformular';
    if (title) {
      assert.ok(html.includes(escapeHtml(title)), `${path}: custom translation is missing`);
    }
    assert.ok(html.includes('EzyRoller'), `${path}: branded layout is missing`);
    if (['/kontakt', '/business', '/widerrufsformular'].includes(path)) {
      assert.ok(html.includes('<form'), `${path}: form is missing`);
    }
  });
}

const migration = JSON.parse(readFileSync(new URL('../migration-manifest.json', import.meta.url), 'utf8'));
const coveredPages = new Set([
  'index',
  '[...slug]',
  'kontakt',
  'business',
  'widerrufsformular',
  'our-story',
  'find-ezyroller',
]);
for (const entry of migration.files.filter((entry) => entry.module.startsWith('runtime/pages/'))) {
  const name = entry.module.replace('runtime/pages/', '').replace('.vue', '');
  if (coveredPages.has(name)) {
    continue;
  }
  test(`renders additional preserved page /${name}`, async () => {
    const html = await page(`/${name}`);
    assert.ok(html.includes('EzyRoller'));
  });
}

for (const path of ['/images/ERCLASSIC.webp', '/images/erf.webp', '/videos/banner.mp4']) {
  test(`keeps public asset URL ${path}`, async () => {
    const response = await fetch(`${baseUrl}${path}`, { method: 'HEAD', signal: AbortSignal.timeout(30000) });
    assert.equal(response.status, 200);
    assert.ok(/image|video/.test(response.headers.get('content-type') ?? ''));
  });
}
