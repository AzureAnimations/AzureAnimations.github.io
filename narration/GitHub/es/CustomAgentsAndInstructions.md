# Narrator Script — GitHub · Configure Copilot Agents: Instructions, Custom Agents and Setup Steps

**Source animation:** [CustomAgentsAndInstructions.html](../../../journeys/GitHub/CustomAgentsAndInstructions.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents>

---

## Step 1 · One Agent, Many Jobs

[calm] Maya le da a un agente genérico tres trabajos distintos: pruebas, documentación y revisión.
[600ms]
[concerned] Ese agente no conoce ninguna de las reglas de Contoso, y si no lo limitas, puede usar todas las herramientas disponibles en cada trabajo.
[600ms]
[serious] El resultado no se parece a cómo trabaja el equipo. Vamos a arreglarlo con configuración.

## Step 2 · Repository Instructions

[curious] La primera solución es un solo archivo que le dice a Copilot cómo construye, prueba y nombra las cosas Contoso.
[600ms]
[confident] Es Markdown simple, en la carpeta GitHub del repositorio, escrito como reglas en lenguaje natural. Se aplica a toda solicitud que se haga en este repositorio.
[600ms]
[encouraging] Explica cómo compilar, probar y validar el trabajo. El agente lo seguirá cada vez.

## Step 3 · Path and Agent Instructions

[calm] Las reglas más específicas van más cerca del código.
[600ms]
[confident] Un archivo de instrucciones por ruta se aplica a los archivos que coinciden con su patrón. Un archivo de instrucciones de agente puede estar en cualquier parte del repositorio, y gana el más cercano.
[600ms]
[curious] Si coincide una ruta y además existe un archivo para todo el repositorio, Copilot usa los dos. También puedes excluir un archivo por ruta del agente en la nube o de la revisión de código.

## Step 4 · A Custom Agent

[curious] Ahora dale un rol al agente. Un agente personalizado es un archivo Markdown con frontmatter.
[600ms]
[confident] Tiene un nombre, una descripción de su propósito y un prompt que define cómo trabaja. La descripción es obligatoria.
[600ms]
[reflective] Los perfiles están en la carpeta agents y terminan en dot agent dot md. La compatibilidad con los IDE de JetBrains, Eclipse y Xcode está en versión preliminar pública.

## Step 5 · Choose Its Tools

[calm] La propiedad tools indica qué puede usar el agente. Un revisor que solo puede leer y buscar no puede modificar un archivo.
[600ms]
[confident] Si omites la propiedad, o usas un asterisco, el agente recibe todas las herramientas. Una lista habilita solo esas herramientas.
[600ms]
[serious] Una lista vacía las desactiva todas, y los nombres de herramientas que no se reconocen simplemente se ignoran.

## Step 6 · Pick the Model and the Scope

[calm] El modelo es opcional. Si no lo defines, el agente hereda el modelo predeterminado.
[600ms]
[confident] Dónde está el archivo decide quién puede usar el agente: un repositorio, una organización o una empresa. Los agentes de la organización van en una carpeta especial del repositorio dot github de la organización.
[600ms]
[curious] Si el mismo nombre existe en dos niveles, gana el nivel más bajo.

## Step 7 · Copilot Setup Steps

[calm] Ahora el entorno. Un archivo de flujo de trabajo con un solo trabajo llamado pasos de configuración de copilot prepara todo antes de que arranque el agente.
[600ms]
[confident] Estos pasos se ejecutan en GitHub Actions, así que aplican a las sesiones que corren ahí, no a las sesiones del sandbox en la nube.
[600ms]
[serious] Si falla un paso, Copilot omite el resto y empieza con lo que tenga.

## Step 8 · Scope to a Repository and a Branch

[calm] Los archivos del agente están en la rama predeterminada, así que primero fusiona ahí el perfil y el archivo de pasos de configuración.
[600ms]
[confident] Una sesión empieza en un repositorio, y Copilot crea una rama nueva a partir de la rama base que elijas.
[600ms]
[reassuring] El resultado es una pull request contra esa rama base. En un sandbox en la nube, las sesiones pueden abarcar varios repositorios de una misma organización.

## Step 9 · Invoke It

[curious] Hay varias formas de iniciar tu agente personalizado. Elígelo cuando asignes un issue o inicies una tarea.
[600ms]
[confident] En una pull request, menciona a Copilot para pedir cambios. En un flujo de trabajo, la API de issues acepta un agente personalizado y una rama base, y esa función está en versión preliminar.
[600ms]
[encouraging] También puedes elegirlo en la lista desplegable de la pestaña de agentes, o usar el comando agent en Copilot CLI.

## Step 10 · Test the Agent

[calm] Prueba el agente con una tarea pequeña que puedas verificar.
[600ms]
[curious] Lee el resultado. Cuando Copilot abre una pull request, indica qué agente personalizado se usó.
[600ms]
[determined] Si está mal, corrige las instrucciones en vez del resultado, y vuelve a ejecutarlo.

## Step 11 · Recap: The Files That Make an Agent

[calm] Cuatro cosas forman un agente. Las instrucciones definen las reglas, y el perfil define el rol y las herramientas.
[600ms]
[confident] Los pasos de configuración preparan el entorno, y el alcance define el repositorio, la rama base y cómo se inicia el agente.
[600ms]
[proud] La guía de estudio de G H 600 lo incluye en implementar el uso de herramientas y la interacción con el entorno.
