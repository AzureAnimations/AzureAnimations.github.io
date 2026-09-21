# Guion del narrador — Azure Integration & Messaging · Recorrido del hub

**Source animation:** `journeys/Integration/index.html`

**Script status:** Authored voiceover.

---

## Step 1 · Welcome

[calm] Integración significa hacer que programas separados colaboren. Un productor envía trabajo; un consumidor lo procesa; un intermediario lo transporta. Sigue a Contoso en cinco episodios: almacenar tareas, coordinar pedidos, registrar mediciones, reaccionar a cambios y conectar controladores con Functions. Las cifras del ejemplo son ilustrativas, no promesas de rendimiento.

## Step 2 · The Black Friday Bottleneck

[calm] Episodio uno. El cuello de botella del Black Friday.
[400ms]
[serious] Cada clic en Comprar ahora espera a la base de datos de inventario, y esa espera es lo que tumba el sitio. Pondrás una cola de Storage en medio, para que el comprador reciba su recibo mientras el trabajo ocurre por detrás.

## Step 3 · The VIP Transaction Disaster

[calm] Episodio dos: un pedido y su cancelación se procesan en orden inverso. Las sesiones de Service Bus coordinan mensajes relacionados. Peek-lock separa recibir de completar y la cola de mensajes fallidos aísla errores. El orden no evita todos los efectos duplicados: el trabajador sigue necesitando idempotencia.

## Step 4 · The Sensor Tsunami

[calm] Episodio tres. El tsunami de sensores.
[400ms]
[curious] Llegan cien mil lecturas de sensores por segundo, y hasta Service Bus es la herramienta equivocada. Event Hubs deja de entregar y empieza a registrar, para que cada equipo pueda leer el mismo flujo a su propio ritmo.

## Step 5 · The Reactive Smart Store

[calm] Episodio cuatro. La tienda inteligente reactiva.
[400ms]
[optimistic] Tres servicios se pasan el día preguntando a una cuenta de almacenamiento si ya ha llegado un archivo. Event Grid deja que el evento se anuncie solo, para que el controlador adecuado despierte en cuanto algo cambia.

## Step 6 · The Serverless Glue

[calm] Episodio cinco. El pegamento sin servidor.
[400ms]
[confident] Cuatro agentes siguen necesitando código entre ellos. Azure Functions aporta el desencadenador, los enlaces y el escalado, para que tú escribas la decisión y nada más.

## Step 7 · Keep Going on Microsoft Learn

[reflective] Cada cifra y cada límite de este recorrido provienen de la propia documentación de Microsoft.
[500ms]
[encouraging] Cuando quieras crear estas canalizaciones de verdad, las rutas de aprendizaje de abajo te guían por los mismos servicios con ejercicios prácticos. Elige un episodio y empecemos.
