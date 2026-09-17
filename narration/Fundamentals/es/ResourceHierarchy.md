# Guion de narración - Jerarquía de recursos

**Source animation:** journeys/Fundamentals/ResourceHierarchy.html
**Script status:** Authored voiceover.
**Language:** Español

Las indicaciones entre corchetes no se pronuncian. Las pausas van en líneas separadas. Un bloque por paso de la animación.
<!-- Source: https://learn.microsoft.com/training/modules/describe-core-architectural-components-of-azure/ -->

## Step 1 · Which resources belong together?

[calm] Contoso está creando una tienda de pruebas y otra que utilizarán los clientes. Aparecen máquinas, bases de datos y otros recursos, pero una lista plana no muestra cuáles están relacionados.
[600ms]
[confident] El equipo necesita límites de administración para mantener separado el trabajo del entorno temporal de pruebas y el de producción.

## Step 2 · Start with a resource

[calm] Un recurso es un elemento que puedes crear y administrar en Azure, como una máquina virtual, una red o una cuenta de almacenamiento. Son los componentes individuales de la tienda.
[600ms]
[confident] Cada uno tiene su configuración. Ser un recurso no significa necesariamente tener un cargo independiente.

## Step 3 · Location is not ownership

[calm] Contoso debe responder a dos preguntas: ¿dónde funciona este recurso y a qué conjunto de administración pertenece? Una región responde a la ubicación; un grupo de recursos organiza la administración.
[600ms]
[confident] Un grupo de recursos no es un centro de datos, una zona de disponibilidad ni una conexión de red.

## Step 4 · Group what shares a lifecycle

[calm] Agrupemos los recursos de pruebas y dejemos producción en otro grupo. Los recursos que se crean, actualizan y retiran juntos suelen pertenecer al mismo grupo.
[600ms]
[confident] Eliminar el grupo de pruebas elimina sus recursos, no el grupo de producción. Contoso comprueba las dependencias antes de borrar nada.

## Step 5 · One subscription holds the groups

[calm] Miremos un nivel por encima de los grupos de recursos. La suscripción los contiene y establece un límite para administrar el acceso y registrar el uso facturado.
[600ms]
[confident] Contoso puede identificar qué suscripción paga esos recursos. Dentro de ella, pruebas y producción siguen separados; sus ciclos de vida no se fusionan.

## Step 6 · Management groups organize subscriptions

[calm] A medida que crece, Contoso puede utilizar varias suscripciones. El grupo de administración exterior las reúne para no repetir la gobernanza de forma independiente en cada una.
[600ms]
[confident] Las asignaciones de directivas y roles pueden aplicarse hacia abajo en la jerarquía. Los recuadros representan ámbitos de administración, no edificios con servidores físicos.

## Step 7 · Resource Hierarchy - All in One

[calm] Lee los contenedores de fuera hacia dentro: grupo de administración, suscripción, grupos de recursos y recursos individuales. Pruebas y producción mantienen ciclos de vida separados dentro de esta estructura.
[600ms]
[confident] Las directivas y asignaciones de roles aplicables pueden heredarse; no ocurre con todos los ajustes. Una vez organizada la administración, toca elegir dónde funcionará la tienda.