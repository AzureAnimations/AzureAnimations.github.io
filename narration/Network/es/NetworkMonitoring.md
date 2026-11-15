# Network monitoring — narración (es)

## Step 1 · "It cannot connect"

[calm] Una VM no consigue llegar a una base de datos.
[400ms]
[curious] No hay ningún error, nada está caído de forma evidente, y hay cuatro cosas distintas que podrían estar bloqueándolo. Adivinar sale caro.
[500ms]
[confident] Así que reparte las herramientas según la pregunta que estás haciendo en realidad. Network Watcher responde a "¿por qué falla esta conexión, ahora mismo?". Azure Monitor responde a "¿qué ha estado haciendo mi red?".

## Step 2 · Network Watcher

[confident] Network Watcher es un servicio de plataforma regional que inspecciona tu red en vivo.
[500ms]
[calm] Se habilita automáticamente en cada región donde creas una red virtual: no hay nada que desplegar antes de poder usarlo.
[400ms]
[helpful] Su verdadero valor es que lee la configuración efectiva real, no lo que tú crees que desplegaste. En esa distancia entre la intención y la realidad es donde viven casi todas las incidencias de red.

## Step 3 · Three tools, in this order

[calm] Microsoft recomienda aquí una secuencia concreta, y merece la pena seguirla.
[500ms]
[confident] Cada paso es más barato que el siguiente, y la mayoría de los problemas se resuelven antes de llegar al final.
[400ms]
[helpful] Empieza por IP flow verify, porque no se limita a decir permitido o denegado: te nombra la regla responsable. Esa única respuesta termina casi todas las investigaciones antes de que empiecen.

## Step 4 · Virtual network flow logs

[confident] Los flow logs escriben una línea de metadatos por cada flujo: origen, destino, puerto, protocolo y si se permitió o se denegó.
[500ms]
[calm] Ese registro es lo que te permite responder preguntas sobre el martes pasado.
[400ms]
[concerned] Usa VNet flow logs, no NSG flow logs. Los NSG flow logs se están retirando: no se puede crear ninguno después del treinta de junio de dos mil veinticinco, y los existentes deben migrarse antes del treinta de septiembre de dos mil veintisiete.

## Step 5 · Traffic Analytics

[calm] Los flow logs, por sí solos, son millones de filas.
[500ms]
[confident] Traffic Analytics los agrega en algo que de verdad puedes leer: quién habla más, qué puertos están abiertos, el tráfico entre regiones y dónde se están denegando flujos.
[400ms]
[helpful] Necesita un área de trabajo de Log Analytics. Es la misma área de trabajo que usa Azure Monitor, y ahí es donde los datos de red se unen al resto de tu telemetría y pasan a poder consultarse con KQL.

## Step 6 · Connection Monitor

[calm] Todo lo anterior es o bien a posteriori, o bien bajo demanda.
[500ms]
[confident] Connection Monitor sondea una ruta de forma programada, así que te enteras de que se ha roto sin que nadie tenga que darse cuenta.
[400ms]
[helpful] Esto es lo que convierte "alguien lo ha reportado" en "nos ha saltado una alerta". Es la herramienta adecuada para cualquier ruta con un SLA detrás: un enlace híbrido, o una dependencia que no es tuya.

## Step 7 · Azure Monitor Network Insights

[confident] Network Insights es la vista de Azure Monitor que reúne todo esto en un solo sitio.
[500ms]
[calm] Una topología en vivo, salud y métricas de cada recurso de red, y enlaces directos a las herramientas de diagnóstico.
[400ms]
[helpful] La topología, la salud y las métricas aparecen sin ninguna configuración. Las pestañas de conectividad y tráfico siguen vacías hasta que activas Connection Monitor y los flow logs, así que un panel vacío suele significar "no está habilitado", no "no hay nada que contar".

## Step 8 · Which one answers your question

[calm] Estas dos se solapan en el portal, que es justo por lo que se confunden.
[500ms]
[confident] La forma limpia de separarlas es por la pregunta con la que llegaste.
[400ms]
[helpful] Y no son productos que compitan. Network Watcher produce buena parte de lo que Azure Monitor muestra: los flow logs y Connection Monitor son funciones de Network Watcher cuyos datos aterrizan en un área de trabajo de Log Analytics.

## Step 9 · Diagnose now, or watch always

[confident] Así que, la idea con la que quedarte.
[400ms]
[calm] Un conjunto de herramientas te dice por qué algo está roto en este minuto. El otro te dice qué ha estado pasando, y te avisa la próxima vez. Quieres los dos, pero los enciendes en momentos distintos.
[600ms]
[encouraging] Y lo único que conviene hacer antes de necesitarlo: activa ya los VNet flow logs y Traffic Analytics. Todas las demás herramientas de aquí funcionan bajo demanda. Estas dos solo saben del tráfico que ocurrió después de que las habilitaras.
