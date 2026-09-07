# Narrator Script — GitHub · Contoso Delivery · Why Contoso Is Building This · EN

**Source animation:** `journeys/GitHub/WhyContoso.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · When It Rains, Contoso Loses Money

[warm] Let's start with a problem that has nothing to do with software.
[600ms]
[calm] Contoso is a retailer. When heavy rain settles over a city, shoppers stay home. Foot traffic falls away, and the till follows it down.
[600ms]
[thoughtful] Look at those bars. The pale outline is the day Contoso expected. The solid block is the day it actually got. Nothing was wrong with the products, and nothing was wrong with the prices — it simply rained.

## Step 2 · The Same Rain, Two Different Days

[confident] Here's the insight the whole project rests on.
[600ms]
[calm] The rain is a signal. Contoso can do one of two things with it.
[600ms]
[serious] Do nothing, and the visit is lost — the stock sits unsold, and the day gets written off.
[600ms]
[bright] Or act on it. Meet the customer where they already are, which on a wet afternoon is online. Now the same weather that emptied the shop is matched to the day it actually created.

## Step 3 · Sell What the Weather Calls For

[confident] Acting on it means something very specific.
[600ms]
[calm] Each weather condition maps to inventory that suddenly makes sense to buy. Rain brings rain jackets, umbrellas, waterproof footwear. A storm brings heavy outerwear — and home delivery. A cold snap brings knitwear and thermals.
[600ms]
[thoughtful] Notice the right-hand column: *what every channel should be promoting*. Every channel. Hold on to that word — it becomes the whole architectural problem in two steps' time.

## Step 4 · Storm Day Free Shipping

[bright] And when the forecast turns severe, Contoso can go further.
[600ms]
[calm] Azure Maps reports a storm closing in over the city. That single fact fires a Storm Day promotion — the banner changes, the right products surface, and free shipping removes the last reason to wait.
[600ms]
[confident] Watch the order carefully: the storm grows first, and only then does the offer appear. The weather causes the campaign. Nobody had to notice the forecast and publish anything by hand.

## Step 5 · Three Channels, Three Sets of Problems

[serious] So far, so good. Now here is how teams get this wrong.
[600ms]
[calm] Contoso has three channels — the website, the mobile app, and marketing. The obvious move is to let each one call Azure Maps directly.
[600ms]
[concerned] Look at what that costs. Three copies of the subscription key, shipped out to three places — including a browser, where a key is not a secret at all. Three different ways of validating input. Three teams interpreting the same forecast slightly differently.
[600ms]
[thoughtful] Three channels, three sets of problems — and a fourth appears the moment Contoso builds a fourth app.

## Step 6 · One API, One Source of Truth

[confident] So Contoso builds one thing instead.
[600ms]
[calm] A single Node.js service — the Contoso Weather API — sits between the channels and Azure Maps. The channels no longer hold a key. They just ask this service a question.
[600ms]
[bright] And the service does the four jobs exactly once: it keeps the subscription key server-side, it validates the input, it normalizes the response into one shape, and it decides what a forecast *means* for the business.
[600ms]
[reassuring] It's the same picture as the step before — the channels haven't changed. What changed is that the red wires became one blue one, and the keys disappeared.

## Step 7 · What We Are Actually Building

[warm] Before we plan any of it, let's look at the thing itself.
[600ms]
[calm] It is two screens. A dashboard called "Weather around the world", where the cities are grouped by country — Sydney, twenty-four degrees. Singapore, thirty and raining. Bengaluru, twenty-seven.
[600ms]
[bright] Click a city and you land on its detail view: a map with the marker on it, and the fuller reading. Light rain. Feels like thirty-three. Twenty-seven to thirty-one. Humidity seventy-eight per cent.
[600ms]
[confident] That's the whole product. No sign-in, no database, no payments — all of that is explicitly out of scope.
[600ms]
[reassuring] And that's the point. Everything that follows — the epics, the board, the branches, the pipeline — exists to deliver *these two screens* safely. If you want the detail, the full requirements document is on this step as a download.

## Step 8 · Weather In, Revenue Out

[warm] Let's put the whole story in one line.
[600ms]
[calm] Azure Maps reports the weather. The Contoso API reads it, and decides what it means. Every channel gets that same answer. And the wet day becomes a selling day.
[600ms]
[confident] That's the *why*. Everything from here is the *how* — how the team breaks this into work, tracks it, branches for it, and ships it safely.
