# Narrator Script — GitHub · GitHub Advanced Security: Three Suites, One Picture

**Source animation:** [AdvancedSecurityOverview.html](../../../journeys/GitHub/AdvancedSecurityOverview.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · One repo, three different risks

[calm] O repositório da Maya na Contoso tem três problemas: uma chave vazada, um pacote desatualizado e código inseguro.
[600ms]
[concerned] E tem um detalhe: nenhuma verificação sozinha encontra os três, porque cada um precisa de um tipo diferente de verificador.
[600ms]
[curious] Então, como o GitHub cobre tudo isso? É isso que esta lição mostra.

## Step 2 · Three suites, three questions

[calm] O GitHub reúne as ferramentas de segurança em três suítes, e cada suíte responde a uma pergunta sobre um repositório.
[600ms]
[confident] O Secret Protection pergunta: algum segredo vazou? O Supply Chain Security pergunta: meus pacotes estão seguros? E o Code Security pergunta: meu próprio código está seguro?
[600ms]
[reassuring] O guia de estudo do G H 500 usa esses três nomes. O Supply Chain Security é o grupo que antes se chamava Dependabot e dependency review.

## Step 3 · The Security tab: where alerts live

[calm] Todos os alertas de um repositório ficam em uma única aba. Esta é a aba Security, com uma barra lateral que lista os tipos de alerta e as ferramentas de relatório.
[600ms]
[confident] Os alertas do Dependabot, do code scanning e do secret scanning ficam juntos. A política de segurança e os advisories cuidam dos relatórios.
[600ms]
[curious] No GitHub dot com, a aba se chama Security and quality. Nas documentações mais antigas, ela aparece só como Security.

## Step 4 · Public, private, licensed: what you get

[calm] O que você recebe depende do repositório. Alguns recursos vêm em todos os planos: o grafo de dependências e os alertas do Dependabot.
[600ms]
[confident] Os repositórios públicos ganham mais de graça, incluindo secret scanning, push protection, code scanning e Autofix.
[600ms]
[serious] Os repositórios privados precisam de uma licença do Secret Protection ou do Code Security para o restante. Os preços não aparecem aqui.

## Step 5 · How each suite finds problems

[curious] Cada suíte encontra os problemas do seu jeito.
[600ms]
[confident] Os padrões identificam segredos. O GitHub Advisory Database identifica pacotes vulneráveis. E as consultas do CodeQL identificam código inseguro.
[600ms]
[impressed] O secret scanning verifica todo o histórico do Git, e o Dependabot avisa quando surge um novo advisory ou quando o seu grafo de dependências muda.

## Step 6 · Stop it early, or check before merge

[calm] Existem duas abordagens. A de prevenção primeiro barra o problema na origem, como a push protection bloqueando um push.
[600ms]
[confident] A abordagem baseada em barreiras deixa o trabalho entrar e verifica no pull request, antes do merge, com a proteção de merge do code scanning e o dependency review.
[600ms]
[reassuring] Boas equipes usam as duas. O exame G H 500 pede que você compare as abordagens.

## Step 7 · Security overview: risk and coverage

[calm] O Security overview é a visão de toda a organização.
[600ms]
[curious] A visão de Risk mostra onde se acumulam os alertas de cada tipo. A visão de Coverage mostra quais repositórios usam quais recursos.
[600ms]
[confident] Com isso, dá para identificar os repositórios que ainda estão sem nenhuma proteção ativada. Os números aqui são inventados.

## Step 8 · Who does what

[calm] Um alerta, três pessoas. Maya, desenvolvedora, corrige no código.
[600ms]
[confident] Noor, gerente de segurança, vê e acompanha os alertas em todos os lugares. Ravi, administrador, ativa os recursos e define as regras.
[600ms]
[reassuring] Security manager é uma função real da organização. Proprietários e administradores de repositório configuram os recursos.

## Step 9 · Who sees alerts, and delegated bypass

[calm] Só quem tem o acesso certo vê os alertas: write, maintain, admin e os proprietários da organização. Você pode incluir mais pessoas nas configurações.
[600ms]
[curious] Agora, a push protection. Sem o delegated bypass, os colaboradores podem ignorar um bloqueio por conta própria, sem ter a quem pedir.
[600ms]
[confident] Com o delegated bypass, para ignorar o bloqueio é preciso que um revisor aprove ou negue a solicitação.

## Step 10 · Dismissing an alert: reason and note

[calm] Às vezes você fecha um alerta que não vai corrigir. Escolha o motivo que realmente se aplica.
[600ms]
[confident] Depois, adicione uma nota. Ela fica na linha do tempo do alerta, para os auditores verem o porquê.
[600ms]
[serious] E lembre-se: um segredo que foi commitado continua comprometido até ser revogado, mesmo depois de você descartar o alerta.

## Step 11 · A secure SDLC on one page

[calm] A segurança acompanha todas as etapas, do planejamento ao monitoramento, e cada etapa tem um recurso das três suítes.
[600ms]
[confident] Antes de o repositório existir de verdade, barre os segredos e mantenha os pacotes atualizados. Antes do merge, faça a varredura, a revisão e o bloqueio.
[600ms]
[reassuring] Depois do merge, acompanhe os alertas, o Security overview e as campaigns. As cinco etapas são só uma estrutura didática.

## Step 12 · Recap: pick the suite for each risk

[calm] De volta ao repositório da Maya. Cada risco tem uma suíte, e cada suíte tem seu próprio verificador e seu próprio alerta.
[600ms]
[confident] A chave vazada é do Secret Protection. O pacote desatualizado é do Supply Chain Security. O código inseguro é do Code Security.
[600ms]
[proud] Isso cobre a primeira área de habilidade do G H 500: suítes, recursos e ecossistema de segurança do GitHub.
