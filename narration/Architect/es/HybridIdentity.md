# Narrator Script — Architect · Design hybrid identity and on-premises access

**Source animation:** [HybridIdentity.html](../../../journeys/Architect/HybridIdentity.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/identity/hybrid/whatis-hybrid-identity>
- <https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/what-is-cloud-sync>
- <https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/connect-to-cloud-sync-decision-guide>
- <https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn>
- <https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sso>
- <https://learn.microsoft.com/entra/identity/domain-services/overview>
- <https://learn.microsoft.com/entra/identity/app-proxy/overview-what-is-app-proxy>
- <https://learn.microsoft.com/entra/global-secure-access/concept-private-access>
- <https://learn.microsoft.com/entra/identity/conditional-access/overview>

---

## Step 1 · Two directories, one workforce

[calm] Los empleados de Contoso ya existen en Active Directory local, pero sus aplicaciones en la nube utilizan Microsoft Entra ID.
[600ms]
[curious] Los dos directorios deben representar a la misma fuerza laboral en lugar de crear un segundo conjunto de cuentas no relacionadas.
[600ms]
[reassuring] Elegiremos sincronización, inicio de sesión y acceso a aplicaciones por separado, porque resuelven diferentes partes de este problema.

## Step 2 · Sync: Cloud Sync or Connect Sync?

[calm] Ambas opciones de sincronización llevan a usuarios y grupos a Microsoft Entra ID, pero el modelo operativo es diferente.
[600ms]
[curious] Cloud Sync utiliza agentes ligeros con configuración gestionada en la nube, mientras que Connect Sync ejecuta un motor de sincronización más completo en un servidor.
[600ms]
[reassuring] Compara los requisitos y necesidades de personalización antes de elegir; sincronizar una identidad no elige por sí solo su método de inicio de sesión.

## Step 3 · Sign-in: who checks the password?

[calm] Sigue cada ruta de inicio de sesión y haz una pregunta: ¿dónde se comprueba realmente la contraseña?
[600ms]
[curious] La sincronización de hash de contraseña valida en la nube, la autenticación pasante llega a controladores de dominio locales y la federación transmite la autenticación a otro sistema.
[600ms]
[reassuring] Elige el método más sencillo que cumpla con los requisitos de Contoso, incluyendo cualquier requisito de comprobar el estado de la cuenta local.

## Step 4 · Single sign-on: no repeat prompts

[calm] El inicio de sesión único evita tener que pedir a los empleados que se autentiquen de nuevo cada vez que abren una aplicación en la nube.
[600ms]
[curious] El diagrama separa el token de refresco principal utilizado por dispositivos unidos de Seamless SSO en dispositivos unidos al dominio corporativo.
[600ms]
[reassuring] Elige el mecanismo que coincida con el dispositivo y el diseño de inicio de sesión, en lugar de asumir que todas las formas de SSO funcionan de forma idéntica.

## Step 5 · Legacy apps: managed domain or your own DCs?

[calm] La aplicación heredada de Contoso sigue esperando servicios de dominio como LDAP, Kerberos o unión de dominios.
[600ms]
[curious] Un dominio gestionado reduce la administración, mientras que ejecutar controladores de dominio Active Directory en máquinas virtuales Azure ofrece más control.
[600ms]
[reassuring] La cuestión decisiva es qué capacidades necesita la aplicación y quién operará los controladores de dominio de los que depende.

## Step 6 · On-premises apps: reach them without a VPN

[calm] El personal remoto necesita las aplicaciones dentro de la red de Contoso, sin abrir conexiones entrantes a esas aplicaciones.
[600ms]
[curious] El proxy de aplicaciones publica aplicaciones web, mientras que Private Access aborda un conjunto más amplio de aplicaciones y recursos privados.
[600ms]
[reassuring] Sigue la ruta del conector saliente y luego elige el enfoque de acceso que se ajuste a los requisitos de la aplicación y del dispositivo.

## Step 7 · Conditional Access: one policy layer

[calm] El Acceso Condicional toma las señales mostradas a la izquierda y las convierte en una decisión de acceso.
[600ms]
[curious] Un usuario, dispositivo, ubicación o condición de riesgo puede dar lugar a un bloqueo o a un requisito adicional, como la autenticación multifactor.
[600ms]
[reassuring] El mismo enfoque político puede proteger las aplicaciones en la nube y las aplicaciones locales que Contoso ha publicado.

## Step 8 · All in one: Contoso’s hybrid identity

[calm] Contoso ahora tiene una plantilla representada en ambos directorios, con sincronización e inicio de sesión elegidos deliberadamente.
[600ms]
[curious] Las rutas de aplicación difieren, pero se sitúan detrás de las mismas decisiones de acceso basadas en la identidad.
[600ms]
[reassuring] Eso completa la autenticación y la alcanzabilidad; la siguiente lección pregunta qué puede hacer cada persona o carga de trabajo, y durante cuánto tiempo.

