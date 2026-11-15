# Narrator Script — Copilot Studio · Copilot Studio — Plan an Agent Solution

**Source animation:** [PlanAgentSolutions.html](../../../journeys/CopilotStudio/PlanAgentSolutions.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/>

---

## Step 1 · Building is easy. Deciding comes first.

[calm] El creador de Contoso construye un agente auxiliar en una tarde. Funciona, y todos están satisfechos.
[600ms]
[concerned] Luego llegan siete preguntas, y cada una cambia cómo debe construirse el agente.
[600ms]
[reflective] Reflejan las habilidades de solución de Planificar y Agente en la guía de estudio A B 620.

## Step 2 · Seven decisions to make first

[confident] Aquí está el mapa: sistemas empresariales, identidad, canales, AI responsable, gobernanza, componentes reutilizables y audiencia.
[600ms]
[calm] Cada decisión moldea la construcción.
[600ms]
[encouraging] Respóndelas a todas, un prototipo rápido se convierte en un plan que puedes defender.

## Step 3 · Decision 1 · Which systems will it touch?

[curious] Primero, enumera todos los sistemas que el agente debe leer o sobre los que debe actuar.
[600ms]
[confident] Para cada una, decide: ¿es conocimiento para leer o una herramienta que actúa?
[600ms]
[calm] El conocimiento puede provenir de conectores de Copilot, conectores de Power Platform o Azure AI Search. Las herramientas pueden ser conectores, servidores de MCP o APIs REST. Los sistemas de Contoso que aparecen aquí son inventados.

## Step 4 · Decision 2 · How do people sign in?

[curious] Después, elige cómo los usuarios demuestran quiénes son.
[600ms]
[confident] Esa elección decide qué canales pueden funcionar y qué puede hacer el agente en nombre del usuario.
[600ms]
[reassuring] Autenticar con Microsoft es el valor predeterminado para los agentes nuevos. Los cambios solo entran en vigor después de publicar.

## Step 5 · Decision 2 · Whose permissions do tools use?

[curious] Cuando una herramienta llama a un sistema, se ejecuta como alguien más. ¿A quién debería acceder el acceso?
[600ms]
[confident] Con las credenciales del usuario que ha iniciado sesión, la gente solo accede a los datos que puede ver.
[600ms]
[reflective] Con las credenciales del creador, la herramienta actúa como su autor, lo que se adapta a los recursos compartidos. Elige a propósito, porque sin autenticación, las herramientas no pueden usar las credenciales de usuario.

## Step 6 · Decision 3 · Where will it live?

[calm] Un canal es donde la gente conoce al agente, como Teams, Microsoft 365 Copilot, SharePointo una página web.
[600ms]
[confident] Publica primero y luego conecta los canales que ya utiliza tu audiencia. Cada canal tiene su propia experiencia.
[600ms]
[serious] La web de demostración es para pruebas, no para clientes, y los administradores pueden bloquear canales con políticas de datos.

## Step 7 · Decision 4 · Who is it for?

[curious] Elige primero al público, interno o externo.
[600ms]
[confident] El canal, el inicio de sesión y las credenciales de la herramienta se derivan de esa elección. Prueba cada uno.
[600ms]
[reflective] Estas parejas están planificando los valores predeterminados. Teams usa Authenticate con Microsoft, otros canales necesitan autenticación manual y ninguna autenticación permite a cualquiera con el chat de enlace.

## Step 8 · Decision 5 · How will it stay responsible?

[serious] Planifica las barreras antes del lanzamiento, no después de que algo salga mal.
[600ms]
[confident] Contenido moderado, fundamenta las respuestas en conocimientos aprobados, di a la gente que es AIy mantén a la persona al alcance.
[600ms]
[reassuring] La moderación de contenido se comprueba dos veces, al entrar y antes de que el agente responda. Los creadores también pueden limitar las fuentes de conocimiento y desactivar respuestas no fundamentadas.

## Step 9 · Decision 6 · Who governs it?

[calm] Los administradores establecen las reglas en el centro de administración Power Platform.
[600ms]
[confident] Deciden dónde se construyen los agentes, a qué pueden conectarse y quién puede compartirlos.
[600ms]
[serious] Los conectores se clasifican en Negocios, No Empresariales o Bloqueados, y los datos no pueden fluir entre esos grupos.

## Step 10 · Decision 7 · What can we reuse?

[curious] ¿Por qué reconstruir las mismas piezas en cada agente? Empaqueta los bloques de construcción compartidos una vez.
[600ms]
[confident] Una colección puede contener temas, conocimientos, herramientas, agentes hijos, servidores MCP, conectores, flujos y entidades.
[600ms]
[calm] Se exporta como una solución gestionada y puede compartirse con permisos del Visor o del Editor. Los autores pueden usar sus componentes, pero no cambiarlos.

## Step 11 · Your plan on one page

[calm] Siete decisiones respondidas convierten un prototipo en un plan.
[600ms]
[encouraging] Compara a tu propio agente con ellos, uno por uno, y anota las lagunas.
[600ms]
[determined] Luego estudia las habilidades de examen y lee la guía de estudio de A B 620 actual, porque los exámenes y los nombres de Copilot Studio cambian.
