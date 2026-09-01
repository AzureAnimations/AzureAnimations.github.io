# Guion de narración — Azure Storage · Nivel avanzado · Protección de datos

**Source animation:** `static/v2/Storage/StorageDataProtection.html`

---

## Step 1 · goal

[confident] Los accidentes ocurren, y los ataques también. Entonces, ¿cómo protegemos los datos de borrados, sobrescrituras y ransomware?
[600ms]
[calm] Con una red de seguridad — un conjunto de capas independientes, cada una protegiendo contra un tipo distinto de pérdida.
[700ms]
[reassuring] Son independientes, así que activas exactamente las que tus datos necesitan.

## Step 2 · encrypt

[confident] La capa base ya está activa. Cada blob se cifra en reposo, de forma automática, con Storage Service Encryption.
[600ms]
[calm] No mueves un dedo — pero puedes traer tus propias claves en Key Vault si una política o un regulador lo exige.
[700ms]
[reassuring] ¿Quieres más? Añade cifrado de infraestructura para una segunda capa de cifrado independiente por debajo.

## Step 3 · softdelete

[confident] Ahora, el héroe de cada día: la eliminación temporal. Con ella activada, un blob eliminado no desaparece de verdad.
[600ms]
[calm] Se conserva, y se puede recuperar, durante una ventana de retención que tú eliges — de uno a trescientos sesenta y cinco días.
[700ms]
[reassuring] Y también atrapa las sobrescrituras — se preserva el estado anterior, así que un mal guardado está a un paso de deshacerse.

## Step 4 · versioning

[confident] Ve un paso más allá con el control de versiones de blobs. Ahora cada escritura conserva automáticamente la copia anterior.
[600ms]
[calm] Obtienes un historial completo y automático — perfecto para auditoría, y para revertir cualquier blob individual.
[700ms]
[serious] Las versiones cuestan almacenamiento, así que combina el control de versiones con una regla de ciclo de vida que envejezca las versiones antiguas.

## Step 5 · immutable

[confident] Para el cumplimiento normativo, bloquéalo por completo con la inmutabilidad — un estado de escritura única y lectura múltiple.
[600ms]
[calm] Aplica una directiva de retención por tiempo o una retención legal, y nadie — ni siquiera un administrador — puede modificar ni eliminar el blob hasta que la directiva se levante.
[700ms]
[serious] Un compromiso a tener en cuenta: la inmutabilidad es incompatible con la restauración a un momento dado, que es nuestra siguiente capa.

## Step 6 · restore

[confident] La restauración a un momento dado te permite rebobinar. Devuelve tus blobs en bloques a un momento anterior — antes de esa implementación fallida o de ese error masivo.
[600ms]
[calm] Se apoya en las capas que ya has configurado: eliminación temporal, control de versiones y el registro de cambios trabajando juntos.
[700ms]
[reassuring] Solo recuerda que restaura operaciones de blobs en bloques, y que el punto de restauración queda al menos un día atrás, dentro de tu retención.

## Step 7 · recap

[proud] Ahí está el panorama completo: cifrado en reposo de forma predeterminada, y luego envuelto en capas de recuperación — eliminación temporal, control de versiones y restauración a un momento dado — con inmutabilidad para el cumplimiento.
[700ms]
[encouraging] Activa las capas que se ajusten a tu riesgo, y un borrado o un ataque se convierte en un evento recuperable, no en un desastre.

## Step 8 · spec

[confident] Un poco más a fondo. La pila de recuperación es más rica para los blobs, donde todas estas funciones se alinean.
[600ms]
[calm] La eliminación temporal protege contra borrados y sobrescrituras; el control de versiones guarda el historial; el registro de cambios anota cada cambio; y la restauración a un momento dado los une a todos.
[700ms]
[reassuring] La única regla que llevarte — un objetivo de restauración a un momento dado tiene que tener al menos un día de antigüedad, y estar dentro de tu ventana de retención.
