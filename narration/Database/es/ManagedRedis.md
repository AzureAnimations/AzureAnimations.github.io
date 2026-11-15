# Narrator Script — Database · Azure Managed Redis for AI Apps

**Source animation:** [ManagedRedis.html](../../../journeys/Database/ManagedRedis.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/redis/overview>
- <https://learn.microsoft.com/azure/redis/tutorial-semantic-cache>
- <https://learn.microsoft.com/azure/redis/overview-vector-similarity>
- <https://learn.microsoft.com/azure/redis/entra-for-authentication>

---

## Step 1 · Why an AI app needs a cache

[calm] El asistente de soporte de Contoso responde a las mismas preguntas todo el día.
[600ms]
[curious] Y cada repetición se paga dos veces: una por la llamada al modelo y otra por ir a la base de datos.
[600ms]
[confident] Contoso y el asistente son ficticios. La idea es que Redis guarda en memoria el trabajo que, si no, tendrías que repetir.

## Step 2 · Azure Managed Redis

[calm] Azure Managed Redis es un almacén de datos en memoria que administra Microsoft, construido sobre Redis Enterprise.
[600ms]
[confident] Eliges un nivel según cómo se equilibran la memoria y el cómputo para tu carga de trabajo.
[600ms]
[reassuring] Los tamaños y los precios cambian, así que consulta las páginas oficiales de resumen y de precios en vez de memorizar cifras.

## Step 3 · Cache-aside, one level deeper

[calm] Con cache-aside, la app es la dueña de la caché. Al leer, busca primero en Redis.
[600ms]
[confident] Si no encuentra el dato, va a la base de datos y guarda el resultado. Al escribir, actualiza la base de datos y luego corrige la caché.
[600ms]
[curious] Este patrón se presentó en la lección de arquitectos sobre APIs y caché. Aquí profundizamos en los comandos de Redis que lo hacen posible.

## Step 4 · Set it, read it, let it expire

[curious] El valor más simple de Redis es una cadena. La escribes con un tiempo de vida y luego la lees.
[600ms]
[confident] La opción EX define el TTL en segundos al escribir. TTL te dice cuántos segundos quedan, y EXPIRE lo cambia más adelante.
[600ms]
[reassuring] Cuando se acaba el tiempo, la clave se borra sola. Así se limpian las claves viejas antes de que la falta de memoria obligue a hacerlo.

## Step 5 · Three ways to retire stale data

[serious] Una copia en caché puede volverse obsoleta, así que decide cómo sale de la caché.
[600ms]
[confident] Puede salir cuando escribes, cuando se acaba el tiempo o cuando aparece una versión nueva.
[600ms]
[calm] Versionar las claves, por versión de los datos, del modelo o del prompt, también es la forma en que las cachés semánticas evitan reutilizar una respuesta desactualizada.

## Step 6 · More than strings

[curious] Redis es un servidor de estructuras de datos, no solo un lugar para guardar cadenas.
[600ms]
[confident] Elige la estructura que se ajuste a la forma de tus datos y a lo que necesitas hacer. Estas son las seis estructuras clásicas.
[600ms]
[calm] Las imágenes están simplificadas. Redis también tiene JSON, bitmaps, series temporales y más.

## Step 7 · Expire by clock, evict by memory

[encouraging] Es hora de probarlo. Agrega claves con distintos tiempos de vida y luego llena la memoria.
[600ms]
[confident] La caducidad elimina una clave cuando termina su TTL. La expulsión elimina una cuando la memoria se llena.
[600ms]
[reflective] Es una simulación, con claves ficticias y solo ocho espacios. Azure Managed Redis usa por defecto la política volatile LRU.

## Step 8 · Vectors in Redis: index first

[curious] Para buscar por significado, guarda cada incrustación en un hash, justo al lado de sus metadatos.
[600ms]
[confident] Luego indexa el campo vectorial, y Redis ya puede buscar por significado.
[600ms]
[serious] La búsqueda vectorial usa el módulo RediSearch. Actívalo al crear la caché, porque no se pueden agregar módulos a una instancia existente.

## Step 9 · Nearest by meaning, then filtered

[curious] Un vector de consulta pide los K elementos más cercanos: los vecinos más próximos por significado.
[600ms]
[confident] Agrega un filtro de metadatos, y la misma búsqueda pasa a ser híbrida.
[600ms]
[calm] El mapa es una ilustración simple con artículos de soporte ficticios. Las incrustaciones reales tienen muchísimas más dimensiones, y estas distancias son inventadas.

## Step 10 · Semantic caching for LLM answers

[curious] Ahora, lo que ganan las apps de IA. Cuando un prompt nuevo significa casi lo mismo que uno anterior, devuelves la respuesta guardada.
[600ms]
[impressed] Así se evita por completo la llamada al modelo, y se ahorra tiempo y costo.
[600ms]
[calm] Es un patrón de la aplicación o del gateway, no una función aparte de Redis. Redis guarda los prompts y hace la búsqueda, y Azure API Management puede ejecutar los pasos como políticas.

## Step 11 · Connect without secrets

[serious] ¿Cómo debería conectarse tu app? Mejor Microsoft Entra ID que las claves de acceso.
[600ms]
[confident] Deja TLS activado, porque la autenticación con Entra solo funciona en conexiones TLS, y limita la ruta de red hacia la caché.
[600ms]
[reassuring] Las claves de acceso siguen disponibles, pero son secretos que tienes que guardar y rotar.

## Step 12 · Is the cache earning its keep?

[calm] Una caché solo vale la pena si da resultados. Fíjate en dos cosas: con qué frecuencia las consultas encuentran el dato, y qué tan llena está la memoria.
[600ms]
[concerned] Pon una alerta antes de que se acabe la memoria, no después.
[600ms]
[reflective] Los nombres de las métricas vienen de la referencia de monitoreo. El gráfico y los números de aquí son solo ilustrativos.

## Step 13 · Redis for AI apps, all in one

[calm] Vamos a cerrar. Mantén en memoria el trabajo que se repite, dale un tiempo de vida y búscalo por significado.
[600ms]
[confident] Eso cubre la caché, la expiración, los vectores, la caché semántica, el acceso seguro y el monitoreo.
[600ms]
[proud] Esta es la habilidad de A I 200, Integrar Azure Managed Redis en soluciones de IA. Está en el dominio de gestión de datos, del veinticinco al treinta por ciento del examen.
