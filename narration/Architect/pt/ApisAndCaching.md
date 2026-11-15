# Narrator Script — Architect · Front the app: APIs, caching and deployment

**Source animation:** [ApisAndCaching.html](../../../journeys/Architect/ApisAndCaching.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/api-management/api-management-key-concepts>

---

## Step 1 · API Management: one front door

[calm] Os clientes da Contoso atualmente ligam diretamente para o backend, deixando a aplicação de políticas espalhada pela aplicação.
[600ms]
[curious] O API Management coloca um gateway na frente, com verificações e transformações aplicadas nos caminhos de requisição e resposta.
[600ms]
[reassuring] Produtos, assinaturas e o portal de desenvolvedores organizam o consumo da API, enquanto o backend pode permanecer focado em seu próprio trabalho.

## Step 2 · API Management: choose the tier

[calm] Os níveis de API Management diferem em capacidade, rede e recursos de disponibilidade que oferecem.
[600ms]
[curious] Use a comparação para identificar os requisitos que eliminam níveis inadequados, incluindo se isso é tráfego de produção.
[600ms]
[reassuring] Escolha apenas após verificar a comparação atual de recursos, em vez de assumir que cada nível oferece as mesmas opções de rede e resiliência.

## Step 3 · Caching: check the cache first

[calm] Observe a loja pedir dados do produto no cache antes de pedir para o banco de dados.
[600ms]
[curious] Um acerto no cache retorna a resposta rapidamente; um erro envia a aplicação para o armazenamento de dados e então preenche o cache.
[600ms]
[reassuring] Esse padrão de cache aparte reduz leituras repetidas, mas a aplicação ainda precisa de uma estratégia de expiração e invalidação.

## Step 4 · Caching: what belongs in memory

[calm] O cache é útil para dados que são lidos com frequência e pode tolerar certa paralisação temporária.
[600ms]
[curious] Não é o registro autoritativo para ordens de Contoso ou outros dados que não devem ser perdidos.
[600ms]
[reassuring] Escolha o que pertence ao Azure Managed Redis pelo padrão de acesso e pelo requisito de correção, não apenas porque a memória é rápida.

## Step 5 · Messaging and events: pick by the message

[calm] Um comando, um evento discreto e um fluxo descrevem diferentes necessidades de comunicação.
[600ms]
[curious] O Service Bus suporta mensagens empresariais valiosas, o Event Grid distribui notificações de eventos e o Event Hubs ingere fluxos.
[600ms]
[reassuring] Uma fila de armazenamento pode atender a necessidades de fila mais simples; comece com o significado da mensagem e as garantias necessárias antes de escolher o serviço.

## Step 6 · Configuration: keep settings out of the code

[calm] A mesma build de aplicação deve rodar em ambientes sem carregar segredos em seu código-fonte.
[600ms]
[curious] App Configuration mantém configurações e flags de recursos, enquanto uma referência do Key Vault aponta para o segredo protegido separadamente.
[600ms]
[reassuring] Siga o acesso da aplicação a cada serviço: uma referência não copia o segredo para o armazenamento de configuração.

## Step 7 · Deployment: ship safely, roll back fast

[calm] O caminho de lançamento substitui mudanças manuais por código de infraestrutura e pipeline de aplicação.
[600ms]
[curious] Um slot de implantação permite que a Contoso prepare a nova versão antes de trocar o tráfego de produção.
[600ms]
[reassuring] Manter o caminho de liberação e rollback repetíveis torna o design mais seguro do que fazer mudanças emergenciais diretamente na aplicação ao vivo.

## Step 8 · All in one: a fast, safe partner API

[calm] A API parceira da Contoso agora possui um conjunto coordenado de decisões de suporte, não apenas um backend mais rápido.
[600ms]
[curious] O gateway, cache, mensagens, configuração e caminho de implantação resolvem cada um uma preocupação diferente.
[600ms]
[reassuring] Mantenha a justificativa ao lado da escolha do serviço; em seguida, planeje como as cargas de trabalho existentes serão transferidas para esse design Azure.

