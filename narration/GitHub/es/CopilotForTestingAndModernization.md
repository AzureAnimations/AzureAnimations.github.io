# Narrator Script — GitHub · Copilot for Tests, Refactoring and Legacy Code

**Source animation:** [CopilotForTestingAndModernization.html](../../../journeys/GitHub/CopilotForTestingAndModernization.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>
- <https://learn.microsoft.com/sql/tools/visual-studio-code-extensions/github-copilot/test-and-mocking-data-generator>

---

## Step 1 · A Function Nobody Dares Touch

[calm] En Contoso, Maya hereda una función de precios con nombres crípticos, sin pruebas y sin documentación.
[600ms]
[concerned] Cambiar aunque sea una línea podría romper el proceso de pago, y nada le avisaría.
[600ms]
[curious] Eso es código heredado. Tener poca documentación y poca cobertura de pruebas es justo lo que hace que la gente le tenga miedo. Veamos cómo ayuda Copilot.

## Step 2 · Understand It First

[calm] Antes de cambiar nada, Maya selecciona el código y le pide a Copilot Chat que lo explique.
[600ms]
[confident] En Visual Studio Code, el comando slash explain hace esto con el editor activo. También le puede contar a Copilot su perfil, por ejemplo, que programa en Python 3, para que la respuesta le sirva mejor.
[600ms]
[serious] Luego revisa cada punto contra el código. La explicación es una pista, no un hecho.

## Step 3 · Generate Unit Tests

[confident] Con el archivo abierto, el comando slash tests redacta pruebas unitarias para el código seleccionado.
[600ms]
[calm] Si dejas abierto un archivo de pruebas existente junto al código, Copilot se adapta mejor a tu framework de pruebas.
[600ms]
[serious] Puede que las pruebas no cubran todos los escenarios. Por eso Maya las ejecuta, lee cada una y agrega lo que falta.

## Step 4 · Edge Cases

[curious] Ahora pregunta qué falta. Valores vacíos, nulos, cero y entradas en el límite.
[600ms]
[confident] Copilot sugiere los casos. El código heredado esconde suposiciones, así que también pregunta qué supone el código y escribe la respuesta.
[600ms]
[reassuring] Cuando el comportamiento no está claro, el equipo decide cuál debe ser la regla. Eso no lo decide Copilot.

## Step 5 · Assertions

[calm] Una aserción débil pasa incluso cuando la respuesta es incorrecta.
[600ms]
[serious] Una prueba que no puede fallar no demuestra nada. Así que lee las aserciones que escribe Copilot, no solo los nombres de las pruebas.
[600ms]
[confident] Pídele que verifique valores exactos y excepciones. Así, un error de verdad pone la prueba en rojo.

## Step 6 · Integration Tests

[calm] Una prueba de integración llama a dos partes juntas, aquí el pago y la aplicación de la promoción.
[600ms]
[curious] Un mock reemplaza al notificador, así que la prueba no necesita una conexión real. Verifica que el notificador se llame una vez, o que no se llame.
[600ms]
[confident] Indica qué mockear y qué verificar. Agrega una segunda prueba para entradas inválidas, y divide las solicitudes grandes en partes pequeñas.

## Step 7 · Refactor Safely

[calm] Ahora Maya refactoriza con las pruebas corriendo. Cambia la versión de abajo para comparar.
[600ms]
[impressed] El código más simple mantiene en verde las mismas cinco pruebas. Un descuido pone dos de ellas en rojo antes de publicarlo.
[600ms]
[reassuring] Las pruebas te permiten cambiar cómo funciona el código sin cambiar lo que hace. Ejecútalas después de cada cambio.

## Step 8 · Document It

[calm] Maya resalta la función y le pide a Copilot un docstring, y luego una sección del README para el código base.
[600ms]
[serious] Después corrige todo lo que no esté exacto según el código.
[600ms]
[optimistic] Una buena documentación ayuda al siguiente lector, y los comentarios y la documentación también ayudan a Copilot a dar mejores sugerencias.

## Step 9 · Sample Data

[curious] ¿Necesitas datos de prueba? Describe la tabla, o pega un ejemplo en JSON, y pide filas simuladas.
[600ms]
[confident] Puedes pedir cierta cantidad de filas e incluir casos límite. El resultado son filas ficticias para llenar una base de datos de prueba.
[600ms]
[serious] Usa siempre valores ficticios, y nunca pegues datos reales de clientes en el prompt.

## Step 10 · Modernize

[calm] Maya le pide a Copilot que reescriba un patrón antiguo en uno actual, como código de Python dos para Python tres, con las pruebas a la mano.
[600ms]
[confident] Los cambios típicos son las importaciones, las instrucciones print y los métodos eliminados.
[600ms]
[serious] No es magia. Espera tener que ajustar según el contexto y las bibliotecas obsoletas, y deja que las pruebas te muestren qué cambió de verdad.

## Step 11 · Security and Performance

[calm] Maya le pide a Copilot riesgos de seguridad, y una versión más rápida.
[600ms]
[concerned] Copilot Chat puede ayudar a detectar problemas comunes como la inyección de SQL, pero no debes depender de él para un análisis de seguridad completo. Las respuestas no son deterministas, así que las tuyas pueden ser distintas.
[600ms]
[determined] Por eso, verifica. Ejecuta las pruebas, ejecuta el escaneo de código y mide la velocidad.

## Step 12 · Recap: Review Every Change

[calm] Copilot explica, redacta borradores y acelera el trabajo. Tú revisas cada cambio, y las pruebas son la evidencia.
[600ms]
[confident] Primero entiende el código. Mientras trabajas, Copilot redacta y tú ejecutas las pruebas. Después, fusiona solo lo que aprueben las pruebas y una persona.
[600ms]
[proud] Para el examen G H 300, esto cubre las pruebas, los casos límite, los datos de muestra, la refactorización, la documentación, la modernización de código heredado, y las sugerencias de seguridad y rendimiento.
