# Narrator Script — Architect · Pick the right compute

**Source animation:** [PickCompute.html](../../../journeys/Architect/PickCompute.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/architecture/guide/technology-choices/compute-decision-tree>

---

## Step 1 · Control or effort: choose your spot

[calm] Las cargas de trabajo de Contoso requieren computación, pero no todas necesitan a Contoso para operar un servidor.
[600ms]
[curious] El espectro intercambia control directo con esfuerzo de gestión, desde la infraestructura pasando por plataformas gestionadas hasta funciones impulsadas por eventos.
[600ms]
[reassuring] Empieza decidiendo qué responsabilidades necesita realmente el equipo, en lugar de asumir que cada carga de trabajo corresponde a una máquina virtual.

## Step 2 · Six questions that decide

[calm] Estas seis preguntas convierten una solicitud de cómputo vaga en un conjunto de requisitos de diseño.
[600ms]
[curious] Revisa el control del sistema operativo, el comportamiento de la puesta en marcha, la escalabilidad, el estado, los precios y las habilidades del equipo que lo va a gestionar.
[600ms]
[reassuring] Evalúa cada carga de trabajo por separado, porque una aplicación completa puede utilizar legítimamente varios servicios de cómputo.

## Step 3 · Virtual machines: when, which size, how many

[calm] Una máquina virtual es adecuada cuando Contoso necesita acceso al sistema operativo o software que requiere ese nivel de control.
[600ms]
[curious] Luego ajusta el tamaño de la familia al requerimiento de recursos y planifica cómo se mantendrán disponibles varias instancias.
[600ms]
[reassuring] Un conjunto de escalas aborda instancias repetidas y escalabilidad, pero no elimina la responsabilidad del sistema operativo invitado.

## Step 4 · Containers: four services, one choice

[calm] Las cuatro opciones gestionan contenedores, pero exponen diferentes responsabilidades operativas.
[600ms]
[curious] AKS se adapta a un equipo que necesita el Kubernetes API, mientras que Container Apps elimina la necesidad de operar esa interfaz del clúster.
[600ms]
[reassuring] La API de catálogo de Contoso necesita una plataforma de contenedores gestionada, por lo que la carga de trabajo y los requisitos del equipo apuntan a Container Apps.

## Step 5 · Serverless: code that runs when something happens

[calm] Azure Functions se adapta al código desencadenado por eventos, mientras que Logic Apps ofrece un enfoque de flujo de trabajo low-code.
[600ms]
[curious] El camino de escala a cero reduce la capacidad inactiva, pero el comportamiento de arranque y los requisitos de estado siguen siendo importantes.
[600ms]
[reassuring] Elige el plan y el patrón de aplicación en función de esas necesidades en lugar de prometer que el serverless elimina todas las restricciones operativas.

## Step 6 · Batch: a pool of VMs for the nightly job

[calm] La exportación nocturna de Contoso puede dividirse en tareas independientes, así que Azure Batch la organiza como un pool, un trabajo y tareas.
[600ms]
[curious] El pool suministra las máquinas, el planificador distribuye el trabajo y la capacidad puede reducirse cuando termine el procesamiento.
[600ms]
[reassuring] La capacidad spot reduce el coste de trabajos que se pueden reintentar, pero el diseño de la tarea debe tolerar el desahucio.

## Step 7 · Five workloads, five services

[calm] Las mismas seis preguntas ahora sitúan las cinco cargas de trabajo de Contoso en servicios que satisfacen diferentes necesidades.
[600ms]
[curious] La respuesta no es la mayor plataforma para cada carga de trabajo; cada tarea tiene un requisito específico detrás.
[600ms]
[reassuring] Consulta el motivo asociado a cada servicio y pregunta si una opción más sencilla podría cumplir ese requisito.

## Step 8 · All in one: pick the simplest service that fits

[calm] El mapa completado mantiene el requisito de carga de trabajo junto a la elección del servicio, haciendo visible el compromiso.
[600ms]
[curious] Utiliza la infraestructura cuando sea necesario el control y los servicios gestionados cuando la plataforma pueda quitar trabajo al equipo.
[600ms]
[reassuring] A continuación, rodea la aplicación con una pasarela API, caché, configuración y una ruta de lanzamiento repetible.

