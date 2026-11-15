# Narrator Script — Security · Custom roles and least privilege in Azure and Microsoft Entra — Azure Security Journey

**Source animation:** [CustomRolesAndLeastPrivilege.html](../../../journeys/Security/CustomRolesAndLeastPrivilege.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/role-based-access-control/custom-roles>
- <https://learn.microsoft.com/azure/role-based-access-control/role-definitions>
- <https://learn.microsoft.com/entra/identity/role-based-access-control/custom-overview>
- <https://learn.microsoft.com/azure/role-based-access-control/rbac-and-directory-admin-roles>

---

## Step 1 · Contributor is too much, Reader is too little

[curious] Te presento a Sam, del soporte técnico de Contoso. Sam necesita ver las máquinas virtuales y reiniciarlas, nada más.
[600ms]
[serious] Reader no puede reiniciar nada. Contributor sí puede reiniciar, pero también puede crear y eliminar casi todo.
[600ms]
[confident] Cuando ningún rol integrado encaja con el trabajo, la solución es un rol personalizado.

## Step 2 · What is inside an Azure role

[calm] Una definición de rol es simplemente una lista de permisos: qué permite, qué resta, a qué datos puede acceder y dónde se puede asignar.
[600ms]
[curious] Aquí está Contributor. Fíjate cómo un comodín permite todo y luego se le resta una lista corta.
[600ms]
[serious] Esa resta no es una denegación. Si otro rol concede la misma acción, la persona igual puede hacerla.

## Step 3 · Build a custom role from a built-in one

[confident] Lo más fácil es empezar clonando el rol integrado más parecido. En el portal también puedes empezar desde cero o desde JSON.
[600ms]
[calm] Recórtalo a lo que Sam necesita, agrega las dos acciones y limita dónde se puede asignar. Con cuatro ediciones tenemos Contoso VM Operator.
[600ms]
[serious] Enumera las acciones de forma explícita siempre que puedas, porque un comodín también concede las acciones que se agreguen en el futuro.

## Step 4 · Test the role at one scope

[calm] Ahora asigna el rol a Sam en un grupo de recursos, inicia sesión como Sam y pruébalo.
[600ms]
[curious] Debería funcionar donde está asignado y dejar de funcionar en cualquier otro lugar. Una asignación une a una persona, un rol y un alcance, y se propaga hacia todo lo que hay debajo.
[600ms]
[reassuring] La pestaña Comprobar acceso muestra qué puede hacer alguien en un alcance. Si el rol no se comporta bien, actualízalo y vuelve a probar.

## Step 5 · Custom roles in Microsoft Entra ID

[calm] Microsoft Entra también tiene roles personalizados. Sirven para administrar recursos de Entra, como los registros de aplicaciones de tu tenant.
[600ms]
[curious] Eliges los permisos de una lista predefinida y los asignas a nivel de tenant o de aplicación. Esa lista cubre cosas como aplicaciones empresariales, consentimiento, dispositivos, usuarios y grupos.
[600ms]
[serious] Necesitas una licencia Premium y, como mínimo, el rol Privileged Role Administrator. Y Azure CLI no admite estas asignaciones.

## Step 6 · Azure roles vs Entra roles: which plane?

[curious] Son dos sistemas y dos conjuntos de permisos. Los roles de Azure administran recursos de Azure mediante Azure Resource Manager.
[600ms]
[calm] Los roles de Entra administran recursos de Entra mediante Microsoft Graph. Por defecto, no se solapan, y no puedes mezclar sus permisos en un mismo rol personalizado.
[600ms]
[serious] Una excepción que conviene conocer: un Global Administrator puede activar la administración de acceso a los recursos de Azure y obtener User Access Administrator en todas las suscripciones.

## Step 7 · Find overprivileged assignments

[calm] Empieza por quién tiene más poder: propietarios, alcances amplios y cuentas que nadie usa.
[600ms]
[curious] Contoso enumera sus asignaciones de roles en Control de acceso y busca señales de alerta. La pestaña Privilegiados ayuda a verlo en un alcance.
[600ms]
[confident] Las recomendaciones de Defender for Cloud y las revisiones de acceso de Privileged Identity Management te muestran más excesos.

## Step 8 · Replace broad access with narrow access

[calm] Para corregir una asignación con demasiados privilegios, sigue un orden seguro: primero agrega la asignación estrecha.
[600ms]
[confident] Comprueba que funciona y luego quita la amplia. Así Sam nunca se queda sin acceso.
[600ms]
[reassuring] Las asignaciones se propagan hacia abajo por el alcance, así que al quitar la de la suscripción, Sam pierde todo lo que tenía debajo.

## Step 9 · Make access eligible, not permanent

[curious] Marcus necesita Owner dos veces al mes, no todos los días. Entonces, ¿por qué dejarlo activado todo el tiempo?
[600ms]
[calm] Con Privileged Identity Management es elegible y activa el rol solo cuando lo necesita. La activación puede exigir autenticación multifactor, una justificación o una aprobación.
[600ms]
[reassuring] Dura un tiempo definido y después termina solo.

## Step 10 · Guardrails: locks and deny assignments

[serious] Los roles dicen qué puede hacer una persona. Las barreras de protección dicen qué no debe hacer nadie por accidente.
[600ms]
[calm] Un bloqueo se impone sobre cualquier rol. Puede impedir eliminaciones o cambios, se hereda desde un alcance superior y cubre solo las operaciones del plano de control.
[600ms]
[curious] Una asignación de denegación bloquea acciones aunque un rol las permita. No puedes crear las tuyas, porque las administra Azure.

## Step 11 · Which fix for which finding?

[excited] Llegó el momento de probar tú mismo. Hay seis hallazgos y seis soluciones.
[600ms]
[curious] Elige un hallazgo y luego la solución que lo resuelve: un rol personalizado, una eliminación, una asignación elegible, un bloqueo, un rol personalizado de Entra o una asignación de denegación.
[600ms]
[encouraging] Cada solución se usa una sola vez, y cada una hace un solo trabajo. Relaciona el trabajo con el hallazgo.

## Step 12 · Recap: define narrowly, find excess, remove, repeat

[calm] El privilegio mínimo es un ciclo, no algo que se hace una sola vez. Crea roles que encajen con el trabajo y luego busca lo que sea demasiado amplio.
[600ms]
[confident] Redúcelo o quítalo, agrega barreras de protección y vuelve a revisar.
[600ms]
[proud] Para S C 500, esto cubre la administración de roles personalizados y la corrección de accesos con demasiados privilegios con Azure RBAC. Las listas de habilidades cambian, así que lee la guía de estudio vigente.
