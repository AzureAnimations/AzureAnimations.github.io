# Narrator Script - La habitación de invitados

**Source animation:** journeys/Identity/ExternalIdentities.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/user-properties -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/redemption-experience -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/tenant-configurations -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-external-users -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/cross-tenant-access-overview -->

## Step 1 · The neighbour who needs to help

[curious] Alex trabaja en Partner y ya tiene una cuenta allí. Contoso necesita ayuda para revisar la máquina virtual de la tienda.
[600ms]
No debemos compartir una cuenta familiar ni copiar la contraseña de Alex a Contoso.
[600ms]
[confident] La colaboración entre empresas permite invitar esa identidad existente y conceder solo el acceso necesario para el trabajo.

## Step 2 · Invite Alex over

[calm] Un invitador autorizado crea un registro de invitado para Alex en el directorio de Contoso.
[600ms]
La invitación está pendiente. El registro existe, pero Alex todavía no la ha aceptado con su identidad de origen.
[600ms]
[confident] No se copia ninguna contraseña. Siguen aplicándose las restricciones de invitación y la configuración entre inquilinos; no es una puerta abierta sin límites.

## Step 3 · Alex accepts, using their own key

[calm] Alex acepta la invitación iniciando sesión con su identidad de Partner y completando el consentimiento requerido.
[600ms]
Así se vincula la invitación con la persona que la utilizará.
[600ms]
[confident] Aceptar no concede permisos sobre recursos. Contoso aún decide a qué recurso puede acceder Alex y qué acciones permite.

## Step 4 · One person, two house registers

[calm] Ahora una persona aparece en dos directorios: la identidad de origen en Partner y el objeto de invitado en Contoso.
[600ms]
Invitado y Miembro describen la relación y los permisos predeterminados del directorio, no el origen de las credenciales.
[600ms]
[confident] Cambiar esa etiqueta no traslada la identidad de Alex a Contoso ni crea allí una contraseña nueva.

## Step 5 · Access exactly one appliance

[calm] Contoso asigna Reader a Alex con ámbito limitado a la máquina virtual de la tienda.
[600ms]
Una vez superadas las comprobaciones de inicio de sesión y propagados los permisos, Alex puede consultar la configuración, pero no eliminar la máquina con Reader.
[600ms]
[confident] Este rol no permite entrar al sistema operativo ni acceder a sus datos. Quitar la asignación elimina ese permiso, no el registro de invitado.

## Step 6 · A guest, not a resident

[calm] Separa las tres piezas: Partner acredita la identidad de Alex, Contoso guarda el registro de invitado y un rol con ámbito concede acceso al recurso.
[600ms]
Esto es colaboración en el inquilino de personal de Contoso.
[600ms]
[confident] Un inquilino externo para el registro de clientes responde a otro escenario. Invitar a un colega no convierte este directorio en un sistema de identidades de clientes.

## Step 7 · The guest, in Microsoft Entra ID

[confident] Sigue el dibujo desde el directorio de origen de Alex hasta el objeto de invitado y la asignación Reader sobre la máquina virtual.
[600ms]
La contraseña permanece en Partner. Que Contoso acepte su prueba de autenticación multifactor depende de la confianza configurada entre inquilinos.
[600ms]
[confident] Las últimas filas comparan lecturas de configuración permitidas con una eliminación denegada. Ser invitado nunca significó poder hacerlo todo.
