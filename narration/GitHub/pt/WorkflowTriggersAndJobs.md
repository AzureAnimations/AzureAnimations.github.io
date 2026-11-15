# Narrator Script — GitHub · Workflow Syntax: Triggers, Jobs, Matrices and Contexts

**Source animation:** [WorkflowTriggersAndJobs.html](../../../journeys/GitHub/WorkflowTriggersAndJobs.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-200>

---

## Step 1 · One workflow file

[calm] Um workflow é um arquivo YAML, guardado na pasta workflows, dentro da pasta dot github. O nome do arquivo precisa terminar em dot yml ou dot yaml.
[600ms]
[confident] Quatro chaves contam a história toda: name, on, jobs e steps.
[600ms]
[curious] A chave on inicia a execução, e os jobs fazem o trabalho. Se você deixa o name de fora, o GitHub mostra o caminho do arquivo na aba Actions.

## Step 2 · Triggers

[curious] A chave on diz o que inicia uma execução. Pode ser um evento de código, um evento de repositório, um agendamento ou uma chamada de fora do GitHub.
[600ms]
[confident] Filtros de branches, tags e caminhos restringem os gatilhos de push e de pull request. Um schedule usa a sintaxe cron e roda no branch padrão.
[600ms]
[calm] Basta um evento correspondente para iniciar uma execução. Um webhook de repository dispatch carrega um tipo de evento.

## Step 3 · Run it by hand

[confident] O gatilho workflow dispatch adiciona um botão Run workflow.
[600ms]
[curious] Cada input tem um tipo, um valor padrão opcional e um flag de obrigatório. Os tipos são boolean, choice, number, environment e string. Os jobs leem esses valores do contexto inputs.
[600ms]
[reflective] O botão só aparece quando o arquivo do workflow está no branch padrão.

## Step 4 · Jobs and needs

[calm] Por padrão, os jobs rodam em paralelo.
[600ms]
[confident] Adicione needs, e um job espera os jobs de que depende terminarem com sucesso.
[600ms]
[serious] Se um job falha ou é pulado, todo job que depende dele também é pulado, a menos que use uma condição como always.

## Step 5 · Conditional logic

[calm] A chave if decide se um passo ou um job roda. Sem uma função de status, o GitHub acrescenta success para você.
[600ms]
[confident] A função failure roda um passo depois de uma falha, e a função always roda o passo aconteça o que acontecer antes.
[600ms]
[serious] Evite always em trabalho que pode falhar feio, como baixar o código-fonte. A documentação recomenda not cancelled, para rodar um passo tenham os passos anteriores passado ou não.

## Step 6 · Variables and commands

[confident] A chave env define variáveis para o workflow inteiro, para um job ou para um passo. A mais específica prevalece.
[600ms]
[curious] Os comandos de workflow deixam um passo falar com o runner pelo log. Notice, warning e error criam anotações.
[600ms]
[calm] Escreva um nome e um valor no arquivo de ambiente do GitHub, e ele vira uma variável para os passos seguintes, não para o passo que o escreveu.

## Step 7 · Service containers

[curious] Um bloco services inicia um contêiner, como um banco de dados, ao lado do seu job.
[600ms]
[confident] Mapeie a porta dele e acesse por localhost. Adicione opções de health check, para o job esperar até o serviço ficar pronto.
[600ms]
[reassuring] O GitHub cria um contêiner novo para cada job e o destrói quando o job termina. Contêineres de serviço precisam de um runner Linux.

## Step 8 · A matrix

[curious] Uma matriz transforma uma definição de job em vários.
[600ms]
[confident] Aqui são dois sistemas operacionais e três versões do Node. Isso dá seis jobs, um para cada combinação.
[600ms]
[impressed] Cada job lê os próprios valores do contexto matrix.

## Step 9 · Shape the matrix

[calm] O exclude remove uma combinação da matriz, e o include adiciona uma.
[600ms]
[confident] Fail-fast e max-parallel controlam como os jobs rodam. O fail-fast vem como true por padrão.
[600ms]
[reflective] Fixe a versão do runner se quiser estabilidade. O rótulo latest significa a imagem estável mais recente, então o que há por trás dele pode mudar com o tempo.

## Step 10 · Contexts

[curious] Contextos são objetos que guardam dados sobre a execução.
[600ms]
[confident] Leia-os em expressões para obter o branch, o runner, as suas variáveis e os resultados de jobs e passos anteriores.
[600ms]
[serious] Onde um contexto funciona depende da chave. Um if no nível do job pode ler github, needs, vars e inputs, mas não secrets.

## Step 11 · Expressions

[calm] O GitHub avalia primeiro o cifrão e as chaves duplas e troca pelo texto.
[600ms]
[confident] Isso acontece antes de o shell no runner ver a linha. Um simples cifrão com nome é expandido depois, pelo shell.
[600ms]
[serious] Mantenha os segredos fora dos logs. Nunca os imprima e mascare os valores gerados.

## Step 12 · Anchors and editor help

[calm] Uma âncora dá nome a um bloco de YAML, e um alias o repete em outro lugar. Isso reduz a repetição dentro de um único arquivo de workflow.
[600ms]
[curious] A extensão GitHub Actions para o VS Code oferece realce, validação e autocompletar enquanto você digita.
[600ms]
[determined] Ela funciona melhor com um clone local do repositório. Agora vá construir o seu próprio workflow.
