# Narrator Script — Architect · Design for recovery: RTO, RPO and the right tool

**Source animation:** [RecoveryObjectives.html](../../../journeys/Architect/RecoveryObjectives.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/well-architected/reliability/metrics>
- <https://learn.microsoft.com/azure/reliability/concept-service-level-agreements>
- <https://learn.microsoft.com/azure/backup/backup-overview>
- <https://learn.microsoft.com/azure/backup/backup-azure-backup-faq>
- <https://learn.microsoft.com/azure/backup/backup-azure-recovery-services-vault-overview>
- <https://learn.microsoft.com/azure/backup/backup-vault-overview>
- <https://learn.microsoft.com/azure/backup/backup-azure-immutable-vault-concept>
- <https://learn.microsoft.com/azure/site-recovery/site-recovery-overview>
- <https://learn.microsoft.com/azure/backup/backup-architecture>

---

## Step 1 · Recovery objectives: RTO, RPO and SLA

[calm] El calendario de recuperación plantea dos preguntas empresariales diferentes, no una pregunta general sobre la disponibilidad.
[600ms]
[curious] RPO describe cuánto datos recientes Contoso puede permitirse perder, mientras que RTO describe cuánto puede tardar la recuperación.
[600ms]
[reassuring] Un SLA es un compromiso de servicio, no un reemplazo de esos objetivos de recuperación específicos de la carga de trabajo.

## Step 2 · Tier the workloads by what they cost to lose

[calm] Las cargas de trabajo de Contoso no causan todas el mismo daño cuando se detienen o pierden datos recientes.
[600ms]
[curious] Los cuatro niveles asignan objetivos de recuperación diferentes según el impacto empresarial, en lugar de comprar la opción más estricta para todo.
[600ms]
[reassuring] Trata las cifras aquí como requisitos de ejemplo y utiliza cada nivel para guiar la inversión en protección y recuperación.

## Step 3 · Azure Backup: restore data from a point in time

[calm] Azure Backup conserva los puntos de recuperación que Contoso puede restaurar cuando los datos o una carga de trabajo protegida necesitan recuperación.
[600ms]
[curious] Elige la bóveda y la política para que coincidan con lo que se está protegiendo, y luego considera las protecciones alrededor de la copia de seguridad en sí.
[600ms]
[reassuring] Mantener un historial recuperable resuelve un problema diferente a simplemente mantener otra copia en funcionamiento.

## Step 4 · Azure Site Recovery: fail over the workload

[calm] Azure Site Recovery replica la carga de trabajo para que Contoso pueda hacer failover tras un desastre.
[600ms]
[curious] El plan de recuperación define el orden de las capas de la aplicación y de las acciones necesarias, en lugar de iniciar cada componente sin coordinación.
[600ms]
[reassuring] Un fallo de prueba permite al equipo ensayar la ruta de recuperación sin tratar la primera interrupción real como su primer ejercicio.

## Step 5 · Backup or replication?

[calm] Estos dos caminos de recuperación son complementarios: restaurar un punto de recuperación o hacer un error a una réplica.
[600ms]
[curious] La copia de seguridad aborda datos perdidos o dañados, mientras que la replicación ayuda a recuperar la carga de trabajo tras perder su ubicación operativa.
[600ms]
[reassuring] Elige según el fallo y el objetivo de recuperación; una segunda copia en ejecución no reemplaza un historial de copia de seguridad protegido.

## Step 6 · Choose where the second copy lives

[calm] La posición de la segunda copia cambia qué fallos puede sobrevivir el diseño.
[600ms]
[curious] Una copia local, una copia entre zonas y una copia en otra región ofrecen diferentes límites de protección.
[600ms]
[reassuring] Comparar la distancia y la opción de restauración con el objetivo de recuperación de Contoso, incluyendo si el equipo debe realizar su propio ejercicio regional de recuperación.

## Step 7 · Protect on-premises servers too

[calm] Algunos servidores de Contoso permanecerán en las instalaciones, por lo que el diseño de recuperación también debe cruzar ese límite.
[600ms]
[curious] El diagrama separa la copia de seguridad basada en agentes, un servidor de respaldo y la replicación de cargas de trabajo en Azure.
[600ms]
[reassuring] Elige la ruta que coincida con el sistema protegido y si el objetivo es restaurar datos o recuperar la carga de trabajo en ejecución.

## Step 8 · All in one: recover to the objective

[calm] Empieza en el objetivo de negocio y luego sigue el diseño a través de los niveles de carga de trabajo, herramientas de recuperación y ubicaciones de copias.
[600ms]
[curious] La respuesta de Contoso es un enfoque de recuperación que se adapte a cada carga de trabajo, no a una sola herramienta aplicada en todas partes.
[600ms]
[reassuring] La siguiente lección añade las funciones de disponibilidad de bases de datos y almacenamiento que mantienen la capa de datos lista para fallos.

