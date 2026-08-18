# Narrator Script · Español (es) — Journey 04 · Service Principal y credenciales federadas

**Source animation:** `static/v2/Security/ServicePrincipal.html`
**Language:** Spanish (es). Traducido del guion maestro en inglés. Las indicaciones de interpretación `[tags]` y las pausas `[NNNms]` se mantienen sin cambios (son direcciones, no se pronuncian). Los títulos de paso se conservan en inglés para el mapeo 1:1.

Un bloque por paso de la animación.

---

## Step 1 · Ship Contoso from GitHub to Azure

[confident] Este es el objetivo: enviar Contoso de GitHub directamente a Azure.
[600ms]
[calm] La app de Contoso vive en GitHub, y cada push debería iniciar un flujo de trabajo de GitHub Actions que la compile e implemente en Azure.
[600ms]
[optimistic] Nadie copiando archivos a mano: un simple git push envía la app automáticamente a Azure App Service.
[800ms]
[curious] Suena fácil... entonces, ¿qué se interpone?

## Step 2 · GitHub and Azure are two different platforms

[concerned] El inconveniente es que GitHub y Azure son dos plataformas diferentes.
[600ms]
[calm] GitHub Actions se ejecuta fuera de Azure. Cuando el flujo de trabajo intenta implementar, Azure ve a un llamador desconocido de otra plataforma, con inicios de sesión distintos.
[600ms]
[serious] Así que Azure lo bloquea: solo acepta solicitudes de una identidad que reconoce.
[800ms]
[reflective] Distintas plataformas, distintos sistemas de identidad, y ninguna identidad compartida entre ellas.

## Step 3 · Trust starts with an identity

[intrigued] Entonces, ¿cómo salvamos esa distancia?
[800ms]
[confident] La confianza empieza con una identidad. Para que la implementación funcione, Azure necesita reconocer el flujo de trabajo de GitHub como un llamador conocido que puede autorizar.
[600ms]
[calm] Y la solución no es una contraseña compartida.
[600ms]
[reassuring] Es darle al flujo de trabajo una identidad en Microsoft Entra ID en la que Azure ya confía.

## Step 4 · App Registration defines the identity

[confident] Esa identidad empieza con una App Registration.
[600ms]
[calm] Contoso crea una App Registration en Microsoft Entra ID: define la identidad de la aplicación.
[600ms]
[impressed] En este inquilino, Azure evalúa el Service Principal correspondiente, la instancia de aplicación empresarial que en realidad recibe las decisiones de acceso.
[600ms]
[reassuring] Piensa en plano e instancia: la App Registration es la definición; el Service Principal es su representación local dentro del inquilino.

## Step 5 · GitHub signs in as the Service Principal

[confident] Ahora GitHub inicia sesión como ese Service Principal.
[600ms]
[calm] Azure le da al flujo de trabajo un Service Principal con un ID de aplicación (cliente) y un ID de objeto: la identidad de GitHub dentro de Azure.
[600ms]
[impressed] GitHub Actions se autentica como él usando una credencial federada —sin secreto— y luego Azure lo autoriza con un rol en un ámbito específico.
[600ms]
[reassuring] Una vez envuelto por un Service Principal, GitHub se comporta como cualquier identidad de Azure: se autentica y luego se autoriza por rol.

## Step 6 · Where federation shines

[optimistic] Y este modelo de confianza va mucho más allá de GitHub.
[600ms]
[calm] La misma credencial federada funciona para cualquier proveedor de identidad externo que Microsoft Entra pueda validar.
[600ms]
[impressed] Contoso la reutiliza en GitHub Actions, otras nubes, Kubernetes y el entorno local, sin ningún secreto almacenado en ninguno de ellos.
[600ms]
[reassuring] Sea cual sea el origen, el patrón es idéntico: la carga de trabajo trae un token de su propio proveedor, y Entra lo intercambia por un token de acceso de Azure.

## Step 7 · From GitHub to Azure — secretless, end to end

[reflective] De GitHub a Azure: sin secretos, de principio a fin.
[600ms]
[confident] Dos plataformas separadas, así que el flujo de trabajo obtiene una identidad en Microsoft Entra ID: una App Registration y un Service Principal.
[600ms]
[proud] Una credencial federada permite que Azure confíe en el propio token de GitHub, así que la implementación se ejecuta sin ningún secreto almacenado.
[600ms]
[optimistic] Dale una identidad a la carga de trabajo externa y deja que Azure confíe en su token, y el mismo patrón llega a casi cualquier lugar.
