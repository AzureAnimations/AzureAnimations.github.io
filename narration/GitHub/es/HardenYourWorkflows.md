# Narrator Script — GitHub · Harden Your Workflows: Tokens, Pinning, Injection and Attestations

**Source animation:** [HardenYourWorkflows.html](../../../journeys/GitHub/HardenYourWorkflows.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-openid-connect>

---

## Step 1 · A pipeline is a path into production

[calm] Un flujo de trabajo ejecuta código, guarda secretos y puede publicar para tus clientes. Por eso es un camino directo a producción.
[600ms]
[serious] Cualquier texto que alguien externo pueda escribir en él, ya sea en una pull request, en un issue o en una acción de terceros, es una puerta de entrada.
[600ms]
[determined] En esta lección reforzamos, un punto débil a la vez, un flujo de trabajo de lanzamiento de Contoso Weather Shop.

## Step 2 · GITHUB_TOKEN: per run, scoped, short-lived

[calm] GitHub crea un token nuevo para cada trabajo, justo antes de que el trabajo empiece.
[600ms]
[confident] Solo puede acceder al repositorio que contiene el flujo de trabajo, y expira cuando el trabajo termina.
[600ms]
[serious] Cualquier acción puede leerlo desde el contexto del token de github, aunque tú nunca se lo pases. Por eso conviene limitar lo que puede hacer.

## Step 3 · Least privilege with permissions

[calm] Usa la clave de permisos para darle al token solo lo que el trabajo necesita.
[600ms]
[confident] Un buen hábito es dejar el token en solo lectura por defecto y subirle los permisos solo en los trabajos que necesiten más. Si listas algún permiso, todos los que no incluyas quedan en ninguno.
[600ms]
[serious] Un token de acceso personal es otra cosa: es un secreto guardado y ligado a una persona. Úsalo solo cuando el token de GitHub no alcance para el trabajo.

## Step 4 · Script injection: untrusted input in run:

[curious] Así es como ocurre un ataque. GitHub reemplaza la expresión por su valor antes de que arranque el shell.
[600ms]
[serious] Si un atacante escribió ese valor, pasa a ser parte del script. Hasta un nombre de rama puede llevar sintaxis de shell.
[600ms]
[concerned] Desconfía de los títulos, los cuerpos, los nombres de rama y las etiquetas. Esas son las entradas riesgosas.

## Step 5 · The fix: an environment variable, quoted

[calm] La solución es poner el valor en una variable de entorno y leerlo como dato.
[600ms]
[impressed] Ahora el mismo título malicioso es solo texto, y no se ejecuta nada extra.
[600ms]
[confident] Pon la variable entre comillas dobles en el shell, o pasa el valor a una acción como entrada.

## Step 6 · Trust an action before you run it

[serious] Una sola acción comprometida puede ver los secretos que usa un flujo de trabajo, y puede usar el token para escribir en el repositorio.
[600ms]
[confident] Por eso revisa quién la escribió, busca la insignia de creador verificado y comprueba que los secretos nunca lleguen a hosts que no esperabas.
[600ms]
[calm] Después limita lo que se permite: las acciones creadas por GitHub, las de creadores verificados del Marketplace, o solo las que tú nombres.

## Step 7 · Pin to a full commit SHA

[calm] Una etiqueta se puede mover después a otro código, si alguien consigue acceso al repositorio de la acción.
[600ms]
[confident] Un SHA de commit completo apunta exactamente a un commit. Comprueba que venga del repositorio de la propia acción y no de un fork.
[600ms]
[determined] Luego haz que se cumpla con una política que exija fijar las acciones a un SHA de commit completo.

## Step 8 · Immutable releases

[curious] Cuando se publica un release inmutable, su etiqueta y sus archivos quedan bloqueados.
[600ms]
[impressed] Nadie puede cambiar a escondidas lo que significa la versión cuatro punto dos punto cero.
[600ms]
[confident] El título y las notas se pueden seguir editando, y se crea automáticamente una atestación del release para que los usuarios puedan verificarlo.

## Step 9 · Environments: a gate before production

[calm] Un entorno puede retener un despliegue hasta que alguien lo apruebe, termine un temporizador y se permita la rama.
[600ms]
[confident] Sus secretos siguen bloqueados hasta que se cumplan esas reglas, y basta con un revisor obligatorio para aprobar.
[600ms]
[serious] Activa Prevent self-review para que nadie pueda aprobar sus propias ejecuciones.

## Step 10 · OIDC: no stored cloud secret

[curious] Con OIDC, el trabajo le pide a GitHub un token de corta duración y se lo presenta a Azure.
[600ms]
[confident] Azure lo valida contra una credencial federada de Microsoft Entra ID que tú configuraste, así que GitHub no guarda ninguna contraseña de la nube.
[600ms]
[serious] El trabajo necesita el permiso de escritura del token id; además, agrega una condición a la confianza para que los repositorios no confiables no puedan pedir tokens.

## Step 11 · Artifact attestations: sign it, verify it

[calm] El build firma una declaración de lo que construyó y de dónde viene.
[600ms]
[confident] Antes de desplegar, verifica esa declaración con la herramienta de línea de comandos de GitHub.
[600ms]
[reflective] Firma lo que publicas, no cada build de prueba. Y recuerda: una atestación vincula el resultado con el código fuente y el build; no demuestra que el código sea seguro.

## Step 12 · Recap: a hardening checklist

[calm] Ocho hábitos que protegen un flujo de trabajo, del token al despliegue.
[600ms]
[confident] Mínimo privilegio para los tokens, texto no confiable a través de una variable de entorno, acciones confiables y permitidas fijadas a un SHA, y releases inmutables.
[600ms]
[proud] Después, puertas en los entornos, OIDC y atestaciones verificadas antes de desplegar. Esa es el área de G H 200 sobre seguridad y optimización de la automatización.
