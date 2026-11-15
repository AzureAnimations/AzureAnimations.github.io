# Narrator Script — Foundry · Build lightweight Foundry apps in Python

**Source animation:** [FoundryCodeAlong.html](../../../../journeys/AI/Foundry/FoundryCodeAlong.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/quickstarts/get-started-code>
- <https://learn.microsoft.com/azure/developer/python/sdk/authentication/credential-chains>
- <https://learn.microsoft.com/azure/foundry/openai/how-to/responses>
- <https://learn.microsoft.com/azure/foundry/openai/audio-completions-quickstart>

---

## Step 1 · A small app, three things to start

[calm] Um cliente leve é só um script curto em Python, aqui para a Contoso Outfitters. Todos os dados são inventados.
[600ms]
[confident] O trabalho pesado roda no Foundry. Seu código envia uma requisição e usa a resposta.
[600ms]
[curious] O Microsoft Learn descreve o Foundry SDK como um cliente leve sobre as APIs do projeto. Esta lição usa o pacote Azure AI Projects, versão dois ponto x.

## Step 2 · Set up and sign in

[calm] Rode az login uma vez e instale o pacote. Depois deixe o DefaultAzureCredential encontrar a sua identidade.
[600ms]
[confident] Ele funciona como uma cadeia: tenta as fontes de login em ordem, como as configurações de ambiente, uma identidade gerenciada no Azure ou o seu login pela linha de comando do Azure.
[600ms]
[reassuring] Assim funciona localmente e em produção, e nenhuma chave vai parar no código.

## Step 3 · Chat with a model

[curious] Crie o cliente do projeto e peça a ele um cliente OpenAI.
[600ms]
[confident] Envie um prompt com a chamada responses create e imprima a resposta.
[600ms]
[serious] No argumento model, use o nome do deployment do seu próprio modelo. É a mesma chamada do quickstart do Learn.

## Step 4 · Analyze text

[curious] O cliente Azure Language lê a avaliação de um cliente e devolve o sentimento, as frases-chave e os dados pessoais, cada um com uma chamada de método.
[600ms]
[calm] Para entrar com Microsoft Entra ID, é preciso um endpoint com subdomínio personalizado.
[600ms]
[concerned] O Learn lista a análise de sentimento e a extração de frases-chave entre os recursos com desativação programada, enquanto a detecção de dados pessoais continua. Confira a página atual do Learn antes de começar um projeto novo.

## Step 5 · Speak and transcribe

[calm] O cliente Azure Speech transforma texto em um arquivo de áudio e depois converte esse áudio de volta em texto.
[600ms]
[curious] Os dois sentidos usam a mesma configuração de voz. O Learn monta essa configuração com uma chave e um endpoint guardados em variáveis de ambiente.
[600ms]
[confident] Reconhecer uma vez trata uma única fala, que dura até trinta segundos ou até haver silêncio.

## Step 6 · Ask about an image

[curious] Uma implantação de modelo que aceita imagens pode responder perguntas sobre elas.
[600ms]
[confident] Envie a imagem e a sua pergunta juntas, em uma única mensagem.
[600ms]
[calm] O Learn lista três formas de fornecer a imagem: uma URL pública, um data URI em Base64 ou um ID de arquivo da Files API. Use uma implantação com suporte a visão.

## Step 7 · Send a spoken prompt

[curious] Um modelo com suporte a áudio recebe a própria gravação como entrada. Não existe uma etapa separada de transcrição antes da resposta.
[600ms]
[calm] O quickstart do Learn usa chat completions com modalidades de texto e áudio, e um arquivo WAV codificado em Base64 como áudio de entrada.
[600ms]
[serious] A disponibilidade dos modelos varia por região, então confira antes a página de modelos.

## Step 8 · Extract from files

[curious] Um único cliente do Content Understanding lida com três tipos de entrada. Escolha o analisador pré-criado para o tipo de arquivo e leia o resultado estruturado.
[600ms]
[confident] O analisador de faturas devolve campos, o de imagens descreve uma imagem e o de áudio faz a transcrição com um resumo.
[600ms]
[serious] Antes de tudo, os analisadores precisam de implantações de modelos configuradas no seu recurso Foundry. O README do Learn lista quais modelos cada um exige.

## Step 9 · Call an agent

[calm] O agente já está no seu projeto, com as instruções e o modelo dele.
[600ms]
[confident] O cliente só precisa do nome do agente, de uma conversa e de uma mensagem. Você recebe um cliente OpenAI vinculado a esse agente.
[600ms]
[impressed] A conversa guarda o histórico entre os turnos, então as perguntas seguintes funcionam normalmente.

## Step 10 · Handle errors and clean up

[serious] Trate os erros em que dá para agir. O Learn recomenda não tentar de novo nos erros quatrocentos, quatro zero um, quatro zero três e quatro zero quatro.
[600ms]
[calm] Considere tentar de novo com backoff no quatro vinte e nove e nos erros de servidor. Um quatro zero três indica falta de permissão, então faça login com Entra ID em vez de chaves e apague o que você criou.
[600ms]
[proud] Esses seis clientes são as habilidades práticas do guia de estudo A I 901.
