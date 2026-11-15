# Narrator Script — GitHub · Security Operations: Prioritise, Remediate and Govern

**Source animation:** [SecurityOperations.html](../../../journeys/GitHub/SecurityOperations.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/securing-your-organization>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · A thousand alerts, one team

[calm] A Contoso ligou todos os scanners. Agora a visão geral de segurança mostra mais alertas abertos do que quatro pessoas conseguiriam ler.
[600ms]
[concerned] Então, por onde começar?
[600ms]
[confident] Esta lição segue quatro passos. Dar nome ao alerta, priorizá-lo, corrigir em escala e controlar quem pode abrir exceções.

## Step 2 · CVE, CWE and GHSA

[curious] Três identificadores aparecem em quase todo alerta, e cada um responde a uma pergunta diferente.
[600ms]
[confident] Um CVE é uma vulnerabilidade pública específica. Um CWE é o tipo de fraqueza por trás dela. Um GHSA é o registro do aviso no GitHub.
[600ms]
[calm] O GitHub é uma CVE Numbering Authority, então pode atribuir IDs de CVE. Use o identificador certo para buscar, filtrar e reportar.

## Step 3 · Severity, EPSS and exposure

[calm] A severidade diz a gravidade de uma falha, de baixa a crítica. O EPSS diz a probabilidade de ela ser explorada nos próximos trinta dias.
[600ms]
[confident] A exposição diz se o seu código pode mesmo ser atingido. O pacote está em produção ou em desenvolvimento, e o código com a falha é alcançável?
[600ms]
[reflective] A análise de alcance está em prévia pública, para JavaScript e TypeScript. Leia os três sinais antes de priorizar a fila.

## Step 4 · A remediation workflow

[confident] Todo alerta segue os mesmos cinco passos. Triagem, atribuição, correção, verificação e fechamento.
[600ms]
[calm] Dá para atribuir alertas a pessoas, equipes ou agentes de AI. Um pull request de correção dispara uma nova varredura, então a mudança é verificada antes do merge.
[600ms]
[reassuring] Cada mudança vai para a linha do tempo do alerta. E, se você não vai corrigir, dispense com um motivo e um comentário.

## Step 5 · Security campaigns

[curious] Uma campanha de segurança agrupa alertas relacionados, dá aos desenvolvedores um prazo e um contato, e deixa a equipe de segurança acompanhar o backlog diminuir.
[600ms]
[confident] Você cria uma a partir do security overview. Escolha um modelo ou seus próprios filtros e defina um nome, uma data limite e os gerentes da campanha.
[600ms]
[impressed] Acompanhe os alertas como abertos, em andamento, corrigidos ou dispensados. Nos alertas de code scanning, o Copilot Autofix é acionado automaticamente.

## Step 6 · Bulk actions and auto-dismiss

[calm] Dá para dispensar vários alertas pelo mesmo motivo em uma única ação. Ou deixar uma regra fazer isso conforme os alertas chegam.
[600ms]
[confident] As regras de triagem automática podem dispensar ou adiar alertas do Dependabot antes de as notificações saírem. Os presets vêm do GitHub, e as regras personalizadas exigem Code Security ou Advanced Security.
[600ms]
[serious] De qualquer forma, registre o porquê. Motivos, comentários, a linha do tempo e o log de auditoria são o seu rastro, e alguém vai perguntar depois.

## Step 7 · Alert ownership

[calm] Três papéis dividem cada alerta. Os desenvolvedores corrigem.
[600ms]
[confident] A equipe de segurança gerencia a fila toda. A função de gerente de segurança dá acesso de leitura em todos os repositórios, acesso de gravação em todos os alertas de segurança e acesso ao security overview.
[600ms]
[curious] Os administradores definem as regras dentro das quais todo mundo trabalha. Os proprietários da organização atribuem a função de gerente de segurança.

## Step 8 · Delegated bypass and exceptions

[calm] Às vezes um push ou um alerta é mesmo uma exceção. Com a delegação, um revisor indicado decide.
[600ms]
[confident] Com o bypass delegado, um push bloqueado pode pedir um bypass, e um revisor aprova ou nega. A dispensa delegada funciona do mesmo jeito para alertas de code scanning, secret scanning e Dependabot.
[600ms]
[reassuring] Bypasses e dispensas ficam registrados, então toda decisão fica documentada.

## Step 9 · Rulesets that block a merge

[confident] Um ruleset transforma a sua política de severidade em uma barreira. Escolha um limite, e qualquer pull request que passar dele não pode ser mesclado.
[600ms]
[curious] A regra se chama Exigir resultados de escaneamento de código. Ela também bloqueia quando a análise ainda está rodando ou não está configurada. Experimente os botões e veja a barreira mudar.
[600ms]
[calm] Quem define isso são os administradores do repositório e os proprietários da organização.

## Step 10 · Tailor detection

[curious] Detecção não é tamanho único. Escolha uma suíte de consultas do CodeQL que combine com o seu risco.
[600ms]
[confident] Default e security-extended funcionam com a configuração padrão. Security-and-quality e as suítes personalizadas exigem a configuração avançada.
[600ms]
[encouraging] Você também pode ensinar ao secret scanning os seus próprios formatos de token, com padrões personalizados escritos como expressões regulares.

## Step 11 · Shift left, end to end

[calm] A checagem mais cedo é a mais barata. Pegue os problemas cedo, e eles nunca entram no backlog.
[600ms]
[confident] No push, a push protection bloqueia um segredo. No pull request, a dependency review e o code scanning fazem o relatório. No merge, um ruleset pode bloquear.
[600ms]
[reassuring] Depois do merge, os alertas do Dependabot e as varreduras continuam de olho.

## Step 12 · Recap: a monthly security review

[calm] A equipe de segurança da Contoso agora se reúne uma vez por mês. Cada item da pauta é uma ideia desta lição, em palavras simples.
[600ms]
[confident] Dê nome ao alerta, priorize, corrija em massa e revise quem pode abrir exceções. Depois, imponha as regras e ajuste a detecção.
[600ms]
[proud] Isso cobre as habilidades de operações de segurança do guia de estudo do G H 500. Agora pratique na sua própria organização.
