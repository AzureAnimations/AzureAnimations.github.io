# Narrator Script — Compute · Secure Azure Functions, Logic Apps, App Service and API Management

**Source animation:** [SecureAppPlatform.html](../../../journeys/Compute/SecureAppPlatform.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/app-service/overview-authentication-authorization>
- <https://learn.microsoft.com/azure/azure-functions/security-concepts>
- <https://learn.microsoft.com/azure/logic-apps/logic-apps-securing-a-logic-app>
- <https://learn.microsoft.com/azure/api-management/mitigate-owasp-api-threats>

---

## Step 1 · Who can call it, and what can it reach?

[calm] Contoso Shop funciona en cuatro plataformas: App Service, Functions, Logic Apps y API Management.
[600ms]
[curious] Para cada una necesitas dos respuestas. ¿Quién puede llamarla, y a qué puede acceder ella?
[600ms]
[confident] Cada control de esta lección responde una de esas dos preguntas, de entrada o de salida.

## Step 2 · App Service: sign-in, HTTPS and managed identity

[calm] En App Service, los navegadores tienen que usar HTTPS, con una versión mínima de TLS. Son ajustes de la aplicación.
[600ms]
[confident] Los usuarios tienen que iniciar sesión, así que activas la autenticación integrada en lugar de programarla tú.
[600ms]
[impressed] Y la aplicación llega a Key Vault mediante una identidad administrada de Microsoft Entra ID. No hay ninguna credencial que guardar ni rotar en tu código.

## Step 3 · Functions: authorization levels and keys

[calm] Toda función con un trigger HTTP tiene un nivel de autorización, y el nivel anonymous no necesita clave.
[600ms]
[confident] Los niveles function y admin necesitan una clave de acceso, que se envía en un encabezado o en el parámetro de consulta code. Trata la clave maestra como la contraseña de un administrador.
[600ms]
[serious] Pero una clave es un secreto compartido, no un inicio de sesión. Para tener una identidad real, activa la autenticación integrada.

## Step 4 · Functions network: inbound and outbound

[calm] Para quienes llaman desde internet público, hay una lista de permitidos y denegados, ordenada por prioridad.
[600ms]
[confident] Quienes llaman desde la red privada usan un endpoint privado, que le da a la aplicación una dirección privada para el tráfico entrante.
[600ms]
[serious] Para llamar a servicios privados se usa la integración con red virtual. Pero solo afecta al tráfico saliente, así que no vuelve privada la aplicación.

## Step 5 · Logic Apps: who can start a workflow

[curious] Un trigger de solicitud es simplemente una URL, así que ¿quién puede llamarla?
[600ms]
[confident] Elige cómo demuestran su identidad quienes llaman: OAuth con Microsoft Entra ID, firmas de acceso compartido, restricciones de IP de entrada, o pon el flujo de trabajo detrás de API Management.
[600ms]
[reassuring] Para las conexiones que hace el flujo de trabajo, usa una identidad administrada en lugar de una credencial guardada.

## Step 6 · Logic Apps: keep secrets out of run history

[calm] El historial de ejecuciones muestra todas las entradas y salidas de cada acción.
[600ms]
[serious] Eso es un problema con valores sensibles, así que activa entradas seguras y salidas seguras para ocultarlos. Si una acción usa una salida segura, también se ocultan sus entradas.
[600ms]
[confident] Define tus secretos como parámetros de cadena segura. Todos los valores en pantalla son ficticios.

## Step 7 · API Management: validate the token

[calm] Ahora, el gateway. Revisa el token de quien llama antes de que el backend vea siquiera la solicitud.
[600ms]
[confident] La política validate JWT verifica la firma, el emisor, la audiencia y la expiración, además de los claims que exijas.
[600ms]
[reassuring] Sin un token válido, la llamada se detiene en el gateway, y de forma predeterminada quien llama recibe un cuatro cero uno.

## Step 8 · API Management: limits, IP filter, backend

[calm] Hay más políticas que cuidan esa misma puerta. Un filtro de IP permite o deniega direcciones.
[600ms]
[confident] Un límite de tasa restringe las llamadas, y quien se pasa recibe un cuatro veintinueve, Too Many Requests.
[600ms]
[curious] Y hacia el backend, el gateway también se identifica, con un token de identidad administrada o con un certificado de cliente para TLS mutuo.

## Step 9 · Put a WAF in front

[calm] Un firewall de aplicaciones web revisa cada solicitud en busca de ataques comunes antes de que llegue a tus aplicaciones, funciones o al gateway.
[600ms]
[confident] Azure Web Application Firewall funciona en Application Gateway o en Front Door. Protege contra ataques como la inyección de SQL y el cross-site scripting.
[600ms]
[serious] Luego bloquea tus aplicaciones para que solo acepten tráfico que venga por esa puerta de entrada.

## Step 10 · Try it: where is the request blocked?

[curious] Elige una solicitud y observa el recorrido. Te muestra la primera capa que la rechaza.
[600ms]
[confident] Las capas siguientes ni siquiera ven la solicitud, así que una llamada mala se detiene lo más pronto posible.
[600ms]
[reflective] Por eso se apilan las capas. Cada una detecta lo que la anterior no puede.

## Step 11 · Which control for which platform?

[calm] Ocho controles, cuatro plataformas. Mira cómo cada control cae en la plataforma donde se configura.
[600ms]
[confident] Algunos ajustes se superponen, como las restricciones de acceso en App Service y en Functions.
[600ms]
[reassuring] Estos ocho son simplemente los que mejor corresponden a cada plataforma, y una buena forma de recordar dónde está cada uno.

## Step 12 · Recap: identity, network, front door

[calm] Cada control responde una pregunta. ¿Quién eres? ¿Desde dónde llegas? ¿Esta solicitud parece segura?
[600ms]
[confident] Eso es identidad, red y la puerta de entrada. Usa las tres capas juntas en cada plataforma.
[600ms]
[proud] Esta lección sigue las habilidades de cómputo seguro de la guía de estudio S C 500.
