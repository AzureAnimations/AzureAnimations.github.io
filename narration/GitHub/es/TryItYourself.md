# Narrator Script — GitHub · Contoso Delivery · Set Up Your Repo · ES

**Source animation:** `journeys/GitHub/TryItYourself.html`

Los encabezados `## Step N` se mantienen en inglés a propósito (índice del generador y de las leyendas).

---

## Step 1 · Start With an Empty Repository

[warm] Todo lo anterior ha sido el repositorio de Contoso. Vamos a hacerlo tuyo.
[500ms]
[calm] Necesitas una cuenta gratuita y un repositorio vacío. Ve a github punto com barra new y llámalo "weather map app". Deja sin marcar "Add a README file": el script necesita un sitio vacío donde trabajar.
[500ms]
[reassuring] Apunta el nombre completo: tu usuario, barra, weather map app. El importador te pedirá exactamente eso.

## Step 2 · Who Owns the Repository?

[warm] Antes de pulsar Create, mira el primer campo de todos. Owner, el propietario.
[500ms]
[calm] Tu propio usuario siempre está ahí. Debajo aparece cualquier organización a la que pertenezcas: una cuenta compartida en la que nadie inicia sesión. Las personas entran como ellas mismas y se unen, y después reciben roles y equipos, de modo que el acceso se concede a diez personas de una vez.
[500ms]
[bright] Las organizaciones son gratuitas y aquí sirve cualquiera de las dos opciones: si vas por tu cuenta, elige tu cuenta personal. Una diferencia importa más adelante: en una organización, un proyecto nuevo se ofrece a importar todas las incidencias por ti. En un proyecto personal ese botón no existe.

## Step 3 · Install the GitHub CLI

[confident] El script no hace clic en nada. Habla con GitHub a través de `gh`, la herramienta oficial de línea de comandos.
[500ms]
[calm] En Windows, winget install GitHub punto cli. En un Mac, brew install gh. En Ubuntu, apt install gh. O descarga el instalador desde cli punto github punto com.
[500ms]
[reassuring] Después compruébalo. Escribe `gh --version`. Si responde con un número de versión, ya está.

## Step 4 · Sign the CLI Into Your Account

[warm] Ahora deja que la herramienta actúe en tu nombre. Escribe `gh auth login`.
[500ms]
[calm] Cuatro preguntas rápidas: GitHub punto com, HTTPS, sí, autenticar Git también, y luego la importante. Elige "Login with a web browser".
[500ms]
[thoughtful] Aquí está la parte elegante. La terminal muestra un código de un solo uso, se abre el navegador, y es *el navegador* el que te pide escribirlo. Dos ventanas, un código y ninguna contraseña.

## Step 5 · Your Repository Is Ready

[warm] Esa es toda la preparación: un repositorio vacío, la CLI instalada y una sesión iniciada sin ninguna contraseña guardada en tu disco.
[500ms]
[bright] A partir de aquí el recorrido deja de ser una demostración. Cada explicación te pedirá hacerlo en tu propio repositorio y comparar el resultado con lo que ves en pantalla.
[500ms]
[reassuring] Empieza por Plan the Work: te dará el script que llena este repositorio con los doce elementos de trabajo.
