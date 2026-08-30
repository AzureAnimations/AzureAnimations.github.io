# Network monitoring — narração (pt)

## Step 1 · "It cannot connect"

[calm] Uma VM não consegue alcançar um banco de dados.
[400ms]
[curious] Nada deu erro, nada está visivelmente fora do ar, e há quatro coisas diferentes que podem estar bloqueando. Sair adivinhando sai caro.
[500ms]
[confident] Então separe as ferramentas pela pergunta que você está realmente fazendo. O Network Watcher responde "por que esta conexão está falhando, agora?". O Azure Monitor responde "o que a minha rede vem fazendo?".

## Step 2 · Network Watcher

[confident] O Network Watcher é um serviço de plataforma regional que inspeciona a sua rede em funcionamento.
[500ms]
[calm] Ele é habilitado automaticamente em toda região onde você cria uma rede virtual — não há nada para implantar antes de começar a usar.
[400ms]
[helpful] O valor real dele é ler a configuração efetiva de verdade, e não aquilo que você acredita ter implantado. É nessa distância entre a intenção e a realidade que mora a maioria dos incidentes de rede.

## Step 3 · Three tools, in this order

[calm] A Microsoft recomenda aqui uma sequência específica, e vale a pena segui-la.
[500ms]
[confident] Cada etapa é mais barata que a seguinte, e a maior parte dos problemas se resolve antes de você chegar ao fim.
[400ms]
[helpful] Comece pelo IP flow verify, porque ele não diz apenas permitido ou negado: ele nomeia a regra responsável. Essa única resposta encerra a maioria das investigações antes mesmo de elas começarem.

## Step 4 · Virtual network flow logs

[confident] Os flow logs gravam uma linha de metadados para cada fluxo: origem, destino, porta, protocolo e se ele foi permitido ou negado.
[500ms]
[calm] É esse registro que permite responder perguntas sobre a terça-feira passada.
[400ms]
[concerned] Use os VNet flow logs, e não os NSG flow logs. Os NSG flow logs estão sendo descontinuados: nenhum pode ser criado depois de trinta de junho de dois mil e vinte e cinco, e os existentes precisam ser migrados até trinta de setembro de dois mil e vinte e sete.

## Step 5 · Traffic Analytics

[calm] Sozinhos, os flow logs são milhões de linhas.
[500ms]
[confident] O Traffic Analytics agrega tudo isso em algo que você consegue de fato ler: quem mais conversa na rede, portas abertas, tráfego entre regiões e onde os fluxos estão sendo negados.
[400ms]
[helpful] Ele precisa de um workspace do Log Analytics. É o mesmo workspace que o Azure Monitor usa, e é exatamente aí que os dados de rede se juntam ao resto da sua telemetria e passam a ser consultáveis com KQL.

## Step 6 · Connection Monitor

[calm] Tudo até aqui é ou depois do fato, ou sob demanda.
[500ms]
[confident] O Connection Monitor fica testando um caminho de forma agendada, então você descobre que ele quebrou sem depender de alguém perceber.
[400ms]
[helpful] É isso que transforma "alguém reportou" em "fomos alertados". É a ferramenta certa para qualquer caminho com um SLA por trás: um link híbrido, ou uma dependência que não é sua.

## Step 7 · Azure Monitor Network Insights

[confident] O Network Insights é a visão do Azure Monitor que reúne tudo isso em um só lugar.
[500ms]
[calm] Uma topologia ao vivo, integridade e métricas de cada recurso de rede, e links diretos para as ferramentas de diagnóstico.
[400ms]
[helpful] Topologia, integridade e métricas aparecem sem nenhuma configuração. Já as abas de conectividade e de tráfego continuam vazias até você ligar o Connection Monitor e os flow logs — então um painel vazio normalmente quer dizer "não está habilitado", e não "não há nada a relatar".

## Step 8 · Which one answers your question

[calm] Esses dois se sobrepõem no portal, que é justamente por isso que eles se confundem.
[500ms]
[confident] O jeito limpo de separá-los é pela pergunta com a qual você chegou.
[400ms]
[helpful] E eles não são produtos concorrentes. O Network Watcher produz boa parte do que o Azure Monitor exibe: os flow logs e o Connection Monitor são recursos do Network Watcher cujos dados vão parar em um workspace do Log Analytics.

## Step 9 · Diagnose now, or watch always

[confident] Então, a ideia para levar daqui.
[400ms]
[calm] Um conjunto de ferramentas conta por que alguma coisa está quebrada neste minuto. O outro conta o que vem acontecendo, e te avisa da próxima vez. Você quer os dois, mas liga cada um em um momento diferente.
[600ms]
[encouraging] E a única coisa a fazer antes de precisar: ligue agora os VNet flow logs e o Traffic Analytics. Todas as outras ferramentas aqui funcionam sob demanda. Essas duas só conhecem o tráfego que aconteceu depois que você as habilitou.
