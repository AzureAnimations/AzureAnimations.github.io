# Narrator Script — Architect · Design governance: structure, policy and compliance

**Source animation:** [DesignGovernance.html](../../../journeys/Architect/DesignGovernance.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/governance/management-groups/overview>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-management-groups>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions>
- <https://learn.microsoft.com/azure/azure-resource-manager/management/overview>
- <https://learn.microsoft.com/azure/azure-resource-manager/management/tag-resources>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/azure-best-practices/resource-tagging>
- <https://learn.microsoft.com/azure/governance/policy/concepts/effect-basics>
- <https://learn.microsoft.com/azure/defender-for-cloud/regulatory-compliance-dashboard>
- <https://learn.microsoft.com/purview/compliance-manager>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/>

---

## Step 1 · One subscription, no structure

[calm] Contoso reuniu a loja, bancos de dados e experimentos em uma única assinatura, sem estrutura compartilhada.
[600ms]
[curious] Observe os três problemas ao lado: risco de produção, custos pouco claros e regras que mudam de equipe para equipe.
[600ms]
[reassuring] O projeto começa dando à propriedade, ao isolamento e às políticas um lugar claro para existir.

## Step 2 · Management groups: rules that flow down

[calm] Grupos de gestão organizam as assinaturas pelas regras que compartilham, em vez de copiar o organograma da empresa.
[600ms]
[curious] Siga a política na árvore: assinaturas herdam os limites de proteção atribuídos acima delas.
[600ms]
[reassuring] Mantenha a hierarquia rasa, com assinaturas separadas de desenvolvimento e produção sob o grupo compartilhado apropriado.

## Step 3 · Subscriptions: billing, limits and isolation

[calm] Uma assinatura cria um limite para faturamento, limites e isolamento, como mostram esses três cartões.
[600ms]
[curious] Contoso separa a plataforma de pedidos, o trabalho de desenvolvimento e os experimentos porque seus orçamentos e requisitos de acesso diferem.
[600ms]
[reassuring] Escolha uma nova assinatura quando a fronteira precisar mudar, não apenas porque outra região está envolvida.

## Step 4 · Resource groups: one shared lifecycle

[calm] Esses recursos de aplicação são implantados, atualizados e excluídos juntos, então compartilham um grupo de recursos.
[600ms]
[curious] A rede compartilhada permanece em seu próprio grupo porque tem um ciclo de vida diferente.
[600ms]
[reassuring] Deletar o grupo de aplicações remove seus recursos juntos, enquanto a rede gerenciada separadamente mantém seu próprio ciclo de vida.

## Step 5 · Tags: decide what, then let policy apply them

[calm] Tags descrevem recursos por meio de categorias como função, classificação, contabilidade e propósito de negócio.
[600ms]
[curious] Observe a tag de grupo de recursos: ela não aparece automaticamente no recurso abaixo dela.
[600ms]
[reassuring] A Contoso usa o Azure Policy para copiar as tags necessárias, transformando uma estratégia de marcação em algo que a plataforma pode aplicar.

## Step 6 · Azure Policy: pick the effect for each rule

[calm] A linha de base Contoso coleta várias definições de políticas em uma única iniciativa, atribuída no escopo compartilhado.
[600ms]
[curious] audit relata um problema, deny o bloqueia, modify altera propriedades e deployIfNotExists adiciona um recurso relacionado ausente.
[600ms]
[reassuring] Escolha o efeito que corresponde à regra, em vez de tratar todo problema de conformidade como uma implantação bloqueada.

## Step 7 · Compliance: who answers which question

[calm] Essas duas ferramentas respondem a questões diferentes de conformidade, mesmo que seu trabalho esteja conectado.
[600ms]
[curious] O Microsoft Defender for Cloud avalia recursos do Azure em relação aos controles, enquanto o Microsoft Purview Compliance Manager organiza avaliações e ações de melhoria.
[600ms]
[reassuring] Contoso precisa tanto de uma visão das descobertas técnicas quanto de uma forma de acompanhar as pessoas responsáveis pela melhoria.

## Step 8 · All in one: Contoso’s landing zone

[calm] Aqui está o design de governança da Contoso reunido em uma única zona de pouso, com cada osciloscópio fazendo um trabalho diferente.
[600ms]
[curious] Grupos de gestão mantêm regras comuns, assinaturas separam limites, grupos de recursos acompanham ciclos de vida e tags explicam a propriedade.
[600ms]
[reassuring] Ferramentas de políticas e conformidade tornam essas decisões executáveis e revisáveis; em seguida, conecte as pessoas que usarão esse espólio.

