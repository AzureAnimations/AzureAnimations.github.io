# Narrator Script · Português (pt) — Journey 02 · Azure App Configuration

**Source animation:** `static/v2/Security/AppConfiguration.html`
**Language:** Portuguese (pt). Traduzido do roteiro mestre em inglês. As indicações de interpretação `[tags]` e as pausas `[NNNms]` permanecem inalteradas (são direções, não são faladas). Os títulos das etapas ficam em inglês para o mapeamento 1:1.

Um bloco por etapa da animação.

---

## Step 1 · Every service must find the others

[confident] Todos os serviços da Contoso precisam encontrar uns aos outros.
[600ms]
[calm] O Store Front precisa conhecer a URL da Order API; o Order precisa alcançar o back-end, o banco de dados e os pagamentos.
[600ms]
[concerned] Multiplique isso por cada versão e revisão, e cada serviço acaba codificando os endpoints dos outros em seu próprio appsettings.json.
[800ms]
[curious] Uma nova revisão obriga a editar e reimplantar tudo o que a referencia; então, onde deveriam realmente viver todas essas configurações?

## Step 2 · One store for every setting: App Configuration

[confident] Em um único repositório para cada configuração: o Azure App Configuration.
[600ms]
[calm] É um repositório gerenciado para todas as configurações e sinalizadores de recursos do seu aplicativo, mantidos fora do código e compartilhados por cada serviço e revisão.
[600ms]
[impressed] Os aplicativos Twelve-Factor mantêm a configuração fora do código, e este é exatamente esse repositório externo.
[600ms]
[reassuring] Defina um valor uma vez, e cada serviço e versão o lê de um único lugar.

## Step 3 · Scattered settings become organized key-values

[confident] Dentro, essas configurações dispersas viram pares chave-valor organizados.
[600ms]
[calm] Cada endpoint e propriedade vira uma chave e um valor, com nomes hierárquicos agrupados por um delimitador de dois-pontos.
[600ms]
[impressed] Um nome como Contoso, dois-pontos, Order-API, dois-pontos, Backend-URL se lê como um caminho.
[600ms]
[reassuring] E você pode consultar um grupo inteiro de uma vez com um prefixo: um namespace limpo e pesquisável.

## Step 4 · One key, many labels — versions & environments

[intrigued] Mas e os diferentes ambientes e versões da mesma configuração?
[800ms]
[confident] É para isso que servem os rótulos. Dê à mesma chave um rótulo para criar uma variante.
[600ms]
[calm] A Contoso mantém a Backend URL uma só vez, com um rótulo por ambiente e versão: dev, prod, versão dois, staging.
[600ms]
[reassuring] Os rótulos são a forma integrada de versionar a configuração, e cada app simplesmente carrega o rótulo que tem como alvo.

## Step 5 · Flags and secret references, by content type

[curious] Esses valores são sempre apenas cadeias simples?
[800ms]
[confident] Não: o App Configuration marca dois tipos de valor especiais.
[600ms]
[calm] Sinalizadores de recursos que você pode alternar em tempo real, e referências do Key Vault que apontam para um segredo sem nunca copiá-lo.
[600ms]
[reassuring] Ambos ainda são pares chave-valor; um tipo de conteúdo apenas diz ao cliente para avaliar o sinalizador, ou resolver o segredo no Key Vault.

## Step 6 · Consume live: managed identity + dynamic refresh

[confident] Agora vamos consumi-lo ao vivo, com segurança e sem reimplantar.
[600ms]
[calm] Os apps leem o App Configuration com uma identidade gerenciada, sem nenhuma cadeia de conexão.
[600ms]
[impressed] Mude um valor ou um sinalizador, e a atualização dinâmica o entrega ao app em execução: sem reinício, sem reimplantação.
[600ms]
[reassuring] Uma chave sentinela sinaliza quando recarregar, então cada instância se atualiza com segurança, no lugar.

## Step 7 · All in one: central, versioned, live configuration

[reflective] Tudo em um, o modelo operacional fica claro.
[600ms]
[proud] Cada serviço da Contoso lê um único repositório do App Configuration — chaves hierárquicas, rótulos de versão, sinalizadores de recursos e referências do Key Vault — por uma identidade gerenciada, atualizado ao vivo.
[600ms]
[confident] A configuração agora é externa, compartilhada e versionada.
[600ms]
[optimistic] E as próximas paradas apertam ainda mais o acesso: as identidades gerenciadas buscam os segredos sob demanda, e as credenciais locais desaparecem.
