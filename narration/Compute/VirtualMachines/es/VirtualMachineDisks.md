# Narrator Script - Discos que guardan los datos

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineDisks.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · The catalogue outgrows its disk

[curious] La tienda crece, y también las fotografías de sus productos.
[600ms]
[serious] Esas imágenes están llenando el disco donde se instaló el sistema operativo. Conviene darles un disco de datos propio.
[600ms]
[calm] La redundancia tampoco resuelve los errores de escritura: copia fielmente cada cambio, incluso el que luego querrías deshacer.

## Step 2 · Three disks, three jobs

[calm] Una máquina virtual puede tener tres tipos de disco. Confundir sus funciones es un error habitual.
[600ms]
[confident] El disco del sistema operativo permite arrancar. Los discos de datos guardan los archivos y el catálogo. El disco temporal es espacio de trabajo desechable.
[600ms]
[serious] Temporal significa temporal. Un mantenimiento, una nueva implementación o una detención pueden hacer perder esos datos. Guarda allí solo lo que puedas descartar.

## Step 3 · Match the disk to the work

[curious] Hay varios tipos de disco administrado, con diferencias reales de velocidad y coste.
[600ms]
[confident] Desde Standard HDD hasta Ultra Disk, cambian las operaciones por segundo, el rendimiento de transferencia y el precio.
[600ms]
[serious] El rendimiento depende del tipo y del tamaño del disco, y también está limitado por lo que permite el tamaño de la máquina virtual.

## Step 4 · Grow it, never shrink it

[calm] La capacidad del disco puede cambiar. Prueba el control y observa cómo crece.
[600ms]
[confident] Un disco administrado se puede ampliar cuando las mediciones lo justifican. Por eso conviene empezar con una capacidad razonable.
[600ms]
[serious] Solo puede crecer, no reducirse. Después de ampliarlo, también debes extender el sistema de archivos dentro del sistema invitado para aprovechar el espacio nuevo.

## Step 5 · Freeze a point in time

[calm] Antes de un cambio arriesgado, toma una instantánea.
[600ms]
[confident] La instantánea conserva una copia del disco en ese momento, algo útil antes de una actualización o de cambiar un esquema.
[600ms]
[serious] Es una copia de un disco tomada cuando la solicitaste. No sustituye una programación de copias de seguridad ni un plan de restauración. Eso viene en la siguiente lección.

## Step 6 · Encrypt at the host

[calm] Los datos en reposo deben estar cifrados, y puedes protegerlos desde el host.
[600ms]
[confident] El cifrado en el host protege los discos del sistema y de datos, el disco temporal y las cachés del host.
[600ms]
[reassuring] El trabajo se realiza en el host, no dentro del sistema invitado. Por eso no consume capacidad de procesamiento de la máquina de la tienda.

## Step 7 · VM Disks - All in One

[reflective] Cinco decisiones determinan la velocidad y la protección de los datos de Contoso.
[600ms]
[confident] La función de cada disco, su tipo, el margen para crecer, una instantánea antes de asumir riesgos y el cifrado que protege el conjunto.
[600ms]
[determined] El almacenamiento adecuado cumple su trabajo sin llamar la atención. Eso es precisamente lo que buscamos.
