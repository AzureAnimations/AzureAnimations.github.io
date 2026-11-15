# Roteiro de narração — Azure PaaS Compute · 03 · App Service Networking

**Source animation:** `static/v2/Compute/AppServiceNetworking.html`

---

## Step 1 · intro

[confident] Vamos falar de rede — e da ideia que faz tudo se encaixar.
[600ms]
[calm] Por padrão, o seu App Service é acessível pela internet pública, e pode chamar qualquer endpoint da internet.
[700ms]
[serious] O tráfego tem duas direções — entrada, vindo para o seu app, e saída, indo dele. Os recursos de entrada e de saída são ferramentas diferentes; mantenha-os claros e todo o resto se segue.

## Step 2 · inbound

[confident] Primeiro, a entrada. As restrições de acesso são uma lista de permitir e negar que fica na frente do seu app.
[600ms]
[calm] Elas filtram as requisições de entrada no front-end, antes do seu código, usando regras de I-P e marcas de serviço — avaliadas de cima para baixo.
[700ms]
[reassuring] Pense nisso como um firewall para o tráfego web de entrada: permita o seu escritório e o seu Front Door, e negue todos os outros.

## Step 3 · privateendpoint

[confident] Quer ir além e tirar o seu app da internet pública por completo? Adicione um ponto de extremidade privado.
[600ms]
[calm] Através do Azure Private Link, ele dá ao seu app um endereço privado dentro da sua própria rede virtual.
[700ms]
[reassuring] Desative o acesso público, e o app fica acessível apenas pela sua rede. É somente de entrada, e ajuda a impedir que os dados saiam por onde não devem.

## Step 4 · outbound

[confident] Agora inverta a direção — a saída, as chamadas que o seu app faz.
[600ms]
[calm] A integração com rede virtual roteia esse tráfego de saída por uma sub-rede delegada, para que o seu app alcance bancos de dados, armazenamento e pontos de extremidade privados dentro da sua V-Net.
[700ms]
[serious] É a contraparte de saída de um ponto de extremidade privado: isto deixa o seu app chamar recursos privados — ele não recebe tráfego.

## Step 5 · nat

[confident] Mais um truque de saída. Conecte um NAT gateway a essa sub-rede de integração.
[600ms]
[calm] Agora todo o tráfego de saída do seu app sai por um único endereço I-P dedicado — e o esgotamento de portas SNAT sob carga alta simplesmente desaparece.
[700ms]
[reassuring] A recompensa: os parceiros podem colocar em lista de permissão um único endereço estável, em vez de uma faixa inteira que muda.

## Step 6 · recap

[proud] Então — duas direções, bem separadas. As restrições de acesso e os pontos de extremidade privados guardam a entrada; a integração com rede virtual e um NAT gateway moldam a saída.
[700ms]
[encouraging] Só lembre da regra de ouro — ferramentas de entrada não resolvem problemas de saída, e vice-versa. Combine o recurso com a direção.
