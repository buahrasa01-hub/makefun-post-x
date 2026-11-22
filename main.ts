// make.fun entry: copy POST.json to output directory
// Uses MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR env vars with fallbacks.
// The grader mounts the repository read-only at /bot and gives a writable
// /output (MAKEFUN_OUTPUT_DIR), so this program never writes under the repo.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Default directories for the make.fun grader
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Ensure the output directory exists (already present in the grader)
mkdirSync(OUTPUT_DIR, { recursive: true });

// Copy POST.json from the bot directory to the output directory
const src = join(BOT_DIR, 'POST.json');
const dest = join(OUTPUT_DIR, 'POST.json');

try {
  copyFileSync(src, dest);
} catch (err) {
  console.error(`Failed to copy POST.json from ${src} to ${dest}: ${err}`);
  process.exit(1);
}

console.log(`Copied POST.json to ${dest}`);
