# NSGs & ASGs — narração (pt)

## Step 1 · A network security group is a rule list

[confident] Um grupo de segurança de rede é, no fundo, apenas uma lista de regras.
[400ms]
[calm] Cada uma permite ou nega tráfego, de entrada ou de saída. Você associa o grupo a uma sub-rede ou a uma interface de rede, e o Azure aplica isso na própria plataforma: não existe nenhum agente rodando dentro da máquina virtual.
[500ms]
[helpful] E elas têm estado. Se você permite um fluxo de saída, a resposta volta permitida automaticamente. Você nunca precisa escrever uma regra de entrada correspondente para essa resposta.

## Step 2 · Anatomy of one rule

[calm] Toda regra são as mesmas seis decisões. Prioridade, origem, destino, porta, protocolo, e permitir ou negar.
[500ms]
[confident] A prioridade é o que decide tudo. A primeira regra que corresponde vence, e nada depois dela chega sequer a ser lido.
[400ms]
[helpful] Os números vão de cem a quatro mil e noventa e seis, do menor para o maior. E você não pode ter duas regras com a mesma prioridade na mesma direção.

## Step 3 · The rules you never wrote

[curious] Aqui vai algo que surpreende as pessoas. Todo NSG já vem com seis regras que você não escreveu: três de entrada e três de saída.
[500ms]
[calm] Elas ficam nos números mais altos de todos, então qualquer coisa que você adicionar é lida antes. Você não pode apagá-las. Só pode sobrescrevê-las.
[400ms]
[confident] E é exatamente por isso que uma máquina virtual recém-criada consegue sair para a internet, mas nada na internet consegue chegar até ela. Uma regra padrão permite a chamada; outra bloqueia quem bate à porta.

## Step 4 · Subnet, NIC — or the order they run in

[calm] Você pode associar um NSG em qualquer um dos dois níveis: na sub-rede ou na interface de rede.
[400ms]
[curious] Se associar nos dois, a ordem passa a importar, e as duas listas precisam concordar para que um pacote passe.
[500ms]
[helpful] A orientação oficial é escolher um nível, não os dois. Quando existem regras em dois níveis, elas podem se contradizer silenciosamente, e investigar isso é genuinamente doloroso.

## Step 5 · The app tier keeps spreading

[calm] Vamos deixar isso concreto. Máquinas virtuais de aplicação em uma sub-rede, um banco de dados em outra, dentro de uma mesma rede virtual.
[500ms]
[curious] A cada sprint o time adiciona mais máquinas de aplicação. QA quer uma sub-rede. O teste de integração quer outra. E cada um desses endereços acaba colado, na mão, dentro da mesma regra.
[400ms]
[concerned] Recrie uma máquina virtual e o endereço dela pode mudar, então a regra simplesmente para de corresponder, sem avisar. Pior ainda: um endereço nunca te diz a qual aplicação ele pertence.

## Step 6 · An application security group is a label

[confident] A lista de endereços mantida à mão é justamente a parte que vive quebrando. Então pare de mantê-la.
[500ms]
[calm] Um grupo de segurança de aplicativo substitui essa lista por um nome que você associa à máquina. Daí em diante a sua regra cita o grupo, e o Azure segue resolvendo os endereços conforme as máquinas vão e vêm.
[400ms]
[helpful] O Azure registra essa participação na interface de rede da máquina virtual, e é por isso que todos os membros precisam estar na mesma rede virtual. Estar em sub-redes diferentes não é problema nenhum.

## Step 7 · One network, two subnets

[calm] Esta é a topologia. A camada de aplicação e o banco de dados têm, cada um, a sua própria sub-rede, dentro de uma mesma rede virtual.
[400ms]
[confident] Nos dois casos, a máquina virtual chega à rede através de uma NIC, e é a NIC que carrega o IP privado.
[500ms]
[helpful] Manter as duas camadas em uma única VNet é proposital. É o único arranjo em que uma única regra consegue citar um ASG tanto na origem quanto no destino.

## Step 8 · Name the machines, attach the filter

[calm] Toda máquina de aplicação entra em um grupo. A máquina do banco de dados entra em outro. Isso é definido na própria máquina virtual e fica registrado na interface de rede dela.
[500ms]
[confident] O NSG vai na sub-rede do banco de dados, porque é ela que está sendo protegida.
[400ms]
[helpful] E um ASG atravessa sub-redes, não redes. Quando a sub-rede de QA chegar no próximo sprint, as máquinas dela entram no mesmo grupo, e nenhuma regra é tocada.

## Step 9 · The rule, written in names

[confident] Agora a regra em si. Negue tudo em direção ao banco de dados, e acima disso permita o grupo da aplicação.
[500ms]
[calm] Agora os dois lados são nomes. Não sobrou um único endereço nessa regra para manter.
[400ms]
[encouraging] Adicione uma máquina, recrie uma máquina, adicione uma sub-rede inteira de QA: a regra nunca muda. A participação no grupo é a única coisa que alguém edita.

## Step 10 · A new subnet costs nothing

[calm] Então QA finalmente ganha a sua própria sub-rede. As máquinas dela entram no mesmo grupo de segurança de aplicativo.
[500ms]
[confident] E essa é a mudança inteira. Nenhuma regra foi adicionada, editada ou repriorizada. O NSG do banco de dados nem chegou a ser aberto.
[400ms]
[encouraging] Esse é todo o retorno de dar nome às coisas. A regra descreve um papel, e papéis não mudam quando o espaço de endereços muda.

## Step 11 · Filter by intent, not by address

[confident] Então, juntando tudo.
[400ms]
[calm] O NSG aplica a decisão. O grupo de segurança de aplicativo é o que permite você expressar essa decisão na linguagem que a sua arquitetura já usa.
[600ms]
[encouraging] Na próxima vez que estiver prestes a colar um endereço IP dentro de uma regra, pare e pergunte o que aquele endereço significa. E transforme isso no nome do grupo.
