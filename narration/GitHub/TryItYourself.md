# Narrator Script — GitHub · Contoso Delivery · Set Up Your Repo · EN

**Source animation:** `journeys/GitHub/TryItYourself.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · Start With an Empty Repository

[warm] Everything you have watched so far has been Contoso's repository. Let's make it yours.
[600ms]
[calm] You need a free account on github dot com, and one empty repository. Go to github dot com slash new.
[600ms]
[bright] Name it "weather map app". Leave "Add a README file" unticked — the script wants somewhere empty to work.
[600ms]
[reassuring] Write that full name down: your username, slash, weather map app. The importer is going to ask you for exactly that.

## Step 2 · Who Owns the Repository?

[warm] Before you click Create, look at that very first field. Owner.
[600ms]
[calm] Open it, and GitHub shows you every account you are allowed to create a repository under. Your own username is always there. Underneath it sits any organization you belong to.
[600ms]
[confident] So what is an organization? It is a shared account. It has its own name, its own avatar, its own page — but nobody logs into it. People sign in as themselves and join it.
[600ms]
[calm] Once they are in, you give them roles, and you group them into teams so access can be granted to ten people at once instead of ten times over. That is the whole point of it.
[600ms]
[bright] And organizations are free. You do not need a paid plan to make one.
[600ms]
[thoughtful] For this journey either choice works, so if you are on your own, just pick your personal account. A repository can always be transferred to an organization later.
[600ms]
[reassuring] One difference is worth knowing now, because you will meet it in Track It on a Board: when you create a project inside an organization, GitHub offers to import every issue from a repository for you. On a personal project, that button is not there — you turn on a workflow instead.

## Step 3 · Install the GitHub CLI

[confident] The script doesn't click anything. It talks to GitHub through `gh`, GitHub's official command-line tool.
[600ms]
[calm] On Windows: winget install, GitHub dot cli. On a Mac: brew install gh. On Debian or Ubuntu: apt install gh, once you've added GitHub's package repository.
[600ms]
[bright] If you'd rather not use a package manager, the installers are all on cli dot github dot com.
[600ms]
[reassuring] Then check it. Type `gh --version`. If a version number comes back, you're ready.

## Step 4 · Sign the CLI Into Your Account

[warm] Now let the tool act on your behalf. Type `gh auth login`.
[600ms]
[calm] It asks four quick questions. GitHub dot com. HTTPS. Yes, authenticate Git too. And then the important one — how would you like to authenticate? Choose "Login with a web browser".
[600ms]
[thoughtful] Watch what happens next, because this is the neat part. The terminal shows you a one-time code. Press Enter, your browser opens, and *the browser* asks you to type that code in.
[600ms]
[confident] Two windows, one code, and no password anywhere. When it's done the terminal simply says: logged in as you.

## Step 5 · Your Repository Is Ready

[warm] And that's the whole setup.
[600ms]
[calm] One empty repository named weather map app. The GitHub CLI installed and printing a version. And a signed-in session, with no password or token sitting on your disk.
[600ms]
[bright] From here the journey stops being a demonstration. Each explainer will ask you to do the thing on this repository, and then compare what you see with what's on screen.
[600ms]
[confident] Plan the Work hands you the script that fills this repository with all twelve work items. Track It on a Board has you build the board for them.
[600ms]
[reassuring] Keep this tab open, and go and start with Plan the Work.
