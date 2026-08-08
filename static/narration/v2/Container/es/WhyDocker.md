# Guion de narración — Azure Containers · 01 · Why Docker

**Source animation:** `static/v2/Container/WhyDocker.html`

---

## Step 1 · problem

[confident] Te presento a Contoso. Su equipo escribe una app en .NET o Java, la compila y entrega el artefacto —un dot jar o un dot d-l-l— a Operaciones para desplegarlo.
[600ms]
[calm] Pero ese artefacto solo lleva el código compilado. No lleva las bibliotecas del sistema operativo ni el runtime con el que se construyó.
[700ms]
[concerned] Así que en el servidor de producción se encuentra con otro sistema operativo, otro runtime… y falla.

## Step 2 · drift

[curious] ¿Y por qué falla? Una sola palabra: deriva.
[600ms]
[calm] Tu app nunca fue solo tu código. Es tu código más un runtime específico y un conjunto específico de bibliotecas.
[600ms]
[serious] Cada entorno —el portátil de desarrollo, la VM de pruebas, producción— tiene versiones ligeramente distintas. Cambia cualquiera y la misma compilación se comporta de otra forma.

## Step 3 · wrap

[confident] Aquí está la solución de Docker. Un Dockerfile es una receta que envuelve tu código y sus dependencias junto con un sistema operativo base y un runtime.
[600ms]
[calm] Luego docker build sella todo eso en una sola imagen: para Contoso, es contoso-orders version one.
[700ms]
[reassuring] Ahora el runtime y las bibliotecas viajan dentro de la imagen. El host solo necesita un runtime de contenedores, y ese desajuste de sistema operativo simplemente no puede ocurrir.

## Step 4 · layers

[curious] Mira dentro de esa imagen y no es un bloque sólido: es una pila de capas de solo lectura.
[600ms]
[calm] Cada línea del Dockerfile añade una capa: la base, las dependencias y luego tu app encima.
[600ms]
[impressed] Las capas son inmutables y se comparten, así que las idénticas se almacenan una sola vez. Eso hace que las descargas sean rápidas y las reconstrucciones, baratas.

## Step 5 · vmvc

[confident] Ahora bien, un contenedor no es solo una máquina virtual ligera.
[600ms]
[calm] Una VM virtualiza el hardware y ejecuta un sistema operativo invitado completo por cada app. Un contenedor comparte el kernel del host y empaqueta solo la app y sus bibliotecas: un proceso aislado, no una máquina entera.
[700ms]
[impressed] Ese kernel compartido es todo el truco: los contenedores arrancan en segundos, pesan megabytes en lugar de gigabytes y caben muchos más en un mismo host.

## Step 6 · ports

[confident] Ejecuta esa imagen y obtienes un contenedor, y ese contenedor ES Contoso Orders. Dentro, la app escucha en el puerto tres mil.
[600ms]
[calm] Pero un puerto dentro del contenedor está aislado. Para dejar entrar las solicitudes, lo publicas al ejecutar la imagen.
[600ms]
[encouraging] Así que docker run, guion p, puerto ochenta-ochenta a tres mil: el tráfico externo llega al host por el puerto ochenta-ochenta, y Docker lo reenvía a la app en el puerto tres mil.

## Step 7 · oci

[curious] Y aquí hay algo que muchos pasan por alto: Docker no es la única forma de ejecutar un contenedor.
[600ms]
[calm] Tu imagen sigue el estándar de la Open Container Initiative —OCI—, que define tres especificaciones: image, runtime y distribution.
[600ms]
[impressed] Así que cualquier runtime compatible con OCI la ejecuta sin cambios: containerd, el motor dentro de Docker y en los nodos de AKS, además de CRI-O, Podman y Buildah. La mayoría son de código abierto, bajo la Linux Foundation y la CNCF.

## Step 8 · targets

[confident] Al ser un estándar abierto, una imagen se ejecuta en cualquier lugar, incluso por toda Azure.
[600ms]
[calm] Mismo artefacto, cuatro puertas de entrada: Azure Container Instances para un solo contenedor, Azure Container Apps para autoescalado serverless, Azure Kubernetes Service para control total y App Service para ejecutarla como una app web gestionada.
[700ms]
[encouraging] Solo eliges según cuánta orquestación quieras: la imagen nunca cambia.

## Step 9 · recap

[proud] Así que esa es toda la idea. Empaqueta tu app y sus dependencias una sola vez como una imagen inmutable y por capas, y luego ejecuta esa imagen idéntica en cualquier lugar: tu portátil, CI o Azure.
[700ms]
[optimistic] La imagen es la unidad que almacenarás, protegerás, escalarás y ejecutarás durante el resto de este recorrido.
[600ms]
[curious] Pero eso plantea una pregunta: ¿dónde viven realmente esas imágenes? Próxima parada: Azure Container Registry.
