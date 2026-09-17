# Narrator Script - Identidades externas

**Source animation:** journeys/Identity/ExternalIdentities.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/external.mjs.

## Step 1 · A partner needs to collaborate

[calm] Un socio necesita colaborar.
[600ms]
Alex trabaja para Partner y ya tiene una cuenta. Contoso necesita que revise la configuración de shop-vm sin crear una cuenta compartida.
[600ms]
[serious] Este ejemplo usa una cuenta Entra de Partner. B2B también admite otros proveedores de identidad configurados.

## Step 2 · Invite Alex into Contoso

[calm] Invitar a Alex a Contoso.
[600ms]
Un usuario autorizado crea el registro B2B de Alex en Contoso. La invitación está pendiente y su cuenta de origen sigue en Partner.
[600ms]
[serious] Se aplican permisos de invitación, restricciones de dominio y configuración entre inquilinos. No se copia ninguna contraseña a Contoso.

## Step 3 · Redeem the invitation

[calm] Aceptar la invitación.
[600ms]
Alex inicia sesión con su identidad de origen y completa el consentimiento. Aceptar la invitación no crea una asignación de rol de Azure.
[600ms]
[serious] El selector compara estados del ejemplo; no revoca consentimientos reales. Contoso debe autorizar los recursos por separado.

## Step 4 · One person, two directory records

[calm] Una persona, dos registros.
[600ms]
La identidad de origen autentica a Alex. Contoso conserva otro objeto de usuario. Guest o Member describe la relación, no el proveedor de identidad.
[600ms]
[serious] Guest y Member tienen permisos de directorio predeterminados distintos. Cambiar UserType no cambia el proveedor; debe reflejar la relación real.

## Step 5 · Authorize just the intended resource

[calm] Autorizar solo el recurso previsto.
[600ms]
Contoso asigna Reader a Alex en shop-vm. Puede leer la configuración, no eliminar la VM. Quitar el rol no revierte la aceptación de la invitación.
[600ms]
[serious] Se supone que se cumplen las políticas, los cambios se propagaron y no hay otros roles ni denegaciones. Reader no permite iniciar sesión en el SO ni acceder a datos.

## Step 6 · External identity. Bounded collaboration.

[calm] Identidad externa. Colaboración limitada.
[600ms]
Alex conserva su identidad de origen, Contoso administra su representación y un rol con ámbito aporta los permisos. Son responsabilidades distintas.
[600ms]
[serious] La colaboración B2B pertenece a un inquilino de personal. Un inquilino externo independiente ofrece registro e inicio de sesión para clientes.
