# Narrator Script — Network · Application Gateway: Listeners, Rules, Settings and Rewrites

**Source animation:** [ApplicationGatewayDeepDive.html](../../../journeys/Network/ApplicationGatewayDeepDive.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/application-gateway/configuration-overview>
- <https://learn.microsoft.com/azure/web-application-firewall/ag/ag-overview>

---

## Step 1 · A reverse proxy in its own subnet

[calm] O Application Gateway é um reverse proxy de camada sete para tráfego web, e ele fica dentro da sua rede virtual.
[600ms]
[confident] Os clientes nunca falam direto com o servidor. O gateway encerra a conexão do cliente e abre uma conexão nova com um servidor do pool de backend.
[600ms]
[reassuring] Ele recebe uma sub-rede só dele, e cada instância usa um endereço privado, então deixe espaço para escalar.

## Step 2 · v2 SKU, scaling and capacity units

[curious] Comece escolhendo um SKU da versão dois: Standard v2 ou WAF v2. A versão um, mais antiga, foi descontinuada.
[600ms]
[confident] Depois, escolha como ele escala: um número fixo de instâncias ou autoscale entre um mínimo e um máximo.
[600ms]
[reflective] As capacity units medem o que o gateway realmente usa em computação, conexões e throughput, e conta a maior das três.

## Step 3 · Frontend IP and listeners

[calm] O IP de frontend é onde os clientes chegam. Ele pode ser público, privado ou os dois.
[600ms]
[curious] Depois, um listener confere a porta, o protocolo e o nome do host. Um listener básico aceita qualquer host, enquanto um listener multi-site compara o nome do host, e assim vários sites podem dividir o mesmo endereço.
[600ms]
[serious] Na versão dois, a prioridade da regra define a ordem, então dê aos listeners curinga um número maior do que aos específicos de cada site.

## Step 4 · Backend pools

[calm] Um pool de backend é o grupo de servidores que recebem o tráfego.
[600ms]
[confident] Os membros podem ser máquinas virtuais, um conjunto de escala, um app do App Service ou qualquer endereço IP ou nome de domínio que você escolher.
[600ms]
[reassuring] Você liga o pool a uma ou mais regras de roteamento, e quando uma regra corresponde, o gateway envia a requisição só para membros saudáveis.

## Step 5 · HTTP settings

[curious] As configurações de backend dizem ao gateway como falar com os servidores: o protocolo, a porta e quanto esperar por uma resposta.
[600ms]
[confident] A afinidade por cookie mantém o usuário no mesmo servidor, usando um cookie que o gateway gerencia para você.
[600ms]
[serious] Fique de olho no nome do host também. Dá para substituí-lo, mas a melhor prática é manter o mesmo nome de host do cliente até o servidor.

## Step 6 · Health probes

[curious] Os probes decidem quais servidores recebem tráfego. Sem um probe personalizado, o gateway só pede o caminho raiz, e qualquer resposta de 200 a 399 conta como saudável.
[600ms]
[confident] Um probe personalizado verifica um caminho de saúde de verdade, no seu host, no seu intervalo, e pode comparar o código de status ou o corpo da resposta.
[600ms]
[determined] Teste algo que exercite as dependências do app, e um servidor com problema sai da rotação automaticamente.

## Step 7 · Routing rules

[calm] Uma regra de roteamento liga um listener a um pool de backend e às configurações dele.
[600ms]
[confident] Uma regra básica manda tudo para um pool. Uma regra baseada em caminho manda caminhos de URL diferentes para pools diferentes, com um pool padrão para o que sobrar.
[600ms]
[encouraging] Cada regra tem uma prioridade única, e uma delas é verificada primeiro. Use os botões para comparar os dois tipos.

## Step 8 · TLS termination and end-to-end TLS

[calm] Para o encerramento de TLS, você adiciona um certificado a um listener HTTPS. O gateway descriptografa a requisição, aplica as regras e pode encaminhar HTTP simples.
[600ms]
[confident] Para TLS de ponta a ponta, você também escolhe HTTPS na configuração de backend, e o gateway abre uma nova sessão criptografada com um servidor que tem o próprio certificado.
[600ms]
[reassuring] Se esse certificado vem de uma autoridade privada, faça o upload do certificado raiz. Clientes e backends precisam de TLS um ponto dois ou superior.

## Step 9 · Rewrite rule sets

[curious] Um rewrite set altera requisições e respostas à medida que elas passam. Ele pode mexer em cabeçalhos, no caminho da URL e na query string.
[600ms]
[confident] As condições decidem quando ele se aplica, e as ações adicionam, definem ou removem cabeçalhos. Usos comuns são adicionar o HSTS ou esconder um cabeçalho que revela o backend.
[600ms]
[impressed] Reavaliar o path map até deixa um caminho reescrito escolher outro pool. Isso exige a versão dois, e uma regra só pode ter um rewrite set.

## Step 10 · WAF, and when to add Front Door

[calm] O WAF v2 adiciona um web application firewall ao gateway, dentro da sua região.
[600ms]
[confident] Uma política de WAF tem regras gerenciadas baseadas no OWASP Core Rule Set, além das suas próprias regras personalizadas, que são verificadas primeiro.
[600ms]
[proud] O Application Gateway continua regional. Quando você precisa de um ponto de entrada global, coloque o Azure Front Door na frente, com um gateway atrás dele em cada região. Esse é o coração da habilidade do A Z 700.
