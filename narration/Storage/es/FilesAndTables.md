# Narrator Script — Storage · Files and Tables: Which Service?

**Source animation:** [FilesAndTables.html](../../../journeys/Storage/FilesAndTables.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/storage/files/storage-files-introduction>
- <https://learn.microsoft.com/azure/storage/file-sync/file-sync-introduction>
- <https://learn.microsoft.com/azure/storage/tables/table-storage-overview>
- <https://learn.microsoft.com/azure/azure-netapp-files/azure-netapp-files-introduction>

---

## Step 1 · Three needs, one question

[calm] Contoso quiere un recurso compartido de archivos, una tabla NoSQL económica y un NAS empresarial en Azure, todo accesible desde sus oficinas.
[600ms]
[curious] ¿Qué servicio encaja con cada necesidad y cómo se conecta cada uno?
[600ms]
[confident] Lo responden cuatro servicios: Azure Files, Azure File Sync, Table storage y Azure NetApp Files. Contoso es ficticia.

## Step 2 · Four services, one map

[calm] Azure Files y Table storage viven dentro de una cuenta de almacenamiento.
[600ms]
[confident] Azure File Sync agrega una caché en un Windows Server delante de Azure Files, y Azure NetApp Files es un servicio empresarial independiente.
[600ms]
[reflective] Blob storage es de la misma familia, pero guarda objetos no estructurados, así que es algo distinto.

## Step 3 · Azure Files: a managed share

[calm] Azure Files es un recurso compartido de archivos totalmente administrado que vive en una cuenta de almacenamiento.
[600ms]
[confident] Puedes montarlo al mismo tiempo desde clientes en la nube y locales con Windows, Linux o macOS, sin software adicional, sin hardware y sin un sistema operativo que parchar.
[600ms]
[reassuring] Protégelo con instantáneas de solo lectura del recurso compartido, o deja que Azure Backup las programe y se encargue de la retención.

## Step 4 · SMB or NFS, SSD or HDD

[curious] Dos decisiones definen cada recurso compartido. Primero, un protocolo por recurso: SMB para acceso al estilo de Windows y NFS para Linux.
[600ms]
[calm] Segundo, un nivel de medios: SSD para baja latencia, o HDD para uso general económico. Los recursos compartidos NFS son solo SSD.
[600ms]
[serious] Un recurso compartido no puede usar los dos protocolos, y tampoco puede cambiar de nivel directamente. Creas uno nuevo y copias los datos.

## Step 5 · Who gets in: identity-based access

[calm] Un lift-and-shift conserva sus ACL de Windows. Los usuarios inician sesión con la identidad que ya tienen.
[600ms]
[confident] Azure Files revisa el ticket de Kerberos en el recurso compartido, y de nuevo en cada archivo y carpeta. Recibe el ticket, nunca la contraseña del usuario.
[600ms]
[serious] Elige una fuente de identidad por cuenta de almacenamiento: AD DS, Entra Domain Services o Entra Kerberos. Esto funciona solo con recursos compartidos SMB, y no se recomienda usar la clave de la cuenta.

## Step 6 · Reaching it from on-premises

[calm] Para usar SMB desde el entorno local, necesitas un enlace de VPN o de ExpressRoute hacia tu red de Azure.
[600ms]
[confident] Entonces Azure Files se expone mediante un endpoint privado, con una dirección IP privada.
[600ms]
[curious] También existe un endpoint público, solo para SMB 3 y posteriores. NFS nunca es accesible desde internet, y una caché de File Sync puede darle a una sucursal acceso local rápido.

## Step 7 · Azure File Sync: a cache on your server

[curious] Para armar la caché, implementa un Storage Sync Service, luego instala el agente en un Windows Server y regístralo.
[600ms]
[calm] Un grupo de sincronización vincula un cloud endpoint, que es un recurso compartido de Azure Files, con uno o más server endpoints, cada uno una carpeta en un servidor.
[600ms]
[serious] Un servidor se registra con un solo servicio a la vez, y solo se pueden sincronizar recursos compartidos de Azure Files con SMB.

## Step 8 · Cloud tiering: hot local, cool in Azure

[calm] El cloud tiering mantiene en el servidor los archivos calientes, los que se usan con frecuencia.
[600ms]
[curious] Los archivos fríos conservan localmente sus nombres y carpetas, mientras que el contenido vive en el recurso compartido de Azure y regresa cuando alguien lo abre.
[600ms]
[confident] Dos políticas deciden cuándo pasar archivos a la nube: la de espacio libre del volumen, y la de fecha, para archivos que no se han accedido en cierto número de días.

## Step 9 · Multi-site sync and quick recovery

[calm] Todos los servidores se sincronizan a través del recurso compartido de Azure, así que cada oficina ve los mismos archivos, sin enlaces entre servidores.
[600ms]
[confident] Agrega todas las cachés de servidor que necesites, en cualquier parte del mundo.
[600ms]
[reassuring] Si un servidor falla, aprovisiona un Windows Server nuevo, instala el agente y regístralo. El espacio de nombres se descarga desde Azure y los archivos se recuperan cuando se accede a ellos, sin necesidad de un respaldo local.

## Step 10 · Table storage: entities and keys

[calm] Table storage es un almacén NoSQL de clave y atributos, sin esquema, que vive en una tabla dentro de tu cuenta de almacenamiento.
[600ms]
[confident] Cada entidad es una fila de propiedades, que se localiza con su PartitionKey y su RowKey juntas. Incluso las entidades de una misma tabla pueden tener propiedades distintas.
[600ms]
[curious] Las entidades con la misma PartitionKey se consultan más rápido y se pueden insertar o actualizar en operaciones atómicas.

## Step 11 · Query by key, then outgrow it

[confident] Incluye siempre la PartitionKey. Una consulta puntual, con PartitionKey y RowKey, es la búsqueda más rápida que hay.
[600ms]
[serious] Una consulta sin la PartitionKey recorre todas las particiones, y esa es la más lenta.
[600ms]
[optimistic] Los resultados vuelven ordenados por esas claves. Y si Table storage se te queda corto, Azure Cosmos DB for Table conserva los mismos SDK y agrega distribución global e índices secundarios automáticos.

## Step 12 · Azure NetApp Files: enterprise NAS

[calm] Azure NetApp Files es un servicio de archivos de nivel empresarial. Una cuenta de NetApp contiene pools de capacidad, y cada pool contiene volúmenes.
[600ms]
[confident] El nivel de servicio se define en el pool, y los volúmenes atienden NFS, SMB o ambos.
[600ms]
[curious] Los volúmenes están en una subred delegada de tu red virtual, así que los clientes locales llegan a ellos por ExpressRoute o por una VPN.

## Step 13 · Which one do I pick?

[curious] Elige la necesidad que se parezca a la tuya, y el servicio correspondiente se ilumina en la tabla comparativa.
[600ms]
[confident] Dos necesidades caen en Azure NetApp Files: la computación de alto rendimiento en Linux, y SAP u Oracle. En los dos casos hace falta un NAS empresarial.
[600ms]
[reflective] Para trabajos de Linux más ligeros, tal vez te baste un recurso compartido NFS de Azure Files en SSD.

## Step 14 · All in one

[calm] Relaciona la necesidad con el servicio, y luego elige cómo llega al entorno local. Cuatro servicios, una pregunta.
[600ms]
[confident] A Z 305 te pide recomendar almacenamiento para datos semiestructurados y no estructurados, y equilibrar funciones, rendimiento y costo.
[600ms]
[proud] A Z 104 cubre la creación de un recurso compartido de archivos, las instantáneas, la eliminación temporal, los niveles de almacenamiento y el acceso basado en identidad para Azure Files.
