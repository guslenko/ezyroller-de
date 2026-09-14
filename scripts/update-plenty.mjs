import { execFileSync, spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const cwd = fileURLToPath(new URL('../', import.meta.url));
const statePath = new URL('../apps/web/modules/ezyroller/upstream-release.json', import.meta.url);
const current = JSON.parse(readFileSync(statePath, 'utf8'));
const target = process.argv[2];
const git = (...args) => execFileSync('git', args, { cwd, encoding: 'utf8', maxBuffer: 80 * 1024 * 1024 });

if (!/^v\d+\.\d+\.\d+$/.test(target ?? '')) {
  throw new Error('Usage: npm run update:plenty -- vX.Y.Z (an exact official release tag)');
}
if (Number(process.versions.node.split('.')[0]) < 24) {
  throw new Error('Use Node.js 24 or newer before updating.');
}
if (git('status', '--porcelain').trim()) {
  throw new Error('Commit the reviewed current state first. Updating with uncommitted changes is disabled.');
}
if (target === current.tag) {
  throw new Error(`Already based on ${target}.`);
}

// Apply only the official delta. Never copy a fresh checkout over the shop module.
git(
  'fetch',
  '--no-tags',
  'https://github.com/plentymarkets/plentyshop-pwa.git',
  `refs/tags/${target}:refs/tags/${target}`,
);
const patch = execFileSync(
  'git',
  [
    'diff',
    '--binary',
    current.tag,
    target,
    '--',
    '.',
    ':!apps/web/modules/ezyroller',
    ':!apps/web/.env',
    ':!scripts/update-plenty.mjs',
  ],
  { cwd, maxBuffer: 80 * 1024 * 1024 },
);
const applied = spawnSync('git', ['apply', '--3way'], { cwd, input: patch, encoding: 'utf8' });
if (applied.status !== 0) {
  process.stderr.write(applied.stderr ?? '');
  throw new Error(
    'Upstream conflicts need review. Resolve them without removing EzyRoller registration/i18n, then finish the steps in the module README. No install or deployment was run.',
  );
}
writeFileSync(
  statePath,
  JSON.stringify({ tag: target, commit: git('rev-parse', `${target}^{commit}`).trim() }, null, 2) + '\n',
);
console.log(
  `Applied ${current.tag} → ${target}. Review the diff, run npm install, npm run build, then npm run dev and npm run test:ezyroller. No deployment was performed.`,
);
