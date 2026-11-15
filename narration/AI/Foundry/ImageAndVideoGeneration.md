# Narrator Script — Foundry · Image and Video Generation

**Source animation:** [ImageAndVideoGeneration.html](../../../journeys/AI/Foundry/ImageAndVideoGeneration.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/ai-foundry/openai/how-to/dall-e>
- <https://learn.microsoft.com/azure/ai-foundry/openai/concepts/video-generation>
- <https://learn.microsoft.com/azure/ai-foundry/openai/concepts/content-credentials>

---

## Step 1 · Models that read, models that make

[calm] Some models read. A vision model looks at an image and answers in text.
[600ms]
[curious] A generative image model does the reverse. It takes your words and creates a brand-new picture.
[600ms]
[confident] Contoso Outdoor is our fictional company here, and every picture is a simple drawing standing in for a model result.

## Step 2 · Noise in, image out

[curious] Many image models are diffusion models. They start from random noise and refine it, step by step, until a picture appears.
[600ms]
[calm] Your prompt guides every one of those steps, and a different random start gives a different image.
[600ms]
[reflective] Models differ in design, so treat this as the idea, not the recipe.

## Step 3 · Describe what you want

[calm] A good prompt names the subject, the style, how it's framed, and what to leave out.
[600ms]
[curious] Try the choices here, and watch the picture change with each one.
[600ms]
[serious] Constraints go inside the prompt, like no text. But a model can still add things you didn't ask for, so always review the result.

## Step 4 · Size, quality, how many

[calm] Next to the prompt, you set a few options: a size, a quality level, and how many images to ask for.
[600ms]
[curious] Watch the request change as you choose. One call can return anywhere from one to ten images.
[600ms]
[reassuring] Lower quality and square images generate faster, and some models accept custom sizes, so check what your deployment supports.

## Step 5 · Edit with a mask

[curious] To change just one part of a picture, send three things: the image, a mask that marks the area, and a prompt.
[600ms]
[calm] Everything outside the mask stays exactly as it was. Here, the pink brush stands in for the mask.
[600ms]
[confident] In the edit API, the mask is a PNG the same size as the image, and fully transparent pixels mark the area to change.

## Step 6 · Remix with image-to-image

[curious] Give the model an existing picture plus a prompt, and it creates a new take on it.
[600ms]
[calm] You can send several input images at once, up to sixteen in one edit call.
[600ms]
[reassuring] High input fidelity keeps more of the original's details, though not every model supports that setting, so check yours.

## Step 7 · From prompt to short clip

[curious] Video models turn text, an image, or an existing clip into a short video.
[600ms]
[calm] It runs as a job. You submit it, check its status, then download the result.
[600ms]
[serious] Video generation with Sora 2 is a preview feature in Foundry, so details and availability can change.

## Step 8 · Filters on the way in and out

[serious] Guardrails check the prompt before the model runs, and check the picture after it's made.
[600ms]
[calm] Unsafe requests or results are blocked, and your app gets an error back.
[600ms]
[confident] They're powered by Azure AI Content Safety, which classifies hate, sexual, violence and self-harm content, and you can configure the levels for your deployment.

## Step 9 · Show it was made by AI

[curious] Images from Azure OpenAI image models carry Content Credentials: signed metadata that says the image is AI-generated.
[600ms]
[calm] Supported models can also add an invisible watermark, which may survive even when the metadata is removed.
[600ms]
[reassuring] Content Credentials follow the open C2PA standard, so anyone can check them with a verification tool.

## Step 10 · Deploy it, try it, call it

[calm] In Foundry, you deploy an image model, try your prompts in the Images playground, then copy the generated code.
[600ms]
[confident] That code calls the same deployment from your app. No keys or real endpoints are shown here.
[600ms]
[serious] Prefer Microsoft Entra ID keyless sign-in over API keys, and expect rate limits, so retry with back-off.

## Step 11 · Create, protect, ship

[calm] Prompt and tune the options. Edit with masks and variations. Add guardrails and provenance.
[600ms]
[confident] Then deploy it all through Foundry, so your app can call it.
[600ms]
[proud] Skills measured change, so open the official study guides to confirm what the exams cover today.
