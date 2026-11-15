# Narrator Script — GitHub · Where the Agent Runs: Environments, Firewalls and Safe Failure

**Source animation:** [AgentExecutionEnvironments.html](../../../journeys/GitHub/AgentExecutionEnvironments.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>

---

## Step 1 · Three places an agent can run

[calm] Ravi le pasa el problema de Maya a un agente. Primero decide dónde se ejecuta, porque eso define a qué puede acceder y quién se encarga de la máquina.
[600ms]
[confident] Hay tres lugares: tu laptop, un runner de Actions o un sandbox en la nube. El sandbox es un entorno Linux aislado que GitHub crea y gestiona para la sesión.
[600ms]
[serious] Eliges dónde se ejecuta la sesión cuando la inicias, y después ya no se puede cambiar.

## Step 2 · A short-lived environment, set up first

[calm] En Actions, el agente en la nube trabaja en un entorno nuevo y temporal.
[600ms]
[confident] Primero lo prepara un archivo de configuración, que instala las herramientas y dependencias que el agente necesita para compilar y probar. Es un flujo de trabajo normal con un solo trabajo, y solo surte efecto en la rama predeterminada.
[600ms]
[reassuring] Si un paso falla, el agente omite los pasos de configuración restantes y arranca con lo que tenga.

## Step 3 · The firewall: allowed hosts only

[curious] Por defecto, un firewall limita el acceso del agente a internet.
[600ms]
[confident] Los hosts que Copilot necesita para GitHub siempre están permitidos, y una lista recomendada cubre los registros de paquetes y otros hosts comunes. Los propietarios y administradores del repositorio pueden agregar más, y las sesiones nuevas los toman. Todo lo demás se bloquea y se reporta en la pull request.
[600ms]
[serious] El firewall cubre los comandos que ejecuta el agente, no los servidores MCP ni los pasos de configuración, y no es una solución de seguridad completa.

## Step 4 · Different limits per environment

[curious] Desarrollo, pruebas y producción no deberían comportarse igual. Elige uno para comparar.
[600ms]
[confident] Un entorno es una etapa con nombre, con sus propios secretos y reglas de protección. Los revisores requeridos hacen que una persona apruebe antes de que corra el trabajo, así que un despliegue puede quedar en espera.
[600ms]
[calm] El agente también tiene sus propios secretos y variables, definidos por repositorio o por organización.

## Step 5 · Start an agent from a workflow

[curious] Un flujo de trabajo puede ejecutar Copilot CLI en un runner de Actions, sin nadie frente al teclado.
[600ms]
[confident] Primero hay un trigger, luego la configuración del trabajo, la instalación del CLI y la autenticación con un token guardado como secreto. Al final, ejecuta un prompt y lista las herramientas que puede usar.
[600ms]
[reflective] El trabajo recibe los permisos mínimos que necesita. Para la mayoría de las automatizaciones, GitHub recomienda Agentic Workflows, que está en versión preliminar.

## Step 6 · Branches and pull requests it may create

[calm] El agente puede crear trabajo, pero una persona decide qué se publica.
[600ms]
[confident] Hace push a una rama propia, o a la rama de la pull request en la que se le pidió trabajar, y abre una pull request en borrador. Una persona la revisa, la marca como lista y la fusiona.
[600ms]
[reassuring] Las protecciones de rama siguen aplicando, y por defecto sus flujos de trabajo esperan hasta que alguien los apruebe.

## Step 7 · When a step fails

[concerned] Las cosas van a fallar, y es lo esperado.
[600ms]
[confident] El registro de la sesión guarda cada comando y su salida, además del razonamiento y las herramientas del agente. Lee primero el comando, su salida y su código de salida.
[600ms]
[calm] Después decide qué sigue: reintentar, deshacer el cambio o escalar.

## Step 8 · Retry, with a limit

[calm] Un reintento es una segunda oportunidad, no un ciclo sin fin.
[600ms]
[confident] Define un número fijo de intentos, espera entre uno y otro, y detente al llegar al límite. Reintenta solo los pasos que no hacen daño si se ejecutan dos veces.
[600ms]
[serious] Cuando se agotan los intentos, detente y pasa el control a una persona. Es un patrón que escribes tú en el script, no una opción integrada.

## Step 9 · Roll back

[serious] Si un cambio ya fusionado causa daño, hay que deshacerlo.
[600ms]
[confident] Un revert crea una pull request nueva que revierte el commit de fusión, así que la corrección pasa por la misma revisión y las mismas verificaciones que cualquier cambio. Para hacerlo necesitas permiso de escritura.
[600ms]
[calm] Si hay conflicto, haz el revert con Git. Y cuando la pull request del agente esté cerrada o fusionada, elimina su rama.

## Step 10 · Escalate to a person

[calm] Cuando llegas al límite, o no está claro qué sigue, pasa el caso a una persona.
[600ms]
[confident] Un buen traspaso dice qué se pidió, qué se intentó, cuál fue el error y qué cambió. Incluye enlaces al registro de la sesión y a la pull request.
[600ms]
[encouraging] Entonces la persona puede orientar la sesión en curso con un prompt de seguimiento, o tomar el control de la rama.

## Step 11 · Trace every action

[curious] ¿Quién cambió esto y por qué? Tres registros lo responden.
[600ms]
[confident] La pull request guarda el historial de lo que se pidió, se revisó y se fusionó. El commit tiene como autor a Copilot, como coautor a la persona, y está firmado. Enlaza al registro de la sesión.
[600ms]
[reassuring] El registro de la sesión muestra el razonamiento y las herramientas del agente, y los administradores también reciben eventos del registro de auditoría.

## Step 12 · Recap: from error to escalation

[calm] Antes de ejecutar, decide dónde corre, y luego los pasos de configuración, el firewall, los límites del entorno, el flujo de trabajo y las acciones permitidas.
[600ms]
[confident] Cuando algo falla, lee el error, reintenta dentro de un límite, deshaz el cambio y escala con los hechos.
[600ms]
[proud] Rastrea siempre todo a través de la pull request, el commit y el registro de la sesión. Eso cubre las habilidades de entornos de G H 600.
