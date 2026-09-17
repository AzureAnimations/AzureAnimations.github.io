# Narrator Script - Autenticación y acceso

**Source animation:** journeys/Identity/Authentication.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/authentication.mjs.

## Step 1 · Two apps. Repeated sign-ins.

[calm] Dos apps. Inicios repetidos.
[600ms]
Maya abre la aplicación de pedidos y la administración de Azure. Los inicios de sesión separados interrumpen su trabajo; autenticarse no determina qué puede hacer.
[600ms]
[serious] Las apps son puntos de entrada distintos. La autenticación prueba la identidad; cada servicio conserva sus propios permisos.

## Step 2 · Reuse an eligible session

[calm] Reutilizar una sesión válida.
[600ms]
Con el inicio de sesión único de Microsoft Entra, las apps compatibles reutilizan la sesión de Maya. Se reducen las solicitudes, no los requisitos de las políticas.
[600ms]
[serious] Reutilizar la sesión depende de la integración y su validez. Nuevos requisitos, caducidad o políticas pueden generar otra solicitud.

## Step 3 · Compare the authentication evidence

[calm] Comparar las pruebas de autenticación.
[600ms]
Una contraseña es un factor. Contraseña más Authenticator añade otro. Una llave FIDO2 desbloqueada con PIN puede ser sin contraseña y multifactor.
[600ms]
[serious] Estos métodos deben estar habilitados y registrados. Sin contraseña y MFA pueden coincidir; dos contraseñas no son factores distintos.

## Step 4 · Evaluate the required strength

[calm] Evaluar la seguridad requerida.
[600ms]
Tras la autenticación inicial, la regla hipotética de Contoso exige MFA en la oficina y MFA resistente al phishing fuera de ella. La sesión debe cumplir el requisito.
[600ms]
[serious] Regla ilustrativa, no predeterminada de Azure. El acceso condicional requiere Entra ID P1 o licencia incluida; las políticas de riesgo requieren P2.

## Step 5 · Check the resource permission too

[calm] Comprobar también el permiso.
[600ms]
Cumplir la política no asigna un rol de Azure. Maya necesita Reader en el ámbito de shop-vm para leer su configuración en este ejemplo limitado.
[600ms]
[serious] Se supone que no hay otros roles ni denegaciones y que los cambios se propagaron. Reader permite leer el plano de control, no modificar, iniciar sesión en la VM ni leer datos.

## Step 6 · Session, method, policy, permission

[calm] Sesión, método, política y permiso.
[600ms]
SSO reutiliza una sesión; la autenticación aporta pruebas; el acceso condicional comprueba requisitos; Azure RBAC concede permisos. Ninguna capa sustituye a las demás.
[600ms]
[serious] La oficina no garantiza seguridad. Las políticas reales consideran las señales necesarias y todas las políticas aplicables; este ejemplo es limitado.
