# Git, GitHub and the Plans — Narration

Source animation: `journeys/DevOps/GitHub/GitAndGitHub.html`

One block per step, paired 1:1 with `STEPS[]`. `[NNNms]` are pauses.

---

## Step 1 · What Is Git?

[measured]
Git is a distributed version control system. It records the history of your files.
[500ms]
And "distributed" is the word that matters. When you clone a repository, you don't get a checkout of the server — you get a complete copy, every commit, all the way back to the first one.
[600ms]
That's why Git works on a plane. Committing, branching, looking at history: none of it needs a network.
[400ms]
What Git is not: a website, a company, or the place your pull requests live.

---

## Step 2 · How Git Moves Your Work

[measured]
A change travels through four places, and three of them are on your laptop.
[500ms]
You edit files in the working directory. You choose what goes in next with git add, which moves it to the staging area. You snapshot it with git commit, into your local repository.
[600ms]
Only the fourth place is somewhere else — the remote repository, which you reach with git push.
[400ms]
So the network only enters at the very last step. Everything before that is yours, offline.

---

## Step 3 · What Is GitHub?

[measured]
GitHub hosts that remote repository. That part is just Git.
[500ms]
But then it adds everything a team needs that Git itself has no idea about. Pull requests and code review. Issues, milestones and Projects. Actions for CI/CD. Dependabot, code scanning, secret protection.
[600ms]
Git is the engine. GitHub is the car built around it.
[400ms]
And it's not the only one — Azure Repos, GitLab and Bitbucket all host Git too.

---

## Step 4 · Git Is Not GitHub

[measured]
These two names get used interchangeably, and they shouldn't be.
[500ms]
Git is a program you install. It runs locally, it's open source, it's free, and it needs no account. It knows about commits and branches.
[600ms]
GitHub is a website and a hosted service. It runs in the cloud, it needs an account, and it knows about people, teams and process.
[500ms]
Here's the quick test: if it still works with the wifi off, it's Git.
[400ms]
You can use Git with no GitHub at all. You cannot use GitHub without Git.

---

## Step 5 · Three Kinds of Account

[measured]
Before you can pick a plan, you need to know what you're paying for — and there are three kinds of account.
[500ms]
Your personal account is your username. It owns its own repositories, and it joins organizations.
[400ms]
An organization is shared by a team. It owns repositories, it contains teams, and it carries roles and permissions.
[500ms]
An enterprise account sits above many organizations for central policy and billing.
[600ms]
And note where repositories actually live: a personal account or an organization owns them — never an enterprise directly.

---

## Step 6 · The Plans

[measured]
Four plans: Free, Pro, Team and Enterprise.
[500ms]
Here's the part people miss. Public repositories are unlimited and fully featured on every single plan. What you're paying for is private repositories, quotas, and control.
[600ms]
Free gives you two thousand Actions minutes a month. Pro and Team, three thousand. Enterprise Cloud, fifty thousand — plus SAML single sign-on and a ninety-nine point nine percent uptime SLA.
[400ms]
And those minutes are only consumed by private repositories. Public repos run on standard hosted runners for free.

---

## Step 7 · Which Plan Do I Need?

[warm]
So start at the top and stop at the first line that sounds like you.
[500ms]
If your work is open source, or your private repos only need basic collaboration, stay on Free. Most people genuinely stop here.
[500ms]
Move to Pro when you want protected branches and required reviews on your own private repositories. Move to Team when several people need shared ownership and review policy. Move to Enterprise when you need SAML, SCIM, audit streaming, or many organizations under one roof.
[600ms]
One thing worth knowing: Advanced Security — Code Security and Secret Protection — can be purchased on Team. It isn't Enterprise-only.

---

## Step 8 · Git, GitHub, and What You Pay For

[warm]
So: Git versions your code, on your machine, offline and free.
[500ms]
GitHub hosts it and wraps a team process around it — review, planning, automation, security.
[500ms]
And the plan you choose decides how much of that process you get on private code, because on public code you already get all of it.
[600ms]
Next in this journey: the features that process is actually built from — organizations, teams, repositories, issues, milestones and Projects.
