# Roteiro de narração — Azure Storage · Nível avançado · Proteção de dados

**Source animation:** `static/v2/Storage/StorageDataProtection.html`

---

## Step 1 · goal

[confident] Acidentes acontecem, e ataques também. Então, como protegemos os dados de exclusões, sobrescritas e ransomware?
[600ms]
[calm] Com uma rede de segurança — um conjunto de camadas independentes, cada uma protegendo contra um tipo diferente de perda.
[700ms]
[reassuring] Elas são independentes, então você ativa exatamente as que seus dados precisam.

## Step 2 · encrypt

[confident] A camada base já está ativa. Cada blob é criptografado em repouso, de forma automática, com o Storage Service Encryption.
[600ms]
[calm] Você não mexe um dedo — mas pode trazer suas próprias chaves no Key Vault se uma política ou um regulador exigir.
[700ms]
[reassuring] Quer mais? Adicione a criptografia de infraestrutura para uma segunda camada de criptografia independente por baixo.

## Step 3 · softdelete

[confident] Agora, o herói de cada dia: a exclusão reversível. Com ela ativada, um blob excluído não desaparece de verdade.
[600ms]
[calm] Ele é preservado, e pode ser recuperado, durante uma janela de retenção que você escolhe — de um a trezentos e sessenta e cinco dias.
[700ms]
[reassuring] E também pega as sobrescritas — o estado anterior é preservado, então um salvamento ruim está a um passo de ser desfeito.

## Step 4 · versioning

[confident] Vá um passo além com o controle de versão de blobs. Agora cada gravação preserva automaticamente a cópia anterior.
[600ms]
[calm] Você obtém um histórico completo e automático — perfeito para auditoria, e para reverter qualquer blob individual.
[700ms]
[serious] As versões custam armazenamento, então combine o controle de versão com uma regra de ciclo de vida que envelheça as versões antigas.

## Step 5 · immutable

[confident] Para a conformidade regulatória, bloqueie tudo por completo com a imutabilidade — um estado de gravação única e leitura múltipla.
[600ms]
[calm] Aplique uma política de retenção por tempo ou uma retenção legal, e ninguém — nem mesmo um administrador — pode modificar ou excluir o blob até que a política seja levantada.
[700ms]
[serious] Um compromisso a considerar: a imutabilidade é incompatível com a restauração para um momento específico, que é a nossa próxima camada.

## Step 6 · restore

[confident] A restauração para um momento específico deixa você rebobinar. Devolve seus block blobs a um momento anterior — antes daquela implantação com falha ou daquele erro em massa.
[600ms]
[calm] Ela se apoia nas camadas que você já configurou: exclusão reversível, controle de versão e o feed de alterações trabalhando juntos.
[700ms]
[reassuring] Só lembre que ela restaura operações de block blob, e que o ponto de restauração fica ao menos um dia atrás, dentro da sua retenção.

## Step 7 · recap

[proud] Aí está o panorama completo: criptografia em repouso por padrão, e depois envolvido em camadas de recuperação — exclusão reversível, controle de versão e restauração para um momento específico — com imutabilidade para a conformidade.
[700ms]
[encouraging] Ative as camadas que se ajustem ao seu risco, e uma exclusão ou um ataque vira um evento recuperável, não um desastre.

## Step 8 · spec

[confident] Um pouco mais a fundo. A pilha de recuperação é mais rica para os blobs, onde todos esses recursos se alinham.
[600ms]
[calm] A exclusão reversível protege contra exclusões e sobrescritas; o controle de versão guarda o histórico; o feed de alterações anota cada mudança; e a restauração para um momento específico une todos.
[700ms]
[reassuring] A única regra a levar — um objetivo de restauração para um momento específico precisa ter ao menos um dia de idade, e estar dentro da sua janela de retenção.
