# Naming convention — narração (pt)

## Step 1 · Six months later, nobody knows

[calm] Um grupo de recursos cheio de nomes que faziam todo o sentido no dia em que foram digitados.
[500ms]
[concerned] Agora ninguém sabe dizer para que servem, de quem são, nem se apagar um deles vai derrubar a produção.
[400ms]
[confident] E aqui está a restrição mais dura: a maioria dos nomes de recursos do Azure não pode ser alterada depois da criação. Um nome ruim não é um ajuste de cinco minutos lá na frente — é uma nova implantação.

## Step 2 · Five parts, always in the same order

[confident] O Cloud Adoption Framework divide um nome em cinco componentes.
[500ms]
[calm] Tipo de recurso, carga de trabalho, ambiente, região e instância. Escolha a ordem uma vez, deixe registrado, e todos os nomes do seu ambiente passam a ser legíveis.
[400ms]
[helpful] O hífen é recomendado por questão de legibilidade, mas nem todo tipo de recurso do Azure aceita. As contas de armazenamento, por exemplo. Se você valoriza a consistência absoluta, tire o separador de todos os lugares, em vez de só onde é obrigatório.

## Step 3 · The abbreviations are already decided

[calm] Você não precisa inventar prefixos.
[500ms]
[confident] A Microsoft publica uma abreviação recomendada para cada tipo de recurso. Usar essa lista significa que qualquer pessoa que entrar no time já sabe ler o seu ambiente.
[400ms]
[helpful] Uma que pega muita gente de surpresa: não existe um lb genérico. O Cloud Adoption Framework separa os balanceadores de carga em lbi para os internos e lbe para os externos.

## Step 4 · What it looks like across the estate

[calm] Os mesmos cinco componentes, aplicados recurso a recurso.
[500ms]
[confident] Os seis primeiros formatos são exemplos publicados. Os três últimos aplicam o mesmo padrão a recursos que têm abreviação, mas não têm exemplo publicado.
[400ms]
[helpful] Repare como o formato do NSG se apoia na política, e não na região. A convenção se molda ao que realmente distingue um do outro.

## Step 5 · Where a name has to be unique

[calm] A unicidade não é global para tudo.
[500ms]
[confident] Alguns nomes precisam ser únicos em todo o Azure, outros apenas dentro de um grupo de recursos. E os limites de caracteres variam bastante entre os tipos de recurso, então um deles uma hora vai te pegar.
[400ms]
[helpful] O nome de computador de uma máquina virtual Windows tem limite de quinze caracteres. É por causa desse único limite que a maioria das convenções mantém as abreviações de carga de trabalho em três ou quatro letras.

## Step 6 · What does not belong in the name

[confident] Um nome deve carregar apenas aquilo que continua verdadeiro durante toda a vida do recurso.
[500ms]
[calm] Todo o resto — responsável, centro de custo, número do chamado, data de revisão — pertence a uma tag, onde você realmente consegue alterar.
[400ms]
[concerned] E uma regra inegociável: nunca coloque informação pessoal, sensível ou confidencial no nome de um recurso nem em uma tag. Os dois ficam visíveis para muito mais gente do que as pessoas imaginam.

## Step 7 · A name that answers the question

[confident] Então, o ponto principal. Uma boa convenção não é burocracia.
[400ms]
[calm] É o que permite que um script, uma política, um relatório de custos e um engenheiro exausto às duas da manhã cheguem todos à mesma conclusão sobre um recurso.
[600ms]
[encouraging] Deixe a convenção registrada, publique a lista de abreviações e imponha tudo isso com o Azure Policy desde o primeiro dia — porque renomear depois raramente é uma opção.
