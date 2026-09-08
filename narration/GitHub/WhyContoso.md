# Narrator Script — GitHub · Contoso Delivery · Why Contoso Is Building This · EN

**Source animation:** `journeys/GitHub/WhyContoso.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · When It Rains, Contoso Loses Money

[warm] Let's start with a problem that has nothing to do with software.
[500ms]
[calm] Contoso is a retailer. When heavy rain settles over a city, shoppers stay home — foot traffic falls away, and the till follows it down.
[500ms]
[thoughtful] The pale outline is the day Contoso expected. The solid block is the day it got. Nothing was wrong with the products or the prices — it simply rained.

## Step 2 · The Same Rain, Two Different Days

[confident] Here's the insight the whole project rests on. The rain is a signal, and Contoso can do one of two things with it.
[500ms]
[serious] Do nothing, and the visit is lost — the stock sits unsold and the day is written off.
[500ms]
[bright] Or act on it, and meet the customer where they already are, which on a wet afternoon is online. The same weather that emptied the shop now matches the day it created.

## Step 3 · Sell What the Weather Calls For

[calm] Each weather condition maps to inventory that suddenly makes sense to buy. Rain brings jackets and umbrellas. A storm brings heavy outerwear — and home delivery. A cold snap brings knitwear.
[500ms]
[thoughtful] Notice the right-hand column: what *every channel* should be promoting. Hold on to that word — it becomes the whole architectural problem two steps from now.

## Step 4 · Storm Day Free Shipping

[bright] And when the forecast turns severe, Contoso can go further.
[500ms]
[calm] Azure Maps reports a storm closing in. That single fact fires a Storm Day promotion — the banner changes, the right products surface, and free shipping removes the last reason to wait.
[500ms]
[confident] Watch the order: the storm grows first, and only then does the offer appear. The weather causes the campaign. Nobody had to notice the forecast and publish anything by hand.

## Step 5 · Three Channels, Three Sets of Problems

[serious] Now here is how teams get this wrong. Contoso has three channels — website, mobile app, marketing — and the obvious move is to let each one call Azure Maps directly.
[500ms]
[concerned] Look at the cost. Three copies of the subscription key, including one in a browser, where a key is not a secret at all. Three ways of validating input. Three teams reading the same forecast slightly differently.
[500ms]
[thoughtful] Three channels, three sets of problems — and a fourth the moment Contoso builds a fourth app.

## Step 6 · One API, One Source of Truth

[confident] So Contoso builds one thing instead. A single Node.js service — the Contoso Weather API — sits between the channels and Azure Maps.
[500ms]
[bright] It does four jobs exactly once: keeps the key server-side, validates the input, normalizes the response into one shape, and decides what a forecast *means* for the business.
[500ms]
[reassuring] Same picture as before — the channels haven't changed. What changed is that the red wires became one blue one, and the keys disappeared.

## Step 7 · What We Are Actually Building

[warm] Before we plan any of it, look at the thing itself. It is two screens.
[500ms]
[calm] A dashboard — "Weather around the world" — with cities grouped by country. Click one and you land on its detail view: a map with the marker, and the fuller reading.
[500ms]
[confident] That's the whole product. No sign-in, no database, no payments — all explicitly out of scope.
[500ms]
[reassuring] And that's the point. Everything that follows exists to deliver *these two screens* safely. The full requirements document is on this step as a download.

## Step 8 · Weather In, Revenue Out

[warm] The whole story in one line.
[500ms]
[calm] Azure Maps reports the weather. The Contoso API reads it and decides what it means. Every channel gets that same answer. And the wet day becomes a selling day.
[500ms]
[confident] That's the *why*. Everything from here is the *how*.
