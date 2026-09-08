# Narrator Script — GitHub · Contoso Delivery · Why Contoso Is Building This · ES

**Source animation:** `journeys/GitHub/WhyContoso.html`

Los encabezados `## Step N` se mantienen en inglés a propósito (índice del generador y de las leyendas).

---

## Step 1 · When It Rains, Contoso Loses Money

[warm] Empecemos con un problema que no tiene nada que ver con el software.
[500ms]
[calm] Contoso es un minorista. Cuando la lluvia intensa se instala sobre una ciudad, la gente se queda en casa: el tráfico en tienda cae y la caja lo sigue.
[500ms]
[thoughtful] El contorno claro es el día que Contoso esperaba. El bloque sólido es el día que tuvo. No había nada mal en los productos ni en los precios: simplemente llovió.

## Step 2 · The Same Rain, Two Different Days

[confident] Esta es la idea sobre la que descansa todo el proyecto. La lluvia es una señal, y Contoso puede hacer una de dos cosas con ella.
[500ms]
[serious] No hacer nada, y la visita se pierde: el stock se queda sin vender y el día se da por perdido.
[500ms]
[bright] O actuar, y encontrar al cliente donde ya está, que en una tarde lluviosa es en línea. La misma lluvia que vació la tienda ahora encaja con el día que ha creado.

## Step 3 · Sell What the Weather Calls For

[calm] Cada condición meteorológica se corresponde con un inventario que de pronto tiene sentido comprar. La lluvia trae chubasqueros y paraguas. Una tormenta trae abrigo de invierno, y entrega a domicilio. Una ola de frío trae punto.
[500ms]
[thoughtful] Fíjate en la columna de la derecha: lo que *cada canal* debería estar promocionando. Quédate con esa palabra: dentro de dos pasos se convierte en todo el problema de arquitectura.

## Step 4 · Storm Day Free Shipping

[bright] Y cuando el pronóstico se vuelve severo, Contoso puede ir más lejos.
[500ms]
[calm] Azure Maps informa de una tormenta que se acerca. Ese único dato dispara la promoción Storm Day: cambia el banner, salen a la superficie los productos adecuados y el envío gratuito elimina la última razón para esperar.
[500ms]
[confident] Fíjate en el orden: primero crece la tormenta y solo entonces aparece la oferta. El tiempo causa la campaña. Nadie tuvo que ver el pronóstico y publicar nada a mano.

## Step 5 · Three Channels, Three Sets of Problems

[serious] Ahora, así es como los equipos se equivocan. Contoso tiene tres canales — web, aplicación móvil y marketing — y lo obvio es dejar que cada uno llame directamente a Azure Maps.
[500ms]
[concerned] Mira lo que cuesta. Tres copias de la clave de suscripción, incluida una en un navegador, donde una clave no es ningún secreto. Tres formas de validar la entrada. Tres equipos leyendo el mismo pronóstico de forma ligeramente distinta.
[500ms]
[thoughtful] Tres canales, tres conjuntos de problemas, y un cuarto en cuanto Contoso construya una cuarta aplicación.

## Step 6 · One API, One Source of Truth

[confident] Así que Contoso construye una sola cosa. Un único servicio de Node.js — la Contoso Weather API — se sitúa entre los canales y Azure Maps.
[500ms]
[bright] Hace cuatro trabajos exactamente una vez: guarda la clave en el servidor, valida la entrada, normaliza la respuesta a una sola forma y decide qué *significa* un pronóstico para el negocio.
[500ms]
[reassuring] Es la misma imagen que antes: los canales no han cambiado. Lo que cambió es que los cables rojos se volvieron uno azul, y las claves desaparecieron.

## Step 7 · What We Are Actually Building

[warm] Antes de planificar nada, mira la cosa en sí. Son dos pantallas.
[500ms]
[calm] Un panel — "Weather around the world" — con las ciudades agrupadas por país. Pulsa una y llegas a su vista de detalle: un mapa con el marcador y la lectura completa.
[500ms]
[confident] Ese es todo el producto. Sin inicio de sesión, sin base de datos, sin pagos: todo eso queda explícitamente fuera del alcance.
[500ms]
[reassuring] Y ese es el punto. Todo lo que sigue existe para entregar *estas dos pantallas* de forma segura. El documento de requisitos completo está en este paso, para descargar.

## Step 8 · Weather In, Revenue Out

[warm] Toda la historia en una línea.
[500ms]
[calm] Azure Maps informa del tiempo. La API de Contoso lo lee y decide qué significa. Todos los canales reciben esa misma respuesta. Y el día de lluvia se convierte en un día de ventas.
[500ms]
[confident] Ese es el *porqué*. Todo lo que viene a partir de aquí es el *cómo*.
