# Narrator Script — Compute · Functions: Build an API and Deploy It

**Source animation:** [FunctionsApiAndDeploy.html](../../../journeys/Compute/FunctionsApiAndDeploy.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-functions/functions-triggers-bindings>
- <https://learn.microsoft.com/azure/azure-functions/functions-deployment-technologies>

---

## Step 1 · One function, one HTTP endpoint

[calm] Una función es tu código más un trigger, uno solo. El trigger es lo que hace que la función se inicie.
[600ms]
[confident] Dale un HTTP trigger, y una solicitud web inicia tu código. Eso convierte a la función en un endpoint de API.
[600ms]
[curious] Para la aplicación de pedidos de Contoso, la dirección predeterminada es la ruta de la API seguida del nombre de la función.

## Step 2 · HTTP trigger: route, methods and auth

[calm] El trigger define tres cosas. La ruta es la URL que va después de la ruta de la API, y puede incluir parámetros, como un ID.
[600ms]
[confident] Los métodos indican qué verbos HTTP responden; si no los pones, responden todos. El nivel de autorización es anonymous, function o admin.
[600ms]
[serious] Cuando ejecutas en local, no se exige la autorización. Al publicar, sí se exige el nivel.

## Step 3 · Return a status code and JSON

[calm] Ahora tu código arma la respuesta: un código de estado con el que el cliente pueda actuar y un cuerpo JSON que pueda leer.
[600ms]
[confident] Devuelve doscientos si todo sale bien, o cuatro cero cuatro cuando no se encuentra el pedido. Configura el mimetype como application JSON para que los clientes interpreten bien el cuerpo.
[600ms]
[reflective] Si tu función no devuelve nada, el valor predeterminado de HTTP es dos cero cuatro, No Content, con el cuerpo vacío.

## Step 4 · Bindings: Cosmos DB in, Service Bus out

[curious] Los bindings conectan la función con otros servicios sin código de cliente. Haz clic en cada salto para seguir los datos.
[600ms]
[confident] Aquí, un binding de entrada pasa datos de Cosmos DB antes de que se ejecute tu código, y un binding de salida escribe el resultado en Service Bus por ti.
[600ms]
[reassuring] Los bindings son opcionales. Siempre puedes usar un cliente del Azure SDK en tu código. Un ajuste de conexión nombra el ajuste de la aplicación que indica cómo conectarse.

## Step 5 · Run it locally with Core Tools

[calm] Core Tools ejecuta el runtime de Functions en tu propia máquina.
[600ms]
[confident] Inícialo y tus funciones responden, de forma predeterminada, en el puerto setenta y uno setenta y uno. Llama a la API y corrige los errores antes de desplegar nada.
[600ms]
[reflective] El archivo de configuración local es solo para ejecuciones locales, y de forma predeterminada la autorización no se exige en local.

## Step 6 · Create the function app

[calm] Una aplicación de funciones necesita tres decisiones. ¿Cómo se aloja? ¿Qué runtime ejecuta tu código? ¿Y qué cuenta de almacenamiento guarda su estado?
[600ms]
[confident] Para aplicaciones serverless nuevas se recomienda Flex Consumption. Elige la pila de runtime según el lenguaje y la versión de tu código.
[600ms]
[serious] La cuenta de almacenamiento es obligatoria, porque guarda las claves y el estado. Antes de elegir, revisa la página de hospedaje de Learn para ver la lista actual de planes.

## Step 7 · Deploy: zip, publish and CI

[calm] Tu código normalmente viaja como un paquete zip, y el despliegue zip es la tecnología predeterminada y recomendada para las aplicaciones de funciones.
[600ms]
[confident] Elige la ruta según la etapa. Mientras desarrollas, usa Core Tools, Visual Studio Code o la CLI de Azure.
[600ms]
[determined] Cuando ya importa, pasa a CI y CD, con el Centro de despliegue, GitHub Actions o Azure Pipelines. En Flex Consumption, el despliegue de paquetes es el único método.

## Step 8 · App settings and managed identity

[calm] Los ajustes le dicen a la aplicación dónde está cada cosa. Un ajuste da el nombre de la cuenta, pero no guarda ninguna clave.
[600ms]
[confident] Una identidad administrada demuestra quién es la aplicación, así que no hace falta dejar ningún secreto en los ajustes. Prefiere esa opción; usa Key Vault cuando un servicio no la admita, y deja el secreto compartido como último recurso.
[600ms]
[serious] Concede solo el rol que necesita el binding. El acceso a datos de Cosmos DB usa su propio sistema de roles.

## Step 9 · Slots and safe release

[curious] Una ranura es una segunda copia de la aplicación, con su propia dirección.
[600ms]
[confident] Despliega ahí, prueba y luego intercámbiala a producción. Si algo sale mal, vuelve a intercambiar. Un ajuste de ranura se queda con la ranura durante el intercambio.
[600ms]
[serious] El intercambio calienta primero la ranura de staging, pero no garantiza cero tiempo de inactividad. Flex Consumption hoy no admite ranuras, y en su lugar usa actualizaciones graduales.

## Step 10 · Check it: logs and a test call

[calm] Llama a la API en vivo con curl y la clave de la función, enviada como valor de consulta code o en el encabezado de la clave de la función.
[600ms]
[impressed] Luego busca esa misma llamada en Application Insights, con sus registros, rendimiento y errores. La forma recomendada de ver los logs en tiempo real es Live Metrics.
[600ms]
[proud] Una buena respuesta más un seguimiento visible significan que el lanzamiento funciona. Ese es el objetivo: crear APIs serverless y luego configurar y desplegar aplicaciones de funciones.
