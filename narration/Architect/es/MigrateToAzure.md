# Narrator Script — Architect · Design a migration to Azure

**Source animation:** [MigrateToAzure.html](../../../journeys/Architect/MigrateToAzure.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/cloud-adoption-framework/migrate/plan-migration>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy>
- <https://learn.microsoft.com/azure/migrate/migrate-services-overview>
- <https://learn.microsoft.com/azure/migrate/concepts-vmware-agentless-migration>
- <https://learn.microsoft.com/azure/dms/dms-overview>
- <https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview>
- <https://learn.microsoft.com/azure/storage/common/storage-migration-overview>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/migrate/>

---

## Step 1 · Plan the move: 120 servers, one method

[calm] Contoso tiene ciento veinte servidores, pero primero necesita un método de migración en lugar de una herramienta de movimiento.
[600ms]
[curious] La secuencia Cloud Adoption Framework va desde la planificación y preparación hasta la ejecución, optimización y retirada del código.
[600ms]
[reassuring] Prepara la zona de aterrizaje y el plan de adopción antes de considerar el primer servidor copiado como una migración exitosa.

## Step 2 · Discover and assess with Azure Migrate

[calm] Azure Migrate recopila evidencia de configuración y rendimiento mediante el descubrimiento y la evaluación.
[600ms]
[curious] Utiliza esa evidencia para entender la preparación, el tamaño adecuado, el coste y las dependencias que afectan al traslado.
[600ms]
[reassuring] Contoso necesita una imagen defendible del estado actual antes de decidir qué migrar, cómo migrarlo y en qué orden.

## Step 3 · Dependencies decide the move groups

[calm] El mapa de dependencias muestra por qué una lista de servidores no es suficiente para planificar las oleadas de migración.
[600ms]
[curious] Los componentes estrechamente conectados deben moverse juntos, mientras que dependencias más flexibles pueden permitir ondas separadas.
[600ms]
[reassuring] Comienza con cargas de trabajo más simples y de menor riesgo para que Contoso pueda practicar el proceso antes de mover la plataforma de pedidos críticas.

## Step 4 · Pick a strategy for each workload

[calm] Elige una estrategia de migración para cada carga de trabajo, usando el cambio más ligero que aún cumpla su objetivo.
[600ms]
[curious] Algunas cargas de trabajo pueden ser realojadas o replataformadas; otras pueden justificar cambios en el código, un rediseño mayor o no moverse en absoluto.
[600ms]
[reassuring] El destino y el cambio requerido deben coincidir, en lugar de llamar a cada traslado a un servicio gestionado un simple levantamiento y cambio.

## Step 5 · Migrate servers: replicate, test, cut over

[calm] La migración del servidor comienza con la replicación, luego mantiene el destino sincronizado mientras la fuente sigue funcionando.
[600ms]
[curious] Una migración de pruebas valida la carga de trabajo copiada en la red de pruebas antes del cambio real.
[600ms]
[reassuring] Retira el servidor original solo después de que Contoso haya comprobado el servicio migrado y sus dependencias.

## Step 6 · Migrate the order database

[calm] Los requisitos de características de la base de datos de pedidos limitan el destino antes de elegir el modo de migración.
[600ms]
[curious] Compara la base de datos SQL, la instancia gestionada de SQL y SQL Server en una máquina virtual, y luego considera el tiempo de inactividad que acepta la empresa.
[600ms]
[reassuring] Comprueba qué modos de migración soporta el Servicio de Migración de Bases de Datos para el destino; la herramienta no elimina la necesidad de elegir el destino correcto.

## Step 7 · Migrate files and images

[calm] Mover archivos e imágenes depende de su volumen, de la red y de si el acceso local debe continuar.
[600ms]
[curious] Data Box, Storage Mover, AzCopy y Azure File Sync cubren diferentes partes de esa decisión.
[600ms]
[reassuring] Una semilla offline y una ruta de sincronización online pueden funcionar juntas, por lo que la migración no tiene que ser completamente offline o completamente online.

## Step 8 · Cut over with a way back

[calm] El plan de transición debe indicar cómo Contoso validará el éxito y cuándo se reiniciará.
[600ms]
[curious] Ajusta el método de migración a la tolerancia de tiempo de inactividad y luego haz explícitos los puntos de control de ir o no ir.
[600ms]
[reassuring] La optimización y la eliminación del código fuente llegan después de la validación, no antes de que el equipo sepa que la nueva plataforma cumple con los requisitos acordados.

## Step 9 · All in one: the migration route

[calm] La ruta completa empieza con la evaluación y las dependencias, no con la copia de servidores.
[600ms]
[curious] Contoso elige una estrategia y herramienta para cada carga de trabajo, ensaya el movimiento y cambia con un camino de recuperación.
[600ms]
[reassuring] El estudio de caso ahora reúne estas elecciones con identidad, datos, continuidad e infraestructura en un solo diseño.

