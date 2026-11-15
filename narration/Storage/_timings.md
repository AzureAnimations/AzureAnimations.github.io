# Azure Storage journey — narration & step-timing log

Narrator voice: **female** Dragon HD (same set as the AI Foundry journey) —
en `en-US-Ava`, es `es-ES-Ximena`, ja `ja-JP-Nanami`, ko `ko-KR-SunHi` (all `:DragonHDLatestNeural`).

Scripts: `static/narration/v2/Storage/[<lang>/]<Name>.md`. Clips:
`static/v2/Storage/audio/<Name>/[<lang>/]step-NN.mp3`. Each clip plays over the held final frame
with a live countdown in the speaker button. Narration is **not** speed-bound to the animation.

i18n reality (core journey): **StorageAccount** and **SasTokens** are **English-only**;
**StorageRedundancy** ships **en · es · ja · ko** (no pt). The hub `index.html` is English-only.

## Per-step animation durations (intrinsic, at 1× base — seconds)

Measured live from the GSAP timelines. NOTE on default playback speed:
- StorageAccount & SasTokens apply `BASE_TIMESCALE=0.25` (label 1× → 0.25× actual), so on-screen ≈ 4× these numbers.
- StorageRedundancy applies a per-timeline `speedMultiplier` (label 1× → 1× actual), so on-screen ≈ these numbers.

### StorageAccount.html — 6 steps ("Store it")
| # | step | anim (s) |
|---|------|----------|
| 1 | Overview | 2.45 |
| 2 | Standard vs Premium | 1.83 |
| 3 | Four Data Services | 1.86 |
| 4 | Three Kinds of Blob | 1.84 |
| 5 | Access Tiers | 2.59 |
| 6 | Recap | 3.17 |

### StorageRedundancy.html — 6 steps ("Protect it")
| # | step | anim (s) |
|---|------|----------|
| 1 | Overview | 1.35 |
| 2 | LRS | 3.95 |
| 3 | ZRS | 4.11 |
| 4 | GRS / RA-GRS | 11.48 |
| 5 | GZRS / RA-GZRS | 11.64 |
| 6 | Summary | 5.60 |

The GRS/GZRS steps are long because of the Read-Access toggle reveal; at the page's 1× default that's
~11–12 s on screen. If it feels long, override the speed later (add a `BASE_TIMESCALE` like the other pages).

### SasTokens.html — 8 steps ("Share it")
| # | step | anim (s) |
|---|------|----------|
| 1 | The Players | 1.25 |
| 2 | The Keys | 0.95 |
| 3 | Generate a Token | 1.79 |
| 4 | Inside the Token | 1.15 |
| 5 | The User Gets In | 3.08 |
| 6 | Stored Access Policy | 1.89 |
| 7 | The Whole Picture | 1.15 |
| 8 | SAS Types & Scope | 1.94 |

## Audio wiring keys
- StorageAccount / SasTokens: localStorage `aw-sa-audio`, read `?audio=on`, `AUDIO_BASE='audio/<Name>/'`.
- StorageRedundancy: custom module, localStorage `aw-storage-audio`, read `?audio=on`, `window.__awStepAudio`.
- Hub index.html: localStorage `aw-storage-hub-audio` (hub-only), plays `audio/index/step-01.mp3`,
  propagates `?audio=on` to the three `a.tile` core links only (Level-up `.more-card` links untouched).

## Remaining (Level-up, not yet wired)
StorageIdentityRBAC, StorageNetworkSecurity, StorageDataProtection, StorageBuildEvents,
StorageMoveOptimize, StorageForAI — each uses the CS-style stub (`aw-sa-audio`); wire with the same
2-edit upgrade once scripts are written, then extend the hub propagation to `.more-card` links.

Regenerate: `python scripts/generate_narration_audio.py --project storage --pages <Name> --langs en|all`
