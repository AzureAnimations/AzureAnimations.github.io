# Narrator Script — GitHub · Build and Publish a Custom Action

**Source animation:** [BuildCustomActions.html](../../../journeys/GitHub/BuildCustomActions.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · Why package an action

[calm] Contoso pegó el mismo script de verificación en tres repositorios. Ahora cada corrección hay que pegarla tres veces.
[600ms]
[concerned] Los scripts copiados se van desalineando, y nadie sabe cuál es la versión correcta.
[600ms]
[confident] Una acción lo empaqueta una sola vez, y cada flujo de trabajo la llama con una sola línea uses.

## Step 2 · Three types of action

[curious] Puedes crear tres tipos de acción: una acción de JavaScript, una acción de contenedor Docker o una acción compuesta.
[600ms]
[confident] Se diferencian en cómo se ejecutan. JavaScript corre directamente en el runner, Docker corre en un contenedor, y la compuesta combina pasos y acciones.
[600ms]
[serious] Las acciones de contenedor Docker solo corren en runners de Linux, y un runner de Linux autoalojado debe tener Docker instalado.

## Step 3 · The action.yml file

[calm] Toda acción necesita un archivo de metadatos que se llama action dot yml, o action dot yaml.
[600ms]
[confident] Se requieren tres cosas: un nombre, una descripción y cómo se ejecuta la acción. Las entradas, las salidas, un autor y el branding son opcionales.
[600ms]
[serious] Ojo: marcar una entrada como obligatoria no detiene la ejecución por sí solo, así que tu código tiene que validarla.

## Step 4 · A JavaScript action

[calm] Escribe el código en Node con el toolkit de Actions, y luego empaquétalo con sus dependencias en la carpeta dist.
[600ms]
[confident] El runner descarga la acción y ejecuta ese único archivo como un paquete completo.
[600ms]
[serious] Eso significa que las dependencias tienen que ir incluidas. Haz commit del archivo empaquetado, pero no de node modules.

## Step 5 · A Docker container action

[calm] Un Dockerfile empaqueta tu código junto con su entorno: el sistema operativo, las herramientas y las versiones.
[600ms]
[curious] El runner construye o descarga la imagen, y luego la inicia con tu punto de entrada y tus argumentos.
[600ms]
[serious] Corre solo en runners de Linux y es más lenta que JavaScript. No uses la instrucción USER, y haz que el script del punto de entrada sea ejecutable.

## Step 6 · A composite action

[calm] Una acción compuesta junta varios pasos en un solo paso reutilizable, con comandos de shell y otras acciones.
[600ms]
[serious] Cada paso run tiene que indicar su shell.
[600ms]
[intrigued] Y dentro de una acción compuesta, lee las entradas con el contexto inputs, no con variables de entorno.

## Step 7 · Workflow commands in an action

[curious] Una acción se comunica con el runner mediante comandos de flujo de trabajo. Puede escribir una salida, enmascarar un valor o agregar una anotación.
[600ms]
[confident] El toolkit encapsula cada uno por ti. Las salidas van al archivo que indica el runner, y las anotaciones pueden ser aviso, advertencia o error.
[600ms]
[serious] Registra la máscara antes de imprimir el valor, nunca después.

## Step 8 · Pick a type

[calm] Elige según lo que más importe: velocidad, plataforma y dependencias.
[600ms]
[confident] JavaScript es más rápido que Docker, y una acción de JavaScript puro funciona en todos los runners alojados en GitHub.
[600ms]
[curious] Docker solo funciona en Linux, pero trae consigo sus propias dependencias.

## Step 9 · Troubleshoot an action that fails

[calm] Cuando una acción falla, lee primero el log, empezando por el paso que falló.
[600ms]
[confident] Luego vuelve a ejecutarla con el registro de depuración activado para ver más detalle.
[600ms]
[intrigued] Por último, relaciona lo que ves con una causa común: permisos, el shell, las dependencias o el sistema operativo del runner. El texto del log que ves aquí es solo un ejemplo.

## Step 10 · Distribute your action

[curious] Ahora elige quién puede usarla. Un repositorio público llega a todo el mundo, y es la opción más amplia.
[600ms]
[confident] Un repositorio privado o interno se queda dentro de tu organización o empresa, y el Marketplace ayuda a que la encuentren.
[600ms]
[concerned] Una advertencia: los colaboradores externos de un repositorio que usa una acción privada compartida pueden leer los logs de ejecución.

## Step 11 · Publish to the Marketplace

[calm] Para publicar, cumple los requisitos: un repositorio público, un archivo de acción en la raíz y un nombre único.
[600ms]
[confident] Agrega branding y una categoría al archivo de la acción, luego crea un borrador de release y elige Publicar esta acción en el GitHub Marketplace.
[600ms]
[impressed] Publicar requiere autenticación en dos pasos, y una acción que cumpla los requisitos se publica al instante, sin revisión.

## Step 12 · Release strategy

[calm] Etiqueta cada release con una versión semántica, y mantén una etiqueta principal móvil, como v uno.
[600ms]
[confident] Los usuarios eligen v uno para recibir las correcciones automáticamente, o una etiqueta exacta o un SHA de commit cuando quieren estabilidad.
[600ms]
[proud] Una etiqueta principal nueva, como v dos, es para cambios que rompen los flujos de trabajo existentes, y un release inmutable bloquea su etiqueta para siempre.
