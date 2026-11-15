# Narrator Script — Network · VPN gateway SKUs and policies

**Source animation:** [GatewaySkusAndPolicies.html](../../../journeys/Network/GatewaySkusAndPolicies.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/vpn-gateway/vpn-gateway-about-vpn-gateway-settings>
- <https://learn.microsoft.com/azure/vpn-gateway/about-gateway-skus>
- <https://learn.microsoft.com/azure/vpn-gateway/design>
- <https://learn.microsoft.com/azure/vpn-gateway/point-to-site-about>

---

## Step 1 · Which gateway, which settings?

[calm] A Contoso Retail tem uma filial e uma equipe de trabalhadores remotos, e as duas partes precisam acessar o Azure.
[600ms]
[curious] A filial se conecta por um túnel site-to-site, a partir do dispositivo VPN dela. Os trabalhadores remotos usam ponto a site, com um túnel de cliente e um login.
[600ms]
[confident] Quatro escolhas em um gateway VPN determinam o quanto isso vai funcionar bem. Vamos fazer uma de cada vez.

## Step 2 · Route-based or policy-based?

[calm] O tipo de VPN define como o tráfego é associado a um túnel e quais recursos existem. Resolva isso antes de escolher o SKU.
[600ms]
[confident] O baseado em rotas é o que libera ponto a site, BGP e ativo-ativo.
[600ms]
[serious] O baseado em políticas existe só no SKU Basic, com um túnel e sem ponto a site. Não dá para converter: você exclui o gateway e cria um baseado em rotas.

## Step 3 · What a bigger SKU buys you

[curious] Um nível mais alto traz mais CPU e largura de banda. Isso eleva quatro limites: os túneis site-to-site, as conexões ponto a site, a classe de throughput e as VMs atrás do gateway.
[600ms]
[serious] Todo nível acima do Basic também traz recursos de produção que o Basic não tem, como BGP, ativo-ativo, redundância de zona, RADIUS, políticas personalizadas e IPv6.
[600ms]
[reassuring] Os números de throughput são referências, não garantias. Por isso, consulte a tabela atual quando for dimensionar um gateway de verdade.

## Step 4 · Generation and the AZ suffix

[calm] O nome de um SKU tem duas partes: a geração e se ele termina em AZ.
[600ms]
[confident] A geração dois dá mais throughput no mesmo nível e inclui os níveis maiores. AZ significa redundante entre zonas, nas regiões que têm zonas de disponibilidade.
[600ms]
[serious] Os SKUs AZ, redundantes entre zonas, são os que você cria hoje. O Basic não vai ser desativado, mas é pensado para desenvolvimento e teste.

## Step 5 · Active-standby or active-active?

[calm] Todo gateway VPN tem duas instâncias. Por padrão, uma trabalha e a outra espera, e isso é ativo-standby.
[600ms]
[confident] No ativo-ativo, as duas trabalham, cada uma com seu próprio IP público. Ele exige um gateway baseado em rotas que não seja Basic, além de IPs públicos estáticos Standard.
[600ms]
[serious] Quando o standby assume, espere uma breve interrupção, e os usuários de ponto a site precisam se reconectar.

## Step 6 · Dual redundancy and BGP failover

[curious] Combine um gateway ativo-ativo com dois dispositivos locais, e você terá quatro túneis, todos ativos.
[600ms]
[impressed] O BGP retira as rotas de um túnel que falhou, e o tráfego passa sozinho para os outros.
[600ms]
[serious] Você precisa de dois gateways de rede local, duas conexões e BGP, para que as duas conexões possam carregar os mesmos prefixos. Confirme se os dois dispositivos aceitam BGP.

## Step 7 · How the tunnel is built: IKE, then IPsec

[calm] Os dois dispositivos combinam as regras em duas fases.
[600ms]
[curious] Na fase um, o IKE, eles combinam como conversar: criptografia, integridade e um grupo DH. Na fase dois, o IPsec, combinam como proteger os dados, com um grupo PFS.
[600ms]
[reassuring] Se você não pedir nada especial, o Azure oferece um conjunto padrão de propostas, escolhidas para funcionar com a maioria dos dispositivos.

## Step 8 · When the partner device dictates

[calm] Às vezes, uma regra de conformidade ou um firewall mais antigo aceita só uma combinação.
[600ms]
[confident] Uma política personalizada de IPsec e IKE na conexão define exatamente qual. É uma política por conexão, e não está disponível no Basic.
[600ms]
[reflective] Os valores mostrados são só um exemplo, não uma recomendação. Os seletores baseados em políticas também deixam um gateway baseado em rotas conversar com firewalls baseados em políticas, sem trânsito.

## Step 9 · Point-to-site tunnel types

[calm] Um trabalhador remoto inicia o túnel a partir de um laptop. O tipo de túnel define quais dispositivos podem se conectar e quais firewalls deixam o tráfego passar.
[600ms]
[confident] O OpenVPN é baseado em TLS pela porta quatro quatro três, então passa pela maioria dos firewalls e atende a maior variedade de clientes. O IKEv2 é baseado em padrões, mas algumas redes bloqueiam as portas UDP dele.
[600ms]
[serious] O SSTP só funciona no Windows e está sendo desativado. Não pode ser habilitado a partir de trinta e um de agosto de dois mil e vinte e seis, e para de funcionar em trinta e um de março de dois mil e vinte e sete.

## Step 10 · Who gets in: three sign-in methods

[calm] Antes de aceitar um túnel, o gateway precisa autenticar o usuário. Escolha o método de acordo com o sistema de identidade que você já usa.
[600ms]
[confident] O Microsoft Entra ID traz Acesso Condicional e MFA, mas só funciona com OpenVPN e o Azure VPN Client. O RADIUS usa credenciais do AD, adiciona MFA pelo NPS e não existe no Basic.
[600ms]
[reassuring] Você pode ativar vários métodos ao mesmo tempo, desde que cada cliente aceite pelo menos um.

## Step 11 · ExpressRoute gateway, with VPN beside it

[calm] O ExpressRoute tem seu próprio tipo de gateway e seus próprios SKUs: ErGw1Az, ErGw2Az, ErGw3Az e ErGwScale. Um SKU maior significa mais CPU e mais largura de banda.
[600ms]
[curious] Um gateway VPN site-to-site ao lado dele pode servir de backup, se o circuito falhar.
[600ms]
[serious] Para isso, você precisa de um gateway VPN baseado em rotas que não seja Basic e de uma sub-rede de gateway barra vinte e sete ou maior. Dê preferência às rotas do ExpressRoute no ambiente local.

## Step 12 · Try your own requirements

[curious] Agora é a sua vez. Defina os requisitos à esquerda: filiais, classe de throughput, resiliência, dispositivo da filial e trabalhadores remotos.
[600ms]
[impressed] As quatro configurações à direita se acendem mostrando o que escolher e por quê.
[600ms]
[reassuring] É um modelo de ensino, baseado nas orientações do Learn, e não uma ferramenta de dimensionamento. Confirme limites e preços nas páginas atuais antes de implantar.

## Step 13 · One gateway, four decisions

[calm] Aqui vai o resumo: baseado em rotas e redundante entre zonas, e ativo-ativo com BGP onde for importante.
[600ms]
[confident] Só adicione uma política personalizada quando um parceiro exigir, e escolha um método de login que combine com o seu sistema de identidade.
[600ms]
[proud] O A Z 700 e o A Z 305 esperam que você escolha essas configurações a partir dos requisitos. Os guias de estudo do Learn são a próxima parada.
