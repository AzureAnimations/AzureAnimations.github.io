# Narrator Script — Security · Microsoft Entra applications: registrations, enterprise apps and consent — Azure Security Journey

**Source animation:** [EntraApplicationsAndConsent.html](../../../journeys/Security/EntraApplicationsAndConsent.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/identity-platform/app-objects-and-service-principals>
- <https://learn.microsoft.com/entra/identity-platform/permissions-consent-overview>
- <https://learn.microsoft.com/entra/identity/enterprise-apps/user-admin-consent-overview>
- <https://learn.microsoft.com/entra/identity-platform/quickstart-register-app>

---

## Step 1 · An app wants your mailbox

[curious] Ana inicia sesión en MailTidy, una app nueva, y esta le pide acceso a su buzón.
[600ms]
[calm] Priya se encarga de la identidad en Contoso. Entonces, ¿alguien debería decir que sí? ¿Y quién decide?
[600ms]
[confident] Esta lección sigue a una app a lo largo del registro, el consentimiento, la asignación y la revisión en Microsoft Entra ID.

## Step 2 · App registration: the app’s identity

[calm] Sam, el desarrollador, registra MailTidy una sola vez. El registro define la aplicación.
[600ms]
[curious] Ahí se establece cómo se llama la app, adónde regresa el inicio de sesión y cómo demuestra quién es.
[600ms]
[confident] Al registrarla se crea el objeto de aplicación en su inquilino de origen, con un ID de cliente único a nivel global.

## Step 3 · Enterprise application: the app in your tenant

[calm] Cada inquilino que usa MailTidy obtiene su propia copia local, llamada principal de servicio.
[600ms]
[curious] En Entra aparece en Aplicaciones empresariales, y ahí es donde Contoso la administra.
[600ms]
[confident] Piensa en el objeto de aplicación como la plantilla global, y en el principal de servicio como la instancia local.

## Step 4 · Delegated or application permissions

[calm] Hay dos tipos de permisos. Con los delegados, la app actúa como el usuario que inició sesión.
[600ms]
[serious] Con los de aplicación, actúa por sí misma, sin ningún usuario presente. Y se aplica a todos los datos que cubre, por ejemplo, todos los buzones.
[600ms]
[confident] El acceso delegado solo llega a lo que ese usuario podría alcanzar.

## Step 5 · Consent: who can say yes

[calm] El consentimiento es la forma en que se otorgan los permisos. Un usuario puede dar su consentimiento sobre sus propios datos.
[600ms]
[curious] Un administrador puede dar el consentimiento por todos, y algunas solicitudes lo exigen.
[600ms]
[serious] Los permisos de aplicación, y muchos permisos delegados de alto privilegio, solo los puede aprobar un administrador.

## Step 6 · User consent settings

[calm] Priya decide si los usuarios pueden dar su consentimiento o no. Hay tres opciones integradas.
[600ms]
[curious] Ningún consentimiento de usuario. Editores verificados con permisos de bajo impacto. O cualquier app.
[600ms]
[confident] Con la opción intermedia, tú clasificas qué permisos cuentan como de bajo impacto. Los administradores también pueden escribir políticas de consentimiento personalizadas.

## Step 7 · Admin consent and the workflow

[calm] Cuando los usuarios no pueden dar su consentimiento, el flujo de trabajo de consentimiento del administrador les permite pedir una aprobación.
[600ms]
[curious] Se avisa a los revisores, uno decide y el usuario recibe la respuesta.
[600ms]
[serious] Ser revisor no le da más privilegios a nadie. Para aprobar, necesitan tener los permisos para otorgar ese consentimiento.

## Step 8 · Try it: approve or deny

[excited] Llegan tres solicitudes de consentimiento. Decide cada una y luego mira por qué.
[600ms]
[curious] Hazte tres preguntas. ¿Quién actúa? ¿El editor está verificado? ¿El permiso es de bajo impacto?
[600ms]
[reassuring] Las respuestas correctas siguen la configuración de Contoso, que solo permite que los usuarios den su consentimiento a editores verificados y permisos de bajo impacto.

## Step 9 · Review and revoke permissions

[serious] Un permiso otorgado dura hasta que alguien lo quita. Así que revisa qué tiene cada app.
[600ms]
[confident] Luego revoca lo que sobre. Necesitas como mínimo el rol de Administrador de Aplicaciones en la Nube.
[600ms]
[calm] El portal revoca los permisos con consentimiento de administrador. Los permisos que otorgaron los usuarios se revocan con Microsoft Graph o PowerShell.

## Step 10 · Assign users and require assignment

[calm] El consentimiento dice qué puede hacer la app. La asignación dice quién puede usarla.
[600ms]
[confident] Si la asignación es obligatoria, solo pueden iniciar sesión los usuarios y grupos asignados.
[600ms]
[reflective] Entonces los usuarios ya no pueden dar su consentimiento por su cuenta, así que un administrador debe otorgar el consentimiento para todo el inquilino. La asignación por grupos requiere una licencia Premium.

## Step 11 · Secrets, certificates or federated credentials

[calm] Una app demuestra quién es con una credencial. Elige la que tenga menos que filtrar.
[600ms]
[curious] No guardar nada es mejor que un certificado, y un certificado es mejor que un secreto de cliente.
[600ms]
[serious] Las identidades administradas y las credenciales federadas eliminan los secretos almacenados. Los secretos de cliente no deberían usarse en producción.

## Step 12 · Recap: register, consent, assign, review

[calm] Cuatro pasos mantienen una app bajo control: regístrala, define quién puede dar su consentimiento, asigna quién puede usarla y revisa qué permisos tiene.
[600ms]
[confident] En conjunto, cubren las habilidades de S C 500 sobre identidad de aplicaciones y consentimiento.
[600ms]
[proud] Están dentro del dominio de administración de identidad, acceso y gobernanza.
