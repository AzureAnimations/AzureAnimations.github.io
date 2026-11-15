# Narrator Script — GitHub · Copilot Privacy, Content Exclusions and Safeguards

**Source animation:** [CopilotPrivacyAndExclusions.html](../../../journeys/GitHub/CopilotPrivacyAndExclusions.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>
- <https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-admin>

---

## Step 1 · Two Worries, One Tool

[calm] A Contoso quer o Copilot em todos os editores. Mas o repositório dela guarda um arquivo de segredos, e o Ravi pergunta sobre código licenciado.
[600ms]
[concerned] São duas preocupações reais: o que o Copilot pode ler e o que ele pode sugerir.
[600ms]
[reassuring] O Copilot tem uma configuração para cada uma. As exclusões de conteúdo e o filtro de código público.

## Step 2 · What Copilot Sends and Keeps

[curious] O Copilot envia o seu código e o contexto dele como um prompt e recebe uma sugestão de volta.
[600ms]
[confident] Três configurações decidem o que entra, o que sai e como os dados são usados: as exclusões, o filtro de código público e o uso dos dados.
[600ms]
[reflective] O que é guardado e usado para treinamento depende do seu plano, então consulte o GitHub Copilot Trust Center.

## Step 3 · Content Exclusions: What They Are

[calm] Uma exclusão de conteúdo diz ao Copilot que ignore os arquivos ou repositórios que você escolher.
[600ms]
[confident] Assim, eles não influenciam o que ele sugere ou responde. Conteúdo excluído não gera sugestões, contexto, respostas nem revisão.
[600ms]
[serious] A exclusão funciona com os planos Copilot Business e Copilot Enterprise.

## Step 4 · Write an Exclusion Rule

[curious] Um administrador lista os caminhos nas configurações do repositório, em Copilot e depois em Content exclusion.
[600ms]
[calm] Cada linha é um caminho ou padrão entre aspas, e todo arquivo que combinar com ele é excluído. Você pode adicionar comentários com o sinal de hash.
[600ms]
[reassuring] A correspondência usa padrões fnmatch e não diferencia maiúsculas de minúsculas.

## Step 5 · Who Can Set Exclusions

[calm] As regras podem ser definidas para um repositório, uma organização ou um enterprise inteiro. O nível decide quem é coberto.
[600ms]
[confident] Os administradores do repositório cobrem esse repositório. Os proprietários da organização cobrem os usuários que recebem um assento pela organização. Os proprietários do enterprise cobrem todos os usuários do Copilot no enterprise.
[600ms]
[curious] As regras herdadas aparecem em caixas cinza que você não pode editar.

## Step 6 · What the Exclusion Does

[curious] Edite um arquivo normal e aparece uma sugestão. Faça a mesma edição no arquivo excluído e nada aparece.
[600ms]
[confident] No Chat, um arquivo excluído não aparece na lista de referências, então o Chat não pode usá-lo.
[600ms]
[serious] A configuração do editor para desativar o Copilot é pessoal. Ela não é uma regra.

## Step 7 · Matching Public Code

[calm] O Copilot compara uma sugestão, e o código em volta dela, com o código público do GitHub.
[600ms]
[confident] Com o filtro ativado, uma sugestão que coincide não é exibida. Com ele desativado, a coincidência aparece com a licença e um link.
[600ms]
[reassuring] Se não houver coincidência, a sugestão aparece de qualquer jeito.

## Step 8 · Turn the Public Code Filter On

[curious] Quem altera essa configuração depende do seu plano. Experimente os três botões de plano e veja quem controla o filtro.
[600ms]
[calm] Em um plano individual, você mesmo escolhe Allow ou Block nas configurações do Copilot.
[600ms]
[confident] Se houver um administrador do enterprise ou da organização, é ele quem define para todo mundo. Se o seu assento vem de uma organização, a configuração é herdada e você não pode mudá-la.

## Step 9 · Who Owns the Output

[calm] O GitHub não é dono do que o Copilot gera. Você mantém a propriedade que já tem.
[600ms]
[serious] Você também continua responsável pelo que cria, e os filtros apenas reduzem o risco.
[600ms]
[reflective] Isto é um resumo em linguagem simples, não aconselhamento jurídico. O que for além disso é decidido pelo seu próprio contrato.

## Step 10 · When It Does Not Work

[curious] Comece pelo sintoma. Sem sugestão, muitas vezes é um arquivo excluído, uma linguagem desativada ou uma coincidência com o filtro.
[600ms]
[confident] Se um arquivo excluído ainda estiver sendo usado, pense em configurações desatualizadas, no padrão, em um link simbólico ou em contexto indireto. Recarregue a janela ou reabra o aplicativo para as regras serem atualizadas.
[600ms]
[serious] E lembre-se: a exclusão é uma barreira de proteção, não um limite de segurança.

## Step 11 · Recap: Who Owns Which Setting

[calm] Os administradores escrevem as regras de exclusão e a política de código público.
[600ms]
[confident] Os desenvolvedores testam as regras, definem o próprio filtro e revisam o que entregam.
[600ms]
[proud] Isso cobre quatro habilidades do guia de estudo do G H 300. Só lembre do limite: a exclusão é uma barreira de proteção, não um limite de segurança.
