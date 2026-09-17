# Roteiro de narração - Regiões e zonas

**Source animation:** journeys/Fundamentals/RegionsAndZones.html
**Script status:** Authored voiceover.
**Language:** Português (Brasil)

As indicações entre colchetes não são faladas. As pausas ficam em linhas separadas. Cada bloco corresponde a uma etapa da animação.
<!-- Sources: https://learn.microsoft.com/azure/reliability/availability-zones-overview ; https://learn.microsoft.com/azure/architecture/aws-professional/regions-zones#multi-region-deployment-and-paired-regions -->

## Step 1 · Where should the shop run?

[calm] A Contoso organizou os recursos, mas os clientes precisam de uma loja ágil e seus dados precisam de um lugar adequado. Escolher a localização é uma decisão de negócio e de tecnologia.
[600ms]
[confident] A equipe considera quem usa a loja, quais serviços são necessários e o que acontece se esse local ficar indisponível.

## Step 2 · Choose a region

[calm] Uma região do Azure é uma área geográfica que contém datacenters. A Contoso compara distância dos clientes, requisitos legais e de dados, e disponibilidade dos serviços escolhidos.
[600ms]
[confident] Uma região próxima pode reduzir a demora da rede, mas proximidade não basta. O local também precisa atender aos outros requisitos da loja.

## Step 3 · Look inside the region

[calm] Por trás de um serviço de nuvem existem prédios reais cheios de equipamentos. Os datacenters abrigam servidores que processam trabalho, armazenamento que guarda dados e redes que conectam tudo.
[600ms]
[confident] Os prédios aqui são ilustrativos, não uma quantidade fixa por região. A computação em nuvem ainda depende de infraestrutura física.

## Step 4 · Separate the infrastructure

[calm] As zonas de disponibilidade separam grupos de datacenters dentro de uma região, com energia, refrigeração e rede independentes. Assim, um problema em uma zona tem menor chance de afetar as outras.
[600ms]
[confident] A Contoso confirma quais regiões e serviços oferecem suporte a zonas. As opções variam conforme o serviço e a configuração de implantação.

## Step 5 · One location is not redundancy

[calm] Colocar uma instância da aplicação em uma zona continua deixando a Contoso com apenas uma instância. Escolher a zona não cria outra cópia da loja nem dos dados.
[600ms]
[confident] Para tolerar a falha desse local, é preciso preparar capacidade em outro lugar e manter aplicação e dados utilizáveis.

## Step 6 · What if a zone fails?

[calm] Compare o estado saudável com a falha de uma zona e, depois, com a detecção e o redirecionamento. Uma segunda instância preparada oferece outro destino, mas o roteamento deve reconhecer a falha.
[600ms]
[confident] A disponibilidade depende dessas partes funcionando juntas, incluindo dados utilizáveis. Um segundo local, sozinho, não garante a conclusão da compra.

## Step 7 · The regional boundary matters

[calm] Várias zonas ajudam com falhas dentro de uma região. Mas, se a região inteira ficar indisponível, essas zonas ainda compartilham o mesmo limite regional.
[600ms]
[confident] Para essa falha maior, é necessário um projeto separado de recuperação regional, com implantação da aplicação, replicação dos dados e uma forma testada de fazer a troca.

## Step 8 · Check the geography before committing

[calm] A Contoso verifica requisitos geográficos e legais antes de escolher o local de recuperação. Um par de regiões não copia automaticamente a aplicação, e nem toda região tem um par.
[600ms]
[confident] Ambientes soberanos também têm critérios de elegibilidade e disponibilidade próprios. A escolha depende dos requisitos do trabalho, não apenas do mapa.

## Step 9 · Regions and Zones - All in One

[calm] Comece pela falha que precisa suportar: um problema local de infraestrutura, uma interrupção de zona ou uma interrupção regional. Depois prepare a aplicação, os dados e as rotas no limite adequado.
[600ms]
[confident] A Contoso já tem uma estratégia de localização. Agora vai escolher os serviços de computação que executarão o trabalho da loja.