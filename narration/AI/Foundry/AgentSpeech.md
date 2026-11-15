# Narrator Script — Journey 06 · Talking Apps with Azure AI Speech

**Source animation:** `static/v2/AI/Foundry/AgentSpeech.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`),
paralinguistics (e.g. `[laughter]`), and `[NNNms]` pause markers (e.g. `[600ms]`).
One block per animation step.

---

## Step 1 · Why Give Software a Voice?

[curious] People naturally speak and listen.
[600ms]
[confident] Azure AI Speech brings that to your apps — taking voice commands, answering spoken questions, and reading text aloud.
[600ms]
[reassuring] Software that feels natural and accessible to everyone.

## Step 2 · Two Core Capabilities

[confident] Speech works two ways:
[600ms]
[calm] Speech to Text turns audio into text,
[600ms]
[impressed] and Text to Speech reads text aloud in a natural voice.

## Step 3 · How Speech to Text Works

[intrigued] So how does Speech to Text actually work?
[800ms]
[confident] First, an acoustic model breaks the raw audio into phonemes — the basic building blocks of sound.
[600ms]
[calm] Then a language model assembles those phonemes into words and sentences.
[600ms]
[optimistic] Two models, working together to hear the way we do.

## Step 4 · Speech to Text in the Real World

[optimistic] Turning speech into text unlocks a lot:
[600ms]
[confident] hands-free workflows, live captions for accessibility, and searchable records of calls and meetings.
[600ms]
[encouraging] Spoken words become data you can act on.

## Step 5 · How Text to Speech Works

[confident] Going the other way, Text to Speech starts by tokenizing your text, then converts it into phonetic and prosodic units — the individual sounds, and the rhythm and melody of speech.
[600ms]
[impressed] From those, it generates smooth, natural-sounding audio, not a robotic monotone.
[600ms]
[reassuring] And you stay fully in control: choose the voice, the speaking rate, the pitch, and the volume to fit your brand.

## Step 6 · The TTS API

[confident] In the Foundry portal, you pick a voice and call the text-to-speech API.
[600ms]
[impressed] There are predefined voices in dozens of languages and accents, plus lifelike neural ones.
[600ms]
[intrigued] You can even create a custom brand voice.

## Step 7 · Speech-Capable Agents

[excited] Chain the two together, and an agent becomes a true voice partner.
[600ms]
[confident] Speech to text captures what the user says, the agent reasons over it,
[600ms]
[impressed] and text to speech says the answer out loud.

## Step 8 · Speech-to-Speech Scenarios

[optimistic] Once an agent can listen and talk, new experiences open up:
[600ms]
[confident] hands-free help while you drive, or real-time translation between two languages.
[600ms]
[encouraging] Voice removes the keyboard entirely.

## Step 9 · Voice Live

[serious] Building a voice agent by hand means stitching together speech-to-text, reasoning, and text-to-speech, all kept low-latency.
[600ms]
[confident] Voice Live combines all three into one Azure-managed service —
[600ms]
[impressed] fluid, real-time voice conversations, no plumbing to wire up.

## Step 10 · How It Fits Together

[calm] It all layers together cleanly.
[600ms]
[confident] Azure AI Speech is the ears and the mouth; your agent logic makes the decisions;
[600ms]
[reassuring] and Foundry tools or MCP servers expose speech as capabilities the agent can call on demand.

## Step 11 · Get Started

[encouraging] So here's how to begin.
[600ms]
[confident] Create an Azure AI Speech resource, try out the different voices right in the Foundry portal, then call speech to text and text to speech from your own app.
[600ms]
[optimistic] Or connect them straight to an agent — and finally give it a real voice, so it can listen and speak back.
