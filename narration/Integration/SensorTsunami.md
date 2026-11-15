# Narrator Script — Episode 3 · The Sensor Tsunami

**Source animation:** `journeys/Integration/SensorTsunami.html`

**Script status:** Authored voiceover.

Six spoken blocks — one per step.

---

## Step 1 · The telemetry flood drowns the queue

[curious] Contoso lights up smart shelves, checkout lanes, and the web clickstream.
[500ms]
[serious] Every reading is tiny. But there are a hundred thousand of them every second, and the order queue tops out around two thousand messages a second. The result is throttling, dropped readings, and dashboards that go blind.
[600ms]
[calm] A queue is priced and shaped for work items. Telemetry is not work — it is a firehose of facts, and each one costs a round trip you can never afford at this rate.

## Step 2 · Stop delivering. Start recording.

[optimistic] So Maya changes the shape of the problem.
[500ms]
[confident] A broker hands a message to one worker and deletes it. A log appends every event and lets any number of readers move through at their own speed.
[500ms]
[calm] That is the real dividing line in Azure messaging. Brokered services remove what they deliver. Streamed services keep it and hand out a bookmark. A refund is a message. A shelf reading is an event.

## Step 3 · Partitions turn one pipe into parallel lanes

[calm] An event hub is an append-only log, split into partitions.
[500ms]
[confident] The partition key decides the lane, and inside a lane the order is exact — so every reading from shelf A fourteen stays in sequence. Standard gives you one to thirty-two partitions, events up to a megabyte, and speaks AMQP, Kafka and HTTPS.
[600ms]
[serious] Choose that key for ordering and for spread. A store id keeps one store's events together, but a key that is too popular creates a hot partition while the others sit idle.

## Step 4 · Offsets and consumer groups: read it twice

[calm] Consumers keep independent positions. In this diagram, realtime is at offset forty-two while batch is at thirty-six: six positions behind. Reading does not delete the events. A checkpoint records where a reader can resume after restarting. Save checkpoints deliberately and make reprocessing safe, because an event may be read again.

## Step 5 · Capture archives the stream without consumer code

[calm] Capture archives the stream without consumer code, not without cost. It writes Avro batches to Blob Storage or Data Lake when the time or size window is reached. Capture is charged separately on Standard and included on Premium and Dedicated. Destination storage is still billed. Live consumers keep their egress capacity.

## Step 6 · Episode 3: Event Hubs is the firehose

[confident] When the volume is enormous, the payload is tiny, and more than one system wants the same data, you want a log — not a queue.
[500ms]
[calm] Events are recorded, never removed on read. Partitions give you parallel lanes with exact ordering inside each one. Consumer groups give every team its own view and its own offset. Capture lands the archive automatically.
[600ms]
[encouraging] Event Hubs answers "what is happening, at scale". The next episode answers a completely different question: something changed — who needs to know?
