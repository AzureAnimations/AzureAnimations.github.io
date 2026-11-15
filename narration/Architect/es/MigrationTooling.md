# Narrator Script — Architect · Migration tooling: Azure Migrate and DMS

**Source animation:** [MigrationTooling.html](../../../journeys/Architect/MigrationTooling.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/migrate/migrate-services-overview>
- <https://learn.microsoft.com/azure/migrate/migrate-appliance>
- <https://learn.microsoft.com/azure/migrate/concepts-assessment-overview>
- <https://learn.microsoft.com/azure/dms/dms-overview>

---

## Step 1 · 300 servers, 20 databases: now what?

[curious] Contoso se va de su centro de datos, y tiene que trasladar cientos de servidores y un par de docenas de bases de datos. Las cifras son inventadas para esta lección.
[600ms]
[serious] Antes de mover nada, el equipo necesita las herramientas correctas, el orden correcto y tener claro qué hace realmente el appliance.
[600ms]
[confident] Esta es la habilidad A Z 305 de evaluar servidores, datos y aplicaciones locales para su migración.

## Step 2 · Azure Migrate: one hub, four tool families

[calm] Azure Migrate es el lugar único para decidir, planificar y ejecutar una migración.
[600ms]
[confident] Los servidores, las bases de datos, las aplicaciones web y los datos masivos tienen cada uno su propia familia de herramientas, y los datos grandes sin conexión pueden viajar en Azure Data Box.
[600ms]
[reflective] El trabajo sigue tres fases. Decidir, con descubrimiento y un caso de negocio. Planificar, con evaluaciones. Y después, ejecutar la migración.

## Step 3 · Create the Azure Migrate project

[calm] Todo lo que descubres queda en un solo proyecto, dentro de un grupo de recursos.
[600ms]
[confident] Agregas las herramientas que necesitas y luego generas una clave de proyecto, con la que se registrará el appliance.
[600ms]
[reflective] Un appliance se registra en un solo proyecto, pero un proyecto puede tener varios appliances. Primero tu cuenta necesita los roles adecuados.

## Step 4 · The appliance: a lightweight server on your network

[curious] El appliance es un servidor ligero que despliegas una sola vez, dentro de tu propia red.
[600ms]
[confident] Usa una plantilla o un script de PowerShell, y luego regístralo con la clave del proyecto que sacas del portal.
[600ms]
[serious] Para servidores físicos o servidores en otras nubes, siempre se usa el script. Y no instales otros componentes, como el appliance de replicación, en el mismo servidor.

## Step 5 · What the appliance actually does

[curious] Entonces, ¿qué hace en realidad? Lee los metadatos de configuración y rendimiento de tu hipervisor y los envía al proyecto.
[600ms]
[reassuring] No usa agentes. No se instala nada en las máquinas virtuales.
[600ms]
[calm] El appliance sí necesita acceso a internet hacia Azure, directo o por un proxy, así que permite las direcciones que requiere. El despliegue ya incluye una verificación de conectividad.

## Step 6 · Two credentials, two levels of insight

[curious] El appliance usa dos tipos de credenciales, y cada una da un nivel distinto de visibilidad.
[600ms]
[confident] Una cuenta de vCenter de solo lectura basta para los datos de inventario y rendimiento.
[600ms]
[impressed] Si agregas también credenciales de los servidores, el appliance además puede ver el software instalado y las dependencias, y también SQL Server y las aplicaciones web.

## Step 7 · Dependency analysis: move what talks together

[curious] Ahora el appliance observa las conexiones TCP entre tus servidores.
[600ms]
[serious] Los servidores que dependen unos de otros deben migrar juntos. Si no, la aplicación falla después del cutover.
[600ms]
[confident] El análisis de dependencias sin agentes es la opción recomendada. No necesita agentes, y te muestra un mapa o una exportación en CSV.

## Step 8 · Assessments turn data into decisions

[calm] Las evaluaciones convierten todos esos datos en decisiones. Eliges un grupo de servidores y un destino.
[600ms]
[confident] Azure Migrate revisa primero la preparación, luego ajusta el tamaño y por último estima el costo mensual. Hay evaluaciones para Azure VMs, Azure SQL, App Service y Azure VMware Solution.
[600ms]
[serious] Un servidor que no pasa la prueba de preparación no recibe ni tamaño ni costo. Y una evaluación es una foto de un momento dado.

## Step 9 · Right-size by use, then make the business case

[curious] Hay dos formas de dimensionar. El dimensionamiento como en local copia lo que aprovisionaste.
[600ms]
[confident] El dimensionamiento basado en rendimiento usa lo que el servidor realmente consumió, así que la capacidad ociosa no se arrastra a Azure.
[600ms]
[proud] Luego, un caso de negocio compara el entorno local con Azure: costo total de propiedad, flujo de caja año tras año y el paso de gasto de capital a gasto operativo.

## Step 10 · Migrate servers: replicate, test, cut over

[calm] Para migrar servidores, primero replicas: el servidor sigue funcionando mientras se envía una copia inicial y después los cambios.
[600ms]
[confident] Después pruebas en una red aislada. Y luego haces el cutover en una ventana planificada, apagando el origen si quieres, para evitar pérdida de datos.
[600ms]
[reassuring] Por último, completas la migración y limpias. El método de replicación depende de si usas VMware, Hyper-V o servidores físicos.

## Step 11 · Databases: assess first, then Azure DMS

[curious] SQL Server tiene su propio camino. Primero evalúa la preparación y elige un destino.
[600ms]
[confident] Luego migra con Azure Database Migration Service, sin conexión o en línea. Sin conexión, el destino puede ser SQL Database, SQL Managed Instance o SQL en una Azure VM. En línea, solo los dos últimos.
[600ms]
[serious] La extensión de migración de Azure SQL en Azure Data Studio se retira junto con la herramienta, así que usa mejor la evaluación de SSMS o de Azure Arc.

## Step 12 · Web apps and bulk data have their own tools

[curious] No todo es un servidor o una base de datos SQL.
[600ms]
[confident] Azure Migrate puede evaluar aplicaciones web ASP.NET en IIS y migrarlas a App Service. El App Service Migration Assistant se encarga de sitios individuales.
[600ms]
[impressed] Para datos muy grandes, Azure Data Box te envía un dispositivo. Copias tus datos, lo devuelves y Azure los sube a tu cuenta de almacenamiento.

## Step 13 · Pick your workload, see the path

[encouraging] Ahora prueba el selector de herramientas. Elige qué vas a migrar.
[600ms]
[confident] El panel muestra la ruta de herramientas de Azure que corresponde y las tres primeras acciones.
[600ms]
[reflective] Esa es la habilidad A Z 305 en la práctica: elige la herramienta según el tipo de carga de trabajo, no por costumbre.

## Step 14 · The runbook: discover, assess, migrate, cut over

[calm] Esta es la respuesta de Contoso. Empieza con el appliance, para descubrir y evaluar.
[600ms]
[confident] Las bases de datos pasan por Azure DMS, y todo lo demás sigue su grupo de dependencias por replicación, pruebas y cutover.
[600ms]
[proud] Con esto se cubren los objetivos de migración de A Z 305, desde evaluar entornos locales hasta recomendar la ruta correcta para servidores, bases de datos y datos.
