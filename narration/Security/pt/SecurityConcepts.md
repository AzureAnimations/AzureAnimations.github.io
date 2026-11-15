# Narrator Script — Security · Security, Compliance and Identity Concepts: the shared vocabulary

**Source animation:** [SecurityConcepts.html](../../../journeys/Security/SecurityConcepts.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/describe-security-concepts-methodologies/>
- <https://learn.microsoft.com/training/modules/describe-identity-principles-concepts/>

---

## Step 1 · Security, compliance and identity

[calm] A Contoso está prestes a abrir um portal para clientes. Antes do lançamento, três perguntas diferentes precisam de resposta.
[600ms]
[curious] Segurança protege dados e sistemas contra ameaças. Conformidade é cumprir as leis e os padrões que se aplicam. Identidade diz quem ou o que está envolvido.
[600ms]
[confident] Parecem a mesma coisa, mas não são. Conformidade, em particular, não é o mesmo que segurança.

## Step 2 · Shared responsibility

[calm] Quando você sai do on-premises e vai para software como serviço, o provedor de nuvem assume mais partes da pilha.
[600ms]
[serious] Mas algumas responsabilidades nunca mudam de lugar. Em qualquer modelo, seus dados, suas identidades e acessos, seus endpoints e suas escolhas de configuração continuam com você.
[600ms]
[reassuring] Onde exatamente fica essa linha depende do serviço, então consulte a documentação do provedor de cada serviço que você usa.

## Step 3 · Defense in depth

[calm] A defesa em profundidade usa camadas de proteção que trabalham juntas. Quando uma camada falha, a seguinte ainda fica entre o atacante e os dados.
[600ms]
[curious] Aqui, uma senha roubada passa pela camada de identidade, mas a segmentação de rede ainda barra o atacante.
[600ms]
[confident] As camadas servem à confidencialidade, à integridade e à disponibilidade, com os dados na camada mais interna.

## Step 4 · Zero Trust

[calm] Zero Trust significa nunca confiar, sempre verificar. Acompanhe uma solicitação de acesso vinda de um local desconhecido, em um dispositivo não gerenciado.
[600ms]
[confident] Três princípios guiam essa abordagem: verificar explicitamente, usar o acesso de privilégio mínimo e presumir a violação.
[600ms]
[reflective] O Zero Trust é uma estratégia, não um produto único, então cada princípio aparece como uma verificação diferente ao longo do caminho.

## Step 5 · Encryption

[calm] A criptografia deixa os dados inúteis sem a chave. A criptografia simétrica usa a mesma chave nos dois sentidos, o que é rápido, mas dificulta compartilhar a chave.
[600ms]
[curious] A criptografia assimétrica usa um par de chaves. O que a chave pública criptografa, só a chave privada consegue descriptografar, então a chave pública pode ser compartilhada à vontade.
[600ms]
[serious] Guarde as chaves em um serviço gerenciado, como o Azure Key Vault, longe dos dados. O texto embaralhado é inventado.

## Step 6 · Hashing

[curious] Um hash é uma impressão digital de mão única. O sistema guarda só a impressão digital da senha e a compara a cada login.
[600ms]
[confident] O hash não usa chave e não dá para reverter. A mesma entrada sempre gera o mesmo hash.
[600ms]
[reassuring] Sistemas reais também acrescentam um salt único, para que duas senhas iguais não gerem hashes iguais. Estes valores são inventados e abreviados.

## Step 7 · Encryption or hashing?

[curious] Seis exemplos do dia a dia, duas caixas. Faça uma pergunta para cada um: você precisa recuperar o original?
[600ms]
[confident] Se a resposta for sim, ele vai para a criptografia, como dados em repouso ou tráfego por HTTPS. Se for não, vai para o hash, como o armazenamento de senhas ou a verificação de um arquivo baixado.
[600ms]
[encouraging] Separe você mesmo primeiro e depois veja onde cada um cai.

## Step 8 · Governance, risk and compliance

[calm] Governança, risco e conformidade respondem a três perguntas. Quem define as regras, o que pode dar errado e conseguimos provar que as seguimos?
[600ms]
[confident] A gestão de riscos identifica, avalia, responde e monitora os riscos. A resposta pode ser aceitar, mitigar, transferir ou evitar.
[600ms]
[serious] Conformidade é o mínimo que as regras exigem, não toda a segurança. As equipes da Contoso aqui são fictícias.

## Step 9 · Identity is the new perimeter

[calm] Antigamente, o limite era a rede. Depois, os aplicativos em nuvem, o trabalho remoto e os dispositivos pessoais deslocaram essa borda.
[600ms]
[curious] Agora a pergunta é: quem ou o que está pedindo acesso? Pode ser uma pessoa, um dispositivo, uma carga de trabalho ou um agente.
[600ms]
[serious] Quase todo ataque bem-sucedido acaba dependendo de comprometer ou abusar de uma identidade, e é por isso que a identidade importa tanto.

## Step 10 · Authentication and authorization

[calm] Primeiro, prove quem você é. Isso é autenticação. Depois, descubra o que você pode fazer. Isso é autorização, e ela sempre vem em segundo lugar.
[600ms]
[confident] Um provedor de identidade cuida da primeira parte e emite tokens que carregam claims. Um token de ID prova que você fez login, e um token de acesso dá permissão a um recurso.
[600ms]
[reflective] Protocolos comuns são OpenID Connect, OAuth dois vírgula zero e SAML.

## Step 11 · Active Directory and the cloud

[calm] O Active Directory Domain Services foi criado para redes locais. Ele guarda usuários, dispositivos e grupos, e o servidor que o executa é um controlador de domínio.
[600ms]
[curious] Ele não lida nativamente com o login em software como serviço. O Microsoft Entra ID é o diretório feito para a nuvem.
[600ms]
[reassuring] Os dois podem ser conectados por sincronização, e isso se chama identidade híbrida.

## Step 12 · Federation and recap

[calm] A federação permite que a Contoso aceite o login de um parceiro, e assim ninguém precisa criar uma conta nova.
[600ms]
[serious] É uma relação de confiança entre provedores de identidade separados, e a confiança não é bidirecional automaticamente. Uma confiança bidirecional precisa ser configurada de propósito.
[600ms]
[proud] Isso cobre a primeira área de habilidades do S C 900, os conceitos de segurança, conformidade e identidade. Confira o guia de estudo atual.
