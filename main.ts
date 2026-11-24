import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One Emoji, One Smile — the entry is a single hatching chick.
// A baby chick breaking out of its shell: warm at first glance,
// universally read the same way, chosen rather than default,
// and friendly from a stranger with no intimacy attached.
// The file holds exactly the emoji and nothing else: no newline,
// no caption, no explanation, so the gate sees 1 character.
const EMOJI = '🐣';

function resolveOutputDir(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) {
    return process.env.MAKEFUN_OUTPUT_DIR;
  }
  const flagIndex = process.argv.indexOf('--output');
  if (flagIndex !== -1 && process.argv[flagIndex + 1]) {
    return process.argv[flagIndex + 1];
  }
  return '/output';
}

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), EMOJI, 'utf8');
