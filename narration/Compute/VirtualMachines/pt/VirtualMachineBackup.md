# Narrator Script - Faça backup e prove a restauração

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineBackup.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · Someone deletes the orders folder

[serious] É uma terça-feira comum, e alguém exclui a pasta de pedidos.
[600ms]
[calm] A redundância do armazenamento faz exatamente seu trabalho: replica a exclusão nas outras cópias também.
[600ms]
[confident] Redundância protege contra falhas de hardware. Para se recuperar desse erro, é preciso um backup, e configurá-lo é uma decisão separada.

## Step 2 · Create the vault

[calm] A Contoso começa com um lugar seguro para guardar os pontos de recuperação.
[600ms]
[confident] Um cofre dos Serviços de Recuperação fica fora da máquina virtual e mantém os pontos de recuperação e as regras que os administram.
[600ms]
[reassuring] Essa separação importa: excluir a máquina não exclui, por si só, os pontos de recuperação guardados no cofre.

## Step 3 · Write the policy

[curious] Com que frequência, e por quanto tempo?
[800ms]
[confident] A política de backup responde às duas perguntas. A programação define quando o backup acontece, e a retenção define quanto tempo cada ponto permanece.
[600ms]
[serious] A retenção equilibra custo e tranquilidade. Guarde o que o negócio realmente precisaria recuperar e saiba explicar o motivo.

## Step 4 · One run, two phases

[calm] Um backup não acontece em um único instante.
[600ms]
[confident] O Azure primeiro cria um instantâneo e depois transfere os dados para o cofre. A segunda fase normalmente leva mais tempo.
[600ms]
[reassuring] Por isso, o trabalho na máquina pode parecer concluído enquanto a transferência para o cofre continua. As duas fases importam e terminam em momentos diferentes.

## Step 5 · Restore only what you need

[curious] Algo deu errado. Quanto você precisa recuperar? Percorra as opções e veja.
[600ms]
[confident] Você pode restaurar a máquina inteira, recuperar um disco para substituí-lo ou montar um ponto de recuperação e retirar um arquivo.
[600ms]
[determined] Ajuste a restauração ao dano. Uma pasta excluída não precisa exigir a reconstrução de toda a loja.

## Step 6 · Deleting a backup is a separate risk

[serious] Agora pense em um ataque ou na exclusão do próprio backup.
[600ms]
[confident] A exclusão reversível mantém os dados de backup excluídos por um período de retenção, permitindo desfazer uma exclusão acidental ou mal-intencionada.
[600ms]
[calm] Ela protege os backups que já existem. Não pode recuperar uma máquina que nunca teve backup.

## Step 7 · VM Backup - All in One

[reflective] Quatro peças podem transformar um desastre em uma tarde difícil.
[600ms]
[confident] Um cofre fora da máquina, uma política adequada ao negócio, pontos de recuperação comprovados e uma restauração que alguém já ensaiou.
[600ms]
[proud] O ensaio é essencial. Um backup não testado é uma esperança, não um plano.
