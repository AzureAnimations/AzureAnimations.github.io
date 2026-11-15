# Narrator Script — Foundry · Image and Video Generation

**Source animation:** [ImageAndVideoGeneration.html](../../../../journeys/AI/Foundry/ImageAndVideoGeneration.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/ai-foundry/openai/how-to/dall-e>
- <https://learn.microsoft.com/azure/ai-foundry/openai/concepts/video-generation>
- <https://learn.microsoft.com/azure/ai-foundry/openai/concepts/content-credentials>

---

## Step 1 · Models that read, models that make

[calm] Alguns modelos leem. Um modelo de visão olha para uma imagem e responde em texto.
[600ms]
[curious] Um modelo de imagem generativa faz o contrário. Ele pega suas palavras e cria uma imagem totalmente nova.
[600ms]
[confident] Contoso Outdoor é nossa empresa fictícia aqui, e cada imagem é um desenho simples substituindo o resultado de um modelo.

## Step 2 · Noise in, image out

[curious] Muitos modelos de imagem são modelos de difusão. Eles começam com ruído aleatório e o refinam, passo a passo, até que uma imagem aparece.
[600ms]
[calm] Seu prompt guia cada um desses passos, e um início aleatório diferente dá uma imagem diferente.
[600ms]
[reflective] Os modelos diferem no design, então trate isso como a ideia, não a receita.

## Step 3 · Describe what you want

[calm] Um bom prompt nomeia o assunto, o estilo, como ele é estruturado e o que deixar de fora.
[600ms]
[curious] Experimente as opções aqui e veja a imagem mudar a cada uma.
[600ms]
[serious] Restrições vão dentro do prompt, como a ausência de texto. Mas um modelo ainda pode adicionar coisas que você não pediu, então sempre revise o resultado.

## Step 4 · Size, quality, how many

[calm] Ao lado do prompt, você define algumas opções: tamanho, nível de qualidade e quantas imagens pedir.
[600ms]
[curious] Observe a mudança do pedido conforme você escolher. Uma chamada pode devolver de uma a dez imagens.
[600ms]
[reassuring] Imagens de qualidade inferior e quadradas geram mais rápido, e alguns modelos aceitam tamanhos personalizados, então confira o que sua implantação suporta.

## Step 5 · Edit with a mask

[curious] Para mudar apenas uma parte de uma imagem, envie três coisas: a imagem, uma máscara que marca a área e um prompt.
[600ms]
[calm] Tudo fora da máscara permanece exatamente como estava. Aqui, o pincel rosa substitui a máscara.
[600ms]
[confident] No APIde edição, a máscara tem um PNG do mesmo tamanho da imagem, e pixels totalmente transparentes marcam a área a ser alterada.

## Step 6 · Remix with image-to-image

[curious] Dê ao modelo uma imagem existente mais um prompt, e ele cria uma nova abordagem.
[600ms]
[calm] Você pode enviar várias imagens de entrada ao mesmo tempo, até dezesseis em uma única chamada de edição.
[600ms]
[reassuring] Alta fidelidade de entrada mantém mais detalhes do original, embora nem todo modelo suporte essa configuração, então confira o seu.

## Step 7 · From prompt to short clip

[curious] Modelos de vídeo transformam texto, uma imagem ou um clipe existente em um vídeo curto.
[600ms]
[calm] Ele roda como um trabalho. Você envia, verifica o status e depois baixa o resultado.
[600ms]
[serious] A geração de vídeo com Sora 2 é um recurso de pré-visualização em Foundry, então detalhes e disponibilidade podem mudar.

## Step 8 · Filters on the way in and out

[serious] Guardrails verifica o aviso antes do modelo rodar e verifica a foto depois que ele for feito.
[600ms]
[calm] Solicitações ou resultados inseguros são bloqueados, e seu app recebe um erro de volta.
[600ms]
[confident] Eles são alimentados pelo Azure AI Content Safety, que classifica conteúdos de ódio, sexual, violência e automutilação, e você pode configurar os níveis para sua implantação.

## Step 9 · Show it was made by AI

[curious] Imagens de Azure OpenAI modelos de imagem carregam Credenciais de Conteúdo: metadados assinados que afirmam que a imagem foi gerada AI.
[600ms]
[calm] Modelos suportados também podem adicionar uma marca d'água invisível, que pode sobreviver mesmo quando os metadados são removidos.
[600ms]
[reassuring] Credenciais de Conteúdo seguem o padrão de C2PA aberto, então qualquer pessoa pode conferi-las com uma ferramenta de verificação.

## Step 10 · Deploy it, try it, call it

[calm] Em Foundry, você implanta um modelo de imagem, tenta seus prompts no playground de Imagens e então copia o código gerado.
[600ms]
[confident] Esse código chama a mesma implantação do seu app. Nenhuma chave ou endpoint real é mostrado aqui.
[600ms]
[serious] Prefira Microsoft Entra ID login sem chave ao invés de API teclas e espere limites de taxa, então tente novamente com o back-off.

## Step 11 · Create, protect, ship

[calm] Aperte e ajuste as opções. Edite com máscaras e variações. Adicione guarda-corpos e procedência.
[600ms]
[confident] Depois, implemente tudo pelo Foundry, para que seu app possa chamá-lo.
[600ms]
[proud] Habilidades mediram a mudança, então abra os guias oficiais de estudo para confirmar o que os exames cobrem hoje.
