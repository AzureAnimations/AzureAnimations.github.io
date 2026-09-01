# Guion de narración — Azure PaaS Compute · 01 · App Service Plan

**Source animation:** `static/v2/Compute/AppServicePlan.html`

---

## Step 1 · intro

[confident] Antes de que el sitio de Contoso Retail pueda atender a un solo visitante, Azure necesita un lugar donde ejecutarlo.
[600ms]
[calm] Ese lugar es un App Service Plan: el cómputo que comparten tus apps — una región, un tamaño y un número de instancias.
[700ms]
[amused] Imagina que alquilas un edificio. El Plan es el edificio; las App Services que despliegas son los inquilinos que viven dentro.

## Step 2 · tier

[confident] Dos decisiones definen el Plan. Primero, una región: elige una cercana a tus usuarios.
[600ms]
[calm] Luego, un nivel de precio, que fija tu CPU, memoria y funciones — desde un nivel gratuito de prueba hasta una red totalmente aislada.
[700ms]
[reassuring] Y no quedas atado. Puedes subir de nivel más tarde casi sin tiempo de inactividad, así que empieza pequeño y crece.

## Step 3 · instances

[confident] Una instancia es una sola máquina virtual que ejecuta una copia idéntica del código de tu app.
[600ms]
[impressed] Agrega más instancias y obtienes dos cosas a la vez: más capacidad para atender tráfico y más resiliencia.
[700ms]
[reassuring] Si una instancia tiene un problema, las demás siguen atendiendo. Eso es redundancia, incorporada.

## Step 4 · platform

[confident] Cada Plan se ejecuta en un solo sistema operativo: Linux o Windows.
[600ms]
[calm] Encima, tu app puede usar cualquier runtime compatible: .NET, Java, Node.js, PHP o Python.
[700ms]
[serious] Un detalle: eliges el sistema operativo al crear el Plan, y queda fijo. Así que agrupa las apps que necesitan el mismo.

## Step 5 · scale

[confident] Hay dos formas muy distintas de escalar, y conviene no confundirlas.
[600ms]
[calm] Escalar verticalmente cambia el nivel: máquinas más grandes y potentes, pero el mismo número.
[500ms]
[calm] Escalar horizontalmente cambia la cantidad: máquinas del mismo tamaño, solo que más copias repartiendo la carga.
[700ms]
[encouraging] Regla práctica: escala horizontalmente para los picos de tráfico, y verticalmente cuando una sola instancia necesita más CPU o memoria.

## Step 6 · autoscale

[confident] No tienes que mover esas palancas a mano. El autoescalado lo hace por ti.
[600ms]
[calm] Defines reglas — un umbral de CPU, un horario o una métrica personalizada — más un mínimo y un máximo de instancias.
[700ms]
[impressed] Azure agrega y quita instancias automáticamente, de modo que la capacidad sigue la demanda real — y pagas solo cuando la necesitas.

## Step 7 · recap

[proud] Ahí está la base: región, nivel y número de instancias definen juntos el cómputo — el App Service Plan — sobre el que corren tus apps.
[700ms]
[encouraging] Ahora pongamos algo encima y veamos cómo cobra vida una App Service — la app web en sí.
