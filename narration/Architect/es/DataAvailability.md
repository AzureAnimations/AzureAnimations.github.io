# Narrator Script — Architect · Keep data available: HA and DR for databases and storage

**Source animation:** [DataAvailability.html](../../../journeys/Architect/DataAvailability.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-sql/database/business-continuity-high-availability-disaster-recover-hadr-overview>
- <https://learn.microsoft.com/azure/azure-sql/managed-instance/business-continuity-high-availability-disaster-recover-hadr-overview>
- <https://learn.microsoft.com/azure/azure-sql/database/automated-backups-overview>
- <https://learn.microsoft.com/azure/azure-sql/virtual-machines/windows/business-continuity-high-availability-disaster-recovery-hadr-overview>
- <https://learn.microsoft.com/azure/cosmos-db/high-availability>
- <https://learn.microsoft.com/azure/postgresql/backup-restore/concepts-business-continuity>
- <https://learn.microsoft.com/azure/storage/common/storage-redundancy>

---

## Step 1 · Zone redundancy: survive a zone failure

[calm] La base de datos de pedidos debe permanecer disponible cuando falla una zona de disponibilidad.
[600ms]
[curious] La redundancia de zonas distribuye la protección de la base de datos entre zonas dentro de la región, de modo que la ubicación que sobreviva puede seguir sirviendo a la aplicación.
[600ms]
[reassuring] Eso aborda una falla de zona; no crea por sí sola una segunda región para un desastre regional.

## Step 2 · Across regions: geo-replication or failover group?

[calm] Una interrupción regional requiere una copia de la base de datos en otra región, no solo en otra zona de la misma región.
[600ms]
[curious] Compara una base de datos geo-replicada con un grupo de conmutación por error que coordina las bases de datos y proporciona puntos finales de oyente estables.
[600ms]
[reassuring] Elige deliberadamente el enfoque de unidad de conmutación por fallo y conexión a la aplicación, y ten en cuenta los cambios que aún no se han replicado.

## Step 3 · Backups: pick the restore for the problem

[calm] Las rutas de respaldo de la base de datos responden a diferentes preguntas de recuperación, incluso cuando las réplicas de disponibilidad ya están activas.
[600ms]
[curious] La restauración en un momento dado retrocede antes de un error, la retención a largo plazo conserva el historial de recuperación antiguo y la restauración geográfica utiliza la copia de seguridad remota.
[600ms]
[reassuring] Elige la restauración que coincida con el incidente, en lugar de confundir una copia de seguridad con una reserva disponible inmediatamente.

## Step 4 · SQL Server on VMs: availability groups

[calm] SQL Server en máquinas virtuales da control a Contoso, pero también hace que el diseño de disponibilidad sea responsabilidad de Contoso.
[600ms]
[curious] Los grupos de disponibilidad utilizan réplicas de bases de datos, mientras que una instancia de clúster de conmutación por conmutación por conmutación por fallo protege a nivel de instancia.
[600ms]
[reassuring] Elige las bases de datos que deben hacer failover juntas y luego planifica cómo operar, monitorizar y mantener sus réplicas.

## Step 5 · Azure Cosmos DB: replicate and choose consistency

[calm] Azure Cosmos DB puede colocar copias entre regiones, pero la configuración de escritura cambia el diseño.
[600ms]
[curious] Una sola región de escritura y varias regiones de escritura tienen diferentes consideraciones de failover y conflicto.
[600ms]
[reassuring] Elige el requisito de consistencia junto con la topología de la región, porque la disponibilidad, las expectativas de pérdida de datos y el comportamiento de la aplicación deben coincidir.

## Step 6 · PostgreSQL flexible server: layers of recovery

[calm] La recuperación PostgreSQL utiliza varias capas en lugar de un solo switch universal.
[600ms]
[curious] Un standby redundante por zona responde a la disponibilidad local, mientras que una réplica de lectura y copias de seguridad entre regiones sirven a diferentes situaciones de recuperación.
[600ms]
[reassuring] Compara el límite de fallo y las expectativas de recuperación de cada capa antes de afirmar que todo el diseño de la base de datos cumple el objetivo.

## Step 7 · Storage redundancy: one decision row

[calm] La redundancia de almacenamiento es otra decisión límite-fallo: un centro de datos, una zona o una región.
[600ms]
[curious] Sigue las copias de LRS y ZRS hasta la protección regional adicional en GRS y GZRS.
[600ms]
[reassuring] Una copia remota y un punto final remoto legible no son la misma promesa, así que considera las opciones de acceso de lectura por separado.

## Step 8 · All in one: pick by RTO and RPO

[calm] El resumen comienza con RTO y RPO, luego asigna cada servicio de datos a la capa de protección correspondiente.
[600ms]
[curious] Los objetivos más compactos suelen requerir más capacidad lista para usar, mientras que la recuperación basada en copias de seguridad sigue un camino diferente.
[600ms]
[reassuring] Contoso debería justificar el diseño de disponibilidad frente a sus objetivos antes de pasar a elegir la plataforma de cómputo de la aplicación.

