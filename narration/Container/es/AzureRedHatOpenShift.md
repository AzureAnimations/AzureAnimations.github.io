# Guion de narración — Azure Containers · 06 · Azure Red Hat OpenShift

**Source animation:** `journeys/Container/AzureRedHatOpenShift.html`

---

## Step 1 · stack

[confident] Azure Red Hat OpenShift parte del mismo Kubernetes que viste en AKS.
[600ms]
[calm] Y le añade toda la plataforma alrededor: consola web, registro de imágenes, enrutamiento, compilaciones, canalizaciones, Operators, supervisión y registros, en un solo producto.
[600ms]
[reassuring] Microsoft y Red Hat lo diseñan, lo operan y lo soportan juntos, con una sola experiencia de soporte.
[700ms]
[confident] Se ejecuta en tu suscripción, aparece en tu factura de Azure y tiene un SLA de disponibilidad del noventa y nueve coma noventa y cinco por ciento.

## Step 2 · resp

[confident] Entonces, ¿quién hace qué? Ingenieros de confiabilidad de Microsoft y Red Hat operan todo el clúster.
[600ms]
[calm] Parchean y escalan el plano de control, mantienen al día el sistema operativo de los nodos de trabajo y vigilan las alertas y los registros de auditoría.
[600ms]
[calm] Algunas cosas son compartidas: el SRE publica cada versión probada y tú inicias la actualización; tú añades nodos; y la red virtual la conectas tú.
[700ms]
[reassuring] Tus aplicaciones, tus datos y tus servicios de desarrollo siguen siendo tuyos, y el SRE solo llega al clúster por un punto de conexión privado.

## Step 3 · arch

[confident] A diferencia de AKS, aquí no hay nada oculto. Todo se ejecuta en tu propia red virtual.
[600ms]
[calm] Tres nodos del plano de control ejecutan el servidor de API y etcd en su propia subred, y al menos tres nodos de trabajo ejecutan tus Pods en otra.
[600ms]
[calm] Los nodos de infraestructura opcionales alojan el router, el registro y la supervisión, y los equilibradores de carga de Azure llevan las llamadas a la API y el tráfico.
[700ms]
[intrigued] Selecciona cualquier parte del clúster para ver qué hace y con qué tener cuidado.

## Step 4 · hcp

[confident] ARO tiene dos arquitecturas, y ambas ofrecen la misma experiencia de OpenShift.
[600ms]
[calm] La estándar lo deja todo en tu suscripción, con al menos tres nodos del plano de control y tres de trabajo, y se crea en unos cuarenta y cinco minutos.
[600ms]
[intrigued] Los planos de control hospedados, en versión preliminar, llevan el plano de control a una cuenta de Azure de Red Hat.
[700ms]
[confident] Empiezas con solo dos nodos de trabajo, el clúster está listo en unos quince a veinte minutos y actualizas los grupos de nodos por separado.

## Step 5 · projects

[confident] Ahora traigamos a los equipos. Los desarrolladores inician sesión con Microsoft Entra ID, con su cuenta profesional y MFA.
[600ms]
[calm] El servidor OAuth integrado de OpenShift acepta ese token de OpenID Connect y concede el acceso.
[600ms]
[calm] Los equipos trabajan dentro de proyectos: espacios de nombres de Kubernetes que pueden crear ellos mismos, con cuotas y directivas de red.
[700ms]
[reassuring] Asigna admin, edit o view por proyecto, y cada equipo tiene exactamente el acceso que necesita.

## Step 6 · s2i

[confident] Aquí es donde OpenShift brilla para los desarrolladores: de Git a una aplicación en marcha, sin Dockerfile.
[600ms]
[calm] Un webhook inicia una compilación Source-to-Image, que combina una imagen de compilación del lenguaje con tu código.
[600ms]
[calm] La imagen llega al registro integrado, seguida por un ImageStream, y esa imagen nueva lanza una actualización gradual de tus Pods.
[700ms]
[impressed] Por último, una Route la publica en una URL HTTPS. Selecciona cualquier etapa para ver cómo funciona.

## Step 7 · routes

[confident] Una Route publica un Service. El tráfico entra por un equilibrador de carga de Azure y llega al router de OpenShift en los nodos de infraestructura.
[600ms]
[calm] Con la terminación edge, el router tiene el certificado y envía HTTP sin cifrar a tus Pods. Es la opción más común.
[600ms]
[calm] Con passthrough, el router nunca descifra: tu aplicación mantiene TLS de extremo a extremo.
[700ms]
[reassuring] Y con re-encrypt, el tráfico va cifrado en ambos saltos, a cambio de gestionar dos certificados.

## Step 8 · operators

[confident] Los Operators son software que opera software.
[600ms]
[calm] Declaras el estado que quieres en un recurso personalizado. El Operator lo lee, crea y repara la aplicación e informa del estado, una y otra vez, en un bucle de reconciliación.
[600ms]
[calm] El propio OpenShift funciona con Operators del clúster, que el SRE mantiene administrados.
[700ms]
[impressed] Y desde OperatorHub puedes añadir Pipelines, GitOps, Serverless, Service Mesh, Virtualization y Operators de socios en unos pocos clics.

## Step 9 · security

[confident] OpenShift es seguro por defecto. Cada Pod pasa por las restricciones de contexto de seguridad antes de ejecutarse.
[600ms]
[calm] Un Pod que pide ejecutarse como root es rechazado por la restricción predeterminada, restricted-v2.
[600ms]
[reassuring] Un Pod que no fija usuario es admitido y se ejecuta con un identificador de usuario aleatorio, no root, del rango del proyecto.
[700ms]
[confident] Súmale inicio de sesión con Entra ID, API y entrada privadas, salida bloqueada, directivas de red, nodos RHCOS inmutables e identidades administradas.

## Step 10 · day2

[confident] En el día dos, las actualizaciones llegan cuando tú decides.
[600ms]
[calm] Red Hat y Microsoft publican una versión probada, tú eliges el momento y OpenShift actualiza el plano de control y luego drena y actualiza los nodos uno a uno, para que las aplicaciones sigan atendiendo.
[600ms]
[calm] Prometheus y Alertmanager vienen preinstalados, y los registros de plataforma y auditoría llegan al SRE automáticamente.
[700ms]
[reassuring] Conéctalo con Azure Arc para usar Azure Monitor, y envía los registros de tus aplicaciones a Log Analytics.

## Step 11 · vsaks

[confident] Entonces, ¿AKS o ARO? Es el mismo Kubernetes, con otro modelo.
[600ms]
[calm] AKS es ligero: Azure ejecuta un plano de control oculto y tú eliges cada complemento, incluidos grupos de nodos Windows si los necesitas.
[600ms]
[calm] ARO es la plataforma OpenShift completa, con el SRE de Microsoft y Red Hat operando todo el clúster.
[700ms]
[reassuring] Elígelo si ya conoces OpenShift o lo quieres todo integrado, y prevé una huella mayor y una tarifa de OpenShift por nodo de trabajo.

## Step 12 · recap

[confident] Eso es Azure Red Hat OpenShift, de principio a fin.
[600ms]
[calm] Se opera en conjunto, se ejecuta en tu suscripción y da a los desarrolladores una plataforma completa: compilaciones, registro, Routes y Operators.
[600ms]
[reassuring] Es seguro por defecto y, en el día dos, tú decides cuándo actualizar, con la supervisión integrada.
[700ms]
[impressed] Has completado el recorrido de contenedores. Profundiza en Microsoft Learn.
