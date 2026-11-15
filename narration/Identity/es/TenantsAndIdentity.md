# Narrator Script - Tu inquilino es una casa

**Source animation:** journeys/Identity/TenantsAndIdentity.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/training/paths/az-104-manage-identities-governance/ -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/fundamentals/add-custom-domain -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory-admin-roles -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/concept-understand-roles -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/custom-overview -->

## Step 1 · One key opens everything

[curious] Contoso se ha mudado a una casa donde todos comparten una llave. Hasta Mia puede encender el horno.
[600ms]
Es nuestra imagen del acceso sin límites, no una configuración de inicio de sesión recomendada.
[600ms]
[confident] Necesitamos identidades distintas y permisos acordes con lo que debe hacer cada persona.

## Step 2 · The house is your tenant

[calm] Piensa en la casa como el inquilino de Microsoft Entra de Contoso: su propio directorio de identidades.
[600ms]
La familia pertenece a él, pero se puede invitar a un vecino sin convertirlo en miembro de la familia.
[600ms]
[confident] El inquilino permite administrar esas identidades. No concede automáticamente acceso a todos los recursos de Azure.

## Step 3 · Every house needs an address

[calm] La casa empieza con una dirección: Contoso punto on Microsoft punto com.
[600ms]
Contoso puede demostrar que posee Contoso punto com mediante un registro DNS y usar ese dominio personalizado en los nombres de inicio de sesión.
[600ms]
[confident] El dominio original permanece. Cambiar el nombre de la puerta no cambia los permisos del interior.

## Step 4 · Who lives here

[calm] Papá, Mamá, Noah y Mia necesitan una identidad de usuario propia.
[600ms]
Los adultos y los niños se convierten en grupos, para asignar acceso al grupo en lugar de gestionarlo persona por persona.
[600ms]
[confident] Un grupo es una lista de miembros. Su acceso depende de los permisos que tenga asignados.

## Step 5 · House rules run the house

[calm] Los roles de Microsoft Entra son el llavero de administración de la casa. Permiten tareas concretas del directorio, como administrar usuarios.
[600ms]
En este ejemplo, Papá es Administrador global y Mamá es Administradora de usuarios.
[600ms]
[confident] Son trabajos distintos. Asigna el rol menos privilegiado y un ámbito compatible con la tarea, sin dar a cada ayudante el control de toda la casa.

## Step 6 · Appliance keys are a second keyring

[calm] Ahora mira los aparatos. Representan recursos de Azure, con otro llavero de permisos: el control de acceso basado en roles de Azure.
[600ms]
Un administrador de Entra no puede administrar automáticamente esos recursos.
[600ms]
[confident] Una asignación de rol de Azure combina quién, qué rol y dónde se aplica. Ambos sistemas de permisos están separados de forma predeterminada.

## Step 7 · The whole house — All in One

[calm] Recuerda tres preguntas: ¿quién pertenece aquí, qué puede hacer y dónde se aplica ese permiso?
[600ms]
Los usuarios y grupos responden a la primera. Los roles de Entra y los roles de recursos de Azure responden a partes distintas de la segunda.
[600ms]
[confident] El ámbito responde a la tercera. Ahora crearemos el registro familiar, sin compartir una identidad.

## Step 8 · The same house, in the Azure portal

[confident] La franja superior muestra a Papá y Mamá, sus roles de Entra y el inquilino donde se aplican.
[600ms]
Debajo, los adultos tienen Storage Blob Data Reader en la cuenta de almacenamiento; Noah tiene Virtual Machine Contributor en la máquina virtual.
[600ms]
[confident] Cada asignación permite solo las acciones de su rol dentro de su ámbito. Un rol del directorio no es un permiso sobre recursos de Azure.
