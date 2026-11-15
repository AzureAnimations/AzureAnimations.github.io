# Firewall & WAF — narración (es)

## Step 1 · Two firewalls, two different jobs

[calm] Azure tiene un servicio llamado Firewall y otro llamado Web Application Firewall.
[400ms]
[curious] Los nombres dan a entender que tienes que elegir entre ellos. No es así: cada uno lee cosas completamente distintas de un paquete.
[500ms]
[confident] La forma más limpia de distinguirlos: uno pregunta "¿debería esta máquina estar hablando con ese sitio, para empezar?". El otro pregunta "¿está esta petición HTTP intentando atacar mi aplicación?".

## Step 2 · Web Application Firewall

[confident] Una directiva de WAF inspecciona la propia petición HTTP: el URI, las cabeceras, las cookies, el cuerpo.
[500ms]
[calm] Y compara todo eso con conjuntos de reglas derivados del proyecto OWASP.
[400ms]
[helpful] Además, no es un servicio independiente. Una directiva de WAF se asocia a Application Gateway para una aplicación regional, o a Front Door para frenar los ataques en el borde, antes de que lleguen siquiera a tu región.

## Step 3 · Detection logs. Prevention blocks.

[calm] Toda directiva de WAF funciona en uno de dos modos, y la diferencia no es sutil.
[500ms]
[confident] Detección escribe una línea de registro y deja pasar la petición. Prevención la detiene con un cuatrocientos tres.
[400ms]
[concerned] La trampa es publicar y olvidarse. El modo de detección no ofrece ninguna protección. Existe para que encuentres falsos positivos antes de que se conviertan en caídas, no para dejarlo puesto de forma permanente.

## Step 4 · Azure Firewall

[confident] Azure Firewall es un firewall de red administrado y con estado para todo tu conjunto de redes virtuales.
[500ms]
[calm] Se sitúa en el hub, y el tráfico se enruta a través de él: de entrada desde internet, de salida hacia internet y entre radios.
[400ms]
[helpful] La palabra con la que quedarte es dirección. Un WAF mira las peticiones que entran a una aplicación. Azure Firewall gobierna el tráfico norte-sur y este-oeste, incluido el que originan tus propias máquinas virtuales.

## Step 5 · Nothing reaches the firewall by accident

[curious] Aquí está la parte que se le escapa a mucha gente. Desplegar el firewall no enruta nada hacia él.
[500ms]
[calm] Azure da a cada subred rutas del sistema que no puedes eliminar y que, si no haces nada, envían el tráfico con destino a internet directamente hacia fuera. Una tabla de rutas es la forma de anular eso y apuntar el tráfico al firewall.
[400ms]
[helpful] Cuando dos rutas coinciden, Azure toma primero el prefijo más largo y después compara el origen: la definida por el usuario gana a BGP, y BGP gana a la del sistema. Ese orden explica la sorpresa clásica: una ruta predeterminada no captura el tráfico entre subredes, porque la ruta del sistema de la VNet es más específica.

## Step 6 · Three rule collections, one order

[confident] Las reglas de Azure Firewall son de tres tipos, y siempre se evalúan en la misma secuencia.
[500ms]
[calm] Primero DNAT, después las reglas de red y por último las reglas de aplicación. Conocer ese orden explica casi todos los resultados sorprendentes.
[400ms]
[concerned] Como las reglas de red se evalúan antes que las de aplicación, un permiso de red demasiado amplio puede saltarse en silencio el filtrado por FQDN que escribiste con tanto cuidado: el paquete ya está permitido antes de que se consulten las reglas de aplicación.

## Step 7 · The distinction, in one table

[calm] Microsoft explica la diferencia de forma directa.
[500ms]
[confident] Lee una fila y resulta evidente a qué servicio pertenece.
[400ms]
[helpful] La última fila es la que zanja las discusiones: bloquean ataques distintos. Ninguno de los dos habría detenido lo que detiene el otro.

## Step 8 · In a hub, they sit in series

[calm] En un diseño de hub real no son alternativas en absoluto: van en serie.
[500ms]
[confident] Una petición que llega de internet se traduce y se filtra primero a nivel de red, después pasa al gateway, donde el WAF lee el propio HTTP, y solo entonces alcanza la carga de trabajo.
[400ms]
[helpful] Cada salto elimina algo que el siguiente no puede ver. Cuando la petición llega a tu aplicación, ya se ha respondido tanto a "quién puede hablar" como a "qué intenta hacer esta petición".

## Step 9 · The mistakes that cost you

[concerned] Los dos servicios fallan en silencio, no a gritos.
[500ms]
[calm] No salta ningún error. Simplemente no estás protegido como dabas por supuesto.
[400ms]
[confident] El fallo más común es también el más invisible. Si tu origen sigue aceptando tráfico desde cualquier sitio, un atacante puede saltarse Front Door por completo, llegar directamente a la IP del origen, y todas las reglas de WAF que escribiste quedan esquivadas.

## Step 10 · One reads requests, one reads traffic

[confident] Así que la conclusión, en una sola frase.
[400ms]
[calm] Uno lee peticiones. El otro lee tráfico. Eso resuelve casi cualquier duda sobre qué servicio necesitas, y la respuesta honesta suele ser los dos, en serie.
[600ms]
[encouraging] Si hoy solo puedes hacer una cosa: pon un WAF en modo de prevención delante de todo lo que sea público, y bloquea el origen para que nadie pueda rodearlo.
