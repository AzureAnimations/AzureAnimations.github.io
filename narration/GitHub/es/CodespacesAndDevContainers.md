# Narrator Script — GitHub · Codespaces & Dev Containers

**Source animation:** [CodespacesAndDevContainers.html](../../../journeys/GitHub/CodespacesAndDevContainers.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/paths/github-foundations/>
- <https://learn.microsoft.com/training/paths/github-foundations-2/>

---

## Step 1 · Day One, the Old Way

[calm] Priya acaba de unirse al equipo de meteorología Contoso.
[600ms]
[concerned] Antes de escribir una línea de código, tiene que convertir un portátil en blanco en una copia de las máquinas de sus compañeros. Eso puede comerse todo un día.
[600ms]
[serious] Y el riesgo es real: cada montaje hecho a mano se aleja un poco del siguiente.

## Step 2 · What Is a Codespace?

[curious] Un espacio de código es un entorno de desarrollo alojado en la nube.
[600ms]
[confident] Abre uno desde una plantilla, una sucursal, una solicitud pull o un commit, y luego conéctate con tu navegador, VS Code o el GitHub CLI.
[600ms]
[calm] Bajo el capó es un contenedor Docker en una máquina virtual que GitHub aloja. Siempre ejecuta Linux, lo que sea que ejecute tu propio ordenador.

## Step 3 · Open One With a Click

[calm] En la página del repositorio, elige Código, luego la pestaña Codespaces y después crea un espacio de código en tu rama.
[600ms]
[curious] Elige Nuevo con opciones si quieres elegir la rama, el contenedor de desarrollo o el tipo de máquina.
[600ms]
[reassuring] Una nota en el diálogo te indica quién paga. Las cuentas personales reciben una cuota mensual gratuita, y una organización puede elegir pagar por sus miembros.

## Step 4 · What Happens When You Press Create

[curious] Cuando pulsas Crear, GitHub monta tu entorno en cuatro movimientos.
[600ms]
[confident] Arranca una máquina virtual, construye el contenedor, te conecta y luego termina la configuración. Estás conectado tras el tercer movimiento.
[600ms]
[reassuring] Puede tardar unos minutos, pero los administradores del repositorio pueden activar precompilaciones para acelerar la espera.

## Step 5 · Same Environment for Everyone

[calm] Un contenedor de desarrollo es un contenedor Docker configurado para el desarrollo.
[600ms]
[confident] Sube su descripción al repositorio, y cada codespace, el de Priya, el de Sam y el de Ana, se construye a partir de la misma receta.
[600ms]
[reassuring] Esa receta es un archivo llamado devcontainer dot json. Sin archivo, los espacios de código comienzan desde una imagen predeterminada que tiene muchos lenguajes y herramientas comunes.

## Step 6 · Inside devcontainer.json

[curious] Un pequeño archivo responde a la pregunta: ¿qué instalo, para todo el equipo?
[600ms]
[confident] Cada propiedad gestiona una parte de la configuración: la imagen, características, extensiones, puertos y comandos.
[600ms]
[reflective] Mantenlo según lo que todos necesitan. El gusto personal, como temas y alias, pertenece a los archivos de puntos. Para aplicar un cambio, haz un commit y reconstruye el contenedor.

## Step 7 · An Open Spec: One File, Many Tools

[curious] El archivo sigue un estándar abierto, la especificación de Contenedores de Desarrollo en contenedores punto io.
[600ms]
[impressed] Eso significa que el mismo archivo también puede configurar un entorno en tu propia máquina.
[600ms]
[calm] En VS Code, la extensión Dev Containers abre una carpeta dentro de un contenedor construido a partir de él. Codespaces hace lo mismo en la nube.

## Step 8 · Stop, Resume, Delete — and the Meter

[calm] Un espacio de códigos se detiene cuando está inactivo, conserva tus cambios guardados mientras está detenido, y desaparece una vez eliminado.
[600ms]
[confident] El cómputo solo se factura mientras está en ejecución, y el almacenamiento mientras existe. Por defecto, se detiene tras treinta minutos de inactividad.
[600ms]
[serious] Un espacio de código parado se elimina tras treinta días, y una sesión se detiene tras doce horas. Puedes cambiar los valores predeterminados.

## Step 9 · github.dev: Press the Period Key

[curious] Aquí tienes un atajo. En cualquier repositorio o pull request, pulsa la tecla de punto.
[600ms]
[impressed] VS Code for the Web se abre en tu navegador en github dot dev, al instante, sin nada que construir.
[600ms]
[serious] Puedes navegar, editar y hacer commit de archivos, pero no hay terminal ni forma de ejecutar o depurar código. Haz commit a menudo, ya que las ediciones permanecen en el navegador hasta entonces.

## Step 10 · Which Editor Should I Open?

[curious] ¿Entonces qué editor deberías abrir? Empieza por el trabajo que tienes delante.
[600ms]
[confident] Una edición rápida es un trabajo para github dot dev. ¿Necesitas ejecutar o depurar? Necesitas computación, así que abre un espacio de código o usa tu propia máquina.
[600ms]
[reassuring] Y si quieres la misma configuración para todos, descríbelo en un contenedor de desarrollo.

## Step 11 · All in One: Open It, Start Coding

[calm] Volviendo al primer día de Priya. Abre un espacio de códigos, y su entorno ya la espera.
[600ms]
[confident] Ahora puedes explicar los codespaces y los contenedores de desarrollo, y decir cuándo es suficiente con github dot dev.
[600ms]
[proud] Esa es la G H 900 habilidad para este tema. Los caminos de aprendizaje de GitHub Foundations son el siguiente paso.
