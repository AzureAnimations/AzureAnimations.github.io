# Narrator Script — GitHub · How a Copilot Suggestion Is Made

**Source animation:** [HowCopilotWorks.html](../../../journeys/GitHub/HowCopilotWorks.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/introduction-prompt-engineering-with-github-copilot/3-github-copilot-user-prompt-process-flow>
- <https://learn.microsoft.com/agent-framework/journey/llm-fundamentals>

---

## Step 1 · You type, a suggestion appears

[calm] Maya, desenvolvedora da Contoso, digita um comentário e aparece um texto cinza.
[600ms]
[curious] Mas, no meio do caminho, rodam sete etapas que você nunca vê.
[600ms]
[confident] Nesta lição, vamos abrir cada uma delas, para você saber o que acontece com o seu código.

## Step 2 · Gather the context

[calm] Antes de enviar qualquer coisa, o Copilot coleta pistas ao redor do cursor: o código, o arquivo, as abas vizinhas e o projeto.
[600ms]
[confident] No Chat, ele também usa a sua seleção, os arquivos que você menciona com a arroba e o histórico da conversa.
[600ms]
[encouraging] Por isso, abra os arquivos que importam e feche os que não importam.

## Step 3 · Build the prompt

[curious] As pistas são reunidas em um único prompt, junto com as regras e o seu código.
[600ms]
[confident] O código antes do cursor e o código depois dele formam uma lacuna, e o modelo preenche essa lacuna. Isso se chama preenchimento no meio.
[600ms]
[reflective] O formato real do prompt é interno, então esta imagem só mostra a ideia.

## Step 4 · Pass the proxy

[calm] O prompt pronto sai do seu editor por HTTPS.
[600ms]
[confident] Antes de qualquer modelo vê-lo, ele passa por um servidor proxy no tenant do Microsoft Azure que pertence ao GitHub.
[600ms]
[reassuring] Esse proxy é o primeiro ponto de controle, entre o seu editor e o modelo.

## Step 5 · Filter on the way in

[serious] O proxy bloqueia tentativas de manipular o sistema, então um prompt malicioso não consegue mudar o comportamento do Copilot.
[600ms]
[confident] Antes de o prompt seguir adiante, os filtros de conteúdo barram texto ofensivo e dados pessoais.
[600ms]
[reassuring] Só um prompt limpo chega ao modelo.

## Step 6 · The model writes

[calm] O modelo escreve a sugestão um token por vez. Um token é um pedacinho de texto.
[600ms]
[curious] A cada token, ele prevê o que provavelmente vem a seguir.
[600ms]
[serious] Provável não é a mesma coisa que correto. Por isso, revise e teste toda sugestão.

## Step 7 · Post-process on the way out

[calm] Toda sugestão é verificada antes de chegar até você.
[600ms]
[confident] As verificações procuram conteúdo nocivo, bugs e falhas de segurança e, se essa configuração estiver ligada, trechos iguais a código público.
[600ms]
[reassuring] Se uma verificação falha, a sugestão é cortada ou descartada.

## Step 8 · Back to the editor

[calm] Só chegam ao seu editor as sugestões que passam em todas as verificações, e elas aparecem como texto cinza.
[600ms]
[confident] Você pode aceitar a sugestão inteira ou só uma parte, dispensar, ou simplesmente continuar digitando para ignorar.
[600ms]
[reassuring] Nada muda no seu arquivo até você decidir.

## Step 9 · Chat is different

[curious] No Chat, cada novo prompt leva junto os turnos anteriores.
[600ms]
[concerned] Por isso, um turno antigo e fora do assunto pode desviar a resposta.
[600ms]
[encouraging] Ao começar uma nova tarefa, abra uma nova conversa.

## Step 10 · Where your data goes

[calm] Seu prompt e a sugestão fazem o mesmo caminho em todos os planos.
[600ms]
[confident] Se esses dados podem treinar modelos depende do plano. No Business e no Enterprise, eles não são usados para treinamento.
[600ms]
[serious] No Free, no Pro e no Pro Plus, eles são usados, a menos que você desative essa opção. Confira nas configurações do Copilot o texto atual.

## Step 11 · Recap: the lifecycle in one picture

[calm] Veja o ciclo completo. O editor reúne o contexto e monta um prompt, e o proxy e os filtros protegem as duas portas.
[600ms]
[confident] O modelo escreve, e então você decide. O Chat segue o mesmo ciclo, com o histórico da conversa somado a cada prompt.
[600ms]
[proud] Agora você sabe o que acontece entre digitar e o texto cinza aparecer.
