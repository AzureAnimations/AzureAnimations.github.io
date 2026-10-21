# Narrator Script — Architect · Design governance: structure, policy and compliance

**Source animation:** [DesignGovernance.html](../../../journeys/Architect/DesignGovernance.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/governance/management-groups/overview>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-management-groups>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions>
- <https://learn.microsoft.com/azure/azure-resource-manager/management/overview>
- <https://learn.microsoft.com/azure/azure-resource-manager/management/tag-resources>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/azure-best-practices/resource-tagging>
- <https://learn.microsoft.com/azure/governance/policy/concepts/effect-basics>
- <https://learn.microsoft.com/azure/defender-for-cloud/regulatory-compliance-dashboard>
- <https://learn.microsoft.com/purview/compliance-manager>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/>

---

## Step 1 · One subscription, no structure

[calm] Contoso ha reunido la tienda física, las bases de datos y los experimentos en una sola suscripción, sin una estructura compartida.
[600ms]
[curious] Fíjate en los tres problemas que hay al lado: riesgo de producción, costes poco claros y reglas que cambian de un equipo a otro.
[600ms]
[reassuring] El diseño comienza dando a la propiedad, el aislamiento y la política un lugar claro para vivir.

## Step 2 · Management groups: rules that flow down

[calm] Los grupos directivos organizan las suscripciones según las reglas que comparten, en lugar de copiar el organigrama de la empresa.
[600ms]
[curious] Sigue la política por el árbol: las suscripciones heredan los límites asignados por encima de ellas.
[600ms]
[reassuring] Mantén la jerarquía superficial, con suscripciones separadas para desarrollo y producción bajo el grupo compartido correspondiente.

## Step 3 · Subscriptions: billing, limits and isolation

[calm] Una suscripción crea un límite para la facturación, los límites y el aislamiento, como muestran estas tres tarjetas.
[600ms]
[curious] Contoso separa la plataforma de pedidos, el trabajo de desarrollo y los experimentos porque sus presupuestos y requisitos de acceso varían.
[600ms]
[reassuring] Elige una nueva suscripción cuando el límite deba cambiar, no solo porque haya otra región involucrada.

## Step 4 · Resource groups: one shared lifecycle

[calm] Estos recursos de la aplicación se despliegan, actualizan y eliminan juntos, por lo que comparten un grupo de recursos.
[600ms]
[curious] La red compartida permanece en su propio grupo porque tiene un ciclo de vida diferente.
[600ms]
[reassuring] Eliminar el grupo de aplicaciones elimina sus recursos juntos, mientras que la red gestionada por separado mantiene su propio ciclo de vida.

## Step 5 · Tags: decide what, then let policy apply them

[calm] Las etiquetas describen recursos mediante categorías como función, clasificación, contabilidad y propósito empresarial.
[600ms]
[curious] Cuidado con la etiqueta de grupo de recursos: no aparece automáticamente en el recurso que hay debajo.
[600ms]
[reassuring] Contoso utiliza Azure Policy para copiar etiquetas requeridas, convirtiendo una estrategia de etiquetado en algo que la plataforma pueda hacer cumplir.

## Step 6 · Azure Policy: pick the effect for each rule

[calm] La línea base de Contoso recopila varias definiciones de políticas en una sola iniciativa, asignada en el ámbito compartido.
[600ms]
[curious] audit informa de un problema, deny lo bloquea, modify cambia propiedades y deployIfNotExists agrega un recurso relacionado que falta.
[600ms]
[reassuring] Elige el efecto que coincida con la regla, en lugar de tratar cada problema de cumplimiento como un despliegue bloqueado.

## Step 7 · Compliance: who answers which question

[calm] Estas dos herramientas responden a diferentes preguntas de cumplimiento, aunque su trabajo esté conectado.
[600ms]
[curious] Microsoft Defender for Cloud evalúa los recursos de Azure frente a los controles, mientras que Microsoft Purview Compliance Manager organiza evaluaciones y acciones de mejora.
[600ms]
[reassuring] Contoso necesita tanto una visión de los hallazgos técnicos como una forma de rastrear a las personas responsables de la mejora.

## Step 8 · All in one: Contoso’s landing zone

[calm] Aquí está el diseño de gobernanza de Contoso reunido en una sola zona de aterrizaje, con cada osciloscopia haciendo un trabajo diferente.
[600ms]
[curious] Los grupos de gestión tienen reglas comunes, las suscripciones separan los límites, los grupos de recursos siguen los ciclos de vida y las etiquetas explican la propiedad.
[600ms]
[reassuring] Las herramientas de política y cumplimiento hacen que esas decisiones sean exigibles y revisables; después, conecta a las personas que usarán este patrimonio.

