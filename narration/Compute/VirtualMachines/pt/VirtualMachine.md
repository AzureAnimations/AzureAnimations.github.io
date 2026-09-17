# Narrator Script - Monte sua primeira VM

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachine.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · The shop needs OS control

[calm] A loja precisa controlar o SO.
[600ms]
A Contoso escolhe uma VM para instalar e gerenciar sua aplicação.
[600ms]
[serious] Você gerencia o SO convidado e a aplicação; o Azure gerencia os hosts.

## Step 2 · Start with an image

[calm] Comece com uma imagem.
[600ms]
A imagem fornece o sistema operacional e o software inicial do disco do SO.
[600ms]
[serious] Este exemplo usa Linux; Windows é outra opção.

## Step 3 · Choose a size

[calm] Escolha um tamanho.
[600ms]
CPU e memória devem atender à carga; o tamanho é independente da imagem.
[600ms]
[serious] Escolha o tamanho conforme a carga, a disponibilidade regional e o orçamento.

## Step 4 · Give data a durable home

[calm] Guarde dados com durabilidade.
[600ms]
Discos do SO e de dados têm funções distintas. Armazenamento temporário não é uma cópia durável.
[600ms]
[serious] O armazenamento temporário, quando disponível, não é durável.

## Step 5 · Connect the private network

[calm] Conecte a rede privada.
[600ms]
Uma NIC dá à VM um IP privado em uma sub-rede da rede virtual.
[600ms]
[serious] Esta VM não precisa de IP público. Regras de segurança continuam necessárias.

## Step 6 · Connect, then authenticate

[calm] Conecte e autentique.
[600ms]
Bastion fornece o caminho de gerenciamento. Uma chave SSH autentica o administrador no Linux.
[600ms]
[serious] Bastion Basic em sua sub-rede; a chave SSH autentica no Linux. Conectividade não é permissão.

## Step 7 · Stopped is not deallocated

[calm] Parar não é desalocar.
[600ms]
O estado altera a cobrança de computação. Discos e outros recursos permanecem.
[600ms]
[serious] Pagamento por uso: computação e discos são cobrados.

## Step 8 · Your VM - All in One

[calm] Sua VM - Visão completa.
[600ms]
Imagem, tamanho, discos, rede e acesso formam uma VM. Disponibilidade vem a seguir.
[600ms]
[serious] Uma VM funcionando não é um projeto completo de alta disponibilidade.
