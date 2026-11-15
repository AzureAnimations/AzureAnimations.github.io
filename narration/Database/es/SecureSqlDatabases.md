# Narrator Script — Database · Secure Azure SQL: Network, Identity, Auditing and Defender

**Source animation:** [SecureSqlDatabases.html](../../../journeys/Database/SecureSqlDatabases.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-sql/database/network-access-controls-overview>
- <https://learn.microsoft.com/azure/azure-sql/database/private-endpoint-overview>
- <https://learn.microsoft.com/azure/azure-sql/database/authentication-azure-ad-only-authentication>
- <https://learn.microsoft.com/azure/azure-sql/database/auditing-overview>

---

## Step 1 · The orders database is open to the internet

[calm] La base de datos de pedidos de Contoso funciona en Azure SQL Database. Un servidor lógico nuevo rechaza todas las conexiones hasta que tú permitas algunas.
[600ms]
[concerned] Aquí, alguien amplió el firewall con una sola regla que permite todas las direcciones. Ahora, lo único que separa los datos de internet es una contraseña de SQL.
[600ms]
[determined] Vamos a cerrar esa puerta, una capa a la vez.

## Step 2 · Firewall rules and virtual network rules

[calm] El firewall del servidor solo admite las direcciones y subredes que tú indiques. Estas reglas protegen el endpoint público.
[600ms]
[serious] Ojo con la opción Permitir servicios de Azure. Abre mucho más de lo que la mayoría de los equipos quiere, porque también deja pasar tráfico de recursos de otros clientes.
[600ms]
[confident] Una regla de red virtual necesita un punto de conexión de servicio en la subred y cubre una sola región. Los cambios en las reglas de IP pueden tardar unos minutos.

## Step 3 · A private endpoint removes the public path

[curious] Un endpoint privado le da al servidor una dirección IP privada dentro de la red virtual de Contoso.
[600ms]
[serious] Pero agregar uno no cierra el camino público. También tienes que denegar el acceso desde la red pública.
[600ms]
[reassuring] Conéctate siempre con el nombre completo del servidor. Si inicias sesión con la dirección privada o con el nombre privatelink, falla, y es a propósito.

## Step 4 · Entra-only sign-in and a managed identity

[confident] La autenticación solo con Microsoft Entra desactiva las contraseñas de SQL en todo el servidor.
[600ms]
[calm] La app inicia sesión con su identidad gestionada y un token, así que no queda ningún secreto en su configuración.
[600ms]
[serious] Primero define un administrador de Microsoft Entra. Y recuerda: el Administrador de seguridad de SQL puede activar o desactivar la opción de solo Entra, pero el Colaborador de SQL Server no.

## Step 5 · TDE, Always Encrypted and customer keys

[calm] El cifrado de datos transparente protege en reposo los archivos de datos, los registros y las copias de seguridad.
[600ms]
[curious] Always Encrypted va más allá. El controlador del cliente cifra las columnas que elijas, así que el motor de la base de datos nunca tiene las claves.
[600ms]
[serious] Dos advertencias. Si el servidor pierde el acceso a una clave gestionada por el cliente, la base de datos queda inaccesible. Y las consultas sobre columnas cifradas son limitadas.

## Step 6 · Auditing: what, where and for which scope

[calm] La auditoría registra los eventos de la base de datos y los escribe en el destino que elijas: una cuenta de almacenamiento, un espacio de trabajo de Log Analytics o Event Hubs.
[600ms]
[confident] Define primero el ámbito y las categorías de eventos, así registras lo importante sin ahogarte en ruido.
[600ms]
[reflective] La auditoría prioriza la disponibilidad, así que con una carga muy alta es posible que se pierdan algunos eventos. Los inicios de sesión fallidos con Entra aparecen en Entra, no aquí.

## Step 7 · Read an audit record: who ran what

[curious] Cada registro de auditoría responde unas preguntas sencillas. ¿Quién lo hizo? ¿Qué ejecutó? ¿Dónde y cuándo?
[600ms]
[calm] Este es un registro de la base de datos de pedidos de Contoso. Sigue los colores desde cada campo hasta la pregunta que responde.
[600ms]
[serious] Una instrucción se guarda como texto, así que los valores sensibles que se escriban en ella pueden terminar en el log. Limita quién puede leer los logs de auditoría.

## Step 8 · SQL Database vs SQL Managed Instance

[calm] Los dos son Azure SQL, pero su configuración está en lugares distintos. Debes saber dónde se configura cada control y qué valores predeterminados cambian.
[600ms]
[serious] El artículo de red de SQL Database no aplica a Managed Instance.
[600ms]
[confident] La auditoría de Managed Instance es SQL Server Audit, así que Event Hubs y los registros de Azure Monitor se configuran distinto que en SQL Database.

## Step 9 · Defender for Databases: assess and detect

[confident] El plan Defender for Azure SQL Databases hace dos cosas. La evaluación de vulnerabilidades busca configuraciones débiles.
[600ms]
[curious] La detección de amenazas vigila si hay ataques mientras la base de datos está en funcionamiento.
[600ms]
[reassuring] Activa el plan una sola vez en la suscripción, y quedan protegidos todos los recursos compatibles que tenga, incluso los que crees después.

## Step 10 · An alert end to end: SQL injection

[curious] Un cuadro de búsqueda pasa el texto directamente a una instrucción SQL. Ahí está la debilidad.
[600ms]
[concerned] Primero, Defender avisa de una instrucción defectuosa como posible vulnerabilidad, con gravedad media. Después reporta el ataque como posible inyección de SQL, con gravedad alta.
[600ms]
[determined] El equipo investiga, encuentra el código inseguro y lo corrige.

## Step 11 · Which control answers which threat?

[excited] Ocho amenazas, cinco controles. Mira cómo cada amenaza encuentra su control principal.
[600ms]
[encouraging] Después, selecciona cualquier amenaza para ver por qué ese control es la respuesta.
[600ms]
[reflective] Los sistemas reales combinan varias capas de control, así que una amenaza puede tener más de una respuesta. Aquí, cada amenaza se asocia con su control principal.

## Step 12 · Recap: close, prove, encrypt, record, detect

[calm] Cinco controles protegen la base de datos de pedidos. Cierra la puerta de red, demuestra quién inicia sesión y cifra los datos.
[600ms]
[confident] Luego registra lo que ocurre y detecta los ataques apenas empiezan. Cada control responde a una amenaza distinta.
[600ms]
[proud] La guía de estudio de S C 500 los incluye dentro de implementar la seguridad de las bases de datos.
