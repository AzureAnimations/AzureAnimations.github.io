# Narrator Script — Microsoft 365 Copilot · Copilot, Data and Oversharing

**Source animation:** [CopilotDataAndOversharing.html](../../../journeys/Copilot/CopilotDataAndOversharing.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-365/copilot/microsoft-365-copilot-privacy>
- <https://learn.microsoft.com/microsoft-365/copilot/architecture-data-protection-auditing>
- <https://learn.microsoft.com/sharepoint/data-access-governance-reports>

---

## Step 1 · It answered. Should it have?

[calm] Alex, en Ventas, Copilot pregunta por las franjas salariales del año que viene. Copilot responde, usando un archivo de la web de RRHH.
[600ms]
[concerned] Priya, el administrador, necesita saber cómo ocurrió eso.
[600ms]
[confident] Esta lección sigue las habilidades de seguridad de datos y sobrecompartición de los A B 900 del examen. Learn Now dice Microsoft Copilot para lo que el examen llama Copilot.

## Step 2 · Copilot sees what Alex sees

[calm] Copilot funciona con el acceso propio del usuario que ha iniciado sesión. Los archivos Alex puede abrir pueden conectar sus respuestas a la tierra.
[600ms]
[curious] Los archivos que no puede abrir permanecen fuera de alcance. Copilot solo muestra datos organizativos para los que el usuario tiene al menos permiso de visualización.
[600ms]
[reassuring] Utiliza los mismos controles de acceso que otros servicios Microsoft 365 y no concede nuevos accesos.

## Step 3 · Follow one prompt through Microsoft Graph

[curious] Sigamos una indicación. Copilot la envía a Microsoft Graph, que encuentra contenido relevante Alex puede ver.
[600ms]
[calm] Ese aterrizamiento va al modelo junto con el prompt.
[600ms]
[confident] Grounding significa anclar una respuesta en el propio contenido de trabajo del usuario, como documentos, correo electrónico, calendario, chats y reuniones. La indexación semántica respeta el mismo límite de acceso.

## Step 4 · Stays in the tenant, not used for training

[calm] Los prompts, respuestas y datos a los que se accede a través de Microsoft Graph no se utilizan para entrenar los modelos de cimentación.
[600ms]
[reassuring] Los permisos evitan que el contenido se filtre entre usuarios, grupos y tenants.
[600ms]
[curious] Copilot historial de actividad se almacena junto con tu otro contenido Microsoft 365, y los administradores pueden gestionarlo con Microsoft Purview.

## Step 5 · Layers that protect it

[calm] Copilot honra primero Microsoft 365 permisos. Esa es la fundación.
[600ms]
[curious] Microsoft Purview y Microsoft Defender luego añaden sus propios controles encima. Qué funciones obtienes depende de tu licencia.
[600ms]
[serious] El contenido cifrado requiere que el usuario tenga tanto el derecho de uso de VIEW como EXTRACT antes de Copilot pueda trabajar con él.

## Step 6 · Built on six responsible AI principles

[calm] Los principios de IA responsable de Microsoft guían a Copilot. Son seis.
[600ms]
[curious] Esta lección reside en una sola cosa: la privacidad y la seguridad.
[600ms]
[reassuring] A B 900 te pide que entiendas los principios. La visita completa es la lección de AI responsable del viaje Foundry.

## Step 7 · Why oversharing happens

[serious] Aquí está la idea clave. Copilot no amplía el acceso. Hace visible el acceso amplio.
[600ms]
[curious] Tres hábitos dejan el contenido abierto a más personas de las que nadie pretendía. Los permisos fluyen desde un sitio hasta sus bibliotecas, carpetas y archivos, a menos que alguien rompa la herencia.
[600ms]
[concerned] Y compartir enlaces puede ser para cualquiera, para personas de la organización o para personas concretas. Los más amplios son fáciles de olvidar.

## Step 8 · Four tools to find oversharing

[calm] Empieza con informes y evaluaciones que muestren dónde se expone el contenido.
[600ms]
[curious] Luego usa insights y el panel de control para decidir qué arreglar primero.
[600ms]
[confident] Aquí los roles importan. La sección de Seguridad del panel de control de Copilot necesita que Global Reader lo vea y AI administrador cambie. SharePoint informes necesitan el rol de administrador SharePoint.

## Step 9 · Run a data access governance report

[calm] En el centro de administración SharePoint, abre Informes y luego Gobernanza de acceso a datos.
[600ms]
[curious] Empieza con el informe de permisos de sitio, para ver cuáles están más abiertos.
[600ms]
[serious] Los informes de instantáneas muestran el estado actual, mientras que los informes de actividad cubren los últimos veintiocho días. Sin SharePoint Advanced Management, activa primero la recogida de datos.

## Step 10 · SharePoint Advanced Management

[calm] SharePoint Advanced Management, o SAM, te ayuda a gestionar la expansión del contenido, gestionar el ciclo de vida del contenido y evitar compartir en exceso.
[600ms]
[curious] Estas son las opciones mencionadas en Learn.
[600ms]
[reassuring] Las capacidades SAM para un despliegue Copilot incluyen una licencia Copilot. Algunas funciones, como la creación restringida de sitios, necesitan el complemento Plan One, así que consulta Learn para la lista actual.

## Step 11 · Restricted access control

[calm] Ahora va una solución. Limita un sitio a un solo grupo Microsoft 365 o a un grupo de seguridad Microsoft Entra.
[600ms]
[impressed] Todos los demás están bloqueados, incluso con un permiso directo o un enlace compartido, y los archivos salen de la búsqueda y se Copilot por ellos.
[600ms]
[confident] Los sitios de canales compartidos y privados necesitan su propia configuración.

## Step 12 · Try it: change the protection

[excited] Te toca. Elige una fija para el expediente salarial.
[600ms]
[curious] Mira si Alex puede leerlo y si Copilot puede mostrárselo.
[600ms]
[serious] El descubrimiento restringido de contenido es temporal. No cambia los permisos, y las personas con acceso aún pueden abrir el archivo. Úsalo mientras arreglas los permisos reales.

## Step 13 · See it, find it, fix it

[calm] Vamos a recapitular. Lo ves, lo encuentras y luego lo arreglas.
[600ms]
[proud] Copilot respeta el acceso, así que un buen acceso es la solución. Priya ahora sabe cómo ocurrió esa respuesta y cómo evitarla.
[600ms]
[determined] Compíbalo con las habilidades A B 900 medidas y la formación oficial de Microsoft Learn.
