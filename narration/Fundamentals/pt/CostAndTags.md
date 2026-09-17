# Roteiro de narração - Custos e tags

**Source animation:** journeys/Fundamentals/CostAndTags.html
**Script status:** Authored voiceover.
**Language:** Português (Brasil)

As indicações entre colchetes não são faladas. As pausas ficam em linhas separadas. Cada bloco corresponde a uma etapa da animação.
<!-- Sources: https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets ; https://learn.microsoft.com/azure/well-architected/saas/governance#cost-governance -->

## Step 1 · Where did the money go?

[calm] A promoção terminou, mas os gastos da Contoso não voltaram ao nível esperado. A loja em operação ainda precisa de recursos; parte da capacidade de teste talvez já não esteja fazendo trabalho útil.
[600ms]
[confident] Antes de cortar algo, a equipe precisa identificar quais recursos geram as cobranças e quem os utiliza.

## Step 2 · What actually drives cost

[calm] A conta não depende apenas do número de servidores. Tamanho e tempo de computação, dados armazenados, tráfego de rede, uso dos serviços e região podem afetar o custo.
[600ms]
[confident] A Contoso examina os medidores de cada serviço. Mudar uma parte do projeto pode alterar várias cobranças, não apenas o preço principal.

## Step 3 · Estimate before you deploy

[calm] A Contoso informa capacidade, horas de operação, armazenamento e tráfego previstos na calculadora de preços. Compara um mês comum com o trabalho extra de uma promoção.
[600ms]
[confident] O resultado é uma estimativa baseada nessas premissas, não uma conta garantida. Guardar as premissas torna útil a comparação posterior com o uso real.

## Step 4 · Organize what you deploy

[calm] Tags adicionam rótulos aos recursos compatíveis, como o nome da carga de trabalho e a indicação de teste ou produção. A Contoso as aplica de forma consistente para agrupar os gastos.
[600ms]
[confident] Os rótulos ajudam a entender a responsabilidade. Não movem recursos nem limitam automaticamente o que eles podem gastar.

## Step 5 · Watch the real spending

[calm] Compare os custos reais no Cost Management com a estimativa. Agrupar por serviço ou tag ajuda a Contoso a descobrir qual parte da loja mudou.
[600ms]
[confident] O total mostra que o gasto aumentou; o detalhamento ajuda a explicar por quê. A equipe usa essas evidências antes de escolher quais recursos ajustar.

## Step 6 · An alert is not a stop switch

[calm] A Contoso configura um limite de orçamento e escolhe quem receberá o alerta. Quando a condição de custo configurada é atendida, o responsável recebe uma notificação para investigar.
[600ms]
[confident] O orçamento não é um teto rígido de gasto. Não desliga a loja nem interrompe o consumo; uma pessoa ou automação configurada separadamente precisa agir.

## Step 7 · Find the cause, then act

[calm] O detalhamento revela capacidade de teste sem uso desde a promoção. A Contoso verifica dependências e dados que precisam ser preservados antes de remover o que não é mais necessário.
[600ms]
[confident] O objetivo é eliminar desperdício sem interromper a produção. Uma conta menor só é um bom resultado se a loja continuar funcionando.

## Step 8 · Cost and Tags - All in One

[calm] Estime antes de implantar, use tags consistentes e compare o gasto real com o plano. Alertas de orçamento chamam atenção para mudanças; a investigação determina a resposta adequada.
[600ms]
[confident] A Contoso entende seus custos. Agora transformará os padrões combinados em verificações de governança, para que novas implantações sigam as mesmas regras.