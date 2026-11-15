# Narrator Script — Compute · Azure Virtual Desktop: Desktops for 500 Remote Staff

**Source animation:** [VirtualDesktop.html](../../../journeys/Compute/VirtualDesktop.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-desktop/>

---

## Step 1 · Desktops for 500 Remote Staff, No Laptops

[calm] A Contoso contrata quinhentos funcionários remotos e não vai enviar laptops para eles. Os dispositivos que eles já têm são todos diferentes.
[600ms]
[curious] Então a pergunta é: onde deve rodar o desktop Windows de todos eles?
[600ms]
[confident] A ideia é rodar os desktops em máquinas virtuais no Azure e transmiti-los para qualquer dispositivo. Isso é o Azure Virtual Desktop, e vamos projetá-lo peça por peça.

## Step 2 · Who Runs What: Microsoft vs You

[calm] O Azure Virtual Desktop é um serviço, então a primeira pergunta é quem cuida de quê.
[600ms]
[confident] A Microsoft cuida do plano de controle: o acesso web, o broker, o gateway e o diretório de recursos. Você não gerencia servidores de gateway, como faria com os Remote Desktop Services.
[600ms]
[serious] Você cuida das VMs de session host, da imagem e dos apps delas, da rede virtual, do backup e da recuperação, e das identidades.

## Step 3 · Five Objects Connect Users to a Desktop

[calm] Cinco objetos conectam os usuários a um desktop. Um workspace agrupa application groups, e é a lista que os usuários veem.
[600ms]
[curious] Um application group publica um desktop ou RemoteApps a partir de um único host pool, e é nele que você atribui os usuários, de preferência como grupos.
[600ms]
[confident] O host pool é um conjunto de VMs de session host criadas a partir da mesma imagem. Um application group pertence a um único workspace.

## Step 4 · Pooled or Personal Host Pool?

[calm] Existem dois tipos de host pool. No pool compartilhado, vários usuários dividem um session host, para reduzir o custo.
[600ms]
[curious] Os pools compartilhados também escolhem um método de balanceamento de carga. O breadth-first distribui as novas sessões de maneira uniforme, enquanto o depth-first enche um host até o limite de sessões antes de passar para o próximo.
[600ms]
[confident] Um pool pessoal dá a cada usuário a sua própria VM, então o balanceamento de carga não se aplica. O Windows multissessão é exclusivo do Azure Virtual Desktop.

## Step 5 · Profiles Follow the User: FSLogix

[curious] Em um pool compartilhado, o usuário pode cair em um host diferente a cada vez. Então, como o perfil dele acompanha o usuário?
[600ms]
[confident] Os contêineres de perfil do FSLogix são a resposta recomendada. No login, o contêiner é conectado a partir de um compartilhamento de arquivos, como um disco virtual, e o perfil parece nativo.
[600ms]
[reassuring] O Azure Files é recomendado para a maioria dos clientes, e o Azure NetApp Files é outra opção no Azure.

## Step 6 · Identity: Entra ID Signs Users In

[calm] O Microsoft Entra ID sempre autentica o usuário, então todo usuário precisa de uma conta do Entra.
[600ms]
[serious] Contas pessoais da Microsoft não são compatíveis.
[600ms]
[confident] Os session hosts ingressam no mesmo tenant do Entra ou em um domínio do Active Directory. Com um domínio, as contas de usuário precisam ser identidades híbridas, ou seja, sincronizadas.

## Step 7 · Three Ways to Join Session Hosts

[calm] Você escolhe o tipo de ingresso conforme o lugar em que ficam as suas identidades e os seus apps.
[600ms]
[curious] Hosts ingressados no Entra não precisam ter visibilidade de rede para um controlador de domínio e podem ser registrados no Intune automaticamente. Com um domínio, o Microsoft Entra Connect sincroniza as contas, ou o Entra Domain Services sincroniza a partir do Entra ID.
[600ms]
[serious] Uma regra importa mais que todas: um host pool deve ter session hosts de um único tipo de ingresso.

## Step 8 · Network: Outbound Only, Then Shortpath

[calm] Por padrão, o cliente e o session host se conectam de saída, via TLS, ao gateway, que retransmite a sessão.
[600ms]
[reassuring] Isso é o reverse connect, então nenhuma porta RDP de entrada é aberta.
[600ms]
[curious] O RDP Shortpath pode adicionar um caminho UDP em paralelo, para ter mais confiabilidade e menos latência, com o TCP como alternativa. E o Private Link mantém o tráfego em endpoints privados.

## Step 9 · Autoscale: Pay for Hosts Only When Used

[calm] Um scaling plan liga e desliga os session hosts, então você não paga por hosts ociosos durante a noite.
[600ms]
[curious] Ele passa por quatro fases por dia: ramp-up, pico, ramp-down e fora do pico. As programações de pool compartilhado usam um limite de capacidade e uma porcentagem mínima de hosts.
[600ms]
[confident] As programações de pool pessoal agem com base no estado da sessão, como sessão encerrada ou desconectada. As quantidades de hosts aqui são só uma ilustração.

## Step 10 · Run It: Images, Cost and Monitoring

[calm] Para colocar isso no ar, crie uma golden image. Personalize uma VM, rode o sysprep e depois capture a VM em uma Azure Compute Gallery.
[600ms]
[confident] Você atualiza os hosts de um pool compartilhado reimplantando-os a partir de uma imagem atualizada. Hosts multissessão, autoscale e Start VM on Connect mantêm o custo sob controle.
[600ms]
[reassuring] E o Azure Virtual Desktop Insights mostra como está o desempenho de tudo, usando um workspace do Log Analytics.

## Step 11 · Pick a Design for Each User Type

[curious] Comece pelo usuário. Selecione um tipo, e você vê o perfil e a abordagem de escalonamento que ele indica.
[600ms]
[confident] Um task worker se encaixa em hosts multissessão de pool compartilhado com depth-first. Um desenvolvedor recebe um host pool pessoal, com uma VM para cada um. Um prestador de serviço pode usar um RemoteApp pelo navegador, com hosts ingressados no Entra, para uma identidade externa.
[600ms]
[serious] Essas são sugestões de design, então teste com os seus próprios apps antes de dimensionar qualquer coisa.

## Step 12 · Azure Virtual Desktop, All in One

[calm] Aqui está o design completo para os quinhentos funcionários da Contoso: cinco objetos, o tipo certo de host pool e perfis que acompanham os usuários.
[600ms]
[confident] Some a isso um plano de identidade, uma rede só de saída, autoscale e boas imagens.
[600ms]
[proud] Guarde três perguntas: o que a Microsoft cuida, o que você cuida e o que você precisa projetar? Esse é o centro da habilidade A Z 305 de projetar soluções de computação.
