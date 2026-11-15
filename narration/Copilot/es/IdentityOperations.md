# Narrator Script — Microsoft 365 Copilot · Identity Operations

**Source animation:** [IdentityOperations.html](../../../journeys/Copilot/IdentityOperations.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/fundamentals/what-is-entra>
- <https://learn.microsoft.com/entra/identity/conditional-access/overview>
- <https://learn.microsoft.com/entra/identity/monitoring-health/concept-sign-ins>
- <https://learn.microsoft.com/entra/fundamentals/concept-learn-about-groups>

---

## Step 1 · Which Entra tool do I open?

[calm] El servicio de ayuda de Priya recibe tickets de inicio de sesión y de seguridad todo el día.
[600ms]
[curious] Detrás de cada ticket hay una herramienta de Microsoft Entra diferente, ¿cuál abres?
[600ms]
[confident] Esta lección cubre las habilidades básicas de seguridad en el examen A B 900. Conceptos como MFA y los tenants están presentes en el camino de Identidad, así que aquí nos centramos en qué abre y cuándo abre un administrador.

## Step 2 · Microsoft Entra ID: the front door

[calm] Cada inquilino Microsoft 365 ya es un inquilino Microsoft Entra.
[600ms]
[confident] Entra ID es la puerta principal. Comprueba quién está entrando, aplica tus normas y registra lo que ha pasado.
[600ms]
[curious] Las fichas que ves son las características que abriremos una a una.

## Step 3 · Pick the object that fits the job

[curious] Un usuario es una sola identidad, y un grupo gestiona muchas identidades como una sola.
[600ms]
[confident] Mantén la configuración personal del usuario y da acceso a un grupo.
[600ms]
[reassuring] Los grupos de seguridad gestionan el acceso a recursos compartidos, Microsoft 365 grupos apoyan la colaboración, y una licencia, rol o política puede ir a un grupo en lugar de a cada persona.

## Step 4 · One sign-in, many apps

[calm] Con el inicio de sesión único, Alex inicia sesión una vez con las credenciales de trabajo y abre todas las aplicaciones que le han asignado.
[600ms]
[confident] Entra ID es el proveedor de identidad. La app Alex envía allí, Entra ID lo verifica y la app concede acceso.
[600ms]
[reassuring] Los administradores gestionan todo ese acceso desde un solo lugar.

## Step 5 · Conditional Access: if, then

[curious] El Acceso Condicional funciona con una idea de si, entonces. Entra recopila señales sobre un inicio de sesión, toma una decisión y la hace cumplir.
[600ms]
[confident] La decisión es bloquear el acceso o conceder acceso con controles, y las políticas se ejecutan tras el primer paso de inicio de sesión.
[600ms]
[reassuring] Puedes iniciar una política solo en modo de informe, y la herramienta What If simula un inicio de sesión para mostrar qué políticas se aplicarían.

## Step 6 · Three logs, three questions

[calm] Tres troncos responden a tres preguntas diferentes.
[600ms]
[confident] Los registros de inicio de sesión muestran quién inició sesión y qué ha pasado. Los registros de auditoría muestran quién cambió qué.
[600ms]
[reassuring] Microsoft Purview auditoría sigue la actividad de usuarios y administradores entre servicios. Las entradas no pueden cambiarse ni eliminarse, y los roles que necesitas varían según el registro.

## Step 7 · When a sign-in looks risky

[concerned] A veces un inicio de sesión parece arriesgado. Microsoft Entra ID Protección señala usuarios arriesgados y accesos riesgosos.
[600ms]
[confident] Revisas el riesgo y luego lo solucionas. O el usuario lo arregla, o interviene un administrador.
[600ms]
[serious] Las funciones completas necesitan Entra ID P dos o una licencia Entra Suite, y leer los informes de riesgos requiere al menos el rol de Lector Global.

## Step 8 · Identity Secure Score

[curious] La Puntuación de Seguridad de Identidad es un porcentaje que muestra lo estrictamente que tu inquilino sigue las recomendaciones de seguridad de identidad de Microsoft.
[600ms]
[confident] Una puntuación más alta significa que se cumplen más de ellas, y se recalcula cada veinticuatro horas.
[600ms]
[reflective] Algunas recomendaciones requieren una licencia pagada, y un riesgo que aceptas no te da puntos. Los porcentajes aquí son solo un ejemplo.

## Step 9 · Admin power on demand

[curious] ¿Por qué dejar el poder de administrador encendido todo el día? La Gestión de Identidad Privilegiada hace que los roles sean elegibles en lugar de estar siempre activos.
[600ms]
[confident] Mei activa un rol solo cuando lo necesita, y el acceso expira.
[600ms]
[reassuring] Puede requerir MFA, pedir una justificación, enviar notificaciones, realizar revisiones de acceso y mantener un historial de auditoría.

## Step 10 · Two objects for every app

[calm] Cada app tiene dos objetos. El registro de una app es el plano, que se guarda en el inquilino principal de la app.
[600ms]
[confident] Una aplicación empresarial es su instancia en tu tenant, y ahí es donde gestionas quién puede usarla.
[600ms]
[reassuring] Registrar una app crea tanto un objeto de aplicación como un principal de servicio.

## Step 11 · Which tool do I open?

[curious] Ahora te toca a ti. Elige un síntoma de la cola del servicio de ayuda.
[600ms]
[confident] La herramienta Entra que responde se ilumina, junto con dónde buscar.
[600ms]
[reflective] Algunos síntomas necesitan dos herramientas, y los nombres cambian con el tiempo, así que confirma los caminos en Microsoft Learn.

## Step 12 · Know the tool, fix the problem

[calm] Compara el síntoma con la herramienta Entra y el ticket será más fácil de resolver.
[600ms]
[confident] Luego te comparas con las habilidades A B 900 medidas y la formación oficial de Microsoft Learn.
[600ms]
[proud] Lee siempre la guía de estudio actual, porque las habilidades medidas cambian con el tiempo.
