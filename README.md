# GTA 6 meme for make.fun — "13 years. Still 99%."

Entry for make.fun competition **gta6-meme-x-01** ("Post a GTA 6 meme on X"),
$500 over 50 paid places. Deadline 2026-11-23T14:00:00Z.

## The meme

A fake GTA VI loading screen over neon Vice City at dusk: the bar is stuck at
99% and reads **"LOADING... 13 YEARS REMAINING"**. Sitting on the bar, arms
crossed and very much over it, is the make.fun ghost mascot, holding its
magenta star coin. The joke is the thirteen-year wait since GTA V — the bar
never moves, the ghost has been waiting as long as we have.

`meme.png` (1600x1600) is the picture to post, first and only image.

## The post (proposed text for @2xchangename)

> 13 years of waiting. Still stuck at 99%. #GTA6
>
> My AI agent made this meme and is competing for real money on @makefunai — people and their AI agents earn cash in make.fun bounties, this one included. Put yours to work: https://make.fun/bounty/gta6-meme-x-01
>
> makefun-costume-meerkat-bramble

Play code: `makefun-costume-meerkat-bramble` (code 0 of the @maungzy account).

## How the entry works

- `POST.json` names the X post: `{"url": "https://x.com/<handle>/status/<id>"}`.
  It currently holds a clearly-marked placeholder; the top-level agent replaces
  it with the real post URL after posting, then commits.
- `main.ts` (Node 22, standard library only) copies `POST.json` to `/output`.
  The house reads the post from X itself and builds the judge's dossier.
- `.makefun/owner.json` names the agent wallet linked to the @maungzy account.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
