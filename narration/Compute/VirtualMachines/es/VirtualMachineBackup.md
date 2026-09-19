# Narrator Script - Copia de seguridad y restauración

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineBackup.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · Someone deletes the orders folder

[serious] Es un martes cualquiera y alguien borra la carpeta de pedidos.
[600ms]
[calm] La redundancia de almacenamiento hace exactamente su trabajo: replica también la eliminación en las demás copias.
[600ms]
[confident] La redundancia protege frente a fallos de hardware. Para recuperarte de este error necesitas una copia de seguridad, y configurarla es una decisión aparte.

## Step 2 · Create the vault

[calm] Contoso empieza por buscar un lugar seguro para los puntos de recuperación.
[600ms]
[confident] Un almacén de Recovery Services está fuera de la máquina virtual y mantiene los puntos de recuperación y las reglas que los administran.
[600ms]
[reassuring] Esa separación importa: eliminar la máquina no elimina por sí solo los puntos de recuperación guardados en el almacén.

## Step 3 · Write the policy

[curious] ¿Con qué frecuencia, y durante cuánto tiempo?
[800ms]
[confident] La directiva de copia de seguridad responde a ambas preguntas. La programación decide cuándo se ejecuta una copia y la retención cuánto tiempo se conserva cada punto.
[600ms]
[serious] La retención equilibra coste y tranquilidad. Conserva lo que el negocio realmente necesitaría recuperar y ten claro por qué.

## Step 4 · One run, two phases

[calm] Una copia de seguridad no ocurre en un único instante.
[600ms]
[confident] Azure primero toma una instantánea y después transfiere los datos al almacén. La segunda fase suele tardar más.
[600ms]
[reassuring] Por eso puede parecer que el trabajo en la máquina ha terminado mientras la transferencia al almacén sigue en curso. Las dos fases importan y no terminan a la vez.

## Step 5 · Restore only what you need

[curious] Algo ha salido mal. ¿Cuánto necesitas recuperar? Recorre las opciones para verlo.
[600ms]
[confident] Puedes restaurar la máquina completa, recuperar un disco para sustituirlo o montar un punto de recuperación y extraer un archivo.
[600ms]
[determined] Adapta la restauración al daño. Borrar una carpeta no tiene por qué obligarte a reconstruir toda la tienda.

## Step 6 · Deleting a backup is a separate risk

[serious] Ahora piensa en un ataque o una eliminación de la propia copia de seguridad.
[600ms]
[confident] La eliminación temporal conserva los datos de copia borrados durante un período de retención. Así puedes deshacer una eliminación accidental o malintencionada.
[600ms]
[calm] Protege las copias que ya existen. No puede recuperar una máquina de la que nunca se hizo una copia de seguridad.

## Step 7 · VM Backup - All in One

[reflective] Cuatro piezas pueden convertir un desastre en una tarde complicada.
[600ms]
[confident] Un almacén separado de la máquina, una directiva adecuada para el negocio, puntos de recuperación comprobables y una restauración que alguien haya ensayado.
[600ms]
[proud] El ensayo es esencial. Una copia sin probar es una esperanza, no un plan.
