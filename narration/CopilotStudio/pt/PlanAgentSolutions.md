# Narrator Script — Copilot Studio · Copilot Studio — Plan an Agent Solution

**Source animation:** [PlanAgentSolutions.html](../../../journeys/CopilotStudio/PlanAgentSolutions.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/>

---

## Step 1 · Building is easy. Deciding comes first.

[calm] Um criador da Contoso constrói um agente auxiliar em uma tarde. Funciona, e todos ficam satisfeitos.
[600ms]
[concerned] Então chegam sete perguntas, e cada uma muda a forma como o agente precisa ser construído.
[600ms]
[reflective] Eles refletem as habilidades de solução de Planejar e Agente no guia de estudo A B 620.

## Step 2 · Seven decisions to make first

[confident] Aqui está o mapa: sistemas corporativos, identidade, canais, AI responsável, governança, componentes reutilizáveis e público.
[600ms]
[calm] Cada decisão molda a construção.
[600ms]
[encouraging] Responda a todas, e um protótipo rápido vira um plano que você pode defender.

## Step 3 · Decision 1 · Which systems will it touch?

[curious] Primeiro, liste todos os sistemas que o agente deve ler ou sobre os quais agir.
[600ms]
[confident] Para cada um, decida: é conhecimento para ler ou uma ferramenta que atua?
[600ms]
[calm] O conhecimento pode vir de conectores Copilot, conectores Power Platform ou Azure AI Search. Ferramentas podem ser conectores, servidores MCP ou APIs REST. Os sistemas da Contoso aqui são fictícios.

## Step 4 · Decision 2 · How do people sign in?

[curious] Em seguida, escolha como os usuários provam quem são.
[600ms]
[confident] Essa escolha decide quais canais podem funcionar e o que o agente pode fazer em nome do usuário.
[600ms]
[reassuring] Autenticar com Microsoft é o padrão para novos agentes. As mudanças só entram em vigor depois que você publica.

## Step 5 · Decision 2 · Whose permissions do tools use?

[curious] Quando uma ferramenta chama um sistema, ela roda como alguém. De quem deve ser acesso?
[600ms]
[confident] Com as credenciais do usuário logado, as pessoas só acessam os dados que podem ver.
[600ms]
[reflective] Com as credenciais do criador, a ferramenta atua como sua autora, o que se adequa aos recursos compartilhados. Escolha de propósito, porque sem autenticação, as ferramentas não podem usar credenciais de usuário.

## Step 6 · Decision 3 · Where will it live?

[calm] Um canal é onde as pessoas conhecem o agente, como Teams, Microsoft 365 Copilot, SharePointou um site.
[600ms]
[confident] Publique primeiro, depois conecte os canais que seu público já usa. Cada canal tem sua própria experiência.
[600ms]
[serious] O site de demonstração é para testes, não para clientes, e administradores podem bloquear canais com políticas de dados.

## Step 7 · Decision 4 · Who is it for?

[curious] Escolha o público primeiro, interno ou externo.
[600ms]
[confident] O canal, o login e as credenciais da ferramenta seguem dessa escolha. Experimente cada um.
[600ms]
[reflective] Esses pares planejam os padrões padrão. O Teams usa o Autenticar com Microsoft, outros canais precisam de autenticação manual, e nenhuma autenticação permite que alguém com o chat de link seja feito por isso.

## Step 8 · Decision 5 · How will it stay responsible?

[serious] Planeje os guarda-corpos antes do lançamento, não depois que algo der errado.
[600ms]
[confident] Conteúdo moderado, basear respostas em conhecimento aprovado, dizer às pessoas que é AIe manter a pessoa ao alcance.
[600ms]
[reassuring] A moderação de conteúdo é verificada duas vezes, na entrada e antes da resposta do agente. Os criadores também podem limitar fontes de conhecimento e desativar respostas sem fundamento.

## Step 9 · Decision 6 · Who governs it?

[calm] Os administradores definem as regras no centro administrativo Power Platform.
[600ms]
[confident] Eles decidem onde os agentes são formados, com o que podem se conectar e quem pode compartilhá-los.
[600ms]
[serious] Conectores são classificados como Negócios, Não Empresariais ou Bloqueados, e os dados não conseguem fluir entre esses grupos.

## Step 10 · Decision 7 · What can we reuse?

[curious] Por que reconstruir as mesmas peças em cada agente? Empacotar blocos de construção compartilhados uma vez.
[600ms]
[confident] Uma coleção pode conter tópicos, conhecimento, ferramentas, agentes filhos, servidores MCP, conectores, fluxos e entidades.
[600ms]
[calm] Exporta como uma solução gerenciada e pode ser compartilhada com permissões do Visualizador ou do Editor. Os autores podem usar seus componentes, mas não alterá-los.

## Step 11 · Your plan on one page

[calm] Sete decisões respondidas transformam um protótipo em um plano.
[600ms]
[encouraging] Compare seu próprio agente com eles, um por um, e anote as lacunas.
[600ms]
[determined] Depois estude as habilidades de exame e leia o guia de estudo A B 620 atual, porque os nomes de provas e Copilot Studio mudam.
