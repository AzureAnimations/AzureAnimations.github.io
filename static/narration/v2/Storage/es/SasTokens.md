# Guion de narración — Azure Storage · Compártelo (tokens SAS)

**Source animation:** `static/v2/Storage/SasTokens.html`

---

## Step 1 · The Players

[warm] Aquí tienes un problema común. Tienes datos en una cuenta de almacenamiento y alguien necesita solo un contenedor o un blob, por tiempo limitado.
[600ms]
[calm] ¿Cómo lo concedes sin entregar las claves de tu cuenta? Las claves lo desbloquean todo, para siempre, así que compartirlas queda descartado.
[600ms]
[confident] Construyamos la imagen. Sigue las flechas: cada paso conecta la cuenta de la izquierda con el usuario de la derecha. El objetivo: acceso delimitado y temporal.

## Step 2 · The Keys

[confident] Todo empieza con las claves de la cuenta.
[600ms]
[calm] Una cuenta de almacenamiento tiene dos claves, y desbloquean todo, sin caducidad, que es exactamente por lo que nunca las repartes. En su lugar, firman los tokens que crearás.
[600ms]
[reassuring] Dos claves te permiten rotar una mientras la otra mantiene tus aplicaciones en marcha. Y regenerar una clave es como revocarás el acceso más adelante.

## Step 3 · Generate a Token

[confident] Así que, en lugar de la clave, creas una firma de acceso compartido: un token SAS.
[600ms]
[calm] Es una URL, firmada por la cuenta, que apunta exactamente a un contenedor o blob, no a toda la cuenta. Puedes simplemente repartirla.
[600ms]
[reassuring] El token apunta a un único recurso. Comparte la URL, no la clave.

## Step 4 · Inside the Token

[intrigued] Miremos dentro. El token detalla exactamente lo que está permitido.
[600ms]
[calm] Qué permisos —leer, escribir, listar—. La hora de inicio y de caducidad. Y qué direcciones I-P y qué protocolo pueden usarlo —solo HTTPS.
[600ms]
[reassuring] Cambia cualquiera de estos y la firma se rompe, así que el token no puede manipularse.

## Step 5 · The User Gets In

[confident] Ahora entrega el token al usuario.
[600ms]
[calm] Puede llegar al contenedor o blob compartido, pero solo con los derechos que concediste, y solo hasta que caduque.
[600ms]
[reassuring] Nunca se compartió ninguna clave de cuenta, y el acceso termina por sí solo. Ese es el objetivo de una SAS.

## Step 6 · Stored Access Policy

[confident] ¿Necesitas muchos tokens con las mismas reglas? Usa una directiva de acceso almacenado.
[600ms]
[calm] Pon los permisos y la caducidad en una directiva del contenedor, y haz que tus tokens hagan referencia a la directiva en vez de llevar sus propias reglas. Ten en cuenta: esto es solo a nivel de contenedor.
[600ms]
[reassuring] Cambia la directiva una vez y cada token que la referencia se actualiza. También es la forma limpia de revocar todo un conjunto de tokens: simplemente elimina la directiva.

## Step 7 · The Whole Picture

[warm] Así que aquí está SAS, de principio a fin.
[600ms]
[calm] De la cuenta, a las claves, a un token firmado, delimitado y con caducidad, y el usuario llega solo a lo que permitiste. Añade una directiva de acceso almacenado para el control central, y ten claro cómo revocar: regenera la clave para los tokens ad hoc, o elimina la directiva para los basados en directiva.
[600ms]
[encouraging] ¿La práctica recomendada? Prefiere una SAS de delegación de usuario, sobre HTTPS, con privilegio mínimo y una caducidad corta, siempre con un plan de revocación.

## Step 8 · SAS Types & Scope

[confident] Por último, la vista técnica: tres tipos de SAS, y funcionan en los cuatro servicios de almacenamiento, no solo en blobs.
[600ms]
[calm] Una SAS de delegación de usuario se firma con Microsoft Entra ID —la más segura y la recomendación de Microsoft—. Una SAS de servicio se firma con la clave de la cuenta y se limita a un recurso en un servicio. Y una SAS de cuenta, también firmada con la clave de la cuenta, puede abarcar varios servicios.
[600ms]
[reassuring] Las tres cubren Blob, Queue, Table y Files. Las directivas de acceso almacenado se aplican solo a una SAS de servicio, hasta cinco por recurso. En caso de duda, recurre a la delegación de usuario.
