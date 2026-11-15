# Narrator Script — Virtual Machines · Site Recovery and Backup Reports

**Source animation:** [SiteRecoveryAndBackupReports.html](../../../../journeys/Compute/VirtualMachines/SiteRecoveryAndBackupReports.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/site-recovery/azure-to-azure-architecture>
- <https://learn.microsoft.com/azure/site-recovery/azure-to-azure-tutorial-failover-failback>
- <https://learn.microsoft.com/azure/site-recovery/site-recovery-overview>

---

## Step 1 · A region goes down

[calm] La VM de la tienda de Contoso funciona en una sola región de Azure. Ahora imagina que toda esa región sufre una caída.
[600ms]
[concerned] ¿Dónde vuelve a levantarse la VM, y qué tan rápido?
[600ms]
[confident] Veremos la recuperación ante desastres de Azure a Azure con Site Recovery, y luego los informes y las alertas de Azure Backup. Todo aquí es ficticio, y se alinea con A Z 104 y A Z 305.

## Step 2 · Set up the recovery

[calm] Todo empieza en una bóveda de Recovery Services. Eliges las regiones de origen y de destino, el grupo de recursos y la red de destino, y una política de replicación.
[600ms]
[curious] Site Recovery puede crear por ti el grupo de recursos y la red virtual de destino, o puedes elegir los tuyos.
[600ms]
[confident] Crea la bóveda en cualquier región, menos la región de origen.

## Step 3 · Replicate every write

[calm] Una vez activada la replicación, una extensión del servicio Mobility se instala automáticamente en la VM.
[600ms]
[curious] Envía cada escritura de disco a una cuenta de almacenamiento de caché y de ahí a discos administrados réplica en la región de destino. La caché evita que la replicación ralentice la VM de producción.
[600ms]
[reassuring] Site Recovery solo necesita conectividad de salida desde la VM, nunca de entrada.

## Step 4 · Recovery points

[calm] Las instantáneas se convierten en puntos de recuperación. Los puntos consistentes con fallos son los predeterminados.
[600ms]
[curious] Uno consistente con fallos guarda lo que había en disco, como si desconectaras el cable de corriente. Uno consistente con la aplicación también captura la memoria y las transacciones en curso, y necesita una frecuencia en la política de replicación.
[600ms]
[confident] La retención se define en esa misma política.

## Step 5 · Recovery plans

[calm] Un plan de recuperación ordena tus VMs en grupos. Los grupos arrancan en orden, y las VMs dentro de un grupo arrancan juntas.
[600ms]
[curious] Entre grupos puedes ejecutar scripts, que son runbooks de Azure Automation, o agregar una acción manual que pausa el plan hasta que alguien confirme.
[600ms]
[confident] Un mismo plan sirve para el failover de prueba, el failover y el failback.

## Step 6 · Test failover: the safe drill

[calm] Una conmutación por error de prueba es el simulacro seguro. Crea una copia de la VM en una red de prueba aislada.
[600ms]
[reassuring] La producción sigue funcionando y la replicación continúa, así que no se toca nada en producción. Usa una red que no sea de producción para el simulacro.
[600ms]
[confident] Cuando estés conforme, elige Cleanup test failover para eliminar la VM de prueba.

## Step 7 · Failover and commit

[serious] En una caída real, la conmutación por error crea la VM en el grupo de recursos y la red de destino, a partir del punto de recuperación que elegiste.
[600ms]
[curious] Mientras no confirmes, todavía puedes elegir Cambiar punto de recuperación.
[600ms]
[confident] El commit termina el trabajo. Elimina todos los puntos de recuperación de esa VM en Site Recovery, así que ya no puedes cambiar de opinión.

## Step 8 · Reprotect and fail back

[calm] Después del commit, vuelves a proteger la VM para que se replique de regreso hacia la región original.
[600ms]
[curious] Cuando la región principal vuelve a estar sana, haces la conmutación por recuperación. La VM de origen debe estar apagada para que los cambios se sincronicen con los discos originales.
[600ms]
[confident] Luego vuelves a proteger. En discos administrados, Site Recovery limpia la VM de la región secundaria.

## Step 9 · Run a failover drill

[curious] Ahora pruébalo tú. Elige un tipo de failover y observa qué etapas cambian.
[600ms]
[confident] Fíjate en lo que implica cada elección para la pérdida de datos, que es tu RPO, y para el tiempo de recuperación, que es tu RTO.
[600ms]
[reassuring] En el portal, una Azure VM ofrece Test failover y Failover. Si primero apagas la máquina, obtienes la versión planificada.

## Step 10 · Backup or Site Recovery?

[curious] Mucha gente pregunta si necesita Backup o Site Recovery. Cada uno responde a un tipo de falla distinto.
[600ms]
[confident] Backup restaura una copia del pasado. Site Recovery ejecuta la VM en otro lugar, así que la carga de trabajo sigue funcionando durante una caída.
[600ms]
[reassuring] Los dos forman parte de una estrategia de continuidad del negocio y recuperación ante desastres, así que la mayoría de los diseños usan ambos.

## Step 11 · Where reports come from

[calm] Los informes de Backup se construyen sobre los registros de Azure Monitor. Envías los diagnósticos de tus bóvedas a un espacio de trabajo de Log Analytics, y los libros de trabajo convierten esos datos en informes.
[600ms]
[curious] El espacio de trabajo puede estar en otra suscripción o ubicación, y una Azure Policy integrada puede configurar los ajustes de diagnóstico de muchas bóvedas a la vez.
[600ms]
[serious] De forma predeterminada, el espacio de trabajo conserva los datos por un tiempo limitado, así que amplía la retención si quieres ver tendencias a largo plazo.

## Step 12 · Reading the report

[calm] El informe cubre trabajos, instancias, uso, políticas, cumplimiento de políticas y optimización. Estos números son ficticios.
[600ms]
[curious] Primero busca lo que está en rojo o lo que falta, y luego profundiza ahí.
[600ms]
[confident] También hay informes ya listos, como Historial de trabajos de copia de seguridad y Estado de configuración de copia de seguridad. Site Recovery tiene informes de Historial de trabajos y de Historial de replicación.

## Step 13 · Backup alerts

[calm] Azure Backup genera alertas integradas de Azure Monitor para eventos críticos, y se activan de forma predeterminada.
[600ms]
[serious] Incluyen fallos de copia de seguridad, fallos de restauración, eliminación de datos de copia de seguridad y desactivación de la eliminación temporal.
[600ms]
[confident] Las ves en Resiliencia. Lo que tú decides es quién se entera, con una regla de procesamiento de alertas y un grupo de acciones que las envíen por correo, a un webhook, a una aplicación lógica o a un runbook.

## Step 14 · All in one

[calm] Este es el camino completo: replicar, planificar, probar, hacer failover y volver a proteger. Luego informar y alertar, para saber que las copias de seguridad están sanas.
[600ms]
[confident] A Z 104 cubre configurar Site Recovery, conmutar a una región secundaria e interpretar informes y alertas de Backup. A Z 305 cubre el diseño de copias de seguridad y recuperación ante desastres.
[600ms]
[proud] Las habilidades que se miden cambian, así que revisa las guías de estudio vigentes.
