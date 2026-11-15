# Narrator Script — Microsoft 365 Copilot · Zero Trust and Defender XDR

**Source animation:** [ZeroTrustAndDefender.html](../../../journeys/Copilot/ZeroTrustAndDefender.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/security/zero-trust/zero-trust-overview>
- <https://learn.microsoft.com/entra/identity-platform/authentication-vs-authorization>
- <https://learn.microsoft.com/defender-xdr/microsoft-365-defender>
- <https://learn.microsoft.com/defender-xdr/incidents-overview>

---

## Step 1 · One password, every door

[curious] Conoce a Alex, Mei, Jo y un intruso, todos en Contoso. En el modelo antiguo, cualquiera dentro de la red era de fiar.
[600ms]
[serious] Los ataques actuales van tras la identidad. Un correo de phishing, un inicio de sesión robado y el intruso entra por todas las puertas.
[600ms]
[calm] Esta lección sigue las habilidades Microsoft 365 principios de seguridad del examen A B 900.

## Step 2 · Three Zero Trust principles

[confident] Zero Trust se basa en tres principios: verificar explícitamente, usar el acceso con privilegio mínimo y asumir una brecha.
[600ms]
[calm] Guían cada decisión de acceso y cada control de seguridad en Microsoft 365.
[600ms]
[reflective] El gran cambio es de la confianza por defecto a la confianza por excepción. Nada entra solo por donde se sitúa.

## Step 3 · Authentication, then authorization

[curious] Dos palabras que suenan igual pero hacen trabajos diferentes. La autenticación demuestra quién eres.
[600ms]
[confident] La autorización decide lo que puedes hacer una vez que te conocen. Una solicitud necesita ambas cosas, y ninguna reemplaza a la otra.
[600ms]
[calm] En Microsoft 365, la autorización proviene de cosas como los roles de Microsoft Entra, los roles de Exchange y los permisos del sitio.

## Step 4 · Password, MFA, passwordless

[calm] Imagina una escalera de métodos de inicio de sesión. En la parte inferior hay una contraseña simple, que es lo más fácil que un atacante puede robar.
[600ms]
[confident] Cada paso hace que una contraseña robada sea menos útil. La autenticación multifactor añade una segunda prueba, y la falta de contraseña elimina la contraseña por completo.
[600ms]
[encouraging] Microsoft recomienda métodos resistentes al phishing como Windows Hello for Business y las claves de acceso. Los administradores eligen métodos permitidos en la política de métodos de autenticación.

## Step 5 · Four ways in, four defenders

[curious] Los atacantes llegan a Microsoft 365 por cuatro caminos: correo electrónico, dispositivos, identidades y aplicaciones.
[600ms]
[confident] La protección contra amenazas pone un producto Microsoft Defender en cada camino, y cada uno vigila su propia área.
[600ms]
[calm] Microsoft Defender XDR los une, y Microsoft Entra ID Protección también ayuda a proteger las identidades.

## Step 6 · Threat intelligence

[curious] Saber lo que hacen los atacantes es la mitad de la batalla. La inteligencia de amenazas también te dice si te afecta.
[600ms]
[confident] En Microsoft Defender, la analítica de amenazas entrega estos informes. Provienen de investigadores de seguridad Microsoft, además de fuentes de código abierto seleccionadas.
[600ms]
[calm] La campaña, las respuestas y el informe en pantalla son un ejemplo inventado.

## Step 7 · Defender XDR: one incident

[concerned] Cada producto Defender genera sus propias alertas, y un montón de alertas separadas es difícil de interpretar como un solo ataque.
[600ms]
[confident] Microsoft Defender XDR correlaciona las alertas relacionadas en un solo incidente. Eso te da una historia de ataque en lugar de muchos fragmentos.
[600ms]
[impressed] Una alerta es una señal, un incidente es todo el conjunto, y trabajas en ello en el portal Microsoft Defender.

## Step 8 · Automated investigation and response

[curious] Defender XDR no tiene que esperar a un analista, porque puede investigar el incidente por sí mismo.
[600ms]
[confident] Cada prueba recibe un veredicto: maliciosa, sospechosa o no se ha encontrado ninguna amenaza. Entonces puede tomar medidas de remediación.
[600ms]
[reassuring] Dependiendo de la configuración, las acciones se ejecutan automáticamente o esperan la aprobación de tu equipo de seguridad. Cada acción aparece en el Centro de Acciones.

## Step 9 · Advanced hunting

[curious] A veces tu equipo tiene su propia pregunta. La caza avanzada le permite buscar datos en bruto recogidos por los productos Defender.
[600ms]
[confident] Eso cubre Defender para Office 365, Endpoint, Identidad y aplicaciones en la nube, con hasta treinta días de datos en bruto.
[600ms]
[encouraging] El modo guiado es un generador de consultas, y el modo avanzado utiliza el Lenguaje de Consultas Kusto. Una buena consulta incluso puede convertirse en una regla de detección personalizada.

## Step 10 · Which principle applies?

[encouraging] Ahora te toca a ti. Elige un escenario y luego elige el principio de Confianza Cero que se aplica.
[600ms]
[curious] Verás cómo cada uno aparece en Microsoft 365: MFA y Acceso Condicional para verificar explícitamente, roles y permisos para el privilegio mínimo.
[600ms]
[confident] Y la detección y respuesta en Defender XDR es como se supone que hay una brecha.

## Step 11 · Zero Trust, then Defender XDR

[calm] Vamos a ponernos las pilas. Verifica explícitamente, usa el privilegio mínimo y asume que es una brecha.
[600ms]
[confident] Defender XDR entonces pone en práctica esos principios: detecta, correlaciona, responde y caza.
[600ms]
[proud] Compíbalo con las habilidades de A B 900 medidas y lee la guía de estudio actual sobre Microsoft Learn, porque las habilidades cambian con el tiempo.
