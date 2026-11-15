# Narrator Script — Foundry · Secure a Foundry Project: Identity, Network and Guardrails

**Source animation:** [SecureAFoundryProject.html](../../../../journeys/AI/Foundry/SecureAFoundryProject.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/concepts/authentication-authorization-foundry>
- <https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry>
- <https://learn.microsoft.com/azure/foundry/how-to/configure-private-link>
- <https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview>

---

## Step 1 · Keys in a screenshot: why keyless

[serious] Uma chave de API é um segredo estático. Se ela aparecer em uma captura de tela, em um chat ou em um repositório, qualquer pessoa que a tenha ganha acesso total.
[600ms]
[concerned] E ninguém consegue saber quem a usou. Esta chave é só um exemplo, e a Contoso é fictícia.
[600ms]
[confident] A Microsoft recomenda usar o Microsoft Entra ID no lugar, e essa é a escolha certa para cargas de trabalho em produção.

## Step 2 · Managed identity: for the project and your app

[calm] Dê ao aplicativo web e ao projeto Foundry as suas próprias identidades gerenciadas. O Azure cuida da credencial, então não há nada para armazenar nem para rotacionar.
[600ms]
[confident] Depois, uma atribuição de função decide o que cada identidade pode fazer.
[600ms]
[curious] A identidade pode ser atribuída pelo sistema ou pelo usuário. Para entrar com token, o recurso Foundry precisa de um subdomínio personalizado.

## Step 3 · Roles: who deploys, who calls, who builds

[calm] O Foundry tem funções internas. Escolha a de menor privilégio para cada trabalho.
[600ms]
[confident] Depois, atribua a função no escopo em que esse trabalho acontece, para que pessoas e aplicativos recebam só o que precisam.
[600ms]
[serious] As funções valem quando você entra com o Microsoft Entra ID. Uma chave de API ignora as funções e dá acesso total.

## Step 4 · Private endpoints: close the public door

[calm] Defina o acesso à rede pública como Desativado e adicione um endpoint privado.
[600ms]
[confident] Agora, quem chama o recurso Foundry passa pela sua rede virtual, e não pela internet aberta.
[600ms]
[curious] Dentro da rede, o mesmo nome de endpoint é resolvido para um endereço privado, por meio de uma zona DNS de link privado.

## Step 5 · Data and egress: what leaves the network

[curious] O cliente do agente é injetado na sua própria sub-rede. Ele acessa o seu Storage, o AI Search e o Cosmos DB por endpoints privados.
[600ms]
[confident] Um firewall decide o que pode sair da rede.
[600ms]
[reassuring] Em uma configuração padrão, você traz o seu próprio Storage, AI Search e Cosmos DB, e assim os dados do agente ficam no seu tenant do Azure.

## Step 6 · Content filters: categories, severity, blocking

[calm] O Foundry chama esses recursos de guardrails. Um controle avalia a gravidade de cada uma das quatro categorias de dano.
[600ms]
[curious] Depois, ele anota o resultado ou o bloqueia, conforme o nível de bloqueio que você escolher. Experimente as chaves.
[600ms]
[confident] Os controles analisam a entrada e a saída do usuário. Para agentes, também podem analisar chamadas e respostas de ferramentas, em versão prévia. Os modelos usam o guardrail padrão, a menos que você o troque.

## Step 7 · Prompt Shields and groundedness

[serious] Os Prompt Shields detectam instruções hostis ou ocultas antes que o modelo aja sobre elas.
[600ms]
[concerned] A detecção de ataque a documentos vem desativada por padrão, então ative.
[600ms]
[calm] A detecção de groundedness confere a resposta com o seu texto de origem. Está em versão prévia, não vale para agentes e será desativada em 30 de abril de 2027.

## Step 8 · Custom blocklists and risk detection

[calm] Adicione os seus próprios termos proibidos. Podem ser correspondências exatas ou expressões regulares.
[600ms]
[curious] Depois, ligue os detectores de material protegido e de dados pessoais. A detecção de dados pessoais está em versão prévia.
[600ms]
[confident] Cada um pode anotar a resposta ou bloqueá-la. Todos os nomes e números aqui são fictícios.

## Step 9 · Audit it: logs, traces and approval gates

[calm] Envie os logs de recursos para o Azure Monitor e rastreie cada execução do agente.
[600ms]
[serious] Faça as chamadas de ferramentas arriscadas esperarem a aprovação de uma pessoa. O exemplo usa uma ferramenta MCP configurada para sempre exigir aprovação.
[600ms]
[confident] Registre as aprovações e as chamadas de ferramentas, para poder auditá-las depois.

## Step 10 · Secure project at a glance

[calm] Quatro camadas trabalham juntas: quem está chamando, por qual rede, com que conteúdo e o que você consegue provar depois.
[600ms]
[reflective] Nenhuma camada sozinha basta.
[600ms]
[proud] Identidade, rede, guardrails e auditoria se reforçam, e juntas formam um projeto que você consegue defender.
