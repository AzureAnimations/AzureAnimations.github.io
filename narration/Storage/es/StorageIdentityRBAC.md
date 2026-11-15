# Guion de narración — Azure Storage · Nivel avanzado · Identidad y RBAC

**Source animation:** `static/v2/Storage/StorageIdentityRBAC.html`

---

## Step 1 · goal

[confident] Tu app necesita leer blobs de un contenedor — y el objetivo es hacerlo sin una sola clave.
[600ms]
[calm] La forma antigua reparte una clave de cuenta o un token SAS — un secreto que puede filtrarse. La forma moderna le da a la app una identidad y le concede un rol.
[700ms]
[curious] Construyamos ese diagrama, flecha a flecha — la identidad a la izquierda ganando acceso al contenedor de la derecha.

## Step 2 · identity

[confident] Primero, la app necesita una entidad de seguridad — sencillamente, quién lo pide.
[600ms]
[calm] Puede ser un usuario, un grupo o un service principal. Pero para una app, la mejor opción es una identidad administrada: Azure gestiona la credencial, así que no hay ningún secreto en tu código.
[700ms]
[reassuring] Y con el asistente DefaultAzureCredential, el mismo código se ejecuta en tu portátil y en Azure.

## Step 3 · token

[confident] Ahora la app llama a Storage. Microsoft Entra ID autentica su identidad y devuelve un token OAuth de corta duración.
[600ms]
[calm] Storage confía en Entra, así que ese token — no una clave — viaja con cada solicitud.
[700ms]
[reassuring] Caduca rápido y está limitado a storage, así que no tienes nada que guardar ni rotar.

## Step 4 · role

[confident] Un token por sí solo aún no basta — la identidad necesita un rol. Y aquí está la trampa que atrapa a todos.
[600ms]
[serious] Usa un rol de plano de datos, como Storage Blob Data Reader. El rol de plano de control Contributor administra la cuenta, pero no lee tus blobs.
[700ms]
[amused] Así que un Contributor puede administrar el recurso y aun así recibir un 403 sobre los datos. Asigna un rol de datos.

## Step 5 · scope

[confident] Cada rol se asigna en un ámbito — desde el grupo de administración, bajando por suscripción, grupo de recursos y cuenta, hasta un solo contenedor.
[600ms]
[calm] Asígnalo en el ámbito más estrecho que funcione — aquí, el contenedor — y el permiso se hereda hacia abajo desde ahí.
[700ms]
[reassuring] ¿Necesitas precisión por ruta de blob? Añade una condición basada en atributos, o ABAC, en la propia asignación.

## Step 6 · assign

[confident] Júntalo todo y tienes una asignación de rol: la entidad, más el rol, más el ámbito.
[600ms]
[calm] Ahora cada solicitud lleva el token de Entra, Azure comprueba la asignación, y la app lee los blobs — sin que jamás intervenga una clave.
[700ms]
[reassuring] Una asignación de rol es sencillamente quién, qué y dónde — y Azure la evalúa en cada llamada.

## Step 7 · recap

[proud] Ahí está el panorama completo: identidad de la app, a un token de Entra, a un rol de plano de datos en el ámbito del contenedor, a los blobs.
[600ms]
[calm] Sin claves, con privilegio mínimo, y totalmente auditado.
[700ms]
[encouraging] El movimiento final — desactiva la clave compartida, para que la identidad sea la única entrada.

## Step 8 · spec

[confident] Un nivel más a fondo, porque importa. El control de acceso basado en roles de Azure tiene dos planos.
[600ms]
[calm] Los roles de plano de control, como Owner y Contributor, administran el recurso. Los roles de plano de datos — Reader, Contributor, Owner para blobs, y sus equivalentes para archivos, colas y tablas — conceden acceso a los datos de dentro.
[700ms]
[serious] Recuerda: Owner y Contributor pueden listar las claves de la cuenta, así que aún pueden llegar a los datos por la vía antigua. Desactiva la clave compartida para forzar a todos a pasar por un rol de datos.
