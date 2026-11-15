# Narrator Script · Español (es) — Journey 05 · Arquitectura de seguridad Zero Trust

**Source animation:** `static/v2/Security/ZeroTrustSecurity.html`
**Language:** Spanish (es). Traducido del guion maestro en inglés. Las indicaciones de interpretación `[tags]` y las pausas `[NNNms]` se mantienen sin cambios (son direcciones, no se pronuncian). Los títulos de paso se conservan en inglés para el mapeo 1:1.

Un bloque por paso de la animación.

---

## Step 1 · Start from the assembled Contoso design

[confident] Para el final, lo reunimos todo bajo Zero Trust.
[600ms]
[calm] Las paradas anteriores ya eliminaron los secretos locales. Ahora cada solicitud sensible debe seguir satisfaciendo la identidad correcta, la ruta de red correcta y el rol correcto.
[600ms]
[serious] Incluso si un componente se ve comprometido, eso debe mantenerse.
[800ms]
[determined] La regla es simple: no confíes en una solicitud solo porque venga de dentro de la app; haz que demuestre identidad, ruta y autorización cada vez.

## Step 2 · Add Private Endpoint to the sensitive services

[confident] Primero, la mitad de red: añade Private Endpoint.
[600ms]
[calm] Lleva Private Endpoint a la red virtual de Contoso, tanto para Key Vault como para App Configuration.
[600ms]
[impressed] La app sigue usando exactamente los mismos servicios, pero ahora la ruta llega a una IP privada dentro de la VNet.
[600ms]
[reassuring] La ruta es privada, local a la red y explícita.

## Step 3 · Disable the public path too

[intrigued] Pero ¿basta con una ruta privada por sí sola?
[800ms]
[serious] No del todo: Private Endpoint no elimina automáticamente la pública.
[600ms]
[determined] Así que el acceso de red público en Key Vault y App Configuration también debe pasar de Activado a Desactivado.
[600ms]
[concerned] De lo contrario, la ruta segura y la abierta conviven: una clásica falsa sensación de seguridad.

## Step 4 · Separate duties with Azure RBAC

[confident] A continuación, separa funciones con Azure RBAC.
[600ms]
[calm] Reemplaza las directivas de acceso heredadas de Key Vault por control de acceso basado en roles.
[600ms]
[impressed] La app en ejecución solo lee secretos, el equipo de seguridad gestiona la rotación, y CI/CD obtiene únicamente el ámbito reducido que necesita para una tarea.
[600ms]
[reassuring] El privilegio mínimo no es una identidad poderosa: son distintas identidades haciendo distintos trabajos.

## Step 5 · Assume breach operationally

[serious] Por último, asume una brecha, de forma operativa.
[600ms]
[calm] Envía la configuración de diagnóstico a Log Analytics y Microsoft Sentinel, mantén la rotación de secretos en marcha, y deja que GitHub Actions use una credencial federada en lugar de una credencial de administrador almacenada.
[600ms]
[determined] Zero Trust es operativo, no solo arquitectónico.
[600ms]
[reassuring] Después de que el diseño entre en producción, sigues necesitando evidencia, alertas y rotación.

## Step 6 · The hardened Contoso design — end to end

[reflective] Y aquí está el diseño de Contoso reforzado, de principio a fin.
[600ms]
[proud] Los mismos componentes ahora están tras una ruta privada, identidades administradas, funciones RBAC separadas, registros operativos y CI/CD sin secretos.
[600ms]
[confident] Acceso sin secretos, de privilegio mínimo y verificado explícitamente, de un extremo de la app al otro.
[600ms]
[optimistic] Ese es el objetivo de todo el recorrido, reunido en una sola imagen.
