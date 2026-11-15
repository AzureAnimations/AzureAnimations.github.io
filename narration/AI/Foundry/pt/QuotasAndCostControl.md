# Narrator Script — Foundry · Quotas, Rate Limits and Cost Control

**Source animation:** [QuotasAndCostControl.html](../../../../journeys/AI/Foundry/QuotasAndCostControl.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/openai/how-to/quota>
- <https://learn.microsoft.com/azure/foundry/openai/quotas-limits>
- <https://learn.microsoft.com/azure/foundry/concepts/manage-costs>
- <https://learn.microsoft.com/azure/foundry/foundry-models/how-to/monitor-models>

---

## Step 1 · Why did my call get a 429?

[curious] É dia de promoção às Contoso Retail, e o atendente acabou de entrar no ar. As chamadas começam a chegar mais rápido do que o modelo permitia.
[600ms]
[concerned] Alguns deles estão rejeitados com um HTTP quatro vinte e nove, e isso parece alarmante.
[600ms]
[reassuring] Mas quatro e vinte e nove só significa pedidos demais. Um limite foi alcançado. Isso não significa que seu código está quebrado.

## Step 2 · Tokens: the unit of cost and of limits

[calm] Modelos não leem frases inteiras. Eles leem e escrevem tokens, que são pequenos pedaços de texto.
[600ms]
[confident] Sua cobrança e seus limites são medidos em tokens, tanto de entrada quanto de saída.
[600ms]
[reflective] A divisão que você vê aqui é apenas ilustrativa, já que tokenizadores reais cortam texto de forma diferente. As taxas variam conforme o modelo e o tipo de implantação, então procure por eles em vez de decorar números.

## Step 3 · Quota: one pool, shared out in slices

[calm] Quota é o conjunto de tokens por minuto que sua assinatura pode usar para um determinado modelo e tipo de implantação.
[600ms]
[confident] Você distribui fatias desse pool para suas implantações, e cada fatia se torna o teto dessa implantação.
[600ms]
[curious] Como um pool é escopado depende do tipo de implantação. Pools mais novos podem ser compartilhados entre regiões ou por zona de dados, então confira a página de cotas e limites do seu modelo.

## Step 4 · Rate limits count what you reserve

[curious] Cada implantação recebe um limite de tokens por minuto e um limite de requisições por minuto.
[600ms]
[serious] Uma solicitação é contada quando ela chega, usando o prompt mais a configuração de tokens máximos. É isso que você reserva, não o que o modelo finalmente usa.
[600ms]
[reflective] Como é uma estimativa, um limite pode disparar antes do que a contagem exata sugere. Os bursts também importam, já que as requisições também são verificadas em janelas de alguns segundos.

## Step 5 · Two kinds of 429, two different fixes

[curious] Um quatro e vinte e nove pode significar duas coisas bem diferentes, e a solução depende de qual.
[600ms]
[confident] Ou você já usou sua própria fatia, ou o serviço compartilhado está brevemente ocupado. A mensagem de erro e os cabeçalhos de resposta dizem qual dos dois são, incluindo os tokens restantes e a tentativa após a dica.
[600ms]
[serious] As equipes frequentemente pedem mais cota quando a verdadeira causa é uma falta de capacidade. Cheque primeiro, depois ajam.

## Step 6 · Back off, then retry

[serious] Tentar de novo de uma vez piora as coisas, porque as falhas ainda contam contra você.
[600ms]
[confident] Espere o tempo que o serviço sugerir, depois espere um pouco mais a cada vez, com um toque de aleatoriedade para que os clientes não tentem todos juntos.
[600ms]
[reassuring] Muitos SDKs podem fazer isso por você, então verifique sua biblioteca cliente primeiro. E mantenha um limite, para que um dia ruim nunca vire um ciclo sem fim.

## Step 7 · Pick the deployment type for your traffic

[curious] Agora escolha o formato do seu tráfego e onde seus dados podem ser processados.
[600ms]
[confident] À medida que você muda essas escolhas, o tipo de implantação sugerido e suas alavancas de escalonamento mudam junto com elas.
[600ms]
[reflective] Nem todo modelo suporta todos os tipos, então verifique a disponibilidade por modelo e região. Esta página é sobre limites e custo, então veja as páginas de preços e cotas para os números reais.

## Step 8 · Need more headroom? Raise it or spread it

[determined] Precisa de mais margem para a cabeça? Comece realocando quaisquer tokens não usados por minuto, ou peça mais cota ao serviço.
[600ms]
[confident] Depois, espalhe o tráfego por várias implantações ou regiões, para que nenhum limite único se torne o teto.
[600ms]
[calm] As solicitações de cota são analisadas na ordem recebida, e clientes ativos têm prioridade. Um gateway como o Azure API Management também pode impor limites de tokens para cada consumidor.

## Step 9 · Spend fewer tokens, pay less

[calm] Custo são simplesmente tokens multiplicados pela taxa do seu modelo e tipo de implantação.
[600ms]
[encouraging] Então, existem três maneiras de reduzir a conta: usar menos tokens, escolher um modelo mais barato ou seguir um caminho com desconto.
[600ms]
[reflective] Não há preços na tela de propósito, porque eles mudam. Confira a página de preços e meça antes e depois, já que a economia depende da sua carga de trabalho.

## Step 10 · Watch tokens and budgets before the bill does

[curious] Foundry mostra o uso de tokens e o custo estimado para cada implantação, para que você possa ver de onde vem o gasto.
[600ms]
[confident] Azure Monitor acompanha as métricas e envia alertas, enquanto a Gestão de Custos mantém os orçamentos.
[600ms]
[serious] Lembre-se de que os orçamentos alertam, mas não param de gastar, e Azure OpenAI não tem limite rígido de custos. Marque por equipe ou projeto para poder cobrar de volta os custos.

## Step 11 · Limits and cost at a glance

[calm] Os tokens definem tanto seus limites quanto sua conta, e esse é o fio condutor de toda essa lição.
[600ms]
[confident] Planeje sua cota, lide com quatro erros de vinte e nove com backoff, escolha o tipo certo de implantação, corte tokens e depois monitore o uso e os orçamentos.
[600ms]
[reassuring] Os números mudam com frequência, então mantenha as cotas, limites e páginas de preços marcadas em vez de memorizar valores.
