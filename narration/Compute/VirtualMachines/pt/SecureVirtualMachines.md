# Narrator Script — Virtual Machines · Secure a virtual machine: encryption, JIT, Trusted launch and Defender for Servers

**Source animation:** [SecureVirtualMachines.html](../../../../journeys/Compute/VirtualMachines/SecureVirtualMachines.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/defender-for-cloud/just-in-time-access-overview>
- <https://learn.microsoft.com/azure/virtual-machines/disk-encryption-overview>
- <https://learn.microsoft.com/azure/virtual-machines/trusted-launch>
- <https://learn.microsoft.com/azure/virtual-machines/boot-integrity-monitoring-overview>

---

## Step 1 · A VM with the defaults

[calm] A nova VM da loja da Contoso foi criada pela comodidade: IP público, RDP e SSH liberados de qualquer lugar e ninguém de olho.
[600ms]
[concerned] Os padrões exatos do portal variam, então confira o que as suas próprias VMs deixam exposto.
[600ms]
[serious] O que importa é até onde um atacante consegue chegar, e aqui ele chega longe.

## Step 2 · Don’t leave RDP and SSH open

[serious] Agentes de ameaça procuram ativamente máquinas com portas de gerenciamento abertas.
[600ms]
[concerned] Uma única VM comprometida vira a porta de entrada para tudo o que ela consegue alcançar.
[600ms]
[confident] Mas os administradores precisam de RDP e SSH, então você não pode simplesmente apagar as portas. Deixe-as fechadas e abra só quando precisar, pelo menor tempo possível.

## Step 3 · Just-in-time access

[calm] O acesso just-in-time mantém as portas de gerenciamento fechadas.
[600ms]
[confident] O administrador pede uma porta para o próprio endereço IP, por uma janela de tempo curta. O Defender for Cloud confere as permissões dele no Azure RBAC e, depois, abre esse endereço de origem durante esse tempo.
[600ms]
[reassuring] Quando a janela termina, a regra volta ao que era antes, e as conexões já abertas não são interrompidas. Isso faz parte do Defender for Servers Plan 2.

## Step 4 · Bastion or JIT?

[curious] As duas opções evitam deixar RDP e SSH abertos para a internet, cada uma de um jeito. Escolha um cenário para ver qual se encaixa.
[600ms]
[confident] O Bastion entrega RDP e SSH por TLS, na porta quatro quarenta e três, para VMs pelo IP privado, então a VM não precisa de IP público.
[600ms]
[reflective] O JIT mantém o grupo de segurança de rede fechado e abre uma porta para um único endereço, por tempo limitado. Ele exige o Defender for Servers Plan 2.

## Step 5 · Disk encryption

[calm] Os discos gerenciados são sempre criptografados em repouso, mas isso não cobre os discos temporários nem os caches.
[600ms]
[confident] A criptografia no host inclui esses itens, além dos dados que trafegam até o armazenamento. O Azure Disk Encryption funciona dentro da VM, com BitLocker ou DM-Crypt.
[600ms]
[serious] O Azure Disk Encryption está programado para ser desativado, então o Learn recomenda a criptografia no host para VMs novas. Usar as suas próprias chaves dá mais controle a você.

## Step 6 · Security type

[curious] Ao criar uma VM, você escolhe o tipo de segurança dela. Ele define o que protege a VM antes mesmo de o sistema operacional iniciar.
[600ms]
[confident] O Trusted launch é para VMs de segunda geração e é o padrão nas novas. As VMs confidenciais adicionam, em volta da VM, uma barreira garantida pelo hardware.
[600ms]
[concerned] O tipo padrão não tem nenhuma dessas proteções de inicialização, e essa é a escolha mais fraca.

## Step 7 · Secure Boot and vTPM

[calm] O Secure Boot só deixa rodar código de inicialização assinado. O boot loader, o kernel e os drivers precisam ser assinados por publicadores confiáveis, senão a VM não inicia.
[600ms]
[confident] O vTPM é um TPM virtual versão dois ponto zero. Ele registra o que de fato rodou, para que a inicialização possa ser comprovada depois.
[600ms]
[impressed] Isso mantém chaves e medições fora do alcance de qualquer VM, e é a sua defesa contra rootkits.

## Step 8 · Integrity monitoring

[calm] Com o monitoramento de integridade ativado, uma extensão de Guest Attestation comprova ao Azure cada inicialização.
[600ms]
[confident] Se a comprovação falhar, o Defender for Cloud alerta você. No portal, selecione Integrity monitoring nas configurações do tipo de segurança, e a extensão é instalada.
[600ms]
[serious] Ele exige uma VM com Trusted launch, com o Secure Boot e o vTPM ativados. A atestação falha se o Secure Boot estiver desativado.

## Step 9 · Defender for Servers

[calm] O Defender for Servers protege máquinas Windows e Linux a partir do Defender for Cloud. Ative o recurso em uma assinatura e depois escolha um plano.
[600ms]
[confident] O Plan 1 é o nível inicial e se concentra em detecção e resposta em endpoints. O Plan 2 inclui o Plan 1 e acrescenta varredura sem agente, JIT e monitoramento de integridade de arquivos.
[600ms]
[reflective] A Microsoft recomenda ativar no nível da assinatura, e a chave ativa o Plan 2 por padrão. Para ver os preços, consulte a página de preços do Defender for Cloud.

## Step 10 · Vulnerability scanning and EDR

[curious] O sensor do Defender for Endpoint enxerga uma VM enquanto ela está rodando. A varredura sem agente lê uma cópia dos discos e não precisa de nada instalado.
[600ms]
[confident] A varredura baseada em agente e o EDR vêm nos dois planos. A varredura sem agente está no Plan 2, e a varredura de malware é exclusiva do Plan 2.
[600ms]
[reassuring] O snapshot fica na região da VM e é excluído assim que os metadados são lidos.

## Step 11 · Azure Machine Configuration

[calm] O Machine Configuration confere as configurações dentro do sistema operacional com o estado que você exige e pode restaurá-las quando elas se desviam.
[600ms]
[confident] Ele faz parte do Azure Policy. Uma VM do Azure precisa da extensão de machine configuration e de uma identidade gerenciada atribuída pelo sistema.
[600ms]
[curious] Cada atribuição tem um modo: Audit, ApplyAndMonitor ou ApplyAndAutoCorrect.

## Step 12 · Arc-enabled servers, and the recap

[calm] O Azure Arc traz servidores de fora do Azure para o gerenciamento do Azure. Instale o agente Connected Machine, e o servidor vira um recurso do Azure.
[600ms]
[confident] Aí o Defender for Servers, o Azure Policy e o Machine Configuration também passam a funcionar nele.
[600ms]
[proud] Recursos de VM como o Trusted launch e a criptografia no host ficam só nas VMs do Azure. Feche as portas, proteja a inicialização, criptografe os discos e continue monitorando.
