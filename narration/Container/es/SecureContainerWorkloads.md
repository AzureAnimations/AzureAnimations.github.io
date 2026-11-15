# Narrator Script — Containers · Secure containers: Defender for Containers, AKS, Container Registry, Instances and Container Apps — Azure Containers

**Source animation:** [SecureContainerWorkloads.html](../../../journeys/Container/SecureContainerWorkloads.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/defender-for-cloud/defender-for-containers-introduction>
- <https://learn.microsoft.com/azure/defender-for-cloud/alerts-containers>
- <https://learn.microsoft.com/azure/container-registry/container-registry-authentication>
- <https://learn.microsoft.com/azure/container-registry/overview-sign-verify-artifacts>

---

## Step 1 · Build, store, run: three places to attack

[calm] Contoso envía un contenedor orders-api. Pasa del pipeline al registro y de ahí a un pod en ejecución.
[600ms]
[serious] Un atacante puede golpear en cualquier etapa. Las imágenes se pueden alterar o cambiar mientras están almacenadas, y los contenedores se pueden aprovechar una vez que se ejecutan.
[600ms]
[determined] Por eso cada parte de esta lección protege una etapa. Si proteges todas, la cadena no tiene ningún eslabón débil.

## Step 2 · Defender for Containers watches all three

[confident] Un solo plan de Defender for Cloud cubre las imágenes del registro, la configuración del clúster y los contenedores en ejecución.
[600ms]
[calm] Es decir: postura de seguridad, evaluación de vulnerabilidades, protección contra amenazas en tiempo de ejecución, protección de la cadena de suministro y monitoreo de despliegues, todo en un solo lugar.
[600ms]
[serious] Algo que debes recordar: las alertas solo se generan por la actividad posterior a la activación del plan. Así que actívalo pronto.

## Step 3 · Registry: who gets in and what’s inside

[calm] Empieza por el registro. Controla quién puede hacer push y pull, mantenlo fuera de internet público y analiza lo que contiene.
[600ms]
[confident] En la mayoría de los escenarios, usa el inicio de sesión con Microsoft Entra ID. Los tokens con ámbito son la alternativa, pero no usan asignaciones de roles de Entra.
[600ms]
[curious] Para mantener el registro privado, agrega un endpoint privado. Eso requiere el nivel Premium.

## Step 4 · Image trust: sign it, scan it, then run it

[curious] ¿Cómo sabes que una imagen es la que tú construiste? Fírmala cuando la construyas.
[600ms]
[calm] Notation, del proyecto Notary, firma la imagen, y la firma se guarda en el registro. La clave puede estar en Key Vault.
[600ms]
[confident] Después verifica la firma antes de que arranque un pod. AKS Image Integrity, todavía en versión preliminar, usa Azure Policy para permitir solo imágenes firmadas, y puedes condicionar los despliegues a los resultados del análisis.

## Step 5 · AKS identity: people and pods

[calm] En el clúster hay dos tipos de identidad que considerar: las personas y los pods.
[600ms]
[confident] Las personas inician sesión con Microsoft Entra ID y obtienen roles de Kubernetes mediante Kubernetes RBAC. Azure RBAC para Kubernetes es la alternativa.
[600ms]
[reassuring] Los pods llegan a Azure con una identidad de carga de trabajo, que federa con Entra el token de la cuenta de servicio del pod. No hace falta guardar ninguna contraseña.

## Step 6 · AKS network: shrink who can connect

[calm] Ahora reduce las vías de entrada. Mantén el servidor de API fuera de internet abierto.
[600ms]
[confident] Un clúster privado le da al servidor de API una dirección privada. En cambio, los rangos de IP autorizados limitan un servidor de API público, pero no se pueden usar con clústeres privados.
[600ms]
[serious] Dentro del clúster, de forma predeterminada cualquier pod puede hablar con cualquier otro. Una política de red cambia eso.

## Step 7 · AKS configuration: guardrails before pods run

[curious] Las comprobaciones de admisión revisan cada solicitud al servidor de API. Así, un pod riesgoso se detiene antes de arrancar.
[600ms]
[calm] El complemento Azure Policy para AKS aplica definiciones integradas, como la línea base de seguridad de pods. Cambia el efecto de auditoría a denegación para bloquear.
[600ms]
[confident] Pod Security Admission también viene activado de forma predeterminada en AKS, y usa etiquetas en el espacio de nombres.

## Step 8 · Container Instances: identity, network, secrets

[calm] Un grupo de contenedores en Container Instances puede usar una identidad administrada, unirse a tu red virtual y ocultar sus contraseñas.
[600ms]
[serious] Agregar o cambiar una identidad en un grupo en ejecución lo reinicia. En una red virtual, el grupo necesita su propia subred y una NAT gateway para el tráfico de salida.
[600ms]
[reassuring] Guarda las contraseñas como valores seguros, que en las propiedades solo muestran su nombre.

## Step 9 · Container Apps: identity, ingress and secrets

[confident] Con Container Apps, expón solo lo que tenga que ser público. Un ingress interno solo es accesible desde dentro del entorno.
[600ms]
[calm] Haz que tus aplicaciones usen una identidad administrada, para que no tengan que llevar credenciales.
[600ms]
[serious] En producción, guarda los valores secretos en referencias de Key Vault. Y ojo: algunos roles usan acciones con comodines que incluyen listar secretos.

## Step 10 · Runtime threat: an alert, start to finish

[serious] Ahora sigue un ataque a un contenedor en ejecución, desde el primer proceso sospechoso hasta la respuesta.
[600ms]
[curious] Defender for Containers usa su sensor y los registros de auditoría de Kubernetes. Puede detectar minería de criptomonedas, web shells, deriva de binarios y actividad DNS sospechosa.
[600ms]
[confident] Las alertas se asocian al marco MITRE de ataques, aparecen en Defender for Cloud y se pueden investigar en Microsoft Defender XDR.

## Step 11 · Which control for which layer?

[excited] Hora de practicar. Elige un control y luego la capa que protege.
[600ms]
[calm] Hay ocho controles y cuatro capas: registro e imagen, AKS, Container Instances y Container Apps, y tiempo de ejecución.
[600ms]
[encouraging] Si uno cae en el lugar equivocado, vuelve a intentarlo. Lo que se te queda es el razonamiento.

## Step 12 · Recap: protect the image, the cluster, the runtime

[calm] Asegura lo que entregas, cómo se configura el clúster y qué se ejecuta. Defender vigila las tres cosas.
[600ms]
[confident] Estas son habilidades que se miden en S C 500, en la parte de proteger el cómputo con contenedores. Practica con el clasificador y luego lee la guía de estudio oficial.
[600ms]
[proud] Protege la imagen, el clúster y el tiempo de ejecución, y atacar el orders-api de Contoso será mucho más difícil.
