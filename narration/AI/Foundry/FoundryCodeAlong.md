# Narrator Script — Foundry · Build lightweight Foundry apps in Python

**Source animation:** [FoundryCodeAlong.html](../../../journeys/AI/Foundry/FoundryCodeAlong.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/quickstarts/get-started-code>
- <https://learn.microsoft.com/azure/developer/python/sdk/authentication/credential-chains>
- <https://learn.microsoft.com/azure/foundry/openai/how-to/responses>
- <https://learn.microsoft.com/azure/foundry/openai/audio-completions-quickstart>

---

## Step 1 · A small app, three things to start

[calm] A lightweight client is just a short Python script for Contoso Outfitters. All the data here is made up.
[600ms]
[confident] The heavy work runs in Foundry. Your code sends a request and uses the reply.
[600ms]
[curious] Microsoft Learn describes the Foundry SDK as a thin client over the project APIs. This lesson uses the Azure AI Projects two point x package.

## Step 2 · Set up and sign in

[calm] Run az login once and install the package. Then let DefaultAzureCredential find your identity.
[600ms]
[confident] It's a chain. It tries sign-in sources in order, such as environment settings, a managed identity on Azure, or your Azure command line sign-in.
[600ms]
[reassuring] That works locally and in production, and no key ever goes into the code.

## Step 3 · Chat with a model

[curious] Create the project client, then ask it for an OpenAI client.
[600ms]
[confident] Send a prompt with the responses create call and print the reply.
[600ms]
[serious] In the model argument, use the name of your own model deployment. That's the same call the Learn quickstart uses.

## Step 4 · Analyze text

[curious] The Azure Language client reads a customer review and returns its sentiment, key phrases and personal data, one method call each.
[600ms]
[calm] Signing in with Microsoft Entra ID needs an endpoint with a custom subdomain.
[600ms]
[concerned] Learn lists sentiment analysis and key phrase extraction among features scheduled to retire, while personal data detection continues. Check the current Learn page before a new project.

## Step 5 · Speak and transcribe

[calm] The Azure Speech client turns text into an audio file, then reads that audio back into text.
[600ms]
[curious] Both directions share one speech configuration. Learn builds it from a key and an endpoint kept in environment variables.
[600ms]
[confident] Recognizing once handles a single utterance, which lasts up to thirty seconds or until silence.

## Step 6 · Ask about an image

[curious] A model deployment that accepts images can answer questions about them.
[600ms]
[confident] Send the picture and your question together in one message.
[600ms]
[calm] Learn lists three ways to supply the image: a public URL, a Base64 data URI, or a file ID from the Files API. Use a vision-enabled deployment.

## Step 7 · Send a spoken prompt

[curious] An audio-enabled model takes the recording itself as input. There's no separate transcription step before the answer.
[600ms]
[calm] The Learn quickstart uses chat completions with text and audio modalities, and a Base64-encoded WAV file as the input audio.
[600ms]
[serious] Model availability varies by region, so check the models page first.

## Step 8 · Extract from files

[curious] One Content Understanding client handles three kinds of input. Pick the prebuilt analyzer for the file type and read the structured result.
[600ms]
[confident] The invoice analyzer returns fields, the image analyzer describes a picture, and the audio analyzer transcribes with a summary.
[600ms]
[serious] Analyzers need model deployments set up in your Foundry resource first. The Learn README lists which models each one needs.

## Step 9 · Call an agent

[calm] The agent already lives in your project, with its instructions and model.
[600ms]
[confident] The client only needs its name, a conversation and a message. You get an OpenAI client bound to that agent.
[600ms]
[impressed] The conversation keeps the history across turns, so follow-up questions just work.

## Step 10 · Handle errors and clean up

[serious] Catch the errors you can act on. Learn advises not retrying on four hundred, four oh one, four oh three or four oh four.
[600ms]
[calm] Consider a retry with backoff for four twenty-nine and for server errors. A four oh three means a missing permission, so sign in with Entra ID instead of keys, and delete what you created.
[600ms]
[proud] These six clients are the hands-on skills in the A I nine oh one study guide.
