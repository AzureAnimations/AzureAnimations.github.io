# Narrator Script — GitHub · Contoso Delivery · Set Up Your Repo · EN

**Source animation:** `journeys/GitHub/TryItYourself.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · Start With an Empty Repository

[warm] Everything so far has been Contoso's repository. Let's make it yours.
[500ms]
[calm] You need a free account and one empty repository. Go to github dot com slash new, and name it "weather map app". Leave "Add a README file" unticked — the script wants somewhere empty to work.
[500ms]
[reassuring] Write the full name down: your username, slash, weather map app. The importer asks for exactly that.

## Step 2 · Who Owns the Repository?

[warm] Before you click Create, look at the very first field. Owner.
[500ms]
[calm] Your own username is always there. Underneath sits any organization you belong to — a shared account that nobody logs into. People sign in as themselves and join it, then get roles and teams, so access is granted to ten people at once.
[500ms]
[bright] Organizations are free, and either choice works here — on your own, pick your personal account. One difference matters later: in an organization, a new project offers to import every issue for you. On a personal project, that button is not there.

## Step 3 · Install the GitHub CLI

[confident] The script doesn't click anything. It talks to GitHub through `gh`, the official command-line tool.
[500ms]
[calm] On Windows, winget install GitHub dot cli. On a Mac, brew install gh. On Ubuntu, apt install gh. Or take the installer from cli dot github dot com.
[500ms]
[reassuring] Then check it. Type `gh --version`. A version number coming back means you're ready.

## Step 4 · Sign the CLI Into Your Account

[warm] Now let the tool act on your behalf. Type `gh auth login`.
[500ms]
[calm] Four quick questions: GitHub dot com, HTTPS, yes authenticate Git too — and then the important one. Choose "Login with a web browser".
[500ms]
[thoughtful] Here is the neat part. The terminal shows a one-time code, your browser opens, and *the browser* asks you to type it in. Two windows, one code, and no password anywhere.

## Step 5 · Your Repository Is Ready

[warm] That's the whole setup: an empty repository, the CLI installed, and a signed-in session with no password sitting on your disk.
[500ms]
[bright] From here the journey stops being a demonstration. Each explainer asks you to do the thing on your own repository, then compare it with what's on screen.
[500ms]
[reassuring] Go and start with Plan the Work — it hands you the script that fills this repository with all twelve work items.
