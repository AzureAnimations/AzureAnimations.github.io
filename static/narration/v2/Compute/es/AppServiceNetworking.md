# Guion de narración — Azure PaaS Compute · 03 · App Service Networking

**Source animation:** `static/v2/Compute/AppServiceNetworking.html`

---

## Step 1 · intro

[confident] Hablemos de redes — y de la idea que hace que todo encaje.
[600ms]
[calm] De forma predeterminada, tu App Service es accesible desde la internet pública, y puede llamar a cualquier extremo de internet.
[700ms]
[serious] El tráfico tiene dos direcciones — entrada, hacia tu app, y salida, desde ella. Las funciones de entrada y de salida son herramientas distintas; mantenlas claras y todo lo demás se sigue.

## Step 2 · inbound

[confident] Primero, la entrada. Las restricciones de acceso son una lista de permitir y denegar que se coloca frente a tu app.
[600ms]
[calm] Filtran las solicitudes entrantes en el front-end, antes de tu código, usando reglas de I-P y etiquetas de servicio — evaluadas de arriba abajo.
[700ms]
[reassuring] Piénsalo como un firewall para el tráfico web entrante: permite tu oficina y tu Front Door, y niega a todos los demás.

## Step 3 · privateendpoint

[confident] ¿Quieres ir más allá y sacar tu app de la internet pública por completo? Agrega un punto de conexión privado.
[600ms]
[calm] Mediante Azure Private Link, le da a tu app una dirección privada dentro de tu propia red virtual.
[700ms]
[reassuring] Desactiva el acceso público, y la app solo será accesible desde tu red. Es solo de entrada, y ayuda a evitar que los datos salgan por donde no deben.

## Step 4 · outbound

[confident] Ahora cambia de dirección — la salida, las llamadas que hace tu app.
[600ms]
[calm] La integración con red virtual enruta ese tráfico saliente por una subred delegada, para que tu app pueda alcanzar bases de datos, almacenamiento y puntos de conexión privados dentro de tu V-Net.
[700ms]
[serious] Es la contraparte de salida de un punto de conexión privado: esto permite que tu app llame a recursos privados — no recibe tráfico.

## Step 5 · nat

[confident] Un truco más de salida. Conecta un NAT gateway a esa subred de integración.
[600ms]
[calm] Ahora todo el tráfico saliente de tu app sale por una única dirección I-P dedicada — y el agotamiento de puertos SNAT bajo carga alta simplemente desaparece.
[700ms]
[reassuring] La recompensa: los socios pueden permitir una sola dirección estable, en vez de todo un rango cambiante.

## Step 6 · recap

[proud] Así que — dos direcciones, claramente separadas. Las restricciones de acceso y los puntos de conexión privados protegen la entrada; la integración con red virtual y un NAT gateway moldean la salida.
[700ms]
[encouraging] Solo recuerda la regla de oro — las herramientas de entrada no arreglan problemas de salida, y viceversa. Ajusta la función a la dirección.
