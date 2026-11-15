# Narrator Script — Security · Microsoft Defender for Cloud — Azure Security Journey

**Source animation:** [DefenderForCloud.html](../../../journeys/Security/DefenderForCloud.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/defender-for-cloud/defender-for-cloud-introduction>
- <https://learn.microsoft.com/azure/defender-for-cloud/secure-score-security-controls>
- <https://learn.microsoft.com/azure/defender-for-cloud/exempt-resource>
- <https://learn.microsoft.com/azure/defender-for-cloud/concept-regulatory-compliance-standards>

---

## Step 1 · Is my Azure estate secure?

[calm] A Contoso roda servidores, contêineres, dados e aplicativos em várias assinaturas, e a Priya precisa saber o que está frágil e o que está sob ataque.
[600ms]
[curious] Esse é o trabalho do Microsoft Defender for Cloud, e esta lição cobre o serviço para os exames A Z 305, A Z 104 e A Z 700.
[600ms]
[reassuring] Para o Defender XDR no Microsoft 365, veja a jornada de Zero Trust.

## Step 2 · Two pillars: posture and protection

[confident] O Defender for Cloud faz dois trabalhos. O primeiro é o gerenciamento de postura, o CSPM, que encontra e corrige fraquezas.
[600ms]
[calm] O segundo é a proteção de carga de trabalho, o CWPP, que detecta ameaças e responde a elas.
[600ms]
[reflective] O Microsoft Learn também lista o DevSecOps, ou seja, a segurança de código e de pipeline, como um terceiro componente dessa plataforma de proteção de aplicativos nativos da nuvem.

## Step 3 · Secure score and recommendations

[calm] O Defender for Cloud confere seus recursos com um benchmark de segurança e aplica por padrão o Microsoft cloud security benchmark.
[600ms]
[confident] Ele gera recomendações e reúne os resultados em uma única pontuação de segurança. Quanto mais você corrige, mais a pontuação sobe, e isso significa menos risco identificado.
[600ms]
[encouraging] O Foundational CSPM, com a pontuação e as recomendações, é gratuito. Os números na tela são só um exemplo.

## Step 4 · Four ways to act on a recommendation

[calm] Cada recomendação lista o problema, a gravidade, os recursos afetados e os passos para corrigir.
[600ms]
[confident] Você pode corrigir, bloquear com Deny ou Enforce pelo Azure Policy, aceitar com uma isenção ou atribuir um responsável.
[600ms]
[serious] Deny e Enforce valem só para recursos do Azure e para um subconjunto de recomendações, e as regras de governança exigem o plano Defender CSPM.

## Step 5 · Regulatory compliance dashboard

[curious] Um padrão é um conjunto de controles, e cada controle é um grupo de recomendações.
[600ms]
[calm] O painel mostra quais controles os seus recursos atendem. Um controle que não pode ser avaliado automaticamente aparece como indisponível, em cinza.
[600ms]
[confident] O Microsoft cloud security benchmark vem ativado por padrão, e as avaliações regulatórias extras exigem o Defender CSPM.

## Step 6 · Attack paths and cloud security explorer

[curious] O Defender CSPM mapeia a sua nuvem como um grafo e encontra os caminhos que um invasor poderia seguir até os seus ativos críticos.
[600ms]
[impressed] Depois, ele sugere a correção que corta o caminho, para você resolver a única coisa que mais importa.
[600ms]
[serious] A análise de caminho de ataque e o explorador de segurança em nuvem fazem parte do plano pago Defender CSPM, e exigem a verificação sem agente ou a avaliação de vulnerabilidades do Defender for Servers.

## Step 7 · One Defender plan per workload

[calm] A proteção de carga de trabalho é ativada plano por plano, e cada plano acrescenta detecção de ameaças para um tipo de recurso.
[600ms]
[confident] Servidores, armazenamento, bancos de dados, contêineres, serviços de IA e outros: cada um tem o seu próprio plano. O Defender for Servers vem em Plan 1 e Plan 2.
[600ms]
[reassuring] Ative um plano em uma assinatura, e ele cobre esse tipo de recurso em toda a assinatura.

## Step 8 · Alerts, incidents and your SOC

[calm] Os planos ativados geram alertas ordenados por gravidade, com os recursos afetados e os passos de correção.
[600ms]
[confident] O Defender for Cloud agrupa alertas relacionados em um único incidente, para a equipe ver uma história em vez de uma pilha.
[600ms]
[impressed] Os alertas podem ser enviados para um SIEM, como o Microsoft Sentinel, ou para ferramentas de SOAR e ITSM, e também aparecem no portal do Defender.

## Step 9 · Enable once, cover everything

[confident] Ative os planos no nível da assinatura, e isso protege os recursos dela.
[600ms]
[curious] Para cobrir um grupo de gerenciamento inteiro, atribua a Azure Policy interna que habilita o Defender for Cloud, com uma tarefa de correção.
[600ms]
[reassuring] A verificação sem agente dispensa instalar um agente em cada máquina. Ela faz parte do Defender CSPM e do Defender for Servers Plan 2.

## Step 10 · One view across clouds

[calm] Seu ambiente provavelmente não é só Azure. Conecte contas da AWS e projetos do GCP e adicione servidores locais pelo Azure Arc.
[600ms]
[confident] O Defender for Cloud usa conectores sem agente para AWS e GCP, então você tem visibilidade de postura e proteção de carga de trabalho também fora do Azure.
[600ms]
[impressed] Tudo aparece em um só lugar.

## Step 11 · What you pay for

[calm] O básico da postura é gratuito. A postura avançada e cada plano de carga de trabalho são pagos, e a cobrança acompanha os planos e recursos que você ativa.
[600ms]
[reflective] Não há preços aqui de propósito, porque eles mudam. Use a página de preços e a calculadora de custos.
[600ms]
[encouraging] Uma assinatura nova pode testar o Defender for Cloud de graça por trinta dias, mas a verificação de malware do Defender for Storage é cobrada desde o primeiro dia.

## Step 12 · Which plan protects it?

[curious] Agora é a sua vez. Escolha um tipo de recurso e veja qual plano do Defender protege esse recurso.
[600ms]
[calm] Você vai ver o que o plano detecta e um exemplo de recomendação para esse recurso.
[600ms]
[confident] Todo plano também tem uma recomendação própria pedindo para você ativá-lo, e o achado mostrado é só um exemplo, não a lista completa.

## Step 13 · Posture, protection, response

[calm] Encontre e corrija fraquezas, detecte ameaças e responda a elas, e ative tudo isso em grande escala.
[600ms]
[confident] Depois, confira as habilidades medidas no seu exame. O guia do A Z 700 cita Secure Score, Attack Path Analysis e Cloud Security Explorer.
[600ms]
[reassuring] O A Z 305 inclui gerenciar a conformidade, e o A Z 104 cobre governança e monitoramento. Os exames mudam, então leia o guia de estudo atual.
