# Guion de narración — Azure Containers · 01 · Why Docker

**Source animation:** `static/v2/Container/WhyDocker.html`

<!-- Review sources: https://learn.microsoft.com/virtualization/windowscontainers/about/containers-vs-vm ; https://docs.docker.com/get-started/docker-concepts/building-images/understanding-image-layers/ ; https://buildah.io/ -->

---

**TTS status:** Audio regenerated 2026-09-17 after text review.

## Step 1 · problem

[confident] Conozcamos a Contoso. Su equipo desarrolla una aplicación en .NET o Java, la compila y entrega el archivo resultante, de tipo JAR o DLL, al equipo de operaciones para que lo despliegue.
[600ms]
[calm] Pero ese artefacto solo lleva el código compilado. No lleva las bibliotecas del sistema operativo ni el runtime con el que se construyó.
[700ms]
[concerned] Así que en el servidor de producción se encuentra con otro sistema operativo, otro runtime… y falla.

## Step 2 · drift

[curious] ¿Por qué falla? Porque los entornos han dejado de coincidir.
[600ms]
[calm] Tu app nunca fue solo tu código. Es tu código más un runtime específico y un conjunto específico de bibliotecas.
[600ms]
[serious] Cada entorno —el portátil de desarrollo, la VM de pruebas, producción— tiene versiones ligeramente distintas. Cambia cualquiera y la misma compilación se comporta de otra forma.

## Step 3 · wrap

[confident] Aquí está la solución de Docker. Un Dockerfile es una receta que envuelve tu código y sus dependencias junto con un sistema operativo base y un runtime.
[600ms]
[calm] Después, el comando docker build reúne todo en una imagen. En este ejemplo, es la versión uno de contoso-orders.
[700ms]
[reassuring] El entorno de ejecución y las bibliotecas viajan dentro de la imagen, lo que reduce las diferencias entre entornos. El host sigue necesitando un sistema operativo, una arquitectura de procesador y un motor de contenedores compatibles.

## Step 4 · layers

[curious] Mira dentro de esa imagen y no es un bloque sólido: es una pila de capas de solo lectura.
[600ms]
[calm] La imagen base aporta las primeras capas. Las instrucciones que modifican archivos añaden capas para las dependencias y la aplicación; otras configuran cómo se ejecuta el contenedor.
[600ms]
[impressed] Las capas son inmutables y se comparten, así que las idénticas se almacenan una sola vez. Eso hace que las descargas sean rápidas y las reconstrucciones, baratas.

## Step 5 · vmvc

[confident] Ahora bien, un contenedor no es solo una máquina virtual ligera.
[600ms]
[calm] Cada máquina virtual tiene su propio sistema operativo invitado y puede ejecutar varias aplicaciones. Un contenedor con aislamiento de procesos comparte el kernel del host y empaqueta la aplicación con sus dependencias, sin un kernel invitado independiente.
[700ms]
[impressed] Compartir el kernel reduce el consumo de recursos. Los contenedores suelen arrancar más rápido y necesitar menos recursos que una máquina virtual completa, aunque el tamaño y el tiempo de inicio dependen de la aplicación.

## Step 6 · ports

[confident] Ejecuta esa imagen y obtienes un contenedor, y ese contenedor ES Contoso Orders. Dentro, la app escucha en el puerto tres mil.
[600ms]
[calm] La aplicación ya escucha dentro del contenedor, pero en este ejemplo todavía no hay un puerto publicado en el host. Al publicarlo, los clientes externos pueden llegar a la aplicación a través del host.
[600ms]
[encouraging] Con docker run y la opción de publicación, conectamos el puerto ocho mil ochenta del host con el puerto tres mil del contenedor. Docker recibe las solicitudes en el primero y las reenvía a la aplicación en el segundo.

## Step 7 · oci

[curious] Y aquí hay algo que muchos pasan por alto: Docker no es la única forma de ejecutar un contenedor.
[600ms]
[calm] La Open Container Initiative, u OCI, define especificaciones para el formato de las imágenes, la ejecución de los contenedores y su distribución.
[600ms]
[impressed] Cada herramienta cumple una función: containerd y CRI-O ejecutan contenedores, Podman los administra y Buildah crea imágenes. Los estándares abiertos permiten combinarlas, pero sigue siendo necesario comprobar la compatibilidad del host.

## Step 8 · targets

[confident] Una imagen compatible puede reutilizarse en distintos entornos, incluido Azure. Antes, hay que comprobar qué sistemas operativos y formatos de imagen admite cada servicio.
[600ms]
[calm] Aquí aparecen cuatro opciones: Azure Container Instances para ejecutar contenedores bajo demanda, Azure Container Apps para escalado automático sin administrar servidores, Azure Kubernetes Service para controlar la orquestación y App Service para aplicaciones web administradas.
[700ms]
[encouraging] Elige según la compatibilidad, el escalado y el control que necesites. Reutilizar la imagen mantiene el mismo paquete de aplicación, aunque la configuración del despliegue puede cambiar.

## Step 9 · recap

[proud] Esa es la idea: empaquetar la aplicación y sus dependencias en una imagen inmutable, organizada en capas. Puedes reutilizarla en hosts compatibles de desarrollo, pruebas y Azure, sin reconstruir el entorno a mano cada vez.
[700ms]
[optimistic] La imagen es la unidad que almacenarás, protegerás, escalarás y ejecutarás durante el resto de este recorrido.
[600ms]
[curious] Pero eso plantea una pregunta: ¿dónde viven realmente esas imágenes? Próxima parada: Azure Container Registry.
