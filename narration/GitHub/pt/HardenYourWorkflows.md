# Narrator Script — GitHub · Harden Your Workflows: Tokens, Pinning, Injection and Attestations

**Source animation:** [HardenYourWorkflows.html](../../../journeys/GitHub/HardenYourWorkflows.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-openid-connect>

---

## Step 1 · A pipeline is a path into production

[calm] Um workflow executa código, guarda segredos e pode entregar para clientes. Isso faz dele um caminho para a produção.
[600ms]
[serious] Qualquer texto que alguém de fora consiga digitar nele, seja de um pull request, de uma issue ou de uma action de terceiros, é uma porta de entrada.
[600ms]
[determined] Nesta lição, vamos reforçar um workflow de lançamento da Contoso Weather Shop, um ponto fraco de cada vez.

## Step 2 · GITHUB_TOKEN: per run, scoped, short-lived

[calm] O GitHub cria um token novo para cada job, antes de o job começar.
[600ms]
[confident] Ele só alcança o repositório que contém o workflow e expira quando o job termina.
[600ms]
[serious] Qualquer action consegue lê-lo pelo contexto do github token, mesmo que você nunca o repasse. Por isso, limite o que ele pode fazer.

## Step 3 · Least privilege with permissions

[calm] Use a chave permissions para dar ao token só o que o job precisa.
[600ms]
[confident] Um bom hábito é deixar o token somente leitura por padrão e ampliar só nos jobs que precisam de mais. Se você listar qualquer permissão, todas as que ficarem de fora passam a ser nenhuma.
[600ms]
[serious] O personal access token é diferente: é um segredo armazenado, ligado a uma pessoa. Use só quando o token do GitHub não der conta.

## Step 4 · Script injection: untrusted input in run:

[curious] Veja como um ataque acontece. O GitHub troca a expressão pelo valor dela antes de o shell começar.
[600ms]
[serious] Se um atacante escreveu esse valor, ele vira parte do script. Até o nome de um branch pode carregar sintaxe de shell.
[600ms]
[concerned] Desconfie de títulos, corpos, nomes de branch e labels. Essas são as entradas de risco.

## Step 5 · The fix: an environment variable, quoted

[calm] A correção é colocar o valor em uma variável de ambiente e lê-lo como dado.
[600ms]
[impressed] Agora o mesmo título malicioso é só texto, e nada a mais é executado.
[600ms]
[confident] No shell, coloque a variável entre aspas duplas, ou passe o valor para uma action como input.

## Step 6 · Trust an action before you run it

[serious] Uma action comprometida enxerga os segredos que o workflow usa e pode usar o token para gravar no repositório.
[600ms]
[confident] Então confira quem a escreveu, procure o selo de criador Verificado e audite para que os segredos nunca vão para hosts que você não pretendia.
[600ms]
[calm] Depois, limite o que é permitido: actions criadas pelo GitHub, criadores verificados do Marketplace ou só as actions que você nomear.

## Step 7 · Pin to a full commit SHA

[calm] Uma tag pode ser movida para outro código depois, se alguém ganhar acesso ao repositório da action.
[600ms]
[confident] O SHA completo do commit aponta para exatamente um commit. Confira que ele vem do repositório da própria action, e não de um fork.
[600ms]
[determined] Depois, imponha isso com uma política que exige que as actions sejam fixadas em um SHA de commit completo.

## Step 8 · Immutable releases

[curious] Depois que um lançamento imutável é publicada, a tag e os arquivos dela ficam travados.
[600ms]
[impressed] Ninguém consegue mudar em silêncio o que significa a versão quatro ponto dois ponto zero.
[600ms]
[confident] O título e as notas continuam editáveis, e uma atestação do lançamento é criada automaticamente para os usuários poderem verificá-la.

## Step 9 · Environments: a gate before production

[calm] Um ambiente pode segurar uma implantação até que uma pessoa aprove, um temporizador termine e o branch seja permitido.
[600ms]
[confident] Os segredos dele ficam travados até essas regras passarem, e um revisor obrigatório já basta para aprovar.
[600ms]
[serious] Ative Impedir autorrevisão para que ninguém aprove as próprias execuções.

## Step 10 · OIDC: no stored cloud secret

[curious] Com OIDC, o job pede ao GitHub um token de curta duração e o apresenta ao Azure.
[600ms]
[confident] O Azure confere esse token com uma credencial federada do Microsoft Entra ID que você configurou, então nenhuma senha de nuvem fica armazenada no GitHub.
[600ms]
[serious] O job precisa da permissão id token write. E adicione uma condição à relação de confiança, para que repositórios não confiáveis não consigam pedir tokens.

## Step 11 · Artifact attestations: sign it, verify it

[calm] O build assina uma declaração do que foi construído e de onde veio.
[600ms]
[confident] Antes de implantar, verifique essa declaração com a ferramenta de linha de comando do GitHub.
[600ms]
[reflective] Assine o que você entrega, não todo build de teste. E lembre: uma atestação liga ao código-fonte e ao build, mas não prova que o código é seguro.

## Step 12 · Recap: a hardening checklist

[calm] Oito hábitos que protegem um workflow, do token à implantação.
[600ms]
[confident] Privilégio mínimo para tokens, texto não confiável passando por variável de ambiente, actions confiáveis e permitidas fixadas em um SHA, e lançamentos imutáveis.
[600ms]
[proud] Depois, as barreiras do ambiente, o OIDC e as atestações verificadas antes da implantação. Essa é a área de automação segura e otimizada do G H 200.
