# Guion de narración - Identidad y seguridad

**Source animation:** journeys/Fundamentals/IdentityAndSecurity.html
**Script status:** Authored voiceover.
**Language:** Español

Las indicaciones entre corchetes no se pronuncian. Las pausas van en líneas separadas. Un bloque por paso de la animación.
<!-- Sources: https://learn.microsoft.com/azure/role-based-access-control/overview ; https://learn.microsoft.com/security/zero-trust/zero-trust-overview ; https://learn.microsoft.com/azure/security/fundamentals/management-monitoring-overview -->

## Step 1 · Who are you, and what may you do?

[calm] Maya necesita inspeccionar la tienda de producción, no cambiarla. Antes de permitir el acceso, el sistema debe comprobar quién es y si la acción solicitada está permitida.
[600ms]
[confident] Son preguntas distintas: la autenticación demuestra identidad y la autorización decide el acceso. Iniciar sesión correctamente no permite hacerlo todo.

## Step 2 · The directory holds the identities

[calm] Microsoft Entra ID es el directorio de identidades de Contoso: contiene usuarios, grupos e identidades de aplicaciones. Maya tiene una identidad administrada por la organización, en lugar de una cuenta independiente para cada recurso.
[600ms]
[confident] El directorio ayuda a identificar quién solicita acceso. Los permisos adecuados controlan lo que esa identidad puede hacer sobre los recursos de Azure.

## Step 3 · Prove who is asking

[calm] Maya inicia sesión y demuestra su identidad. La autenticación multifactor combina distintas clases de prueba; el inicio de sesión único reduce las veces que debe identificarse en aplicaciones conectadas.
[600ms]
[confident] También existen métodos sin contraseña. Tras autenticarla, el sistema todavía debe evaluar si Maya puede realizar la acción solicitada.

## Step 4 · Check the sign-in conditions

[calm] No todos los intentos de acceso tienen el mismo contexto. El acceso condicional permite aplicar requisitos según las señales del intento, por ejemplo, exigir autenticación multifactor.
[600ms]
[confident] Cumplir esas condiciones protege la entrada, pero no sustituye los permisos que determinan qué puede hacer Maya una vez concedido el acceso.

## Step 5 · Then allow the action

[calm] Contoso asigna a Maya el rol Lector en el grupo de recursos de producción. El rol define las acciones permitidas y el ámbito indica dónde se aplican.
[600ms]
[confident] Puede inspeccionar recursos sin que ese rol permita modificarlos. Leer su configuración no significa acceder automáticamente a todos los datos de clientes que contienen.

## Step 6 · Same person, different actions

[calm] La identidad de Maya no cambia, pero la acción solicitada importa. Lector permite inspeccionar la configuración; no concede permiso para modificarla.
[600ms]
[confident] El ejemplo supone que ninguna otra asignación le da más acceso. Los permisos pueden sumarse: asignar Lector no anula los que Maya ya tenga por otras vías.

## Step 7 · Assume nothing is safe by default

[calm] Confianza cero significa verificar explícitamente, conceder solo el acceso necesario y asumir que puede producirse una vulneración. Estar dentro de una red no basta para confiar en una solicitud.
[600ms]
[confident] Contoso aplica varias capas de protección para que el fallo de un control no deje expuesta toda la tienda.

## Step 8 · Keep checking the security posture

[calm] La seguridad no termina al asignar permisos. Microsoft Defender for Cloud ayuda a revisar la postura de seguridad de Contoso, encontrar recomendaciones e identificar amenazas mediante las protecciones habilitadas.
[600ms]
[confident] El equipo investiga las alertas y aplica mejoras. Una recomendación señala trabajo que conviene evaluar; no significa que el problema ya esté resuelto.

## Step 9 · Identity and Security - All in One

[calm] Sigue el recorrido de Maya: establecer la identidad, verificar el inicio de sesión, aplicar condiciones y autorizar la acción en el ámbito correcto. Las defensas por capas se mantienen y revisan con el tiempo.
[600ms]
[confident] Contoso ya administra el acceso de forma deliberada. Ahora necesita la misma claridad sobre los costes de la tienda.