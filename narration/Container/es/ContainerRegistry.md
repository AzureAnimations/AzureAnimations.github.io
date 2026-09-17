# Guion de narración — Azure Containers · 02 · Azure Container Registry

**Source animation:** `static/v2/Container/ContainerRegistry.html`

---

<!-- Review source: https://docs.docker.com/docker-hub/repos/ -->

**TTS status:** Audio regenerated 2026-09-17 after text review.

## Step 1 · dockerhub

[confident] En el capítulo anterior creaste la primera versión de la imagen contoso-orders.
[600ms]
[curious] ¿Adónde la envía docker push? Si el nombre de la imagen no incluye el servidor de un registro, Docker utiliza Docker Hub. Necesitas permiso para subirla al repositorio de destino.
[700ms]
[calm] Docker Hub admite repositorios públicos y privados. Comprueba la visibilidad del repositorio antes de subir la imagen de tu aplicación.

## Step 2 · acr

[confident] Aquí está la solución — coloca tu imagen en un lugar privado que sea tuyo.
[600ms]
[calm] Añade al principio del nombre el servidor de tu registro: contoso punto azure ce erre punto i o. Ahora docker push sube la imagen directamente a tu Azure Container Registry.
[700ms]
[reassuring] Primero inicias sesión con az acr login, y ACR se autentica con Microsoft Entra ID — sin contraseñas compartidas dando vueltas.

## Step 3 · tasks

[confident] Ni siquiera necesitas Docker corriendo en tu máquina para compilar.
[600ms]
[impressed] Con ACR Tasks, un solo comando — az acr build — compila la imagen allá en Azure y la sube por ti.
[700ms]
[intrigued] Y mejor aún, puede recompilar automáticamente — con un commit de git, con un horario, o cuando se parchea una imagen base — así una corrección de seguridad llega a cada imagen sin que muevas un dedo.

## Step 4 · tiers

[confident] Cada registro viene en uno de tres niveles — Basic, Standard o Premium.
[600ms]
[calm] Todos hablan exactamente la misma API de registro. Subes de nivel sobre todo por más almacenamiento incluido y más rendimiento de imágenes.
[700ms]
[encouraging] Empieza en Basic para desarrollo, Standard para la mayoría de producción — y ve por Premium cuando necesites geo-replicación, Private Link o claves administradas por el cliente.

## Step 5 · features

[confident] ACR es mucho más que un estante donde aparcar imágenes.
[600ms]
[impressed] Asegura el acceso con roles y tokens de Entra, replica entre regiones, y deja que Microsoft Defender analice cada imagen enviada en busca de vulnerabilidades.
[700ms]
[intrigued] Y como es un registro OCI, también guarda charts de Helm y otros artefactos, no solo imágenes de contenedor.

## Step 6 · advanced

[confident] Cuando superas el simple push y pull, ACR tiene una caja de herramientas más profunda.
[600ms]
[impressed] La caché de artefactos es una favorita — replica imágenes de Docker Hub u otras públicas en tu propio registro para superar los límites de tasa y traerlas rápido por redes privadas.
[700ms]
[intrigued] También hay streaming de artefactos para arranques más rápidos, registros conectados para el borde, borrado temporal para recuperar errores, y firma de imágenes para verificar lo que despliegas.

## Step 7 · recap

[proud] Esa es tu cadena de suministro de imágenes — construye una vez, empuja a un registro privado en Azure, parcha en la nube, escala con niveles y asegúrala de punta a punta.
[700ms]
[optimistic] Con tus imágenes almacenadas y construidas en Azure, ya estás listo para ejecutar una. Próxima parada: Azure Container Instances — la forma más rápida de levantar un solo contenedor.
