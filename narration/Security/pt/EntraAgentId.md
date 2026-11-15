# Narrator Script — Security · Secure AI agents with Microsoft Entra Agent ID — Azure Security Journey

**Source animation:** [EntraAgentId.html](../../../journeys/Security/EntraAgentId.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/agent-id/what-is-microsoft-entra-agent-id>
- <https://learn.microsoft.com/entra/agent-id/agent-owners-sponsors-managers>
- <https://learn.microsoft.com/entra/identity/conditional-access/agent-id>
- <https://learn.microsoft.com/entra/id-governance/agent-id-governance-overview>

---

## Step 1 · An agent that acts on its own

[curious] O Invoice Agent da Contoso lê e-mails, arquivos e dados financeiros de forma agendada, sem ninguém conectado.
[600ms]
[serious] Se ele for sequestrado, o atacante herda tudo o que ele consegue acessar.
[600ms]
[calm] Esta lição acompanha um agente, da identidade até a contenção. Os recursos que ainda estão em versão prévia aparecem indicados.

## Step 2 · Why agents need identities of their own

[calm] Imagine que o agente usa a conta de uma pessoa. Olhe o log: não dá para saber quem agiu, se foi a pessoa ou o agente.
[600ms]
[confident] Uma identidade de agente separada mantém as ações do agente distintas das ações das pessoas e permite dimensionar o acesso dele.
[600ms]
[curious] Ela também mantém os agentes longe das funções mais críticas e escala bem, porque os agentes entram e saem o tempo todo.

## Step 3 · Microsoft Entra Agent ID: identities and blueprints

[calm] O Entra Agent ID dá aos agentes de IA identidades criadas sob medida no seu diretório.
[600ms]
[curious] Um blueprint de identidade de agente é o modelo. Cada identidade de agente é criada a partir dele, com credenciais e permissões próprias.
[600ms]
[reflective] Algumas proteções exigem o licenciamento do Microsoft Agent 365, então confira a página de licenciamento atual. Os agentes ficam no centro de administração do Entra.

## Step 4 · Who owns and sponsors an agent

[calm] Toda identidade de agente precisa de pessoas responsáveis por ela. Os proprietários cuidam da parte técnica, e são opcionais.
[600ms]
[confident] Os patrocinadores representam o negócio, e é obrigatório ter pelo menos um. Eles respondem pela finalidade e pelo ciclo de vida do agente.
[600ms]
[reassuring] Um patrocinador pode desativar o agente, mas não pode reativá-lo. E se um patrocinador sair, o patrocínio passa para o gerente dele.

## Step 5 · What an agent may reach

[calm] O acesso vem por um pacote de acesso. Ele tem prazo, passa por aprovação e é dimensionado para o trabalho.
[600ms]
[curious] O Sam solicita o pacote para o agente, e o agente recebe só o que o pacote lista. Isso pode incluir grupos, permissões de API e funções do Entra.
[600ms]
[confident] Nos blueprints, comece só com os escopos delegados essenciais.

## Step 6 · Conditional Access for agents

[curious] Quando um agente pede um token de acesso ao Entra, o Acesso Condicional verifica os sinais primeiro.
[600ms]
[calm] Depois, ele permite ou bloqueia. Isso acontece toda vez que um token é emitido ou renovado.
[600ms]
[confident] Uma política pode ter como alvo um agente, um blueprint inteiro ou agentes com atributos que você atribuir. O risco do agente ainda está em versão prévia.

## Step 7 · Try it: change the risk level

[excited] Sua vez. Escolha um nível de risco para o Invoice Agent.
[600ms]
[curious] A política bloqueia só o nível que ela indica, então observe quais níveis ainda recebem um token.
[600ms]
[reassuring] Na vida real, comece no modo somente relatório antes de ativar a política.

## Step 8 · Review access and remove what is not needed

[calm] O acesso nunca deve durar mais do que a necessidade. Os pacotes expiram, e o patrocinador recebe lembretes conforme o fim se aproxima.
[600ms]
[curious] O patrocinador pode pedir uma prorrogação, que pode abrir uma nova aprovação, ou deixar o acesso expirar.
[600ms]
[confident] As revisões de acesso deixam o Sam manter ou remover cada permissão, em uma agenda recorrente.

## Step 9 · The blast radius

[serious] Se o agente for comprometido, o raio de explosão é todo sistema que ele consegue alcançar, direto ou em poucos saltos.
[600ms]
[calm] Saber isso mostra o que proteger primeiro.
[600ms]
[reflective] Esses são caminhos possíveis, não uma garantia de que um atacante vai segui-los. O grafo é tão completo quanto os seus dados.

## Step 10 · Defender XDR: an agent in the attack path

[calm] Em um incidente, selecione o agente e escolha Ver raio de explosão.
[600ms]
[curious] O Defender XDR traça os caminhos possíveis dele até os seus alvos críticos.
[600ms]
[reflective] Isso exige o Microsoft Sentinel data lake e amplia e substitui a análise de caminho de ataque.

## Step 11 · Contain it

[determined] Primeiro pare o agente e só depois investigue. Confirmar o comprometimento define o risco como Alto, então a política o bloqueia.
[600ms]
[serious] Desativar interrompe todos os logins, e você pode desativar uma identidade ou o blueprint inteiro. Os logs mostram o que o agente fez.
[600ms]
[reassuring] Se foi alarme falso, descarte o risco e reative. Se foi real, faça primeiro a rotação das credenciais, ou aposente o agente.

## Step 12 · Recap: identity, policy, review, contain

[calm] Dê ao agente a própria identidade. Controle-o com políticas. Mantenha o acesso dele sempre atualizado.
[600ms]
[confident] E saiba como contê-lo. Os mesmos quatro movimentos servem para qualquer agente.
[600ms]
[proud] Isso corresponde ao S C 500 e às habilidades do A B 650. Os exames mudam, então leia os guias de estudo atuais.
