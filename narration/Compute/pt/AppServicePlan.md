# Roteiro de narração — Azure PaaS Compute · 01 · App Service Plan

**Source animation:** `static/v2/Compute/AppServicePlan.html`

---

## Step 1 · intro

[confident] Antes que o site da Contoso Retail possa atender um único visitante, o Azure precisa de um lugar para de fato executá-lo.
[600ms]
[calm] Esse lugar é um App Service Plan: a computação que seus apps compartilham — uma região, um tamanho e um número de instâncias.
[700ms]
[amused] Imagine alugar um prédio. O Plano é o prédio; os App Services que você implanta são os inquilinos que moram dentro.

## Step 2 · tier

[confident] Duas escolhas definem o Plano. Primeiro, uma região — escolha uma próxima dos seus usuários.
[600ms]
[calm] Depois, um nível de preço, que define sua CPU, memória e recursos — do nível gratuito de desenvolvimento e teste até uma rede totalmente isolada.
[700ms]
[reassuring] E você não fica preso. Dá para subir de nível depois com quase nenhum tempo de inatividade, então comece pequeno e cresça.

## Step 3 · instances

[confident] Uma instância é uma única máquina virtual executando uma cópia idêntica do código do seu app.
[600ms]
[impressed] Adicione mais instâncias e você ganha duas coisas ao mesmo tempo — mais capacidade para atender tráfego e mais resiliência.
[700ms]
[reassuring] Se uma instância tiver um problema, as outras continuam atendendo. Isso é redundância, embutida.

## Step 4 · platform

[confident] Todo Plano roda em um único sistema operacional — Linux ou Windows.
[600ms]
[calm] Em cima dele, seu app pode usar qualquer runtime compatível: .NET, Java, Node.js, PHP ou Python.
[700ms]
[serious] Um detalhe — você escolhe o sistema operacional ao criar o Plano, e ele fica fixo. Então agrupe os apps que precisam do mesmo.

## Step 5 · scale

[confident] Existem duas formas bem diferentes de escalar, e vale a pena não confundir.
[600ms]
[calm] Escalar verticalmente muda o nível — máquinas maiores e mais potentes, mas o mesmo número.
[500ms]
[calm] Escalar horizontalmente muda a quantidade — máquinas do mesmo tamanho, só que mais cópias dividindo a carga.
[700ms]
[encouraging] Regra prática: escale horizontalmente para picos de tráfego, e verticalmente quando uma única instância precisa de mais CPU ou memória.

## Step 6 · autoscale

[confident] Você não precisa mover essas alavancas na mão. O dimensionamento automático faz isso por você.
[600ms]
[calm] Você define regras — um limite de CPU, um agendamento ou uma métrica personalizada — mais um mínimo e um máximo de instâncias.
[700ms]
[impressed] O Azure então adiciona e remove instâncias automaticamente, de modo que a capacidade acompanha a demanda real — e você paga por ela só quando precisa.

## Step 7 · recap

[proud] Aí está a fundação: região, nível e número de instâncias definem juntos a computação — o App Service Plan — sobre a qual seus apps rodam.
[700ms]
[encouraging] Agora vamos colocar algo em cima e ver um App Service de verdade — o app web em si — ganhar vida.
