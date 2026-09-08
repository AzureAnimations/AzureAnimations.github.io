# Narrator Script — GitHub · Contoso Delivery · Shift Left · ES

**Source animation:** `journeys/GitHub/ShipIt.html`

Los encabezados `## Step N` se mantienen en inglés a propósito (índice del generador y de las leyendas).

---

## Step 1 · What You Have, and What Is Missing

[confident] Antes de añadir nada nuevo, mira dónde estás ya.
[500ms]
[calm] Cortaste una rama desde main. Hiciste commits, nombrando la incidencia cada vez. Abriste una pull request y un revisor la aprobó: las paradas uno, dos, tres y cinco de este mapa.
[500ms]
[thoughtful] Pero mira la parada cuatro. Hay un hueco. Nada hasta ahora ha *comprobado* que el código sigue funcionando.
[500ms]
[serious] Un revisor lee el cambio. Un revisor no ejecuta la batería de pruebas, y no va a detectar una dependencia vulnerable tres niveles más abajo.
[500ms]
[bright] Así que esta página añade una puerta automática sobre la propia pull request. Verde, y sigue adelante. Rojo, y vuelve para un arreglo.
[500ms]
[reassuring] Y fíjate dónde está: *antes* de la fusión. Cuando un cambio llega a main, todos lo descargan, y un fallo pequeño se convierte en la tarde de todo el mundo.

## Step 2 · The Later You Find It, the More It Costs

[confident] Coge un fallo, o una vulnerabilidad: se comportan igual.
[500ms]
[bright] Detectarlo en tu portátil no cuesta casi nada. Detectarlo en la pull request cuesta un ciclo de revisión. Detectarlo después de fusionar y estarás desenredándolo del trabajo de otros. Detectarlo en producción, y el coste está en otra liga.
[500ms]
[thoughtful] Así que desplaza a la izquierda. Y sé preciso: no es "probar más", es probar *antes*, y se aplica a la seguridad tanto como a la corrección.

## Step 3 · What the Pipeline Does — and Why You Want One

[confident] ¿Qué se ejecuta en esa puerta? Cuatro etapas, en orden fijo.
[400ms]
[calm] Source: un push o una pull request inicia la ejecución. Build: se restauran las dependencias y se compila la aplicación igual que se compilará para producción. Test: se ejecutan las pruebas unitarias. Y Scan: CodeQL lee el código y Dependabot revisa los paquetes.
[500ms]
[bright] Deploy queda al final, en línea discontinua: eso pertenece a la página siguiente. Todo esto ocurre *antes* de la fusión.
[500ms]
[serious] ¿Y por qué molestarse, si podrías ejecutar las cuatro a mano? Porque una persona se olvida del paso cuatro un viernes, y porque una persona puede decidir, solo por esta vez, saltárselo.
[500ms]
[reassuring] Un archivo de flujo de trabajo no hace ninguna de las dos cosas. Los mismos pasos, siempre, y la protección de rama retiene la fusión hasta que vuelven en verde.
[500ms]
[thoughtful] Una última cosa: Build, Test y Scan necesitan un ordenador de verdad. ¿Quién lo pone?

## Step 4 · The Machine That Actually Runs It

[confident] Un runner. Un runner es simplemente la máquina donde se ejecuta tu trabajo.
[500ms]
[calm] Normalmente dejas que lo ponga GitHub: pides ubuntu, windows o macos, y recibes una máquina virtual limpia para ese trabajo, creada para él y destruida al terminar.
[500ms]
[thoughtful] Por eso "funciona en mi portátil" y "pasa en CI" son afirmaciones distintas. Tu portátil tiene años de historia. El runner no tiene ninguna.
[500ms]
[calm] Se alquila por minutos. Linux es lo más barato, Windows casi el doble, y un minuto de macOS unas diez veces uno de Linux; gratis en repositorios públicos.
[500ms]
[serious] ¿Necesitas una GPU, o una ruta a tu red privada? Aloja el runner tú mismo. Sin factura por minuto, pero lo parcheas tú, lo aseguras tú y limpias lo que dejó el trabajo anterior.

## Step 5 · What a Pipeline Actually Is

[confident] Una tubería es solo un archivo YAML bajo punto github, workflows. Tres cosas la definen.
[500ms]
[bright] El disparador — cuándo se ejecuta: un push, una pull request, una programación. El runner — dónde se ejecuta. Y el trabajo — qué ejecuta: pasos en orden, descargar el código, preparar Node, instalar, probar. Un fallo detiene el trabajo.
[500ms]
[thoughtful] Y las dos letras que la gente confunde: CI demuestra que el cambio es bueno. CD publica el cambio ya demostrado. La misma tubería, continuada.

## Step 6 · Tests That Run Themselves

[confident] La primera comprobación. El flujo de CI se ejecuta en cada push y cada pull request: instalar dependencias, ejecutar las pruebas.
[500ms]
[bright] En el backend: que una respuesta meteorológica se interpreta bien, y qué pasa cuando el proveedor falla. En el frontend: que una tarjeta de ciudad se dibuja, y que al pulsarla se navega.
[500ms]
[serious] Esa prueba de fallo del proveedor es la que se gana el sueldo. Azure Maps *estará* caído algún día, y Contoso necesita saber ya cómo se comporta la aplicación.

## Step 7 · Let GitHub Read the Code for You

[confident] Las pruebas demuestran que el código hace lo que esperabas. No pueden decirte que es seguro.
[500ms]
[calm] Así que un segundo flujo ejecuta CodeQL, en cada pull request y otra vez cada semana. Busca inyecciones y rutas de entrada inseguras, secretos subidos por accidente, flujos de datos peligrosos hacia la llamada al proveedor.
[500ms]
[thoughtful] Lo que encuentre se plantea en la pull request, antes de que lo lea una persona. Seguridad desplazada a la izquierda: el análisis ocurre mientras el cambio todavía es una propuesta.

## Step 8 · Keep the Dependencies Honest

[confident] Tercera comprobación. La mayoría de las vulnerabilidades no llegan en el código que escribió tu equipo: llegan en paquetes.
[500ms]
[calm] Así que Dependabot vigila los manifiestos y abre una pull request cada vez que algo hay que subir de versión.
[500ms]
[bright] Fíjate en la forma: la actualización llega *como pull request*, así que pasa las mismas pruebas y el mismo análisis que cualquier cambio humano. Nada se salta la puerta, ni siquiera un arreglo de seguridad.

## Step 9 · Where Secrets Are Allowed to Live

[serious] Una cosa que la tubería necesita y que nunca debe estar en el repositorio: las credenciales.
[500ms]
[calm] Ni la clave de Azure Maps. Ni un secreto de cliente. Ni un archivo punto env subido solo por ahora, porque "solo por ahora" es como acaba en el historial para siempre.
[500ms]
[confident] Van en Actions secrets: cifrados, y de solo escritura; una vez guardado no puedes volver a leerlo, solo reemplazarlo. Si un paso intenta imprimirlo, GitHub lo enmascara.
[500ms]
[thoughtful] Es la regla de la primera explicación — la clave de Azure Maps se queda en el servidor — aplicada ahora a la tubería.

## Step 10 · Every Change Arrives Already Proven

[warm] Y la mitad izquierda está lista.
[500ms]
[calm] Las comprobaciones se han movido todo lo posible a la izquierda. Pruebas, análisis de seguridad y actualizaciones de dependencias se ejecutan sobre la pull request, en un runner limpio, con secretos que nunca tocan el código.
[500ms]
[confident] Eso es la integración continua, terminada. Siguiente: la entrega continua, empaquetar este cambio y llevarlo a Azure con seguridad.
