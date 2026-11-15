# Narrator Script — Compute · ARM templates and Bicep: read, change, deploy, export

**Source animation:** [ArmAndBicepDeployments.html](../../../journeys/Compute/ArmAndBicepDeployments.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview>
- <https://learn.microsoft.com/azure/azure-resource-manager/templates/syntax>
- <https://learn.microsoft.com/azure/azure-resource-manager/templates/deployment-modes>
- <https://learn.microsoft.com/azure/azure-resource-manager/bicep/deploy-what-if>

---

## Step 1 · Built by hand, twice

[calm] Priya, de Contoso, hizo clic en el portal para crear la misma cuenta de almacenamiento para Dev, y otra vez para Prod.
[600ms]
[concerned] Al hacerlo a mano, las dos se fueron desviando. Un ajuste por aquí, una etiqueta por allá, y nadie lo notó.
[600ms]
[confident] Con una sola plantilla se acaban las suposiciones. Describes el recurso una vez y lo despliegas siempre de la misma manera.

## Step 2 · Anatomy of an ARM template

[calm] Una plantilla ARM es un archivo JSON, y solo se necesitan tres partes: el esquema, la versión del contenido y los recursos.
[600ms]
[confident] Los archivos reales suelen agregar parámetros, variables, funciones y salidas, para que el mismo archivo sirva para desarrollo y para producción.
[600ms]
[reassuring] El JSON en pantalla está recortado para que quepa, pero tiene exactamente la forma que verás en las plantillas reales.

## Step 3 · The same thing in Bicep

[curious] Esta es la misma cuenta de almacenamiento escrita en Bicep. Sigue el cursor de lectura bloque por bloque.
[600ms]
[impressed] Es más corto, y no hay que cuidar la puntuación de JSON.
[600ms]
[confident] Bicep es declarativo, así que el orden de los bloques no cambia cómo se ejecuta el despliegue. Learn recomienda Bicep para trabajo nuevo: las mismas capacidades, con una sintaxis más fácil.

## Step 4 · Modify an existing ARM template

[calm] Casi siempre editas un archivo que ya tienes. Agrega un parámetro, úsalo para el SKU y agrega una etiqueta.
[600ms]
[confident] Luego vuelve a desplegar el mismo archivo. También puedes subir la versión del contenido para dejar registro del cambio.
[600ms]
[serious] Pero ojo. Un nuevo despliegue vuelve a aplicar todas las propiedades del archivo, así que una propiedad que omitas se restablece a su valor predeterminado.

## Step 5 · Modify an existing Bicep file

[calm] Tres herramientas de Bicep que usarás cada semana al editar.
[600ms]
[confident] Un módulo divide un archivo en archivos más pequeños, que otro archivo despliega. Un bucle repite un recurso, y cada copia necesita un nombre único.
[600ms]
[curious] Y la palabra clave existing apunta a algo que ya está desplegado, así que se referencia en lugar de crearse otra vez.

## Step 6 · Deploy it: choose the scope

[calm] El comando decide dónde se hace el despliegue, y los mismos comandos sirven para desplegar una plantilla JSON o un archivo Bicep.
[600ms]
[confident] De forma predeterminada, el archivo se despliega en el grupo de recursos, y solo va a otro lado si define un ámbito de destino.
[600ms]
[reflective] En despliegues de suscripción, grupo de administración y tenant, los comandos también piden una ubicación, porque el propio registro del despliegue tiene que guardarse en algún lugar.

## Step 7 · Incremental, Complete and what-if

[calm] El modo incremental es el predeterminado, y deja en paz los recursos que la plantilla no menciona.
[600ms]
[serious] El modo completo elimina todo lo que la plantilla no enumera, así que no se recomienda y se está dejando de usar. Usa stacks de despliegue cuando necesites eliminar.
[600ms]
[determined] Mueve el interruptor para ver la diferencia, y ejecuta siempre what-if primero para previsualizar los cambios.

## Step 8 · Export a deployment as a template

[curious] Los recursos existen, pero nadie guardó el archivo. ¿Y ahora qué?
[600ms]
[confident] Exporta una plantilla, ya sea como una instantánea del grupo tal como está hoy, o como la plantilla exacta de un despliegue anterior.
[600ms]
[reassuring] En el portal, elige Exportar plantilla en el grupo de recursos, o abre Despliegues, elige uno y selecciona Plantilla.

## Step 9 · Convert: decompile and build

[calm] Para pasar de un formato a otro, usa las herramientas de Bicep.
[600ms]
[confident] Decompile convierte una plantilla ARM en Bicep. Build convierte Bicep en una plantilla ARM, y las dos son funcionalmente equivalentes.
[600ms]
[hesitant] Decompile hace lo que puede, porque no hay una correspondencia garantizada de JSON a Bicep. Corrige las advertencias o errores que te muestre.

## Step 10 · Troubleshoot a failed deployment

[serious] Hay tres tipos de error de despliegue, y cada uno aparece en un lugar distinto.
[600ms]
[confident] Los errores de validación y de comprobación previa aparecen en el registro de actividad, pero no en el historial de despliegues.
[600ms]
[curious] Un archivo Bicep con errores de sintaxis ni siquiera se compila, así que tampoco aparece en el registro de actividad. Primero averigua de qué tipo es el tuyo.

## Step 11 · ARM, Bicep or template spec: pick one

[calm] Elige según el trabajo que tienes enfrente. Las plantillas ARM y Bicep tienen las mismas capacidades, y Learn recomienda Bicep por su sintaxis más sencilla.
[600ms]
[confident] Una especificación de plantilla guarda una plantilla en Azure, así que puedes compartirla con Azure RBAC y dejar que otros la desplieguen sin tener permiso de escritura sobre la plantilla.
[600ms]
[proud] Y ahora ponte a prueba con la habilidad A Z 104: automatizar el despliegue de recursos con plantillas ARM o archivos Bicep.
