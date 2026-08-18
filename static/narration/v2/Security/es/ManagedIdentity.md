# Narrator Script · Español (es) — Journey 03 · Managed Identity

**Source animation:** `static/v2/Security/ManagedIdentity.html`
**Language:** Spanish (es). Traducido del guion maestro en inglés. Las indicaciones de interpretación `[tags]` y las pausas `[NNNms]` se mantienen sin cambios (son direcciones, no se pronuncian). Los títulos de paso se conservan en inglés para el mapeo 1:1.

Un bloque por paso de la animación.

---

## Step 1 · Where we start: an app that needs a database

[calm] Empecemos donde empiezan la mayoría de las apps.
[600ms]
[confident] El backend de Contoso se ejecuta dentro de una Azure VM y necesita leer una Azure SQL Database.
[600ms]
[calm] Antes de poder conectarse, un administrador de base de datos le emite un inicio de sesión —un nombre de usuario y una contraseña— y le concede permiso sobre la base de datos.
[600ms]
[reflective] Es la configuración clásica: la app demuestra quién es con una credencial que alguien le entrega.

## Step 2 · That login ships inside the app — in plain text

[concerned] Pero fíjate dónde acaba ese inicio de sesión.
[600ms]
[serious] El usuario y la contraseña se almacenan en la app y se implementan con ella, a menudo como texto plano en un archivo .env o de configuración.
[600ms]
[concerned] Esta cuenta de servicio compartida es lo que llamamos un ID funcional, y sencillamente no escala.
[800ms]
[serious] Cualquiera que pueda leer el archivo tiene el inicio de sesión de la base de datos, y cada app nueva necesita el suyo.

## Step 3 · Managed identity solves it — a role, not a password

[confident] La identidad administrada lo resuelve, con un rol, no con una contraseña.
[600ms]
[calm] La misma VM, la misma app de Contoso, la misma base de datos, pero ahora la app tiene una identidad administrada, su propia identidad integrada en Microsoft Entra ID.
[600ms]
[impressed] En lugar de emitir un usuario y una contraseña, el administrador abre el Control de acceso de la base de datos y asigna a esa identidad solo el rol que necesita.
[600ms]
[reassuring] Nunca se crea ni se almacena ninguna credencial: solo identidad, más acceso con privilegio mínimo.

## Step 4 · Turn it on — enable the managed identity

[confident] Y activarla es realmente sencillo.
[600ms]
[calm] En el Azure Portal, abre el recurso, ve a Identidad, cambia el estado de la asignada por el sistema a Activado y guarda: Azure crea la identidad en Microsoft Entra ID.
[600ms]
[amused] ¿Prefieres la línea de comandos? Una sola línea de Azure CLI hace exactamente lo mismo.
[600ms]
[reassuring] La mayoría de los servicios de proceso y de aplicaciones de Azure lo admiten: máquinas virtuales, App Service, Functions, Container Apps, AKS y muchos más.

## Step 5 · The catch — one identity per resource

[concerned] Sin embargo, hay un inconveniente cuando creces.
[600ms]
[calm] El backend de Contoso se ejecuta en muchos hosts: una VM, App Service, Functions, Container Apps, AKS.
[600ms]
[serious] Con una identidad asignada por el sistema, el equipo habilita una en cada recurso, y el administrador concede acceso a cada una por separado.
[800ms]
[concerned] Añade más máquinas y todo se repite: mucho que mantener para lo que en realidad es una sola app.

## Step 6 · One identity, shared — user-assigned

[confident] Así que comparte una sola identidad: la asignada por el usuario.
[600ms]
[calm] Contoso crea una única identidad administrada asignada por el usuario y la adjunta a cada host: la VM, App Service, Functions, Container Apps y AKS referencian todas la misma.
[600ms]
[impressed] El administrador concede acceso a esa única identidad una sola vez. Añade otra máquina y solo adjuntas la misma identidad: sin nueva concesión.
[600ms]
[reassuring] Es su propio recurso de Azure con un ID de objeto estable, que vive con independencia de cualquier host.

## Step 7 · Recap — System-assigned vs User-assigned

[reflective] Recapitulemos las dos variantes de una misma idea sin secretos.
[600ms]
[confident] Ambas permiten que una carga de trabajo se autentique con un token de Microsoft Entra en lugar de un secreto, y luego obtenga un rol de privilegio mínimo.
[600ms]
[calm] Solo se diferencian en cómo se crean, su ciclo de vida y si se pueden compartir.
[600ms]
[reassuring] La asignada por el sistema es la más simple para un solo recurso; la asignada por el usuario es la opción recomendada y reutilizable cuando varios recursos comparten una identidad.
