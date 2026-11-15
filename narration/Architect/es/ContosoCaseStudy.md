# Narrator Script — Architect · Case study: design the Contoso platform

**Source animation:** [ContosoCaseStudy.html](../../../journeys/Architect/ContosoCaseStudy.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-305>
- <https://learn.microsoft.com/azure/well-architected/what-is-well-architected-framework>
- <https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn>
- <https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview>
- <https://learn.microsoft.com/azure/azure-sql/managed-instance/business-continuity-high-availability-disaster-recover-hadr-overview>
- <https://learn.microsoft.com/azure/app-service/overview-patch-os-runtime>
- <https://learn.microsoft.com/azure/networking/design-guide/app-delivery>
- <https://learn.microsoft.com/azure/vpn-gateway/vpn-gateway-about-vpngateways>
- <https://learn.microsoft.com/azure/architecture/networking/architecture/hub-spoke>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/migrate/plan-migration>
- <https://learn.microsoft.com/azure/dms/dms-overview>
- <https://learn.microsoft.com/azure/storage/common/storage-migration-overview>
- <https://learn.microsoft.com/azure/well-architected/>

---

## Step 1 · Read the brief: requirements and constraints

[calm] Lee el resumen de Contoso antes de buscar un servicio favorito de Azure.
[600ms]
[curious] Los requisitos subrayados separan lo que debe hacer el diseño de las restricciones sobre cómo puede entregarse.
[600ms]
[reassuring] Utiliza esas palabras para descartar primero las opciones inadecuadas y luego compara los diseños restantes con la misma evidencia.

## Step 2 · Identity and governance: pick the sign-in method

[calm] El personal de Contoso ya utiliza cuentas locales, así que la elección de inicio de sesión comienza con ese requisito.
[600ms]
[curious] Compara dónde cada método valida al usuario y luego elige el método más sencillo que satisfaga la necesidad establecida.
[600ms]
[reassuring] Las barreras de gobernanza giran en torno a esa decisión de autenticación; un nombre de producto conocido por sí solo no es una justificación.

## Step 3 · Data: match the SQL target to the need

[calm] El requisito de base de datos exige capacidades de SQL Server a nivel de instancia, no solo un lugar para almacenar tablas relacionales.
[600ms]
[curious] Eso reduce las opciones a instancias gestionadas de SQL sin añadir la responsabilidad del sistema operativo de una máquina virtual.
[600ms]
[reassuring] Señala el requisito que lo seleccionó y explica por qué las otras opciones no tienen ni las capacidades ni la restricción del esfuerzo operativo.

## Step 4 · Business continuity: meet the RTO and RPO

[calm] Contoso debe recuperarse de un fallo regional en un plazo de una hora y no perder más de cinco minutos de datos de pedido.
[600ms]
[curious] Compara cada opción tanto con los objetivos de recuperación como con la falla regional descrita en el informe.
[600ms]
[reassuring] La redundancia de zonas aborda un límite diferente, mientras que un grupo de conmutación por error proporciona el enfoque de recuperación interregional considerado en este diseño.

## Step 5 · Compute: the least to operate that fits

[calm] Un pequeño equipo de operaciones y un lanzamiento sin reescritura moldean la decisión de cómputo.
[600ms]
[curious] Para la aplicación web adecuada, App Service elimina el mantenimiento del sistema operativo y en tiempo de ejecución de la lista de tareas de Contoso.
[600ms]
[reassuring] La carga de trabajo por lotes heredada puede tomar una ruta inicial diferente, mostrando por qué una solución no necesita un solo servicio de cómputo en todas partes.

## Step 6 · Network: private link, global front door

[calm] La red debe cumplir dos requisitos: una conexión privada al centro de datos y un punto de entrada global para los clientes.
[600ms]
[curious] ExpressRoute aborda la conexión privada, mientras que Front Door proporciona el papel global de enrutamiento de aplicaciones.
[600ms]
[reassuring] Una pasarela regional y una VPN basada en internet resuelven diferentes problemas, así que comprueba cada elección con la redacción exacta del informe.

## Step 7 · Migration: the lightest route per workload

[calm] El plan de migración asigna una ruta práctica a cada parte de la plataforma en lugar de reescribir todo antes del lanzamiento.
[600ms]
[curious] Azure Migrate se encarga de los servidores, el Servicio de Migración de Bases de Datos mueve la base de datos y la ruta de transferencia de datos gestiona los archivos.
[600ms]
[reassuring] Mantén visibles el orden de dependencias, los requisitos de validación y de cambio al seleccionar cada herramienta.

## Step 8 · All in one: the Contoso platform

[calm] La plataforma Contoso ensamblada responde a los cuatro dominios de diseño con un conjunto conectado de opciones.
[600ms]
[curious] Revísalo a través de Fiabilidad, Seguridad, Optimización de Costes, Excelencia Operativa y Eficiencia del Rendimiento.
[600ms]
[reassuring] Un diseño defendible equilibra esos pilares con el encargo, explicando los compromisos en lugar de afirmar que cada dimensión se maximiza.

