# Narrator Script — GitHub · Security Administration: Roll It Out Across an Organisation

**Source animation:** [SecurityAdministration.html](../../../journeys/GitHub/SecurityAdministration.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/securing-your-organization>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · Fifty Repositories, No Consistent Setup

[calm] Contoso tiene cincuenta repositorios, y cada equipo configuró la seguridad a su manera.
[600ms]
[concerned] Unos están cubiertos y otros no. Eso pasa cuando cada equipo activa las funciones a mano, y Ravi no puede decir cuál es cuál.
[600ms]
[determined] Necesita un despliegue que funcione en todos lados.

## Step 2 · Enterprise, Organisation, Repository

[calm] La configuración de seguridad vive en tres niveles. La empresa tiene sus páginas de Configuración y Políticas, que llegan a todas las organizaciones.
[600ms]
[confident] La organización tiene Configuraciones, ajustes globales y valores predeterminados. Un repositorio tiene sus propios ajustes de Advanced Security, solo para ese repositorio.
[600ms]
[serious] Recuerda que un nivel superior puede imponer un ajuste, y entonces el nivel de abajo ya no puede cambiarlo.

## Step 3 · Enterprise Cloud and Enterprise Server

[curious] GitHub Enterprise Cloud y GitHub Enterprise Server usan las mismas funciones de seguridad, pero se activan en lugares distintos.
[600ms]
[confident] En Enterprise Cloud, se hace en los ajustes y políticas de la empresa en github.com. Un Server autoalojado necesita una licencia, la Consola de Gestión y GitHub Actions.
[600ms]
[reassuring] Las configuraciones, los conjuntos de reglas y la REST API son iguales en ambos. Algunas opciones llegan en una versión posterior de Server.

## Step 4 · Security Configurations: One Named Bundle

[confident] Una configuración de seguridad es un paquete con nombre de ajustes de habilitación. La creas una vez y luego la aplicas a cualquier grupo de repositorios.
[600ms]
[curious] Cada ajuste puede estar habilitado, deshabilitado o sin definir. Sin definir deja lo que el repositorio tenga hoy.
[600ms]
[encouraging] Los grupos que necesitan otra protección pueden tener cada uno su propia configuración.

## Step 5 · Defaults for New Repositories, and Inheritance

[calm] Elige una configuración predeterminada para que los repositorios nuevos nazcan protegidos. Solo se aplica a repositorios nuevos, no a los transferidos.
[600ms]
[confident] Un repositorio asociado hereda los ajustes. Prueba el interruptor. Sin imposición, un administrador del repositorio puede cambiar un ajuste y el estado pasa a Eliminado.
[600ms]
[serious] Con imposición, el ajuste queda bloqueado y el estado es Aplicado.

## Step 6 · Enable All Three Suites in Bulk

[calm] Ahora aplícala en bloque. Selecciona los repositorios, o selecciona todo lo que coincida con un filtro.
[600ms]
[confident] Elige la configuración y haz clic en Aplicar. Secret Protection, la seguridad de la cadena de suministro y Code Security se activan juntas.
[600ms]
[reassuring] Cada repositorio muestra entonces el estado de su configuración, para que revises el resultado. También se incluyen los repositorios archivados.

## Step 7 · Default CodeQL Setup or an Approved Workflow

[confident] La configuración predeterminada es la vía más rápida. No necesita archivo de flujo de trabajo, y GitHub elige los lenguajes.
[600ms]
[curious] Elige la configuración avanzada solo cuando necesites tu propio flujo de trabajo, con builds, una matriz o un horario.
[600ms]
[calm] A gran escala, aprueba una versión de ese flujo de trabajo y despliégala en todo un grupo de repositorios.

## Step 8 · Policies and Rulesets: Enterprise and Organisation

[calm] Una política decide quién puede activar las funciones. Un conjunto de reglas decide qué debe cumplirse antes de fusionar el código.
[600ms]
[confident] Los dos pueden abarcar muchas organizaciones a la vez. Los propietarios de la organización y los responsables de seguridad siempre pueden activar funciones, diga lo que diga la política.
[600ms]
[encouraging] Para un despliegue seguro, empieza el conjunto de reglas en Evaluar, mira su impacto y luego pásalo a Activo. Una lista de bypass cubre las excepciones.

## Step 9 · Roles: Administrator, Security Manager, Developer

[calm] Dale a cada persona el menor acceso con el que pueda hacer su trabajo.
[600ms]
[confident] Los administradores definen las reglas. Los responsables de seguridad manejan las funciones y alertas de seguridad en toda la organización. Los desarrolladores trabajan en el repositorio y corrigen las alertas.
[600ms]
[reflective] El rol de responsable de seguridad pertenece a la organización, y un propietario puede dárselo a un miembro o a un equipo.

## Step 10 · Who Can Dismiss or Reopen an Alert

[calm] Con acceso de Lectura o Triaje no se pueden descartar alertas. Con Escritura, Mantenimiento y Administración, sí.
[600ms]
[curious] ¿Quieres un segundo par de ojos? Activa la opción de impedir descartes directos de alertas, y cada descarte necesitará la aprobación de un revisor.
[600ms]
[confident] Ese ajuste está en la configuración de seguridad, uno para el escaneo de código, otro para el escaneo de secretos y otro para Dependabot.

## Step 11 · Automate with the REST API and the CLI

[confident] Todo lo que haces con clics en las páginas de configuración se puede automatizar con scripts. El comando api de GitHub CLI llama a la REST API por ti.
[600ms]
[calm] Creas una configuración, la aplicas a los repositorios y defines los valores predeterminados de los nuevos, cada paso con su propia llamada.
[600ms]
[serious] Si un ajuste está impuesto, una llamada a la API que intente cambiarlo parece funcionar, pero no cambia nada. Así que siempre vuelve a leer el estado.

## Step 12 · Recap: A Rollout Checklist

[calm] Sigue la lista de arriba abajo. Elige el nivel, arma el paquete, define el predeterminado y aplícalo en bloque.
[600ms]
[confident] Luego elige la configuración de CodeQL, y gobierna con políticas, conjuntos de reglas, roles y reglas de descarte.
[600ms]
[proud] Termina automatizando con la REST API. Ese es el dominio de administración de seguridad de la guía de estudio de G H 500.
