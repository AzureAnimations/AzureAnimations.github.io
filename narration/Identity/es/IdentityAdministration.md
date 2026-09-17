# Narrator Script - Administración de identidades

**Source animation:** journeys/Identity/IdentityAdministration.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/administration.mjs.

## Step 1 · Three requests. Different responsibilities.

[calm] Tres solicitudes. Distintas responsabilidades.
[600ms]
Maya necesita soporte de cuenta. Contoso debe distinguir el restablecimiento por soporte, la asignación de licencias y la gestión de sus métodos de autenticación.
[600ms]
[serious] Maya no tiene rol privilegiado ni pertenece a un grupo asignable a roles. El operador y la usuaria son personas distintas.

## Step 2 · Delegate the task, not the whole directory

[calm] Delegar la tarea, no todo el directorio.
[600ms]
El rol de menor privilegio depende de la tarea. Un administrador autorizado lo asigna al operador; elegir una tarea aquí nunca cambia el rol asignado.
[600ms]
[serious] Se supone que las asignaciones incluyen a Maya. Authentication Administrator también restablece su contraseña; Password Administrator es más limitado. Azure Reader no concede estas tareas.

## Step 3 · A license is an assignment with a result

[calm] Una licencia tiene un resultado de asignación.
[600ms]
En este ejemplo, se asigna Microsoft 365 Business Standard a Maya. Sin licencias disponibles o sin autorización, el intento falla; corregir la capacidad no aplica la licencia.
[600ms]
[serious] Se supone una ubicación de uso válida y sin servicios en conflicto. Los errores requieren revisión y reintento; una licencia no asigna un rol de recurso de Azure.

## Step 4 · Register before recovery is needed

[calm] Registrarse antes de necesitar recuperación.
[600ms]
Maya es una usuaria solo en la nube y sin rol administrativo. Contoso habilita correo y teléfono móvil en este ejemplo y exige dos métodos registrados para SSPR.
[600ms]
[serious] Dos métodos es la política del ejemplo, no un valor universal. Registrar información de recuperación no completa un intento futuro.

## Step 5 · Verify, then reset

[calm] Verificar y después restablecer.
[600ms]
Una usuaria con licencia y en el ámbito de SSPR necesita métodos registrados y verificación correcta. Después puede elegir una contraseña que cumpla la política; aquí no se recopila ninguna.
[600ms]
[serious] Business Standard admite SSPR solo en la nube. La escritura diferida híbrida requiere P1/P2 o Business Premium y configuración adicional. Cambiar una contraseña en Entra Free no equivale a restablecerla si se olvida.

## Step 6 · Support without blanket administration

[calm] Soporte sin administración ilimitada.
[600ms]
Los roles autorizan a los operadores. Las licencias habilitan servicios. El registro prepara la recuperación; la verificación prueba el control durante el intento. Son responsabilidades distintas.
[600ms]
[serious] El ejemplo supone una cuenta válida solo en la nube y una nueva contraseña válida. No modifica roles, licencias, mensajes de verificación ni contraseñas reales.
