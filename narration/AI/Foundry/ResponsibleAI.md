# The Six Pillars of Responsible AI — Narration

Source animation: `journeys/AI/Foundry/ResponsibleAI.html`

One block per step, paired 1:1 with `STEPS[]`. Delivery cues in `[tags]`; `[NNNms]` are pauses.

---

## Step 1 · Six Pillars, One Question

[warm]
AI doesn't just suggest things any more. It decides.
[400ms]
It scores a loan application, screens a résumé, triages a patient, answers a customer — thousands of times an hour, faster than anyone can review.
[600ms]
And on the other side of every one of those decisions is a person who has to live with it.
[500ms]
Microsoft answers that with six principles. Not a checklist for the end — a set of questions you ask from the first design sketch.

---

## Step 2 · Fairness

[measured]
Fairness means similar people, in similar situations, get similar outcomes.
[500ms]
Here's the trap: bias is almost never typed into the code. It's inherited from the data.
[400ms]
Train a loan model on ten years of approvals, and if women were approved less often back then, it learns to score them lower today — even when the income and the credit history are identical.
[600ms]
So you don't assume fairness. You measure it, group by group.

---

## Step 3 · Reliability and Safety

[measured]
A reliable system behaves predictably — including on the inputs nobody planned for.
[500ms]
And this is where confidence becomes dangerous. An AI that guesses fluently is worse than one that stops.
[400ms]
Ask a support agent about a product it was never given. The safe answer isn't an invented returns policy. It's "I'm not sure" — and a handover to a human.
[500ms]
Test the edges. Fail safe, not silent.

---

## Step 4 · Privacy and Security

[measured]
An AI system should only ever use the data the person in front of it is allowed to see.
[500ms]
The failure here is quiet and severe: a model that has seen data it shouldn't can repeat it to exactly the wrong person.
[600ms]
So a good HR assistant answers "how much leave do I have left?" for you — and genuinely cannot see anyone else's record, because it runs with your permissions, not its own master key.

---

## Step 5 · Inclusiveness

[warm]
Inclusiveness asks a blunt question: who does this not work for?
[500ms]
Because if a system is built for the average user, everyone who isn't average is locked out — silently.
[400ms]
Speech recognition trained mostly on one accent misheard everyone else. Nobody designed that. It's just what happens when the test group is narrow.
[500ms]
Which means inclusiveness isn't a feature you add at the end. It shows up in who you tested with.

---

## Step 6 · Transparency

[measured]
Transparency means people can understand what the system did, and why.
[500ms]
You can't question an answer if you don't know it came from AI. You can't verify a claim that has no source.
[600ms]
So a good research assistant labels itself, cites the documents it drew from, and says plainly when a question falls outside what it was given.
[400ms]
Transparency is what makes the other five checkable.

---

## Step 7 · Accountability

[firm]
And this is the one that holds the rest up.
[500ms]
"The model decided" is not an answer. Systems don't take responsibility — people do.
[600ms]
So every deployed agent gets a named owner, an audit log of what it did and why, and a human review step before a high-impact decision reaches a customer.
[400ms]
Accountability turns the other five principles from good intentions into somebody's job.

---

## Step 8 · The Six Pillars Together

[warm]
Fairness. Reliability and safety. Privacy and security. Inclusiveness. Transparency. Accountability.
[600ms]
No single one is enough, and not one of them is optional. Together they're Microsoft's Responsible AI Standard.
[500ms]
And the timing matters as much as the list: these are design choices, made at the first architecture sketch — not a review you run the week before launch.
