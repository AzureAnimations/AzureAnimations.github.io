# Guion de narración - Regiones y zonas

**Source animation:** journeys/Fundamentals/RegionsAndZones.html
**Script status:** Authored voiceover.
**Language:** Español

Las indicaciones entre corchetes no se pronuncian. Las pausas van en líneas separadas. Un bloque por paso de la animación.
<!-- Sources: https://learn.microsoft.com/azure/reliability/availability-zones-overview ; https://learn.microsoft.com/azure/architecture/aws-professional/regions-zones#multi-region-deployment-and-paired-regions -->

## Step 1 · Where should the shop run?

[calm] Contoso ha organizado sus recursos, pero sus clientes necesitan una tienda ágil y los datos, una ubicación adecuada. Elegir dónde desplegar es una decisión empresarial y técnica.
[600ms]
[confident] El equipo considera quién utiliza la tienda, qué servicios necesita y qué ocurriría si esa ubicación dejara de estar disponible.

## Step 2 · Choose a region

[calm] Una región de Azure es un área geográfica con centros de datos. Contoso compara la distancia a los clientes, los requisitos legales y de datos, y la disponibilidad de los servicios elegidos.
[600ms]
[confident] La cercanía puede reducir el retraso de red, pero no basta. La ubicación también debe cumplir los demás requisitos de la tienda.

## Step 3 · Look inside the region

[calm] Detrás de un servicio en la nube hay edificios reales llenos de equipos. Los centros de datos albergan servidores que procesan trabajo, almacenamiento que conserva datos y redes que los conectan.
[600ms]
[confident] Los edificios mostrados son ilustrativos, no una cantidad fija para cada región. La nube sigue dependiendo de infraestructura física.

## Step 4 · Separate the infrastructure

[calm] Las zonas de disponibilidad separan conjuntos de centros de datos dentro de una región, con alimentación, refrigeración y redes independientes. Así, un problema en una zona tiene menos probabilidades de afectar a las demás.
[600ms]
[confident] Contoso comprueba qué regiones y servicios admiten zonas. Las opciones dependen del servicio y de la configuración del despliegue.

## Step 5 · One location is not redundancy

[calm] Colocar una instancia de la aplicación en una zona sigue dejando a Contoso con una sola instancia. Seleccionar la zona no crea otra copia de la tienda ni de sus datos.
[600ms]
[confident] Para tolerar un fallo allí, necesita capacidad preparada en otro lugar y un diseño que mantenga utilizables la aplicación y sus datos.

## Step 6 · What if a zone fails?

[calm] Compara el estado normal con un fallo de zona y, después, con su detección y el cambio de ruta. Una segunda instancia preparada ofrece otro destino, pero el enrutamiento debe reconocer el fallo.
[600ms]
[confident] La disponibilidad depende del conjunto, incluidos los datos. Otra ubicación por sí sola no garantiza completar una compra.

## Step 7 · The regional boundary matters

[calm] Varias zonas pueden ayudar ante un fallo dentro de una región. Pero si toda la región queda indisponible, esas zonas siguen dentro del mismo límite regional.
[600ms]
[confident] Protegerse de ese fallo mayor requiere un diseño de recuperación entre regiones: desplegar la aplicación, replicar los datos y probar cómo cambiar al entorno alternativo.

## Step 8 · Check the geography before committing

[calm] Contoso revisa los requisitos geográficos y legales antes de elegir una ubicación de recuperación. Un par de regiones no copia automáticamente su aplicación, y no todas las regiones tienen pareja.
[600ms]
[confident] Los entornos soberanos también tienen requisitos de elegibilidad y servicios propios. La decisión depende de la carga de trabajo, no solo del mapa.

## Step 9 · Regions and Zones - All in One

[calm] Empieza por el fallo que necesitas soportar: un problema local de infraestructura, una zona o una región completa. Después prepara la aplicación, sus datos y las rutas para ese alcance.
[600ms]
[confident] Contoso ya tiene una estrategia de ubicación. Ahora elegirá los servicios de proceso que ejecutarán el trabajo de la tienda.