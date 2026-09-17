# Guion de narración - Administrar y desplegar

**Source animation:** journeys/Fundamentals/ManageAndDeploy.html
**Script status:** Authored voiceover.
**Language:** Español

Las indicaciones entre corchetes no se pronuncian. Las pausas van en líneas separadas. Un bloque por paso de la animación.
<!-- Sources: https://learn.microsoft.com/azure/azure-resource-manager/management/overview ; https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview ; https://learn.microsoft.com/azure/azure-arc/overview -->

## Step 1 · Built by hand, twice

[calm] Contoso creó pruebas y producción por separado, a mano. Sus ajustes ya difieren, así que superar una prueba no explica exactamente qué ocurrirá en producción.
[600ms]
[confident] El equipo necesita una definición repetible de lo que despliega, con diferencias intencionadas registradas en lugar de diferencias accidentales ocultas.

## Step 2 · Start in the portal

[calm] Maya abre Azure Portal para inspeccionar los recursos y ajustes de la tienda. La interfaz del navegador le ayuda a comprender qué existe y cómo está configurado.
[600ms]
[confident] El portal resulta útil para explorar y hacer tareas individuales. Repetir una secuencia larga de acciones manuales dificulta mantener la coherencia.

## Step 3 · Repeat it with commands

[calm] La interfaz de línea de comandos de Azure y Azure PowerShell permiten administrar recursos con comandos que Contoso guarda y vuelve a ejecutar. Cloud Shell ofrece un entorno para utilizarlos desde el navegador.
[600ms]
[confident] Guardar comandos hace repetible el trabajo, pero el equipo revisa su orden, entradas, permisos y efectos.

## Step 4 · Describe it as code

[calm] La infraestructura como código describe los recursos deseados sin depender de recordar clics. Bicep o una plantilla de Azure Resource Manager proporciona una definición que Contoso puede revisar y versionar.
[600ms]
[confident] Esa definición describe infraestructura. Por sí sola no copia datos empresariales ni entrega todas las partes del código de la aplicación.

## Step 5 · Same definition, intentional differences

[calm] Contoso reutiliza una definición revisada para pruebas y producción. Los parámetros aportan diferencias deliberadas, como nombres, etiquetas y capacidad, sin ocultar la estructura.
[600ms]
[confident] Los entornos no tienen que ser del mismo tamaño. Sus diferencias deben ser explícitas para que el equipo pueda explicarlas y reproducirlas.

## Step 6 · Everything goes through Resource Manager

[calm] Las acciones del portal, los comandos y los despliegues de plantillas envían solicitudes de administración a Azure Resource Manager. Se comprueban permisos y directivas aplicables antes de que los proveedores creen o actualicen recursos.
[600ms]
[confident] Esta es la ruta de administración. La compra de un cliente utiliza la aplicación y sus servicios, no esta ruta de despliegue.

## Step 7 · Reach beyond Azure

[calm] El servidor del almacén no se ha trasladado a Azure. Azure Arc incorpora servidores compatibles que funcionan fuera de Azure a su experiencia de administración, para gestionar un entorno híbrido.
[600ms]
[confident] Conectar el servidor con Arc no lo reubica. Sigue ejecutándose en el almacén, con sus responsabilidades operativas existentes.

## Step 8 · Manage and Deploy - All in One

[calm] Utiliza el portal para explorar, comandos para repetir operaciones y definiciones de infraestructura revisadas para desplegar con coherencia. Arc amplía la administración a recursos compatibles fuera de Azure.
[600ms]
[confident] Contoso ya puede explicar cómo se construyó la tienda. La última pregunta es cómo saber si funciona bien para sus clientes.