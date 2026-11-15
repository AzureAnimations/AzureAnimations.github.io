# Narrator Script — Compute · App Service · Custom Domains, TLS & Backup

**Source animation:** [AppServiceDomainsAndBackup.html](../../../journeys/Compute/AppServiceDomainsAndBackup.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/app-service/configure-ssl-bindings>
- <https://learn.microsoft.com/azure/app-service/manage-backup>
- <https://learn.microsoft.com/azure/app-service/faq-configuration-and-management>

---

## Step 1 · Your App Has a Name. Just Not Yours.

[curious] Todo app do App Service recebe um nome padrão que termina em azurewebsites ponto net.
[600ms]
[confident] A Contoso quer o próprio nome www nesse mesmo app, com um cadeado no navegador.
[600ms]
[reassuring] Para isso, primeiro vem o DNS, depois um certificado. E também vamos ver como recuperar o app se algo der errado.

## Step 2 · Which Tiers Allow It?

[calm] Nomes personalizados, certificados e backups dependem do tipo de plano do App Service em que o app roda.
[600ms]
[confident] O Free não tem domínio personalizado. O Shared aceita um domínio personalizado, mas não TLS personalizado. Do Basic para cima, você ganha TLS bindings e backups.
[600ms]
[reflective] Confira o tipo de plano antes de planejar. De propósito, os preços não aparecem aqui, então use a página oficial de preços.

## Step 3 · The Custom-Domain Walk

[curious] São seis etapas, de um registro DNS até uma porta trancada.
[600ms]
[confident] Você adiciona o registro, verifica, adiciona o domínio, obtém um certificado, faz o binding e, por fim, exige somente HTTPS. Selecione qualquer etapa para ver o que você faz ali e o que pode falhar.
[600ms]
[serious] A ordem importa. O DNS vem primeiro, porque o App Service confere o DNS antes de adicionar o nome.

## Step 4 · Two Records, One Proof

[calm] Um registro DNS aponta o seu nome para o app. Para um subdomínio, é um CNAME, e para o domínio raiz, um registro A.
[600ms]
[confident] Um registro TXT com o ID de verificação do domínio prova que o domínio é seu.
[600ms]
[reflective] Você adiciona esses registros no seu provedor de DNS, com os valores da janela Adicionar domínio personalizado. Valide e adicione, e a linha ainda aparece sem binding.

## Step 5 · Choose a Certificate

[curious] O App Service oferece quatro formas de conseguir um certificado.
[600ms]
[confident] O certificado gerenciado é gratuito e se renova sozinho, mas não aceita curinga. Você também pode comprar um certificado do App Service, importar um do Key Vault ou enviar o seu próprio arquivo P F X.
[600ms]
[serious] Dá para enviar certificados públicos também, mas eles servem para o seu código chamar outros serviços, não para proteger um domínio personalizado.

## Step 6 · Bind It: SNI or IP-Based

[calm] Um TLS binding liga um certificado a um domínio personalizado, e é isso que protege o domínio.
[600ms]
[confident] A maioria dos apps usa SNI, em que o navegador envia o nome do host, e assim um único endereço IP atende vários certificados.
[600ms]
[reflective] O SSL baseado em IP dá a um certificado o seu próprio endereço dedicado, e exige o plano Standard ou superior.

## Step 7 · Lock the Door

[serious] Agora, tranque a porta. Três configurações gerais decidem como os clientes podem se conectar.
[600ms]
[confident] O HTTPS Only redireciona todo o tráfego sem criptografia para HTTPS. O TLS mínimo define a versão mais baixa que o app aceita.
[600ms]
[calm] Os certificados de cliente adicionam autenticação mútua, e o seu código é quem valida esses certificados. Isso exige o plano Basic ou superior.

## Step 8 · Keep the Padlock Fresh

[concerned] Certificados expiram, e um cadeado vencido afasta os visitantes.
[600ms]
[confident] Se a renovação é automática, depende da origem do certificado. Os certificados gerenciados se renovam sozinhos, e os bindings acompanham.
[600ms]
[serious] Os certificados do Key Vault e do App Service sincronizam a cada vinte e quatro horas. Um P F X enviado por você fica por sua conta: substitua o arquivo e faça o binding de novo.

## Step 9 · Your Safety Net: Backups

[calm] O App Service faz backup do seu app por você, sem nenhuma configuração, e você ainda pode criar backups personalizados em uma conta de armazenamento que você controla.
[600ms]
[confident] Os backups automáticos rodam a cada hora, mas não dá para baixá-los. Os backups personalizados seguem a sua programação e podem ser parciais.
[600ms]
[reflective] Cada backup é uma cópia completa, não incremental. Backups exigem o plano Basic ou superior, e no Basic só o slot de produção é coberto.

## Step 10 · What a Backup Holds

[curious] E o que vem dentro desse backup? O conteúdo do app volta, junto com algumas configurações.
[600ms]
[serious] Rede, identidade, slots e as configurações de domínio personalizado e de TLS não voltam. Por isso, confira tudo de novo depois de uma restauração.
[600ms]
[reflective] Os bancos de dados vinculados só são cobertos por backups personalizados, e esse recurso está sendo desativado. Use o backup do próprio banco de dados.

## Step 11 · Get It Back

[determined] Na hora de recuperar, você pode restaurar por cima do app, em um app novo ou em um slot.
[600ms]
[confident] Em produção, restaure primeiro em um slot e depois faça o swap. O app ou slot de destino fica parado enquanto a restauração roda.
[600ms]
[serious] Depois, confira de novo o domínio personalizado e o TLS binding.

## Step 12 · All in One

[calm] Dê o nome, comprove, proteja, renove, faça backup. Aí você consegue recuperar.
[600ms]
[confident] Ou seja: um registro CNAME ou A mais a prova com o TXT, um certificado e o binding, HTTPS Only e uma versão mínima de TLS.
[600ms]
[proud] Os backups restauram arquivos e algumas configurações, não domínios nem TLS. Tudo isso faz parte dos objetivos de App Service da A Z 104.
