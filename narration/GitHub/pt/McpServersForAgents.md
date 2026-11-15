# Narrator Script — GitHub · MCP Servers for Agents: GitHub Remote, Registries and Allow Lists

**Source animation:** [McpServersForAgents.html](../../../journeys/GitHub/McpServersForAgents.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>
- <https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp>

---

## Step 1 · The Agent Cannot Reach Your Tools

[calm] O agente de código da Contoso só sabe o que está no chat e nos arquivos abertos.
[600ms]
[concerned] Logs de build, issues e documentação ficam em outras ferramentas, que ele não alcança. Sem uma conexão padrão, cada ferramenta precisa de um link personalizado, ou alguém cola o contexto na mão.
[600ms]
[curious] O que se precisa é de uma forma padrão de conectar um agente a ferramentas.

## Step 2 · What MCP Is: Client, Server, Tools

[curious] Esse padrão é o Model Context Protocol, um padrão aberto para conectar apps de AI a ferramentas.
[600ms]
[confident] O host é o app de AI, como uma IDE com um agente. Ele cria um cliente para cada servidor MCP a que se conecta.
[600ms]
[calm] Cada servidor é um programa que lista as ferramentas que oferece. Os nomes das ferramentas aqui são só exemplos.

## Step 3 · Add an MCP Server to an Agent

[calm] Para adicionar um servidor, basta uma entrada no seu editor, com o nome e a URL do servidor.
[600ms]
[confident] No Visual Studio Code, essa entrada vai no arquivo de configuração do MCP, e o comando list servers mostra o que está configurado. Outros editores usam uma entrada parecida.
[600ms]
[reassuring] Inicie o servidor e confirme que você confia nele, e as ferramentas dele aparecem para o agente.

## Step 4 · The GitHub Remote MCP Server

[curious] O GitHub hospeda um servidor MCP para você, então não há nada para instalar. Já o servidor local roda na sua própria máquina.
[600ms]
[confident] Conecte-se à URL dele e faça login. O padrão é OAuth, ou você pode usar um personal access token.
[600ms]
[encouraging] Depois, escolha só os conjuntos de ferramentas de que o agente precisa, em vez de todos os grupos.

## Step 5 · Read-Only Versus Write

[calm] Algumas ferramentas leem e outras escrevem. Ler é consultar arquivos, issues e pull requests. Escrever é criar ou alterar essas coisas.
[600ms]
[curious] Mude a chave e veja. No modo somente leitura, as ferramentas que alteram algo nem são oferecidas.
[600ms]
[confident] Você ativa isso com um caminho somente leitura na URL ou com um cabeçalho. Um agente só pode chamar as ferramentas que o servidor oferece.

## Step 6 · Authentication and Token Scope

[calm] O agente age com o seu login ou com um token.
[600ms]
[serious] Os escopos que ele tem são o máximo que uma chamada de ferramenta errada ou enganada consegue fazer. Por isso, conceda só o que a tarefa precisa.
[600ms]
[reassuring] O servidor padrão do GitHub para o agente de nuvem usa um token somente leitura, com escopo especial para o repositório atual. Os nomes de escopo na tela são só ilustrativos.

## Step 7 · A Registry of Approved Servers

[curious] Agora, a visão da organização. Um registro é um catálogo dos servidores MCP que a sua organização aprova.
[600ms]
[confident] Os desenvolvedores encontram os servidores ali, em vez de procurar na internet. É um conjunto de endpoints HTTPS que seguem a especificação de registro do MCP.
[600ms]
[reflective] Dá para hospedar um por conta própria ou usar o Azure API Center. Os registros estão em prévia pública, e os nomes dos servidores aqui são fictícios.

## Step 8 · Configure the Registry

[calm] Um proprietário da organização ativa o MCP, aponta o GitHub para o endereço do registro e escolhe a restrição.
[600ms]
[confident] Você pode permitir todos os servidores ou só os do registro. Em uma organização, essas configurações ficam em Copilot policies. Os proprietários da empresa encontram em AI controls.
[600ms]
[serious] O modo só do registro compara pelo nome ou ID do servidor, então não é um bloqueio rígido.

## Step 9 · Allow Lists: Only Approved Servers

[calm] Uma lista de permissão nomeia os servidores que podem rodar, por nome, URL ou comando de inicialização.
[600ms]
[serious] Tudo o que não corresponde é bloqueado, e uma entrada de negação que corresponda sempre prevalece.
[600ms]
[confident] As listas ficam no arquivo de configurações gerenciadas da sua empresa. Elas valem para as configurações de usuário e de repositório, mas não para servidores dentro dos perfis de agente personalizado do repositório.

## Step 10 · See a Blocked Server

[concerned] Maya adiciona um servidor que não está na lista, então ele não inicia.
[600ms]
[confident] A correção está do lado da política. Um proprietário adiciona o servidor ao registro ou à lista de permissão, e aí ela recarrega.
[600ms]
[encouraging] Para investigar, confira se MCP servers in Copilot está habilitado, depois o registro ou a lista de permissão, e rode o comando list servers.

## Step 11 · Recap: A Safe-by-Default MCP Checklist

[calm] Adicione servidores de propósito, com uma entrada e uma verificação de confiança.
[600ms]
[confident] Limite o acesso com conjuntos de ferramentas, modo somente leitura e um token restrito. Depois, governe tudo com um registro e uma lista de permissão.
[600ms]
[proud] Isso cobre as habilidades do G H 600 para configurar servidores MCP. Lembre-se: os registros estão em prévia pública, enquanto as listas de permissão são o controle de disponibilidade geral.
