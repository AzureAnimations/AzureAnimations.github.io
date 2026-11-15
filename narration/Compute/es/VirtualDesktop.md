# Narrator Script — Compute · Azure Virtual Desktop: Desktops for 500 Remote Staff

**Source animation:** [VirtualDesktop.html](../../../journeys/Compute/VirtualDesktop.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-desktop/>

---

## Step 1 · Desktops for 500 Remote Staff, No Laptops

[calm] Contoso contrata a quinientos empleados remotos y no les va a enviar laptops. Cada uno usa su propio dispositivo, todos distintos.
[600ms]
[curious] Entonces la pregunta es: ¿dónde debería ejecutarse el escritorio de Windows de todos ellos?
[600ms]
[confident] La idea es ejecutar los escritorios en máquinas virtuales en Azure y transmitirlos a cualquier dispositivo. Eso es Azure Virtual Desktop, y lo vamos a diseñar pieza por pieza.

## Step 2 · Who Runs What: Microsoft vs You

[calm] Azure Virtual Desktop es un servicio, así que la primera pregunta es quién administra qué.
[600ms]
[confident] Microsoft administra el plano de control: el acceso web, el broker, el gateway y el directorio de recursos. Tú no administras servidores de gateway, como sí harías con Remote Desktop Services.
[600ms]
[serious] Tú administras las máquinas virtuales host de sesión, su imagen y aplicaciones, la red virtual, las copias de seguridad y la recuperación, y las identidades.

## Step 3 · Five Objects Connect Users to a Desktop

[calm] Cinco objetos conectan a los usuarios con un escritorio. Un espacio de trabajo agrupa grupos de aplicaciones, y es la lista que ven los usuarios.
[600ms]
[curious] Un grupo de aplicaciones publica un escritorio o RemoteApps desde un solo grupo de hosts, y ahí es donde asignas usuarios, de preferencia como grupos.
[600ms]
[confident] El grupo de hosts es un conjunto de máquinas virtuales host de sesión creadas a partir de la misma imagen. Un grupo de aplicaciones pertenece a un solo espacio de trabajo.

## Step 4 · Pooled or Personal Host Pool?

[calm] Hay dos tipos de grupo de hosts. En uno agrupado, varios usuarios comparten un host de sesión para reducir el costo.
[600ms]
[curious] Los grupos agrupados también eligen un método de balanceo de carga. Breadth-first reparte las sesiones nuevas de manera uniforme, y depth-first llena un host hasta su límite de sesiones antes de pasar al siguiente.
[600ms]
[confident] Un grupo personal le da a cada usuario su propia máquina virtual, así que el balanceo de carga no aplica. Windows multisesión es exclusivo de Azure Virtual Desktop.

## Step 5 · Profiles Follow the User: FSLogix

[curious] En un grupo de hosts agrupado, un usuario puede caer en un host distinto cada vez. Entonces, ¿cómo lo sigue su perfil?
[600ms]
[confident] Los contenedores de perfil de FSLogix son la respuesta recomendada. Al iniciar sesión, el contenedor se conecta desde un recurso compartido de archivos como un disco virtual, y el perfil se siente nativo.
[600ms]
[reassuring] Azure Files se recomienda para la mayoría de los clientes, y Azure NetApp Files es otra opción de Azure.

## Step 6 · Identity: Entra ID Signs Users In

[calm] Microsoft Entra ID siempre autentica al usuario, así que cada usuario necesita una cuenta de Entra.
[600ms]
[serious] No se admiten cuentas personales de Microsoft.
[600ms]
[confident] Los hosts de sesión se unen al mismo tenant de Entra, o a un dominio de Active Directory. Con un dominio, las cuentas de usuario deben ser identidades híbridas, es decir, sincronizadas.

## Step 7 · Three Ways to Join Session Hosts

[calm] El tipo de unión lo eliges según dónde estén tus identidades y tus aplicaciones.
[600ms]
[curious] Los hosts unidos a Entra no necesitan conexión directa con un controlador de dominio y se pueden inscribir en Intune automáticamente. Con un dominio, Microsoft Entra Connect sincroniza las cuentas, o Entra Domain Services sincroniza desde Entra ID.
[600ms]
[serious] Hay una regla que pesa más que todas: un grupo de hosts debe tener hosts de sesión de un solo tipo de unión.

## Step 8 · Network: Outbound Only, Then Shortpath

[calm] De forma predeterminada, tanto el cliente como el host de sesión se conectan de salida por TLS hacia el gateway, que retransmite la sesión.
[600ms]
[reassuring] Eso es conexión inversa, así que no se abre ningún puerto RDP de entrada.
[600ms]
[curious] RDP Shortpath puede agregar una ruta UDP paralela para mejorar la confiabilidad y la latencia, con TCP como respaldo. Y Private Link mantiene el tráfico en endpoints privados.

## Step 9 · Autoscale: Pay for Hosts Only When Used

[calm] Un plan de escalado enciende y apaga los hosts de sesión, para que no pagues por hosts inactivos durante la noche.
[600ms]
[curious] Funciona en cuatro fases al día: aumento gradual, hora pico, reducción gradual y fuera de hora pico. Los horarios agrupados usan un umbral de capacidad y un porcentaje mínimo de hosts.
[600ms]
[confident] Los horarios personales, en cambio, actúan según el estado de la sesión, como sesión cerrada o desconectada. Las cantidades de hosts de aquí son solo una ilustración.

## Step 10 · Run It: Images, Cost and Monitoring

[calm] Para operarlo, crea una imagen maestra. Personaliza una máquina virtual, ejecuta sysprep y captúrala en una Azure Compute Gallery.
[600ms]
[confident] Los hosts agrupados se actualizan volviéndolos a desplegar desde una imagen actualizada. Los hosts multisesión, el escalado automático y Start VM on Connect mantienen el costo bajo control.
[600ms]
[reassuring] Y Azure Virtual Desktop Insights te muestra cómo va todo, con un espacio de trabajo de Log Analytics.

## Step 11 · Pick a Design for Each User Type

[curious] Empieza por el usuario. Selecciona un tipo y verás el perfil y el enfoque de escalado que le corresponden.
[600ms]
[confident] Un trabajador de tareas encaja con hosts multisesión agrupados y depth-first. Un desarrollador recibe un grupo de hosts personal, con una máquina virtual para cada uno. Un contratista puede usar una RemoteApp desde un navegador, con hosts unidos a Entra para una identidad externa.
[600ms]
[serious] Son sugerencias de diseño, así que prueba con tus propias aplicaciones antes de dimensionar nada.

## Step 12 · Azure Virtual Desktop, All in One

[calm] Este es el diseño completo para los quinientos empleados de Contoso: cinco objetos, el tipo de grupo de hosts correcto y perfiles que siguen a los usuarios.
[600ms]
[confident] Suma un plan de identidad, una red solo de salida, escalado automático y buenas imágenes.
[600ms]
[proud] Ten presentes tres preguntas: ¿qué administra Microsoft, qué administras tú y qué tienes que diseñar? Ese es el corazón de la habilidad A Z 305 de diseñar soluciones de cómputo.
