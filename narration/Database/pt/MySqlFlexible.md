# Narrator Script — Database · Azure Database for MySQL: Design for Availability and Growth

**Source animation:** [MySqlFlexible.html](../../../journeys/Database/MySqlFlexible.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/mysql/flexible-server/overview>
- <https://learn.microsoft.com/azure/mysql/flexible-server/concepts-high-availability>
- <https://learn.microsoft.com/azure/mysql/flexible-server/concepts-read-replicas>
- <https://learn.microsoft.com/azure/mysql/flexible-server/concepts-backup-restore>

---

## Step 1 · Contoso Shop already speaks MySQL

[calm] A Contoso Shop é uma loja em PHP que já roda no MySQL.
[600ms]
[serious] Hoje a equipe aplica os patches, faz o backup e o failover tudo na mão, e esse trabalho nunca acaba.
[600ms]
[reassuring] O Azure Database for MySQL flexible server roda o mesmo motor da comunidade, mas como um serviço gerenciado.

## Step 2 · When is MySQL the right pick?

[curious] Então, quando o MySQL é a escolha certa? Comece pelo motor que o seu aplicativo já usa.
[600ms]
[confident] Se ele foi feito para MySQL, o flexible server mantém os seus drivers, o seu SQL e as suas ferramentas exatamente como estão.
[600ms]
[calm] Outros tipos de aplicativo apontam para outros serviços, e a página Escolha o seu banco de dados mostra esses prós e contras.

## Step 3 · A managed engine with compute apart from storage

[calm] Este é o formato do serviço. Você escolhe a versão do MySQL, a computação e o armazenamento.
[600ms]
[confident] Os parâmetros do servidor ajustam o motor. Os dinâmicos valem na hora, e os estáticos exigem uma reinicialização.
[600ms]
[serious] Um alerta: o MySQL cinco vírgula sete está em suporte estendido, que é cobrado, então planeje uma atualização de versão principal. Só o InnoDB é compatível.

## Step 4 · Three compute tiers, matched to the workload

[curious] A computação tem três camadas. A Burstable é para servidores de desenvolvimento e teste que ficam ociosos a maior parte do tempo.
[600ms]
[confident] A General Purpose serve para a maioria dos aplicativos de produção, e a Memory-Optimized é para velocidade em memória e alta concorrência.
[600ms]
[serious] Alta disponibilidade e réplicas de leitura exigem General Purpose ou Memory-Optimized, e trocar a computação reinicia o servidor.

## Step 5 · High availability: a standby that takes over

[calm] A alta disponibilidade adiciona um standby passivo, que reproduz os logs do primário.
[600ms]
[impressed] Se o primário falhar, o standby assume, e os dados confirmados são mantidos. A HA com redundância de zona resiste até a uma queda de zona inteira.
[600ms]
[serious] Escolha a HA com redundância de zona ao criar o servidor. E conecte sempre pelo nome do servidor, nunca por um endereço IP.

## Step 6 · Read replicas: scale reads and cover a region

[curious] As réplicas de leitura copiam a origem de forma assíncrona e atendem às leituras, para que a origem fique só com as gravações.
[600ms]
[confident] Uma réplica em outra região ajuda na recuperação de desastres, e você pode ter até dez delas.
[600ms]
[serious] Mas nada faz failover automático. Para trocar, você interrompe a replicação em uma réplica e aponta o aplicativo para ela.

## Step 7 · Backups and point-in-time restore

[calm] Snapshots mais logs de transação permitem restaurar para qualquer momento dentro do período de retenção.
[600ms]
[confident] Uma restauração cria um servidor totalmente novo a partir desses backups, então o original fica intacto.
[600ms]
[serious] Lembre-se: depois de uma restauração, um servidor com HA volta sem HA, então você vai querer ativá-la de novo.

## Step 8 · Who can reach the server?

[curious] Quem pode chegar ao servidor? Escolha uma porta: acesso público com regras de firewall, um endpoint privado ou integração com VNet.
[600ms]
[confident] O tráfego é criptografado com TLS, e o login pode usar o Microsoft Entra ID no lugar da autenticação padrão do MySQL.
[600ms]
[reassuring] O login com o Entra exige uma identidade gerenciada atribuída pelo usuário e um administrador do Entra. Qualquer uma das portas de rede controla o acesso no servidor, e não por tabela.

## Step 9 · Grow and patch without rebuilding

[calm] Dá para crescer sem reconstruir nada. A computação sobe ou desce de tamanho com uma reinicialização rápida.
[600ms]
[impressed] O armazenamento cresce online e pode até crescer sozinho, mas só aumenta, nunca diminui.
[600ms]
[reassuring] Os patches rodam em uma janela de manutenção que você escolhe, e, em desenvolvimento e teste, você pode parar o servidor para pausar a cobrança da computação.

## Step 10 · Moving a MySQL database in

[curious] Como trazer um banco de dados MySQL para cá? Escolha o caminho de acordo com quanto tempo de indisponibilidade a loja aguenta.
[600ms]
[confident] O Azure Database Migration Service pode continuar sincronizando durante a virada, e o dump e restore é o caminho mais simples.
[600ms]
[serious] O Single Server foi desativado em setembro de 2024, então esses servidores precisam ser migrados. Converta primeiro as tabelas que não sejam InnoDB e só então comece a migração.

## Step 11 · Which flexible server design fits the requirement?

[curious] Agora experimente você mesmo. Escolha o requisito mais parecido com o seu.
[600ms]
[intrigued] As configurações correspondentes do flexible server se acendem, junto com um desenho da arquitetura e a pegadinha que merece atenção.
[600ms]
[reflective] Projetos reais combinam essas peças, como HA com redundância de zona, réplicas de leitura e acesso privado para um armazenamento de produção.

## Step 12 · MySQL on Azure: pick it, protect it, grow it

[calm] Vamos juntar tudo. Escolha o flexible server quando o aplicativo já usa MySQL.
[600ms]
[confident] Depois, projete de acordo com o requisito: a camada de computação, a alta disponibilidade, as réplicas, os backups e a porta de rede.
[600ms]
[proud] Na sequência, a página do PostgreSQL mostra o mesmo modelo de flexible server para outro motor.
