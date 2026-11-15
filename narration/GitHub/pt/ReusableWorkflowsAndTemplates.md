# Narrator Script — GitHub · Reuse Automation: Starter Workflows, Reusable Workflows and Composite Actions

**Source animation:** [ReusableWorkflowsAndTemplates.html](../../../journeys/GitHub/ReusableWorkflowsAndTemplates.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · Twelve repos, twelve copies

[calm] Cada repositório da Contoso guarda a própria cópia do mesmo arquivo de CI. São doze cópias de uma única ideia.
[600ms]
[concerned] Agora, para corrigir uma coisa, são doze edições, e mais cedo ou mais tarde as cópias deixam de ser iguais.
[600ms]
[curious] A solução não é fazer mais cópias. O GitHub oferece três formas diferentes de reutilizar automação, e o exame G H 200 pede que você saiba distingui-las.

## Step 2 · Starter workflows

[calm] A primeira forma é o workflow inicial. Ele é um ponto de partida: você escolhe, faz commit de uma cópia, e daí em diante o arquivo é seu.
[600ms]
[confident] Você encontra os modelos em Actions e depois em New workflow. Depois da cópia, edite à vontade, porque ela é independente.
[600ms]
[reflective] A documentação do GitHub agora chama esses modelos de workflow templates, e o guia de estudo ainda diz workflows iniciais. É a mesma ideia.

## Step 3 · Organization starter workflows

[curious] As organizações podem oferecer os próprios modelos. Guarde-os em um repositório chamado dot github, dentro de uma pasta de workflow templates, com um arquivo de propriedades para cada um.
[600ms]
[confident] Cada modelo tem um arquivo de propriedades pequeno ao lado, e nome e descrição são obrigatórios.
[600ms]
[serious] A visibilidade importa: um repositório dot github privado atende só repositórios privados, e quem usa os modelos precisa de acesso de leitura.

## Step 4 · Reusable workflows

[confident] A segunda forma é o workflow reutilizável. Você define o pipeline uma vez, em um repositório central.
[600ms]
[curious] Cada chamador aponta para ele com uma linha uses e roda exatamente o mesmo código. O arquivo chamado precisa escutar o evento workflow call.
[600ms]
[serious] Lembre onde fica a chamada: dentro de um job, nunca dentro de um passo.

## Step 5 · workflow_call: inputs, secrets, outputs

[calm] O workflow chamado declara o que entra e o que sai.
[600ms]
[confident] O chamador envia as entradas com a chave with e os segredos com a chave secrets, e depois lê as saídas com needs.
[600ms]
[intrigued] As entradas precisam ter o tipo declarado: string, número ou booleano. E a saída de um passo precisa primeiro ser mapeada para uma saída do job, para que o workflow possa retorná-la.

## Step 6 · Passing secrets

[calm] Um workflow chamado não enxerga os seus segredos automaticamente. Informe cada um que você repassa.
[600ms]
[confident] Ou repasse todos de uma vez com secrets inherit, que funciona dentro da mesma organização ou empresa.
[600ms]
[serious] Os segredos chegam só ao workflow que você chama diretamente. Em uma cadeia A, B e C, o workflow C só recebe um segredo se o B repassar.

## Step 7 · Pin the caller to a version

[calm] O texto depois da arroba escolhe a versão que roda: um branch, uma tag de lançamento ou um SHA de commit.
[600ms]
[curious] Um branch se move a cada novo commit. Uma tag de lançamento é uma versão que você publica. Se uma tag e um branch têm o mesmo nome, a tag prevalece.
[600ms]
[confident] O SHA completo de um commit é a escolha mais segura, tanto para estabilidade quanto para segurança.

## Step 8 · Composite actions

[calm] A terceira forma é a action composta. Ela reúne vários passos atrás de uma única linha uses.
[600ms]
[confident] Ela roda como um único passo dentro do job do chamador, é descrita em um arquivo de metadados, e todo passo run dentro dela precisa de um shell.
[600ms]
[serious] Ela pode ficar em um repositório próprio ou em uma pasta do seu repositório, mas só tem passos, nunca jobs.

## Step 9 · Starter vs reusable vs composite

[curious] Mesmo objetivo, três ferramentas. Então, como escolher?
[600ms]
[confident] Escolha pelo que você quer compartilhar. Um workflow inicial é um arquivo copiado que passa a ser seu. Um workflow reutilizável é um pipeline central inteiro que você chama em um job.
[600ms]
[reassuring] E uma action composta é só um punhado de passos reunidos em um só.

## Step 10 · Who can call what

[calm] Reutilizar tem regras de acesso. O chamador precisa de acesso ao repositório que contém o workflow, e as configurações de Actions dele precisam permitir isso.
[600ms]
[confident] Um chamador público só pode usar workflows públicos. Um chamador privado pode usar públicos e privados, e um repositório privado chamado precisa da configuração Access.
[600ms]
[concerned] Um aviso do GitHub: se você abre um repositório privado para outros workflows, colaboradores externos dele podem ver os logs das execuções que o usam.

## Step 11 · Consume a shared workflow

[calm] Um desenvolvedor adiciona um chamador pequeno em um pull request, só algumas linhas que chamam o arquivo compartilhado.
[600ms]
[impressed] O workflow compartilhado então roda no pull request, e os jobs dele aparecem como checagens.
[600ms]
[serious] O chamador também é código, então revise: olhe a referência depois da arroba e quais segredos ele repassa.

## Step 12 · Recap: pick the right tool

[calm] Três ideias parecidas. O workflow inicial é uma cópia que passa a ser sua. O workflow reutilizável é um workflow central que você chama.
[600ms]
[confident] E a action composta é um punhado de passos reunidos em um só.
[600ms]
[proud] Para o G H 200, agora você sabe diferenciá-los, usá-los com segurança e gerenciar modelos e componentes reutilizáveis com confiança.
