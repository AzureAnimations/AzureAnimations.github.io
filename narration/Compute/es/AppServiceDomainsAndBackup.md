# Narrator Script — Compute · App Service · Custom Domains, TLS & Backup

**Source animation:** [AppServiceDomainsAndBackup.html](../../../journeys/Compute/AppServiceDomainsAndBackup.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/app-service/configure-ssl-bindings>
- <https://learn.microsoft.com/azure/app-service/manage-backup>
- <https://learn.microsoft.com/azure/app-service/faq-configuration-and-management>

---

## Step 1 · Your App Has a Name. Just Not Yours.

[curious] Cada aplicación de App Service recibe un nombre predeterminado que termina en azurewebsites punto net.
[600ms]
[confident] Contoso quiere su propio nombre www en esa misma aplicación, con su candadito en el navegador.
[600ms]
[reassuring] Para eso hace falta primero DNS y luego un certificado. Y también veremos cómo recuperar la aplicación si algo sale mal.

## Step 2 · Which Tiers Allow It?

[calm] Los nombres personalizados, los certificados y las copias de seguridad dependen del nivel del plan de App Service en el que corre tu aplicación.
[600ms]
[confident] Free no admite dominio personalizado. Shared permite un dominio personalizado, pero no TLS personalizado. Desde Basic, se agregan enlaces TLS y copias de seguridad.
[600ms]
[reflective] Revisa el nivel antes de planificar. Los precios no se muestran a propósito, así que consulta la página oficial de precios.

## Step 3 · The Custom-Domain Walk

[curious] Seis saltos te llevan de un registro DNS a una puerta con candado.
[600ms]
[confident] Agregas el registro, lo verificas, agregas el dominio, obtienes un certificado, lo vinculas y, al final, exiges solo HTTPS. Selecciona cualquier salto para ver qué haces ahí y qué puede fallar.
[600ms]
[serious] El orden importa. Primero va DNS, porque App Service lo revisa antes de agregar el nombre.

## Step 4 · Two Records, One Proof

[calm] Un registro DNS asocia tu nombre con la aplicación. Para un subdominio es un CNAME, y para el dominio raíz es un registro A.
[600ms]
[confident] Un registro TXT con el ID de verificación del dominio demuestra que el dominio es tuyo.
[600ms]
[reflective] Los agregas en tu proveedor de DNS, con los valores del cuadro de diálogo Agregar dominio personalizado. Validas, lo agregas y la fila todavía no muestra ningún enlace.

## Step 5 · Choose a Certificate

[curious] App Service te puede conseguir un certificado de cuatro maneras.
[600ms]
[confident] Un certificado administrado es gratuito y se renueva solo, pero no admite comodín. También puedes comprar un certificado de App Service, traer uno de Key Vault o subir tu propio archivo P F X.
[600ms]
[serious] También se pueden subir certificados públicos, pero sirven para que tu código llame a otros servicios, no para proteger un dominio personalizado.

## Step 6 · Bind It: SNI or IP-Based

[calm] Un enlace TLS asocia un certificado con un dominio personalizado, y eso es lo que lo protege.
[600ms]
[confident] La mayoría de las aplicaciones usan SNI, donde los navegadores envían el nombre del host para que una sola dirección IP pueda servir muchos certificados.
[600ms]
[reflective] SSL basado en IP le da a un certificado su propia dirección dedicada, y requiere el nivel Standard o superior.

## Step 7 · Lock the Door

[serious] Ahora ponle el candado. Tres ajustes generales deciden cómo se pueden conectar los clientes.
[600ms]
[confident] HTTPS Only redirige todo el tráfico sin cifrar a HTTPS. Minimum TLS define la versión más baja que acepta tu aplicación.
[600ms]
[calm] Los certificados de cliente agregan autenticación mutua, y tu código se encarga de validarlos. Para eso se necesita el nivel Basic o superior.

## Step 8 · Keep the Padlock Fresh

[concerned] Los certificados caducan, y un candado vencido asusta a los visitantes.
[600ms]
[confident] Que la renovación sea automática depende de dónde viene el certificado. Los administrados se renuevan solos, y los enlaces los siguen.
[600ms]
[serious] Los certificados de Key Vault y de App Service se sincronizan cada veinticuatro horas. Un P F X subido corre por tu cuenta: reemplázalo y vuelve a vincularlo.

## Step 9 · Your Safety Net: Backups

[calm] App Service respalda tu aplicación por ti, sin configurar nada, y además puedes agregar copias de seguridad personalizadas en una cuenta de almacenamiento que tú controles.
[600ms]
[confident] Las copias automáticas se hacen cada hora, pero no se pueden descargar. Las personalizadas siguen tu programación y pueden ser parciales.
[600ms]
[reflective] Cada copia es completa, no incremental. Las copias de seguridad requieren Basic o superior, y Basic solo cubre la ranura de producción.

## Step 10 · What a Backup Holds

[curious] ¿Y qué hay dentro de la caja? Se recupera el contenido de la aplicación, junto con algunos ajustes.
[600ms]
[serious] La red, la identidad, las ranuras y la configuración de dominio personalizado y TLS no se recuperan. Por eso las revisas de nuevo después de restaurar.
[600ms]
[reflective] Las bases de datos vinculadas solo se cubren con copias personalizadas, y esa función se está retirando. Mejor usa la copia de seguridad propia de la base de datos.

## Step 11 · Get It Back

[determined] Cuando llegue el momento de recuperar, puedes restaurar sobre la aplicación, en una aplicación nueva o en una ranura.
[600ms]
[confident] En producción, restaura primero en una ranura y luego haz el intercambio. La aplicación o ranura de destino se detiene mientras se ejecuta la restauración.
[600ms]
[serious] Después, vuelve a revisar el dominio personalizado y el enlace TLS.

## Step 12 · All in One

[calm] Ponle nombre, demuestra que es tuyo, asegúralo, renuévalo, respáldalo. Y así podrás recuperarlo.
[600ms]
[confident] Es decir: un registro CNAME o A más la prueba TXT, un certificado con su enlace, HTTPS Only y una versión mínima de TLS.
[600ms]
[proud] Las copias de seguridad restauran archivos y algunos ajustes, no dominios ni TLS. Todo esto entra en los objetivos de App Service de A Z 104.
