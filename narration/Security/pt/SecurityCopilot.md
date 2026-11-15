# Narrator Script — Security · Microsoft Security Copilot: workspaces, roles, plugins and agents — Azure Security Journey

**Source animation:** [SecurityCopilot.html](../../../journeys/Security/SecurityCopilot.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/copilot/security/microsoft-security-copilot>
- <https://learn.microsoft.com/copilot/security/plugin-overview>
- <https://learn.microsoft.com/copilot/security/manual-onboarding>
- <https://learn.microsoft.com/copilot/security/authentication>

---

## Step 1 · Forty open incidents and one afternoon

[calm] A Priya é analista de segurança da Contoso, com quarenta incidentes abertos e uma tarde. Cada incidente está em um console diferente.
[600ms]
[concerned] Cada um precisa de um resumo, uma consulta e uma decisão antes de o dia acabar.
[600ms]
[determined] Esta lição acompanha uma analista e um administrador pelo Security Copilot e cobre as habilidades do S C 500. Todos aqui são fictícios.

## Step 2 · What Security Copilot is

[calm] O Microsoft Security Copilot é uma solução de segurança com IA generativa. Você pergunta em linguagem natural.
[600ms]
[curious] Ele ancora a pergunta nos seus próprios dados de segurança, usando plugins, e só então envia ao modelo de linguagem.
[600ms]
[confident] A resposta passa por plugins de novo e volta para você revisar e avaliar.

## Step 3 · Capacity and workspace

[calm] Capacidade é o poder de processamento que você provisiona, medido em Security Compute Units. O workspace é o espaço vinculado ao tenant onde usuários, automações e agentes trabalham.
[600ms]
[confident] Se o Security Copilot não está incluído na sua licença, você mesmo provisiona as unidades, usando uma assinatura do Azure e um grupo de recursos.
[600ms]
[reassuring] Clientes do Microsoft 365 E5 e E7 podem ter o serviço incluído e provisionado automaticamente.

## Step 4 · Configure a workspace

[calm] A configuração inicial guia o administrador por quatro escolhas: o nome do workspace, a capacidade, o compartilhamento de dados e a revisão das funções.
[600ms]
[serious] Duas pedem cuidado. O local onde os dados ficam armazenados não pode ser alterado depois que o workspace é criado.
[600ms]
[concerned] E o compartilhamento de dados com a Microsoft vem ativado por padrão para clientes sem E5 ou E7. Os proprietários do Copilot podem mudar isso a qualquer momento.

## Step 5 · Roles: owner and contributor

[calm] Duas funções do Security Copilot abrem a plataforma: proprietário e colaborador. Elas não são funções do Microsoft Entra.
[600ms]
[serious] Nenhuma das duas dá acesso a dados de segurança por si só. Isso continua vindo das suas funções do Entra, do Azure e dos serviços.
[600ms]
[confident] Atribua as funções nas configurações, de preferência a grupos de segurança. O Copilot mantém pelo menos dois proprietários, e algumas funções de administrador herdam o papel de proprietário automaticamente.

## Step 6 · Embedded or standalone

[curious] Use o Security Copilot no portal próprio ou dentro das ferramentas de segurança da Microsoft em que você já trabalha.
[600ms]
[confident] As experiências incorporadas aparecem em produtos como Defender XDR, Sentinel, Entra, Intune e Purview, muitas vezes em um painel lateral.
[600ms]
[reassuring] É o mesmo Security Copilot nos dois lugares, e cada produto lista as próprias exigências de função e de licença.

## Step 7 · Plugins: Microsoft, third-party, custom

[calm] Um plugin é um conjunto de ferramentas relacionadas, também chamadas de habilidades, que permite ao Copilot acessar dados ou executar ações. Há três tipos: da Microsoft, de terceiros e personalizados.
[600ms]
[confident] Os plugins da Microsoft usam autenticação em nome do usuário, então eles só alcançam o que você já pode acessar.
[600ms]
[serious] Os proprietários controlam os plugins personalizados. Teste um no nível do usuário antes de disponibilizá-lo para todo o workspace.

## Step 8 · Enable a plugin, change the answer

[curious] Com o plugin desligado, o Copilot só consegue falar em termos gerais.
[600ms]
[impressed] Ligue o plugin, e o mesmo prompt passa a se basear nos incidentes da própria Contoso. Mexa na chave e compare as duas respostas.
[600ms]
[reassuring] Um plugin com um botão de configurar é configurado por usuário, e as suas próprias funções ainda limitam os dados que ele pode retornar.

## Step 9 · Agents that work without being asked

[calm] Um agente cuida de uma tarefa repetida quando o gatilho dispara. Pode ser um agendamento, um evento ou uma execução manual.
[600ms]
[confident] Para configurar um agente, você escolhe o gatilho, a identidade e as permissões, além dos plugins e das funções de que ele precisa. Você define os limites e continua no controle.
[600ms]
[reflective] Os agentes consomem Security Compute Units como os outros recursos, e alguns ainda estão em versão prévia.

## Step 10 · The Security Store

[calm] Na Security Store, você encontra um agente, obtém o agente e pede para a pessoa certa aprovar as permissões dele antes de configurá-lo.
[600ms]
[confident] Os agentes da Microsoft vão para Agentes ativos. Os agentes de parceiros são comprados ou assinados na loja.
[600ms]
[curious] Quando um agente de parceiro precisa de dados da Microsoft, um Administrador Global aprova. As assinaturas ficam na loja, enquanto executar um agente consome capacidade.

## Step 11 · Try it: pick the right tool for six tasks

[curious] Seis tarefas, cinco partes do Security Copilot. Leia a tarefa e escolha a parte que a resolve.
[600ms]
[encouraging] Função, workspace, plugin, agente ou Security Store. Cada tarefa tem uma opção que se encaixa melhor.
[600ms]
[reassuring] Depois de cada escolha, você vê o motivo, então até um palpite errado ensina alguma coisa.

## Step 12 · Recap: workspace, role, plugin, agent

[calm] Quatro coisas para configurar, nesta ordem: o workspace, as funções, os plugins e depois os agentes. Cada uma responde a uma pergunta que um administrador recebe.
[600ms]
[confident] Essas são as habilidades de Implementar o Microsoft Security Copilot do guia de estudo do S C 500, incluindo os agentes da Security Store.
[600ms]
[proud] Os exames mudam, então leia o guia de estudo atual antes de confiar nesta lista.
