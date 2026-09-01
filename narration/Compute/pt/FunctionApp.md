# Roteiro de narração — Azure PaaS Compute · 04 · Function App

**Source animation:** `static/v2/Compute/FunctionApp.html`

---

## Step 1 · intro

[confident] Última parada — um tipo diferente de computação: a Function App.
[600ms]
[calm] Ela hospeda pequenos trechos de código, chamados de funções, que executam apenas quando um evento acontece. Sem servidores para gerenciar, e você paga só enquanto o seu código está de fato rodando.
[700ms]
[amused] Serverless não quer dizer que não há servidores — quer dizer que o Azure os executa e escala para você, de forma invisível.

## Step 2 · triggers

[confident] Toda função começa com exatamente um gatilho — o evento que a executa.
[600ms]
[calm] Pode ser uma requisição HTTP, um temporizador, uma mensagem em uma fila, ou um novo arquivo enviado ao armazenamento.
[500ms]
[calm] Depois, associações opcionais conectam a função aos dados, como entrada ou saída — um banco de dados, armazenamento, uma fila de mensagens.
[700ms]
[impressed] As associações são declarativas: você descreve a conexão e o runtime faz a ligação — sem código de integração.

## Step 3 · scaling

[confident] Aqui está a verdadeira mágica do serverless. Um controlador de escala observa a que velocidade os eventos chegam.
[600ms]
[calm] Quando a carga sobe, ele adiciona instâncias; quando fica quieto, ele as remove — até chegar a zero.
[700ms]
[impressed] No Consumption e no Flex Consumption, um app ocioso não custa nada. Sem eventos, sem instâncias, sem conta.

## Step 4 · plans

[confident] O Functions oferece alguns planos de hospedagem, para você combinar o plano com a carga de trabalho.
[600ms]
[calm] O Flex Consumption é a escolha serverless recomendada — escala rápida, suporte a rede virtual, pagamento conforme o uso. O Premium elimina inicializações a frio com instâncias pré-aquecidas. O Dedicated reutiliza um App Service Plan para um custo previsível.
[700ms]
[encouraging] Não sabe por onde começar? Comece pelo Flex Consumption e ajuste depois.

## Step 5 · compare

[confident] Então, quando escolher Functions em vez de um App Service?
[600ms]
[calm] Vá de Functions quando o trabalho é curto, orientado a eventos e em rajadas — e pode escalar a zero quando ocioso.
[500ms]
[calm] Vá de App Service quando você executa um app web ou API contínuo que está sempre ativo.
[700ms]
[reassuring] E eles compartilham a mesma plataforma — você pode até executar os dois no mesmo grupo de recursos e ligá-los.

## Step 6 · recap

[proud] Isso completa o quadro: os gatilhos iniciam o seu código, as associações o conectam aos dados, o dimensionamento orientado a eventos o ajusta de zero a milhares, e o Flex Consumption o mantém barato.
[700ms]
[encouraging] Implante uma função, aponte um gatilho para ela, e deixe o Azure cuidar dos servidores e da escala. Essa é a jornada do Azure PaaS Compute — muito bem.
