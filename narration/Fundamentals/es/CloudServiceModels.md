# Guion de narración - Modelos de servicios en la nube

**Source animation:** journeys/Fundamentals/CloudServiceModels.html
**Script status:** Authored voiceover.
**Language:** Español

Las indicaciones entre corchetes no se pronuncian. Las pausas van en líneas separadas. Un bloque por paso de la animación.
<!-- Source: https://learn.microsoft.com/azure/security/fundamentals/shared-responsibility -->

## Step 1 · Who patches the server?

[calm] El equipo de Contoso quiere preparar la próxima promoción, pero el servidor también necesita una actualización de seguridad. Alguien debe mantener cada capa que permite funcionar a la aplicación.
[600ms]
[confident] Los modelos de servicios en la nube responden a una pregunta práctica: ¿qué trabajo conserva Contoso y cuál asume Microsoft?

## Step 2 · Run it yourself

[calm] Empecemos por la base: los equipos físicos, después el sistema operativo y, encima, la aplicación y sus datos. En sus propias instalaciones, Contoso se ocupa de todas estas capas.
[600ms]
[confident] Eso da control al equipo, pero también responsabilidad sobre el mantenimiento, la seguridad y el funcionamiento del conjunto.

## Step 3 · Rent the infrastructure

[calm] Ahora Microsoft se ocupa de la infraestructura física de la tienda. Contoso alquila una máquina virtual, pero sigue manteniendo su sistema operativo, su aplicación y sus datos.
[600ms]
[confident] Esto es infraestructura como servicio, o IaaS. Microsoft asume el hardware; las actualizaciones del sistema operativo invitado siguen siendo responsabilidad de Contoso.

## Step 4 · Use a managed platform

[calm] Subamos una capa. Con plataforma como servicio, o PaaS, Microsoft también opera el sistema operativo subyacente y el entorno de ejecución de la aplicación.
[600ms]
[confident] Contoso puede centrarse en el código y los datos de su tienda, sin dejar de gestionar la configuración, el acceso y sus responsabilidades de seguridad sobre la aplicación.

## Step 5 · Subscribe to finished software

[calm] El personal del almacén necesita software empresarial listo para usar, no otra aplicación que desarrollar. El software como servicio, o SaaS, proporciona una aplicación terminada cuya plataforma opera el proveedor.
[600ms]
[confident] Contoso gestiona cómo la usa su personal. Esto no convierte su tienda personalizada en una aplicación SaaS ya preparada.

## Step 6 · Some work stays with Contoso

[calm] Que haya más capas administradas no elimina las responsabilidades. Contoso sigue decidiendo quién puede iniciar sesión, a qué puede acceder y cómo se trata la información de los clientes.
[600ms]
[confident] Los datos, las identidades, el acceso y los dispositivos correspondientes necesitan protección. Responsabilidad compartida significa entender el límite, no suponer que el proveedor se ocupa de todo.

## Step 7 · Cloud Service Models - All in One

[calm] Compara las capas: IaaS ofrece infraestructura; PaaS, una plataforma administrada para aplicaciones; y SaaS, software terminado. Cada modelo traslada una parte diferente del trabajo operativo a Microsoft.
[600ms]
[confident] Contoso puede combinar modelos según la tarea. Ahora necesita una forma clara de organizar los recursos que cree.