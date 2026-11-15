# Narrator Script — Monitor · Application Insights and OpenTelemetry

**Source animation:** [AppInsightsAndOtel.html](../../journeys/Monitor/AppInsightsAndOtel.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/app/opentelemetry-sampling>
- <https://learn.microsoft.com/azure/azure-monitor/app/opentelemetry-enable>
- <https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview>

---

## Step 1 · A slow checkout across five services

[calm] A Contoso shopper taps Pay, and the request travels through five different services.
[600ms]
[concerned] It takes two point four seconds, which is slow, yet every service looks healthy when you check it alone.
[600ms]
[curious] So where did the time go? That's the question we'll follow through this whole lesson, using this one checkout request.

## Step 2 · Three signals, one trace ID

[calm] Telemetry comes in three kinds. Traces follow a single request, metrics count what happens over time, and logs record what the code said.
[600ms]
[curious] Alone, each one is just a pile of data. A shared trace ID is what lets you hop from a trace to its logs.
[600ms]
[impressed] That correlation turns three piles into one story, because the ID on a span matches the ID on its log lines.

## Step 3 · The trace ID travels with the request

[calm] Follow one path through the trace. Each service adds its own span, then passes the trace context along in the traceparent header.
[600ms]
[confident] The trace ID stays the same, while the parent ID changes at every hop. That's how the pieces stay linked.
[600ms]
[reassuring] The header comes from the W three C Trace Context standard, and OpenTelemetry libraries read and write it for you.

## Step 4 · Spans become a timeline

[calm] A span is one timed operation. It has a start, a duration, and a parent.
[600ms]
[curious] Line the spans of one trace up on a time axis, and you get a waterfall. Nesting shows who called whom.
[600ms]
[confident] A parent span lasts at least as long as the children it waits for, so slow children make slow parents.

## Step 5 · OpenTelemetry: instrument once, export anywhere

[calm] OpenTelemetry is a vendor-neutral standard. Instrumentation creates the telemetry, and the SDK processes it.
[600ms]
[confident] An exporter then sends it to a backend, such as Application Insights.
[600ms]
[optimistic] Because the format is a standard, changing the backend means changing the exporter. You don't have to instrument the app again.

## Step 6 · Auto-instrument first, add manual spans

[calm] Start with automatic instrumentation. Libraries for HTTP, databases, and messaging already create spans for you.
[600ms]
[confident] Add manual spans or attributes only for the steps that are truly yours, like a pricing rule in the checkout code.
[600ms]
[serious] A distro bundles the setup for you. Just don't initialize two distros in the same app.

## Step 7 · Connect the app, land the data

[calm] Application Insights is the Azure Monitor feature for application performance monitoring.
[600ms]
[confident] A connection string tells your app where to send its telemetry. Application Insights then stores that data in a Log Analytics workspace.
[600ms]
[curious] Because the data lands in a workspace, you can query it with KQL, which has its own journey.

## Step 8 · Application map: where is the trouble?

[curious] The application map draws every component by its cloud role name, with the calls between them.
[600ms]
[calm] Health shows at a glance, so a slow or failing node stands out from the rest.
[600ms]
[confident] Start here to narrow five services down to one, then select that node to dig into its failures or its performance.

## Step 9 · Read the trace: end-to-end transaction

[calm] Search finds the transaction you care about. Open it, and the end-to-end view lays the spans out as a Gantt chart.
[600ms]
[curious] Select any span bar, and you see what that operation tells you: its duration, its dependency call, or its exception.
[600ms]
[impressed] Now the two point four seconds has a culprit, because you can see which span is the long one.

## Step 10 · Probe from outside, watch live

[calm] An availability test calls your endpoint from several locations. It alerts you when the endpoint fails or slows down.
[600ms]
[confident] Standard tests are the current choice, and they replace the deprecated URL ping tests.
[600ms]
[curious] Live metrics shows what's happening right now. That data isn't kept, because it's only streamed while the pane is open.

## Step 11 · Sampling keeps whole traces, not every trace

[calm] Sampling trims how much telemetry you send, so cost stays in check.
[600ms]
[confident] The Application Insights sampler keeps or drops a whole trace together, so every trace you keep stays complete.
[600ms]
[serious] Fixed-rate sampling keeps a percentage, and rate-limited sampling caps traces per second. Metrics aren't sampled, so alert on them.

## Step 12 · All in one: follow the request

[calm] Back to the slow checkout. Instrument the services with OpenTelemetry, and send the telemetry to Application Insights.
[600ms]
[confident] Then read the application map to find the troubled service, and open the transaction to find the slow span.
[600ms]
[proud] That's how you see where a slow request spent its time, one request at a time.
