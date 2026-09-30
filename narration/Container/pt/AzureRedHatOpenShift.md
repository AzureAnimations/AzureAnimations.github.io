# Roteiro de narração — Azure Containers · 06 · Azure Red Hat OpenShift

**Source animation:** `journeys/Container/AzureRedHatOpenShift.html`

---

## Step 1 · stack

[confident] O Azure Red Hat OpenShift começa com o mesmo Kubernetes que você viu no AKS.
[600ms]
[calm] E acrescenta toda a plataforma ao redor: console web, registro de imagens, roteamento, builds, pipelines, Operators, monitoramento e logs, em um só produto.
[600ms]
[reassuring] A Microsoft e a Red Hat projetam, operam e dão suporte juntas, com uma única experiência de suporte.
[700ms]
[confident] Ele roda na sua assinatura, aparece na sua fatura do Azure e tem um SLA de disponibilidade de noventa e nove vírgula noventa e cinco por cento.

## Step 2 · resp

[confident] Então, quem faz o quê? Engenheiros de confiabilidade da Microsoft e da Red Hat operam o cluster inteiro.
[600ms]
[calm] Eles corrigem e escalam o plano de controle, mantêm o sistema operacional dos nós de trabalho atualizado e acompanham os alertas e os logs de auditoria.
[600ms]
[calm] Algumas coisas são compartilhadas: o SRE publica cada versão testada e você inicia a atualização; você adiciona nós; e a rede virtual é você quem conecta.
[700ms]
[reassuring] Seus aplicativos, seus dados e seus serviços de desenvolvimento continuam seus, e o SRE só chega ao cluster por um ponto de extremidade privado.

## Step 3 · arch

[confident] Ao contrário do AKS, aqui nada fica oculto. Tudo roda na sua própria rede virtual.
[600ms]
[calm] Três nós do plano de controle rodam o servidor de API e o etcd na sua sub-rede, e pelo menos três nós de trabalho rodam seus Pods em outra.
[600ms]
[calm] Nós de infraestrutura opcionais hospedam o roteador, o registro e o monitoramento, e os balanceadores de carga do Azure levam as chamadas de API e o tráfego.
[700ms]
[intrigued] Selecione qualquer parte do cluster para ver o que ela faz e com o que tomar cuidado.

## Step 4 · hcp

[confident] O ARO tem duas arquiteturas, e as duas oferecem a mesma experiência do OpenShift.
[600ms]
[calm] A padrão mantém tudo na sua assinatura, com pelo menos três nós do plano de controle e três de trabalho, e leva cerca de quarenta e cinco minutos para ser criada.
[600ms]
[intrigued] Os planos de controle hospedados, em versão prévia, levam o plano de controle para uma conta do Azure da Red Hat.
[700ms]
[confident] Você começa com apenas dois nós de trabalho, o cluster fica pronto em cerca de quinze a vinte minutos e os pools de nós são atualizados separadamente.

## Step 5 · projects

[confident] Agora vamos trazer as equipes. Os desenvolvedores entram com o Microsoft Entra ID, usando a conta corporativa e MFA.
[600ms]
[calm] O servidor OAuth integrado do OpenShift aceita esse token do OpenID Connect e concede o acesso.
[600ms]
[calm] As equipes trabalham dentro de projetos: namespaces do Kubernetes que elas mesmas criam, com cotas e políticas de rede.
[700ms]
[reassuring] Conceda admin, edit ou view por projeto, e cada equipe recebe exatamente o acesso de que precisa.

## Step 6 · s2i

[confident] É aqui que o OpenShift brilha para os desenvolvedores: do Git a um aplicativo rodando, sem Dockerfile.
[600ms]
[calm] Um webhook inicia um build Source-to-Image, que combina uma imagem de build da linguagem com o seu código.
[600ms]
[calm] A imagem chega ao registro integrado, acompanhada por um ImageStream, e essa imagem nova dispara uma atualização gradual dos seus Pods.
[700ms]
[impressed] Por fim, uma Route a publica em uma URL HTTPS. Selecione qualquer etapa para ver como funciona.

## Step 7 · routes

[confident] Uma Route publica um Service. O tráfego entra por um balanceador de carga do Azure e chega ao roteador do OpenShift nos nós de infraestrutura.
[600ms]
[calm] Com a terminação edge, o roteador tem o certificado e envia HTTP simples para os seus Pods. É a escolha mais comum.
[600ms]
[calm] Com passthrough, o roteador nunca descriptografa: seu aplicativo mantém o TLS de ponta a ponta.
[700ms]
[reassuring] E com re-encrypt, o tráfego é criptografado nos dois trechos, em troca de gerenciar dois certificados.

## Step 8 · operators

[confident] Operators são software que opera software.
[600ms]
[calm] Você declara o estado que quer em um recurso personalizado. O Operator lê, cria e conserta o aplicativo e informa o status, de novo e de novo, em um loop de reconciliação.
[600ms]
[calm] O próprio OpenShift roda com Operators do cluster, que o SRE mantém gerenciados.
[700ms]
[impressed] E pelo OperatorHub você adiciona Pipelines, GitOps, Serverless, Service Mesh, Virtualization e Operators de parceiros em poucos cliques.

## Step 9 · security

[confident] O OpenShift é seguro por padrão. Todo Pod passa pelas restrições de contexto de segurança antes de rodar.
[600ms]
[calm] Um Pod que pede para rodar como root é rejeitado pela restrição padrão, restricted-v2.
[600ms]
[reassuring] Um Pod que não define usuário é admitido e roda com um ID de usuário aleatório, que não é root, do intervalo do projeto.
[700ms]
[confident] Some a isso a entrada com Entra ID, API e entrada privadas, bloqueio de saída, políticas de rede, nós RHCOS imutáveis e identidades gerenciadas.

## Step 10 · day2

[confident] No dia dois, as atualizações acontecem quando você quiser.
[600ms]
[calm] A Red Hat e a Microsoft publicam uma versão testada, você escolhe o momento e o OpenShift atualiza o plano de controle e depois drena e atualiza os nós um a um, para os aplicativos continuarem atendendo.
[600ms]
[calm] Prometheus e Alertmanager vêm pré-instalados, e os logs da plataforma e de auditoria chegam ao SRE automaticamente.
[700ms]
[reassuring] Conecte pelo Azure Arc para usar o Azure Monitor e envie os logs dos seus aplicativos para o Log Analytics.

## Step 11 · vsaks

[confident] Então, AKS ou ARO? É o mesmo Kubernetes, com outro modelo.
[600ms]
[calm] O AKS é enxuto: o Azure opera um plano de controle oculto e você escolhe cada complemento, inclusive pools de nós Windows se precisar.
[600ms]
[calm] O ARO é a plataforma OpenShift completa, com o SRE da Microsoft e da Red Hat operando o cluster inteiro.
[700ms]
[reassuring] Escolha-o se você já conhece o OpenShift ou quer tudo integrado, e planeje um footprint maior e uma taxa do OpenShift por nó de trabalho.

## Step 12 · recap

[confident] Esse é o Azure Red Hat OpenShift, de ponta a ponta.
[600ms]
[calm] Ele é operado em conjunto, roda na sua assinatura e dá aos desenvolvedores uma plataforma completa: builds, registro, Routes e Operators.
[600ms]
[reassuring] É seguro por padrão e, no dia dois, você decide quando atualizar, com monitoramento integrado.
[700ms]
[impressed] Você concluiu a jornada de contêineres. Aprofunde-se no Microsoft Learn.
