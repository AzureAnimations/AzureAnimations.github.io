# Narrator Script — GitHub · Run Actions at Scale: Runners, Policies, Secrets and Variables

**Source animation:** [ActionsAtScale.html](../../../journeys/GitHub/ActionsAtScale.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · From one team to a thousand repositories

[calm] A equipe da Priya rodava um workflow em um único runner. Isso é simples.
[600ms]
[concerned] Agora mil repositórios da Contoso querem usar o Actions, e todas as equipes fazem as mesmas perguntas.
[600ms]
[confident] Actions em escala é uma questão de governança: máquinas, acesso, ações permitidas, segredos e custo.

## Step 2 · Hosted runners: what is preinstalled

[calm] Os runners hospedados no GitHub já vêm com o aplicativo do runner e muitas ferramentas pré-instaladas, e o GitHub faz a manutenção deles.
[600ms]
[curious] Antes de instalar qualquer coisa, veja o que já está na imagem. O log do job de configuração e o readme da imagem mostram isso.
[600ms]
[confident] As ferramentas são atualizadas toda semana, então use as setup actions para escolher uma versão e manter a sua estável quando a imagem mudar.

## Step 3 · Larger runners and installing software

[curious] Precisa de mais potência? Os runners maiores oferecem mais núcleos, memória e disco, além de grupos de runners, autoscaling e endereços estáticos.
[600ms]
[confident] Eles estão disponíveis para o GitHub Team e o Enterprise Cloud, e são cobrados por minuto, só enquanto os jobs os usam.
[600ms]
[calm] Precisa de mais uma ferramenta? Instale durante a execução do job, com uma setup action, um gerenciador de pacotes ou um contêiner, em vez de criar uma imagem nova.

## Step 4 · Self-hosted runners

[calm] Com os runners auto-hospedados, você registra a sua própria máquina usando um token de curta duração e dá rótulos a ela.
[600ms]
[confident] Os jobs o encontram pelo rótulo, e todos os rótulos precisam coincidir. Os scale sets acrescentam autoscaling.
[600ms]
[serious] A manutenção e as atualizações da máquina ficam com você. E use runners auto-hospedados só com repositórios privados, porque um fork de um repositório público pode executar código na sua máquina.

## Step 5 · Runner groups: who can use which runners

[calm] Um grupo de runners define quais repositórios podem enviar jobs para um conjunto de runners.
[600ms]
[confident] Ele reúne runners maiores ou auto-hospedados, e a política de acesso é: todos os repositórios ou uma lista selecionada. Aí o workflow pede o grupo pelo nome.
[600ms]
[intrigued] Um grupo do enterprise continua fechado para uma organização até que um proprietário escolha quais repositórios podem usá-lo.

## Step 6 · Networking: IP allow lists and static IPs

[calm] Um firewall que só aceita endereços conhecidos precisa de uma origem estável.
[600ms]
[concerned] Os runners hospedados padrão usam muitos intervalos de IP, o que dá uma lista de permissão ruim.
[600ms]
[confident] Os runners maiores podem dar um intervalo de IP estático ao seu pool, e um runner auto-hospedado tem o seu próprio endereço IP.

## Step 7 · Troubleshoot a runner

[curious] Um job que fica esperando sem fim sempre tem uma causa. Siga o caminho passo a passo.
[600ms]
[confident] Verifique primeiro os rótulos e o grupo, depois se o runner está ocioso, ativo ou offline, e por fim a rede e os limites.
[600ms]
[reassuring] Comece pelo mais barato. Um erro de digitação no rótulo e o status do runner explicam a maioria dos jobs em espera.

## Step 8 · Policies: allow and deny lists

[calm] Os administradores escolhem quais ações e workflows reutilizáveis podem rodar.
[600ms]
[confident] Entradas de permissão, entradas de bloqueio e a fixação por SHA barram código indesejado antes mesmo de o workflow começar.
[600ms]
[serious] Uma política do enterprise pode se sobrepor a uma configuração da organização, e exigir a fixação vale também para as ações da sua própria organização.

## Step 9 · Secrets and variables by scope

[calm] Defina um valor uma única vez, no nível certo: organização, repositório ou ambiente.
[600ms]
[confident] Um valor da organização é compartilhado, um valor de ambiente pertence a um único destino de implantação e, quando os nomes se repetem, vence o nível mais específico.
[600ms]
[curious] Os segredos guardam valores sensíveis e são criptografados antes de chegar ao GitHub. As variáveis guardam configurações comuns.

## Step 10 · Use them, and manage them with the API

[calm] Os workflows leem as variáveis pelo contexto vars e os segredos pelo contexto secrets.
[600ms]
[confident] A REST API cria os dois. Para um segredo, obtenha a chave pública, criptografe o valor e então envie. Uma variável só precisa de um nome e de um valor simples.
[600ms]
[serious] Os logs mascaram os segredos, mas o mascaramento não é garantido, então nunca imprima um segredo.

## Step 11 · Usage and cost

[curious] Cada tipo de runner conta de um jeito, então saiba o que é gratuito e o que é cobrado.
[600ms]
[confident] Os runners padrão são gratuitos em repositórios públicos, consomem o uso incluído nos privados, e os runners maiores são cobrados por minuto.
[600ms]
[reflective] O uso é cobrado do proprietário do repositório. Os runners auto-hospedados não custam nada para usar com o Actions, mas você paga para manter as máquinas rodando.

## Step 12 · Recap: an Actions governance checklist

[calm] Seis verificações para fazer antes de o Actions se espalhar pela empresa, cada uma com uma configuração que você sabe onde achar.
[600ms]
[confident] Runners, grupos, rede, políticas, segredos e variáveis, e uso. Agora você sabe onde encontrar cada uma dessas configurações.
[600ms]
[reassuring] As opções que você vê dependem do seu plano do GitHub, e uma política do enterprise pode se sobrepor à da organização.
