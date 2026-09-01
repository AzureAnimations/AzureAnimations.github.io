# Narrator Script — Journey 08 · Extracting Insights with Content Understanding

**Source animation:** `static/v2/AI/Foundry/AgentContentUnderstanding.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`),
paralinguistics (e.g. `[laughter]`), and `[NNNms]` pause markers (e.g. `[600ms]`).
One block per animation step.

---

## Step 1 · Why AI-Powered Extraction?

[reflective] So much valuable business information is locked away —
[600ms]
[serious] buried in documents, images, audio, and video.
[600ms]
[confident] Azure Content Understanding uses AI to unlock it, turning that unstructured content into clean, machine-readable data.

## Step 2 · In the Real World

[optimistic] And the uses are everywhere.
[600ms]
[confident] Anywhere people read forms, listen to recorded calls, or watch footage by hand, Content Understanding extracts the key facts automatically —
[600ms]
[reassuring] consistently, and at superhuman scale.

## Step 3 · How It Works

[confident] Under the hood, it follows a simple, model-driven flow.
[600ms]
[calm] You submit your content; the AI analyzes it using OCR, speech recognition, and language understanding together;
[600ms]
[impressed] and the service hands back neat, structured results — ready for your app to use.

## Step 4 · Define a Schema

[intrigued] The magic starts with a schema.
[600ms]
[confident] You describe exactly the fields you want and how they're structured.
[600ms]
[impressed] Unlike plain OCR, a schema captures meaning — so "total" and "due date" come back as real, labeled fields.

## Step 5 · Analyzers Apply Your Schema

[confident] An analyzer puts your schema to work.
[600ms]
[calm] It takes each input, applies the AI analysis, and produces structured results.
[600ms]
[reassuring] Reusing the same schema every time gives you consistent, predictable JSON.

## Step 6 · Try It in the Portal

[confident] Want to see it working before you write any code?
[800ms]
[reassuring] The Foundry portal lets you upload a document, audio, or video and run an analyzer completely visually.
[600ms]
[impressed] And for the most common documents, you don't even need to build your own schema.
[600ms]
[confident] There are prebuilt models ready to go: drop in an invoice and it pulls the vendor, the date, and the total; hand it a passport and it reads the name, number, and expiry date — whatever the common format, we've got you covered.
[600ms]
[calm] You can review the extracted fields side by side with the source, check the transcripts, the layout, and the raw JSON, and tweak your schema until it's right — all in the browser, before you write a single line of code.

## Step 7 · Audio & Video

[impressed] And it's not just documents —
[600ms]
[confident] Content Understanding analyzes audio and video too.
[600ms]
[calm] Define a schema of the insights you want, and it returns transcripts, summaries, and those exact fields.

## Step 8 · Build with the API & SDK

[encouraging] Once your analyzer works in the portal, it's ready for production.
[600ms]
[confident] Call it from your own code with the Content Understanding REST API or the Python SDK, which handle the asynchronous analysis and the polling for you.
[600ms]
[optimistic] Clean, structured JSON flows straight back into your app — or straight to your agent as a tool.
