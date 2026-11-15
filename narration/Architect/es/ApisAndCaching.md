# Narrator Script — Architect · Front the app: APIs, caching and deployment

**Source animation:** [ApisAndCaching.html](../../../journeys/Architect/ApisAndCaching.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/api-management/api-management-key-concepts>

---

## Step 1 · API Management: one front door

[calm] Los clientes de Contoso actualmente llaman directamente al backend, dejando la aplicación de políticas dispersa por toda la aplicación.
[600ms]
[curious] API Management coloca una pasarela delante, con comprobaciones y transformaciones aplicadas en las rutas de solicitud y respuesta.
[600ms]
[reassuring] Los productos, las suscripciones y el portal de desarrolladores organizan el consumo de la API, mientras que el backend puede mantenerse centrado en su propio trabajo.

## Step 2 · API Management: choose the tier

[calm] Los niveles de API Management varían en capacidad, red y las funciones de disponibilidad que ofrecen.
[600ms]
[curious] Utiliza la comparación para identificar los requisitos que eliminan niveles inadecuados, incluyendo si se trata de tráfico de producción.
[600ms]
[reassuring] Elige solo después de comprobar la comparación actual de características, en lugar de asumir que cada nivel ofrece las mismas opciones de red y resiliencia.

## Step 3 · Caching: check the cache first

[calm] Observa cómo el local pide a la caché datos del producto antes de que pida a la base de datos.
[600ms]
[curious] Un golpe en caché devuelve la respuesta rápidamente; un error envía la aplicación al almacén de datos y luego se llena la caché.
[600ms]
[reassuring] Este patrón de caché-aparte reduce las lecturas repetidas, pero la aplicación aún necesita una estrategia de caducidad e invalidación.

## Step 4 · Caching: what belongs in memory

[calm] La caché es útil para datos que se leen con frecuencia y puede tolerar cierta inactividad temporal.
[600ms]
[curious] No es el registro autorizado de las órdenes de Contoso ni de otros datos que no debe perderse.
[600ms]
[reassuring] Elige qué pertenece a Azure Managed Redis según el patrón de acceso y el requisito de corrección, no solo porque la memoria sea rápida.

## Step 5 · Messaging and events: pick by the message

[calm] Un comando, un evento discreto y un flujo describen diferentes necesidades de comunicación.
[600ms]
[curious] Service Bus soporta mensajes empresariales valiosos, Event Grid distribuye notificaciones de eventos y Event Hubs ingire flujos.
[600ms]
[reassuring] Una cola de almacenamiento puede adaptarse a necesidades de colas más simples; comienza con el significado del mensaje y las garantías requeridas antes de elegir el servicio.

## Step 6 · Configuration: keep settings out of the code

[calm] La misma versión de la aplicación debería ejecutarse en varios entornos sin llevar secretos en su código fuente.
[600ms]
[curious] App Configuration contiene las banderas de configuración y características, mientras que una referencia de Key Vault apunta al secreto protegido por separado.
[600ms]
[reassuring] Sigue el acceso de la aplicación a cada servicio: una referencia no copia el secreto en la almacén de configuración.

## Step 7 · Deployment: ship safely, roll back fast

[calm] La ruta de lanzamiento sustituye los cambios manuales por código de infraestructura y una cadena de aplicaciones.
[600ms]
[curious] Un espacio de despliegue permite a Contoso preparar la nueva versión antes de cambiar el tráfico de producción.
[600ms]
[reassuring] Mantener la ruta de liberación y rollback repetible hace que el diseño sea más seguro que hacer cambios de emergencia directamente en la aplicación en vivo.

## Step 8 · All in one: a fast, safe partner API

[calm] La API asociada de Contoso ahora cuenta con un conjunto coordinado de decisiones de soporte, no solo un backend más rápido.
[600ms]
[curious] El gateway, la caché, la mensajería, la configuración y el camino de despliegue resuelven cada uno un problema diferente.
[600ms]
[reassuring] Mantén la justificación junto a la elección del servicio; después, planifica cómo se moverán las cargas de trabajo existentes a este diseño de Azure.

