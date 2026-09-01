# Narrator Script — Azure Storage · Protect it (Redundancy) · ES

**Source animation:** `static/v2/Storage/StorageRedundancy.html`

Voz femenina (es-ES-Ximena). Un bloque por paso.

---

## Step 1 · Overview

[warm] Un dato tranquilizador: Azure Storage siempre replica tus datos. La única pregunta es dónde viven las copias.
[600ms]
[calm] Tú eliges: el mismo centro de datos, entre zonas de disponibilidad, en otra región, o con una copia secundaria legible. Son seis opciones, con tres equilibrios: cuántas copias, qué tan amplio es el radio de impacto, y si la secundaria es legible.
[600ms]
[confident] Siempre hay tres copias síncronas en la región primaria. Los siguientes pasos animan cada opción, de lo local a lo más resiliente.

## Step 2 · LRS

[confident] Empecemos en local: LRS, almacenamiento con redundancia local.
[600ms]
[calm] Mantiene tres copias síncronas de tus datos dentro de un único centro de datos físico, en la región que elijas. Cada escritura se guarda en las tres antes de confirmarse, así que las copias son siempre idénticas.
[600ms]
[calm] Es la opción más económica, y protege frente a los fallos cotidianos: un disco defectuoso, un servidor caído, un rack entero que se apaga. Azure incluso puede mover o expandir la cuenta entre zonas para equilibrar la carga.
[600ms]
[reassuring] Pero las tres copias viven en un mismo edificio. Así que si un desastre golpea ese centro de datos —un incendio, una inundación— se pueden perder todas las réplicas. LRS ofrece unos once nueves de durabilidad, y encaja bien con datos fáciles de reconstruir, o cuando las reglas de residencia de datos obligan a mantenerlo todo en un mismo lugar.

## Step 3 · ZRS

[confident] Ahora reparte el riesgo: ZRS, almacenamiento con redundancia de zona.
[600ms]
[calm] Escribe tres copias síncronas en tres zonas de disponibilidad de una misma región. Cada zona es un centro de datos físicamente separado, con su propia energía, refrigeración y red, así que ningún edificio es un único punto de fallo.
[600ms]
[calm] Como las escrituras siguen siendo síncronas, cada copia está al día, y puedes seguir leyendo y escribiendo aunque una zona entera se caiga. Por eso Microsoft recomienda ZRS en la región primaria para aplicaciones de alta disponibilidad, y también para cargas de Data Lake Storage.
[600ms]
[reassuring] Te sube a unos doce nueves de durabilidad. Lo único que hay que recordar: ZRS sigue estando en una sola región, así que protege frente a la caída de una zona, pero no frente a la pérdida de toda la región. Para eso, hay que irse geo.

## Step 4 · GRS and RA-GRS

[confident] Para sobrevivir a una región entera, vete geo: GRS, almacenamiento con redundancia geográfica.
[600ms]
[calm] Primero, tus datos se escriben tres veces en la región primaria usando LRS. Luego Azure los copia de forma asíncrona a una región secundaria emparejada, a cientos de kilómetros, donde se guardan otras tres veces, de nuevo con LRS. Son seis copias en total, y unos dieciséis nueves de durabilidad.
[600ms]
[calm] Esa región secundaria se elige automáticamente a partir de la primaria, y no se puede cambiar. Como la copia es asíncrona, hay un pequeño retraso, así que una pérdida repentina de la primaria podría perder las escrituras más recientes que aún no se habían replicado. A ese desfase se le llama objetivo de punto de recuperación, o RPO, y la replicación con prioridad geográfica lo mantiene por debajo de quince minutos para los blobs en bloques.
[600ms]
[reassuring] Por defecto, esa secundaria es solo para recuperación ante desastres: tu app no puede leerla. Si la primaria se cae, activas una conmutación por error de la cuenta, y el DNS redirige a la secundaria, que pasa a ser la nueva primaria.
[600ms]
[impressed] Activa el acceso de lectura —RA-GRS— y Azure expone un punto de acceso secundario de solo lectura. Ahora tu app puede leer de la secundaria mientras las escrituras van solo a la primaria: perfecto para pruebas de recuperación ante desastres y para repartir el tráfico de lectura entre regiones.

## Step 5 · GZRS and RA-GZRS

[confident] ¿Quieres protección de zona Y de región? Combínalas: GZRS.
[600ms]
[calm] En la región primaria usa ZRS: tres copias síncronas en tres zonas de disponibilidad. Luego replica de forma asíncrona a la región secundaria emparejada, donde los datos se guardan con LRS. Así obtienes lo mejor de ambos mundos: alta disponibilidad por zonas en casa, y durabilidad geográfica a lo lejos.
[600ms]
[calm] Eso significa que puedes seguir leyendo y escribiendo durante la caída de una zona, y aun así recuperarte de un desastre regional completo. También son unos dieciséis nueves de durabilidad, y es lo que Microsoft recomienda para aplicaciones de misión crítica que necesitan la máxima consistencia, durabilidad y disponibilidad.
[600ms]
[impressed] Añade acceso de lectura —RA-GZRS— para una secundaria legible, y llegas a la opción más resiliente de Azure Storage: primaria con redundancia de zona, secundaria geográfica legible.
[600ms]
[reassuring] La contrapartida, como siempre, es el costo, pero para datos que de verdad no puedes perder, es el estándar de oro.

## Step 6 · Summary

[warm] Así que aquí están las seis opciones, una al lado de la otra.
[600ms]
[calm] LRS: un centro de datos. ZRS: tres zonas. GRS: dos regiones. RA-GRS: más una secundaria legible. GZRS: zonas más una región emparejada. Y RA-GZRS: la más resiliente de todas.
[600ms]
[encouraging] Elige por radio de impacto frente a costo: ¿a cuánto fallo debe sobrevivir tu dato? De un solo rack a una región entera, hay una opción de redundancia para ello.
