# Guion de narración - Administrar y desplegar

**Source animation:** journeys/Fundamentals/ManageAndDeploy.html
**Script status:** Authored voiceover.
**Language:** Español

Las indicaciones entre corchetes no se pronuncian. Las pausas van en líneas separadas. Un bloque por paso de la animación.
<!-- Sources: https://learn.microsoft.com/azure/azure-resource-manager/management/overview ; https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview ; https://learn.microsoft.com/azure/cloud-shell/overview ; https://learn.microsoft.com/powershell/module/az.resources/get-azresourcegroup ; https://learn.microsoft.com/azure/azure-arc/servers/overview -->

## Step 1 · Built by hand, twice

[calm] Contoso tiene una máquina virtual en pruebas y dos en producción. La capacidad adicional estaba prevista, pero la etiqueta Environment ausente en producción fue un error de la configuración manual.
[600ms]
[confident] Una definición de infraestructura revisada registra el diseño. Los parámetros explicitan las diferencias aprobadas y permiten distinguir las decisiones intencionadas de la desviación de configuración.

## Step 2 · Start in the portal

[calm] Maya usa Azure Portal, una interfaz gráfica en el navegador, para consultar la VM de producción. Revisa su suscripción, grupo de recursos, región, tamaño y etiquetas, y comprueba quién puede administrarla en Control de acceso.
[600ms]
[confident] El portal sirve para la inspección visual y las tareas individuales. Sus solicitudes usan Resource Manager; cambiar de interfaz no evita permisos ni directivas.

## Step 3 · Repeat it with commands

[calm] Ambos comandos muestran los grupos de recursos de la suscripción actual. Azure CLI usa comandos que empiezan por a zeta. Azure PowerShell usa cmdlets de Az que devuelven objetos para su canalización.
[600ms]
[confident] Cloud Shell es el entorno hospedado en el navegador, con Bash o PowerShell y herramientas preinstaladas. También puedes ejecutar las herramientas localmente. Siguen siendo necesarios el inicio de sesión y los permisos; Cloud Shell no hace gratuitos los recursos de Azure.

## Step 4 · Describe it as code

[calm] La infraestructura como código registra el estado deseado. Bicep ofrece una sintaxis declarativa concisa y se compila en una plantilla ARM JSON. Los parámetros reciben entradas, los recursos describen qué desplegar y las salidas devuelven valores.
[600ms]
[confident] Versiona y revisa la definición. La idempotencia permite repetir el despliegue con las mismas entradas y alcanzar el mismo estado, en lugar de crear recursos duplicados.

## Step 5 · Same definition, intentional differences

[calm] Este ejemplo cubre el almacenamiento de Contoso. Elige pruebas o producción y selecciona la redundancia. El archivo de parámetros aporta los valores a la misma definición revisada, que aplica nombre, etiqueta Environment y SKU de almacenamiento.
[600ms]
[confident] Revisa la vista previa antes de desplegar. No crea recursos, y esta plantilla no despliega las VM de la tienda ni copia datos de clientes. Esas definiciones y tareas son independientes.

## Step 6 · The management request path

[calm] Contoso solicita crear almacenamiento. Con Reader falla la autorización. Con Contributor, pero sin Environment, la directiva Deny del ejemplo bloquea la solicitud. Con permiso y etiqueta, la solicitud simulada llega a Microsoft Storage y se completa.
[600ms]
[confident] El código válido no evita autorización ni directivas. Esta simulación no reproduce todos los errores de Azure. Las compras siguen otra ruta de datos, no la ruta de despliegue de Resource Manager.

## Step 7 · Reach beyond Azure

[calm] Contoso instala el agente Connected Machine en el servidor del almacén y lo conecta a Azure Arc. El servidor se representa como un recurso de Azure para inventario, acceso y servicios de gestión compatibles. Arc también admite Kubernetes y SQL Server.
[600ms]
[confident] Administrar no es migrar. El servidor permanece en el almacén, su sistema operativo sigue necesitando atención y los servicios conectados pueden tener cargos adicionales.

## Step 8 · Manage and Deploy - All in One

[calm] Elige la herramienta adecuada para cada tarea. Portal permite inspección visual; CLI y PowerShell, comandos repetibles; ARM y Bicep, infraestructura declarativa. Arc amplía la gestión a recursos compatibles fuera de Azure.
[600ms]
[confident] Las herramientas se complementan; ninguna evita permisos ni directivas. Contoso puede explicar sus decisiones de gestión. Después, la supervisión ayuda a entender cómo funciona la tienda.