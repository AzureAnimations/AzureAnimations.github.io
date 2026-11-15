# Narrator Script — Network · Configure and troubleshoot Azure Load Balancer

**Source animation:** [LoadBalancerConfigAndTroubleshooting.html](../../../journeys/Network/LoadBalancerConfigAndTroubleshooting.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/load-balancer/load-balancer-overview>

---

## Step 1 · One Front End, Many Backends

[calm] A loja online da Contoso roda em três máquinas virtuais. Um balanceador de carga dá aos clientes um único endereço de frontend.
[600ms]
[confident] Ele distribui as novas conexões entre as máquinas saudáveis do pool de backend.
[600ms]
[curious] As regras decidem para onde vai cada fluxo, e as sondas de saúde decidem quem está saudável. São essas as partes que vamos configurar.

## Step 2 · Public or Internal, Standard SKU

[curious] O IP de frontend define o tipo. Um IP público faz um balanceador de carga público, e um IP privado faz um interno.
[600ms]
[confident] Um balanceador de carga interno funciona dentro de uma rede virtual e não aceita tráfego da internet.
[600ms]
[serious] Use o SKU Standard. O Basic foi desativado em trinta de setembro de dois mil e vinte e cinco. O Gateway é o terceiro SKU, para appliances.

## Step 3 · Backend Pools: NIC or IP

[calm] Um pool de backend lista quem atende o tráfego. Você o preenche por interface de rede, ou por endereço IP mais rede virtual.
[600ms]
[confident] Um pool por interface de rede associa VMs ou instâncias de conjunto de escala. Um pool baseado em IP permite preencher endereços antecipadamente e exige o Standard.
[600ms]
[reflective] Um mesmo balanceador de carga pode ter os dois tipos de pool, mas nunca misturados no mesmo pool.

## Step 4 · Health Probes

[curious] O balanceador de carga sonda todos os backends. Aqui, o web-2 para de responder, então deixa de receber novas conexões.
[600ms]
[confident] Uma sonda tem protocolo, porta, intervalo e limite. A sonda TCP falha quando não há resposta, e a sonda HTTP falha com qualquer resposta diferente de duzentos.
[600ms]
[reassuring] No Standard, os fluxos TCP já estabelecidos continuam. Use a chave para ver os dois estados.

## Step 5 · Load-Balancing Rules

[calm] Uma regra mapeia um IP e uma porta de frontend para uma porta de backend, usando uma sonda de saúde.
[600ms]
[curious] Por padrão, cada nova conexão passa por um hash de cinco valores, então o mesmo cliente pode cair em máquinas diferentes.
[600ms]
[confident] Se você precisa que um cliente continue na mesma máquina, mude para persistência de sessão por IP do cliente. Trocar o modo não causa indisponibilidade.

## Step 6 · Inbound NAT Rules

[curious] Uma regra de balanceamento de carga escolhe qualquer VM saudável. Às vezes você quer uma máquina específica.
[600ms]
[confident] Uma regra de NAT de entrada encaminha uma porta de frontend para uma VM escolhida, como S S H ou R D P para um único servidor que você define.
[600ms]
[encouraging] Use a versão dois, que atinge o pool inteiro e pré-aloca as portas. E, ao contrário de uma regra de balanceamento de carga, ela não precisa de sonda.

## Step 7 · Outbound Rules and SNAT Ports

[calm] As VMs de backend podem sair pelo IP público do balanceador de carga, usando S N A T.
[600ms]
[confident] Com uma regra de saída, você escolhe o frontend e define quantas portas S N A T cada VM recebe.
[600ms]
[reassuring] Para escalar mais, adicione IPs de frontend ou coloque um gateway NAT na sub-rede, que tem precedência.

## Step 8 · HA Ports and Gateway Load Balancer

[curious] Firewalls e outros appliances precisam de todas as portas.
[600ms]
[confident] Uma regra de portas H A usa o protocolo all e a porta zero em um balanceador de carga Standard interno, então uma única regra balanceia todos os fluxos.
[600ms]
[impressed] Aí um Gateway Load Balancer encadeia esses appliances a um frontend público, sem precisar de rotas definidas pelo usuário.

## Step 9 · Troubleshoot: Probe Failing

[concerned] Agora o web-2 aparece como Down. A sonda precisa passar por três barreiras no caminho.
[600ms]
[confident] Primeiro o grupo de segurança de rede, depois o firewall do sistema convidado, depois um listener na porta certa. Cada um precisa permitir o endereço da sonda.
[600ms]
[determined] Confira nessa ordem e acompanhe o status da sonda de saúde por instância.

## Step 10 · Troubleshoot: Backend Unreachable

[serious] A sonda está Up, mas os usuários continuam com falha. Verifique a porta de dados, o grupo de segurança de rede e qualquer fluxo que volte para ele mesmo.
[600ms]
[concerned] Não chame um frontend interno a partir de uma VM do próprio pool dele. O fluxo pode voltar para a mesma máquina e dar timeout.
[600ms]
[confident] Se uma VM não consegue chamar para fora, ela precisa de um método de saída explícito, como uma regra de saída ou um gateway NAT na sub-rede.

## Step 11 · Where Do I Look First?

[calm] Comece pelo sintoma. Cada ramo indica a primeira coisa a verificar.
[600ms]
[confident] Se os clientes não conseguem se conectar, veja o status da sonda. Se as VMs não conseguem sair, verifique o método de saída e as métricas de S N A T. Se o tráfego está desigual, verifique a persistência de sessão.
[600ms]
[proud] Isso cobre as habilidades de balanceador de carga tanto do A Z 104 quanto do A Z 700.
