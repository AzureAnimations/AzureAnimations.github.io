# Guion de narración — Azure Storage · Almacénalo (cuenta de almacenamiento)

**Source animation:** `static/v2/Storage/StorageAccount.html`

---

## Step 1 · Overview

[warm] Empecemos por la base de Azure Storage: la cuenta de almacenamiento.
[600ms]
[calm] Piensa en ella como un único hogar duradero para todos los datos en la nube de Contoso —blobs, archivos, colas y tablas— bajo un solo espacio de nombres y una sola factura.
[600ms]
[confident] Todo está detrás de un único punto de conexión de la cuenta, como contoso punto blob punto core punto windows punto net. Una cuenta, una factura, muchos servicios: elige un nivel de rendimiento una vez y luego almacena lo que la carga de trabajo necesite.

## Step 2 · Standard vs Premium

[confident] Primero, elige qué tan rápida debe ser la cuenta.
[600ms]
[calm] Standard funciona sobre discos duros —almacenamiento económico y de uso general que admite todos los servicios y todos los niveles de acceso—. Premium funciona sobre unidades de estado sólido, para una latencia de un solo dígito de milisegundos cuando las aplicaciones lo exigen.
[600ms]
[reassuring] Premium viene como una cuenta especializada —block blob, page blob o recursos compartidos de archivos—, elegida por latencia, no por capacidad bruta. Así que la regla es simple: Premium para velocidad, Standard para costo.

## Step 3 · Four Data Services

[confident] Una cuenta Standard te da cuatro formas de almacenar datos: elige la forma que se ajuste al trabajo.
[600ms]
[calm] Blob es el caballo de batalla para grandes volúmenes de datos no estructurados —imágenes, video, copias de seguridad, documentos—. Files te ofrece recursos compartidos de archivos administrados S-M-B y N-F-S. Queue pasa pequeños mensajes asincrónicos entre componentes de la aplicación. Y Table es un almacén NoSQL de clave-valor sin esquema.
[600ms]
[impressed] Una cuenta, cuatro servicios: la mayoría de las cargas de trabajo se apoyan en Blob, y los otros tres cubren recursos compartidos, mensajería y NoSQL.

## Step 4 · Three Kinds of Blob

[intrigued] El propio almacenamiento de blobs viene en tres tipos, cada uno ajustado a un patrón de escritura diferente.
[600ms]
[calm] Los block blobs guardan datos de texto y binarios, con diferencia los más comunes. Los append blobs están optimizados para agregar al final, perfecto para registros. Y los page blobs admiten lectura y escritura aleatorias, así que respaldan los discos de las máquinas virtuales de Azure.
[600ms]
[reassuring] Regla general: ¿subes un archivo o una imagen? Block. ¿Transmites líneas de registro? Append. ¿Respaldas un disco virtual? Page.

## Step 5 · Access Tiers

[confident] Para los block blobs, un nivel de acceso equilibra el costo de almacenamiento frente al costo de lectura y una retención mínima.
[600ms]
[calm] Hot es para acceso frecuente, sin mínimo. Cool es para acceso poco frecuente, al menos treinta días. Cold es para acceso poco habitual, al menos noventa. Y Archive está sin conexión y es el más barato: al menos ciento ochenta días, y lo rehidratas para leerlo.
[600ms]
[reassuring] Los niveles más fríos almacenan más barato pero leen más caro y más lento, y eliminar antes de tiempo genera un cargo. O deja que el nuevo nivel Smart mueva los datos entre Hot, Cool y Cold automáticamente, según el uso real, sin reglas de ciclo de vida que administrar.

## Step 6 · Recap

[warm] Así que ahí está toda la cuenta de almacenamiento, en una sola vista.
[600ms]
[calm] Rendimiento: Standard o Premium. Cuatro servicios: Blob, File, Queue, Table. Tres tipos de blob: Block, Append, Page. Y cinco niveles de acceso, de Hot a Archive, más Smart.
[600ms]
[encouraging] Empieza siempre por la carga de trabajo: qué tan rápida, qué forma de datos y con qué frecuencia leerás, y la factura vendrá después. Profundiza en la ruta gratuita de Microsoft Learn, Almacenar datos en Azure.
