# DNS & Private Link — narração (pt)

## Step 1 · A name, and who is allowed to use it

[calm] O seu aplicativo web precisa de uma conta de armazenamento.
[400ms]
[curious] Hoje ele pergunta pelo nome público, recebe de volta um endereço público, e o tráfego sai para a internet e volta — para dois recursos que estão na mesma região.
[500ms]
[confident] Três peças resolvem isso, e elas vivem sendo confundidas umas com as outras. O Azure DNS publica nomes para o mundo. O Private DNS responde nomes dentro de uma VNet. E o Private Link é o que dá ao recurso um endereço privado para responder.

## Step 2 · Azure DNS public zones

[calm] Uma zona pública é a hospedagem autoritativa de um nome de domínio que é seu.
[500ms]
[confident] Você aponta os servidores de nomes do seu registrador para o Azure e, a partir daí, é o Azure que responde às perguntas que o mundo faz sobre o seu domínio.
[400ms]
[helpful] Os registros daqui existem para serem vistos. Qualquer pessoa, de qualquer lugar, pode consultá-los — essa é exatamente a função. Uma zona pública não é, em nenhum aspecto, um limite de segurança.

## Step 3 · Azure Private DNS zones

[calm] Uma zona privada é quase idêntica, com uma diferença decisiva.
[500ms]
[confident] Os registros dela não são resolvíveis pela internet. Eles só respondem a partir das redes virtuais que você vincula explicitamente à zona.
[400ms]
[helpful] Esse vínculo é todo o modelo de acesso. Uma rede virtual sem vínculo simplesmente não enxerga a zona: não existe visibilidade parcial, não existe "quase vinculada".

## Step 4 · Private endpoint

[confident] Um private endpoint é uma interface de rede, dentro da sua sub-rede, que carrega um endereço IP privado e que aponta para uma instância específica de um serviço PaaS.
[500ms]
[calm] O Azure também grava, em uma private DNS zone, o registro que associa o nome desse serviço àquele endereço — e é por isso que os dois são sempre implantados juntos.
[400ms]
[helpful] Essa é a parte genuinamente nova. Storage, SQL e os demais normalmente ficam atrás de endpoints públicos. Um private endpoint traz um deles para dentro do seu espaço de endereços — e permite desligar o acesso público por completo.

## Step 5 · What the lookup actually does

[calm] Acompanhe a resolução do nome, porque é aqui que a ficha cai.
[500ms]
[confident] Sua aplicação continua usando o mesmo nome público de sempre. O Azure redireciona esse nome, discretamente, para uma zona privatelink, e a zona privada responde com o IP privado.
[400ms]
[helpful] É por isso que as cadeias de conexão nunca mudam. A aplicação faz a mesma pergunta — o que muda é só a resposta.

## Step 6 · The link is the whole mechanism

[curious] Uma zona privada com registros perfeitos dentro dela não faz absolutamente nada até que exista uma rede virtual vinculada.
[500ms]
[calm] E se essa rede usa servidores DNS personalizados, o vínculo sozinho ainda não basta: você precisa de um encaminhador.
[400ms]
[confident] Vale guardar mais uma distinção: resolver um nome não é a mesma coisa que ter permissão de entrar. A cadeia privatelink é resolvível de qualquer lugar, e isso é proposital. Uma consulta bem-sucedida prova que o recurso existe, não que você consegue alcançá-lo.

## Step 7 · Same shape, opposite purpose

[calm] Zona pública, zona privada. As duas são zonas DNS com registros dentro.
[500ms]
[confident] Tudo o que realmente importa tem a ver com quem tem permissão para perguntar.
[400ms]
[helpful] E você pode hospedar o mesmo nome de domínio como as duas coisas — split-horizon — respondendo de formas diferentes conforme a origem da pergunta.

## Step 8 · It still resolves to a public IP

[concerned] Agora a falha clássica, e é de longe o problema mais comum do Private Link.
[500ms]
[calm] Quase sempre é DNS, e não o endpoint em si, e quatro causas cobrem praticamente todos os casos.
[400ms]
[helpful] O sintoma é bem característico: o portal mostra o private endpoint aprovado, mas o seu aplicativo continua recebendo um endereço público — ou um quatrocentos e três de um serviço cujo acesso público você já desabilitou.

## Step 9 · Publish, resolve, or reach

[confident] Então, o que fica. Cada peça responde a uma pergunta diferente.
[400ms]
[calm] Diga em voz alta qual pergunta você está fazendo, e o serviço certo se escolhe sozinho.
[600ms]
[encouraging] E mantenha essas duas coisas separadas, porque quase todo incidente confuso de Private Link nasce de misturar as duas. O DNS decide qual endereço você recebe. O firewall do serviço decide se você entra.
