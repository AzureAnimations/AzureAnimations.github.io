# Narration Scripts

Voiceover / narrator scripts for the Azure Animations interactive explainers.

## Mapping convention

Each script maps **1:1** to an animation HTML file by mirroring its path and
swapping the extension:

```
static/v2/AI/Foundry/FoundryHubProject.html
        ↓   (insert narration/ after static/, .html → .md)
static/narration/v2/AI/Foundry/FoundryHubProject.md
```

So to find the script for any animation: take its path, insert `narration/` right
after the leading `static/`, and change `.html` to `.md`.

The link is **bidirectional**:

- **Script → HTML** — each `.md` names its source in a `Source animation:` line at the top.
- **HTML → script** — each animation `.html` carries a one-line comment near the very
  top, e.g. `<!-- Narration script: /static/narration/v2/AI/Foundry/FoundryHubProject.md -->`.

Because these live under `static/`, they are **published** with the Docusaurus site
(e.g. reachable at `/narration/v2/AI/Foundry/FoundryHubProject.md`). They are plain
text production artifacts used to record narration — not secret — so publishing them
is harmless. If you'd prefer they not ship with the site, move the `narration/` folder
out of `static/` to the repo root.

## Format

- A top-level `#` title naming the journey.
- A **Source animation** reference (the repo-relative path to the HTML it narrates).
- One `## Step N · Name` heading per animation step, in on-screen order.
- Narration text uses inline `[tag]` **delivery cues**:
  - **Speaking styles** — e.g. `[confident]`, `[curious]`, `[calm]`, `[reassuring]`,
    `[impressed]`, `[serious]`, `[determined]`, `[proud]`, `[optimistic]`,
    `[encouraging]`, `[excited]`, `[intrigued]`, `[reflective]`, `[amused]`,
    `[hesitant]`, `[concerned]`.
  - **Paralinguistics** — e.g. `[laughter]`.
  - **Pauses** — a beat of silence written on its own line as `[NNNms]` or `[N.Ns]`
    (e.g. `[600ms]`, `[1.2s]`). The generator turns these into SSML `<break time="…"/>`
    so the voice pauses naturally between clauses. ~600ms typical, ~800ms after a question.
- Each `[tag]` starts on its **own line** — put a line break before every new cue so
  each delivery block reads as a separate line.

## Audio (generated)

These scripts double as text-to-speech sources. `scripts/generate_narration_audio.py`
synthesizes them with Azure AI Speech using the Dragon HD voice
`en-US-Ava:DragonHDLatestNeural`; the inline `[tag]` cues are native Dragon HD style
markers, so the text is sent as-is (tags shape delivery, they're not read aloud).

Per-step clips are written **next to the animation HTML** (not under this folder), at
`static/v2/<Area>/<Sub>/audio/<Name>/step-NN.mp3`, and wired into the page's `AUDIO_FILES[]`
so the page's Audio toggle plays one clip per step (only the current step is audible).

Inline `[NNNms]` pause markers become SSML `<break>` during synthesis (via `build_ssml()`),
so the narration breathes between clauses instead of rushing.

When audio is enabled, each page also **flexes its animation speed to the clip** — it reads the
clip length and adjusts the GSAP `timeScale` (clamped 0.6×–2.2×) so the animation and narration
finish together. So the script can be written for clarity; the visuals adapt.

## Localization (es · ja · ko · pt)

The English scripts are the master. Localized scripts live in a **`<lang>/` subfolder**
next to the English master, keeping the same filename:

```
static/narration/v2/AI/Foundry/FoundryHubProject.md        ← English master
static/narration/v2/AI/Foundry/es/FoundryHubProject.md     ← Spanish
static/narration/v2/AI/Foundry/{ja,ko,pt}/FoundryHubProject.md
```

Only the spoken lines are translated; the `## Step N · Name` headings stay in English
(so they map 1:1 to the page) and the `[NNNms]` pause markers are kept. The English
`[style]` cues are **left in the file for reference but stripped at synthesis** for the
localized voices (they don't interpret them), while the Dragon HD voice still infers
emotion from the text.

`generate_narration_audio.py` handles languages via `--langs` (default `es,ja,ko,pt`;
use `all` to include `en`). Each language uses a native **Dragon HD** voice and matching
`xml:lang`:

| Lang | Voice | `xml:lang` |
| --- | --- | --- |
| en | `en-US-Ava:DragonHDLatestNeural` (keeps `[tags]`) | en-US |
| es | `es-ES-Ximena:DragonHDLatestNeural` | es-ES |
| ja | `ja-JP-Nanami:DragonHDLatestNeural` | ja-JP |
| ko | `ko-KR-SunHi:DragonHDLatestNeural` | ko-KR |
| pt | `pt-BR-Thalita:DragonHDLatestNeural` | pt-BR |

Localized clips are written to a **`<lang>/` subfolder** under the page's audio dir
(English stays at the root):

```
static/v2/AI/Foundry/audio/<Name>/step-NN.mp3          ← English
static/v2/AI/Foundry/audio/<Name>/<lang>/step-NN.mp3   ← es · ja · ko · pt
```

Each page picks the folder from the current UI language, so switching the language
selector swaps the narration voice too (English falls back to the root clips).

## Journeys & voice sets

Each journey is a **separate `--project`** in `generate_narration_audio.py` (its own script
folder, `audio/` output folder, and voice set). To keep journeys audibly distinct, **no two
share the same narrator**. DragonHD only ships two personas per localized locale — one female,
one male — so the localized voices are reused across journeys, but the English lead is unique.

| Journey | `--project` | Scripts | Voice set (en · es · ja · ko · pt) |
| --- | --- | --- | --- |
| AI Foundry | `foundry` | `v2/AI/Foundry/` | Ava · Ximena · Nanami · SunHi · Thalita (female) |
| Azure Storage | `storage` | `v2/Storage/` | Ava · Ximena · Nanami · SunHi · Thalita (female) |
| Copilot Studio | `copilotstudio` | `v2/CopilotStudio/` | Andrew · Tristan · Masaru · Hyunsu · Macerio (male) |
| PaaS Compute | `compute` | `v2/Compute/` | **Brian** · Tristan · Masaru · Hyunsu · Macerio (male) |
| Microsoft 365 Copilot | `copilot` | `v2/Copilot/` | **Aria** · Ximena · Nanami · SunHi · Thalita (female) |

All voices are `:DragonHDLatestNeural`. Compute's English lead is `en-US-Brian` — a fresh male
persona (unlike Foundry/Storage's female Ava and Copilot Studio's Andrew) — giving an audible
gender contrast with the female Azure-service journeys in every language. Run e.g.
`python scripts/generate_narration_audio.py --project compute --langs en,es,ja,ko,pt`.
