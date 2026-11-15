# Narrator Script · Español (es) — Journey 02 · Azure App Configuration

**Source animation:** `static/v2/Security/AppConfiguration.html`
**Language:** Spanish (es). Traducido del guion maestro en inglés. Las indicaciones de interpretación `[tags]` y las pausas `[NNNms]` se mantienen sin cambios (son direcciones, no se pronuncian). Los títulos de paso se conservan en inglés para el mapeo 1:1.

Un bloque por paso de la animación.

---

## Step 1 · Every service must find the others

[confident] Todos los servicios de Contoso necesitan encontrarse entre sí.
[600ms]
[calm] El Store Front debe conocer la URL de Order API; Order debe llegar al backend, la base de datos y los pagos.
[600ms]
[concerned] Multiplica eso por cada versión y revisión, y cada servicio acaba codificando los extremos de los demás en su propio appsettings.json.
[800ms]
[curious] Una nueva revisión obliga a editar y volver a implementar todo lo que la referencia; entonces, ¿dónde deberían vivir realmente todas estas configuraciones?

## Step 2 · One store for every setting: App Configuration

[confident] En un único almacén para cada configuración: Azure App Configuration.
[600ms]
[calm] Es un almacén administrado para todas las configuraciones y marcas de características de tu aplicación, fuera del código y compartido por cada servicio y revisión.
[600ms]
[impressed] Las apps Twelve-Factor mantienen la configuración fuera del código, y este es precisamente ese almacén externo.
[600ms]
[reassuring] Define un valor una vez, y cada servicio y versión lo lee desde un único lugar.

## Step 3 · Scattered settings become organized key-values

[confident] Dentro, esas configuraciones dispersas se convierten en pares clave-valor organizados.
[600ms]
[calm] Cada extremo y propiedad se convierte en una clave y un valor, con nombres jerárquicos agrupados por un delimitador de dos puntos.
[600ms]
[impressed] Un nombre como Contoso, dos puntos, Order-API, dos puntos, Backend-URL se lee igual que una ruta.
[600ms]
[reassuring] Y puedes consultar todo un grupo de una vez con un prefijo: un espacio de nombres limpio y consultable.

## Step 4 · One key, many labels — versions & environments

[intrigued] Pero ¿qué pasa con los distintos entornos y versiones de la misma configuración?
[800ms]
[confident] Para eso están las etiquetas. Da a la misma clave una etiqueta para crear una variante.
[600ms]
[calm] Contoso mantiene la Backend URL una sola vez, con una etiqueta por entorno y versión: dev, prod, versión dos, staging.
[600ms]
[reassuring] Las etiquetas son la forma integrada de versionar la configuración, y cada app simplemente carga la etiqueta a la que apunta.

## Step 5 · Flags and secret references, by content type

[curious] ¿Estos valores son siempre solo cadenas simples?
[800ms]
[confident] No: App Configuration marca dos tipos de valor especiales.
[600ms]
[calm] Marcas de características que puedes activar en tiempo real, y referencias de Key Vault que apuntan a un secreto sin copiarlo nunca.
[600ms]
[reassuring] Ambas siguen siendo pares clave-valor; un tipo de contenido solo le indica al cliente que evalúe la marca o resuelva el secreto desde Key Vault.

## Step 6 · Consume live: managed identity + dynamic refresh

[confident] Ahora consumámoslo en vivo, de forma segura y sin volver a implementar.
[600ms]
[calm] Las apps leen App Configuration con una identidad administrada, sin ninguna cadena de conexión.
[600ms]
[impressed] Cambia un valor o una marca, y la actualización dinámica lo entrega a la app en ejecución: sin reinicio, sin volver a implementar.
[600ms]
[reassuring] Una clave centinela indica cuándo recargar, así que cada instancia se actualiza de forma segura, sobre la marcha.

## Step 7 · All in one: central, versioned, live configuration

[reflective] Todo en uno, el modelo operativo queda claro.
[600ms]
[proud] Cada servicio de Contoso lee un único almacén de App Configuration —claves jerárquicas, etiquetas de versión, marcas de características y referencias de Key Vault— a través de una identidad administrada, actualizado en vivo.
[600ms]
[confident] La configuración es ahora externa, compartida y versionada.
[600ms]
[optimistic] Y las próximas paradas ajustan aún más el acceso: las identidades administradas obtienen los secretos a demanda, y las credenciales locales desaparecen.
