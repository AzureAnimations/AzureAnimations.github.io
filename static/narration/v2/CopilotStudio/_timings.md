# Copilot Studio journey — step animation timings

Measured live in-browser (GSAP entrance-timeline max end time per step, seconds).
The product-UI mock entrances are quick (~1.5–2.1s); narration is NOT speed-bound to them —
each clip plays over the held final frame, so write scripts for comprehension (~15–22s/step),
not to fit the animation. No `BASE_TIMESCALE` on these pages (unlike the Foundry journey).

Narrator voice: **male** DragonHD — en `en-US-Andrew`, es `es-ES-Tristan`, ja `ja-JP-Masaru`,
ko `ko-KR-Hyunsu`, pt `pt-BR-Macerio` (all `:DragonHDLatestNeural`, verified live).

## Anatomy.html — 8 steps ("What Makes a Copilot Studio Agent")
| # | id | anim (s) |
|---|-----|----------|
| 1 | overview  | 1.5 |
| 2 | knowledge | 1.6 |
| 3 | tools     | 1.6 |
| 4 | agents    | 1.6 |
| 5 | topics    | 1.7 |
| 6 | measure   | 1.5 |
| 7 | channels  | 1.7 |
| 8 | recap     | 2.1 |

## Foundations.html — 7 steps ("Why Copilot Studio — Foundations")
| # | anim (s) |
|---|----------|
| 1 | 1.9 |
| 2 | 1.6 |
| 3 | 1.7 |
| 4 | 1.9 |
| 5 | 1.7 |
| 6 | 1.5 |
| 7 | 1.9 |

## Integrate.html — 7 steps ("Extend & Integrate Copilot Studio")
| # | anim (s) |
|---|----------|
| 1 | 1.7 |
| 2 | 1.6 |
| 3 | 1.5 |
| 4 | 1.5 |
| 5 | 1.6 |
| 6 | 1.7 |
| 7 | 2.0 |

## UseCases.html — 7 steps ("Copilot Studio in Action — Use Cases")
| # | anim (s) |
|---|----------|
| 1 | 1.7 |
| 2 | 1.6 |
| 3 | 1.6 |
| 4 | 1.6 |
| 5 | 1.6 |
| 6 | 1.7 |
| 7 | 2.0 |

Total: 29 steps across the 4 journey pages (hub `index.html` gets no per-step narration).

---

## Generated narration audio (EN clip lengths)

All 5 languages were synthesised (`en, es, ja, ko, pt`). Below are the **EN** clip
durations (≈ bytes ÷ 20000 for `audio-24khz-160kbitrate-mono-mp3`). Files live under
`static/v2/CopilotStudio/audio/<Page>/step-NN.mp3` (EN) and `.../audio/<Page>/<lang>/step-NN.mp3`.

Each MP3 plays over the held final frame with a live countdown in the speaker button.

| # | Foundations (s) | Integrate (s) | UseCases (s) |
|---|-----------------|---------------|--------------|
| 1 | 37.7 | 27.0 | 27.6 |
| 2 | 25.2 | 29.2 | 31.9 |
| 3 | 33.8 | 31.5 | 28.2 |
| 4 | 30.6 | 30.8 | 30.7 |
| 5 | 36.4 | 27.2 | 29.1 |
| 6 | 31.8 | 31.7 | 28.5 |
| 7 | 35.7 | 38.4 | 42.0 |

Anatomy (8 steps) EN clips were generated in the same batch and verified live (en + ja).

**Totals:** 3 pages × 7 steps × 5 languages = 105 clips (+ Anatomy's 40) = **145 clips**.
Regenerate with:
`py scripts/generate_narration_audio.py --project copilotstudio --pages <Page> --langs all`
