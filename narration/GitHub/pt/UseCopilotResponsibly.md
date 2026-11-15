# Narrator Script — GitHub · Use Copilot Responsibly: Risks, Validation and Safe Habits

**Source animation:** [UseCopilotResponsibly.html](../../../journeys/GitHub/UseCopilotResponsibly.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>
- <https://learn.microsoft.com/ai/playbook/technology-guidance/overreliance-on-ai/overreliance-on-ai>

---

## Step 1 · It Compiled, So It Shipped

[calm] Maya aceita uma sugestão do Copilot para um alerta de calor. O build está verde e os testes passam.
[600ms]
[concerned] Mas a especificação diz para alertar a partir de trinta e cinco graus, e a sugestão verifica só maior que. Um valor está errado, e ninguém olhou.
[600ms]
[serious] O Copilot pode escrever um código que parece válido, mas não está correto. Os checks verdes mostram que o código rodou, não que está certo.

## Step 2 · How a Model Goes Wrong

[calm] Um modelo prevê o código mais provável. É assim que ele funciona, e é assim também que ele erra.
[600ms]
[concerned] Ele pode inventar um método que não existe, repetir um padrão antigo que já está desatualizado ou soar totalmente seguro mesmo estando errado.
[600ms]
[serious] Isso é uma alucinação: uma saída que parece plausível, mas é incorreta ou inventada. É um dos principais motivos para revisar tudo.

## Step 3 · Bias in Suggestions

[curious] O código de treinamento reflete as pessoas e os hábitos de quem o escreveu, então uma sugestão pode assumir, sem avisar, um único tipo de usuário.
[600ms]
[confident] Diga no próprio prompt quem precisa ser atendido. Depois, teste com nomes e entradas variados.
[600ms]
[reflective] E revise quem o código deixa de fora. O Copilot pode repetir vieses e erros dos dados de treinamento.

## Step 4 · Insecure Code

[calm] Uma sugestão pode funcionar e mesmo assim ser insegura. Aqui, a entrada do usuário é colada direto em uma consulta ao banco de dados.
[600ms]
[serious] Isso é SQL injection. A correção é uma consulta parametrizada, que trata a entrada como dado e nunca como parte do comando.
[600ms]
[confident] Você pega isso com revisão, testes e code scanning, principalmente em trabalho sensível à segurança.

## Step 5 · Licence and Public Code

[calm] O Copilot escreve código novo, mas de vez em quando uma sugestão pode coincidir com código público. A chance é baixa, mas existe.
[600ms]
[confident] Uma configuração decide se você chega a ver isso. Bloquear esconde uma sugestão que coincide. Permitir mostra a licença e um link.
[600ms]
[reassuring] Trate uma correspondência como qualquer código que você não escreveu: teste, escaneie e procure vulnerabilidades. Os assentos da organização herdam a configuração dela.

## Step 6 · Privacy of What You Paste

[calm] Um prompt é o seu código mais o contexto, enviado ao serviço do Copilot.
[600ms]
[serious] Por isso, mantenha chaves, senhas, tokens e dados de clientes fora do que você digita ou cola.
[600ms]
[reassuring] Use marcadores no lugar. A push protection bloqueia pushes que contenham segredos detectados, e as exclusões de conteúdo mantêm arquivos escolhidos longe do Copilot.

## Step 7 · Over-Reliance

[curious] Se você aceita toda sugestão, as suas habilidades enferrujam, e você acaba aceitando o que não consegue verificar.
[600ms]
[confident] Continue no comando. Primeiro, preveja o que o código deve fazer; depois, compare com o Copilot.
[600ms]
[encouraging] Você pode até pedir ao Copilot Chat que explique o código de volta para você. O Copilot não foi feito para substituir a sua experiência.

## Step 8 · Validate Every Output

[calm] Trate uma sugestão como código de um colega novo.
[600ms]
[confident] Leia e pergunte: eu entendi, e é isso que eu pedi? Rode, teste os casos extremos e depois escaneie, antes do merge.
[600ms]
[impressed] Um teste de caso extremo nesse limite de trinta e cinco graus é exatamente o que teria detectado o bug da Maya.

## Step 9 · Mitigations: Harm and Control

[curious] Todo dano desta lição tem um controle. Escolha um dano e veja o controle correspondente e quem age.
[600ms]
[confident] São seis danos, um para cada etapa anterior. Os controles são hábitos, testes, varreduras e configurações.
[600ms]
[reassuring] Os administradores definem alguns deles, como o filtro de código público e as exclusões de conteúdo. A maioria é simplesmente hábito seu.

## Step 10 · You Are the Author of Record

[calm] O Copilot sugere código, texto e correções. Você revisa, testa, decide e responde por isso.
[600ms]
[serious] O seu nome está na alteração, então a responsabilidade é sua.
[600ms]
[confident] E uma segunda pessoa, como Ravi, ainda lê o pull request. São dois pares de olhos, não um.

## Step 11 · Recap: Responsible-Use Checklist

[calm] Seis hábitos cobrem os riscos desta lição: revisar, testar, escanear, cuidar da licença, proteger a sua privacidade e continuar no comando.
[600ms]
[confident] Use todos sempre, seja qual for o recurso do Copilot que gerou a saída.
[600ms]
[proud] Este é o objetivo de usar o GitHub Copilot com responsabilidade, do guia de estudo do G H 300. A checklist é um resumo em palavras simples, não uma lista oficial.
