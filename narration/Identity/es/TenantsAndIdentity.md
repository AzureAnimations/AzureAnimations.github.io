# Narrator Script - Inquilino, identidad y acceso a Azure

**Source animation:** journeys/Identity/TenantsAndIdentity.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/content.mjs.

## Step 1 · Signed in. Still denied.

[calm] Sesión iniciada. Acceso denegado.
[600ms]
Maya inicia sesión, pero no puede leer la configuración de shop-vm. En este ejemplo no se aplican otros roles ni asignaciones de denegación.
[600ms]
[serious] Leer la configuración de VM: acceso denegado.

## Step 2 · Start with the tenant

[calm] Empezar por el inquilino.
[600ms]
Microsoft Entra ID proporciona el servicio de identidad. El inquilino de Contoso es su instancia de directorio.
[600ms]
[serious] Un inquilino no es una región de VM. Los roles de Entra no otorgan acceso automático a recursos de Azure.

## Step 3 · People and groups live here

[calm] Personas y grupos.
[600ms]
Maya y el grupo de seguridad de operaciones son objetos del directorio. Ser miembro no otorga permisos sobre recursos.
[600ms]
[serious] Maya es miembro. El grupo aún no tiene un rol de Azure asignado.

## Step 4 · One directory, two subscriptions

[calm] Un directorio, dos suscripciones.
[600ms]
Las suscripciones de desarrollo y producción confían en el mismo inquilino, con ámbitos de recursos separados.
[600ms]
[serious] Cada suscripción confía en un inquilino; un inquilino puede servir a varias suscripciones.

## Step 5 · Authentication answers who

[calm] La autenticación responde quién.
[600ms]
Microsoft Entra ID autentica a Maya. Esto no autoriza por sí solo la lectura de la configuración de VM.
[600ms]
[serious] Leer la configuración de VM: acceso denegado.

## Step 6 · A role permits the read

[calm] Un rol permite la lectura.
[600ms]
Un administrador autorizado asigna Reader a Operations en el ámbito de shop-vm. Maya puede leer su configuración.
[600ms]
[serious] Lectura permitida al aplicarse los permisos. Reader no permite iniciar sesión en el SO invitado.

## Step 7 · Identity and Access - All in One

[calm] Identidad y acceso - Todo junto.
[600ms]
El inquilino aporta identidades; las suscripciones organizan recursos. Azure RBAC permite acciones en un ámbito.
[600ms]
[serious] Quién: Maya mediante Operations. Qué: leer. Dónde: shop-vm.
