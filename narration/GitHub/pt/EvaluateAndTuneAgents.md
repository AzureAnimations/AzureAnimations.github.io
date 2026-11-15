# Narrator Script — GitHub · Evaluate and Tune a GitHub Agent

**Source animation:** [EvaluateAndTuneAgents.html](../../../journeys/GitHub/EvaluateAndTuneAgents.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>

---

## Step 1 · It Merged, Then It Broke

[calm] A equipe da loja online da Contoso atribuiu uma issue ao Copilot. O pull request 231 passou na revisão e foi mesclado.
[600ms]
[concerned] Na segunda-feira, o build da main falha. Um merge verde não significa trabalho bom.
[600ms]
[curious] A revisão é o momento de avaliar com evidências, não uma mera formalidade. Então, como avaliar o trabalho de um agente?

## Step 2 · Define Success First

[calm] Antes de o agente começar, escreva na issue o resultado esperado e as restrições.
[600ms]
[confident] Pense na issue como o prompt. Inclua critérios de aceitação que digam como é uma boa solução e indique quais arquivos precisam mudar.
[600ms]
[encouraging] Assim você ganha uma régua para avaliar o trabalho.

## Step 3 · Qualitative and Quantitative Signals

[curious] Os números dizem o que aconteceu. O julgamento diz se está certo. Use os dois.
[600ms]
[confident] Os sinais quantitativos são medidos: resultados de testes, tempos, número de varreduras e tamanho da mudança. Os qualitativos são avaliados por você, como os comentários de revisão sobre abordagem, nomes e intenção.
[600ms]
[reflective] Leia cada um à luz do que a issue pedia. Os números aqui são inventados para a história.

## Step 4 · Automated Scans as Signals

[calm] O Copilot cloud agent verifica o próprio código com CodeQL, uma checagem de dependências e secret scanning.
[600ms]
[confident] O CodeQL procura problemas de segurança no código. As dependências são comparadas com o GitHub Advisory Database. O secret scanning procura chaves, tokens e outras informações sensíveis.
[600ms]
[serious] Leia os resultados como sinais, não como veredito. Eles não dizem se a mudança fez o que a issue pedia.

## Step 5 · Read the Evidence

[curious] Comece pelo sintoma e vá em direção à causa.
[600ms]
[confident] Olhe primeiro as execuções de workflow e o diff, depois o plano e, por fim, o log da sessão. Toda mensagem de commit do Copilot tem um link para esse log.
[600ms]
[serious] Por padrão, os workflows não rodam em um push do Copilot até que alguém com acesso de gravação aprove. Por isso, inspecione as mudanças antes.

## Step 6 · Classify the Root Cause

[calm] Classifique cada falha pelo ponto em que o primeiro passo errado aconteceu. Escolha uma classe para ver as pistas.
[600ms]
[confident] Erro de raciocínio quer dizer que o agente resolveu o problema errado. Mau uso de ferramenta é comando errado ou acesso demais. Contexto ou ambiente é configuração faltando, requisição bloqueada ou contexto desatualizado.
[600ms]
[determined] Corrija a classe que você realmente encontrou. Mudar tudo de uma vez esconde o que funcionou.

## Step 7 · Walk Through One Failure

[curious] Aqui, o log da sessão mostra uma chamada de ferramenta errada.
[600ms]
[concerned] O agente rodou npm install em um repositório que usa pnpm e editou uma pasta gerada. O sintoma é um segundo arquivo de lock que quebrou o build.
[600ms]
[confident] A causa é uma regra que faltava: as instruções nunca diziam qual gerenciador de pacotes usar. Corrija a causa.

## Step 8 · Tune the Instructions

[calm] Coloque as regras que faltam onde o agente lê: o arquivo de instruções personalizadas do repositório.
[600ms]
[confident] Inclua como instalar, testar e compilar, e quais pastas são geradas. Arquivos de instruções por caminho e o arquivo de instruções do agente também funcionam.
[600ms]
[encouraging] Se o Copilot consegue compilar e testar no próprio ambiente, é mais provável que ele gere um pull request que seja mesclado rápido.

## Step 9 · Tune the Tools and Access

[calm] Dê ao agente só as ferramentas de que a tarefa precisa.
[600ms]
[confident] Remova uma ferramenta que a tarefa nunca usa e restrinja outra a uma única operação, em vez de um servidor inteiro. Em um perfil de agente personalizado, se você deixar as ferramentas de fora, todas ficam habilitadas.
[600ms]
[reassuring] O princípio é o menor acesso possível que ainda faça o trabalho.

## Step 10 · Tune the Memory

[calm] A memória tem que ajudar, não confundir.
[600ms]
[confident] Revise o que o Copilot guardou sobre o repositório, junto com as citações, e apague o que estiver desatualizado. Quem tem acesso de gravação faz isso nas configurações do repositório.
[600ms]
[reflective] O Copilot confere as citações com o branch atual, mas isso é uma avaliação dele. Para o que precisa valer sempre, use instruções personalizadas.

## Step 11 · Re-run and Compare

[curious] Rode a mesma tarefa de novo com a configuração ajustada e dê nota às duas execuções com a mesma régua.
[600ms]
[impressed] A primeira execução passou em três de seis verificações. A segunda passou em todas as seis, depois de mudar instruções, ferramentas e memória.
[600ms]
[serious] Uma execução melhor é um sinal, não uma prova. Quando der, mude uma alavanca por vez e teste algumas tarefas parecidas antes de confiar.

## Step 12 · Recap: Evaluate, Diagnose, Tune

[calm] Avalie o trabalho com uma régua: resultado, restrições, sinais e varreduras.
[600ms]
[confident] Diagnostique a causa pelos logs, planos, diffs e execuções de workflow, e dê nome a uma classe. Ajuste uma alavanca: instruções, ferramentas e acesso, ou memória.
[600ms]
[proud] Depois, rode de novo. Isso cobre a área G H 600 de avaliação, análise de erros e ajuste.
