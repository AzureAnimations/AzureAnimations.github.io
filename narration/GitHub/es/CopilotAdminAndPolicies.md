# Narrator Script — GitHub · Administer Copilot: Policies, Audit Logs and the REST API

**Source animation:** [CopilotAdminAndPolicies.html](../../../journeys/GitHub/CopilotAdminAndPolicies.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · Contoso Rolls Out Copilot

[calm] Contoso quiere Copilot para sus doscientos desarrolladores. Ravi, el propietario de la organización, tiene cuatro preguntas que responder antes de darle una licencia a alguien.
[600ms]
[curious] ¿Qué plan? ¿Quién recibe una licencia y qué funciones se activan? ¿Y cómo vamos a supervisar todo eso?
[600ms]
[confident] Esas preguntas son el verdadero trabajo de un administrador de Copilot, y cada una tiene su propio paso en esta lección.

## Step 2 · Plans for Teams

[calm] Copilot Business y Copilot Enterprise son los dos planes para equipos.
[600ms]
[confident] Los dos le dan a una organización administración centralizada y control de políticas. Enterprise suma capacidades de nivel empresarial sobre Business, entre ellas un fondo de créditos más grande.
[600ms]
[reassuring] Free, Pro, Pro Plus y Max son planes individuales para cuentas personales. Los precios cambian, así que consulta la página de planes de GitHub para ver las cifras actuales.

## Step 3 · Assign Seats

[calm] El propietario de la organización decide quién puede usar Copilot, en la configuración de Copilot Access de la organización.
[600ms]
[confident] Puedes dar una licencia a todos los miembros actuales y futuros, o elegir personas y equipos específicos, incluso subiendo un archivo.
[600ms]
[serious] Ojo: la facturación de la licencia empieza cuando se concede el acceso, no cuando se usa por primera vez.

## Step 4 · Feature Policies

[curious] Las políticas activan o desactivan funciones de Copilot para todos los que tienen licencia. Chat, modo agente, línea de comandos, revisión de código y más.
[600ms]
[confident] Cada función tiene un solo interruptor, que define el propietario. La revisión de código necesita que su política esté activada. Las sugerencias que coinciden con código público se pueden permitir o bloquear.
[600ms]
[serious] Y si el propietario de la empresa ya definió una política, la organización no puede cambiarla.

## Step 5 · Availability Across IDEs and GitHub.com

[calm] Una política solo importa donde existe su función. Así que revisa cada política en los lugares donde la gente usa Copilot: los IDE, la nube en GitHub punto com, la línea de comandos y la revisión de código.
[600ms]
[curious] De estos cuatro, el filtro de código público solo funciona en los IDE. Los servidores MCP y la exclusión de contenido funcionan en los cuatro.
[600ms]
[reassuring] La regla que debes recordar: no todas las políticas aplican a todos los lugares.

## Step 6 · Enterprise Over Organization

[calm] Las políticas se definen primero en la empresa. Lo que ahí esté Habilitado o Deshabilitado, una organización no lo puede cambiar.
[600ms]
[curious] La opción Dejar que las organizaciones decidan les pasa la decisión. Prueba las tres configuraciones de la empresa y mira si se cumple lo que quiere Ravi: desactivar la línea de comandos de Copilot en Contoso.
[600ms]
[serious] Si alguien tiene licencias en dos organizaciones, normalmente gana la configuración menos restrictiva, pero las políticas sensibles usan la más restrictiva.

## Step 7 · Content Exclusions at Org Level

[calm] Los propietarios pueden mantener archivos y repositorios que elijan fuera del alcance de Copilot. El mismo control existe en tres niveles.
[600ms]
[confident] Pueden configurarlo los administradores del repositorio, los propietarios de la organización y los propietarios de la empresa. Requiere Copilot Business o Copilot Enterprise.
[600ms]
[reassuring] Cualquier cambio queda en el registro de auditoría, así que hay constancia. La lección de privacidad muestra cómo escribir las reglas.

## Step 8 · The Audit Log

[calm] El registro de auditoría guarda los cambios en tu plan de Copilot, como licencias y políticas.
[600ms]
[curious] Busca eventos de Copilot y abre uno para ver quién hizo qué. También puedes buscar por actor para ver la actividad de los agentes en GitHub.
[600ms]
[serious] No guarda prompts ni otros datos de sesión del cliente, y los eventos se conservan por un tiempo limitado. Para tener un historial a largo plazo, envía el registro a un SIEM.

## Step 9 · Subscriptions by REST API (Preview)

[calm] Los propietarios de la organización pueden agregar y quitar licencias con la API REST.
[600ms]
[confident] Una solicitud POST agrega usuarios, y una solicitud DELETE deja sus licencias con cancelación pendiente.
[600ms]
[serious] Estos endpoints están en versión preliminar pública y pueden cambiar. El token que se ve en pantalla es un marcador de posición. Nunca pegues un token real en el código ni en diapositivas.

## Step 10 · Billing and Usage

[calm] Hay dos medidores que corren en paralelo. Las licencias se facturan a la organización o empresa que las asigna, en cada ciclo mensual.
[600ms]
[curious] Los créditos de IA son distintos. El chat, la línea de comandos, el agente en la nube y más consumen de un fondo compartido a medida que la gente usa Copilot.
[600ms]
[confident] Los presupuestos te permiten limitar el gasto por usuario, centro de costos, organización o empresa. Este paso muestra el mecanismo, no los precios.

## Step 11 · Recap: The Admin’s Weekly Checklist

[calm] Administrar Copilot es una rutina. Revisa las licencias: quién tiene una y quién realmente la usa.
[600ms]
[confident] Revisa las políticas, primero las de la empresa y luego las de la organización. Y después revisa los registros: el de auditoría y la facturación.
[600ms]
[proud] Con eso cubrimos las habilidades de G H 300 para gestionar la configuración y las políticas de toda la organización. Toma la lista como apoyo para estudiar.
