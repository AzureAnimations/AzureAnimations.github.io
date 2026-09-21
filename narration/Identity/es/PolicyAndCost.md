# Narrator Script - Las reglas del dinero

**Source animation:** journeys/Identity/PolicyAndCost.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-basics -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/concepts/scope -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets -->

## Step 1 · Nobody said no

[curious] Mia puede entrar en su habitación y tiene permiso para pedir un aparato. Todavía no hay ninguna regla que prohíba una consola de videojuegos.
[600ms]
El permiso para actuar y las reglas sobre el recurso responden a preguntas distintas.
[600ms]
[confident] Los roles de Azure deciden quién actúa, Acceso condicional comprueba el inicio de sesión y Azure Policy evalúa el cumplimiento de los recursos. Mantengamos claras esas tres responsabilidades.

## Step 2 · Write the rule, then choose where it lands

[calm] Primero escribe la regla como una definición de directiva. Después crea una asignación que indique dónde se aplica.
[600ms]
Aquí el ámbito es la habitación de Mia, nuestro grupo de recursos. El taller de Papá queda fuera de esta asignación.
[600ms]
[confident] Guardar una definición no la aplica. La asignación vincula la regla reutilizable, sus opciones y los recursos que debe evaluar.

## Step 3 · Stopped, or just written down?

[calm] El efecto determina qué ocurre cuando una solicitud evaluada incumple la regla.
[600ms]
Deny la rechaza; Audit la permite y registra el incumplimiento. Ni siquiera los permisos de Owner eluden una directiva Deny aplicada.
[600ms]
[confident] Observar un problema no es lo mismo que bloquearlo. Tampoco significa que todos los recursos existentes se hayan corregido automáticamente.

## Step 4 · One rule is not a standard

[calm] Un estándar de la casa puede necesitar varias reglas. Una iniciativa reúne definiciones de directiva en un solo libro.
[600ms]
El dibujo coloca las definiciones dentro del libro y la asignación fuera.
[600ms]
[confident] Asigna la iniciativa a un ámbito para evaluar las reglas juntas. Agrupar definiciones y elegir dónde se aplican son operaciones distintas.

## Step 5 · Label the receipt, then monitor spending

[calm] Papá puede comprar la consola, pero Contoso necesita saber a quién corresponde el coste y cuándo aumenta el gasto.
[600ms]
Una etiqueta de propietario ayuda a atribuirlo. El presupuesto del ejemplo avisa al ochenta por ciento; no impide la compra ni apaga recursos.
[600ms]
[confident] La evaluación del presupuesto no es instantánea y las etiquetas no se heredan automáticamente.

## Step 6 · Protect an existing resource

[calm] La caldera representa un recurso existente que no debe cambiar por accidente. Un bloqueo ReadOnly impide actualizaciones y eliminación del plano de control, incluso para un Owner mientras siga aplicado.
[600ms]
CanNotDelete impide eliminar, pero permite actualizar.
[600ms]
[confident] Estos bloqueos no protegen el plano de datos. Una persona autorizada puede quitarlos: son una protección contra cambios, no una barrera imposible de abrir.

## Step 7 · Keyrings, rules, locks — All in One

[calm] Compara los controles. Los roles conceden acciones; las directivas evalúan reglas de recursos; los bloqueos restringen cambios sobre recursos existentes.
[600ms]
Las etiquetas identifican responsabilidades y los presupuestos avisan del gasto. Un presupuesto no es un corte de consumo.
[600ms]
[confident] Elige cada control para la tarea que realmente cumple. Ninguno sustituye a los demás.

## Step 8 · How it really looks in Azure

[confident] El último diagrama muestra definiciones reutilizables agrupadas en una iniciativa del grupo de administración de Contoso.
[600ms]
Una asignación alcanza ambas suscripciones. Otra se dirige a un único grupo de recursos para añadir allí un requisito más estricto.
[600ms]
[confident] Las definiciones describen las reglas; las asignaciones eligen el ámbito. Así gobiernas el entorno sin confundir identidad, permisos y alertas de costes.
