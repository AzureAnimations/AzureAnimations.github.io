# Narrator Script — Architect · Design access: roles, PIM and access reviews

**Source animation:** [IdentityGovernance.html](../../../journeys/Architect/IdentityGovernance.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/role-based-access-control/rbac-and-directory-admin-roles>
- <https://learn.microsoft.com/azure/role-based-access-control/overview>
- <https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/overview>
- <https://learn.microsoft.com/azure/key-vault/general/overview>
- <https://learn.microsoft.com/azure/key-vault/managed-hsm/overview>
- <https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-configure>
- <https://learn.microsoft.com/entra/id-governance/access-reviews-overview>
- <https://learn.microsoft.com/entra/id-governance/entitlement-management-overview>
- <https://learn.microsoft.com/entra/id-governance/what-are-lifecycle-workflows>
- <https://learn.microsoft.com/entra/id-governance/identity-governance-overview>

---

## Step 1 · Contoso: who has access to what?

[calm] El acceso de Contoso ha crecido sin un plan claro: los administradores ocupan roles poderosos y un antiguo contratista sigue apareciendo en la ecuación.
[600ms]
[curious] El problema no es solo si alguien puede iniciar sesión, sino a qué puede acceder después.
[600ms]
[reassuring] Separaremos el alcance de los roles, las credenciales de las cargas de trabajo, el acceso privilegiado y la revisión continua de permisos.

## Step 2 · Azure roles vs Microsoft Entra roles

[calm] Los roles de Azure gobiernan los recursos de Azure, mientras que los roles de Microsoft Entra gobiernan las capacidades y la administración de los directorios.
[600ms]
[curious] En la jerarquía de recursos, una asignación de roles combina un principal, una definición de rol y el alcance al que se aplica.
[600ms]
[reassuring] Elige el rol más pequeño y adecuado en el alcance más limitado, recordando que los permisos heredados pueden extender el acceso efectivo.

## Step 3 · Workloads: use a managed identity

[calm] El escaparate necesita acceso a la base de datos de pedidos y almacenamiento, no a otra contraseña incrustada en su código.
[600ms]
[curious] Una identidad gestionada otorga una identidad a la aplicación, y una asignación de rol concede acceso a cada destino.
[600ms]
[reassuring] La identidad asignada al sistema sigue el ciclo de vida de un recurso; la identidad asignada por el usuario se gestiona por separado y puede ser compartida por los recursos.

## Step 4 · Secrets, keys and certificates

[calm] La fachada aún contiene varios elementos sensibles diferentes: un secreto, una clave de cifrado y un certificado.
[600ms]
[curious] Key Vault mantiene esos elementos bajo acceso controlado, y las opciones de protección varían según el tipo de seguridad de las claves requeridas.
[600ms]
[reassuring] Elige deliberadamente el modelo de protección y la autorización, en lugar de tratar una cámara como un lugar sin restricciones para guardar credenciales.

## Step 5 · Privileged access: eligible, not always on

[calm] El acceso de administrador siempre activo genera riesgos incluso cuando no se realiza trabajo administrativo.
[600ms]
[curious] Con la Gestión de Identidad Privilegiada, un administrador elegible activa el rol cuando es necesario, con requisitos como aprobación o autenticación multifactor.
[600ms]
[reassuring] Observa cómo se cierra la ventana temporal: el privilegio termina en lugar de convertirse en un permiso permanente y cotidiano.

## Step 6 · Access reviews: does anyone still need this?

[calm] Los permisos perden su propósito original cuando la gente cambia de trabajo o los proyectos terminan.
[600ms]
[curious] Una revisión de acceso pregunta a un revisor responsable si cada tarea sigue siendo necesaria y luego aplica el resultado.
[600ms]
[reassuring] Haz que sea una decisión recurrente, para que Contoso pueda eliminar el acceso obsoleto en lugar de depender de que alguien recuerde cada subvención antigua.

## Step 7 · Entitlement management: access packages

[calm] Un socio necesita varios recursos conectados para un proyecto, en lugar de un conjunto de solicitudes de acceso no relacionadas.
[600ms]
[curious] Un paquete de acceso agrupa los grupos, aplicaciones y sitios requeridos con una política de solicitudes, un aprobador y un caducidad.
[600ms]
[reassuring] Contoso puede ofrecer el paquete durante la duración adecuada, manteniendo visible la propiedad y la aprobación.

## Step 8 · Lifecycle workflows: joiner, mover, leaver

[calm] Sigue el ciclo de vida del empleado desde su incorporación, pasando por el cambio de rol hasta la salida de la organización.
[600ms]
[curious] Los flujos de trabajo del ciclo de vida ejecutan las tareas de acceso relacionadas cuando coinciden las condiciones configuradas y los atributos de identidad.
[600ms]
[reassuring] La cuestión es la ejecución repetible: las tareas correctas ocurren en la transición correcta, en lugar de depender solo de una lista de verificación manual.

## Step 9 · All in one: which tool answers which question

[calm] El mapa terminado separa el diseño de acceso en preguntas, con una herramienta diferente que responde a cada una.
[600ms]
[curious] Los roles definen permisos, las identidades gestionadas evitan los secretos de la aplicación y Key Vault protege el material sensible que permanece.
[600ms]
[reassuring] PIM, revisiones, paquetes de acceso y flujos de trabajo del ciclo de vida controlan cuándo comienza el acceso, cuándo se comprueba y cuándo termina.

