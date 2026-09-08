# Narrator Script — GitHub · Contoso Delivery · Ship It to Azure · ES

**Source animation:** `journeys/GitHub/DeployIt.html`

Los encabezados `## Step N` se mantienen en inglés a propósito (índice del generador y de las leyendas).

---

## Step 1 · One Pipeline, Two Halves

[confident] Dos letras, y luego otras dos. Se dicen de un tirón — "CI/CD" — pero responden preguntas distintas.
[500ms]
[calm] La integración continua pregunta: *¿es bueno este cambio?* Una pull request dispara `ci.yml`: pruebas del backend, pruebas del frontend y un análisis de CodeQL.
[500ms]
[serious] Y entonces todo depende de una sola pregunta: ¿están todas en verde? Si no, la fusión queda bloqueada. No desaconsejada: bloqueada.
[500ms]
[bright] Si están en verde y el cambio está en main, toma el relevo `cd.yml`: construir las imágenes, subirlas a GHCR, desplegar y hacer una prueba de humo. En marcha, en Azure.
[500ms]
[reassuring] Una sola tubería, no dos herramientas: la segunda mitad nunca empieza hasta que la primera dice que sí.

## Step 2 · Build It Once, Ship the Small Half

[confident] Primer trabajo de la mitad de entrega: convertir el código en algo que se pueda ejecutar.
[500ms]
[calm] Un Dockerfile multietapa. La primera etapa parte de la imagen completa de Node, instala todas las dependencias, incluidas las de desarrollo, y compila. La segunda empieza de cero desde una imagen ligera y copia solo el resultado compilado.
[500ms]
[thoughtful] Dos etapas, dos razones. La imagen que se ejecuta es mucho más pequeña, y no lleva compiladores que un atacante pueda aprovechar. Va a GHCR etiquetada con el commit que la produjo.

## Step 3 · GitHub Is Not Inside Azure

[serious] Ahora la parte que hace tropezar a la gente. El runner es una máquina de la red de GitHub. Azure no lo ha visto nunca.
[500ms]
[thoughtful] Tu instinto seguramente dice *identidad administrada*, pero una identidad administrada se asocia a algo que se ejecuta en Azure. Un runner de GitHub no lo es.
[500ms]
[bright] Así que: o pegas un secreto de cliente en GitHub y lo ves caducar en el peor momento, o le das al flujo de trabajo un Service Principal y dejas que Azure confíe en el propio token de GitHub.

## Step 4 · Give the Workflow an Identity

[confident] ¿Y qué *es* un Service Principal? Tres cosas, en orden.
[500ms]
[calm] Un App Registration en Microsoft Entra ID: el plano. El Service Principal en sí: la identidad de esa aplicación en tu inquilino, sobre la que Azure toma decisiones. Y un rol de RBAC: Contributor, acotado a un grupo de recursos, no a la suscripción.
[500ms]
[thoughtful] Definición, identidad, permiso. Mantén esos tres separados y el modelo deja de ser un misterio.

## Step 5 · Deploy Without a Password

[confident] Así funciona la confianza.
[500ms]
[calm] Añades una credencial federada a ese Service Principal, nombrando un repositorio y una rama. En el momento del despliegue GitHub pide un token OIDC de corta vida que identifica esa ejecución exacta; Entra ID lo comprueba y devuelve un token de acceso de Azure.
[500ms]
[serious] Sigues guardando un identificador de cliente, uno de inquilino y uno de suscripción; ninguno es un secreto. Lo que ya no guardas es una contraseña que pueda filtrarse, o caducar a las tres de la madrugada.
[500ms]
[calm] Un detalle que pilla a mucha gente: el trabajo necesita el permiso id-token write, o GitHub nunca emite el token.

## Step 6 · The Job That Actually Releases It

[confident] Este es el flujo de trabajo de despliegue.
[500ms]
[calm] Se dispara con un push a main, lo que, con la protección de rama, significa una pull request fusionada. Pide permiso id-token write, apunta al entorno de producción, que puede exigir una aprobación humana, e inicia sesión con la acción Azure Login.
[500ms]
[thoughtful] Y fíjate en lo que *no* hace: nunca recompila. Despliega exactamente la imagen que ya pasó las pruebas. Recompilar te daría un artefacto distinto del que probaste.

## Step 7 · From a Rainy Afternoon to Running Code

[warm] Y así, de vuelta al principio.
[500ms]
[calm] La lluvia le costaba ventas a Contoso, en silencio. Eso se convirtió en un caso de negocio, cuatro épicas, subtareas en un tablero, ramas y una pull request, probada por tests y análisis, empaquetada en una imagen pequeña y desplegada por un Service Principal sin ninguna contraseña guardada.
[500ms]
[reassuring] Ninguno de estos pasos es exótico. Lo que hace que funcione es que todos se ejecutan siempre, sin que nadie tenga que acordarse de pedirlo.
