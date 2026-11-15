# Narrator Script — Security · Security, Compliance and Identity Concepts: the shared vocabulary

**Source animation:** [SecurityConcepts.html](../../../journeys/Security/SecurityConcepts.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/describe-security-concepts-methodologies/>
- <https://learn.microsoft.com/training/modules/describe-identity-principles-concepts/>

---

## Step 1 · Security, compliance and identity

[calm] Contoso está por abrir un portal para clientes. Antes del lanzamiento, hay tres preguntas distintas que contestar.
[600ms]
[curious] La seguridad protege los datos y los sistemas de las amenazas. El cumplimiento es cumplir las leyes y los estándares que aplican. La identidad describe quién o qué participa.
[600ms]
[confident] Suenan parecidos, pero no son lo mismo. En especial, cumplimiento no es lo mismo que seguridad.

## Step 2 · Shared responsibility

[calm] Si pasas de lo local al software como servicio, el proveedor de la nube se hace cargo de una parte mayor de la pila.
[600ms]
[serious] Pero hay tareas que nunca se mueven. En todos los modelos, tus datos, tus identidades y accesos, tus endpoints y tus decisiones de configuración siguen siendo tuyos.
[600ms]
[reassuring] Dónde queda exactamente la línea depende del servicio, así que revisa la documentación del proveedor de cada uno que uses.

## Step 3 · Defense in depth

[calm] La defensa en profundidad usa capas de protección que trabajan juntas. Cuando una capa falla, la siguiente sigue interponiéndose entre el atacante y los datos.
[600ms]
[curious] Aquí, una contraseña robada pasa la capa de identidad, pero la segmentación de red igual detiene al atacante.
[600ms]
[confident] Las capas cubren la confidencialidad, la integridad y la disponibilidad, y los datos son la capa más interna.

## Step 4 · Zero Trust

[calm] Zero Trust significa nunca confiar y siempre verificar. Sigue una solicitud de acceso desde una ubicación desconocida, en un dispositivo no administrado.
[600ms]
[confident] Lo guían tres principios: verificar de forma explícita, usar el acceso con privilegios mínimos y asumir que hubo una brecha.
[600ms]
[reflective] Zero Trust es una estrategia, no un solo producto, así que cada principio aparece como una revisión distinta en el camino.

## Step 5 · Encryption

[calm] El cifrado hace que los datos no sirvan de nada sin la clave. El cifrado simétrico usa una sola clave en los dos sentidos: es rápido, pero compartir la clave es difícil.
[600ms]
[curious] El cifrado asimétrico usa un par de claves. Lo que cifra la clave pública solo lo puede descifrar la clave privada, así que la clave pública se puede compartir sin problema.
[600ms]
[serious] Guarda las claves en un servicio administrado, como Azure Key Vault, lejos de los datos. El texto cifrado que ves es inventado.

## Step 6 · Hashing

[curious] Un hash es una huella digital de un solo sentido. El sistema guarda solo la huella de la contraseña y la compara en cada inicio de sesión.
[600ms]
[confident] El hashing no necesita clave y no se puede revertir. La misma entrada siempre da el mismo hash.
[600ms]
[reassuring] Los sistemas reales además agregan una sal única, para que dos contraseñas idénticas no den hashes idénticos. Estos valores son inventados y están abreviados.

## Step 7 · Encryption or hashing?

[curious] Seis ejemplos de todos los días y dos grupos. Hazte una pregunta con cada uno: ¿necesitas recuperar el original?
[600ms]
[confident] Si la respuesta es sí, va con el cifrado, como los datos en reposo o el tráfico por HTTPS. Si es no, va con el hashing, como el almacenamiento de contraseñas o la verificación de un archivo descargado.
[600ms]
[encouraging] Primero clasifícalos tú, y luego mira dónde cae cada uno.

## Step 8 · Governance, risk and compliance

[calm] Gobernanza, riesgo y cumplimiento responden tres preguntas: quién pone las reglas, qué podría salir mal y si podemos demostrar que las cumplimos.
[600ms]
[confident] La administración de riesgos identifica, evalúa, responde y monitorea los riesgos. La respuesta puede ser aceptar, mitigar, transferir o evitar.
[600ms]
[serious] El cumplimiento es lo mínimo que exigen las reglas, no toda la seguridad. Los equipos de Contoso que ves aquí son ficticios.

## Step 9 · Identity is the new perimeter

[calm] Antes, el límite era la red. Luego las apps en la nube, el trabajo remoto y los dispositivos personales movieron el borde.
[600ms]
[curious] Ahora la pregunta es: ¿quién o qué está pidiendo acceso? Puede ser una persona, un dispositivo, una carga de trabajo o un agente.
[600ms]
[serious] Casi todos los ataques exitosos terminan dependiendo de comprometer o abusar de una identidad, y por eso la identidad importa tanto.

## Step 10 · Authentication and authorization

[calm] Primero demuestras quién eres: eso es la autenticación. Luego se determina qué puedes hacer: eso es la autorización, y siempre va después.
[600ms]
[confident] Un proveedor de identidad se encarga de lo primero y emite tokens que llevan reclamaciones. Un token de ID prueba que iniciaste sesión, y un token de acceso da permiso para usar un recurso.
[600ms]
[reflective] Los protocolos más comunes son OpenID Connect, OAuth dos punto cero y SAML.

## Step 11 · Active Directory and the cloud

[calm] Active Directory Domain Services se creó para redes locales. Guarda usuarios, dispositivos y grupos, y el servidor que lo ejecuta es un controlador de dominio.
[600ms]
[curious] No maneja de forma nativa el inicio de sesión en software como servicio. Microsoft Entra ID es el directorio creado para la nube.
[600ms]
[reassuring] Los dos se pueden conectar sincronizándolos, y a eso se le llama identidad híbrida.

## Step 12 · Federation and recap

[calm] La federación permite que Contoso acepte el inicio de sesión de un socio, así que nadie tiene que crear una cuenta nueva.
[600ms]
[serious] Es una relación de confianza entre proveedores de identidad distintos, y la confianza no es bidireccional de forma automática. Una confianza bidireccional hay que configurarla a propósito.
[600ms]
[proud] Con eso cubrimos la primera área de habilidades de S C 900: los conceptos de seguridad, cumplimiento e identidad. Revisa la guía de estudio vigente.
