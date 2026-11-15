# Narrator Script — Database · Secure Azure SQL: Network, Identity, Auditing and Defender

**Source animation:** [SecureSqlDatabases.html](../../../journeys/Database/SecureSqlDatabases.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-sql/database/network-access-controls-overview>
- <https://learn.microsoft.com/azure/azure-sql/database/private-endpoint-overview>
- <https://learn.microsoft.com/azure/azure-sql/database/authentication-azure-ad-only-authentication>
- <https://learn.microsoft.com/azure/azure-sql/database/auditing-overview>

---

## Step 1 · The orders database is open to the internet

[calm] O banco de dados de pedidos da Contoso roda no Azure SQL Database. Um servidor lógico novo nega todas as conexões até você liberar algumas.
[600ms]
[concerned] Só que aqui alguém ampliou o firewall com uma única regra que libera todos os endereços. Agora, só uma senha SQL separa os dados da internet.
[600ms]
[determined] Vamos fechar essa porta, uma camada de cada vez.

## Step 2 · Firewall rules and virtual network rules

[calm] O firewall do servidor só deixa passar os endereços e sub-redes que você listar. Essas regras protegem o endpoint público.
[600ms]
[serious] Cuidado com a opção Allow Azure services. Ela é bem mais ampla do que a maioria das equipes imagina, porque também libera o tráfego de recursos de outros clientes.
[600ms]
[confident] Uma regra de rede virtual precisa de um service endpoint na sub-rede e vale para uma região. As mudanças nas regras de IP podem levar alguns minutos.

## Step 3 · A private endpoint removes the public path

[curious] Um endpoint privado dá ao servidor um endereço IP privado dentro da rede virtual da Contoso.
[600ms]
[serious] Mas só adicionar um não fecha o caminho público. Você também precisa negar o acesso pela rede pública.
[600ms]
[reassuring] Conecte sempre pelo nome totalmente qualificado do servidor. Entrar pelo endereço privado ou pelo nome do privatelink falha de propósito.

## Step 4 · Entra-only sign-in and a managed identity

[confident] A autenticação somente com o Microsoft Entra desativa as senhas SQL no servidor inteiro.
[600ms]
[calm] O aplicativo entra com a identidade gerenciada dele e um token, então nenhum segredo fica nas configurações.
[600ms]
[serious] Defina primeiro um administrador do Microsoft Entra. E lembre-se: o SQL Security Manager pode ativar ou desativar o modo somente Entra, mas o SQL Server Contributor não pode.

## Step 5 · TDE, Always Encrypted and customer keys

[calm] O Transparent Data Encryption protege os arquivos de dados, os logs e os backups em repouso.
[600ms]
[curious] O Always Encrypted vai além. O driver do cliente criptografa as colunas escolhidas, então o mecanismo do banco de dados nunca fica com as chaves.
[600ms]
[serious] Dois cuidados. Se o servidor perder o acesso a uma chave gerenciada pelo cliente, o banco de dados fica inacessível. E as consultas em colunas criptografadas são limitadas.

## Step 6 · Auditing: what, where and for which scope

[calm] A auditoria registra os eventos do banco de dados e os grava em um destino que você escolhe. Pode ser uma conta de armazenamento, um workspace do Log Analytics ou o Event Hubs.
[600ms]
[confident] Escolha primeiro o escopo e as categorias de eventos, para registrar o que importa sem se afogar em ruído.
[600ms]
[reflective] A auditoria prioriza a disponibilidade, então, sob uma carga muito pesada, alguns eventos podem ficar de fora. Os logins com falha no Entra aparecem no Entra, não aqui.

## Step 7 · Read an audit record: who ran what

[curious] Cada registro de auditoria responde a poucas perguntas simples. Quem fez? O que executou? Onde e quando?
[600ms]
[calm] Este é um registro do banco de dados de pedidos da Contoso. Siga as cores de cada campo até a pergunta que ele responde.
[600ms]
[serious] Uma instrução é armazenada como texto, então valores sensíveis digitados nela podem ir parar no log. Limite quem pode ler os logs de auditoria.

## Step 8 · SQL Database vs SQL Managed Instance

[calm] Os dois são Azure SQL, mas as configurações ficam em lugares diferentes. Saiba onde cada controle é configurado e quais padrões mudam.
[600ms]
[serious] O artigo de rede do SQL Database não vale para o Managed Instance.
[600ms]
[confident] A auditoria do Managed Instance é o SQL Server Audit, então os logs para o Event Hubs e o Azure Monitor usam uma configuração diferente da do SQL Database.

## Step 9 · Defender for Databases: assess and detect

[confident] O plano Defender for Azure SQL Databases faz duas coisas. A avaliação de vulnerabilidades procura configurações fracas.
[600ms]
[curious] A detecção de ameaças fica de olho em ataques enquanto o banco de dados está em uso.
[600ms]
[reassuring] Ative o plano uma vez na assinatura, e todos os recursos compatíveis dela ficam protegidos, inclusive os criados depois.

## Step 10 · An alert end to end: SQL injection

[curious] Uma caixa de busca passa o texto direto para uma instrução SQL. Essa é a falha.
[600ms]
[concerned] Primeiro, o Defender alerta sobre uma instrução com defeito como possível vulnerabilidade, com gravidade média. Depois, ele reporta a exploração como possível SQL injection, com gravidade alta.
[600ms]
[determined] A equipe investiga, encontra o código inseguro e corrige.

## Step 11 · Which control answers which threat?

[excited] Oito ameaças, cinco controles. Veja cada ameaça encontrar o controle principal dela.
[600ms]
[encouraging] Depois, selecione qualquer ameaça para ver por que aquele controle é a resposta.
[600ms]
[reflective] Nos sistemas reais, os controles se somam em camadas, então uma ameaça pode ter mais de uma resposta. Aqui, cada ameaça está ligada ao controle principal dela.

## Step 12 · Recap: close, prove, encrypt, record, detect

[calm] Cinco controles protegem o banco de dados de pedidos. Feche a porta de rede, comprove quem está entrando e criptografe os dados.
[600ms]
[confident] Depois, registre o que acontece e detecte os ataques assim que começam. Cada controle responde a uma ameaça diferente.
[600ms]
[proud] O guia de estudo do S C 500 lista esses itens em implementar segurança para bancos de dados.
