# Narrator Script — GitHub · Guardrails and Autonomy Levels for Agents

**Source animation:** [AgentGuardrailsAndAutonomy.html](../../../journeys/GitHub/AgentGuardrailsAndAutonomy.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-600>
- <https://learn.microsoft.com/azure/machine-learning/concept-responsible-ai>

---

## Step 1 · Fast and safe

[calm] Todo equipo que trabaja con agentes quiere velocidad y seguridad al mismo tiempo. Las barreras de protección son la manera de lograr las dos.
[600ms]
[concerned] Sin controles, un solo cambio malo llega a producción. Con una persona en cada paso, el trabajo simplemente se queda esperando.
[600ms]
[confident] La meta de Contoso Delivery es consultar a una persona solo donde eso realmente reduce el riesgo.

## Step 2 · Classify actions by risk

[curious] Antes de decidir cuánta libertad darle a un agente, clasifica cada acción según el daño que podría causar.
[600ms]
[calm] Hazte tres preguntas. ¿Podría romper la entrega o un servicio? ¿Podría exponer datos o cambiar quién tiene acceso? ¿Podría violar una norma o una política?
[600ms]
[serious] La calificación más alta de las tres define el riesgo general. Estas calificaciones son ejemplos, y cada equipo califica las suyas.

## Step 3 · Autonomy levels

[calm] Piensa en la autonomía como una perilla. Con cada paso hacia arriba, el agente hace más y la persona hace menos.
[600ms]
[confident] En el nivel uno, el agente sugiere y una persona hace el cambio. En el nivel dos, el agente pregunta antes de actuar.
[600ms]
[reflective] En los niveles tres y cuatro, una persona revisa después, o el agente actúa solo. Es una escalera para enseñar, no una lista oficial.

## Step 4 · Match the level to the risk

[curious] Ahora elige el nivel que le corresponde a cada riesgo. Escoge una acción aquí y mira cómo aparece su nivel.
[600ms]
[confident] Leer y buscar son de bajo riesgo, así que el agente actúa solo. Editar en una rama es de riesgo medio, así que una persona revisa después.
[600ms]
[serious] Desplegar o gastar requiere aprobación previa. Eliminar o cambiar políticas es solo sugerencia. Define un nivel por cada tipo de acción, no uno para todo.

## Step 5 · Actions that need a person

[calm] La mayoría de las acciones se pueden hacer sin una persona.
[600ms]
[serious] Pero algunas no se pueden deshacer, y otras podrían violar una norma de cumplimiento. En esos casos, decide una persona.
[600ms]
[reassuring] Mantener corta esa lista es lo que permite que todo lo demás avance rápido.

## Step 6 · Require authorization

[curious] Ahora pon a una persona en el camino, donde importa. Sigue aquí el recorrido desde el cambio del agente hasta producción.
[600ms]
[confident] Un conjunto de reglas o una protección de rama puede exigir una pull request y aprobaciones. Los propietarios del código deben aprobar los cambios en sus archivos. Y la aprobación de entorno detiene el trabajo de despliegue hasta que los revisores digan que sí.
[600ms]
[reassuring] Todos estos son controles reales de GitHub.

## Step 7 · Block what must not happen

[serious] Hay cambios que nunca deben ocurrir, ni siquiera si los hace un agente. Los conjuntos de reglas los detienen.
[600ms]
[confident] Las reglas pueden exigir una pull request, prohibir los force push y pedir que pasen las verificaciones antes de fusionar. Una verificación de política obligatoria es una verificación de estado que tú escribes para tu propia política.
[600ms]
[reassuring] El agente está sujeto a los mismos conjuntos de reglas que una persona.

## Step 8 · Least privilege for agents

[calm] Dale al agente solo el acceso que necesita su tarea, en el lugar más pequeño posible. Este es un agente de triaje que etiqueta los problemas.
[600ms]
[confident] Pon los permisos del token al mínimo que requiera la tarea, y lista solo las herramientas que el agente debe usar.
[600ms]
[reassuring] Empieza en un solo repositorio, hace push a su propia rama y corre con el firewall activado.

## Step 9 · Responsible AI standards

[curious] Escribe el estándar donde el agente lo lea, por ejemplo en las instrucciones personalizadas del repositorio. Y luego revisa el resultado.
[600ms]
[calm] Los seis principios de Microsoft son equidad, confiabilidad y seguridad, privacidad y seguridad, inclusión, transparencia y responsabilidad.
[600ms]
[serious] Las instrucciones guían al agente, pero lo que lo confirma son las verificaciones y la revisión de una persona.

## Step 10 · Too many approvals

[concerned] Cada solicitud de aprobación cuesta tiempo. Si hay demasiadas, la gente deja de leerlas.
[600ms]
[confident] Reserva las aprobaciones para las acciones costosas o difíciles de deshacer. Quítalas en las acciones seguras y repetibles. En VS Code puedes limitar una aprobación a un solo uso, a una sesión o a siempre.
[600ms]
[serious] Reducir las solicitudes no es lo mismo que permitirlo todo.

## Step 11 · Recap: an autonomy matrix

[calm] Un equipo, una matriz. Cada acción tiene un riesgo, un nivel y una barrera de protección.
[600ms]
[confident] Clasifica y asigna. Luego protege: una persona en los cambios sensibles, bloqueos para lo que rompa las reglas, y privilegio mínimo. Y mantén la velocidad quitando las aprobaciones que no aportan seguridad.
[600ms]
[proud] Con esto cubrimos el área de habilidades de implementar barreras de protección y responsabilidad de la guía de estudio de G H 600.
