# Narrator Script — Network · Protect and observe your network: DDoS, flow logs and traffic analytics

**Source animation:** [NetworkProtection.html](../../../journeys/Network/NetworkProtection.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/ddos-protection/ddos-protection-overview>
- <https://learn.microsoft.com/azure/network-watcher/vnet-flow-logs-overview>

---

## Step 1 · A busy Friday, or an attack?

[calm] É uma sexta-feira de movimento, e o IP público da Contoso Shop está sobrecarregado. Os clientes não conseguem finalizar a compra.
[600ms]
[concerned] É uma promoção ou um ataque? Quem mandou esse tráfego, e o que consegue absorver tudo isso?
[600ms]
[serious] Um ataque DDoS manda mais tráfego do que a aplicação aguenta, e os usuários reais não conseguem passar.

## Step 2 · Three kinds of DDoS attack

[curious] Existem três tipos de ataque: inundar o canal, abusar do handshake ou imitar usuários reais da web.
[600ms]
[calm] As camadas três e quatro transportam pacotes e conexões. A camada sete é a aplicação. Cada tipo é barrado em uma camada diferente.
[600ms]
[confident] O Azure DDoS Protection mitiga ataques nas camadas três e quatro. Para a camada sete, você adiciona um firewall de aplicativo web.

## Step 3 · Three levels of DDoS cover

[calm] Todo IP público recebe uma proteção básica da plataforma.
[600ms]
[curious] Dois níveis pagos, o DDoS IP Protection e o DDoS Network Protection, ajustam essa proteção ao seu app e acrescentam alertas, logs e mais.
[600ms]
[reassuring] Os dois compartilham a mesma engenharia central e se diferenciam nos serviços de valor agregado. Veja os custos na página de preços.

## Step 4 · Absorb, scrub, forward

[calm] Passando do limite aprendido, o Azure absorve e filtra a inundação com a sua rede global.
[600ms]
[confident] Só o tráfego legítimo é encaminhado para o seu app.
[600ms]
[impressed] O ajuste adaptativo em tempo real usa um perfil de tráfego baseado em machine learning para definir os limites de cada IP público protegido, então você não precisa ajustar limiares à mão.

## Step 5 · See the attack while it happens

[curious] Métricas, alertas e logs mostram um ataque em andamento e o que foi descartado.
[600ms]
[confident] O Network Protection também inclui uma equipe de resposta rápida. Envie os logs de DDoS para um espaço de trabalho do Log Analytics, com uma configuração de diagnóstico.
[600ms]
[serious] Teste só com um parceiro de simulação aprovado, nunca contra alvos que não são seus.

## Step 6 · Layer the defences

[calm] Nenhum controle cobre tudo sozinho. O DDoS Protection cuida das inundações nas camadas três e quatro.
[600ms]
[curious] Um WAF lê as solicitações web na camada sete, e os NSGs e um firewall decidem quem entra e quem sai.
[600ms]
[confident] Um desenho comum coloca um IP público protegido contra DDoS em um Application Gateway com WAF, na frente de sub-redes protegidas por NSGs.

## Step 7 · What a flow log records

[curious] Cada fluxo de IP pela rede virtual vira um pequeno registro: quem falou com quem, em qual porta e se foi permitido ou negado.
[600ms]
[calm] Cada registro também traz a interface de rede, o protocolo, o estado do fluxo, o estado da criptografia e a contagem de pacotes e de bytes.
[600ms]
[reassuring] Você precisa ter o provedor de recursos Microsoft.Insights registrado e uma conta de armazenamento Standard na mesma região.

## Step 8 · One switch replaces many

[serious] Os logs de fluxo de NSG serão desativados em trinta de setembro de dois mil e vinte e sete, e não dá mais para criar novos.
[600ms]
[confident] Ative o log de fluxo uma vez, na rede virtual, em vez de ativar em cada NSG.
[600ms]
[concerned] Desligue os logs de fluxo de NSG antes de ativar os logs de fluxo de rede virtual nas mesmas cargas de trabalho, ou você pode registrar e pagar pelo mesmo tráfego duas vezes.

## Step 9 · Traffic analytics: patterns, not rows

[calm] Os logs de fluxo brutos são linhas. O Traffic Analytics transforma essas linhas em padrões.
[600ms]
[curious] Ele lê os logs, une as repetições, acrescenta geografia e contexto de segurança e guarda o resultado em um espaço de trabalho do Log Analytics.
[600ms]
[serious] Você precisa do Network Watcher, de um espaço de trabalho e de uma rede virtual com o log de fluxo ativado. Confira antes a tabela de regiões, porque nem toda região é compatível.

## Step 10 · Ask the network, check the posture

[calm] O Network Watcher responde a uma pergunta na hora, com ferramentas como diagnóstico de NSG, next hop e regras de segurança efetivas.
[600ms]
[confident] O Defender for Cloud verifica sua configuração o tempo todo e lista o que precisa ser corrigido.
[600ms]
[reassuring] A pontuação de segurança resume esses achados em um único número. Quanto maior, menor o risco identificado.

## Step 11 · Pick a threat, see what reacts

[curious] Escolha um ataque ou um erro.
[600ms]
[confident] O caminho mostra qual controle reage e onde você veria isso.
[600ms]
[reflective] Quatro ameaças comuns e quatro respostas diferentes. A maioria das defesas reais combina várias delas.

## Step 12 · Absorb, block, record, flag

[calm] Absorva com o DDoS Protection, bloqueie com WAF, NSGs e firewall, registre com os logs de fluxo e sinalize com o Defender for Cloud.
[600ms]
[confident] Combine os controles em camadas e use logs e recomendações para ver o que realmente está acontecendo na sua rede.
[600ms]
[proud] O A Z 700 cita essas habilidades diretamente, e o A Z 305 pede que você escolha a solução certa para segurança e monitoramento de rede.
