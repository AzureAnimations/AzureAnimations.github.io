# Guion de narración - Gobernanza y cumplimiento

**Source animation:** journeys/Fundamentals/GovernanceAndCompliance.html
**Script status:** Authored voiceover.
**Language:** Español

Las indicaciones entre corchetes no se pronuncian. Las pausas van en líneas separadas. Un bloque por paso de la animación.
<!-- Sources: https://learn.microsoft.com/azure/governance/policy/overview ; https://learn.microsoft.com/azure/azure-resource-manager/management/lock-resources ; https://learn.microsoft.com/azure/cloud-adoption-framework/govern/monitor-cloud-governance -->

## Step 1 · Standards nobody checks

[calm] Contoso acordó usar la etiqueta Environment, pero falta en el siguiente despliegue. Escribir una norma en un documento no comprueba automáticamente un recurso.
[600ms]
[confident] El equipo necesita una regla que se evalúe donde se crean los recursos, para detectar las omisiones o impedir que ocurran.

## Step 2 · Write the rule, then apply it

[calm] Una definición de Azure Policy describe la regla, por ejemplo, exigir Environment en los recursos compatibles. La asignación especifica dónde se aplica esa regla.
[600ms]
[confident] Contoso la asigna a la suscripción de la tienda. Definir y aplicar son pasos distintos; la asignación proporciona a la regla su ámbito de administración.

## Step 3 · First, observe with Audit

[calm] Con el efecto Audit, la falta de etiqueta aparece como incumplimiento, pero esta directiva permite continuar el despliegue. Contoso puede ver dónde no se respeta su estándar.
[600ms]
[confident] Auditar ayuda a entender el impacto antes de imponer una regla. Informar del problema no corrige el recurso automáticamente.

## Step 4 · Then enforce with Deny

[calm] Con Deny, la directiva bloquea esta solicitud porque falta la etiqueta obligatoria. Contoso la añade y vuelve a enviar la solicitud corregida.
[600ms]
[confident] Así se impide el cambio que no cumple la regla. No se eliminan recursos existentes, y superar esta comprobación no evita los demás controles de permisos o directivas.

## Step 5 · Protect what already exists

[calm] Contoso también quiere evitar borrar por accidente un recurso de producción. Un bloqueo de eliminación impide la solicitud de administración que intenta borrarlo mientras siga aplicado.
[600ms]
[confident] Un administrador autorizado puede retirar el bloqueo. Protege frente a ciertos cambios de administración; no garantiza de forma irreversible que el recurso jamás pueda eliminarse.

## Step 6 · The resource is not its data

[calm] Bloquear el recurso de base de datos no bloquea todos los registros de clientes que contiene. Una operación de datos autorizada puede modificarlos, porque los bloqueos de recursos se aplican a operaciones de administración.
[600ms]
[confident] Contoso necesita permisos de datos y controles de recuperación independientes. Un bloqueo no es una copia de seguridad ni una estrategia completa de protección.

## Step 7 · Govern the data too

[calm] Contoso necesita saber qué información conserva y dónde está. Microsoft Purview puede descubrir y clasificar datos de orígenes compatibles que se hayan conectado.
[600ms]
[confident] Ese inventario orienta el tratamiento de información sensible. El equipo sigue definiendo y operando los controles necesarios para cumplir sus requisitos.

## Step 8 · Governance - All in One

[calm] Policy comprueba cómo deben ser los recursos; los bloqueos protegen determinadas operaciones de administración; la gobernanza de datos ayuda a conocer la información que Contoso conserva. Cada control atiende una necesidad distinta.
[600ms]
[confident] Apoyan la gobernanza, pero no garantizan cumplimiento automático. Ahora Contoso hará repetibles sus despliegues para no depender de recordar cada paso manual.