# Narrator Script - Discos que guardam os dados

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineDisks.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · The catalogue outgrows its disk

[curious] A loja continua crescendo, e as fotos dos produtos também.
[600ms]
[serious] Essas imagens estão enchendo o disco onde o sistema operacional foi instalado. É melhor dar a elas um disco de dados próprio.
[600ms]
[calm] A redundância também não resolve erros de gravação. Ela copia fielmente cada alteração, inclusive aquela que você gostaria de desfazer.

## Step 2 · Three disks, three jobs

[calm] Uma máquina virtual pode ter três tipos de disco. Confundir as funções é um erro comum.
[600ms]
[confident] O disco do sistema operacional inicia a máquina. Os discos de dados guardam arquivos e o catálogo. O temporário é uma área de trabalho descartável.
[600ms]
[serious] Temporário é temporário. Manutenção, reimplantação ou uma parada podem causar perda dos dados. Guarde ali somente o que pode descartar.

## Step 3 · Match the disk to the work

[curious] Existem vários tipos de disco gerenciado, com diferenças reais de velocidade e custo.
[600ms]
[confident] De Standard HDD a Ultra Disk, mudam as operações por segundo, a taxa de transferência e o preço.
[600ms]
[serious] O desempenho depende do tipo e do tamanho do disco, mas também é limitado pelo que o tamanho da máquina virtual permite.

## Step 4 · Grow it, never shrink it

[calm] A capacidade do disco pode mudar. Experimente o controle e acompanhe o crescimento.
[600ms]
[confident] Um disco gerenciado pode ser expandido quando as medições justificarem. Por isso, vale começar com uma capacidade moderada.
[600ms]
[serious] Ele só cresce, não diminui. Depois da expansão, também é preciso estender o sistema de arquivos dentro do convidado para aproveitar o espaço novo.

## Step 5 · Freeze a point in time

[calm] Antes de uma mudança arriscada, tire um instantâneo.
[600ms]
[confident] O instantâneo preserva uma cópia do disco naquele momento, útil antes de uma atualização ou de uma alteração de esquema.
[600ms]
[serious] É a cópia de um disco feita quando você solicitou. Não substitui uma programação de backup nem um plano de restauração. Isso vem na próxima lição.

## Step 6 · Encrypt at the host

[calm] Os dados em repouso devem ser criptografados, e isso pode ser feito pelo host.
[600ms]
[confident] A criptografia no host protege os discos do sistema e de dados, o disco temporário e os caches do host.
[600ms]
[reassuring] O processamento acontece no host, não dentro do convidado. Por isso, não consome o processador da máquina da loja.

## Step 7 · VM Disks - All in One

[reflective] Cinco escolhas determinam a velocidade e a proteção dos dados da Contoso.
[600ms]
[confident] A função de cada disco, seu tipo, espaço para crescer, um instantâneo antes de assumir riscos e a criptografia protegendo o conjunto.
[600ms]
[determined] O armazenamento adequado cumpre seu papel sem chamar atenção. É exatamente isso que queremos.
