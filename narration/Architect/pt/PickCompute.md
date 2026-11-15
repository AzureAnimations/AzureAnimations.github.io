# Narrator Script — Architect · Pick the right compute

**Source animation:** [PickCompute.html](../../../journeys/Architect/PickCompute.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/architecture/guide/technology-choices/compute-decision-tree>

---

## Step 1 · Control or effort: choose your spot

[calm] As cargas de trabalho da Contoso todas pedem computação, mas nem todas precisam da Contoso para operar um servidor.
[600ms]
[curious] O espectro troca controle direto contra esforço de gestão, desde infraestrutura passando por plataformas gerenciadas até funções orientadas a eventos.
[600ms]
[reassuring] Comece decidindo quais responsabilidades a equipe realmente precisa, em vez de assumir que toda carga de trabalho pertence a uma máquina virtual.

## Step 2 · Six questions that decide

[calm] Essas seis perguntas transformam um pedido de computação vago em um conjunto de requisitos de projeto.
[600ms]
[curious] Verifique o controle do sistema operacional, comportamento inicial, escalabilidade, estado, preços e as habilidades da equipe que irá administrar o sistema.
[600ms]
[reassuring] Avalie cada carga de trabalho separadamente, porque uma aplicação completa pode usar legitimamente vários serviços de computação.

## Step 3 · Virtual machines: when, which size, how many

[calm] Uma máquina virtual é adequada quando a Contoso precisa de acesso ao sistema operacional ou software que exige esse nível de controle.
[600ms]
[curious] Depois, ajuste o tamanho da família ao requisito de recursos e planeje como múltiplas instâncias permanecerão disponíveis.
[600ms]
[reassuring] Um conjunto de escalas aborda instâncias repetidas e escalonamento, mas não remove a responsabilidade pelo sistema operacional convidado.

## Step 4 · Containers: four services, one choice

[calm] Todas as quatro opções operam contêineres, mas expõem responsabilidades operacionais diferentes.
[600ms]
[curious] AKS se encaixa em uma equipe que precisa do Kubernetes API, enquanto Container Apps elimina a necessidade de operar essa interface de cluster.
[600ms]
[reassuring] A API de catálogo da Contoso precisa de uma plataforma de contêineres gerenciada, então a carga de trabalho e os requisitos da equipe apontam para o Container Apps.

## Step 5 · Serverless: code that runs when something happens

[calm] Azure Functions se adequa ao código acionado por eventos, enquanto Logic Apps oferece uma abordagem de fluxo de trabalho low-code.
[600ms]
[curious] O caminho escalável para zero reduz a capacidade ociosa, mas o comportamento de inicialização e os requisitos de estado ainda importam.
[600ms]
[reassuring] Escolha o plano e o padrão de aplicação em torno dessas necessidades em vez de prometer que o serverless elimina todas as restrições operacionais.

## Step 6 · Batch: a pool of VMs for the nightly job

[calm] A exportação noturna da Contoso pode ser dividida em tarefas independentes, então o Azure Batch organiza como um pool, uma tarefa e tarefas.
[600ms]
[curious] O pool fornece as máquinas, o escalonador distribui o trabalho e a capacidade pode diminuir quando o processamento terminar.
[600ms]
[reassuring] A capacidade spot reduz o custo para trabalhos retentáveis, mas o projeto da tarefa deve tolerar despejo.

## Step 7 · Five workloads, five services

[calm] As mesmas seis perguntas agora colocam as cinco cargas de trabalho da Contoso em serviços que atendem a diferentes necessidades.
[600ms]
[curious] A resposta não é a maior plataforma para toda carga de trabalho; cada tarefa tem um requisito específico por trás.
[600ms]
[reassuring] Verifique o motivo associado a cada serviço e pergunte se uma opção mais simples ainda poderia atender a esse requisito.

## Step 8 · All in one: pick the simplest service that fits

[calm] O mapa completo mantém a demanda de carga de trabalho ao lado da escolha do serviço, tornando o trade-off visível.
[600ms]
[curious] Use infraestrutura quando o controle for necessário e serviços gerenciados quando a plataforma puder tirar trabalho da equipe.
[600ms]
[reassuring] Em seguida, cerque a aplicação com um gateway de API, cache, configuração e um caminho de lançamento repetível.

