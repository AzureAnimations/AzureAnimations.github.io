# Roteiro de narração - Ferramentas de monitoramento

**Source animation:** journeys/Fundamentals/MonitoringTools.html
**Script status:** Authored voiceover.
**Language:** Português (Brasil)

As indicações entre colchetes não são faladas. As pausas ficam em linhas separadas. Cada bloco corresponde a uma etapa da animação.
<!-- Sources: https://learn.microsoft.com/azure/azure-monitor/fundamentals/overview ; https://learn.microsoft.com/azure/app-service/monitor-app-service#insights ; https://learn.microsoft.com/azure/advisor/advisor-overview ; https://learn.microsoft.com/azure/service-health/overview -->

## Step 1 · Was it broken, or was it us?

[calm] Um cliente espera demais no pagamento. A Contoso implantou a loja, mas o sintoma não revela se a demora vem do código, de uma dependência ou do serviço subjacente.
[600ms]
[confident] A equipe precisa de evidências antes de mudar algo. O monitoramento transforma um relato vago em perguntas que podem ser investigadas.

## Step 2 · Collect the evidence

[calm] Métricas são medidas numéricas ao longo do tempo, como a duração do pagamento. Logs registram eventos com data e hora, acrescentando detalhes do que aconteceu.
[600ms]
[confident] Azure Monitor ajuda a reunir esses sinais. A Contoso usa a tendência para localizar o período lento e os registros para entender o que ocorreu nele.

## Step 3 · Look inside the checkout request

[calm] Antes do lançamento, a Contoso configurou a aplicação para enviar telemetria ao Application Insights, parte do Azure Monitor. Essa preparação permite ligar o pagamento à chamada de estoque da qual ele depende.
[600ms]
[confident] São evidências da aplicação, não informações obtidas apenas por criar um recurso. A instrumentação relevante precisa estar preparada previamente.

## Step 4 · Store it where you can query it

[calm] Um workspace do Log Analytics guarda os logs coletados para consultas posteriores. Em vez de adivinhar por um sintoma, Maya pode examinar os registros do período relevante.
[600ms]
[confident] O que ela encontra depende do que foi coletado e retido. Armazenar evidências úteis faz parte da preparação para operar a loja.

## Step 5 · Follow the evidence

[calm] Maya acompanha o pagamento lento até a dependência de estoque. Neste exemplo, a chamada leva dois vírgula oito segundos, oferecendo um ponto específico para investigar.
[600ms]
[confident] O número é ilustrativo, não um limite de desempenho do Azure. Ela compara logs relacionados antes de decidir se código, capacidade ou outra dependência precisa de atenção.

## Step 6 · Decide what is worth a phone call

[calm] A Contoso cria um alerta para lentidão sustentada no pagamento e conecta um grupo de ações. O alerta avalia a condição; o grupo define as notificações ou respostas configuradas.
[600ms]
[confident] O suporte recebe o sinal e investiga. Um alerta avisa que algo precisa de atenção; não estabelece a causa nem garante uma correção.

## Step 7 · Improve before the next promotion

[calm] Azure Advisor analisa recursos implantados e recomenda melhorias em áreas como confiabilidade, segurança, desempenho e custo. A Contoso avalia quais fazem sentido para sua loja.
[600ms]
[confident] Isso apoia a melhoria contínua. As recomendações não são o diagnóstico deste pagamento lento específico e não substituem a investigação.

## Step 8 · Is Azure reporting an issue?

[calm] Service Health informa eventos do Azure relevantes para a assinatura da Contoso. Resource Health se concentra em um recurso individual, oferecendo outra visão do que pode estar afetado.
[600ms]
[confident] Maya compara esses sinais com as evidências da aplicação. O estado da plataforma, sozinho, não comprova que toda a experiência do cliente funciona corretamente.

## Step 9 · Monitoring - All in One

[calm] A Contoso começou comprando servidores para a maior promoção. Agora sabe escolher serviços, organizar e conectar recursos, proteger acessos, reduzir desperdícios, implantar com consistência e investigar problemas dos clientes.
[600ms]
[confident] Operar na nuvem é um ciclo: coletar evidências, investigar, responder e melhorar. A próxima promoção começa com uma loja mais bem compreendida, não apenas com mais equipamentos.