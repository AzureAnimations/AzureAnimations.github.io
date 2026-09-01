# Narrator Script · Português (pt) — Journey 01 · Azure Key Vault

**Source animation:** `static/v2/Security/KeyVault.html`
**Language:** Portuguese (pt). Traduzido do roteiro mestre em inglês. As indicações de interpretação `[tags]` e as pausas `[NNNms]` permanecem inalteradas (são direções, não são faladas). Os títulos das etapas ficam em inglês para o mapeamento 1:1.

Um bloco por etapa da animação.

---

## Step 1 · Every connection needs a secret, key or certificate

[confident] Conheça a Contoso, uma loja online que, na verdade, são muitos apps conversando entre si.
[600ms]
[calm] Um comprador chega ao Store Front por TLS, o Store Front chama o Order Processing, e o Order Processing alcança o banco de dados e um conjunto crescente de componentes.
[600ms]
[concerned] Cada uma dessas setas precisa de uma credencial — um segredo, uma chave ou um certificado — e, agora, não há nenhum lugar seguro e central para guardá-las.
[800ms]
[curious] Então, onde deveria realmente viver todo esse material sensível?

## Step 2 · Static secrets in appsettings.json

[serious] É assim que geralmente começa... e onde dá errado.
[600ms]
[concerned] O Store Front lê uma senha de banco de dados e uma chave de pagamento codificadas diretamente de um arquivo local appsettings.json, copiadas pelos laptops de desenvolvimento e pelas variáveis do pipeline.
[600ms]
[serious] O primeiro princípio da Secure Future Initiative é Seguro por design: proteger os segredos em repouso, em trânsito e em tempo de execução.
[600ms]
[determined] Credenciais estáticas no controle de código quebram isso no primeiro dia; um repositório vazado compromete a produção.

## Step 3 · Centralize in Azure Key Vault

[confident] A solução é centralizar, no Azure Key Vault.
[600ms]
[calm] O Key Vault reúne esses segredos dispersos em um único repositório gerenciado e auditado, com três tipos de objeto: segredos, chaves criptográficas e certificados.
[600ms]
[impressed] Os apps os leem em tempo de execução, sem nenhuma credencial no código.
[600ms]
[reassuring] Um único cofre agora guarda a senha do banco de dados da Contoso, a chave de pagamento, uma chave de criptografia de pedidos e o certificado do Store Front, tudo com rotação, auditoria e controle de acesso centralizados.

## Step 4 · How your material is protected

[intrigued] Mas com que força esse material é realmente protegido?
[800ms]
[confident] Cada chave é protegida em um nível FIPS 140 validado. O Standard mantém as chaves em um módulo de software; o Premium e o Managed HSM as geram e mantêm dentro de módulos de segurança de hardware.
[600ms]
[impressed] Dentro de um HSM, a chave nunca sai do limite do hardware.
[600ms]
[calm] Um nível FIPS mais alto significa simplesmente uma proteção física mais forte: de software até hardware resistente a violação com acesso baseado em identidade.

## Step 5 · Standard vs Premium vs Managed HSM

[curious] Então, qual contêiner a Contoso deve escolher?
[800ms]
[confident] O Key Vault vem em duas camadas de cofre mais um Managed HSM dedicado, que diferem por locação, proteção e quem controla a raiz de confiança.
[600ms]
[calm] Use o Standard para os segredos cotidianos dos apps e certificados TLS. Escolha o Premium quando precisar de chaves com suporte de HSM ou gerenciadas pelo cliente.
[600ms]
[reassuring] E escolha o Managed HSM quando precisar de um módulo dedicado de locatário único e controle total da raiz de confiança — verdadeira soberania de chaves.

## Step 6 · Migrate a key into Key Vault — without exposing it

[intrigued] E se você já tem uma chave e precisa trazê-la sem nunca expô-la?
[800ms]
[confident] Isso é o Bring Your Own Key. Digamos que você gerou uma chave de criptografia de dados dentro do seu HSM local; uma KEK do Key Vault, um par de chaves RSA, a encapsula para a viagem.
[600ms]
[calm] Você exporta a chave pública da KEK, seu HSM encapsula a DEK com ela, e só o blob .byok criptografado viaja.
[600ms]
[reassuring] O Key Vault a desencapsula dentro do HSM com a chave privada, então a chave em texto claro nunca fica exposta.

## Step 7 · Azure Key Vault — the whole picture

[reflective] Dê um passo atrás e todo o quadro se encaixa.
[600ms]
[proud] Os segredos, as chaves e os certificados da Contoso agora vivem em um único cofre auditado: protegidos no nível FIPS certo, na camada certa, encapsulados por chaves que a Contoso controla e lidos em tempo de execução sem credenciais no código.
[600ms]
[confident] Isso é Seguro por design, por padrão e nas operações.
[600ms]
[optimistic] E é a base para o resto da jornada: as identidades gerenciadas buscam esses segredos sem senhas, o controle de acesso restringe quem pode lê-los, e a rede privada blinda o cofre.
