# Narrator Script — Microsoft 365 Copilot · Zero Trust and Defender XDR

**Source animation:** [ZeroTrustAndDefender.html](../../../journeys/Copilot/ZeroTrustAndDefender.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/security/zero-trust/zero-trust-overview>
- <https://learn.microsoft.com/entra/identity-platform/authentication-vs-authorization>
- <https://learn.microsoft.com/defender-xdr/microsoft-365-defender>
- <https://learn.microsoft.com/defender-xdr/incidents-overview>

---

## Step 1 · One password, every door

[curious] Conheça Alex, Mei, Jo e um intruso, todos em Contoso. No modelo antigo, qualquer um dentro da rede era confiável.
[600ms]
[serious] Os ataques de hoje vão atrás da identidade. Um e-mail de phishing, um login roubado, e o intruso entra por todas as portas.
[600ms]
[calm] Esta lição acompanha as Microsoft 365 habilidades de princípios de segurança do exame A B 900.

## Step 2 · Three Zero Trust principles

[confident] Zero Trust se baseia em três princípios: verificar explicitamente, usar acesso de menor privilégio e assumir violação.
[600ms]
[calm] Eles orientam cada decisão de acesso e todos os controles de segurança em Microsoft 365.
[600ms]
[reflective] A grande mudança é da confiança por padrão para a confiança por exceção. Nada entra só por causa de onde ele está.

## Step 3 · Authentication, then authorization

[curious] Duas palavras que soam parecidas, mas fazem funções diferentes. A autenticação prova quem você é.
[600ms]
[confident] A autorização decide o que você pode fazer depois de ser conhecido. Um pedido precisa dos dois, e nenhum substitui o outro.
[600ms]
[calm] Em Microsoft 365, a autorização vem de coisas como funções Microsoft Entra, funções Exchange e permissões de site.

## Step 4 · Password, MFA, passwordless

[calm] Imagine uma escada de métodos de login. Na parte inferior há uma senha simples, que é a coisa mais fácil para um atacante roubar.
[600ms]
[confident] Cada passo acima torna uma senha roubada menos útil. A autenticação multifator adiciona uma segunda prova, e a senha sem senha remove a senha completamente.
[600ms]
[encouraging] Microsoft recomenda métodos resistentes a phishing como Windows Hello for Business e chaves de acesso. Administradores escolhem métodos permitidos na política de métodos de autenticação.

## Step 5 · Four ways in, four defenders

[curious] Os atacantes Microsoft 365 alcançam por quatro caminhos: e-mail, dispositivos, identidades e aplicativos.
[600ms]
[confident] A proteção contra ameaças coloca um produto Microsoft Defender em cada caminho, e cada um observa sua própria área.
[600ms]
[calm] Microsoft Defender XDR os une, e Microsoft Entra ID Proteção ajuda a proteger identidades também.

## Step 6 · Threat intelligence

[curious] Saber o que os atacantes estão fazendo é metade da batalha. A inteligência de ameaças também te diz se isso te afeta.
[600ms]
[confident] Em Microsoft Defender, a análise de ameaças entrega esses relatórios. Eles vêm de pesquisadores de segurança Microsoft, além de fontes de código aberto selecionadas.
[600ms]
[calm] A campanha, as respostas e o relatório na tela são um exemplo inventado.

## Step 7 · Defender XDR: one incident

[concerned] Cada produto Defender gera seus próprios alertas, e uma pilha de alertas separados é difícil de interpretar como um único ataque.
[600ms]
[confident] Microsoft Defender XDR correlaciona os alertas relacionados em um único incidente. Isso te dá uma história de ataque em vez de muitos fragmentos.
[600ms]
[impressed] Um alerta é um sinal, um incidente é o quadro completo, e você trabalha nele no portal Microsoft Defender.

## Step 8 · Automated investigation and response

[curious] Defender XDR não precisa esperar por um analista, pois pode investigar o incidente por conta própria.
[600ms]
[confident] Cada prova recebe um veredito: maliciosa, suspeita ou nenhuma ameaça encontrada. Depois, pode tomar medidas de remediação.
[600ms]
[reassuring] Dependendo da configuração, as ações são executadas automaticamente ou aguardam a aprovação da sua equipe de segurança. Cada ação está listada no Centro de Ações.

## Step 9 · Advanced hunting

[curious] Às vezes, sua equipe tem sua própria dúvida. Caça avançada permite que ela busque dados brutos coletados pelos produtos Defender.
[600ms]
[confident] Isso abrange Defender para Office 365, Endpoint, Identidade e Aplicativos em Nuvem, com até trinta dias de dados brutos.
[600ms]
[encouraging] O modo guiado é um construtor de consultas, e o modo avançado usa a Linguagem de Consultas Kusto. Uma boa consulta pode até se tornar uma regra de detecção personalizada.

## Step 10 · Which principle applies?

[encouraging] Agora é sua vez. Escolha um cenário e depois escolha o princípio de Zero Trust que se aplica.
[600ms]
[curious] Você verá como cada um aparece em Microsoft 365: MFA e Acesso Condicional para verificar explicitamente, papéis e permissões para o privilégio mínimo.
[600ms]
[confident] E detecção e resposta em Defender XDR é como você assume violação.

## Step 11 · Zero Trust, then Defender XDR

[calm] Vamos nos recompor. Verifique explicitamente, use o privilégio mínimo e assuma violação.
[600ms]
[confident] Defender XDR então coloca esses princípios em prática: detecta, correlaciona, responde e caça.
[600ms]
[proud] Compare a A B 900 habilidades medidas e leia o guia de estudo atual sobre Microsoft Learn, porque as habilidades mudam com o tempo.
