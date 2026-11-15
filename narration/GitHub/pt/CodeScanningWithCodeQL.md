# Narrator Script — GitHub · Code Security: Code Scanning with CodeQL

**Source animation:** [CodeScanningWithCodeQL.html](../../../journeys/GitHub/CodeScanningWithCodeQL.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · Tests prove it works; scanning asks if it is safe

[calm] Todos os testes do Ravi estão verdes. Tudo funciona como ele esperava.
[600ms]
[concerned] Mesmo assim, uma linha de código ainda pode ser atacada, e nenhum teste foi escrito para procurar isso.
[600ms]
[confident] O code scanning lê o próprio código, procura padrões inseguros e mostra os alertas direto na linha.

## Step 2 · How CodeQL works: build a database, then query it

[curious] O CodeQL trata o código como dados. Primeiro, ele cria um banco de dados a partir do seu código, um para cada linguagem.
[600ms]
[confident] Depois, ele executa consultas nesse banco de dados. Cada consulta procura um tipo de padrão inseguro.
[600ms]
[calm] Os resultados aparecem como alertas do code scanning no seu repositório.

## Step 3 · Default setup: one click, languages detected

[calm] O jeito mais fácil de começar é a configuração padrão. O GitHub escolhe por você as linguagens, o conjunto de consultas e os gatilhos.
[600ms]
[confident] Você confere o resumo e depois ativa.
[600ms]
[reassuring] Ela exige o GitHub Actions ativado, e o repositório precisa ser público ou ter o Code Security.

## Step 4 · Advanced setup: workflow, triggers and a matrix

[confident] A configuração avançada adiciona um arquivo de workflow ao seu repositório, e a partir daí ele é seu.
[600ms]
[curious] Edite os gatilhos, como push, pull request ou uma agenda. Edite também a matriz de linguagens.
[600ms]
[impressed] A matriz executa um job para cada linguagem, e todos rodam em paralelo.

## Step 5 · Compiled languages and build modes

[curious] As linguagens compiladas podem precisar de uma build antes de o CodeQL conseguir criar o banco de dados delas.
[600ms]
[calm] Para cada linguagem da matriz, você escolhe um modo de build. None quer dizer nenhuma build. Autobuild quer dizer que o CodeQL faz a build por você.
[600ms]
[confident] Manual quer dizer que você mesmo escreve os comandos de build. A documentação lista quais linguagens aceitam cada modo.

## Step 6 · Third-party scanners and SARIF upload

[curious] Já usa outro scanner? Peça para ele gerar um arquivo SARIF, que é um formato JSON para resultados.
[600ms]
[confident] Faça o upload desse arquivo com uma action, pela API ou pela linha de comando do CodeQL.
[600ms]
[impressed] Os achados dele passam a aparecer como alertas do code scanning, bem ao lado dos do CodeQL.

## Step 7 · Reading an alert: severity, rule and data-flow path

[calm] Cada alerta mostra a regra que disparou e a gravidade. Um alerta de segurança também mostra um nível, de crítico a baixo.
[600ms]
[confident] Em um alerta de fluxo de dados, escolha Show paths. Ele percorre os dados da origem até o destino.
[600ms]
[encouraging] Clique em cada etapa do caminho e veja exatamente onde uma entrada não confiável se torna perigosa.

## Step 8 · Fixing with Copilot Autofix, then re-scan

[curious] O Copilot Autofix pode sugerir uma mudança no código para o alerta que você está vendo.
[600ms]
[confident] Você revisa a sugestão, abre um pull request com a correção, e o code scanning verifica de novo.
[600ms]
[reflective] Ele faz o melhor possível, mas não consegue corrigir todos os alertas em todas as situações. Leia sempre a mudança antes de fazer o merge.

## Step 9 · Dismiss an alert: reasons and the audit trail

[calm] Alguns alertas você não vai corrigir. Talvez o código só seja usado em testes, ou o risco seja aceitável.
[600ms]
[confident] Descarte o alerta e escolha um motivo. Você também pode adicionar um comentário.
[600ms]
[reassuring] Os dois ficam na linha do tempo do alerta, então existe um registro de quem decidiu o quê e por quê.

## Step 10 · Query suites: from default to security-and-quality

[curious] Uma query suite é um conjunto de consultas com nome. Ela permite escolher o quanto você quer procurar.
[600ms]
[confident] A padrão é de alta precisão. A security-extended adiciona consultas de menor precisão, e você encontra mais coisas.
[600ms]
[calm] A security-and-quality vai além e adiciona também consultas de qualidade de código.

## Step 11 · Custom queries and configuration files

[confident] Um arquivo de configuração permite adicionar suas próprias consultas e packs. Ele também pode excluir consultas e ignorar pastas inteiras.
[600ms]
[calm] O workflow aponta para esse arquivo com uma única configuração.
[600ms]
[serious] Um detalhe: as consultas definidas no workflow substituem as do arquivo, a menos que você coloque um sinal de mais na frente delas para combinar.

## Step 12 · When a scan fails or is slow: where to look

[calm] Quando uma varredura falhar, comece pela etapa que falhou, pelo modo de build e pelos logs.
[600ms]
[confident] Se a build falhar, tente o modo manual. Se os logs estiverem muito escassos, ative o log de depuração.
[600ms]
[determined] Se a varredura estiver lenta demais, reduza o escopo, divida por linguagem ou use um runner maior. O que você pode mudar depende de usar a configuração padrão ou a avançada.
