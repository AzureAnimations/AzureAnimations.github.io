# Narrator Script — Azure Storage · Protect it (Redundancy) · PT

**Source animation:** `static/v2/Storage/StorageRedundancy.html`

Voz feminina (pt-BR-Thalita). Um bloco por passo.

---

## Step 1 · Overview

[warm] Um dado tranquilizador: o Azure Storage sempre replica seus dados. A única pergunta é onde as cópias vivem.
[600ms]
[calm] Você escolhe: o mesmo data center, entre zonas de disponibilidade, em outra região, ou com uma cópia secundária legível. São seis opções, com três compensações: quantas cópias, quão amplo é o raio de impacto, e se a secundária é legível.
[600ms]
[confident] Sempre há três cópias síncronas na região primária. Os próximos passos animam cada opção, do local ao mais resiliente.

## Step 2 · LRS

[confident] Vamos começar no local: LRS, armazenamento com redundância local.
[600ms]
[calm] Ele mantém três cópias síncronas dos seus dados dentro de um único data center físico, na região que você escolher. Cada gravação é salva nas três antes de ser confirmada, então as cópias são sempre idênticas.
[600ms]
[calm] É a opção mais econômica, e protege contra as falhas do dia a dia: um disco com defeito, um servidor fora do ar, um rack inteiro que desliga. O Azure pode até mover ou expandir a conta entre zonas para equilibrar a carga.
[600ms]
[reassuring] Mas as três cópias vivem em um mesmo prédio. Então, se um desastre atingir esse data center — um incêndio, uma inundação — todas as réplicas podem se perder. O LRS oferece cerca de onze noves de durabilidade, e combina bem com dados fáceis de reconstruir, ou quando as regras de residência de dados obrigam a manter tudo em um só lugar.

## Step 3 · ZRS

[confident] Agora espalhe o risco: ZRS, armazenamento com redundância de zona.
[600ms]
[calm] Ele grava três cópias síncronas em três zonas de disponibilidade de uma mesma região. Cada zona é um data center fisicamente separado, com sua própria energia, refrigeração e rede, então nenhum prédio é um único ponto de falha.
[600ms]
[calm] Como as gravações continuam síncronas, cada cópia está atualizada, e você pode seguir lendo e gravando mesmo que uma zona inteira caia. Por isso a Microsoft recomenda o ZRS na região primária para aplicativos de alta disponibilidade, e também para cargas do Data Lake Storage.
[600ms]
[reassuring] Ele te leva a cerca de doze noves de durabilidade. A única coisa a lembrar: o ZRS ainda está em uma única região, então protege contra a queda de uma zona, mas não contra a perda da região inteira. Para isso, é preciso ir geo.

## Step 4 · GRS and RA-GRS

[confident] Para sobreviver a uma região inteira, vá geo: GRS, armazenamento com redundância geográfica.
[600ms]
[calm] Primeiro, seus dados são gravados três vezes na região primária usando LRS. Depois o Azure os copia de forma assíncrona para uma região secundária emparelhada, a centenas de quilômetros, onde são salvos outras três vezes, de novo com LRS. São seis cópias no total, e cerca de dezesseis noves de durabilidade.
[600ms]
[calm] Essa região secundária é escolhida automaticamente a partir da primária, e não pode ser alterada. Como a cópia é assíncrona, há um pequeno atraso, então uma perda repentina da primária poderia perder as gravações mais recentes que ainda não haviam sido replicadas. A esse intervalo se chama objetivo de ponto de recuperação, ou RPO, e a replicação com prioridade geográfica o mantém abaixo de quinze minutos para os block blobs.
[600ms]
[reassuring] Por padrão, essa secundária é só para recuperação de desastres: seu app não pode lê-la. Se a primária cair, você aciona um failover da conta, e o DNS redireciona para a secundária, que se torna a nova primária.
[600ms]
[impressed] Ative o acesso de leitura — RA-GRS — e o Azure expõe um ponto de acesso secundário somente leitura. Agora seu app pode ler da secundária enquanto as gravações vão só para a primária: perfeito para testes de recuperação de desastres e para distribuir o tráfego de leitura entre regiões.

## Step 5 · GZRS and RA-GZRS

[confident] Quer proteção de zona E de região? Combine as duas: GZRS.
[600ms]
[calm] Na região primária usa ZRS: três cópias síncronas em três zonas de disponibilidade. Depois replica de forma assíncrona para a região secundária emparelhada, onde os dados são salvos com LRS. Assim você obtém o melhor dos dois mundos: alta disponibilidade por zonas em casa, e durabilidade geográfica ao longe.
[600ms]
[calm] Isso significa que você pode seguir lendo e gravando durante a queda de uma zona, e ainda se recuperar de um desastre regional completo. Também são cerca de dezesseis noves de durabilidade, e é o que a Microsoft recomenda para aplicativos de missão crítica que precisam da máxima consistência, durabilidade e disponibilidade.
[600ms]
[impressed] Adicione acesso de leitura — RA-GZRS — para uma secundária legível, e você chega à opção mais resiliente do Azure Storage: primária com redundância de zona, secundária geográfica legível.
[600ms]
[reassuring] A contrapartida, como sempre, é o custo, mas para dados que você realmente não pode perder, é o padrão-ouro.

## Step 6 · Summary

[warm] Então aqui estão as seis opções, lado a lado.
[600ms]
[calm] LRS: um data center. ZRS: três zonas. GRS: duas regiões. RA-GRS: mais uma secundária legível. GZRS: zonas mais uma região emparelhada. E RA-GZRS: a mais resiliente de todas.
[600ms]
[encouraging] Escolha por raio de impacto versus custo: a quanta falha seus dados devem sobreviver? De um único rack a uma região inteira, há uma opção de redundância para isso.
