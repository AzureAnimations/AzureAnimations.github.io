# Narrator Script — GitHub · Codespaces & Dev Containers

**Source animation:** [CodespacesAndDevContainers.html](../../../journeys/GitHub/CodespacesAndDevContainers.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/paths/github-foundations/>
- <https://learn.microsoft.com/training/paths/github-foundations-2/>

---

## Step 1 · Day One, the Old Way

[calm] Priya acabou de entrar para a equipe de Contoso meteorologia.
[600ms]
[concerned] Antes de escrever uma linha de código, ela precisa transformar um laptop em branco em uma cópia das máquinas dos companheiros de equipe. Isso pode consumir um dia inteiro.
[600ms]
[serious] E o risco é real: todo setup feito à mão se afasta um pouco do próximo.

## Step 2 · What Is a Codespace?

[curious] Um espaço de código é um ambiente de desenvolvimento hospedado na nuvem.
[600ms]
[confident] Abra um a partir de um template, um branch, um pull request ou um commit, então conecte-se com seu navegador, VS Code ou o GitHub CLI.
[600ms]
[calm] Por baixo do capô, é um contêiner Docker em uma máquina virtual que GitHub hospeda. Ele sempre roda Linux, o que seu próprio computador roda.

## Step 3 · Open One With a Click

[calm] Na página do repositório, escolha Código, depois a aba Codespaces, e então crie um espaço de código no seu branch.
[600ms]
[curious] Escolha Novo com opções se quiser escolher o branch, o contêinere de desenvolvimento ou o tipo de máquina.
[600ms]
[reassuring] Uma nota no diálogo diz quem paga. Contas pessoais recebem uma cota mensal gratuita, e uma organização pode escolher pagar por seus membros.

## Step 4 · What Happens When You Press Create

[curious] Quando você aperta Criar, GitHub monta seu ambiente em quatro movimentos.
[600ms]
[confident] Ela inicia uma máquina virtual, constrói o contêiner, conecta você e então termina a configuração. Você fica conectado após o terceiro movimento.
[600ms]
[reassuring] Pode levar alguns minutos, mas administradores de repositórios podem ativar pré-compilações para acelerar a espera.

## Step 5 · Same Environment for Everyone

[calm] Um contêiner de desenvolvimento é um contêiner Docker configurado para desenvolvimento.
[600ms]
[confident] Faça commit da descrição no repositório, e todo codespace, o da Priya, o do Sam e o da Ana, é construído a partir da mesma receita.
[600ms]
[reassuring] Essa receita é um arquivo chamado devcontainer dot json. Sem arquivo, os espaços de código começam a partir de uma imagem padrão que possui muitas linguagens e ferramentas comuns.

## Step 6 · Inside devcontainer.json

[curious] Um pequeno arquivo responde à pergunta: o que eu instalo, para toda a equipe.
[600ms]
[confident] Cada propriedade lida com uma parte da configuração: a imagem, características, extensões, portas e comandos.
[600ms]
[reflective] Mantenha isso no que todos precisam. Gosto pessoal, como temas e aliases, pertence aos arquivos de pontos. Para aplicar uma alteração, faça commit e reconstrua o container.

## Step 7 · An Open Spec: One File, Many Tools

[curious] O arquivo segue um padrão aberto, a especificação de Contêineres de Desenvolvimento em contêineres dot io.
[600ms]
[impressed] Isso significa que o mesmo arquivo também pode configurar um ambiente na sua própria máquina.
[600ms]
[calm] No VS Code, a extensão Dev Containers abre uma pasta dentro de um contêiner construído a partir dela. Codespaces faz a mesma coisa na nuvem.

## Step 8 · Stop, Resume, Delete — and the Meter

[calm] Um codespace para quando está ocioso, mantém suas alterações salvas enquanto está parado e desaparece quando é deletado.
[600ms]
[confident] Compute é cobrado apenas enquanto está em execução, e o armazenamento é cobrado enquanto existe. Por padrão, para após trinta minutos de ociosidade.
[600ms]
[serious] Um espaço de código parado é deletado após trinta dias, e uma sessão para após doze horas. Você pode alterar os padrões padrão.

## Step 9 · github.dev: Press the Period Key

[curious] Aqui está um atalho. Em qualquer repositório ou pull request, pressione a tecla de período.
[600ms]
[impressed] O VS Code for the Web abre no seu navegador no github dot dev, instantaneamente, sem nada para construir.
[600ms]
[serious] Você pode navegar, editar e fazer commit de arquivos, mas não há terminal nem como rodar ou depurar código. Faça commit com frequência, já que as edições ficam no navegador até lá.

## Step 10 · Which Editor Should I Open?

[curious] Então, qual editor você deve abrir? Comece pelo trabalho à sua frente.
[600ms]
[confident] Uma edição rápida é um trabalho para o github dot dev. Precisa rodar ou depurar? Você precisa de computação, então abra um codespace ou use sua própria máquina.
[600ms]
[reassuring] E se você quiser a mesma configuração para todos, descreva isso em um contêiner de desenvolvimento.

## Step 11 · All in One: Open It, Start Coding

[calm] Voltando ao primeiro dia de Priya. Ela abre um espaço de código, e seu ambiente já está esperando.
[600ms]
[confident] Agora você pode explicar codespaces e contêineres de desenvolvimento, e dizer quando o github dot dev for suficiente.
[600ms]
[proud] Esse é o conjunto de habilidades G H 900 para esse tema. Os caminhos de aprendizado GitHub Foundations são o próximo passo.
