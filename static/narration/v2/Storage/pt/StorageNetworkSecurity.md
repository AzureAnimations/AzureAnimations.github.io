# Roteiro de narração — Azure Storage · Nível avançado · Rede e Private Link

**Source animation:** `static/v2/Storage/StorageNetworkSecurity.html`

---

## Step 1 · goal

[confident] Por padrão, sua conta de armazenamento tem um ponto de conexão público — acessível de qualquer lugar da internet.
[600ms]
[calm] Nosso objetivo é tirá-la da internet pública, para que só as redes em que você confia possam alcançá-la.
[700ms]
[serious] E uma ideia-chave antes de começar: as regras de rede e a identidade são camadas independentes. Uma controla de onde uma solicitação chega; a outra, quem tem permissão para agir.

## Step 2 · firewall

[confident] A primeira camada é o firewall de armazenamento. Ao ativá-lo, a ação padrão passa a negar.
[600ms]
[calm] Agora só os intervalos de I-P e as redes virtuais que você permitir podem alcançar a conta — todo o resto é rejeitado.
[700ms]
[reassuring] Adicione uma exceção de serviços confiáveis para que os serviços próprios do Azure, como backup e monitoramento, continuem passando.

## Step 3 · pe

[confident] Em seguida, adicione um ponto de conexão privado. Através do Azure Private Link, coloque um I-P privado da sua própria sub-rede na frente da conta.
[600ms]
[calm] O tráfego para o storage agora viaja pela sua rede privada em vez de pela internet pública.
[700ms]
[serious] Um detalhe que convém saber — criar um ponto de conexão privado não desliga por si só o ponto de conexão público. Isso é um passo à parte.

## Step 4 · dns

[confident] Para que esse I-P privado seja de fato usado, o nome precisa se resolver para ele. Disso cuida uma zona de DNS privado.
[600ms]
[calm] A zona private-link aponta o nome de host da conta para o endereço privado, então os clientes dentro da sua rede a alcançam de forma privada e automática.
[700ms]
[reassuring] De fora da rede virtual, o mesmo nome ainda se resolve publicamente — que é justamente por que o próximo passo importa.

## Step 5 · lockdown

[confident] Agora feche a porta da frente. Mude o acesso à rede pública para desabilitado.
[600ms]
[calm] A partir daqui, o caminho privado é a única entrada.
[700ms]
[serious] Lembre-se de que a resolução de nomes e o controle de acesso são independentes — desabilitar o acesso público é o que realmente o blinda.

## Step 6 · connect

[confident] Vamos vê-lo funcionar, de ponta a ponta. Seu app, rodando na sub-rede, resolve a URL do storage para o I-P privado.
[600ms]
[calm] Ele se conecta diretamente pela sua rede privada — sem nenhum salto pela internet pública.
[700ms]
[encouraging] Quer um controle ainda mais rígido entre muitos recursos? Adicione um perímetro de segurança de rede.

## Step 7 · recap

[proud] Aí está o panorama completo: firewall com negação padrão, depois um ponto de conexão privado, depois DNS privado, e depois o acesso público desligado.
[700ms]
[encouraging] Prefira pontos de conexão privados com um firewall de negação padrão — é o padrão que mantém o armazenamento verdadeiramente privado.

## Step 8 · spec

[confident] Um nível mais a fundo. Há três formas de controlar a rede de armazenamento.
[600ms]
[calm] O firewall com regras de I-P e de rede virtual; os pontos de conexão de serviço, que mantêm o endereço público mas restringem quem pode usá-lo; e os pontos de conexão privados, que te dão um I-P privado sem nenhuma exposição à internet.
[700ms]
[reassuring] Para um isolamento real, o ponto de conexão privado vence — um endereço privado, acessível só a partir da sua rede.
