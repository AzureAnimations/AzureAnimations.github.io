# Narrator Script - Usuarios y grupos

**Source animation:** journeys/Identity/UsersAndGroups.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/users-groups.mjs.

## Step 1 · A teammate without a directory record

[calm] Una compañera sin registro.
[600ms]
Maya se incorpora a Operations en Contoso. Su solicitud está lista, pero el directorio aún no contiene su usuario.
[600ms]
[serious] Alex ya tiene un registro de socio. Maya necesita su propia identidad, no una cuenta compartida.

## Step 2 · Give Maya an identity

[calm] Crear la identidad de Maya.
[600ms]
Un administrador autorizado crea el usuario en la nube. Nombre, identificador de inicio de sesión y departamento describen a Maya; no conceden permisos.
[600ms]
[serious] Solo valores de ejemplo. Administradores autorizados controlan estos atributos; un departamento no es un rol de Azure.

## Step 3 · Organize the team

[calm] Organizar el equipo.
[600ms]
Contoso crea Operations como grupo de seguridad. Sus propietarios administran el grupo; sus miembros son las personas que reúne.
[600ms]
[serious] Los grupos de seguridad organizan el acceso; los de Microsoft 365 facilitan la colaboración. Propiedad y pertenencia son relaciones distintas.

## Step 4 · Assignment or an attribute rule?

[calm] ¿Asignación o regla de atributos?
[600ms]
La pertenencia asignada es explícita. La dinámica sigue una regla; los cambios se procesan antes de actualizar la lista de miembros.
[600ms]
[serious] Los usuarios dinámicos requieren suficientes licencias Entra ID P1 o Intune for Education. Protege los atributos de la regla; el proceso no es instantáneo.

## Step 5 · Verify the actual members

[calm] Verificar los miembros reales.
[600ms]
Comprueba la pertenencia procesada, no solo la vista previa de una regla. Ser miembro y ser propietario tienen responsabilidades distintas.
[600ms]
[serious] Los miembros dinámicos siguen la regla; no se agregan ni quitan manualmente. Alex no cumple la regla Operations de este ejemplo.

## Step 6 · People organized. Access still separate.

[calm] Personas organizadas. Acceso separado.
[600ms]
El directorio aporta identidades y el grupo reúne miembros. Contoso debe autorizar al grupo por separado en cada recurso previsto.
[600ms]
[serious] La pertenencia puede transmitir permisos ya asignados al grupo. Aquí no hay asignaciones de recursos; ser miembro por sí solo no concede acceso.
