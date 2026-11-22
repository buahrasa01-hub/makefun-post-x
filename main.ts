#!/usr/bin/env node

import { promises as fs } from 'fs';
import { join } from 'path';

// Get environment variables with defaults
const botDir = process.env.MAKEFUN_BOT_DIR || '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const sourcePath = join(botDir, 'POST.json');
const destPath = join(outputDir, 'POST.json');

async function main() {
  try {
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    // Read source file
    const sourceData = await fs.readFile(sourcePath, 'utf8');

    // Write destination file
    await fs.writeFile(destPath, sourceData, 'utf8');

    // Verify copy: read destination and compare
    const destData = await fs.readFile(destPath, 'utf8');
    const verificationOk = sourceData === destData;

    if (verificationOk) {
      console.log('Copy verification: SUCCESS - files match');
      process.exit(0);
    } else {
      console.error('Copy verification: FAILED - files do not match');
      process.exit(1);
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

main();
