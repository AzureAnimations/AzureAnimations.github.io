# Narrator Script — GitHub · Security Administration: Roll It Out Across an Organisation

**Source animation:** [SecurityAdministration.html](../../../journeys/GitHub/SecurityAdministration.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/securing-your-organization>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · Fifty Repositories, No Consistent Setup

[calm] A Contoso tem cinquenta repositórios, e cada equipe configurou a segurança do seu jeito.
[600ms]
[concerned] Uns estão cobertos, outros não. É o que acontece quando cada equipe liga os recursos na mão, e Ravi não consegue dizer qual é qual.
[600ms]
[determined] Ele precisa de uma implantação única que funcione em todo lugar.

## Step 2 · Enterprise, Organisation, Repository

[calm] As configurações de segurança ficam em três níveis. A empresa tem as páginas de configurações e de políticas, que valem para todas as organizações.
[600ms]
[confident] A organização tem as Configurations: configurações globais e padrões. Um repositório tem as próprias configurações do Advanced Security, só para aquele repositório.
[600ms]
[serious] Lembre-se: um nível mais alto pode impor uma configuração, e aí o nível abaixo não consegue mudá-la.

## Step 3 · Enterprise Cloud and Enterprise Server

[curious] O GitHub Enterprise Cloud e o GitHub Enterprise Server usam os mesmos recursos de segurança, mas você os ativa em lugares diferentes.
[600ms]
[confident] No Enterprise Cloud, são as configurações e políticas da empresa no github.com. Um Server hospedado por você precisa de licença, do Management Console e do GitHub Actions.
[600ms]
[reassuring] As configurações, os rulesets e a REST API são iguais nos dois. Algumas opções chegam em uma versão posterior do Server.

## Step 4 · Security Configurations: One Named Bundle

[confident] Uma configuração de segurança é um pacote nomeado de ajustes de ativação. Você cria uma vez e depois aplica a qualquer grupo de repositórios.
[600ms]
[curious] Cada ajuste pode ficar ativado, desativado ou não definido. Não definido mantém o que o repositório tem hoje.
[600ms]
[encouraging] Grupos que precisam de proteção diferente podem ter, cada um, a sua própria configuração.

## Step 5 · Defaults for New Repositories, and Inheritance

[calm] Escolha uma configuração padrão, para que os repositórios novos já comecem protegidos. Ela vale só para repositórios novos, não para os transferidos.
[600ms]
[confident] Um repositório vinculado herda os ajustes. Experimente a chave. Sem imposição, um administrador do repositório pode alterar um ajuste, e o status passa a ser Removido.
[600ms]
[serious] Com imposição, o ajuste fica travado e o status é Aplicado.

## Step 6 · Enable All Three Suites in Bulk

[calm] Agora aplique em massa. Selecione os repositórios ou tudo o que corresponder a um filtro.
[600ms]
[confident] Escolha a configuração e clique em Aplicar. O Secret Protection, a segurança da cadeia de suprimentos e o Code Security são ativados juntos.
[600ms]
[reassuring] Depois, cada repositório mostra o status da configuração, para você conferir o resultado. Os repositórios arquivados entram também.

## Step 7 · Default CodeQL Setup or an Approved Workflow

[confident] A configuração padrão é o caminho mais rápido. Ela não precisa de arquivo de workflow, e o GitHub escolhe as linguagens.
[600ms]
[curious] Escolha a configuração avançada só quando precisar do seu próprio workflow, com builds, uma matriz ou um agendamento.
[600ms]
[calm] Em grande escala, aprove uma versão desse workflow e distribua para um grupo inteiro de repositórios.

## Step 8 · Policies and Rulesets: Enterprise and Organisation

[calm] Uma política decide quem pode ativar os recursos. Um ruleset decide o que precisa passar antes de o código ser mesclado.
[600ms]
[confident] Os dois podem abranger várias organizações de uma vez. Proprietários de organização e gerentes de segurança sempre podem ativar recursos, seja qual for a política.
[600ms]
[encouraging] Para implantar com segurança, comece um ruleset em Avaliar, veja o impacto e depois mude para Ativo. Uma lista de bypass cobre as exceções.

## Step 9 · Roles: Administrator, Security Manager, Developer

[calm] Dê a cada pessoa o menor acesso que dê conta do trabalho.
[600ms]
[confident] Os administradores definem as regras. Os gerentes de segurança cuidam dos recursos e alertas de segurança na organização inteira. Os desenvolvedores trabalham no repositório e corrigem os alertas.
[600ms]
[reflective] A função de gerente de segurança pertence à organização, e um proprietário pode atribuí-la a um membro ou a uma equipe.

## Step 10 · Who Can Dismiss or Reopen an Alert

[calm] Os acessos Read e Triage não podem dispensar alertas. Write, Maintain e Admin podem.
[600ms]
[curious] Quer um segundo par de olhos? Ative Prevenir dispensas diretas de alerta, e toda dispensa precisa da aprovação de um revisor.
[600ms]
[confident] Esse ajuste fica na configuração de segurança, um para code scanning, um para secret scanning e um para o Dependabot.

## Step 11 · Automate with the REST API and the CLI

[confident] Tudo o que você clica nas páginas de configuração dá para automatizar com script. O comando api do GitHub CLI chama a REST API para você.
[600ms]
[calm] Você cria uma configuração, aplica aos repositórios e define os padrões para os novos, cada passo com a sua própria chamada.
[600ms]
[serious] Se um ajuste é imposto, uma chamada de API que tenta mudá-lo parece funcionar, mas não altera nada. Por isso, sempre leia o status de volta.

## Step 12 · Recap: A Rollout Checklist

[calm] Siga a lista em ordem. Escolha o nível, monte o pacote, defina o padrão e aplique em massa.
[600ms]
[confident] Depois, escolha a configuração do CodeQL e governe com políticas, rulesets, funções e regras de dispensa.
[600ms]
[proud] Termine automatizando com a REST API. Esse é o domínio de administração de segurança do guia de estudo do G H 500.
