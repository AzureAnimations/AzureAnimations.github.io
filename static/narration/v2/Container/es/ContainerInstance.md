# Guion de narración — Azure Containers · 03 · Azure Container Instances

**Source animation:** `static/v2/Container/ContainerInstance.html`

---

## Step 1 · what

[confident] Supón que solo quieres ejecutar un contenedor — sin clúster, sin máquina virtual, sin nada que vigilar.
[600ms]
[calm] Eso es Azure Container Instances. Le entregas una imagen — por ejemplo, contoso-orders versión uno — y ejecuta un solo contenedor en segundos.
[700ms]
[impressed] Es cómputo sin servidor de un solo contenedor, aislado por hipervisor y facturado por segundo — solo mientras se está ejecutando.

## Step 2 · config

[confident] Lo que despliegas no es solo una imagen — es un container group, y esa es la unidad con la que trabaja ACI.
[600ms]
[calm] Le das la imagen más su configuración de ejecución: CPU y memoria, variables de entorno, los puertos a exponer y una política de reinicio.
[700ms]
[reassuring] Esa política de reinicio decide qué pasa cuando el proceso termina — Always lo mantiene en ejecución, OnFailure reintenta ante un error y Never lo ejecuta una sola vez, perfecto para una tarea por lotes.

## Step 3 · pull

[confident] Nuestra imagen, contoso-orders versión uno, vive en un registro privado — contoso punto azure-c-r punto io.
[600ms]
[calm] Así que ACI la extrae de Azure Container Registry. Dale a la instancia una managed identity, concédele el rol AcrPull, y la extracción simplemente funciona.
[700ms]
[reassuring] Lo mejor — ninguna contraseña de registro almacenada en ningún sitio. Es una identidad, no un secreto.

## Step 4 · run

[confident] Ahora, para arrancarlo de verdad — un solo comando hace todo: az container create.
[600ms]
[calm] ¿Prefieres hacer clic? El Azure Portal tiene un flujo de Revisar y crear, o puedes desplegar la misma configuración como YAML, Bicep o una plantilla ARM.
[700ms]
[serious] Solo recuerda que el DNS name label debe ser único a nivel global en su región — eso es lo que hace que tu contenedor sea accesible por nombre.

## Step 5 · reach

[confident] Expón un puerto y ACI le asigna al grupo una IP pública de inmediato.
[600ms]
[calm] Añade ese DNS name label y obtienes un nombre amigable y totalmente calificado — contoso-orders punto east-us punto azure-container punto io, respondiendo en el puerto ochenta-ochenta.
[700ms]
[concerned] Una advertencia: la IP pública puede cambiar cuando el grupo se reinicia. Para una dirección estable, coloca Application Gateway delante.

## Step 6 · limit

[serious] Aquí está el detalle. ACI ejecuta un conjunto fijo de contenedores — no hay autoescalado, ni balanceador de carga, ni división de tráfico.
[700ms]
[calm] Es perfecto para un trabajo único, de corta duración o fijo. Pero para tráfico web elástico, se te quedará corto.
[600ms]
[encouraging] Cuando eso pase, sube de nivel: Azure Container Apps para contenedores con autoescalado, App Service para una app web administrada, o AKS para orquestación completa.

## Step 7 · recap

[proud] Así que eso es Azure Container Instances de principio a fin — le entregas una imagen y un contenedor está activo en segundos, configurado, extraído de ACR y accesible por DNS.
[700ms]
[optimistic] Es la forma más rápida de poner un contenedor en marcha en Azure. Y en el momento en que necesites escalar, nuestra próxima parada toma el relevo — Azure Container Apps, contenedores sin servidor con autoescalado incorporado.
