# Narrator Script — GitHub · MCP Servers for Agents: GitHub Remote, Registries and Allow Lists

**Source animation:** [McpServersForAgents.html](../../journeys/GitHub/McpServersForAgents.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>
- <https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp>

---

## Step 1 · The Agent Cannot Reach Your Tools

[calm] Contoso's coding agent only knows what's in its chat and the open files.
[600ms]
[concerned] Build logs, issues and docs live in other tools it can't reach. Without a standard connection, every tool needs its own custom link, or someone pastes context by hand.
[600ms]
[curious] What's needed is one standard way to connect an agent to tools.

## Step 2 · What MCP Is: Client, Server, Tools

[curious] That standard is the Model Context Protocol, an open standard for connecting AI apps to tools.
[600ms]
[confident] The host is the AI app, such as an IDE with an agent. It creates one client for each MCP server it connects to.
[600ms]
[calm] Each server is a program that lists the tools it offers. The tool names here are just examples.

## Step 3 · Add an MCP Server to an Agent

[calm] Adding a server takes one entry in your editor. It gives the server a name and a URL.
[600ms]
[confident] In Visual Studio Code, that entry goes in the MCP configuration file, and the list servers command shows what's set up. Other editors use a similar entry.
[600ms]
[reassuring] Start the server and confirm you trust it, and its tools appear for the agent.

## Step 4 · The GitHub Remote MCP Server

[curious] GitHub hosts an MCP server for you, so there's nothing to install. The local server runs on your own machine instead.
[600ms]
[confident] Connect to its URL and sign in. OAuth is the default, or you can use a personal access token.
[600ms]
[encouraging] Then pick only the toolsets the agent needs, rather than every group of tools.

## Step 5 · Read-Only Versus Write

[calm] Some tools read and some write. Reading looks up files, issues and pull requests. Writing creates or changes them.
[600ms]
[curious] Flip the switch and watch. In read-only mode, the tools that change things aren't offered at all.
[600ms]
[confident] You turn it on with a read-only path on the URL or a header. An agent can only call tools the server offers.

## Step 6 · Authentication and Token Scope

[calm] The agent acts with your sign-in or a token.
[600ms]
[serious] The scopes it holds are the most that a wrong or tricked tool call can do, so grant only what the task needs.
[600ms]
[reassuring] The cloud agent's default GitHub server uses a specially scoped, read-only token for the current repository. The scope names on screen are illustrative.

## Step 7 · A Registry of Approved Servers

[curious] Now the organization's view. A registry is a catalogue of the MCP servers your organization approves.
[600ms]
[confident] Developers find servers there, not by searching the internet. It's a set of HTTPS endpoints that follow the MCP registry specification.
[600ms]
[reflective] You can self-host one, or use Azure API Center. Registries are in public preview, and the server names here are fictional.

## Step 8 · Configure the Registry

[calm] An organization owner turns MCP on, points GitHub at the registry address, and chooses the restriction.
[600ms]
[confident] You can allow all servers, or allow registry servers only. In an organization, the settings are under Copilot policies. Enterprise owners find them under AI controls.
[600ms]
[serious] Registry only matches by server name or ID, so it isn't a hard block.

## Step 9 · Allow Lists: Only Approved Servers

[calm] An allow list names the servers that may run, by name, URL or start command.
[600ms]
[serious] Anything that doesn't match is blocked, and a matching deny entry always wins.
[600ms]
[confident] The lists live in your enterprise's managed settings file. They cover user and repository settings, but not servers inside repository custom agent profiles.

## Step 10 · See a Blocked Server

[concerned] Maya adds a server that isn't on the list, so it won't start.
[600ms]
[confident] The fix is on the policy side. An owner adds it to the registry or the allow list, and then she reloads.
[600ms]
[encouraging] To troubleshoot, check that MCP servers in Copilot is enabled, then the registry or allow list, then run the list servers command.

## Step 11 · Recap: A Safe-by-Default MCP Checklist

[calm] Add servers on purpose, with an entry and a trust check.
[600ms]
[confident] Limit them with toolsets, read-only mode and a narrow token. Then govern them with a registry and an allow list.
[600ms]
[proud] That covers the G H six hundred skills for configuring MCP servers. Remember, registries are in public preview, while allow lists are the generally available control.
