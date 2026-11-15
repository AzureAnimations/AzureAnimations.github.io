# Narrator Script — GitHub · Build and Publish a Custom Action

**Source animation:** [BuildCustomActions.html](../../../journeys/GitHub/BuildCustomActions.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · Why package an action

[calm] A Contoso colou o mesmo script de verificação em três repositórios. Agora, cada correção precisa ser colada três vezes.
[600ms]
[concerned] Scripts copiados vão se afastando uns dos outros, e ninguém sabe qual versão está certa.
[600ms]
[confident] Uma action empacota o script uma vez, e cada workflow só a chama com uma linha uses.

## Step 2 · Three types of action

[curious] Você pode criar três tipos de action: uma action JavaScript, uma action de contêiner Docker ou uma action composite.
[600ms]
[confident] Elas diferem na forma de executar. A JavaScript roda direto no runner, a Docker roda em um contêiner, e a composite combina etapas e outras actions.
[600ms]
[serious] As actions de contêiner Docker só rodam em runners Linux, e um runner Linux auto-hospedado precisa ter o Docker instalado.

## Step 3 · The action.yml file

[calm] Toda action precisa de um arquivo de metadados, chamado action dot yml ou action dot yaml.
[600ms]
[confident] Três itens são obrigatórios: um nome, uma descrição e como a action é executada. Entradas, saídas, autor e branding são opcionais.
[600ms]
[serious] Atenção: marcar uma entrada como obrigatória não interrompe a execução por si só, então o seu código precisa verificar isso.

## Step 4 · A JavaScript action

[calm] Escreva o código em Node com o toolkit do Actions e depois empacote tudo, junto com as dependências, na pasta dist.
[600ms]
[confident] O runner baixa a action e executa esse único arquivo, que já é um pacote completo.
[600ms]
[serious] Por isso, as dependências precisam ir junto. Faça commit do arquivo empacotado e não faça commit da pasta node modules.

## Step 5 · A Docker container action

[calm] Um Dockerfile empacota o seu código junto com o ambiente dele: o sistema operacional, as ferramentas e as versões.
[600ms]
[curious] O runner compila ou baixa a imagem e depois a inicia com o seu entrypoint e os seus argumentos.
[600ms]
[serious] Ela só roda em runners Linux e é mais lenta que a JavaScript. Não use a instrução USER e deixe o script do entrypoint executável.

## Step 6 · A composite action

[calm] Uma action composite reúne várias etapas em uma só etapa reutilizável, incluindo comandos de shell e outras actions.
[600ms]
[serious] Toda etapa run precisa indicar qual shell usa.
[600ms]
[intrigued] E, dentro de uma action composite, leia as entradas pelo contexto inputs, e não por variáveis de ambiente.

## Step 7 · Workflow commands in an action

[curious] Uma action conversa com o runner por meio de workflow commands. Ela pode gravar uma saída, mascarar um valor ou adicionar uma anotação.
[600ms]
[confident] O toolkit já encapsula cada um deles para você. As saídas vão para o arquivo que o runner indica, e as anotações vêm como notice, warning ou error.
[600ms]
[serious] Registre a máscara antes de imprimir o valor, nunca depois.

## Step 8 · Pick a type

[calm] Escolha pelo que mais importa: velocidade, plataforma e dependências.
[600ms]
[confident] A JavaScript é mais rápida que a Docker, e uma action JavaScript pura funciona em todos os runners hospedados no GitHub.
[600ms]
[curious] A Docker só roda em Linux, mas traz as próprias dependências.

## Step 9 · Troubleshoot an action that fails

[calm] Quando uma action falhar, leia primeiro o log, começando pela etapa que falhou.
[600ms]
[confident] Depois, execute de novo com o log de depuração ativado para ver mais detalhes.
[600ms]
[intrigued] Por fim, relacione o que você viu a uma causa comum: permissões, o shell, as dependências ou o sistema operacional do runner. O texto do log aqui é só um exemplo.

## Step 10 · Distribute your action

[curious] Agora escolha quem pode usá-la. Um repositório público alcança todo mundo, e essa é a opção mais ampla.
[600ms]
[confident] Um repositório privado ou interno fica dentro da sua organização ou do seu enterprise, e o Marketplace facilita a descoberta.
[600ms]
[concerned] Um cuidado: colaboradores externos de um repositório que usa uma action privada compartilhada conseguem ler os logs de execução dela.

## Step 11 · Publish to the Marketplace

[calm] Para publicar, cumpra os requisitos: um repositório público, um arquivo da action na raiz e um nome único.
[600ms]
[confident] Adicione branding e uma categoria ao arquivo da action, depois prepare uma release e marque a opção de publicar a Action no GitHub Marketplace.
[600ms]
[impressed] Para publicar, é preciso ter a autenticação em dois fatores, e uma action que cumpre os requisitos entra no ar na hora, sem revisão.

## Step 12 · Release strategy

[calm] Marque cada release com uma versão semântica e mantenha uma tag major móvel, como a v um.
[600ms]
[confident] Quem usa escolhe a v um para receber as correções automaticamente, ou uma tag exata ou um SHA de commit quando quer estabilidade.
[600ms]
[proud] Uma nova tag major, como a v dois, serve para mudanças que quebram workflows existentes, e uma release imutável trava a tag dela para sempre.
