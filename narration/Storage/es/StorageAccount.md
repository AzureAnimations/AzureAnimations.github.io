# Guion de narración — Azure Storage · Almacénalo (cuenta de almacenamiento)

**Source animation:** `static/v2/Storage/StorageAccount.html`

---

**TTS status:** Audio regenerated 2026-09-17 after text review.

<!-- Review sources: https://learn.microsoft.com/azure/storage/common/storage-account-overview ; https://learn.microsoft.com/azure/storage/blobs/access-tiers-overview ; https://learn.microsoft.com/azure/storage/blobs/access-tiers-smart -->

## Step 1 · Overview

[warm] Empecemos por la base de Azure Storage: la cuenta de almacenamiento.
[600ms]
[calm] Proporciona a Contoso un espacio de nombres único para sus datos de almacenamiento. Una cuenta Standard de uso general, versión dos, puede contener blobs, archivos, colas y tablas.
[600ms]
[confident] Cada servicio tiene su propio punto de conexión. Por ejemplo, contoso punto blob punto core punto windows punto net es el de Blob, no la dirección de todos los servicios. Elige un tipo de cuenta compatible con tu carga de trabajo.

## Step 2 · Standard vs Premium

[confident] Primero, compara las necesidades de rendimiento y los servicios disponibles.
[600ms]
[calm] Standard de uso general, versión dos, es un punto de partida habitual. Premium utiliza almacenamiento de estado sólido para cargas que necesitan una latencia baja y constante o muchas transacciones.
[600ms]
[reassuring] Las cuentas Premium se especializan en blobs en bloques, blobs en páginas o recursos compartidos de archivos; no reúnen los cuatro servicios. Compara también las funciones y los costes, no solo la velocidad.

## Step 3 · Four Data Services

[confident] Azure Storage ofrece cuatro servicios para distintos tipos de datos.
[600ms]
[calm] Blob almacena imágenes, vídeos, copias de seguridad y documentos. Files ofrece recursos compartidos administrados; los de N-F-S requieren almacenamiento SSD. Queue intercambia mensajes asíncronos entre componentes de una aplicación. Table guarda datos NoSQL estructurados sin un esquema fijo.
[600ms]
[impressed] Elige el servicio adecuado para tus datos y comprueba que el tipo de cuenta admite las funciones que necesitas.

## Step 4 · Three Kinds of Blob

[intrigued] El propio almacenamiento de blobs viene en tres tipos, cada uno ajustado a un patrón de escritura diferente.
[600ms]
[calm] Los blobs en bloques guardan texto y datos binarios y son los más habituales. Los blobs en anexos están optimizados para añadir datos al final, como en los registros. Los blobs en páginas permiten lecturas y escrituras aleatorias y se utilizan como almacenamiento de discos de máquinas virtuales de Azure.
[600ms]
[reassuring] Como orientación: ¿archivos o imágenes? Block. ¿Añadir líneas a un registro? Append. ¿Almacenamiento para un disco virtual? Page.

## Step 5 · Access Tiers

[confident] En los blobs en bloques, los niveles de acceso equilibran los costes de almacenamiento y recuperación. Las duraciones mínimas son reglas de facturación, no bloqueos que impidan borrar datos.
[600ms]
[calm] En una cuenta Standard de uso general, versión dos, Hot no tiene cargo por duración mínima. Cool tiene treinta días; Cold, noventa; y Archive, ciento ochenta. Hot, Cool y Cold siguen en línea, con acceso en milisegundos. Archive necesita rehidratación antes de leer los datos, lo que puede tardar horas.
[600ms]
[reassuring] Borrar o cambiar de nivel antes de tiempo puede generar un cargo. En cuentas compatibles con redundancia de zona, Smart gestiona automáticamente los blobs en bloques aptos entre Hot, Cool y Cold, sin reglas de cambio de nivel. No utiliza Archive y tiene una facturación distinta.

## Step 6 · Recap

[warm] Así que ahí está toda la cuenta de almacenamiento, en una sola vista.
[600ms]
[calm] Rendimiento: Standard o Premium. Cuatro servicios: Blob, File, Queue, Table. Tres tipos de blob: Block, Append, Page. Y cinco niveles de acceso, de Hot a Archive, más Smart.
[600ms]
[encouraging] Empieza por el rendimiento necesario, el tipo de datos y la frecuencia de acceso. Estas decisiones afectan a las funciones y al coste. Sigue aprendiendo con la ruta gratuita de Microsoft Learn, Almacenar datos en Azure.
