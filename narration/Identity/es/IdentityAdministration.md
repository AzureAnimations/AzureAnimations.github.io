# Narrator Script - Llevar la casa

**Source animation:** journeys/Identity/IdentityAdministration.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/delegate-by-task -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#authentication-administrator -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-licensing -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-howitworks -->
<!-- Reference: https://learn.microsoft.com/en-us/microsoft-365/admin/manage/assign-licenses-to-users -->

## Step 1 · Three favours, three different jobs

[curious] Mia necesita tres ayudas: restablecer la contraseña, recibir una licencia de producto y actualizar un método de recuperación.
[600ms]
La persona que la ayuda es otra identidad, con sus propios permisos administrativos.
[600ms]
[confident] En este ejemplo, Mia es una usuaria solo de nube y sin rol privilegiado. Podemos delegar el trabajo sin entregar el control de todo el inquilino.

## Step 2 · Hand over one chore, not the house

[calm] Adapta el rol del ayudante a la tarea. Administrador de contraseñas es la opción más limitada para restablecer la contraseña de esta usuaria no administradora.
[600ms]
Administrador de licencias gestiona las asignaciones; Administrador de autenticación puede gestionar las tareas admitidas sobre métodos de autenticación.
[600ms]
[confident] Elegir otra tarea no cambia el rol del operador. La asignación real debe autorizar esa tarea sobre Mia.

## Step 3 · A seat at the table has to exist

[calm] Una licencia de producto es una plaza que debe estar disponible y asignarse a Mia.
[600ms]
El operador necesita permiso y la cuenta debe cumplir requisitos como una ubicación de uso válida. Comprar plazas no asigna ninguna por sí solo.
[600ms]
[confident] Si falla la asignación, hay que investigar y reintentar. Una licencia de Microsoft 365 tampoco concede a Mia un rol sobre recursos de Azure.

## Step 4 · Register the spare key before you need it

[calm] La recuperación funciona mejor si Mia se prepara antes de olvidar la contraseña.
[600ms]
La directiva de ejemplo de Contoso admite correo y móvil y exige dos métodos registrados. Esa cantidad es una elección del ejemplo, no un valor universal.
[600ms]
[confident] Registrar guarda la información de recuperación. No demuestra que una futura solicitud de restablecimiento proceda realmente de Mia.

## Step 5 · Prove it is you, then cut a new key

[calm] Ahora Mia necesita restablecer una contraseña olvidada. Debe estar habilitada, tener métodos registrados y superar la verificación requerida.
[600ms]
Solo entonces puede elegir una contraseña nueva que cumpla las reglas. Esta demostración nunca solicita una contraseña real.
[600ms]
[confident] Business Standard admite este restablecimiento solo de nube. La escritura diferida de contraseñas híbridas tiene requisitos adicionales de licencia y configuración.

## Step 6 · Help out without holding every key

[calm] Separa cuatro tareas: los roles autorizan al ayudante, las licencias habilitan servicios, el registro prepara la recuperación y la verificación comprueba la identidad.
[600ms]
Tener una pieza no garantiza las demás. Una licencia no sustituye la verificación de identidad.
[600ms]
[confident] Este panel ilustra las comprobaciones; no modifica cuentas reales. El objetivo es delegar de forma útil sin privilegios innecesarios.

## Step 7 · Running the house, in Microsoft Entra ID

[confident] Las filas superiores muestran los roles de contraseñas y licencias del operador, y a Mia restableciendo su propia contraseña mediante autoservicio.
[600ms]
Debajo, el operador empieza sin permisos sobre recursos de Azure. Una asignación Reader independiente permite después consultar la configuración de la máquina virtual de la tienda.
[600ms]
[confident] Administrar el directorio, asignar licencias y acceder a recursos de Azure siguen siendo responsabilidades distintas.
