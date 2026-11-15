# Narrator Script — Security · Secure AI workloads in Azure: gateway, guardrails and Defender for AI

**Source animation:** [SecureAiWorkloads.html](../../../journeys/Security/SecureAiWorkloads.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/api-management/genai-gateway-capabilities>
- <https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview>
- <https://learn.microsoft.com/azure/defender-for-cloud/ai-threat-protection>
- <https://learn.microsoft.com/azure/defender-for-cloud/ai-onboarding>

---

## Step 1 · A Foundry app goes live

[calm] O Contoso Assist está aberto para chamadas, e o tráfego real está prestes a chegar. A engenheira de segurança Priya quer três respostas antes.
[600ms]
[curious] Quem pode chamá-lo, o que pode dar errado dentro de uma conversa e como vamos saber se alguém atacá-lo?
[600ms]
[confident] Esta lição cobre a parte de IA do S C 500. A Contoso, a Priya e o aplicativo são todos fictícios.

## Step 2 · Three layers around one app

[calm] A resposta são três camadas em volta de um único aplicativo. Um gateway fica na frente, os guardrails atuam por dentro e o Defender vigia ao redor.
[600ms]
[confident] Cada camada responde a uma pergunta, e cada uma é um recurso diferente do Azure, então você as configura em lugares diferentes.
[600ms]
[curious] O gateway é um recurso do API Management, os guardrails pertencem ao Microsoft Foundry, e o Defender for AI services é um plano do Defender for Cloud.

## Step 3 · AI gateway: one front door

[calm] Primeiro, o portão. O API Management pode ficar na frente dos seus modelos, agentes e ferramentas, então toda chamada de IA passa por um único lugar que você controla.
[600ms]
[confident] O gateway de IA é um conjunto de recursos do API Management, não um produto separado.
[600ms]
[curious] No Foundry, é um recurso em versão prévia que você ativa em Gerenciar. Consulte o Microsoft Learn para ver quais níveis têm suporte hoje.

## Step 4 · Gateway policies on every call

[calm] As políticas rodam em ordem a cada requisição. Primeiro, verificam quem está chamando; depois, limitam os tokens; e por fim registram o que aconteceu.
[600ms]
[confident] O gateway pode acessar o modelo com uma identidade gerenciada, então o app não precisa de nenhuma chave de API.
[600ms]
[reassuring] As métricas de token vão para o monitoramento, e os prompts e as respostas também podem ser registrados, para você acompanhar o uso e identificar abusos.

## Step 5 · Content filters and guardrails

[calm] Agora, a proteção. Um guardrail é um conjunto de controles com nome, dentro do Foundry. Cada controle escolhe um risco, onde verificá-lo e o que fazer quando houver correspondência.
[600ms]
[confident] Para ódio, conteúdo sexual, violência e automutilação, o nível de bloqueio define quais gravidades são bloqueadas. O nível Baixo bloqueia só a gravidade alta, e o nível Alto bloqueia as gravidades baixa, média e alta.
[600ms]
[serious] Classificadores podem errar, então teste com o seu próprio conteúdo.

## Step 6 · Agent guardrails: four checkpoints

[calm] Agentes precisam de mais do que uma verificação do prompt. Um guardrail pode inspecionar a entrada do usuário, a chamada da ferramenta, a resposta da ferramenta e a saída final.
[600ms]
[serious] Isso está em versão prévia. Os pontos de verificação de ferramentas só funcionam com ferramentas que têm suporte a moderação, então as outras ferramentas não são verificadas.
[600ms]
[confident] Os guardrails valem para agentes criados no Foundry Agent Service, então confirme o tipo do seu agente antes de contar com eles.

## Step 7 · Try it: guardrail on, prompt replayed

[curious] Agora experimente. Envie duas vezes o mesmo prompt arriscado: uma com o guardrail desligado e outra com ele ligado.
[600ms]
[impressed] Mude a chave e veja o que muda. Quando um controle dispara, o chat mostra qual risco foi detectado e em qual ponto de verificação.
[600ms]
[reassuring] Isto é uma simulação. No Foundry, você cria um guardrail, atribui e testa no playground, com um modelo ou agente que não seja de produção.

## Step 8 · Defender for AI services

[calm] Agora, o vigia. Ative um plano, e o Defender for Cloud observa prompts e respostas em busca de ataques e gera alertas.
[600ms]
[confident] Ele trabalha com o Prompt Shields e a inteligência de ameaças da Microsoft, e você o ativa nos planos do Defender com a função de Proprietário ou Colaborador.
[600ms]
[serious] Ele verifica só texto. E se a evidência de prompt suspeito estiver desativada, o conteúdo do prompt aparece mascarado no alerta.

## Step 9 · An AI alert, end to end

[serious] Aqui, uma tentativa de jailbreak é barrada e um alerta é gerado. A Priya abre o alerta e investiga com as evidências.
[600ms]
[curious] O nome, a gravidade e as táticas do alerta vêm dos alertas do Defender for Cloud para serviços de IA.
[600ms]
[concerned] Se aparecer uma variante detectada, o Prompt Shields identificou a tentativa, mas não a bloqueou. É o sinal para revisar a configuração do guardrail.

## Step 10 · Data and AI security dashboard

[calm] Uma única visão do Defender for Cloud reúne seus dados e recursos de IA, mostra o nível de proteção deles e indica o que corrigir primeiro.
[600ms]
[confident] Ela é ativada por assinatura e reflete os planos que você ligou, então o acesso completo exige vários deles, além da função Security explorer.
[600ms]
[reflective] Os números na tela são fictícios.

## Step 11 · Which control answers which risk?

[curious] Seis riscos, três camadas. Veja cada risco cair no controle que melhor responde a ele.
[600ms]
[confident] A identidade de quem chama e os limites de tokens ficam com o gateway. Prompts nocivos e chamadas de ferramentas arriscadas ficam com os guardrails. Ataques em tempo real e postura ficam com o Defender.
[600ms]
[reflective] Em projetos reais, as camadas se sobrepõem, então cada cartão mostra a opção mais adequada, não a única.

## Step 12 · Recap: gate it, guard it, watch it

[calm] Controle a entrada, proteja por dentro, vigie ao redor. O gateway cuida de chamadores e orçamentos, os guardrails cuidam de prompts e ferramentas, e o Defender cuida de alertas e postura.
[600ms]
[confident] Isso responde às três perguntas da Priya e corresponde à proteção de cargas de trabalho de IA nas habilidades do S C 500.
[600ms]
[proud] Leia o guia de estudo atual, porque a lista de habilidades muda com o tempo.
