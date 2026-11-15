# Guion de narración — Azure Storage · Nivel avanzado · Mover y optimizar

**Source animation:** `static/v2/Storage/StorageMoveOptimize.html`

---

## Step 1 · goal

[confident] Estás almacenando terabytes de blobs — una parte de acceso frecuente, la mayoría envejeciendo poco a poco.
[600ms]
[calm] Así que vamos a mover y optimizar: pon cada blob en el lugar correcto, y paga el precio correcto por él.
[700ms]
[reassuring] Unas pocas herramientas integradas hacen todo el trabajo pesado — por costo, por resiliencia y por conocimiento.

## Step 2 · tiers

[confident] Empieza con los niveles de acceso. Blob storage cobra los datos según la frecuencia con que realmente los lees.
[600ms]
[calm] Hot es para datos que tocas constantemente. Cool es más barato de almacenar pero espera al menos treinta días. Cold va más lejos, noventa días. Y Archive es el más barato de todos — sin conexión, para datos que casi nunca necesitas.
[700ms]
[serious] El intercambio es simple: cuanto más frío el nivel, menos pagas por almacenar, pero más pagas — y esperas — por leer.

## Step 3 · lifecycle

[confident] No moverás todo esto a mano. Las reglas de ciclo de vida lo hacen por ti.
[600ms]
[calm] Una directiva de ciclo de vida es un conjunto de reglas — mover un blob a Cool tras treinta días, a Archive tras noventa, eliminarlo tras un año — impulsadas por la antigüedad o por la fecha del último acceso.
[700ms]
[reassuring] Configúralo una vez, y Azure ajusta silenciosamente el tamaño de tu almacenamiento cada día. Solo dale a una directiva nueva hasta un día para surtir efecto.

## Step 4 · replication

[confident] Ahora, mantener una copia en otro lugar. La replicación de objetos copia de forma asíncrona blobs en bloques de una cuenta de origen a una cuenta de destino.
[600ms]
[calm] Piensa en una región con muchas escrituras replicando hacia una región de lectura, o una segunda región para resiliencia.
[700ms]
[serious] Un requisito que recordar — necesita el control de versiones de blobs activado, tanto en el origen como en el destino.

## Step 5 · azcopy

[confident] A veces solo necesitas mover muchos datos, rápido. Eso es AzCopy.
[600ms]
[calm] Es la herramienta de línea de comandos hecha para transferencias de alto rendimiento — cargas, descargas y copias de cuenta a cuenta.
[700ms]
[impressed] Y para copias de servidor a servidor, AzCopy mueve los datos directamente entre cuentas, así que nunca tienen que pasar por tu máquina.

## Step 6 · inventory

[confident] Antes de optimizar, ayuda saber exactamente qué tienes. El inventario de blobs te lo dice.
[600ms]
[calm] Es un informe programado — diario o semanal — que lista tus blobs y sus propiedades: tamaño, nivel, última modificación y más.
[700ms]
[reassuring] Genera archivos CSV o Parquet que puedes analizar, así las revisiones de costos y la gobernanza funcionan sobre números reales.

## Step 7 · recap

[proud] Ahí está el panorama completo: ajusta el costo con los niveles de acceso, automatízalo con reglas de ciclo de vida, replica para resiliencia, mueve datos en volumen con AzCopy, y conoce lo que tienes con el inventario.
[700ms]
[encouraging] Nivela por costo, replica por seguridad, y deja que la directiva lo mantenga todo ordenado — a cualquier escala.

## Step 8 · spec

[confident] Un poco más a fondo. Cuatro niveles de acceso, con precio según la frecuencia con que lees: Hot, Cool, Cold y Archive.
[600ms]
[calm] Cada nivel más frío espera una estancia mínima — treinta días para Cool, noventa para Cold, y más para Archive — y Archive está sin conexión, así que leer significa rehidratar primero.
[700ms]
[reassuring] Y la replicación de objetos, una vez más, necesita el control de versiones de blobs en ambas cuentas. Acierta con eso, y el costo se cuida solo.
