# Narrator Script — GitHub · Administer Copilot: Policies, Audit Logs and the REST API

**Source animation:** [CopilotAdminAndPolicies.html](../../../journeys/GitHub/CopilotAdminAndPolicies.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · Contoso Rolls Out Copilot

[calm] A Contoso quer o Copilot para os seus duzentos desenvolvedores. O Ravi, dono da organização, tem quatro perguntas para responder antes de dar um assento a alguém.
[600ms]
[curious] Qual plano? Quem recebe um assento e quais recursos ficam ativos? E como acompanhar tudo isso?
[600ms]
[confident] Essas perguntas são o trabalho de verdade de um administrador do Copilot, e cada uma tem a sua própria etapa nesta lição.

## Step 2 · Plans for Teams

[calm] O Copilot Business e o Copilot Enterprise são os dois planos para equipes.
[600ms]
[confident] Os dois dão à organização gerenciamento central e controle de políticas. O Enterprise acrescenta, em cima do Business, recursos de nível corporativo, incluindo um pool de créditos maior.
[600ms]
[reassuring] Free, Pro, Pro plus e Max são planos individuais, para contas pessoais. Os preços mudam, então consulte a página de planos do GitHub para ver os valores atuais.

## Step 3 · Assign Seats

[calm] O proprietário da organização escolhe quem pode usar o Copilot, nas configurações de Copilot Access da organização.
[600ms]
[confident] Você pode dar um assento a todos os membros, atuais e futuros, ou escolher pessoas e equipes específicas, até enviando um arquivo.
[600ms]
[serious] Lembre-se: a cobrança do assento começa quando o acesso é concedido, e não no primeiro uso.

## Step 4 · Feature Policies

[curious] As políticas ativam ou desativam os recursos do Copilot para todo mundo que tem um assento. Chat, modo agente, linha de comando, code review e mais.
[600ms]
[confident] Cada recurso tem um único interruptor, definido pelo proprietário. O code review precisa que a política dele esteja ativada. As sugestões que coincidem com código público podem ser permitidas ou bloqueadas.
[600ms]
[serious] E se o proprietário do enterprise já definiu uma política, a organização não pode alterá-la.

## Step 5 · Availability Across IDEs and GitHub.com

[calm] Uma política só importa onde o recurso existe. Então confira cada política nos lugares onde as pessoas usam o Copilot: as IDEs, a nuvem no GitHub dot com, a linha de comando e o code review.
[600ms]
[curious] Entre esses quatro, o filtro de código público funciona só nas IDEs. Os servidores MCP e a exclusão de conteúdo funcionam nos quatro.
[600ms]
[reassuring] A regra para guardar: nem toda política vale para todos os lugares.

## Step 6 · Enterprise Over Organization

[calm] As políticas são definidas primeiro no enterprise. O que estiver como Enabled ou Disabled ali não pode ser alterado por uma organização.
[600ms]
[curious] A opção Let organizations decide repassa a escolha para elas. Experimente as três configurações do enterprise e veja se o desejo do Ravi de desligar a linha de comando do Copilot na Contoso prevalece.
[600ms]
[serious] Se uma pessoa tem assentos em duas organizações, em geral vale a configuração menos restritiva, mas as políticas sensíveis usam a mais restritiva.

## Step 7 · Content Exclusions at Org Level

[calm] Os proprietários podem manter arquivos e repositórios escolhidos longe do Copilot. O mesmo controle existe em três níveis.
[600ms]
[confident] Administradores de repositório, proprietários de organização e proprietários de enterprise podem configurá-lo, cada um no seu nível. Ele exige o Copilot Business ou o Copilot Enterprise.
[600ms]
[reassuring] Qualquer mudança vai para o log de auditoria, então fica tudo registrado. A lição de privacidade mostra como escrever as regras.

## Step 8 · The Audit Log

[calm] O log de auditoria registra as mudanças no seu plano do Copilot, como assentos e políticas.
[600ms]
[curious] Busque por eventos do Copilot e abra um para ver quem fez o quê. Você também pode buscar por ator, para ver a atividade dos agentes no GitHub.
[600ms]
[serious] Ele não guarda prompts nem outros dados de sessão do cliente, e os eventos ficam guardados por um tempo limitado. Envie o log por streaming para um SIEM se quiser um histórico de longo prazo.

## Step 9 · Subscriptions by REST API (Preview)

[calm] Os proprietários da organização podem adicionar e remover assentos com a REST API.
[600ms]
[confident] Uma requisição POST adiciona usuários, e uma requisição DELETE coloca os assentos deles como cancelamento pendente.
[600ms]
[serious] Esses endpoints estão em preview pública e podem mudar. O token na tela é só um exemplo. Nunca cole um token real em código ou em slides.

## Step 10 · Billing and Usage

[calm] Dois medidores correm lado a lado. Os assentos são cobrados da organização ou do enterprise que os atribui, a cada ciclo mensal.
[600ms]
[curious] Os créditos de IA são diferentes. Chat, linha de comando, agente de nuvem e mais consomem de um pool compartilhado, conforme as pessoas usam o Copilot.
[600ms]
[confident] Os orçamentos permitem limitar o gasto por usuário, centro de custo, organização ou enterprise. Esta etapa mostra o mecanismo, não os preços.

## Step 11 · Recap: The Admin’s Weekly Checklist

[calm] Administrar o Copilot é uma rotina. Verifique os assentos: quem tem um e quem realmente usa.
[600ms]
[confident] Verifique as políticas, primeiro o enterprise e depois a organização. Depois, revise os registros: o log de auditoria e a cobrança.
[600ms]
[proud] Isso cobre as habilidades do G H 300 para gerenciar configurações e políticas em toda a organização. Use a lista de verificação como apoio para o estudo.
