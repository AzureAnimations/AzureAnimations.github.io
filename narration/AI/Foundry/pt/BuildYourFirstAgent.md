# Narrator Script — Foundry · Build and test your first agent in the Foundry portal

**Source animation:** [BuildYourFirstAgent.html](../../../../journeys/AI/Foundry/BuildYourFirstAgent.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/quickstarts/get-started-code>
- <https://learn.microsoft.com/azure/foundry/agents/concepts/development-lifecycle>
- <https://learn.microsoft.com/azure/foundry/agents/how-to/tools/file-search>
- <https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept>

---

## Step 1 · From a model to an agent

[calm] Contoso Outfitters tem um modelo implantado, e ele responde quase qualquer coisa. Só que não sabe nada sobre a Contoso.
[600ms]
[curious] Um agente resolve isso: ele envolve o modelo com instruções, conhecimento e ferramentas.
[600ms]
[confident] Este é um resumo da lição anterior, sobre o que faz um agente. O mesmo assistente de devoluções vai nos acompanhar em todas as etapas.

## Step 2 · Create the agent: name and model

[curious] No portal Foundry, abra Agentes e selecione Criar agente. Dê um nome e escolha o modelo implantado que ele vai usar.
[600ms]
[serious] Escolha o nome com cuidado, porque depois de dar o nome ao agente, não dá mais para mudar.
[600ms]
[calm] No código, é esse mesmo nome que você vai usar depois para chamar o agente.

## Step 3 · Write the instructions

[calm] As instruções definem o papel e os limites do agente. Aqui você pode ligar e desligar a regra de escopo.
[600ms]
[curious] Agora faça uma pergunta fora do assunto e compare. Com a regra ligada, o agente educadamente se mantém no trabalho dele.
[600ms]
[reassuring] Um limite claro nas instruções é o jeito mais simples de manter o agente focado.

## Step 4 · Add knowledge

[curious] O conhecimento ancora as respostas nos seus próprios arquivos. A Contoso envia os documentos de política, e eles são indexados.
[600ms]
[confident] Antes de responder, o agente procura o trecho relevante e usa esse trecho na resposta.
[600ms]
[calm] A busca de arquivos é uma forma de adicionar conhecimento. Primeiro, os arquivos precisam ser enviados e indexados em um store vetorial.

## Step 5 · Add a tool

[calm] Com ferramentas, o agente pode consultar informações ou executar ações. Escolha uma e conclua a configuração.
[600ms]
[serious] A ferramenta precisa estar configurada com sucesso antes de você salvar um agente que a tenha anexada.
[600ms]
[confident] Depois, diga nas instruções quando o agente deve usar a ferramenta, para ele recorrer a ela na hora certa.

## Step 6 · Test in the playground: read the tool call

[curious] Agora teste no playground. Faça uma pergunta que exija a ferramenta, depois abra a chamada da ferramenta e leia.
[600ms]
[intrigued] Dá para ver qual ferramenta rodou, o que foi enviado a ela e o que ela devolveu.
[600ms]
[confident] O rastreamento registra essas entradas e saídas, então você confirma se o agente chamou a ferramenta esperada.

## Step 7 · Save a version

[serious] Até aqui, tudo é só um rascunho. Se você sair do portal, perde as alterações não salvas.
[600ms]
[confident] Ao salvar, você cria uma nova versão que nunca muda. Assim dá para comparar versões e voltar atrás quando precisar.
[600ms]
[reassuring] Salve uma versão primeiro se quiser histórico, monitoramento ou avaliações completas.

## Step 8 · Call the agent by name

[calm] Um aplicativo cliente pequeno não precisa do portal. Ele faz login, conecta ao projeto e pede o agente pelo nome.
[600ms]
[curious] Faça login uma vez com a linha de comando do Azure. Aí a credencial padrão encontra esse login automaticamente.
[600ms]
[confident] O código usa o pacote Azure AI Projects, versão dois ponto x.

## Step 9 · Print the reply and follow the conversation

[curious] Crie uma conversa, envie uma mensagem e imprima a resposta.
[600ms]
[impressed] Agora envie uma segunda mensagem na mesma conversa. O agente se lembra, porque a conversa guarda o histórico entre os turnos.
[600ms]
[reassuring] Assim, a pergunta seguinte não precisa repetir a original.

## Step 10 · Troubleshoot: wrong tool, empty answer, auth error

[serious] A maioria dos problemas do primeiro agente vem de uma destas três causas: a ferramenta errada, uma resposta vazia ou um erro de autenticação.
[600ms]
[confident] Confira a configuração da ferramenta, os dados e o login. Os rastreamentos mostram se o modelo gerou uma chamada de ferramenta, e o que a ferramenta recebeu e devolveu.
[600ms]
[proud] Resolva esses três pontos e você vai construir, testar e chamar seu primeiro agente com confiança.
