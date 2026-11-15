# Narrator Script — Virtual Machines · Secure a virtual machine: encryption, JIT, Trusted launch and Defender for Servers

**Source animation:** [SecureVirtualMachines.html](../../../../journeys/Compute/VirtualMachines/SecureVirtualMachines.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/defender-for-cloud/just-in-time-access-overview>
- <https://learn.microsoft.com/azure/virtual-machines/disk-encryption-overview>
- <https://learn.microsoft.com/azure/virtual-machines/trusted-launch>
- <https://learn.microsoft.com/azure/virtual-machines/boot-integrity-monitoring-overview>

---

## Step 1 · A VM with the defaults

[calm] La nueva VM de la tienda de Contoso se montó pensando en la comodidad: una dirección IP pública, RDP y SSH permitidos desde cualquier lugar, y nadie vigilando.
[600ms]
[concerned] Los valores predeterminados exactos del portal varían, así que revisa qué exponen tus propias VMs.
[600ms]
[serious] Lo importante es hasta dónde puede llegar un atacante, y aquí llega muy lejos.

## Step 2 · Don’t leave RDP and SSH open

[serious] Los actores de amenazas buscan activamente máquinas con puertos de administración abiertos.
[600ms]
[concerned] Una sola VM comprometida se convierte en la puerta de entrada a todo lo demás que alcanza.
[600ms]
[confident] Pero los administradores necesitan RDP y SSH, así que no basta con eliminar los puertos. Mantenlos cerrados y ábrelos solo cuando haga falta, por el menor tiempo posible.

## Step 3 · Just-in-time access

[calm] El acceso justo a tiempo mantiene cerrados los puertos de administración.
[600ms]
[confident] Un administrador pide un puerto para su propia dirección IP y por un lapso corto. Defender for Cloud revisa sus permisos de Azure RBAC y luego abre esa dirección de origen durante ese tiempo.
[600ms]
[reassuring] Cuando termina el lapso, la regla se restablece, y las conexiones que ya estaban abiertas no se interrumpen. Es parte del Plan 2 de Defender for Servers.

## Step 4 · Bastion or JIT?

[curious] Los dos evitan dejar RDP y SSH abiertos a internet, pero de maneras distintas. Elige un escenario para ver cuál conviene.
[600ms]
[confident] Bastion ofrece RDP y SSH sobre TLS por el puerto cuatro cuarenta y tres, hacia las VMs por IP privada, así que la VM no necesita IP pública.
[600ms]
[reflective] JIT mantiene cerrado el grupo de seguridad de red y abre un puerto para una sola dirección durante un tiempo limitado. Requiere el Plan 2 de Defender for Servers.

## Step 5 · Disk encryption

[calm] Los discos administrados siempre se cifran en reposo, pero eso no cubre los discos temporales ni las cachés.
[600ms]
[confident] El cifrado en el host los agrega, además de los datos que van hacia el almacenamiento. Azure Disk Encryption trabaja dentro de la VM, con BitLocker o DM-Crypt.
[600ms]
[serious] Azure Disk Encryption está programado para retirarse, así que Learn recomienda el cifrado en el host para las VMs nuevas. Con tus propias claves, tú tienes el control.

## Step 6 · Security type

[curious] Al crear una VM, eliges su tipo de seguridad. Este define qué protege la VM incluso antes de que arranque el sistema operativo.
[600ms]
[confident] El lanzamiento confiable es para VMs de segunda generación y es el valor predeterminado en las nuevas. Las VMs confidenciales agregan un límite impuesto por hardware alrededor de la VM.
[600ms]
[concerned] El tipo estándar no tiene ninguna de estas protecciones de arranque, y es la opción más débil.

## Step 7 · Secure Boot and vTPM

[calm] Secure Boot solo deja ejecutar código de arranque firmado. El cargador de arranque, el kernel y sus controladores tienen que estar firmados por editores de confianza, o la VM no arranca.
[600ms]
[confident] El vTPM es un TPM virtual, versión dos punto cero. Registra lo que se ejecutó, para poder demostrar el arranque más adelante.
[600ms]
[impressed] Así las claves y las mediciones quedan fuera del alcance de cualquier VM, y esa es tu defensa contra los rootkits.

## Step 8 · Integrity monitoring

[calm] Con el monitoreo de integridad activado, una extensión de Guest Attestation le demuestra a Azure cada arranque.
[600ms]
[confident] Si la prueba falla, Defender for Cloud te avisa. En el portal, selecciona Monitoreo de integridad en la configuración del tipo de seguridad, y la extensión se instala.
[600ms]
[serious] Requiere una VM de lanzamiento confiable con Secure Boot y vTPM activados. La atestación falla si Secure Boot está desactivado.

## Step 9 · Defender for Servers

[calm] Defender for Servers protege máquinas Windows y Linux desde Defender for Cloud. Actívalo para una suscripción y luego elige un plan.
[600ms]
[confident] El Plan 1 es el nivel de entrada y se centra en la detección y respuesta en el endpoint. El Plan 2 incluye el Plan 1 y agrega análisis sin agente, JIT y monitoreo de integridad de archivos.
[600ms]
[reflective] Microsoft recomienda activarlo a nivel de suscripción, y el interruptor activa el Plan 2 de forma predeterminada. Para ver los precios, consulta la página de precios de Defender for Cloud.

## Step 10 · Vulnerability scanning and EDR

[curious] El sensor de Defender for Endpoint ve una VM mientras se ejecuta. El análisis sin agente lee una copia de sus discos y no necesita instalar nada.
[600ms]
[confident] El análisis basado en agente y el EDR vienen con los dos planes. El análisis sin agente está en el Plan 2, y el análisis de malware es solo del Plan 2.
[600ms]
[reassuring] La instantánea se queda en la región de la VM, y se elimina en cuanto se leen los metadatos.

## Step 11 · Azure Machine Configuration

[calm] La configuración de máquina revisa los ajustes dentro del sistema operativo contra el estado que exiges, y puede restablecerlos cuando se desvían.
[600ms]
[confident] Es parte de Azure Policy. Una VM de Azure necesita la extensión de configuración de máquina y una identidad administrada asignada por el sistema.
[600ms]
[curious] Cada asignación tiene un modo: Auditar, Aplicar y supervisar, o Aplicar y corregir automáticamente.

## Step 12 · Arc-enabled servers, and the recap

[calm] Azure Arc incorpora a la administración de Azure los servidores que están fuera de Azure. Instala el agente Connected Machine y el servidor pasa a ser un recurso de Azure.
[600ms]
[confident] Después, Defender for Servers, Azure Policy y la configuración de máquina también pueden trabajar sobre él.
[600ms]
[proud] Funciones de VM como el lanzamiento confiable y el cifrado en el host se quedan en las VMs de Azure. Cierra los puertos, protege el arranque, cifra los discos y sigue vigilando.
