# Narrator Script - ¿Qué sala paga esto?

**Source animation:** journeys/Identity/SubscriptionsAndScopes.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/management-groups/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/concepts/scope -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/scope-overview -->
<!-- Reference: https://learn.microsoft.com/en-us/training/paths/az-104-manage-identities-governance/ -->

## Step 1 · One bill for the whole house

[curious] La familia ya sabe quién puede utilizar cada aparato, pero todo se cobra a una cuenta compartida.
[600ms]
Necesitamos organizar recursos, responsabilidades y costes. El ámbito indica dónde se aplica un permiso o una directiva.
[600ms]
[confident] Incluso una sola suscripción contiene ámbitos menores. Compartir cuenta no obliga a conceder acceso a todo.

## Step 2 · Give each part of the house its own account

[calm] Las suscripciones dan a Contoso límites separados para controlar el uso, los costes y las cuotas.
[600ms]
En la casa, las zonas compartidas y privadas reciben cuentas distintas. Las identidades siguen perteneciendo al inquilino, no a una familia nueva por cuenta.
[600ms]
[confident] Elige estos límites con intención. Mover recursos después solo es posible si sus tipos y los requisitos de traslado lo permiten.

## Step 3 · A room for things that belong together

[calm] Un grupo de recursos es una habitación para gestionar recursos juntos. El horno va a la cocina; el televisor y el altavoz comparten el salón.
[600ms]
Cada grupo pertenece a una suscripción y cada recurso, a un grupo de recursos.
[600ms]
[confident] Eliminar el grupo elimina también sus recursos, salvo que las protecciones o dependencias lo impidan. Agrupa por ciclo de vida, no solo por parecido.

## Step 4 · Above every account sits the family

[calm] Un grupo de administración está por encima de las suscripciones, como la familia por encima de las cuentas de la casa.
[600ms]
Puede contener suscripciones y otros grupos de administración, y ofrece un lugar para aplicar reglas comunes.
[600ms]
[confident] Las suscripciones que se colocan debajo heredan las asignaciones aplicables. El grupo de administración raíz del inquilino organiza la jerarquía; las cuentas no quedan aisladas.

## Step 5 · What the family decides reaches every room

[calm] Sigue la jerarquía hacia abajo: grupo de administración, suscripción, grupo de recursos y recurso.
[600ms]
Los permisos de rol asignados arriba se aplican abajo. Las directivas también alcanzan ámbitos secundarios, salvo exclusiones o exenciones autorizadas.
[600ms]
[confident] Las etiquetas son distintas: no se heredan automáticamente. No supongas que toda configuración baja por el árbol de la misma manera.

## Step 6 · Four levels — All in One

[calm] Familia, cuenta, habitación y aparato: esos son nuestros cuatro niveles de ámbito de Azure.
[600ms]
Una asignación de rol sobre un recurso es limitada; una situada más arriba puede alcanzar muchos recursos inferiores.
[600ms]
[confident] Elige el ámbito adecuado más pequeño. Ahora utilizaremos la misma jerarquía para reglas de recursos y alertas de gasto, no solo permisos.

## Step 7 · The Contoso estate, end to end

[confident] La vista completa sustituye la casa por nombres reales: un inquilino, un grupo de administración y cinco suscripciones de entornos.
[600ms]
Cada grupo de recursos contiene la máquina virtual, el clúster, la base de datos y la red del entorno. Cada suscripción tiene un solo padre.
[600ms]
[confident] Asigna las directivas o el acceso comunes en el grupo de administración: las asignaciones aplicables alcanzan las suscripciones inferiores, también las que se añadan después.
