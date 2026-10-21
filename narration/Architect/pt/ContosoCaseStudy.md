# Narrator Script — Architect · Case study: design the Contoso platform

**Source animation:** [ContosoCaseStudy.html](../../../journeys/Architect/ContosoCaseStudy.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-305>
- <https://learn.microsoft.com/azure/well-architected/what-is-well-architected-framework>
- <https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn>
- <https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview>
- <https://learn.microsoft.com/azure/azure-sql/managed-instance/business-continuity-high-availability-disaster-recover-hadr-overview>
- <https://learn.microsoft.com/azure/app-service/overview-patch-os-runtime>
- <https://learn.microsoft.com/azure/networking/design-guide/app-delivery>
- <https://learn.microsoft.com/azure/vpn-gateway/vpn-gateway-about-vpngateways>
- <https://learn.microsoft.com/azure/architecture/networking/architecture/hub-spoke>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/migrate/plan-migration>
- <https://learn.microsoft.com/azure/dms/dms-overview>
- <https://learn.microsoft.com/azure/storage/common/storage-migration-overview>
- <https://learn.microsoft.com/azure/well-architected/>

---

## Step 1 · Read the brief: requirements and constraints

[calm] Leia o resumo da Contoso antes de procurar um serviço favorito do Azure.
[600ms]
[curious] Os requisitos sublinhados separam o que o projeto deve fazer das restrições de como pode ser entregue.
[600ms]
[reassuring] Use essas palavras para eliminar opções inadequadas primeiro, depois compare os demais desenhos com as mesmas evidências.

## Step 2 · Identity and governance: pick the sign-in method

[calm] A equipe da Contoso já utiliza contas locais, então a escolha de login começa com essa exigência.
[600ms]
[curious] Compare onde cada método valida o usuário e então escolha o método mais simples que atenda à necessidade declarada.
[600ms]
[reassuring] As barreiras de governança giram em torno dessa decisão de autenticação; um nome de produto familiar sozinho não é justificativa.

## Step 3 · Data: match the SQL target to the need

[calm] O requisito do banco de dados exige capacidades de SQL Server em nível de instância, não apenas um lugar para armazenar tabelas relacionais.
[600ms]
[curious] Isso restringe as opções para a Instância Gerenciada SQL sem adicionar a responsabilidade do sistema operacional de uma máquina virtual.
[600ms]
[reassuring] Aponte para o requisito que o selecionou e explique por que as outras opções não têm as capacidades ou a restrição do esforço operacional.

## Step 4 · Business continuity: meet the RTO and RPO

[calm] Contoso deve se recuperar de uma falha regional em até uma hora e perder no máximo cinco minutos de dados de pedido.
[600ms]
[curious] Verifique cada opção tanto com as metas de recuperação quanto com a falha regional descrita no resumo.
[600ms]
[reassuring] A redundância de zona aborda uma fronteira diferente, enquanto um grupo de failover fornece a abordagem de recuperação entre regiões considerada neste projeto.

## Step 5 · Compute: the least to operate that fits

[calm] Uma pequena equipe de operações e um lançamento sem reescrita moldam a decisão de computação.
[600ms]
[curious] Para a aplicação web adequada, o App Service remove a manutenção do sistema operacional e de execução da lista de tarefas da Contoso.
[600ms]
[reassuring] A carga de trabalho lotada legada pode seguir um caminho inicial diferente, mostrando por que uma solução não precisa de um único serviço de computação em todos os lugares.

## Step 6 · Network: private link, global front door

[calm] A rede deve atender a dois requisitos: uma conexão privada de data center e um ponto de entrada global para os clientes.
[600ms]
[curious] ExpressRoute atende à conexão privada, enquanto Front Door assume o papel global de roteamento de aplicações.
[600ms]
[reassuring] Um gateway regional e uma VPN baseada na internet resolvem problemas diferentes, então verifique cada escolha em relação à redação exata do briefing.

## Step 7 · Migration: the lightest route per workload

[calm] O plano de migração atribui uma rota prática para cada parte da plataforma em vez de reescrever tudo antes do lançamento.
[600ms]
[curious] Azure Migrate cuida dos servidores, o Serviço de Migração de Banco de Dados move o banco de dados e o caminho de transferência de dados cuida dos arquivos.
[600ms]
[reassuring] Mantenha a ordem de dependências, validação e requisitos de cutover visíveis ao selecionar cada ferramenta.

## Step 8 · All in one: the Contoso platform

[calm] A plataforma Contoso montada atende aos quatro domínios de design com um conjunto conexo de escolhas.
[600ms]
[curious] Revise através de Confiabilidade, Segurança, Otimização de Custos, Excelência Operacional e Eficiência de Desempenho.
[600ms]
[reassuring] Um projeto defensável equilibra esses pilares com o briefing, explicando as concessões em vez de afirmar que toda dimensão é maximizada.

