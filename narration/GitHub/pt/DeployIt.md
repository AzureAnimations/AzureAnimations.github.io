# Narrator Script — GitHub · Contoso Delivery · Ship It to Azure · PT

**Source animation:** `journeys/GitHub/DeployIt.html`

Os títulos `## Step N` permanecem em inglês de propósito (índice do gerador de áudio e das legendas).

---

## Step 1 · One Pipeline, Two Halves

[confident] Duas letras, e depois mais duas. São ditas de um fôlego só — "CI/CD" — mas respondem a perguntas diferentes.
[500ms]
[calm] A integração contínua pergunta: *esta mudança está boa?* Um pull request dispara o `ci.yml` — testes de back-end, testes de front-end e uma varredura do CodeQL.
[500ms]
[serious] E então tudo depende de uma pergunta: está tudo verde? Se não, o merge é bloqueado. Não desencorajado: bloqueado.
[500ms]
[bright] Se estiverem verdes e a mudança estiver na main, o `cd.yml` assume: constrói as imagens, envia para o GHCR, implanta e faz o teste de fumaça. No ar, no Azure.
[500ms]
[reassuring] Um pipeline, não duas ferramentas: a segunda metade nunca começa antes de a primeira dizer sim.

## Step 2 · Build It Once, Ship the Small Half

[confident] Primeiro job da metade de entrega: transformar o código em algo executável.
[500ms]
[calm] Um Dockerfile multiestágio. O estágio um parte da imagem completa do Node, instala todas as dependências, inclusive as de desenvolvimento, e compila. O estágio dois começa do zero numa imagem enxuta e copia apenas o resultado da compilação.
[500ms]
[thoughtful] Dois estágios, duas razões. A imagem que executa é muito menor, e não carrega compilador algum para um atacante usar. Ela vai para o GHCR com a tag do commit que a produziu.

## Step 3 · GitHub Is Not Inside Azure

[serious] Agora a parte que derruba as pessoas. O runner é uma máquina na rede do GitHub. O Azure nunca o conheceu.
[500ms]
[thoughtful] Seu instinto provavelmente é *identidade gerenciada*, mas uma identidade gerenciada se prende a algo que roda dentro do Azure. Um runner do GitHub não é isso.
[500ms]
[bright] Então: ou você cola um client secret no GitHub e assiste a ele expirar no pior momento possível, ou dá ao workflow uma entidade de serviço e deixa o Azure confiar no próprio token do GitHub.

## Step 4 · Give the Workflow an Identity

[confident] Afinal, o que *é* uma entidade de serviço? Três coisas, em ordem.
[500ms]
[calm] Um registro de aplicativo no Microsoft Entra ID: a planta. A entidade de serviço em si: a identidade daquele aplicativo no seu tenant, aquilo sobre o que o Azure toma decisões. E uma função RBAC: Contributor, com escopo de um grupo de recursos, não da assinatura.
[500ms]
[thoughtful] Definição, identidade, permissão. Mantenha os três separados e o modelo deixa de ser misterioso.

## Step 5 · Deploy Without a Password

[confident] Veja como a confiança funciona.
[500ms]
[calm] Você adiciona uma credencial federada àquela entidade de serviço, nomeando um repositório e um branch. Na hora da implantação, o GitHub pede um token OIDC de vida curta que identifica exatamente aquela execução; o Entra ID verifica e devolve um token de acesso do Azure.
[500ms]
[serious] Você ainda guarda um client ID, um tenant ID e um subscription ID — nenhum deles é segredo. O que você deixa de guardar é uma senha que pode vazar, ou expirar às três da manhã.
[500ms]
[calm] Um detalhe que pega muita gente: o job precisa da permissão id-token write, senão o GitHub nunca emite o token.

## Step 6 · The Job That Actually Releases It

[confident] Então aqui está o workflow de implantação.
[500ms]
[calm] Ele dispara num push para a main — o que, com a proteção de branch, significa um pull request aprovado e mesclado. Pede id-token write, aponta para o ambiente de produção, que pode exigir aprovação humana, e entra com a action Azure Login.
[500ms]
[thoughtful] E repare no que ele *não* faz: nunca recompila. Ele implanta exatamente a imagem que os testes já aprovaram. Recompilar te daria um artefato diferente daquele que você provou.

## Step 7 · From a Rainy Afternoon to Running Code

[warm] Então, voltando lá para o começo.
[500ms]
[calm] A chuva vinha custando vendas à Contoso, em silêncio. Isso virou um caso de negócio, quatro épicos, subtarefas num quadro, branches e um pull request — comprovado por testes e varreduras, empacotado numa imagem enxuta e implantado por uma entidade de serviço sem nenhuma senha guardada.
[500ms]
[reassuring] Nenhum desses passos é exótico. O que faz tudo funcionar é que cada um deles roda todas as vezes, sem depender de alguém lembrar de pedir.
