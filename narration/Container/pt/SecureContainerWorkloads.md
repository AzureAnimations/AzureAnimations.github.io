# Narrator Script — Containers · Secure containers: Defender for Containers, AKS, Container Registry, Instances and Container Apps — Azure Containers

**Source animation:** [SecureContainerWorkloads.html](../../../journeys/Container/SecureContainerWorkloads.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/defender-for-cloud/defender-for-containers-introduction>
- <https://learn.microsoft.com/azure/defender-for-cloud/alerts-containers>
- <https://learn.microsoft.com/azure/container-registry/container-registry-authentication>
- <https://learn.microsoft.com/azure/container-registry/overview-sign-verify-artifacts>

---

## Step 1 · Build, store, run: three places to attack

[calm] A Contoso entrega um contêiner chamado orders-api. Ele vai do pipeline para o registro e, depois, para um pod em execução.
[600ms]
[serious] Um atacante pode atacar em qualquer etapa. As imagens podem ser alteradas ou trocadas enquanto estão armazenadas, e os contêineres podem ser abusados quando entram em execução.
[600ms]
[determined] Por isso, cada parte desta lição protege uma etapa. Proteja todas as etapas, e a cadeia fica sem elo fraco.

## Step 2 · Defender for Containers watches all three

[confident] Um único plano do Defender for Cloud cobre as imagens do registro, a configuração do cluster e os contêineres em execução.
[600ms]
[calm] Isso inclui postura de segurança, avaliação de vulnerabilidades, proteção contra ameaças em tempo de execução, proteção da cadeia de suprimentos e monitoramento de implantações, tudo em um só lugar.
[600ms]
[serious] Uma coisa para lembrar: os alertas só disparam para atividades que acontecem depois de você ativar o plano. Então ative cedo.

## Step 3 · Registry: who gets in and what’s inside

[calm] Comece pelo registro. Controle quem pode fazer push e pull, mantenha o registro fora da internet pública e escaneie o que ele guarda.
[600ms]
[confident] Na maioria dos cenários, use o login com o Microsoft Entra ID. Os tokens com escopo são a alternativa, mas eles não usam as atribuições de função do Entra.
[600ms]
[curious] Para manter o registro privado, adicione um endpoint privado. Isso exige o nível Premium.

## Step 4 · Image trust: sign it, scan it, then run it

[curious] Como saber se uma imagem é a que você criou? Assine a imagem na hora do build.
[600ms]
[calm] O Notation, do Notary Project, assina a imagem, e a assinatura fica guardada no registro. A chave pode ficar no Key Vault.
[600ms]
[confident] Depois, verifique a assinatura antes de um pod iniciar. O AKS Image Integrity, ainda em versão prévia, usa o Azure Policy para permitir só imagens assinadas, e você pode condicionar as implantações aos resultados do scan.

## Step 5 · AKS identity: people and pods

[calm] No cluster, há dois tipos de identidade para considerar: pessoas e pods.
[600ms]
[confident] As pessoas entram com o Microsoft Entra ID e recebem funções do Kubernetes por meio do Kubernetes RBAC. A alternativa é o Azure RBAC para Kubernetes.
[600ms]
[reassuring] Os pods acessam o Azure com uma workload identity, que federa o token da conta de serviço do pod com o Entra. Não é preciso guardar senha nenhuma.

## Step 6 · AKS network: shrink who can connect

[calm] Agora, reduza as portas de entrada. Mantenha o servidor de API fora da internet aberta.
[600ms]
[confident] Um cluster privado dá ao servidor de API um endereço privado. Os intervalos de IP autorizados limitam, em vez disso, um servidor de API público, mas não funcionam com clusters privados.
[600ms]
[serious] Dentro do cluster, por padrão, todo pod consegue falar com qualquer outro pod. Uma network policy muda isso.

## Step 7 · AKS configuration: guardrails before pods run

[curious] As verificações de admissão olham cada requisição ao servidor de API. Assim, um pod arriscado é barrado antes mesmo de iniciar.
[600ms]
[calm] O complemento do Azure Policy para AKS aplica definições internas, como o pod security baseline. Para bloquear, mude o efeito de audit para deny.
[600ms]
[confident] O Pod Security Admission também vem ativado por padrão no AKS, e ele usa labels no namespace.

## Step 8 · Container Instances: identity, network, secrets

[calm] Um grupo de contêineres no Container Instances pode usar uma identidade gerenciada, entrar na sua rede virtual e esconder as senhas.
[600ms]
[serious] Adicionar ou alterar uma identidade em um grupo em execução reinicia o grupo. Em uma rede virtual, o grupo precisa da própria sub-rede e de um gateway NAT para o tráfego de saída.
[600ms]
[reassuring] Guarde as senhas como valores seguros, que mostram só o nome nas propriedades.

## Step 9 · Container Apps: identity, ingress and secrets

[confident] No Container Apps, exponha só o que precisa ser público. O ingress interno só é acessível de dentro do ambiente.
[600ms]
[calm] Deixe os seus apps usarem uma identidade gerenciada, para que não precisem carregar credenciais.
[600ms]
[serious] Em produção, guarde os valores secretos como referências ao Key Vault. E lembre que algumas funções usam ações com curinga, que incluem listar segredos.

## Step 10 · Runtime threat: an alert, start to finish

[serious] Agora acompanhe um ataque a um contêiner em execução, do primeiro processo suspeito até a resposta.
[600ms]
[curious] O Defender for Containers usa o sensor dele e os logs de auditoria do Kubernetes. Ele consegue detectar mineração de criptomoedas, web shells, binary drift e atividade suspeita de DNS.
[600ms]
[confident] Os alertas são mapeados para o framework de ataques da MITRE, aparecem no Defender for Cloud e podem ser investigados no Microsoft Defender XDR.

## Step 11 · Which control for which layer?

[excited] Hora de praticar. Escolha um controle e depois escolha a camada que ele protege.
[600ms]
[calm] São oito controles e quatro camadas: registro e imagem, AKS, Container Instances e Container Apps, e runtime.
[600ms]
[encouraging] Se algum cair no lugar errado, tente de novo. O que fica é o raciocínio.

## Step 12 · Recap: protect the image, the cluster, the runtime

[calm] Proteja o que você entrega, como o cluster é configurado e o que roda. O Defender vigia os três.
[600ms]
[confident] Essas são habilidades avaliadas na S C 500, em proteger a computação com contêineres. Pratique com o classificador e depois leia o guia de estudo oficial.
[600ms]
[proud] Proteja a imagem, o cluster e o runtime, e o orders-api da Contoso fica muito mais difícil de atacar.
