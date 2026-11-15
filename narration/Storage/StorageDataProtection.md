# Narrator Script — Azure Storage · Level up · Data Protection

**Source animation:** `static/v2/Storage/StorageDataProtection.html`

Tags in `[brackets]` are delivery cues — speaking styles, paralinguistics, and `[NNNms]` pauses.
One block per animation step, in on-screen order.

---

## Step 1 · goal

[confident] Accidents happen, and so do attacks. So how do we protect data from deletes, overwrites, and ransomware?
[600ms]
[calm] With a safety-net stack — a set of independent layers, each guarding against a different kind of loss.
[700ms]
[reassuring] They're independent, so you turn on exactly the ones your data needs.

## Step 2 · encrypt

[confident] The base layer is already on. Every blob is encrypted at rest, automatically, with Storage Service Encryption.
[600ms]
[calm] You don't lift a finger — but you can bring your own keys in Key Vault if a policy or a regulator requires it.
[700ms]
[reassuring] Want more? Add infrastructure encryption for a second, independent layer of encryption underneath.

## Step 3 · softdelete

[confident] Now the everyday hero: soft delete. With it on, a deleted blob isn't really gone.
[600ms]
[calm] It's kept, and recoverable, for a retention window you choose — anywhere from one to three hundred sixty-five days.
[700ms]
[reassuring] And it catches overwrites too — the previous state is preserved, so a bad save is just an undo away.

## Step 4 · versioning

[confident] Go a step further with blob versioning. Now every write automatically keeps the previous copy.
[600ms]
[calm] You get a full, automatic history — perfect for audit, and for rolling back any single blob.
[700ms]
[serious] Versions do cost storage, so pair versioning with a lifecycle rule that ages old versions down or out.

## Step 5 · immutable

[confident] For compliance, lock it down completely with immutability — a write-once, read-many state.
[600ms]
[calm] Apply a time-based retention policy or a legal hold, and no one — not even an administrator — can modify or delete the blob until the policy lifts.
[700ms]
[serious] One trade-off to note: immutability is incompatible with point-in-time restore, which is our next layer.

## Step 6 · restore

[confident] Point-in-time restore lets you rewind. It rolls your block blobs back to an earlier moment — before that bad deployment or bulk mistake.
[600ms]
[calm] It builds on the layers you've already set: soft delete, versioning, and the change feed working together.
[700ms]
[reassuring] Just remember it restores block-blob operations, and the restore point sits at least a day back, within your retention.

## Step 7 · recap

[proud] There's the whole picture: encrypted at rest by default, then wrapped in recovery layers — soft delete, versioning, and point-in-time restore — with immutability for compliance.
[700ms]
[encouraging] Turn on the layers that match your risk, and a delete or an attack becomes a recoverable event, not a disaster.

## Step 8 · spec

[confident] A little deeper. The recovery stack is richest for blobs, where all of these features line up.
[600ms]
[calm] Soft delete guards deletes and overwrites; versioning keeps history; the change feed records every change; and point-in-time restore ties them together.
[700ms]
[reassuring] The one rule to carry with you — a point-in-time restore target has to be at least one day old, and inside your retention window.
