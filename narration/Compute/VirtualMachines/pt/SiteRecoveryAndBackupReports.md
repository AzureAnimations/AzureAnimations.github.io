# Narrator Script — Virtual Machines · Site Recovery and Backup Reports

**Source animation:** [SiteRecoveryAndBackupReports.html](../../../../journeys/Compute/VirtualMachines/SiteRecoveryAndBackupReports.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/site-recovery/azure-to-azure-architecture>
- <https://learn.microsoft.com/azure/site-recovery/azure-to-azure-tutorial-failover-failback>
- <https://learn.microsoft.com/azure/site-recovery/site-recovery-overview>

---

## Step 1 · A region goes down

[calm] A VM da loja da Contoso roda em uma única região do Azure. Agora imagine que essa região inteira sofre uma interrupção.
[600ms]
[concerned] Onde a VM volta a funcionar, e em quanto tempo?
[600ms]
[confident] Vamos acompanhar a recuperação de desastres de Azure para Azure com o Site Recovery e, depois, os relatórios e os alertas do Azure Backup. Tudo aqui é fictício e combina com a A Z 104 e a A Z 305.

## Step 2 · Set up the recovery

[calm] Tudo começa em um cofre dos Recovery Services. Você escolhe as regiões de origem e de destino, o grupo de recursos e a rede de destino e uma política de replicação.
[600ms]
[curious] O Site Recovery pode criar para você o grupo de recursos e a rede virtual de destino, ou você pode escolher os seus.
[600ms]
[confident] Crie o cofre em qualquer região, menos na região de origem.

## Step 3 · Replicate every write

[calm] Quando a replicação é ativada, uma extensão do serviço de mobilidade é instalada automaticamente na VM.
[600ms]
[curious] Ela envia cada gravação de disco para uma conta de armazenamento de cache e, depois, para discos gerenciados de réplica na região de destino. O cache evita que a replicação deixe a VM de produção mais lenta.
[600ms]
[reassuring] O Site Recovery só precisa de conectividade de saída a partir da VM, nunca de entrada.

## Step 4 · Recovery points

[calm] Os snapshots viram pontos de recuperação. O padrão são os pontos consistentes com falha.
[600ms]
[curious] Um ponto consistente com falha guarda o que estava no disco, como se alguém puxasse o cabo de energia. Um ponto consistente com o aplicativo também captura a memória e as transações em andamento, e exige uma frequência na política de replicação.
[600ms]
[confident] A retenção é definida na mesma política.

## Step 5 · Recovery plans

[calm] Um plano de recuperação organiza as suas VMs em grupos. Os grupos iniciam em ordem, e as VMs dentro de um grupo iniciam juntas.
[600ms]
[curious] Entre os grupos, você pode rodar scripts, que são runbooks do Azure Automation, ou adicionar uma ação manual que pausa o plano até alguém confirmar.
[600ms]
[confident] Um único plano pode executar um failover de teste, um failover e um failback.

## Step 6 · Test failover: the safe drill

[calm] O failover de teste é o simulado seguro. Ele cria uma cópia da VM em uma rede de teste isolada.
[600ms]
[reassuring] A produção continua rodando e a replicação continua, então nada em produção é afetado. Use uma rede que não seja de produção para o simulado.
[600ms]
[confident] Quando estiver satisfeito, escolha Cleanup test failover para excluir a VM de teste.

## Step 7 · Failover and commit

[serious] Em uma interrupção real, o failover cria a VM no grupo de recursos e na rede de destino, a partir do ponto de recuperação que você escolheu.
[600ms]
[curious] Enquanto você não confirmar, ainda dá para escolher Change recovery point.
[600ms]
[confident] O Commit conclui o trabalho. Ele apaga todos os pontos de recuperação dessa VM no Site Recovery, então não dá mais para mudar de ideia.

## Step 8 · Reprotect and fail back

[calm] Depois do commit, você reprotege a VM para que ela replique de volta para a região original.
[600ms]
[curious] Quando a região primária voltar a ficar saudável, você faz o failback. A VM de origem precisa estar desligada, para que as alterações sincronizem com os discos originais.
[600ms]
[confident] Depois, você reprotege de novo. Nos discos gerenciados, o Site Recovery limpa a VM na região secundária.

## Step 9 · Run a failover drill

[curious] Agora experimente você mesmo. Escolha um tipo de failover e veja quais etapas mudam.
[600ms]
[confident] Preste atenção no que a escolha significa para a perda de dados, o seu RPO, e para o tempo de recuperação, o seu RTO.
[600ms]
[reassuring] No portal, uma VM do Azure oferece Test failover e Failover. Se você desligar a máquina antes, o failover é o planejado.

## Step 10 · Backup or Site Recovery?

[curious] Muita gente pergunta se precisa do Backup ou do Site Recovery. Os dois respondem a tipos diferentes de falha.
[600ms]
[confident] O Backup restaura uma cópia do passado. O Site Recovery roda a VM em outro lugar, então a carga de trabalho continua funcionando durante uma interrupção.
[600ms]
[reassuring] Os dois fazem parte de uma estratégia de continuidade de negócios e recuperação de desastres, então a maioria dos projetos usa os dois.

## Step 11 · Where reports come from

[calm] Os relatórios do Backup são criados sobre os logs do Azure Monitor. Você envia os diagnósticos dos seus cofres para um workspace do Log Analytics, e os workbooks transformam esses dados em relatórios.
[600ms]
[curious] O workspace pode ficar em outra assinatura ou em outro local, e uma Azure Policy interna pode definir as configurações de diagnóstico de vários cofres de uma só vez.
[600ms]
[serious] Por padrão, o workspace guarda os dados por um tempo limitado, então aumente a retenção se quiser ver tendências de longo prazo.

## Step 12 · Reading the report

[calm] O relatório cobre trabalhos, instâncias, uso, políticas, aderência às políticas e otimização. Esses números são fictícios.
[600ms]
[curious] Procure primeiro o que está em vermelho ou faltando e depois aprofunde a análise nisso.
[600ms]
[confident] Também há relatórios prontos, como o Backup Job History e o Backup Configuration Status. O Site Recovery tem os relatórios Job History e Replication History.

## Step 13 · Backup alerts

[calm] O Azure Backup gera alertas internos do Azure Monitor para eventos críticos, e eles disparam por padrão.
[600ms]
[serious] Entre eles estão falhas de backup, falhas de restauração, exclusão de dados de backup e desativação do soft delete.
[600ms]
[confident] Você vê esses alertas em Resiliency. O que você decide é quem recebe o aviso, usando uma regra de processamento de alertas e um grupo de ações, que encaminham para e-mail, webhook, logic app ou runbook.

## Step 14 · All in one

[calm] Aqui está o caminho completo: replicar, planejar, testar, fazer o failover e reproteger. Depois, gerar relatórios e alertas, para saber que os backups estão saudáveis.
[600ms]
[confident] A A Z 104 cobre configurar o Site Recovery, fazer o failover para uma região secundária e interpretar relatórios e alertas de backup. A A Z 305 cobre o projeto de backup e recuperação de desastres.
[600ms]
[proud] As habilidades avaliadas mudam, então confira com os guias de estudo atuais.
