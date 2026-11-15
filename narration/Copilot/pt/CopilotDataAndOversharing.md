# Narrator Script — Microsoft 365 Copilot · Copilot, Data and Oversharing

**Source animation:** [CopilotDataAndOversharing.html](../../../journeys/Copilot/CopilotDataAndOversharing.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-365/copilot/microsoft-365-copilot-privacy>
- <https://learn.microsoft.com/microsoft-365/copilot/architecture-data-protection-auditing>
- <https://learn.microsoft.com/sharepoint/data-access-governance-reports>

---

## Step 1 · It answered. Should it have?

[calm] Alex, em Vendas, pergunta Copilot sobre as faixas salariais do próximo ano. Copilot responde, usando um arquivo do site de RH.
[600ms]
[concerned] Priya, o administrador, precisa saber como isso aconteceu.
[600ms]
[confident] Esta lição acompanha as habilidades de segurança de dados e compartilhamento excessivo do A B 900 de exame. Learn Now diz Microsoft Copilot para o que o exame chama de Copilot.

## Step 2 · Copilot sees what Alex sees

[calm] Copilot funciona com o acesso próprio do usuário logado. Arquivos Alex podem abrir podem aterrar suas respostas.
[600ms]
[curious] Arquivos que ele não consegue abrir ficam fora de alcance. Copilot apenas mostra dados organizacionais para os quais o usuário tem pelo menos permissão de visualização.
[600ms]
[reassuring] Ele usa os mesmos controles de acesso que outros serviços Microsoft 365 e não concede novos acessos.

## Step 3 · Follow one prompt through Microsoft Graph

[curious] Vamos seguir um prompt. Copilot envia para Microsoft Graph, que encontra conteúdo relevante Alex pode ver.
[600ms]
[calm] Esse aterramento vai para o modelo junto com o prompt.
[600ms]
[confident] Grounding significa ancorar uma resposta no próprio conteúdo de trabalho do usuário, como documentos, e-mails, calendário, chats e reuniões. Indexação semântica respeita o mesmo limite de acesso.

## Step 4 · Stays in the tenant, not used for training

[calm] Prompts, respostas e dados acessados por meio de Microsoft Graph não são usados para treinar os modelos de fundação.
[600ms]
[reassuring] Permissões impedem que o conteúdo vaze entre usuários, grupos e locatários.
[600ms]
[curious] Copilot histórico de atividades é armazenado junto com seu outro conteúdo Microsoft 365, e os administradores podem gerenciá-lo com Microsoft Purview.

## Step 5 · Layers that protect it

[calm] Copilot honra Microsoft 365 permissões primeiro. Essa é a fundação.
[600ms]
[curious] Microsoft Purview e Microsoft Defender então adicionam seus próprios controles por cima. Quais recursos você recebe depende da sua licença.
[600ms]
[serious] Conteúdo criptografado exige que o usuário detenha tanto o direito de uso VIEW quanto EXTRACT antes Copilot possa trabalhar com ele.

## Step 6 · Built on six responsible AI principles

[calm] Os princípios de IA responsável da Microsoft guiam o Copilot. São seis deles.
[600ms]
[curious] Essa lição reside em apenas uma: privacidade e segurança.
[600ms]
[reassuring] A B 900 pede que você entenda os princípios. O tour completo é na lição de Responsible AI da jornada Foundry.

## Step 7 · Why oversharing happens

[serious] Aqui está a ideia-chave. Copilot não amplia o acesso. Ele torna o acesso amplo visível.
[600ms]
[curious] Três hábitos deixam o conteúdo aberto para mais pessoas do que qualquer um pretendia. Permissões fluem de um site para suas bibliotecas, pastas e arquivos, a menos que alguém quebre a herança.
[600ms]
[concerned] E compartilhar links pode ser para qualquer pessoa, para pessoas da organização ou para pessoas específicas. Os links mais amplos são fáceis de esquecer.

## Step 8 · Four tools to find oversharing

[calm] Comece com relatórios e avaliações que mostrem onde o conteúdo é exposto.
[600ms]
[curious] Depois, use insights e o painel para decidir o que corrigir primeiro.
[600ms]
[confident] Os papéis importam aqui. A seção de Segurança do painel Copilot precisa que o Global Reader seja visualizado e que AI administrador mude. SharePoint relatórios precisam do papel de administrador SharePoint.

## Step 9 · Run a data access governance report

[calm] No centro de administração SharePoint, abra Relatórios e depois governança de acesso a dados.
[600ms]
[curious] Comece pelo relatório de permissões de site, para ver quais sites estão mais abertos.
[600ms]
[serious] Relatórios snapshot mostram o estado de hoje, enquanto os relatórios de atividade cobrem os últimos vinte e oito dias. Sem SharePoint Advanced Management, ative a coleta de dados primeiro.

## Step 10 · SharePoint Advanced Management

[calm] SharePoint Advanced Management, ou SAM, ajuda você a gerenciar a expansão do conteúdo, gerenciar o ciclo de vida do conteúdo e evitar compartilhamento excessivo.
[600ms]
[curious] Essas são as opções mencionadas no Learn.
[600ms]
[reassuring] As capacidades de SAM para implantação Copilot vêm com uma licença Copilot. Algumas funcionalidades, como a criação de sites restritas, precisam do add-on Plan One, então confira Learn para a lista atual.

## Step 11 · Restricted access control

[calm] Agora aqui está uma solução. Limite um site a um grupo Microsoft 365 ou a um grupo de segurança Microsoft Entra.
[600ms]
[impressed] Todos os outros são bloqueados, mesmo com permissão direta ou link compartilhado, e os arquivos saem da busca e Copilot por eles.
[600ms]
[confident] Sites de canal compartilhado e privado precisam de sua própria configuração.

## Step 12 · Try it: change the protection

[excited] Sua vez. Escolha uma solução para o arquivo de salário.
[600ms]
[curious] Veja se Alex consegue ler e se Copilot pode mostrar para ele.
[600ms]
[serious] A descoberta de conteúdo restrita é temporária. Ela não altera as permissões, e pessoas com acesso ainda podem abrir o arquivo. Use enquanto você corrige as permissões reais.

## Step 13 · See it, find it, fix it

[calm] Vamos recapitular. Você vê, encontra, e depois conserta.
[600ms]
[proud] Copilot respeita o acesso, então um bom acesso é a solução. Priya agora sabe como essa resposta aconteceu e como evitá-la.
[600ms]
[determined] Compare-se ao A B 900 habilidades medidas e ao treinamento oficial Microsoft Learn.
