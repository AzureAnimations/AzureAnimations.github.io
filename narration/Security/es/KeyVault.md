# Narrator Script · Español (es) — Journey 01 · Azure Key Vault

**Source animation:** `static/v2/Security/KeyVault.html`
**Language:** Spanish (es). Traducido del guion maestro en inglés. Las indicaciones de interpretación `[tags]` y las pausas `[NNNms]` se mantienen sin cambios (son direcciones, no se pronuncian). Los títulos de paso se conservan en inglés para el mapeo 1:1.

Un bloque por paso de la animación.

---

## Step 1 · Every connection needs a secret, key or certificate

[confident] Te presentamos Contoso, una tienda en línea que en realidad son muchas apps hablando entre sí.
[600ms]
[calm] Un comprador llega al Store Front por TLS, el Store Front llama a Order Processing, y Order Processing alcanza la base de datos y un conjunto creciente de componentes.
[600ms]
[concerned] Cada una de esas flechas necesita una credencial —un secreto, una clave o un certificado— y ahora mismo no hay ningún lugar seguro y central donde guardarlas.
[800ms]
[curious] Entonces, ¿dónde debería vivir realmente todo este material sensible?

## Step 2 · Static secrets in appsettings.json

[serious] Así es como suele empezar... y dónde se tuerce.
[600ms]
[concerned] El Store Front lee una contraseña de base de datos y una clave de pagos codificadas directamente desde un archivo local appsettings.json, copiadas por los portátiles de desarrollo y las variables del pipeline.
[600ms]
[serious] El primer principio de la Secure Future Initiative es Seguro por diseño: proteger los secretos en reposo, en tránsito y en tiempo de ejecución.
[600ms]
[determined] Las credenciales estáticas en el control de código rompen eso desde el primer día; un repositorio filtrado compromete producción.

## Step 3 · Centralize in Azure Key Vault

[confident] La solución es centralizar, en Azure Key Vault.
[600ms]
[calm] Key Vault reúne esos secretos dispersos en un único almacén administrado y auditado, con tres tipos de objeto: secretos, claves criptográficas y certificados.
[600ms]
[impressed] Las apps los leen en tiempo de ejecución sin ninguna credencial en el código.
[600ms]
[reassuring] Un solo almacén guarda ahora la contraseña de la base de datos de Contoso, la clave de pagos, una clave de cifrado de pedidos y el certificado del Store Front, todo con rotación, auditoría y control de acceso centralizados.

## Step 4 · How your material is protected

[intrigued] Pero ¿con qué fuerza se protege realmente ese material?
[800ms]
[confident] Cada clave se protege a un nivel FIPS 140 validado. Standard mantiene las claves en un módulo de software; Premium y Managed HSM las generan y guardan dentro de módulos de seguridad de hardware.
[600ms]
[impressed] Dentro de un HSM, la clave nunca sale del límite del hardware.
[600ms]
[calm] Un nivel FIPS más alto significa simplemente una protección física más fuerte: desde software hasta hardware resistente a manipulaciones con acceso basado en identidad.

## Step 5 · Standard vs Premium vs Managed HSM

[curious] Entonces, ¿qué contenedor debería elegir Contoso?
[800ms]
[confident] Key Vault viene en dos niveles de almacén más un Managed HSM dedicado, que se diferencian por el arrendamiento, la protección y quién controla la raíz de confianza.
[600ms]
[calm] Usa Standard para los secretos cotidianos de las apps y los certificados TLS. Elige Premium cuando necesites claves respaldadas por HSM o administradas por el cliente.
[600ms]
[reassuring] Y elige Managed HSM cuando necesites un módulo dedicado de un solo inquilino y control total de la raíz de confianza: verdadera soberanía de claves.

## Step 6 · Migrate a key into Key Vault — without exposing it

[intrigued] ¿Y si ya tienes una clave y necesitas traerla sin exponerla nunca?
[800ms]
[confident] Eso es Bring Your Own Key. Supón que generaste una clave de cifrado de datos dentro de tu HSM local; una KEK de Key Vault, un par de claves RSA, la encapsula para el viaje.
[600ms]
[calm] Exportas la clave pública de la KEK, tu HSM encapsula con ella la DEK, y solo viaja el blob .byok cifrado.
[600ms]
[reassuring] Key Vault la desencapsula dentro del HSM con la clave privada, así que la clave en texto plano nunca queda al descubierto.

## Step 7 · Azure Key Vault — the whole picture

[reflective] Da un paso atrás y todo el panorama encaja.
[600ms]
[proud] Los secretos, las claves y los certificados de Contoso viven ahora en un único almacén auditado: protegidos al nivel FIPS correcto, en el nivel adecuado, encapsulados por claves que Contoso controla y leídos en tiempo de ejecución sin credenciales en el código.
[600ms]
[confident] Esto es Seguro por diseño, de forma predeterminada y en las operaciones.
[600ms]
[optimistic] Y es la base para el resto del recorrido: las identidades administradas obtienen estos secretos sin contraseñas, el control de acceso limita quién puede leerlos, y la red privada blinda el almacén.
