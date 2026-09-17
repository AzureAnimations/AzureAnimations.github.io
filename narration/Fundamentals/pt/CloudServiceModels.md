# Roteiro de narração - Modelos de serviço de nuvem

**Source animation:** journeys/Fundamentals/CloudServiceModels.html
**Script status:** Authored voiceover.
**Language:** Português (Brasil)

As indicações entre colchetes não são faladas. As pausas ficam em linhas separadas. Cada bloco corresponde a uma etapa da animação.
<!-- Source: https://learn.microsoft.com/azure/security/fundamentals/shared-responsibility -->

## Step 1 · Who patches the server?

[calm] A equipe da Contoso quer preparar a próxima promoção, mas o servidor da loja também precisa de uma atualização de segurança. Alguém deve manter cada camada que faz a aplicação funcionar.
[600ms]
[confident] Os modelos de serviço de nuvem respondem a uma pergunta prática: o que continua com a Contoso e o que a Microsoft assume?

## Step 2 · Run it yourself

[calm] Comece pela base: equipamento físico, depois sistema operacional e, por cima, aplicação e dados. No ambiente local, a Contoso cuida de todas essas camadas.
[600ms]
[confident] Isso dá controle à equipe, mas também responsabilidade pela manutenção, pela segurança e pelo funcionamento de todo o sistema.

## Step 3 · Rent the infrastructure

[calm] Agora a Microsoft cuida da infraestrutura física que sustenta a loja. A Contoso aluga uma máquina virtual, mas mantém o sistema operacional, a aplicação e os dados.
[600ms]
[confident] Isso é infraestrutura como serviço, ou IaaS. O trabalho com hardware passa à Microsoft; as atualizações do sistema operacional convidado continuam com a Contoso.

## Step 4 · Use a managed platform

[calm] Suba mais uma camada. Na plataforma como serviço, ou PaaS, a Microsoft também opera o sistema operacional e o ambiente de execução que faz a aplicação funcionar.
[600ms]
[confident] A Contoso pode se concentrar no código e nos dados da loja, mantendo a responsabilidade pelas configurações, pelo acesso e pela segurança da aplicação que lhe cabe.

## Step 5 · Subscribe to finished software

[calm] Os funcionários do depósito precisam de software de trabalho, não de outra aplicação para desenvolver. Software como serviço, ou SaaS, oferece uma aplicação pronta, com sua plataforma operada pelo provedor.
[600ms]
[confident] A Contoso gerencia como os funcionários a utilizam. Isso não transforma sua loja online personalizada em uma aplicação SaaS pronta.

## Step 6 · Some work stays with Contoso

[calm] Mais camadas gerenciadas não eliminam as responsabilidades. A Contoso ainda decide quem pode entrar, o que essas pessoas podem acessar e como tratar as informações dos clientes.
[600ms]
[confident] Dados, identidades, acessos e dispositivos relevantes precisam de proteção. Responsabilidade compartilhada significa entender o limite, não presumir que o provedor faz tudo.

## Step 7 · Cloud Service Models - All in One

[calm] Compare as camadas: IaaS fornece infraestrutura, PaaS oferece uma plataforma gerenciada para aplicações e SaaS entrega software pronto. Cada modelo transfere uma parte diferente da operação para a Microsoft.
[600ms]
[confident] A Contoso pode combinar modelos conforme o trabalho. Agora precisa organizar com clareza os recursos que vai criar.