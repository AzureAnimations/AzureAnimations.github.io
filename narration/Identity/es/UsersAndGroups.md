# Narrator Script - Quién vive aquí

**Source animation:** journeys/Identity/UsersAndGroups.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/fundamentals/concept-learn-about-groups -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-groups -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/use-dynamic-groups -->

## Step 1 · The family lives here. The register doesn’t know them.

[curious] Noah vive en la casa, pero todavía no figura en el registro.
[600ms]
Sin una identidad propia, el sistema no puede distinguirlo de otra persona que use una cuenta compartida.
[600ms]
[confident] Alex ya tiene una identidad en la casa de al lado. Noah necesita su propio registro en Contoso antes de decidir a qué puede acceder.

## Step 2 · Give Noah his own record

[calm] Un administrador autorizado crea el usuario de Noah, con nombre, inicio de sesión y departamento.
[600ms]
Estos atributos lo describen. Poner Kids como departamento no equivale a concederle un permiso de Azure.
[600ms]
[confident] Ya sabemos quién es Noah en el directorio, pero todavía no qué aparatos puede utilizar.

## Step 3 · One group for the children

[calm] Los niños forman un grupo de seguridad que reúne a Noah y Mia en una lista.
[600ms]
El propietario administra la lista; el miembro pertenece a ella. Son relaciones distintas.
[600ms]
[confident] Los grupos de seguridad pueden recibir permisos sobre recursos. Los grupos de Microsoft 365 sirven para colaborar, así que elige el tipo según su finalidad.

## Step 4 · Write his name, or write a rule

[calm] Hay dos formas de llenar la lista: añadir personas a mano o usar una regla de pertenencia dinámica.
[600ms]
Aquí la regla selecciona usuarios cuyo departamento es Kids. Cambiar un atributo puede cambiar quién cumple la condición.
[600ms]
[confident] La pertenencia dinámica requiere las licencias adecuadas y tiempo de procesamiento. Protege quién puede modificar los atributos que determinan el acceso.

## Step 5 · Check who is really on the list

[calm] Comprueba la lista real de miembros, no solo si los atributos de Noah cumplen la regla.
[600ms]
La regla debe procesarse antes de que aparezca el resultado. En un grupo dinámico, la pertenencia se administra mediante la regla, no a mano.
[600ms]
[confident] Alex no coincide en este ejemplo, pero otras reglas pueden incluir invitados. Ser propietario no implica ser miembro.

## Step 6 · Everybody has a key — to the house

[calm] Noah ya tiene identidad propia y está en la lista correcta. Iniciar sesión equivale a demostrar de quién es la llave de la puerta.
[600ms]
En este ejemplo no se ha asignado ningún rol sobre recursos, por lo que los aparatos siguen sin estar disponibles.
[600ms]
[confident] La pertenencia puede transmitir permisos ya asignados al grupo. Sin una asignación, la lista no concede acceso a recursos.

## Step 7 · The register, in Microsoft Entra ID

[confident] Las filas superiores comparan la pertenencia asignada de los adultos con la pertenencia por regla de los niños.
[600ms]
Debajo, Storage Blob Data Reader permite a los adultos leer datos dentro del ámbito de la cuenta de almacenamiento.
[600ms]
[confident] Los niños no tienen rol sobre la máquina virtual. La pertenencia indica quién está incluido; la asignación indica qué puede hacer y dónde.
