# Narrator Script — Foundry · Tune the Model: Parameters, Reflection and Hybrid Flows

**Source animation:** [TuneAndReflect.html](../../../../journeys/AI/Foundry/TuneAndReflect.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/openai/how-to/reasoning>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/prompt-engineering>
- <https://learn.microsoft.com/azure/architecture/ai-ml/guide/ai-agent-design-patterns>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/model-router>

---

## Step 1 · Same prompt, different run: what a parameter changes

[curious] Um modelo escolhe cada próxima palavra entre várias opções prováveis. Por isso, o mesmo prompt pode dar resultados diferentes a cada execução.
[600ms]
[calm] Parâmetros são as configurações que moldam essa escolha. Os cinco nomes na parte de baixo são configurações reais, que você envia junto com a requisição.
[600ms]
[reassuring] Esses slogans da Contoso Outfitters são só ilustrações, porque a saída de um modelo real muda de uma execução para outra.

## Step 2 · Temperature and top_p: spread versus focus

[calm] A temperatura muda as chances de cada próxima palavra. Baixa deixa a resposta mais focada, alta deixa mais variada.
[600ms]
[curious] O Top P corta as palavras improváveis.
[600ms]
[serious] Mude só um dos dois, nunca os dois. As porcentagens são ilustrativas, calculadas a partir de pontuações fixas, e não medidas em um modelo real.

## Step 3 · Max tokens and stop sequences: length and cost

[calm] O máximo de tokens limita quanto o modelo pode escrever. Uma stop sequence diz onde ele deve parar.
[600ms]
[confident] Juntos, eles controlam o tamanho da resposta e o custo que vem com ele.
[600ms]
[concerned] Mas um limite pequeno demais corta a resposta. Aqui, cada bloquinho representa um token, embora os tokens reais costumem ser pedaços de palavras.

## Step 4 · Reasoning models: effort instead of temperature

[curious] A maioria dos modelos de raciocínio não aceita temperatura nem Top P. Em vez disso, você define o quanto eles pensam, com o esforço de raciocínio.
[600ms]
[serious] Esse raciocínio conta como tokens de saída. Nos modelos de raciocínio, o limite cobre tanto o raciocínio quanto a saída visível.
[600ms]
[calm] Os valores de esforço aceitos variam conforme o modelo, e essas barras são ilustrativas.

## Step 5 · Think step by step: when it helps, when it does not

[calm] Se você pedir a um modelo padrão que mostre os passos, fica mais fácil conferir a resposta.
[600ms]
[curious] Um modelo de raciocínio já pensa antes de responder, então dê a ele o objetivo, e não os passos.
[600ms]
[confident] Para ver o raciocínio de um modelo de raciocínio, use o parâmetro de resumo do raciocínio. Outras formas de extraí-lo não são compatíveis.

## Step 6 · Self-critique: draft, critique, revise

[curious] Um criador faz um rascunho, um verificador testa esse rascunho com critérios claros, e o criador revisa.
[600ms]
[confident] O ciclo termina quando o verificador aprova ou quando se atinge um limite. Também se chama ciclo de reflexão ou de crítica.
[600ms]
[serious] Ele exige critérios de aceitação claros, um limite de iterações e um plano B, como um revisor humano.

## Step 7 · Grade the reasoning: chain-of-thought evaluators

[curious] Um juiz L L M também pode avaliar os passos. Ele lê o raciocínio e devolve uma pontuação, um rótulo de aprovado ou reprovado e um motivo.
[600ms]
[calm] Você pode ler esse motivo e agir com base nele. Este cartão de resultado ilustra os campos que os avaliadores do Foundry devolvem.
[600ms]
[serious] O Task Adherence está em versão prévia. O juiz também é uma chamada de modelo, então cada verificação consome inferência.

## Step 8 · Try it: change one parameter, watch the answer

[excited] Agora é com você. Mude uma configuração de cada vez e veja o que muda: as palavras, o tamanho e onde a resposta termina.
[600ms]
[amused] Esta é uma demo roteirizada, e não um modelo ao vivo, então as respostas foram escritas antes.
[600ms]
[encouraging] Teste cada configuração sozinha e depois duas juntas.

## Step 9 · Hybrid flow: rules first, model for the gray area

[calm] Casos claros seguem regras fixas no código, que é rápido, barato e previsível.
[600ms]
[curious] Só a zona cinzenta vai para o modelo, e uma pessoa pode confirmar o resultado. Em cada etapa, você escolhe quem decide: o modelo, o código comum ou uma pessoa.
[600ms]
[confident] Se os passos são claros e seguem regras rígidas, o código comum é mais rápido, mais barato e mais confiável.

## Step 10 · Route by task: small first, big on escalation

[calm] Nem toda requisição precisa do maior modelo. Um roteador manda o trabalho fácil para um modelo pequeno e o difícil para um maior.
[600ms]
[curious] O model router escolhe um modelo para cada requisição, com base na complexidade, na necessidade de raciocínio e no tipo de tarefa.
[600ms]
[confident] A seta de escalonamento é a sua própria lógica de roteamento, e não uma configuração do produto. Use essa seta quando o modelo pequeno estiver em dúvida.

## Step 11 · Tuning at a glance

[calm] Três hábitos: ajustar as configurações, verificar a saída e combinar modelos e regras.
[600ms]
[reflective] É isso que essa parte do A I 103 pede de você. Cada ponto corresponde a um passo que você acabou de ver.
[600ms]
[proud] O texto dos objetivos vem do guia de estudo, então confira a versão atual.
