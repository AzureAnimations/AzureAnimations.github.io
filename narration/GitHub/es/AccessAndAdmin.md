# Narrator Script — GitHub · Access and Admin

**Source animation:** [AccessAndAdmin.html](../../../journeys/GitHub/AccessAndAdmin.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/paths/github-foundations/>
- <https://learn.microsoft.com/training/paths/github-foundations-2/>

---

## Step 1 · Contoso Is Growing

[calm] Contoso está creciendo. Hay Maya, Ravi, Noor, Ivy y Sam, además de una organización, un contratista y un código privado.
[600ms]
[curious] Entonces, ¿quién puede hacer qué y quién está a cargo de los ajustes?
[600ms]
[confident] Esas tres preguntas de la fila inferior son las tres partes de este camino: cuentas, acceso y administración.

## Step 2 · Passwords Alone Fall Short

[calm] Empieza por la cuenta. Se puede adivinar, reutilizar o manipular una contraseña.
[600ms]
[serious] Si es la única cerradura, quien la tenga puede iniciar sesión como Ravi.
[600ms]
[reassuring] La autenticación de dos pasos añade un segundo candado, algo que solo tú sabes o tienes, así que una contraseña robada por sí sola no es suficiente.

## Step 3 · Add a Second Factor

[curious] Después de la contraseña, GitHub pide algo que solo tú tienes: un código de una app, un mensaje de texto, una clave de seguridad o GitHub móvil.
[600ms]
[calm] Las aplicaciones de autenticación crean códigos de un solo uso, y las claves de seguridad usan WebAuthn. Guarda tus códigos de recuperación como respaldo.
[600ms]
[confident] Los propietarios de organizaciones pueden requerir doble factor para miembros, responsables de facturación y colaboradores externos.

## Step 4 · Passkeys: One Step, No Password

[curious] Una clave de acceso es un par de llaves. La clave privada permanece en tu dispositivo y GitHub mantiene la clave pública.
[600ms]
[impressed] Un paso cubre tanto la contraseña como el segundo factor. Lo desbloqueas con un PIN, un código de acceso o una biometría.
[600ms]
[serious] Las claves de acceso están vinculadas al dominio real, por lo que un navegador rechaza un sitio parecido. Aun así, mantén un método de respaldo para evitar bloqueos.

## Step 5 · Organization Roles

[calm] Ahora acceso. Una organización reúne a las personas y repositorios de Contoso en un solo lugar.
[600ms]
[confident] Los propietarios tienen acceso administrativo completo, mientras que los miembros son el rol predeterminado no administrativo.
[600ms]
[serious] Mantén pocos propietarios, pero nunca menos de dos, para que nunca se pierda la propiedad. También hay roles especializados, como moderador y responsable de facturación.

## Step 6 · Repository Roles: Try It

[curious] Los repositorios tienen sus propios roles. Elige uno y observa lo que puede hacer.
[600ms]
[confident] De acceso menor a mayor, son Lectura, Triaje, Escritura, Mantenimiento y Administración.
[600ms]
[determined] El principio es el menor privilegio: dar a las personas el papel más pequeño que cumpla con la función.

## Step 7 · Teams: Grant Access to Groups

[calm] Conceder acceso persona por persona no escala, así que aquí es donde entran los equipos.
[600ms]
[confident] Si le das un rol a un equipo una vez, todos los que lo forman lo tienen. Los equipos hijos heredan el acceso de su equipo de origen.
[600ms]
[serious] Los equipos solo tienen miembros de la organización, así que los colaboradores externos no pueden unirse a uno.

## Step 8 · Least Privilege for a Contractor

[curious] Sam es un contratista, no un empleado.
[600ms]
[confident] Así Sam se convierte en un colaborador externo, añadido al único repositorio que necesita el trabajo, con un rol que eliges y nada más.
[600ms]
[reassuring] Sam no es miembro y no puede unirse a los equipos. Si la organización requiere dos pasos, Sam debe activarlo antes de aceptarlo.

## Step 9 · Visibility and Branch Protection

[calm] Dos configuraciones protegen el propio código. La visibilidad decide quién puede ver un repositorio: público, privado o interno.
[600ms]
[confident] Una regla de protección de ramas decide qué puede aterrizar en la principal, como las revisiones y pasar comprobaciones de estado antes de fusionarse.
[600ms]
[serious] Las personas con acceso de administrador de repositorio configuradas ambas opciones. Los repositorios internos necesitan una cuenta empresarial en GitHub Enterprise Cloud.

## Step 10 · Enterprise Managed Users

[curious] Las cuentas personales son creadas y propiedad de la persona. Los Usuarios Gestionados por la Empresa funcionan de forma diferente.
[600ms]
[confident] El proveedor de identidad de Contoso crea y controla las cuentas, y la gente inicia sesión a través de él.
[600ms]
[reflective] Los usuarios gestionados no pueden colaborar fuera de la empresa, así que no es la mejor opción para todas las empresas. GitHub documenta cómo elegir.

## Step 11 · Owners Hold the Controls

[calm] Los propietarios establecen los valores predeterminados de la organización, como permisos base, requisitos de dos factores y equipos.
[600ms]
[curious] Luego deciden quién se queda Copilot, si son todos, algunos o ninguno de los miembros, y qué políticas se aplican.
[600ms]
[serious] Un inconveniente: si un propietario de empresa ya eligió una póliza, la organización no puede anularla.

## Step 12 · Access and Admin: All in One

[calm] Vamos a juntarlo. Protege las cuentas con dos pasos y llaves maestras.
[600ms]
[confident] Comparte solo el acceso que la gente necesita a través de roles organizativos, roles en repositorios y equipos.
[600ms]
[proud] Y mantén la configuración en manos de los propietarios y administradores. Este es el ámbito de privacidad, seguridad y administración del examen de G H 900.
