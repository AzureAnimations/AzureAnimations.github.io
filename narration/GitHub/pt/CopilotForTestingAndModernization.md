# Narrator Script — GitHub · Copilot for Tests, Refactoring and Legacy Code

**Source animation:** [CopilotForTestingAndModernization.html](../../../journeys/GitHub/CopilotForTestingAndModernization.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>
- <https://learn.microsoft.com/sql/tools/visual-studio-code-extensions/github-copilot/test-and-mocking-data-generator>

---

## Step 1 · A Function Nobody Dares Touch

[calm] Na Contoso, a Maya herda uma função de precificação com nomes enigmáticos, sem testes e sem documentação.
[600ms]
[concerned] Mudar até uma única linha poderia quebrar o checkout, e nada avisaria a ela.
[600ms]
[curious] Isso é código legado. Pouca documentação e cobertura de testes fraca são justamente o motivo de as pessoas terem medo de mexer nele. Vamos ver como o Copilot ajuda.

## Step 2 · Understand It First

[calm] Antes de mudar qualquer coisa, a Maya seleciona o código e pede ao Copilot Chat que o explique.
[600ms]
[confident] No Visual Studio Code, o comando slash explain faz isso no editor ativo. Ela também pode contar ao Copilot qual é a experiência dela, como desenvolvedora Python 3, para a resposta combinar com ela.
[600ms]
[serious] Depois, ela confere cada ponto no código. A explicação é uma pista, não um fato.

## Step 3 · Generate Unit Tests

[confident] Com o arquivo aberto, o comando slash tests gera um rascunho de testes unitários para o código selecionado.
[600ms]
[calm] Deixar um arquivo de testes existente aberto ao lado do código ajuda o Copilot a seguir o seu framework de testes.
[600ms]
[serious] Os testes podem não cobrir todos os cenários. Então a Maya os executa, lê um por um e acrescenta o que falta.

## Step 4 · Edge Cases

[curious] Agora ela pergunta o que está faltando. Valores vazios, nulos, zero e entradas nos limites.
[600ms]
[confident] O Copilot sugere os casos. O código legado esconde suposições, então ela também pergunta o que o código assume e anota a resposta.
[600ms]
[reassuring] Quando o comportamento não está claro, é a equipe que decide qual deve ser a regra. O Copilot não decide isso.

## Step 5 · Assertions

[calm] Uma asserção fraca passa mesmo quando a resposta está errada.
[600ms]
[serious] Um teste que não pode falhar não prova nada. Por isso, leia as asserções que o Copilot escreve, e não só os nomes dos testes.
[600ms]
[confident] Peça a ele que confira valores exatos e exceções. Assim, um erro de verdade deixa o teste vermelho.

## Step 6 · Integration Tests

[calm] Um teste de integração chama duas partes juntas, aqui o checkout e o apply promo.
[600ms]
[curious] Um mock faz o papel do notificador, então o teste não precisa de conexão real. Ele verifica se o notificador foi chamado uma vez, ou se não foi chamado.
[600ms]
[confident] Diga o que fazer mock e o que verificar. Acrescente um segundo teste para entrada inválida e divida pedidos grandes em partes pequenas.

## Step 7 · Refactor Safely

[calm] Agora a Maya refatora com os testes rodando. Troque a versão abaixo para comparar.
[600ms]
[impressed] O código mais simples mantém os mesmos cinco testes verdes. Um deslize deixa dois deles vermelhos antes de ir para produção.
[600ms]
[reassuring] Os testes permitem mudar como o código funciona sem mudar o que ele faz. Execute-os depois de cada alteração.

## Step 8 · Document It

[calm] A Maya seleciona a função e pede ao Copilot uma docstring e, depois, uma seção de README para o código.
[600ms]
[serious] Depois, ela corrige tudo o que não estiver preciso em relação ao código.
[600ms]
[optimistic] Uma boa documentação ajuda quem vem depois, e comentários e documentação também ajudam o Copilot a dar sugestões melhores.

## Step 9 · Sample Data

[curious] Precisa de dados de teste? Descreva a tabela, ou cole um exemplo em JSON, e peça linhas de exemplo.
[600ms]
[confident] Você pode pedir um número de linhas e incluir casos de borda. O resultado são linhas fictícias para popular um banco de dados de teste.
[600ms]
[serious] Use sempre valores fictícios e nunca cole no prompt dados reais de clientes.

## Step 10 · Modernize

[calm] A Maya pede ao Copilot que reescreva um padrão antigo em um padrão atual, como código Python dois para Python três, com os testes por perto.
[600ms]
[confident] As mudanças típicas são imports, instruções print e métodos removidos.
[600ms]
[serious] Não é uma varinha mágica. Espere ter que ajustar por causa do contexto e de bibliotecas desatualizadas, e deixe os testes mostrarem o que realmente mudou.

## Step 11 · Security and Performance

[calm] A Maya pede ao Copilot os riscos de segurança e uma versão mais rápida.
[600ms]
[concerned] O Copilot Chat pode ajudar a identificar problemas comuns, como SQL injection, mas você não deve depender dele para uma análise de segurança completa. As respostas não são determinísticas, então as suas podem ser diferentes.
[600ms]
[determined] Por isso, verifique. Execute os testes, rode o code scanning e meça a velocidade.

## Step 12 · Recap: Review Every Change

[calm] O Copilot explica, faz rascunhos e acelera o trabalho. Você revisa cada mudança, e os testes são a prova.
[600ms]
[confident] Entenda o código primeiro. Enquanto você trabalha, o Copilot faz os rascunhos e você roda os testes. Depois, faça o merge só do que os testes e uma pessoa aprovarem.
[600ms]
[proud] Para o exame G H 300, isso cobre testes, casos de borda, dados de exemplo, refatoração, documentação, modernização de código legado e sugestões de segurança e desempenho.
