# Guion de narración - Fundamentos de Azure Storage

**Source animation:** journeys/Fundamentals/AzureStorageBasics.html
**Script status:** Authored voiceover.
**Language:** Español

Las indicaciones entre corchetes no se pronuncian. Las pausas van en líneas separadas. Un bloque por paso de la animación.
<!-- Sources: https://learn.microsoft.com/training/modules/describe-azure-storage-services/ ; https://learn.microsoft.com/azure/storage/blobs/access-tiers-overview ; https://learn.microsoft.com/azure/storage/common/storage-redundancy -->

## Step 1 · Where should the data live?

[calm] La tienda tiene fotos de productos, documentos compartidos del almacén y tareas de pedidos pendientes. Todo son datos, pero Contoso los utiliza de distintas maneras.
[600ms]
[confident] La elección del almacenamiento empieza por cómo se accede a ellos. El lugar adecuado para una imagen no siempre sirve para un archivo compartido o un mensaje de trabajo.

## Step 2 · Start with a storage account

[calm] Una cuenta de almacenamiento reúne ajustes de Azure Storage, como el tipo de cuenta y las opciones de redundancia. Contoso empieza con una cuenta Standard de uso general.
[600ms]
[confident] Las cuentas Premium se orientan a servicios concretos de alto rendimiento. No son una mejora universal que acelere cualquier tipo de almacenamiento.

## Step 3 · Pick the service per kind of data

[calm] Las fotos encajan en Blob Storage, que guarda objetos como imágenes y documentos. El personal utiliza Azure Files cuando necesita archivos compartidos mediante protocolos de uso habitual.
[600ms]
[confident] Ambos almacenan datos, pero la forma en que las personas y las aplicaciones acceden a ellos determina qué servicio es el adecuado.

## Step 4 · Separate work from records

[calm] Queue Storage guarda mensajes que describen tareas para procesar después. Table Storage conserva registros sencillos organizados por claves, cuando ese modelo de datos encaja con la necesidad.
[600ms]
[confident] Contoso mantiene su base de datos relacional para los pedidos que la necesitan. Queues y Tables no la sustituyen directamente.

## Step 5 · Plan the move

[calm] Antes de trasladar datos, Contoso debe conocer sus sistemas actuales y la magnitud del trabajo. Azure Migrate ayuda a evaluar y planificar la migración.
[600ms]
[confident] Azure Data Box es una opción para grandes transferencias en las que conviene mover los datos sin conexión. Evaluar y transportar resuelven partes distintas del traslado.

## Step 6 · Move and synchronize files

[calm] Contoso elige la herramienta según la tarea. AzCopy sirve para transferencias mediante scripts; Storage Explorer ofrece una interfaz gráfica; Azure File Sync sincroniza recursos compartidos de Windows Server con Azure Files.
[600ms]
[confident] Copiar datos una vez y mantener una carpeta compartida sincronizada de forma continua son necesidades diferentes.

## Step 7 · Match the tier to how often you read

[calm] Los clientes necesitan ver las imágenes al instante. Hot, Cool y Cold son niveles de blobs en línea con distintos costes de almacenamiento y acceso. Archive conserva datos sin conexión hasta rehidratarlos a un nivel en línea.
[600ms]
[confident] Elige según frecuencia y recuperación. Eliminar antes de tiempo puede generar cargos; almacenar barato no lo es todo.

## Step 8 · Decide how many copies to keep

[calm] La redundancia local mantiene copias locales; la redundancia de zona las distribuye entre zonas. Las opciones georredundantes añaden a cualquiera de esos diseños una copia en otra región.
[600ms]
[confident] La replicación regional es asíncrona: los últimos cambios pueden no haber llegado. La redundancia ayuda ante fallos de infraestructura, pero no sustituye un plan de copias de seguridad y recuperación.

## Step 9 · Storage Basics - All in One

[calm] Contoso asigna fotos a Blobs, documentos compartidos a Files, trabajo pendiente a Queues y registros sencillos por clave a Tables. El tipo de cuenta, el nivel de acceso y la redundancia deben ser compatibles con el servicio.
[600ms]
[confident] Los datos ya tienen un lugar adecuado. Ahora toca decidir quién puede acceder a los recursos y qué puede hacer.