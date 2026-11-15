# Narrator Script — Microsoft 365 Copilot · Identity Operations

**Source animation:** [IdentityOperations.html](../../../journeys/Copilot/IdentityOperations.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/fundamentals/what-is-entra>
- <https://learn.microsoft.com/entra/identity/conditional-access/overview>
- <https://learn.microsoft.com/entra/identity/monitoring-health/concept-sign-ins>
- <https://learn.microsoft.com/entra/fundamentals/concept-learn-about-groups>

---

## Step 1 · Which Entra tool do I open?

[calm] O help desk da Priya recebe chamados de login e de segurança o dia todo.
[600ms]
[curious] Atrás de cada ticket fica uma ferramenta de Microsoft Entra diferente, então qual você deve abrir?
[600ms]
[confident] Esta lição aborda as habilidades essenciais de segurança no exame A B 900. Conceitos como MFA e inquilinos estão na jornada de Identidade, então aqui focamos no que um administrador abre e quando.

## Step 2 · Microsoft Entra ID: the front door

[calm] Todo inquilino Microsoft 365 já é um inquilino Microsoft Entra.
[600ms]
[confident] Entra ID é a porta da frente. Ela verifica quem está entrando, aplica suas regras e registra o que aconteceu.
[600ms]
[curious] Os azulejos que você vê são as características que vamos abrir uma a uma.

## Step 3 · Pick the object that fits the job

[curious] Um usuário é uma identidade, e um grupo gerencia muitas identidades como uma só.
[600ms]
[confident] Mantenha as configurações pessoais do usuário e dê acesso a um grupo.
[600ms]
[reassuring] Grupos de segurança gerenciam o acesso a recursos compartilhados, Microsoft 365 grupos apoiam a colaboração, e uma licença, função ou política pode ir para um grupo em vez de cada pessoa.

## Step 4 · One sign-in, many apps

[calm] Com login único, Alex faz login uma vez com credenciais de trabalho e abre todos os aplicativos designados para ele.
[600ms]
[confident] Entra ID é o provedor de identidade. O app Alex envia para lá, Entra ID o verifica, e o app concede acesso.
[600ms]
[reassuring] Os administradores gerenciam todo esse acesso de um só lugar.

## Step 5 · Conditional Access: if, then

[curious] O Acesso Condicional funciona com uma ideia de se, então. Entra reúne sinais sobre um log-in, toma uma decisão e a impõe.
[600ms]
[confident] A decisão é bloquear o acesso ou conceder acesso com controles, e as políticas são executadas após a primeira etapa de login.
[600ms]
[reassuring] Você pode iniciar uma política apenas no modo de relatório, e a ferramenta What If simula um login para mostrar quais políticas se aplicarão.

## Step 6 · Three logs, three questions

[calm] Três troncos respondem a três perguntas diferentes.
[600ms]
[confident] Os logs de login mostram quem fez login e o que aconteceu. Os logs de auditoria mostram quem mudou o quê.
[600ms]
[reassuring] Microsoft Purview auditoria acompanha a atividade dos usuários e administradores entre os serviços. As entradas não podem ser alteradas ou excluídas, e as funções que você precisa variam conforme o log.

## Step 7 · When a sign-in looks risky

[concerned] Às vezes, um login parece arriscado. Microsoft Entra ID Proteção sinaliza usuários arriscados e logins arriscados.
[600ms]
[confident] Você revisa o risco e depois corrige. Ou o usuário corrige, ou um administrador intervém.
[600ms]
[serious] As funcionalidades completas precisam Entra ID P dois ou uma licença Entra Suite, e ler os relatórios de risco exige pelo menos o papel de Leitor Global.

## Step 8 · Identity Secure Score

[curious] O Identity Secure Score é uma porcentagem que mostra o quão rigorosamente seu inquilino segue as recomendações de segurança de identidade da Microsoft.
[600ms]
[confident] Uma pontuação maior significa que mais delas são atingidas, e ela é recalculada a cada vinte e quatro horas.
[600ms]
[reflective] Algumas recomendações exigem uma licença paga, e um risco que você aceita não rende pontos. As porcentagens aqui são apenas um exemplo.

## Step 9 · Admin power on demand

[curious] Por que deixar o poder de administrador ligado o dia todo? O Gerenciamento de Identidade Privilegiada torna as vagas elegíveis em vez de sempre ativadas.
[600ms]
[confident] Mei ativa um papel apenas quando precisa, e o acesso expira.
[600ms]
[reassuring] Pode exigir MFA, pedir uma justificativa, enviar notificações, realizar revisões de acesso e manter um histórico de auditoria.

## Step 10 · Two objects for every app

[calm] Todo aplicativo tem dois objetos. O registro do aplicativo é o projeto, mantido no locatário principal do app.
[600ms]
[confident] Uma aplicação empresarial é sua instância no seu tenant, e é aí que você gerencia quem pode usá-la.
[600ms]
[reassuring] Registrar um aplicativo cria tanto um objeto de aplicação quanto um principal de serviço.

## Step 11 · Which tool do I open?

[curious] Agora é sua vez. Escolha um sintoma na fila do suporte técnico.
[600ms]
[confident] A ferramenta Entra que responde acende, junto com onde procurar.
[600ms]
[reflective] Alguns sintomas precisam de duas ferramentas, e os nomes mudam com o tempo, então confirme os caminhos em Microsoft Learn.

## Step 12 · Know the tool, fix the problem

[calm] Compare o sintoma com a ferramenta Entra, e o bilhete fica mais fácil de resolver.
[600ms]
[confident] Depois, compare as habilidades A B 900 medidas e o treinamento oficial Microsoft Learn.
[600ms]
[proud] Sempre leia o guia de estudo atual, pois as habilidades medidas mudam com o tempo.
