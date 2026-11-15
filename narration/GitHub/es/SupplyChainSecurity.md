# Narrator Script — GitHub · Supply Chain Security: Dependency Graph, Dependabot and Dependency Review

**Source animation:** [SupplyChainSecurity.html](../../../journeys/GitHub/SupplyChainSecurity.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/supply-chain-security>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · Most of your code is somebody else’s code

[calm] Conoce orders-api, de Contoso. Usa un puñado de paquetes que el equipo eligió a propósito.
[600ms]
[curious] Pero cada uno de esos paquetes trae consigo más paquetes, y esos traen otros más. Los que tú elegiste son directos, y los que vienen de acompañantes son transitivos.
[600ms]
[serious] Eso importa, porque una falla en cualquier punto de esa cadena se convierte en una falla de tu app.

## Step 2 · The dependency graph: direct and transitive packages

[confident] GitHub arma el grafo de dependencias a partir de tus archivos de manifiesto y de bloqueo. También puedes enviar datos adicionales con la API de envío de dependencias.
[600ms]
[curious] De cada paquete ves la versión, la licencia y si es directo o transitivo. Con Mostrar rutas ves el camino hasta un paquete transitivo.
[600ms]
[calm] Los paquetes vulnerables salen primero en la lista, así que ves antes los más riesgosos.

## Step 3 · The Advisory Database: how a package becomes an alert

[calm] Los avisos de seguridad llegan a GitHub desde varias fuentes. Todos terminan en la GitHub Advisory Database.
[600ms]
[confident] Solo los avisos revisados generan alertas de Dependabot, y solo cuando coinciden con un paquete de tu grafo. Los avisos sin revisar no generan nada.
[600ms]
[serious] Los avisos de malware son otro tipo de alerta, y se activan por separado.

## Step 4 · Dependabot alerts: severity, EPSS and what to fix first

[curious] Aquí tienes una lista de alertas de Dependabot. La severidad es un buen punto de partida, pero es solo una señal.
[600ms]
[confident] Léela junto con EPSS, que estima la probabilidad de que lo exploten en los próximos treinta días. Luego revisa si el paquete corre en producción y cómo llegó a tu grafo.
[600ms]
[encouraging] Haz clic en una alerta y compáralas. Así decides qué corregir primero.

## Step 5 · Security updates: the pull request Dependabot opens

[calm] Activa las actualizaciones de seguridad de Dependabot, y Dependabot intentará corregir cada alerta que tenga parche.
[600ms]
[impressed] Abre una pull request con la versión mínima que ya trae el parche, y la vincula a la alerta. Fusionas la pull request y la alerta se cierra.
[600ms]
[reflective] Con un paquete transitivo, la pull request puede actualizar en su lugar el paquete padre.

## Step 6 · Version updates: dependabot.yml, schedule, groups, ignore

[confident] Las actualizaciones de versión parten de un solo archivo: el archivo de configuración de Dependabot en tu repositorio.
[600ms]
[calm] Ahí eliges cada cuánto revisa Dependabot, qué actualizaciones se agrupan en una sola pull request y qué paquetes se omiten.
[600ms]
[reflective] Una versión nueva espera primero un periodo de enfriamiento, pero las actualizaciones de seguridad se saltan esa espera. Eso sí, ten cuidado: una regla de ignorar también puede frenar las pull requests de actualización de seguridad de ese paquete.

## Step 7 · Alert rules: auto-dismiss and auto-triage

[curious] ¿Demasiado ruido? Las reglas de triaje automático pueden descartar o posponer alertas por ti, antes de que salga cualquier notificación.
[600ms]
[confident] Empieza con los presets que GitHub selecciona, o escribe reglas personalizadas que coincidan por severidad, paquete, tipo de debilidad y más.
[600ms]
[serious] Ten claro lo que una regla puede esconder. Las alertas descartadas automáticamente todavía se pueden filtrar, revisar y reabrir.

## Step 8 · Dependency Review: stop a bad package before the merge

[calm] Ahora pasamos a la pull request. La revisión de dependencias muestra qué paquetes se añadieron, se eliminaron o se actualizaron.
[600ms]
[confident] Señala vulnerabilidades y licencias conocidas, y la acción de revisión de dependencias puede hacer que la comprobación falle.
[600ms]
[determined] Si haces obligatoria esa comprobación, un paquete malo no se puede fusionar. Para las licencias, usa una lista de permisos o una de denegación, nunca las dos.

## Step 9 · SBOM: export the graph as SPDX

[calm] Un SBOM es una lista de materiales de software: un inventario, legible por máquinas, de aquello de lo que depende tu proyecto.
[600ms]
[confident] GitHub exporta el grafo de dependencias actual en formato SPDX, desde la interfaz, la REST API o GitHub Actions.
[600ms]
[reflective] Incluye versiones, identificadores, licencias y rutas, pero no los proyectos que dependen de ti.

## Step 10 · Who sees alerts, who owns them, and how they are notified

[calm] Los administradores del repositorio y los propietarios de la organización activan las alertas de Dependabot y deciden quién puede verlas.
[600ms]
[confident] Quienes tienen acceso de escritura pueden asignar una alerta a un usuario, a un equipo o a un agente de IA. Para eso se necesita una licencia de Code Security o de Advanced Security.
[600ms]
[curious] El aviso llega por correo, en un resumen semanal, por webhooks y por la REST API.

## Step 11 · Fix many alerts at once

[curious] ¿Y si tienes cientos de alertas? Agrupa las actualizaciones de seguridad y recibirás menos pull requests por cada ecosistema de paquetes.
[600ms]
[confident] También puedes seleccionar muchas alertas, dar un solo motivo y descartarlas todas juntas. O pasarle una alerta a un agente de IA.
[600ms]
[encouraging] Las campañas de seguridad hacen el mismo trabajo a gran escala con las alertas de escaneo de código y de escaneo de secretos.

## Step 12 · Recap: graph, alert, update, review

[calm] Juntemos todo. El grafo te muestra de qué dependes.
[600ms]
[confident] Las alertas te dicen qué es vulnerable, y las actualizaciones traen la solución. La revisión de dependencias evita que entre un riesgo nuevo desde la pull request.
[600ms]
[proud] Ese es el dominio de seguridad de la cadena de suministro de la guía de estudio de G H 500. Practícalo en uno de tus propios repositorios.
