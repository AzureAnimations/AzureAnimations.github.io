# Narrator Script — Storage · Files and Tables: Which Service?

**Source animation:** [FilesAndTables.html](../../../journeys/Storage/FilesAndTables.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/storage/files/storage-files-introduction>
- <https://learn.microsoft.com/azure/storage/file-sync/file-sync-introduction>
- <https://learn.microsoft.com/azure/storage/tables/table-storage-overview>
- <https://learn.microsoft.com/azure/azure-netapp-files/azure-netapp-files-introduction>

---

## Step 1 · Three needs, one question

[calm] A Contoso quer um compartilhamento de arquivos, uma tabela NoSQL barata e um NAS corporativo no Azure, tudo acessível a partir dos seus escritórios.
[600ms]
[curious] Qual serviço atende a cada necessidade, e como cada um se conecta?
[600ms]
[confident] Quatro serviços respondem a isso: Azure Files, Azure File Sync, Table storage e Azure NetApp Files. A Contoso é fictícia.

## Step 2 · Four services, one map

[calm] O Azure Files e o Table storage ficam dentro de uma conta de armazenamento.
[600ms]
[confident] O Azure File Sync coloca um cache de Windows Server na frente do Azure Files, e o Azure NetApp Files é um serviço corporativo à parte.
[600ms]
[reflective] O Blob storage é da mesma família, mas guarda objetos não estruturados, então tem outro formato.

## Step 3 · Azure Files: a managed share

[calm] O Azure Files é um compartilhamento de arquivos totalmente gerenciado, que fica em uma conta de armazenamento.
[600ms]
[confident] Você monta o compartilhamento ao mesmo tempo, a partir de clientes na nuvem e on-premises, em Windows, Linux ou macOS, sem software extra, sem hardware e sem sistema operacional para aplicar patches.
[600ms]
[reassuring] Proteja-o com snapshots de compartilhamento somente leitura, ou deixe o Azure Backup agendar os snapshots e cuidar da retenção.

## Step 4 · SMB or NFS, SSD or HDD

[curious] Duas escolhas definem cada compartilhamento. Primeiro, um protocolo por compartilhamento: SMB para acesso no estilo Windows, NFS para Linux.
[600ms]
[calm] Segundo, uma camada de mídia: SSD para baixa latência ou HDD para uso geral com bom custo-benefício. Compartilhamentos NFS são só SSD.
[600ms]
[serious] Um compartilhamento não fala os dois protocolos e não troca de camada diretamente. Você cria um compartilhamento novo e copia os dados.

## Step 5 · Who gets in: identity-based access

[calm] Um lift-and-shift mantém as ACLs do Windows. Os usuários entram com a identidade que já têm.
[600ms]
[confident] O Azure Files verifica o ticket Kerberos no compartilhamento e de novo em cada arquivo e pasta. Ele recebe o ticket, nunca a senha do usuário.
[600ms]
[serious] Escolha uma fonte de identidade por conta de armazenamento: AD DS, Entra Domain Services ou Entra Kerberos. Isso vale só para compartilhamentos SMB, e a chave da conta não é recomendada.

## Step 6 · Reaching it from on-premises

[calm] Para usar SMB a partir do ambiente local, você precisa de uma VPN ou de um link ExpressRoute até a sua rede do Azure.
[600ms]
[confident] Aí o Azure Files é exposto por um endpoint privado, em um endereço IP privado.
[600ms]
[curious] Também existe um endpoint público, só para SMB três ou posterior. O NFS nunca é acessível pela internet, e um cache do File Sync pode dar a uma filial acesso local rápido.

## Step 7 · Azure File Sync: a cache on your server

[curious] Para montar o cache, implante um Storage Sync Service, instale o agente em um Windows Server e registre o servidor.
[600ms]
[calm] Um grupo de sincronização liga um endpoint de nuvem, que é um compartilhamento de arquivos do Azure, a um ou mais endpoints de servidor, cada um uma pasta em um servidor.
[600ms]
[serious] Um servidor se registra em um serviço por vez, e só compartilhamentos de arquivos do Azure com SMB podem sincronizar.

## Step 8 · Cloud tiering: hot local, cool in Azure

[calm] O cloud tiering mantém no servidor os arquivos quentes, os mais usados.
[600ms]
[curious] Os arquivos frios mantêm o nome e a pasta no servidor, enquanto o conteúdo fica no compartilhamento de arquivos do Azure e volta quando alguém abre o arquivo.
[600ms]
[confident] Duas políticas decidem quando fazer o tiering: a política de espaço livre no volume e a política de data, para arquivos que não são acessados há um número definido de dias.

## Step 9 · Multi-site sync and quick recovery

[calm] Todo servidor sincroniza pelo compartilhamento de arquivos do Azure, então cada escritório vê os mesmos arquivos, sem links entre servidores.
[600ms]
[confident] Adicione quantos caches de servidor precisar, em qualquer lugar do mundo.
[600ms]
[reassuring] Se um servidor falhar, provisione um novo Windows Server, instale o agente e registre-o. O namespace é baixado do Azure e os arquivos voltam quando são acessados, sem precisar de backup local.

## Step 10 · Table storage: entities and keys

[calm] O Table storage é um armazenamento NoSQL de chave e atributos, sem esquema, que fica em uma tabela dentro da sua conta de armazenamento.
[600ms]
[confident] Cada entidade é uma linha de propriedades, localizada pela combinação de PartitionKey e RowKey. Entidades da mesma tabela podem até ter propriedades diferentes.
[600ms]
[curious] Entidades com o mesmo PartitionKey são consultadas mais rápido e podem ser inseridas ou atualizadas em operações atômicas.

## Step 11 · Query by key, then outgrow it

[confident] Sempre inclua o PartitionKey. Uma consulta pontual, com PartitionKey e RowKey, é a busca mais rápida que existe.
[600ms]
[serious] Uma consulta sem o PartitionKey varre todas as partições, e essa é a mais lenta.
[600ms]
[optimistic] Os resultados voltam ordenados por essas chaves. E se o Table storage ficar pequeno para você, o Azure Cosmos DB for Table mantém os mesmos SDKs e acrescenta distribuição global e índices secundários automáticos.

## Step 12 · Azure NetApp Files: enterprise NAS

[calm] O Azure NetApp Files é um serviço de arquivos de nível corporativo. Uma conta NetApp contém pools de capacidade, e cada pool contém volumes.
[600ms]
[confident] O nível de serviço é definido no pool, e os volumes atendem NFS, SMB ou os dois.
[600ms]
[curious] Os volumes ficam em uma sub-rede delegada da sua rede virtual, então os clientes locais chegam a eles por ExpressRoute ou VPN.

## Step 13 · Which one do I pick?

[curious] Escolha a necessidade que mais se parece com a sua, e o serviço correspondente acende na tabela comparativa.
[600ms]
[confident] Duas necessidades vão para o Azure NetApp Files: computação de alto desempenho em Linux, e SAP ou Oracle. As duas pedem um NAS corporativo.
[600ms]
[reflective] Para cargas Linux mais leves, um compartilhamento NFS do Azure Files em SSD já pode bastar.

## Step 14 · All in one

[calm] Associe a necessidade ao serviço e depois escolha como ele chega ao ambiente local. Quatro serviços, uma pergunta.
[600ms]
[confident] O A Z 305 pede que você recomende armazenamento para dados semiestruturados e não estruturados e equilibre recursos, desempenho e custo.
[600ms]
[proud] O A Z 104 cobre a criação de um compartilhamento de arquivos, snapshots, soft delete, camadas de armazenamento e acesso baseado em identidade no Azure Files.
