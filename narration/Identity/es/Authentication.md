# Narrator Script - La puerta de entrada

**Source animation:** journeys/Identity/Authentication.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-strengths -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-passkeys-fido2 -->

## Step 1 · Unlocking the same door twice

[curious] Mamá abre la aplicación de pedidos y después la administración de Azure, y vuelve a recibir una solicitud de inicio de sesión.
[600ms]
Ambas entradas necesitan saber quién es, pero repetir la contraseña no indica qué puede hacer en cada servicio.
[600ms]
[confident] La autenticación comprueba la identidad. La autorización decide qué acciones puede realizar esa identidad.

## Step 2 · Reuse an eligible session

[calm] El inicio de sesión único puede reutilizar la sesión válida de Mamá si las aplicaciones lo admiten.
[600ms]
Así evita otra identificación sin eliminar las comprobaciones de permisos de la aplicación.
[600ms]
[confident] Si la sesión caduca o una directiva exige algo nuevo, puede aparecer otra solicitud. Se reutiliza una sesión apta; no se garantiza que nunca vuelva a comprobarse.

## Step 3 · Not every key is equally convincing

[calm] Compara las pruebas de Mamá: una contraseña, una contraseña con Authenticator o una llave FIDO dos desbloqueada con un PIN.
[600ms]
La llave combina posesión y verificación local, por lo que puede ser un método sin contraseña y multifactor a la vez.
[600ms]
[confident] Los métodos deben estar habilitados y registrados. Dos contraseñas siguen siendo el mismo tipo de factor.

## Step 4 · A doorbell that decides how hard to check

[calm] Acceso condicional evalúa la situación y establece la prueba requerida para este inicio de sesión.
[600ms]
En el ejemplo de Contoso, la oficina acepta autenticación multifactor; la cafetería exige una prueba resistente al phishing. Es una directiva elegida, no un valor predeterminado de Azure.
[600ms]
[confident] La oficina no es segura por definición. Las directivas reales consideran las señales pertinentes y requieren la licencia de Entra adecuada.

## Step 5 · Getting in is not the same as being allowed

[calm] Mamá ha superado las comprobaciones de inicio de sesión, pero la máquina virtual hace otra pregunta: ¿qué puede hacer aquí?
[600ms]
Una asignación Reader en ese ámbito permite consultar la configuración de la máquina.
[600ms]
[confident] No permite modificarla, entrar al sistema operativo ni acceder a sus datos. Cruzar la puerta no entrega el llavero de los aparatos.

## Step 6 · Session, proof, policy, permission

[calm] Ahora colaboran cuatro capas: una sesión reutilizable, un método de autenticación, los requisitos de Acceso condicional y los permisos sobre recursos.
[600ms]
Cambiar una no sustituye las demás. Una prueba más sólida no crea una asignación de rol.
[600ms]
[confident] Usa las capas de inicio de sesión para establecer confianza y la autorización con ámbito para limitar las acciones de esa identidad.

## Step 7 · The front door, in Microsoft Entra ID

[confident] La franja superior une la llave FIDO dos de Mamá, Acceso condicional y el inicio de sesión único cuando procede entre las dos aplicaciones.
[600ms]
La franja inferior muestra una asignación Reader independiente sobre la máquina virtual de la tienda, y ninguna sobre la cuenta de almacenamiento.
[600ms]
[confident] La misma persona autenticada obtiene resultados distintos según el recurso. Comprobar la identidad y conceder permiso siguen siendo decisiones separadas.
