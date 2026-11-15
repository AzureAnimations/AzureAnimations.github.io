# Narrator Script — GitHub · Contoso Delivery · Build It with Copilot · ES

**Source animation:** `journeys/GitHub/BuildWithCopilot.html`

Los encabezados `## Step N` se mantienen en inglés a propósito (índice del generador y de las leyendas).
No se nombra ningún modelo, a propósito: la lista cambia cada pocos meses.

---

## Step 1 · Not Autocomplete. A Pair Programmer.

[warm] El tablero está lleno. Alguien tiene que escribir el código, y no lo vas a escribir solo.
[500ms]
[calm] A la izquierda, autocompletado normal: escribes y te ofrece palabras que ya ha visto en el archivo. A la derecha, Copilot: escribes un comentario diciendo lo que quieres, y escribe la función.
[500ms]
[thoughtful] La diferencia no es la inteligencia, es el contexto. Pero es un motor de sugerencias, no un oráculo. Acierta lo bastante como para ahorrarte tiempo real; falla lo bastante como para que leas cada línea.

## Step 2 · What Is Free, and What You Pay For

[calm] Copilot Free no cuesta nada y es realmente utilizable: dos mil finalizaciones al mes, y la IA elige el modelo. Lo que no incluye es el agente en la nube.
[500ms]
[bright] Pro son diez dólares por mil quinientos créditos de IA. Pro Plus, treinta y nueve por siete mil y los modelos premium. Max, cien por veinte mil. En el trabajo se factura por puesto: Business diecinueve, Enterprise treinta y nueve.
[500ms]
[reassuring] Y si eres estudiante o docente, para antes de pagar. Verifícate con GitHub y Pro es gratis.

## Step 3 · AI Credits: What Actually Costs You

[bright] Esta es la parte que casi todo el mundo entiende mal. Las finalizaciones de código — el texto gris mientras escribes — no cuestan ningún crédito. En cualquier plan de pago son ilimitadas, así que programar todo el día no mueve el contador.
[500ms]
[serious] Lo que sí lo mueve: los mensajes de chat, las ejecuciones del agente y la revisión de código de Copilot. Las operaciones que piensan, y cada una consume de tu bolsa mensual.
[500ms]
[thoughtful] Si se te acaban, los créditos extra cuestan un céntimo cada uno, aunque en el trabajo un administrador decide si eso está siquiera activado.

## Step 4 · Who Picks the Model

[confident] Copilot no funciona con un solo modelo. Funciona con una lista rotatoria de varios proveedores, y deliberadamente no los voy a nombrar, porque esa lista estaría desfasada el trimestre que viene.
[500ms]
[calm] Lo que sí es estable es quién elige. En los planes Free y Student hay una opción: Auto. GitHub elige, y elige bien. En Pro y Business tienes un selector; en Pro Plus, Max y Enterprise incluye además los modelos premium.
[500ms]
[thoughtful] Un modelo más grande no es automáticamente una respuesta mejor. Empieza en Auto.

## Step 5 · Copilot in VS Code

[confident] Vamos a ponerlo a trabajar. En VS Code, instala la extensión de GitHub Copilot, inicia sesión con la cuenta que tiene tu plan y abre el chat. Esa es toda la preparación.
[500ms]
[calm] Aquí está la subtarea uno punto uno: el servidor base. Fíjate en lo que se escribe en el chat: no "hazme un servidor", sino el requisito real. Lee primero el código del backend. Carga la configuración. Falla rápido si falta una variable. Escucha en el puerto configurado. Cierra limpiamente con SIGINT y SIGTERM.
[700ms]
[serious] Ahora mira el orden en el que trabaja. No escribe primero. Lee: la carpeta de código, después app punto js y el archivo de configuración, que se van iluminando en el explorador. Después razona en voz alta: app punto js ya exporta la aplicación de Express, así que server punto js debería ocuparse del proceso, no de las rutas.
[700ms]
[bright] Y solo entonces escribe. Veinte líneas de server punto js, y todas encajan en el proyecto que acaba de leer. Esa es la diferencia entre una herramienta que adivina y una que mira.

## Step 6 · Ask, Plan, Agent

[confident] El chat no es una sola cosa. Es el mismo Copilot haciendo tres trabajos distintos.
[500ms]
[calm] Ask responde preguntas y no cambia nada en disco. Plan lee tu repositorio con herramientas de solo lectura y escribe un plan de implementación: propone, y tú apruebas. Agent hace el trabajo: edita archivos, ejecuta comandos, lee sus propios errores y reintenta.
[500ms]
[reassuring] Y se enlazan. Termina un plan y un botón, Start Implementation, se lo entrega entero a un agente.

## Step 7 · Hand Sub-task 1.2 to the Coding Agent

[confident] Hay un lugar más donde trabaja Copilot, y no es tu portátil.
[500ms]
[calm] De vuelta en github punto com, la siguiente incidencia del tablero: la subtarea uno punto dos.
[500ms]
[bright] Mira bajo Assignees. Hay un segundo botón: Assign to Agent. Ese botón es todo el traspaso: púlsalo y Copilot pasa a ser el asignado.
[500ms]
[calm] Se abre una sesión en la infraestructura de GitHub, no en tu máquina. Cierra la tapa y vete; un minuto después abre la pull request en borrador número catorce.
[500ms]
[thoughtful] Pero fíjate en que la incidencia no es una línea vaga: tres criterios de aceptación, hasta el de no filtrar nunca la clave de Azure Maps. Lo que escribiste en el tablero *es* el prompt.

## Step 8 · You Get a Draft, Not a Decision

[confident] Y esto es lo que vuelve. Una pull request marcada como Draft: tres archivos, con las pruebas incluidas.
[500ms]
[serious] Draft es la palabra importante. Es una propuesta de un compañero muy rápido, y no se gana ningún atajo: lee el diff, descarga la rama, ejecútala.
[500ms]
[thoughtful] Copilot escribió las líneas, pero el autor responsable eres tú. Tu nombre está en la fusión, y en el incidente si se rompe a las dos de la madrugada.
[500ms]
[bright] Lo que plantea la siguiente pregunta: ¿en qué rama debería haber vivido esto?
