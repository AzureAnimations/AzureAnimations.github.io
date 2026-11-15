# Narrator Script - Monitore e mantenha atualizado

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineMonitoring.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · Checkout feels slow

[serious] Os clientes dizem que o pagamento está lento. A equipe não sabe por quê.
[600ms]
[curious] É a máquina, o disco ou a própria aplicação?
[800ms]
[calm] Sem sinais, essa discussão não se resolve: apenas se repete. Vamos dar à Contoso dados para observar.

## Step 2 · Host signals need no agent

[reassuring] A boa notícia é que parte das informações já está disponível.
[600ms]
[confident] O Azure coleta métricas de processador, disco e rede pelo host, sem instalar nada dentro da máquina.
[600ms]
[calm] Com elas, já dá para começar a verificar se a máquina está sobrecarregada, sem configuração adicional no sistema convidado.

## Step 3 · Inside the guest needs an agent

[curious] Mas as métricas do host não mostram tudo dentro do convidado. Ative a telemetria e veja o que aparece.
[600ms]
[confident] Para observar a memória pelo sistema operacional ou coletar logs internos, é necessário o Azure Monitor Agent com uma regra de coleta de dados indicando o que recolher.
[600ms]
[serious] Lembre-se da regra. Instalar o agente sem definir o que coletar não entrega os sinais de que você precisa.

## Step 4 · Compare guest performance

[calm] Quando os dados chegam, o VM Insights os reúne.
[600ms]
[confident] Processador, memória e disco lado a lado ajudam a investigar se a lentidão no pagamento vem da máquina ou do código.
[600ms]
[serious] O monitoramento de desempenho continua com suporte. A antiga visualização Map e o Dependency Agent foram preteridos, então não baseie um novo projeto neles.

## Step 5 · Turn a threshold into action

[curious] Ninguém quer vigiar um painel às três da manhã. Ajuste o limite e observe quando o alerta dispara.
[600ms]
[confident] Uma regra compara um sinal com uma condição. O grupo de ações define a resposta: email, chamado ou automação.
[600ms]
[reassuring] A regra e o grupo de ações são separados de propósito. Uma resposta bem preparada pode atender a muitas regras.

## Step 6 · Patch on a schedule

[calm] Falta uma tarefa que se acumula silenciosamente.
[600ms]
[confident] O Azure Update Manager avalia quais atualizações do sistema operacional estão faltando e permite instalá-las na programação escolhida, sem manter um pipeline próprio.
[600ms]
[determined] Aplicar patches não deveria ser sempre uma emergência. É uma rotina que você planeja e mantém.

## Step 7 · Monitoring - All in One

[reflective] Quatro camadas ajudam a loja a dar menos surpresas.
[600ms]
[confident] Sinais do host disponíveis desde o início, desempenho do convidado pelo agente, alertas que chegam a alguém e atualizações programadas.
[600ms]
[proud] Essa é a diferença entre manter uma máquina ligada e operar um serviço.
