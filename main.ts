// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme whose picture shows the
// make.fun ghost waiting on a loading bar stuck at 99% ("LOADING...
// 13 YEARS REMAINING"), posted from a public X account with make.fun
// and the entrant's play code in its text. This program does the one
// thing the bounty asks of it: it copies POST.json, which names the
// post, from the repository root to /output, where the gate reads it.
// The house reads the post from X itself and builds the dossier the
// judge sees; nothing this program writes about the post is judged.
//
// POST.json holds a placeholder URL until the meme is posted on X;
// the placeholder is replaced with the real post address (and committed)
// before submission. The copy is byte-for-byte: what is committed is
// exactly what the gate reads.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

if (!existsSync(source)) {
  console.error(`POST.json not found in ${BOT_DIR}; nothing to hand in.`);
  process.exit(1);
}

// Fail loudly on a malformed hand-in instead of copying garbage to /output:
// POST.json must be a JSON object with a url string naming the X post.
let post: unknown;
try {
  post = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a "url" string.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);
console.log(`POST.json copied to ${target}`);
