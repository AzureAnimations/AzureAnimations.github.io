# Narrator Script — GitHub · Supply Chain Security: Dependency Graph, Dependabot and Dependency Review

**Source animation:** [SupplyChainSecurity.html](../../../journeys/GitHub/SupplyChainSecurity.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/supply-chain-security>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · Most of your code is somebody else’s code

[calm] Conheça o orders-api da Contoso. Ele usa alguns pacotes que a equipe escolheu de propósito.
[600ms]
[curious] Mas cada um desses pacotes traz outros pacotes, e esses trazem mais outros. Os que você escolheu são diretos, e os que vêm de carona são transitivos.
[600ms]
[serious] Isso importa, porque uma falha em qualquer ponto dessa cadeia vira uma falha no seu app.

## Step 2 · The dependency graph: direct and transitive packages

[confident] O GitHub monta o grafo de dependências a partir dos seus arquivos de manifesto e de lock. Você também pode enviar dados extras com a API de dependency submission.
[600ms]
[curious] Para cada pacote, você vê a versão, a licença e se ele é direto ou transitivo. O Mostrar caminhos revela o caminho até um pacote transitivo.
[600ms]
[calm] Os pacotes vulneráveis vão para o topo, então você vê os mais arriscados primeiro.

## Step 3 · The Advisory Database: how a package becomes an alert

[calm] Os avisos de segurança chegam ao GitHub de várias fontes e ficam no GitHub Advisory Database.
[600ms]
[confident] Só avisos revisados geram alertas do Dependabot, e só quando correspondem a um pacote do seu grafo. Avisos não revisados não geram nada.
[600ms]
[serious] Os avisos de malware são outro tipo de alerta, e você os ativa separadamente.

## Step 4 · Dependabot alerts: severity, EPSS and what to fix first

[curious] Aqui está uma lista de alertas do Dependabot. A severidade é um bom começo, mas é só um sinal.
[600ms]
[confident] Leia junto com o EPSS, que estima a chance de exploração nos próximos trinta dias. Depois, veja se o pacote roda em produção e como ele entrou no seu grafo.
[600ms]
[encouraging] Clique em um alerta e compare. É assim que você decide o que corrigir primeiro.

## Step 5 · Security updates: the pull request Dependabot opens

[calm] Ative as atualizações de segurança do Dependabot, e ele tenta corrigir todo alerta que tem patch.
[600ms]
[impressed] Ele abre um pull request para a versão corrigida mais baixa e o vincula ao alerta. Faça o merge do pull request, e o alerta é fechado.
[600ms]
[reflective] Em um pacote transitivo, o pull request pode atualizar o pacote pai.

## Step 6 · Version updates: dependabot.yml, schedule, groups, ignore

[confident] As atualizações de versão começam com um arquivo: o arquivo de configuração do Dependabot no seu repositório.
[600ms]
[calm] Ali você escolhe com que frequência o Dependabot verifica, quais atualizações são agrupadas em um único pull request e quais pacotes ignorar.
[600ms]
[reflective] Uma versão nova espera primeiro um período de cooldown, mas as atualizações de segurança não esperam. Mas cuidado: uma regra de ignorar também pode impedir os pull requests de atualização de segurança desse pacote.

## Step 7 · Alert rules: auto-dismiss and auto-triage

[curious] Barulho demais? As regras de triagem automática podem dispensar ou adiar alertas para você, antes de qualquer notificação sair.
[600ms]
[confident] Comece pelos presets que o GitHub mantém, ou escreva regras personalizadas que filtram por severidade, pacote, tipo de fraqueza e mais.
[600ms]
[serious] Saiba o que uma regra pode esconder. Os alertas dispensados automaticamente ainda podem ser filtrados, revisados e reabertos.

## Step 8 · Dependency Review: stop a bad package before the merge

[calm] Agora vamos para o pull request. A dependency review mostra quais pacotes foram adicionados, removidos ou atualizados.
[600ms]
[confident] Ela sinaliza vulnerabilidades e licenças conhecidas, e a action de dependency review pode reprovar a checagem.
[600ms]
[determined] Torne essa checagem obrigatória, e um pacote ruim não passa no merge. Para licenças, use uma lista de permissão ou uma lista de bloqueio, nunca as duas.

## Step 9 · SBOM: export the graph as SPDX

[calm] Um SBOM é uma lista de materiais de software, um inventário legível por máquina das dependências do seu projeto.
[600ms]
[confident] O GitHub exporta o grafo de dependências atual no formato SPDX, pela interface, pela REST API ou pelo GitHub Actions.
[600ms]
[reflective] Ele lista versões, identificadores, licenças e caminhos, mas não os projetos que dependem do seu.

## Step 10 · Who sees alerts, who owns them, and how they are notified

[calm] Administradores de repositório e proprietários da organização ativam os alertas do Dependabot e decidem quem pode vê-los.
[600ms]
[confident] Quem tem acesso de gravação pode atribuir um alerta a um usuário, a uma equipe ou a um agente de AI. Isso exige uma licença de Code Security ou Advanced Security.
[600ms]
[curious] As notificações chegam por e-mail, por um resumo semanal, por webhooks e pela REST API.

## Step 11 · Fix many alerts at once

[curious] E se você tem centenas de alertas? Agrupe as atualizações de segurança, e você recebe menos pull requests por ecossistema de pacotes.
[600ms]
[confident] Você também pode selecionar vários alertas, dar um único motivo e dispensá-los juntos. Ou entregar um alerta a um agente de AI.
[600ms]
[encouraging] As campanhas de segurança fazem o mesmo trabalho em escala para alertas de code scanning e de secret scanning.

## Step 12 · Recap: graph, alert, update, review

[calm] Vamos juntar tudo. O grafo mostra do que você depende.
[600ms]
[confident] Os alertas dizem o que está vulnerável, e as atualizações trazem a correção. A dependency review barra novos riscos já no pull request.
[600ms]
[proud] Esse é o domínio de segurança da cadeia de suprimentos do guia de estudo do G H 500. Pratique em um dos seus próprios repositórios.
