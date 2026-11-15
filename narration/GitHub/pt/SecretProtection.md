# Narrator Script — GitHub · Secret Protection: Stop the Leak, Then Clean It Up

**Source animation:** [SecretProtection.html](../../../journeys/GitHub/SecretProtection.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · A Token in a Commit: Who Finds It

[calm] Maya faz commit de um token por engano. Três partes podem encontrá-lo: quem tem acesso de leitura ao repositório, o secret scanning do GitHub e, em um repositório público, o provedor do token.
[600ms]
[confident] O secret scanning verifica todo o histórico do Git, em todos os branches.
[600ms]
[serious] E aqui vai a primeira regra: um segredo commitado é um segredo comprometido. A verificação avisa você, mas não desfaz o problema.

## Step 2 · What Secret Scanning Looks For

[curious] Quatro tipos de padrão definem o que conta como segredo: padrões de provedores, padrões genéricos, padrões que você mesmo escreve e segredos genéricos encontrados com AI.
[600ms]
[confident] Ele também verifica além do código: em issues, pull requests, discussions, wikis e gists secretos.
[600ms]
[reassuring] Os alertas genéricos e os encontrados por AI ficam em uma lista própria, porque podem ter mais falsos positivos.

## Step 3 · Turn It On at Three Levels

[calm] O Secret Protection pode ser ativado em um repositório por um administrador do repositório, na página de configurações.
[600ms]
[confident] Ou um proprietário pode ativar em vários repositórios de uma vez, com uma configuração de segurança da organização ou da empresa.
[600ms]
[reassuring] Repositórios públicos têm o secret scanning automaticamente e de graça. Para repositórios privados e internos, você ativa o GitHub Secret Protection.

## Step 4 · Push Protection: Stop the Push

[curious] Desative e ative a push protection e compare os dois resultados.
[600ms]
[serious] Sem ela, o segredo entra primeiro e depois vem o alerta. Com ela, o push é bloqueado antes de chegar ao repositório.
[600ms]
[confident] Ela vem desativada por padrão e exige o Secret Protection. Pode ativá-la um administrador do repositório, um proprietário da organização, um gerente de segurança ou um proprietário da empresa.

## Step 5 · Bypass: Give a Reason or Ask First

[calm] Por padrão, quem tem acesso de gravação pode contornar o bloqueio informando um motivo, como usado em testes, falso positivo ou corrigir depois.
[600ms]
[confident] O bypass delegado acrescenta uma etapa de aprovação: um revisor decide antes de o push ser liberado. As solicitações expiram após sete dias.
[600ms]
[reassuring] Seja como for, todo bypass é registrado no log de auditoria e enviado por e-mail aos proprietários, gerentes de segurança e administradores de repositório que acompanham o repositório.

## Step 6 · The Alert: Created, Open, Closed

[calm] Um segredo detectado vira um alerta, criado quando uma verificação encontra um segredo ou quando alguém contorna a push protection.
[600ms]
[serious] Ele fica aberto até alguém fechar, com um motivo, um comentário opcional e um registro de quem fechou e quando. O fechamento é manual, mesmo depois de o token sair do código.
[600ms]
[curious] Os alertas de parceiros vão para o provedor e não aparecem no repositório.

## Step 7 · Validity Checks: Is It Still Live?

[curious] A verificação de validade pergunta ao emissor do token se um segredo detectado ainda funciona.
[600ms]
[serious] Ativo quer dizer que ainda pode ser explorado, então corrija esses primeiro. Inativo não funciona mais, mas confirme se não houve uso indevido.
[600ms]
[calm] Desconhecido quer dizer que não há suporte ou que não foi possível verificar. Os tokens do GitHub são verificados por padrão, e os padrões de parceiros precisam ter a verificação de validade ativada.

## Step 8 · Respond in Order: Revoke, Then Clean Up

[serious] Trate todo segredo commitado como comprometido. Primeiro, revogue e faça a rotação, para ele ficar inútil.
[600ms]
[confident] Depois, confira os logs em busca de uso indevido e feche o alerta.
[600ms]
[reassuring] Limpar o histórico do Git fica por último. Dá muito trabalho e, com o token revogado, muitas vezes nem é necessário.

## Step 9 · Dismiss With Care

[calm] Fechar um alerta é uma decisão que talvez você precise defender depois, então escolha o motivo verdadeiro.
[600ms]
[confident] Os motivos são falso positivo, usado em testes, revogado e não será corrigido. Sempre deixe uma nota, porque ela vai para a linha do tempo do alerta, para as auditorias.
[600ms]
[serious] E confira a validade antes de dispensar.

## Step 10 · Alert Recipients and Path Exclusions

[curious] Defina quem é avisado sobre um vazamento: administradores, gerentes de segurança, alguns proprietários e o autor do commit.
[600ms]
[calm] O e-mail só chega se a pessoa acompanha o repositório e está com o e-mail ativado.
[600ms]
[confident] Você também pode listar caminhos que o secret scanning deve ignorar. Os alertas ali são fechados como ignorados pela configuração.

## Step 11 · Custom Patterns: Write, Dry Run, Publish

[calm] Quando nenhum padrão embutido conhece o seu segredo, escreva o seu. Você precisa de um nome e de uma expressão regular para o formato do segredo.
[600ms]
[confident] Depois, salve e faça um dry run. Ele mostra as correspondências sem gerar nenhum alerta, então dá para ajustar o padrão com segurança.
[600ms]
[optimistic] Então publique e, se quiser, ative a push protection. Dá para definir padrões também para uma organização ou empresa.

## Step 12 · Public vs Private, and What You Can Now Do

[calm] Repositórios públicos e privados se comportam de forma diferente em varredura, alertas e tokens. Consulte a documentação do seu plano.
[600ms]
[confident] Agora teste o que você aprendeu com o objetivo do G H 500: configurar e usar o Secret Protection.
[600ms]
[proud] Você sabe ativá-lo, barrar vazamentos com a push protection, fazer a triagem dos alertas e responder na ordem certa.
