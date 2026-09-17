# Narrator Script - Conjuntos de disponibilidad

**Source animation:** journeys/Compute/VirtualMachines/AvailabilitySets.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · One host, one point of failure

[calm] Un host, un punto de fallo.
[600ms]
La tienda depende de una VM. Un fallo del host puede interrumpirla.
[600ms]
[serious] Una VM funcional no es un diseño completo de alta disponibilidad.

## Step 2 · Prepare another application instance

[calm] Preparar otra instancia.
[600ms]
Contoso despliega otra VM y configura por separado la aplicación y el balanceo.
[600ms]
[serious] Las réplicas y el balanceo se configuran por separado.

## Step 3 · Separate fault domains

[calm] Separar dominios de error.
[600ms]
Un conjunto distribuye VM entre grupos de dependencias de hardware compartidas.
[600ms]
[serious] Los dominios de error y actualización no son zonas.

## Step 4 · Separate update domains

[calm] Separar dominios de actualización.
[600ms]
Agrupan VM para mantenimiento planificado de la plataforma; no son zonas geográficas.
[600ms]
[serious] Los dominios de error y actualización no son zonas.

## Step 5 · A hardware failure unfolds

[calm] Evolución de un fallo de hardware.
[600ms]
Primero falla la VM y después lo detectan los sondeos. Las conexiones nuevas usan la instancia sana.
[600ms]
[serious] La detección lleva tiempo. Las conexiones existentes no se transfieren intactas.

## Step 6 · Know the boundary

[calm] Conocer el límite.
[600ms]
Los conjuntos no protegen de fallos de una zona completa ni reparan la aplicación invitada.
[600ms]
[serious] Microsoft recomienda VMSS Flexible para más opciones. Los conjuntos no están en desuso.

## Step 7 · Availability Sets - All in One

[calm] Conjuntos - Todo junto.
[600ms]
Los dominios de error separan riesgo de hardware y los de actualización, mantenimiento. La aplicación requiere preparación.
[600ms]
[serious] Las réplicas y el balanceo se configuran por separado.
