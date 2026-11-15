# Guion de narración — Azure Storage · Nivel avanzado · Construir con Storage

**Source animation:** `static/v2/Storage/StorageBuildEvents.html`

---

## Step 1 · goal

[confident] Vamos a construir. Estás escribiendo una app que almacena y sirve blobs — imágenes, documentos, cargas.
[600ms]
[calm] Nos conectaremos al almacenamiento, leeremos y escribiremos, desarrollaremos en local y luego reaccionaremos a los cambios en el momento en que ocurran.
[700ms]
[reassuring] Y lo mejor — el mismo código del SDK que escribes corre en tu portátil y en producción, sin cambios.

## Step 2 · connect

[confident] Empieza con la biblioteca de cliente de Azure Storage, y conéctate sin contraseñas.
[600ms]
[calm] La DefaultAzureCredential recoge tu inicio de sesión de desarrollador en tu máquina, y una identidad administrada en Azure — así no hay cadenas de conexión ni claves en tu código.
[700ms]
[reassuring] Escríbelo una vez, y simplemente funciona en ambos sitios.

## Step 3 · io

[confident] Ahora el trabajo del día a día — leer y escribir blobs. Creas un cliente de blob y llamas a subir o descargar.
[600ms]
[calm] Las llamadas son asíncronas, así que tu app sigue respondiendo mientras se mueven los datos.
[700ms]
[encouraging] Para archivos grandes, apóyate en el streaming y las transferencias en paralelo — la biblioteca se encarga del trabajo pesado.

## Step 4 · azurite

[confident] No necesitas una cuenta en la nube para construir. Azurite es el emulador local de Storage.
[600ms]
[calm] Ejecuta blob, cola y tabla justo en tu máquina, así puedes desarrollar y probar sin conexión — rápido, y gratis.
[700ms]
[reassuring] Incluso viene con las Azure Tools en Visual Studio Code, así que está a un clic.

## Step 5 · events

[confident] Aquí es donde el almacenamiento cobra vida. Cuando se crea o se elimina un blob, Storage genera un evento.
[600ms]
[calm] Event Grid enruta ese evento a un controlador — una Azure Function, una Logic App, un webhook — así tu código reacciona en el instante en que cambian los datos.
[700ms]
[impressed] El desencadenador de blob de Event Grid escala a altas tasas de eventos, así que aguanta incluso bajo una avalancha de cargas.

## Step 6 · feed

[confident] Los eventos son geniales para reaccionar ahora. ¿Pero y si necesitas el historial completo?
[600ms]
[calm] Ese es el registro de cambios — un log duradero, ordenado y de solo lectura de cada cambio en tus blobs.
[700ms]
[reassuring] Míralo así: los eventos son push, el registro de cambios es pull. Uno te avisa en vivo; el otro te deja leer, agrupar y reproducir cada cambio a posteriori.

## Step 7 · recap

[proud] Ahí está el panorama completo: tu app habla con Blob Storage a través del SDK con una identidad administrada, desarrolla en local sobre Azurite, reacciona a los cambios con Event Grid, y los audita o reproduce con el registro de cambios.
[700ms]
[encouraging] SDK más identidad administrada, Azurite para desarrollo, eventos para reaccionar — esa es una app de almacenamiento limpia y moderna.

## Step 8 · spec

[confident] Un poco más a fondo, para quienes construyen. Las bibliotecas de cliente de Azure Storage cubren todos los lenguajes principales — .NET, Java, Python, JavaScript, Go.
[600ms]
[calm] Autentícalas todas con la DefaultAzureCredential, y estás sin contraseñas en todas partes.
[700ms]
[reassuring] Y para reaccionar a los blobs, prefiere el desencadenador de blob de Event Grid sobre el clásico desencadenador por sondeo — se dispara más rápido y escala.
