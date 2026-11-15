# Narrator Script - Mueve la VM sin romperla

**Source animation:** journeys/Compute/VirtualMachines/MoveVirtualMachines.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · It landed in the wrong place

[curious] La tienda se creó en un grupo de recursos de pruebas, cuando todavía era un experimento.
[600ms]
[serious] Ahora recibe pedidos reales y debe estar junto a los recursos de producción, con sus reglas y su facturación.
[600ms]
[calm] Primero aclaremos algo: un grupo de recursos es un límite de administración, no una ubicación física. Cambiar de grupo no traslada los datos a otro lugar.

## Step 2 · Move between resource groups

[calm] El traslado más sencillo cambia únicamente el grupo que administra el recurso.
[600ms]
[confident] Azure cambia el grupo al que pertenece la máquina mientras esta sigue funcionando, sin detenerla por ese traslado.
[600ms]
[serious] Durante la operación, ambos grupos quedan bloqueados para escrituras de administración. Evita desplegar recursos en cualquiera de ellos mientras termina.

## Step 3 · Move between subscriptions

[calm] Cambiar de suscripción lleva esa misma idea un nivel más arriba.
[600ms]
[confident] La máquina y los recursos dependientes que deban acompañarla, como discos e interfaces de red, se preparan como un conjunto para la suscripción de destino.
[600ms]
[serious] Comprueba primero el destino. Si no tiene cuota suficiente para esas máquinas, el traslado no podrá completarse.

## Step 4 · Changing region is a rebuild

[serious] Cambiar de región es una operación distinta.
[600ms]
[confident] Azure Resource Mover copia la carga y vuelve a crear los recursos en la nueva región. Debes prever nuevos identificadores y direcciones.
[600ms]
[calm] Planifícalo como una reconstrucción: el cambio de servicio, la resolución de nombres y cualquier configuración que tenga direcciones antiguas escritas directamente.

## Step 5 · Check before you commit

[curious] Un hábito evita muchos problemas: ejecuta las comprobaciones y observa la validación.
[600ms]
[confident] No todos los tipos de recurso admiten todos los traslados. Valida el conjunto completo antes de empezar y consulta la referencia de compatibilidad para los recursos incluidos.
[600ms]
[reassuring] Descubrir un recurso incompatible durante la validación cuesta minutos. Descubrirlo a mitad del traslado puede costarte toda la tarde.

## Step 6 · Moving - All in One

[reflective] Hay tres tipos de traslado y conviene distinguirlos.
[600ms]
[confident] Los cambios de grupo y de suscripción modifican la pertenencia administrativa. Cambiar de región crea el recurso en otro lugar.
[600ms]
[proud] La tienda de Contoso ya está construida, preparada para fallos, escalada, ajustada, respaldada y supervisada. Ahora también está donde debe estar.
