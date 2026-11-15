# NSGs & ASGs — narración (es)

## Step 1 · A network security group is a rule list

[confident] Un grupo de seguridad de red es, en el fondo, sencillamente una lista de reglas.
[400ms]
[calm] Cada una permite o deniega tráfico, de entrada o de salida. Asocias el grupo a una subred o a una interfaz de red, y Azure lo aplica en la propia plataforma: no hay ningún agente ejecutándose dentro de la máquina virtual.
[500ms]
[helpful] Y son con estado. Si permites un flujo de salida, la respuesta vuelve permitida automáticamente. Nunca escribes una regla de entrada equivalente para esa respuesta.

## Step 2 · Anatomy of one rule

[calm] Toda regla son las mismas seis decisiones. Prioridad, origen, destino, puerto, protocolo, y permitir o denegar.
[500ms]
[confident] La prioridad es la que lo decide todo. Gana la primera regla que coincide, y lo que viene después ni siquiera se lee.
[400ms]
[helpful] Los números van de cien a cuatro mil noventa y seis, de menor a mayor. Y no puedes tener dos reglas con la misma prioridad en la misma dirección.

## Step 3 · The rules you never wrote

[curious] Aquí hay algo que sorprende a mucha gente. Todo NSG ya contiene seis reglas que tú no escribiste: tres de entrada y tres de salida.
[500ms]
[calm] Están en los números más altos de todos, así que cualquier cosa que añadas se lee antes. No puedes borrarlas. Solo puedes sobrescribirlas.
[400ms]
[confident] Y por esto exactamente una máquina virtual recién creada puede salir a internet, pero nada en internet puede alcanzarla. Una regla predeterminada permite la llamada; otra bloquea la llamada entrante.

## Step 4 · Subnet, NIC — or the order they run in

[calm] Puedes asociar un NSG en cualquiera de los dos niveles: la subred o la interfaz de red.
[400ms]
[curious] Si lo asocias en los dos, el orden importa, y ambas listas tienen que estar de acuerdo para que un paquete pase.
[500ms]
[helpful] La recomendación oficial es elegir un solo nivel, no los dos. Cuando hay reglas en dos niveles pueden contradecirse en silencio, y diagnosticar eso es realmente doloroso.

## Step 5 · The app tier keeps spreading

[calm] Vamos a concretarlo. Máquinas virtuales de aplicación en una subred, una base de datos en otra, dentro de una misma red virtual.
[500ms]
[curious] En cada sprint el equipo añade más VMs de aplicación. QA quiere una subred. Las pruebas de integración quieren otra. Y cada una de esas direcciones acaba pegada, a mano, en la misma regla.
[400ms]
[concerned] Si recreas una VM su dirección puede cambiar, así que la regla deja de coincidir sin avisar. Y peor aún: una dirección nunca te dice a qué aplicación pertenece.

## Step 6 · An application security group is a label

[confident] La lista de direcciones mantenida a mano es justo la parte que se rompe una y otra vez. Así que deja de mantenerla.
[500ms]
[calm] Un grupo de seguridad de aplicaciones sustituye esa lista por un nombre que asocias a la máquina. A partir de ahí tu regla nombra el grupo, y Azure sigue resolviendo las direcciones según las máquinas van y vienen.
[400ms]
[helpful] Azure registra esa pertenencia en la interfaz de red de la VM, y por eso todos los miembros tienen que estar en la misma red virtual. Estar en subredes distintas no es ningún problema.

## Step 7 · One network, two subnets

[calm] Esta es la topología. La capa de aplicación y la base de datos tienen cada una su propia subred, dentro de una misma red virtual.
[400ms]
[confident] En ambas, la VM llega a la red a través de una NIC, y la NIC es la que lleva la IP privada.
[500ms]
[helpful] Mantener las dos capas en una sola VNet es deliberado. Es la única disposición en la que una sola regla puede nombrar un ASG tanto en el origen como en el destino.

## Step 8 · Name the machines, attach the filter

[calm] Cada VM de aplicación entra en un grupo. La VM de base de datos entra en otro. Se define en la propia VM y queda registrado en su interfaz de red.
[500ms]
[confident] El NSG va en la subred de base de datos, porque es lo que estamos protegiendo.
[400ms]
[helpful] Y un ASG abarca subredes, no redes. Cuando llegue la subred de QA el próximo sprint, sus VMs entran en el mismo grupo, y no se toca ni una regla.

## Step 9 · The rule, written in names

[confident] Ahora la regla en sí. Deniega todo hacia la base de datos, y por encima permite al grupo de aplicación.
[500ms]
[calm] Ahora los dos lados son nombres. En esa regla no queda ni una sola dirección que mantener.
[400ms]
[encouraging] Añade una VM, recrea una VM, añade una subred entera de QA: la regla no cambia nunca. La pertenencia al grupo es lo único que alguien edita.

## Step 10 · A new subnet costs nothing

[calm] Así que QA por fin tiene su propia subred. Sus VMs entran en el mismo grupo de seguridad de aplicaciones.
[500ms]
[confident] Y ese es el cambio completo. No se añadió, ni editó, ni repriorizó ninguna regla. El NSG de la base de datos ni siquiera se abrió.
[400ms]
[encouraging] Ese es todo el beneficio de ponerle nombre a las cosas. La regla describe un rol, y los roles no cambian cuando cambia el espacio de direcciones.

## Step 11 · Filter by intent, not by address

[confident] Así que, para juntarlo todo.
[400ms]
[calm] El NSG aplica la decisión. El grupo de seguridad de aplicaciones es lo que te permite expresar esa decisión en el lenguaje que tu arquitectura ya usa.
[600ms]
[encouraging] La próxima vez que estés a punto de pegar una dirección IP en una regla, párate y pregúntate qué significa esa dirección. Y haz de eso el nombre del grupo.
