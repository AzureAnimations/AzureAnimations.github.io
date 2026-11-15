# Narrator Script — Database · Azure Database for MySQL: Design for Availability and Growth

**Source animation:** [MySqlFlexible.html](../../../journeys/Database/MySqlFlexible.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/mysql/flexible-server/overview>
- <https://learn.microsoft.com/azure/mysql/flexible-server/concepts-high-availability>
- <https://learn.microsoft.com/azure/mysql/flexible-server/concepts-read-replicas>
- <https://learn.microsoft.com/azure/mysql/flexible-server/concepts-backup-restore>

---

## Step 1 · Contoso Shop already speaks MySQL

[calm] Contoso Shop es una tienda en PHP que ya funciona con MySQL.
[600ms]
[serious] Hoy el equipo le pone los parches, hace los respaldos y el failover a mano, y ese trabajo nunca termina.
[600ms]
[reassuring] Azure Database for MySQL, servidor flexible, ejecuta el mismo motor de la comunidad, pero como servicio gestionado.

## Step 2 · When is MySQL the right pick?

[curious] Entonces, ¿cuándo conviene MySQL? Parte del motor que tu app ya usa.
[600ms]
[confident] Si la app está hecha para MySQL, el servidor flexible conserva tus drivers, tu SQL y tus herramientas tal como están.
[600ms]
[calm] Otros tipos de aplicaciones apuntan a otros servicios, y la página Elige tu base de datos explica esas diferencias.

## Step 3 · A managed engine with compute apart from storage

[calm] Así es el servicio. Tú eliges la versión de MySQL, el cómputo y el almacenamiento.
[600ms]
[confident] Los parámetros del servidor ajustan el motor. Los dinámicos se aplican al instante, y los estáticos requieren reiniciar.
[600ms]
[serious] Una advertencia: MySQL cinco punto siete está en soporte extendido, que tiene costo, así que planea una actualización de versión mayor. Y solo se admite InnoDB.

## Step 4 · Three compute tiers, matched to the workload

[curious] El cómputo viene en tres niveles. Burstable es para servidores de desarrollo y pruebas que pasan la mayor parte del tiempo inactivos.
[600ms]
[confident] Uso general sirve para la mayoría de las aplicaciones de producción, y Optimizado para memoria es para velocidad en memoria y mucha concurrencia.
[600ms]
[serious] La alta disponibilidad y las réplicas de lectura requieren Uso general u Optimizado para memoria, y cambiar el cómputo reinicia el servidor.

## Step 5 · High availability: a standby that takes over

[calm] La alta disponibilidad agrega un standby pasivo que reproduce los registros del servidor principal.
[600ms]
[impressed] Si el principal falla, el standby toma el control y no se pierden los datos confirmados. La HA con redundancia de zona incluso resiste la caída de una zona.
[600ms]
[serious] Elige HA con redundancia de zona al crear el servidor. Y conéctate siempre con el nombre del servidor, nunca con una dirección IP.

## Step 6 · Read replicas: scale reads and cover a region

[curious] Las réplicas de lectura copian el origen de forma asíncrona y atienden las lecturas, así el origen puede dedicarse a las escrituras.
[600ms]
[confident] Una réplica en otra región ayuda con la recuperación ante desastres, y puedes tener hasta diez.
[600ms]
[serious] Pero nada hace failover automáticamente. Para cambiar, detienes la replicación en una réplica y apuntas la app hacia ella.

## Step 7 · Backups and point-in-time restore

[calm] Las instantáneas junto con los registros de transacciones te permiten restaurar a cualquier momento dentro de tu período de retención.
[600ms]
[confident] Una restauración crea un servidor totalmente nuevo a partir de esas copias de seguridad, así que el original queda intacto.
[600ms]
[serious] Ten en cuenta que después de restaurar, un servidor con HA vuelve sin HA, así que tendrás que activarla de nuevo.

## Step 8 · Who can reach the server?

[curious] ¿Quién puede llegar al servidor? Elige una sola puerta: acceso público con reglas de firewall, un endpoint privado o integración con VNet.
[600ms]
[confident] El tráfico se cifra con TLS, y para iniciar sesión puedes usar Microsoft Entra ID en lugar de la autenticación predeterminada de MySQL.
[600ms]
[reassuring] Para iniciar sesión con Entra necesitas una identidad gestionada asignada por el usuario y un administrador de Entra. Cualquiera de las dos puertas de red controla el acceso en el servidor, no por tabla.

## Step 9 · Grow and patch without rebuilding

[calm] Puedes crecer sin reconstruir. El cómputo escala hacia arriba o hacia abajo con un reinicio corto.
[600ms]
[impressed] El almacenamiento crece en línea e incluso puede crecer solo, aunque únicamente crece: nunca se reduce.
[600ms]
[reassuring] Los parches se aplican en una ventana de mantenimiento que tú eliges, y en desarrollo y pruebas puedes detener el servidor para pausar la facturación del cómputo.

## Step 10 · Moving a MySQL database in

[curious] ¿Cómo se migra una base de datos MySQL? Elige el camino según cuánto tiempo de inactividad pueda soportar la tienda.
[600ms]
[confident] Azure Database Migration Service puede seguir sincronizando mientras haces el corte, y hacer un volcado y restaurarlo es la ruta más simple.
[600ms]
[serious] Single Server se retiró en septiembre de dos mil veinticuatro, así que esos servidores tienen que migrarse. Primero convierte las tablas que no sean InnoDB, y luego empieza la migración.

## Step 11 · Which flexible server design fits the requirement?

[curious] Ahora pruébalo tú. Elige el requisito que más se parezca al tuyo.
[600ms]
[intrigued] Se iluminan los ajustes del servidor flexible que corresponden, junto con un dibujo del diseño y el detalle al que debes prestar atención.
[600ms]
[reflective] Los diseños reales combinan estas piezas, como HA con redundancia de zona, réplicas de lectura y acceso privado para una tienda en producción.

## Step 12 · MySQL on Azure: pick it, protect it, grow it

[calm] Juntemos todo. Elige el servidor flexible cuando la app ya hable MySQL.
[600ms]
[confident] Luego diseña según el requisito: el nivel de cómputo, la alta disponibilidad, las réplicas, las copias de seguridad y la puerta de red.
[600ms]
[proud] A continuación, la página de PostgreSQL cubre el mismo modelo de servidor flexible para otro motor.
