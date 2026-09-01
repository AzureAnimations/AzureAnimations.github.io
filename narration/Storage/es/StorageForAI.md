# Guion de narración — Azure Storage · Nivel avanzado · Storage para IA

**Source animation:** `static/v2/Storage/StorageForAI.html`

---

## Step 1 · goal

[confident] Quieres una app de IA que responda a partir de tu propio contenido empresarial — no de lo que el modelo memorizó por casualidad.
[600ms]
[calm] El patrón que hace esto es la generación aumentada por recuperación, o RAG. Alimenta el modelo con tus datos en el momento de la pregunta, así la respuesta se apoya en tus documentos.
[700ms]
[curious] Y todo empieza en el almacenamiento. Sigamos un documento desde un blob hasta una respuesta fundamentada.

## Step 2 · store

[confident] Primero, la fuente de la verdad. Tus documentos, PDF e imágenes aterrizan en Blob Storage.
[600ms]
[calm] Para grandes datos analíticos, recurre a Data Lake Storage Gen 2 — que es Blob Storage con un espacio de nombres jerárquico y permisos a nivel de carpeta.
[700ms]
[reassuring] En cualquier caso, el almacenamiento guarda el contenido bruto del que todo lo demás beberá.

## Step 3 · index

[confident] Ahora hacemos que ese contenido se pueda encontrar. Un indexador de Azure AI Search se conecta directamente a tu contenedor de blobs.
[600ms]
[calm] Trae los archivos y sus metadatos, abre cada documento y extrae el texto de su interior.
[700ms]
[reassuring] Y aún mejor, vigila las marcas de tiempo de los blobs, así que cuando el contenido cambia, solo se vuelve a indexar lo nuevo.

## Step 4 · vectorize

[confident] Aquí está el paso que hace posible la búsqueda con IA. Durante la indexación, la vectorización integrada divide cada documento en fragmentos.
[600ms]
[calm] El fragmentado mantiene cada pieza dentro de los límites de tokens del modelo — y luego un modelo de incrustación convierte cada fragmento en un vector, una lista de números que captura su significado.
[700ms]
[reassuring] Esos vectores viven justo en el índice de búsqueda, listos para coincidir por significado, no solo por palabras clave.

## Step 5 · retrieve

[confident] Momento de la pregunta. La app ejecuta una búsqueda híbrida — vectorial y de palabras clave a la vez — sobre el índice.
[600ms]
[calm] Los vectores encuentran lo semánticamente cercano; las palabras clave capturan los términos exactos. Juntos afloran los fragmentos más relevantes.
[700ms]
[impressed] Esos fragmentos se entregan al modelo para fundamentar su respuesta. Eso es RAG — el modelo responde a partir de tu contenido, y puede citarlo.

## Step 6 · secure

[confident] Ahora la parte que las empresas no pueden saltarse — mantener segura la recuperación.
[600ms]
[calm] Azure AI Search puede ingerir los permisos de cada documento — listas de control de acceso y grupos de Microsoft Entra, incluso etiquetas de confidencialidad de Purview — directamente en el índice.
[700ms]
[reassuring] Eso te da una recuperación consciente de permisos: un agente nunca muestra un documento que quien pregunta no tiene permitido ver.

## Step 7 · recap

[proud] Ahí está el panorama completo: almacena contenido en Blob o Data Lake Storage, deja que un indexador de AI Search lo traiga, fragméntalo e incrústalo con vectorización integrada, recupéralo con búsqueda híbrida, y fundamenta la respuesta del modelo — todo respetando los permisos.
[700ms]
[encouraging] El almacenamiento es la fuente de la verdad; el índice de búsqueda guarda los vectores; y RAG los une en una respuesta en la que puedes confiar.

## Step 8 · spec

[confident] Un poco más a fondo. Piénsalo como tres capas. El almacenamiento es la fuente. Azure AI Search es la capa de recuperación, donde tus vectores viven en campos vectoriales.
[600ms]
[calm] Y el agente se sienta encima — primero busca, luego pide al modelo que responda a partir de lo que volvió.
[700ms]
[reassuring] Mantén los permisos fluyendo del almacenamiento al índice, y cada respuesta sigue siendo fundamentada y segura.
