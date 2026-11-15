# Narrator Script — Monitor · Agents and Data Collection Rules

**Source animation:** [AgentsAndDcr.html](../../../journeys/Monitor/AgentsAndDcr.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/agents/azure-monitor-agent-overview>
- <https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview>
- <https://learn.microsoft.com/azure/azure-monitor/data-collection/data-collection-transformations>
- <https://learn.microsoft.com/azure/azure-monitor/vm/data-collection>

---

## Step 1 · Azure sees the box, not what’s inside

[calm] Te presento a vm-web-01, una máquina virtual de Contoso. Azure recopila por sí solo las métricas de su host: CPU, red y disco.
[600ms]
[concerned] Pero dentro del sistema operativo invitado, los eventos de Windows, los contadores de rendimiento y los registros quedan a oscuras.
[600ms]
[confident] Ver la caja no es lo mismo que ver lo que corre dentro. Los datos del invitado requieren una configuración adicional.

## Step 2 · An agent reads from the inside

[curious] El software que corre dentro de la máquina puede leer lo que la plataforma no puede.
[600ms]
[confident] Azure Monitor Agent recopila datos del sistema operativo invitado, tanto de máquinas de Azure como híbridas, y los entrega a Azure Monitor.
[600ms]
[reassuring] Sin un agente, solo puedes recopilar datos del host.

## Step 3 · One agent to know: Azure Monitor Agent

[calm] Antes había varios agentes. Ahora hay uno solo que debes conocer: Azure Monitor Agent, o AMA.
[600ms]
[serious] Reemplaza al agente de Log Analytics, también llamado MMA u OMS, que Microsoft retiró el treinta y uno de agosto de dos mil veinticuatro.
[600ms]
[encouraging] Si estás migrando, el libro de trabajo Migration Helper y el generador de configuración DCR convierten la configuración antigua del espacio de trabajo en reglas de recogida de datos.

## Step 4 · Getting the agent onto machines

[curious] Hay tres formas de poner el agente. Instálalo desde el portal, incorpora máquinas externas con Azure Arc, o deja que Azure Policy lo haga a gran escala.
[600ms]
[confident] Una vez en marcha, el agente inicia sesión con la identidad gestionada de la máquina.
[600ms]
[reassuring] Funcionan tanto las identidades asignadas por el sistema como las asignadas por el usuario, y estas últimas van mejor para despliegues grandes.

## Step 5 · A rule decides: the data collection rule

[curious] Aquí está la idea clave. El agente no decide qué recopilar.
[600ms]
[confident] Una regla de recogida de datos, o DCR, le dice qué reunir, cómo darle forma y a dónde enviarlo.
[600ms]
[calm] Una DCR es configuración, no una tubería. El agente la descarga y Azure Monitor la aplica.

## Step 6 · Four parts make up a DCR

[calm] Una DCR tiene cuatro partes. Las fuentes de datos dicen qué recopilar.
[600ms]
[confident] Los flujos llevan los datos con una forma conocida, y una transformación opcional los filtra. Los destinos dicen dónde terminan.
[600ms]
[curious] Por ejemplo, los eventos de Windows usan el flujo Microsoft Event y terminan en la tabla Event. Los contadores terminan en la tabla Perf.

## Step 7 · Filter before you pay

[curious] Una transformación es una instrucción KQL que filtra o reorganiza los datos antes de ingerirlos en el espacio de trabajo.
[600ms]
[confident] Descarta lo que nunca vas a leer, y habrá menos que ingerir y menos que almacenar.
[600ms]
[calm] Las transformaciones en tiempo de ingesta se ejecutan en Azure Monitor. Las de varias etapas, todavía en vista previa, también pueden ejecutarse en el agente y reducir además el tráfico de red.

## Step 8 · One rule, many machines

[calm] Una DCR no hace nada hasta que una asociación la vincula con una máquina, y esa es la pieza que aquí falta.
[600ms]
[confident] Una DCR puede atender a muchas máquinas, y una máquina puede seguir varias DCR. En conjunto, es una relación de muchos a muchos.
[600ms]
[reassuring] Elimina una asociación y esa recogida se detiene.

## Step 9 · Compose your own DCR

[excited] Ahora te toca a ti. Activa y desactiva las fuentes de datos y los destinos.
[600ms]
[confident] El flujo y un resumen simplificado de la DCR se actualizan sobre la marcha.
[600ms]
[curious] Fíjate en los límites: syslog es solo para Linux, los eventos de Windows solo para Windows, y los contadores de rendimiento también pueden ir a métricas, en vista previa.

## Step 10 · Platform logs take another road

[calm] Los recursos de Azure envían datos de plataforma sin ningún agente. Aquí lo hace por su cuenta un Key Vault, y de eso se trata.
[600ms]
[confident] Una configuración de diagnóstico elige qué datos exportar y a dónde van: un espacio de trabajo, una cuenta de almacenamiento o un event hub.
[600ms]
[serious] Los registros de recursos no se recopilan hasta que creas una. Solo las métricas de plataforma y el registro de actividad llegan solos.

## Step 11 · The quick start: VM insights

[curious] ¿Quieres el inicio rápido? Activa VM insights, y Azure se encarga de conectar todo.
[600ms]
[confident] Instala el agente y crea una DCR con un conjunto de datos predefinido.
[600ms]
[reassuring] ¿Quieres más? No modifiques esa DCR. Crea tus propias DCR para recopilar más.

## Step 12 · Agents and DCRs in one view

[calm] Los datos del invitado necesitan un agente. La regla de recogida de datos decide qué, cómo y dónde.
[600ms]
[confident] Las asociaciones vinculan las reglas con las máquinas, y los datos de plataforma usan configuraciones de diagnóstico.
[600ms]
[proud] Ten claras esas cuatro ideas y podrás explicar exactamente cómo llegan los datos a Azure Monitor.
