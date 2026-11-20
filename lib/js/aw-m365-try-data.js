/*! aw-m365-try-data.js — content for the "Try it yourself" step on the six Microsoft 365 Copilot journey pages
 *  (M365Copilot, CopilotInWord, CopilotInPowerPoint, CopilotInExcel, CopilotInOutlook, CopilotInTeams), in en / es / ja / ko / pt.
 *
 *  Each prompt is written as ordered segments [part, text] where part is g (goal), c (context), s (source) or e (expectations),
 *  the four parts Microsoft teaches for a good prompt. aw-m365-mock.js joins the segments into the prompt that the Copy button
 *  copies, and registers the same segments with aw-prompt-anatomy.js so the hover bubble can colour each part. Edit the wording here
 *  only; never hardcode a prompt in a page.
 *
 *  Themes follow the learner prompt guide: Chat = prioritise work and find ready-to-start tasks · Word = extract actions from a long
 *  document · PowerPoint = turn a document into slides · Excel = discover trends and outliers · Outlook = summarise a long email
 *  thread · Teams = extract meeting decisions and actions.
 */
(function (g) {
	'use strict';
	var G = 'g', C = 'c', S = 's', E = 'e';
	function P(title) { return { t: title, s: Array.prototype.slice.call(arguments, 1) }; }

	var UI = {
		en: { copy: 'Copy prompt', copied: 'Copied \u2713', pick: 'Pick a prompt', refineH: 'Then refine it', verifyH: 'Then verify it', reflectH: 'Then reflect',
			replace: 'Replace the highlighted [placeholders] with your own details, and run it on content you can open.',
			tagline: 'Copilot is a collaborator, not an autopilot.', hello: 'How can I help?', ask: 'Ask Copilot', prompt: 'Prompt', caption: 'Try it yourself',
			callout: 'Use content you can open. Check every point against the source.', common: 'Replace the placeholders, run it, then refine and check the answer.',
			verify: ['Accuracy', 'Completeness', 'Source information', 'Deadlines and commitments', 'Information permissions'],
			reflect: ['What did Copilot help you complete faster?', 'What still requires your professional judgment?'],
			refine: ['Make this more concise.', 'Tailor it to [audience].', 'Identify any missing information.'], openChat: 'Open Copilot Chat' },
		es: { copy: 'Copiar prompt', copied: 'Copiado \u2713', pick: 'Elige un prompt', refineH: 'Luego, refínalo', verifyH: 'Luego, verifícalo', reflectH: 'Luego, reflexiona',
			replace: 'Sustituye los [marcadores] resaltados por tus propios datos y ejecútalo con contenido que puedas abrir.',
			tagline: 'Copilot es un colaborador, no un piloto automático.', hello: '¿En qué puedo ayudarte?', ask: 'Pregunta a Copilot', prompt: 'Prompt', caption: 'Pruébalo tú',
			callout: 'Usa contenido que puedas abrir. Comprueba cada punto con la fuente.', common: 'Sustituye los marcadores, ejecútalo y luego refina y comprueba la respuesta.',
			verify: ['Exactitud', 'Integridad', 'Información de origen', 'Plazos y compromisos', 'Permisos de la información'],
			reflect: ['¿Qué te ayudó Copilot a terminar más rápido?', '¿Qué sigue requiriendo tu criterio profesional?'],
			refine: ['Hazlo más conciso.', 'Adáptalo a [público].', 'Identifica la información que falta.'], openChat: 'Abrir Copilot Chat' },
		pt: { copy: 'Copiar prompt', copied: 'Copiado \u2713', pick: 'Escolha um prompt', refineH: 'Depois, refine', verifyH: 'Depois, verifique', reflectH: 'Depois, reflita',
			replace: 'Troque os [marcadores] destacados pelos seus próprios dados e execute com conteúdo que você consiga abrir.',
			tagline: 'O Copilot é um colaborador, não um piloto automático.', hello: 'Como posso ajudar?', ask: 'Pergunte ao Copilot', prompt: 'Prompt', caption: 'Experimente',
			callout: 'Use conteúdo que você consiga abrir. Confira cada ponto com a fonte.', common: 'Troque os marcadores, execute e depois refine e confira a resposta.',
			verify: ['Precisão', 'Completude', 'Informações de origem', 'Prazos e compromissos', 'Permissões das informações'],
			reflect: ['O que o Copilot ajudou você a concluir mais rápido?', 'O que ainda exige o seu julgamento profissional?'],
			refine: ['Deixe isso mais conciso.', 'Adapte para [público].', 'Identifique qualquer informação que esteja faltando.'], openChat: 'Abrir o Copilot Chat' },
		ja: { copy: 'プロンプトをコピー', copied: 'コピーしました \u2713', pick: 'プロンプトを選ぶ', refineH: '次に、絞り込む', verifyH: '次に、確認する', reflectH: '次に、振り返る',
			replace: '強調表示された[ ]の部分をご自身の内容に置き換え、開けるコンテンツで実行してください。',
			tagline: 'Copilot は共同作業者であり、自動操縦ではありません。', hello: 'どのようなご用件ですか？', ask: 'Copilot に質問', prompt: 'プロンプト', caption: '試してみよう',
			callout: '開けるコンテンツを使い、すべてのポイントを情報源と照らして確認します。', common: '[ ]を置き換えて実行し、絞り込んでから回答を確認しましょう。',
			verify: ['正確さ', '網羅性', '情報源', '期限とコミットメント', '情報へのアクセス権限'],
			reflect: ['Copilot のおかげで、何が早く終わりましたか？', '専門家としての判断がまだ必要なのは何ですか？'],
			refine: ['もっと簡潔にしてください。', '[対象者]向けに調整してください。', '不足している情報を指摘してください。'], openChat: 'Copilot Chat を開く' },
		ko: { copy: '프롬프트 복사', copied: '복사됨 \u2713', pick: '프롬프트 선택', refineH: '그다음, 다듬기', verifyH: '그다음, 확인하기', reflectH: '그다음, 돌아보기',
			replace: '강조 표시된 [ ] 부분을 내 정보로 바꾸고, 열 수 있는 콘텐츠로 실행해 보세요.',
			tagline: 'Copilot은 협력자이지 자동 조종 장치가 아닙니다.', hello: '무엇을 도와드릴까요?', ask: 'Copilot에게 질문', prompt: '프롬프트', caption: '직접 해 보기',
			callout: '열 수 있는 콘텐츠를 사용하고, 모든 요점을 출처와 대조해 확인하세요.', common: '[ ] 부분을 바꿔 실행한 다음, 다듬고 답변을 확인하세요.',
			verify: ['정확성', '완전성', '출처 정보', '마감일과 약속', '정보 접근 권한'],
			reflect: ['Copilot 덕분에 무엇을 더 빨리 끝냈나요?', '여전히 내 전문적 판단이 필요한 것은 무엇인가요?'],
			refine: ['더 간결하게 만들어 주세요.', '[대상]에 맞게 조정해 주세요.', '빠진 정보가 있으면 알려 주세요.'], openChat: 'Copilot Chat 열기' }
	};

	// page headline + the sentence that says where to start, per language
	var PAGES = {
		M365Copilot: {
			en: { title: 'Now try it yourself', open: 'Open Copilot Chat at copilot.cloud.microsoft/chat and copy a prompt.' },
			es: { title: 'Ahora pruébalo tú', open: 'Abre Copilot Chat en copilot.cloud.microsoft/chat y copia un prompt.' },
			pt: { title: 'Agora é a sua vez', open: 'Abra o Copilot Chat em copilot.cloud.microsoft/chat e copie um prompt.' },
			ja: { title: 'さあ、試してみましょう', open: 'copilot.cloud.microsoft/chat で Copilot Chat を開き、プロンプトをコピーします。' },
			ko: { title: '이제 직접 해 보세요', open: 'copilot.cloud.microsoft/chat에서 Copilot Chat을 열고 프롬프트를 복사하세요.' }
		},
		CopilotInWord: {
			en: { title: 'Your turn: pull the actions out of a long document', open: 'Open any long document in Word, open the Copilot pane, and copy a prompt.' },
			es: { title: 'Tu turno: extrae las acciones de un documento largo', open: 'Abre cualquier documento largo en Word, abre el panel de Copilot y copia un prompt.' },
			pt: { title: 'Sua vez: extraia as ações de um documento longo', open: 'Abra qualquer documento longo no Word, abra o painel do Copilot e copie um prompt.' },
			ja: { title: 'あなたの番：長い文書からアクションを抜き出す', open: 'Word で長い文書を開き、Copilot ウィンドウを開いて、プロンプトをコピーします。' },
			ko: { title: '직접 해 보세요: 긴 문서에서 실행 항목 뽑기', open: 'Word에서 긴 문서를 열고, Copilot 창을 열어 프롬프트를 복사하세요.' }
		},
		CopilotInPowerPoint: {
			en: { title: 'Your turn: turn a document into slides', open: 'Start a new presentation in PowerPoint and open Copilot. Bring in a file: drag it into the chat, or type / and pick any file from your OneDrive. Then copy a prompt.' },
			es: { title: 'Tu turno: convierte un documento en diapositivas', open: 'Inicia una presentación nueva en PowerPoint y abre Copilot. Trae un archivo: arrástralo al chat o escribe / y elige cualquier archivo de tu OneDrive. Después copia un prompt.' },
			pt: { title: 'Sua vez: transforme um documento em slides', open: 'Inicie uma nova apresentação no PowerPoint e abra o Copilot. Traga um arquivo: arraste-o para o chat ou digite / e escolha qualquer arquivo do seu OneDrive. Depois copie um prompt.' },
			ja: { title: 'あなたの番：文書をスライドに変える', open: 'PowerPoint で新しいプレゼンテーションを始め、Copilot を開きます。ファイルをチャットにドラッグするか、/ を入力して OneDrive の任意のファイルを選びます。そのあと、プロンプトをコピーします。' },
			ko: { title: '직접 해 보세요: 문서를 슬라이드로 바꾸기', open: 'PowerPoint에서 새 프레젠테이션을 시작하고 Copilot을 여세요. 파일을 채팅으로 끌어다 놓거나 /를 입력해 OneDrive의 파일을 선택하세요. 그다음 프롬프트를 복사하세요.' }
		},
		CopilotInExcel: {
			en: { title: 'Your turn: find the trends and the outliers', open: 'Open a workbook with a table of data, open the Copilot pane, and copy a prompt.' },
			es: { title: 'Tu turno: encuentra las tendencias y los valores atípicos', open: 'Abre un libro con una tabla de datos, abre el panel de Copilot y copia un prompt.' },
			pt: { title: 'Sua vez: encontre as tendências e os valores atípicos', open: 'Abra uma pasta de trabalho com uma tabela de dados, abra o painel do Copilot e copie um prompt.' },
			ja: { title: 'あなたの番：傾向と外れ値を見つける', open: 'データの表があるブックを開き、Copilot ウィンドウを開いて、プロンプトをコピーします。' },
			ko: { title: '직접 해 보세요: 추세와 이상치 찾기', open: '데이터 표가 있는 통합 문서를 열고, Copilot 창을 열어 프롬프트를 복사하세요.' }
		},
		CopilotInOutlook: {
			en: { title: 'Your turn: summarise a long email thread', open: 'Open a long email thread in Outlook, choose Copilot, and copy a prompt.' },
			es: { title: 'Tu turno: resume un hilo de correos largo', open: 'Abre un hilo de correos largo en Outlook, elige Copilot y copia un prompt.' },
			pt: { title: 'Sua vez: resuma uma conversa longa de e-mails', open: 'Abra uma conversa longa de e-mails no Outlook, escolha o Copilot e copie um prompt.' },
			ja: { title: 'あなたの番：長いメールのスレッドを要約する', open: 'Outlook で長いメールのスレッドを開き、Copilot を選んで、プロンプトをコピーします。' },
			ko: { title: '직접 해 보세요: 긴 이메일 스레드 요약하기', open: 'Outlook에서 긴 이메일 스레드를 열고 Copilot을 선택한 다음, 프롬프트를 복사하세요.' }
		},
		CopilotInTeams: {
			en: { title: 'Your turn: decisions and actions from a meeting', open: 'Open a Teams meeting that has a recording or transcript, open Copilot, and copy a prompt.' },
			es: { title: 'Tu turno: decisiones y acciones de una reunión', open: 'Abre una reunión de Teams que tenga grabación o transcripción, abre Copilot y copia un prompt.' },
			pt: { title: 'Sua vez: decisões e ações de uma reunião', open: 'Abra uma reunião do Teams que tenha gravação ou transcrição, abra o Copilot e copie um prompt.' },
			ja: { title: 'あなたの番：会議の決定事項とアクション', open: '録画または文字起こしのある Teams 会議を開き、Copilot を開いて、プロンプトをコピーします。' },
			ko: { title: '직접 해 보세요: 회의의 결정과 실행 항목', open: '녹화본이나 대화록이 있는 Teams 회의를 열고 Copilot을 열어 프롬프트를 복사하세요.' }
		}
	};

	// three prompts per page per language
	var PROMPTS = {
		M365Copilot: {
			en: [
				P('Prioritise my day', [G, 'Review my work for today and create a priority list.'], [C, 'I am preparing for [meeting or project].'], [S, 'Include the meetings I need to prepare for, emails and messages that may need a reply, and any deadlines mentioned.'], [E, 'Explain why each item matters and say when a priority is unclear.']),
				P('What can I start now?', [G, 'Look at my open tasks and tell me which ones I can start right now.'], [E, 'For each one, say what I need to begin and what is blocking the rest. Put them in the order I should do them.']),
				P('Draft a status update', [G, 'Draft a short status update for [audience] about [project].'], [S, 'Use only information you can find in my recent emails, meetings and files.'], [E, 'Keep it under 120 words, list the next steps, and flag anything you are not sure about.'])
			],
			es: [
				P('Prioriza mi día', [G, 'Revisa mi trabajo de hoy y crea una lista de prioridades.'], [C, 'Me estoy preparando para [reunión o proyecto].'], [S, 'Incluye las reuniones que debo preparar, los correos y mensajes que pueden necesitar respuesta y los plazos mencionados.'], [E, 'Explica por qué importa cada elemento e indica cuándo una prioridad no está clara.']),
				P('¿Qué puedo empezar ya?', [G, 'Revisa mis tareas abiertas e indícame cuáles puedo empezar ahora mismo.'], [E, 'Para cada una, dime qué necesito para empezar y qué bloquea al resto. Ordénalas según el orden en que debería hacerlas.']),
				P('Borrador de actualización', [G, 'Redacta una breve actualización de estado para [público] sobre [proyecto].'], [S, 'Usa solo la información que encuentres en mis correos, reuniones y archivos recientes.'], [E, 'Que tenga menos de 120 palabras, enumera los próximos pasos y señala todo lo que no tengas claro.'])
			],
			pt: [
				P('Priorize o meu dia', [G, 'Revise o meu trabalho de hoje e crie uma lista de prioridades.'], [C, 'Estou me preparando para [reunião ou projeto].'], [S, 'Inclua as reuniões para as quais preciso me preparar, os e-mails e mensagens que podem precisar de resposta e os prazos mencionados.'], [E, 'Explique por que cada item importa e diga quando uma prioridade não estiver clara.']),
				P('O que posso começar agora?', [G, 'Veja as minhas tarefas em aberto e diga quais posso começar agora.'], [E, 'Para cada uma, diga o que preciso para começar e o que está bloqueando as demais. Coloque-as na ordem em que devo fazê-las.']),
				P('Rascunho de atualização', [G, 'Escreva uma breve atualização de status para [público] sobre [projeto].'], [S, 'Use apenas informações que você encontrar nos meus e-mails, reuniões e arquivos recentes.'], [E, 'Use menos de 120 palavras, liste os próximos passos e sinalize o que você não tiver certeza.'])
			],
			ja: [
				P('今日の優先順位', [G, '今日の自分の仕事を確認して、優先順位リストを作ってください。'], [C, '私は[会議またはプロジェクト]の準備をしています。'], [S, '準備が必要な会議、返信が必要そうなメールやメッセージ、言及されている期限を含めてください。'], [E, 'それぞれが重要な理由を説明し、優先度が不明な場合はそう伝えてください。']),
				P('今すぐ始められること', [G, '私の未完了のタスクを確認し、今すぐ始められるものを教えてください。'], [E, 'それぞれについて、始めるために必要なものと、残りを妨げているものを示してください。取り組むべき順に並べてください。']),
				P('進捗報告の下書き', [G, '[対象者]向けに、[プロジェクト]の簡単な進捗報告を下書きしてください。'], [S, '最近のメール、会議、ファイルから見つかる情報だけを使ってください。'], [E, '300 文字以内にし、次のステップを挙げ、確信が持てない点には印を付けてください。'])
			],
			ko: [
				P('오늘 우선순위', [G, '오늘 내 업무를 검토해서 우선순위 목록을 만들어 주세요.'], [C, '저는 [회의 또는 프로젝트]를 준비하고 있습니다.'], [S, '준비해야 할 회의, 답장이 필요할 수 있는 이메일과 메시지, 언급된 마감일을 포함해 주세요.'], [E, '각 항목이 중요한 이유를 설명하고, 우선순위가 불분명하면 그렇다고 알려 주세요.']),
				P('지금 시작할 수 있는 일', [G, '내 미완료 작업을 보고 지금 바로 시작할 수 있는 것을 알려 주세요.'], [E, '각 작업마다 시작하는 데 필요한 것과 나머지를 막고 있는 것을 알려 주세요. 해야 할 순서대로 정렬해 주세요.']),
				P('현황 업데이트 초안', [G, '[대상]에게 보낼 [프로젝트]의 짧은 현황 업데이트 초안을 작성해 주세요.'], [S, '최근 이메일, 회의, 파일에서 찾을 수 있는 정보만 사용해 주세요.'], [E, '120단어 미만으로 쓰고, 다음 단계를 나열하고, 확신이 없는 부분은 표시해 주세요.'])
			]
		},
		CopilotInWord: {
			en: [
				P('Extract the actions', [G, 'List every action item in this document.'], [E, 'For each one, show the owner and the due date if stated. Put anything without an owner or due date under “Needs confirmation.” Do not assign missing information.']),
				P('Summarise for a reader', [G, 'Summarize this document in five bullets for the engagement partner.'], [C, 'Start with the decision or request they need to act on.'], [E, 'Name the section each point comes from.']),
				P('Tidy the notes', [G, 'Rewrite the Finance Director interview notes as one short, clear paragraph.'], [E, 'Keep the same facts and meaning, and keep it under 100 words.'])
			],
			es: [
				P('Extrae las acciones', [G, 'Enumera todas las acciones pendientes de este documento.'], [E, 'Para cada una, indica el responsable y la fecha límite si constan. Pon lo que no tenga responsable o fecha en «Pendiente de confirmar». No asignes información que falte.']),
				P('Resume para un lector', [G, 'Resume este documento en cinco viñetas para el socio del encargo.'], [C, 'Empieza por la decisión o solicitud que deben atender.'], [E, 'Indica de qué sección procede cada punto.']),
				P('Ordena las notas', [G, 'Reescribe las notas de la entrevista con el director financiero como un párrafo breve y claro.'], [E, 'Conserva los mismos hechos y el mismo significado, y que tenga menos de 100 palabras.'])
			],
			pt: [
				P('Extraia as ações', [G, 'Liste todas as ações pendentes deste documento.'], [E, 'Para cada uma, mostre o responsável e o prazo, se constarem. Coloque o que não tiver responsável ou prazo em “Precisa de confirmação”. Não atribua informações que faltam.']),
				P('Resuma para um leitor', [G, 'Resuma este documento em cinco tópicos para o sócio responsável pelo trabalho.'], [C, 'Comece pela decisão ou pedido que eles precisam atender.'], [E, 'Indique de qual seção vem cada ponto.']),
				P('Organize as notas', [G, 'Reescreva as notas da entrevista com o diretor financeiro como um parágrafo curto e claro.'], [E, 'Mantenha os mesmos fatos e o mesmo significado, com menos de 100 palavras.'])
			],
			ja: [
				P('アクションを抽出', [G, 'この文書にあるアクション項目をすべて挙げてください。'], [E, 'それぞれについて、記載があれば担当者と期限を示してください。担当者や期限がないものは「要確認」にまとめてください。不足している情報を勝手に割り当てないでください。']),
				P('読者向けに要約', [G, 'この文書を、業務執行パートナー向けに 5 つの箇条書きで要約してください。'], [C, '相手が判断または対応すべき内容から始めてください。'], [E, '各ポイントがどのセクションに基づくかを示してください。']),
				P('メモを整える', [G, '財務責任者のインタビューメモを、短く分かりやすい 1 つの段落に書き直してください。'], [E, '事実と意味は変えず、200 文字以内にしてください。'])
			],
			ko: [
				P('실행 항목 추출', [G, '이 문서의 실행 항목을 모두 나열해 주세요.'], [E, "각 항목마다 담당자와 기한이 있으면 보여 주세요. 담당자나 기한이 없는 항목은 '확인 필요'에 넣어 주세요. 빠진 정보를 임의로 채우지 마세요."]),
				P('독자를 위한 요약', [G, '이 문서를 업무 총괄 파트너를 위해 다섯 개의 글머리 기호로 요약해 주세요.'], [C, '그들이 결정하거나 요청받은 내용부터 시작해 주세요.'], [E, '각 요점이 어느 섹션에서 나왔는지 알려 주세요.']),
				P('메모 정리하기', [G, '재무 책임자 인터뷰 메모를 짧고 명확한 한 문단으로 다시 써 주세요.'], [E, '사실과 의미는 그대로 유지하고 100단어 미만으로 써 주세요.'])
			]
		},
		CopilotInPowerPoint: {
			en: [
				P('From a document to slides', [G, 'Create a six-slide presentation for senior management from Client-Background.'], [C, 'Start with the key message, then use one slide for each main point.'], [E, 'Keep each slide to four bullets at most.']),
				P('Add speaker notes', [G, 'Add speaker notes to each slide.'], [E, 'Write two sentences on what to emphasise, and one question the audience may ask.']),
				P('Sharpen one slide', [G, 'Make slide 3 clearer.'], [E, 'Give it one headline sentence and three bullets, and suggest a simple visual.'])
			],
			es: [
				P('Del documento a diapositivas', [G, 'Crea una presentación de seis diapositivas para la dirección a partir de Client-Background.'], [C, 'Empieza con el mensaje clave y usa una diapositiva para cada punto principal.'], [E, 'Limita cada diapositiva a cuatro viñetas como máximo.']),
				P('Añade notas del orador', [G, 'Añade notas del orador a cada diapositiva.'], [E, 'Escribe dos frases sobre lo que hay que destacar y una pregunta que el público podría hacer.']),
				P('Mejora una diapositiva', [G, 'Haz más clara la diapositiva 3.'], [E, 'Dale una frase de titular y tres viñetas, y sugiere un recurso visual sencillo.'])
			],
			pt: [
				P('Do documento aos slides', [G, 'Crie uma apresentação de seis slides para a diretoria a partir de Client-Background.'], [C, 'Comece com a mensagem principal e use um slide para cada ponto importante.'], [E, 'Limite cada slide a quatro tópicos, no máximo.']),
				P('Adicione notas do orador', [G, 'Adicione notas do orador a cada slide.'], [E, 'Escreva duas frases sobre o que enfatizar e uma pergunta que o público pode fazer.']),
				P('Melhore um slide', [G, 'Deixe o slide 3 mais claro.'], [E, 'Dê a ele uma frase de título e três tópicos, e sugira um recurso visual simples.'])
			],
			ja: [
				P('文書からスライドへ', [G, 'Client-Background から、経営層向けの 6 枚のプレゼンテーションを作成してください。'], [C, '最初に重要なメッセージを置き、主なポイントごとに 1 枚のスライドを使ってください。'], [E, '各スライドは箇条書き 4 つまでにしてください。']),
				P('発表者ノートを追加', [G, '各スライドに発表者ノートを追加してください。'], [E, '強調すべき点を 2 文で書き、聞き手が尋ねそうな質問を 1 つ添えてください。']),
				P('1 枚を磨く', [G, 'スライド 3 を分かりやすくしてください。'], [E, '見出しを 1 文、箇条書きを 3 つにし、シンプルなビジュアルを提案してください。'])
			],
			ko: [
				P('문서를 슬라이드로', [G, 'Client-Background로 경영진을 위한 여섯 장짜리 프레젠테이션을 만들어 주세요.'], [C, '핵심 메시지로 시작하고, 주요 요점마다 슬라이드 한 장을 사용해 주세요.'], [E, '각 슬라이드는 글머리 기호를 최대 네 개로 제한해 주세요.']),
				P('발표자 노트 추가', [G, '각 슬라이드에 발표자 노트를 추가해 주세요.'], [E, '강조할 점을 두 문장으로 쓰고, 청중이 할 만한 질문을 하나 덧붙여 주세요.']),
				P('슬라이드 한 장 다듬기', [G, '슬라이드 3을 더 명확하게 만들어 주세요.'], [E, '제목 문장 하나와 글머리 기호 세 개로 구성하고, 간단한 시각 자료를 제안해 주세요.'])
			]
		},
		CopilotInExcel: {
			en: [
				P('Find the trends', [G, 'Analyze this data and identify the three most important trends.'], [S, 'Name the column and the period for each trend.'], [E, 'Explain what may be causing each one, and say if the data is too limited to be sure.']),
				P('Spot the outliers', [G, 'Find unusual values in the Discount Percentage column of the Sales Transactions sheet.'], [E, 'List the rows that look unusual and explain why. Separate possible data-entry errors from genuine results.']),
				P('Chart the story', [G, 'Create a chart that compares Net Sales Local by Market for each Fiscal Quarter.'], [E, 'Put it on a new sheet and explain in two sentences what it shows.'])
			],
			es: [
				P('Encuentra las tendencias', [G, 'Analiza estos datos e identifica las tres tendencias más importantes.'], [S, 'Nombra la columna y el periodo de cada tendencia.'], [E, 'Explica qué puede estar causando cada una e indica si los datos son demasiado limitados para estar seguros.']),
				P('Detecta valores atípicos', [G, 'Encuentra valores inusuales en la columna Discount Percentage de la hoja Sales Transactions.'], [E, 'Enumera las filas que parecen inusuales y explica por qué. Separa los posibles errores de entrada de datos de los resultados genuinos.']),
				P('Cuenta la historia con un gráfico', [G, 'Crea un gráfico que compare Net Sales Local por Market en cada Fiscal Quarter.'], [E, 'Colócalo en una hoja nueva y explica en dos frases qué muestra.'])
			],
			pt: [
				P('Encontre as tendências', [G, 'Analise estes dados e identifique as três tendências mais importantes.'], [S, 'Cite a coluna e o período de cada tendência.'], [E, 'Explique o que pode estar causando cada uma e diga se os dados são limitados demais para ter certeza.']),
				P('Encontre valores atípicos', [G, 'Encontre valores incomuns na coluna Discount Percentage da planilha Sales Transactions.'], [E, 'Liste as linhas que parecem incomuns e explique por quê. Separe possíveis erros de digitação de resultados genuínos.']),
				P('Conte a história com um gráfico', [G, 'Crie um gráfico que compare Net Sales Local por Market em cada Fiscal Quarter.'], [E, 'Coloque-o em uma nova planilha e explique em duas frases o que ele mostra.'])
			],
			ja: [
				P('傾向を見つける', [G, 'このデータを分析し、最も重要な 3 つの傾向を挙げてください。'], [S, 'それぞれの傾向について、列と期間を示してください。'], [E, 'それぞれの原因として考えられることを説明し、データが限られていて断定できない場合はそう伝えてください。']),
				P('外れ値を見つける', [G, 'Sales Transactions シートの Discount Percentage 列で、通常と異なる値を見つけてください。'], [E, '異常に見える行を挙げて理由を説明してください。入力ミスの可能性と、実際の結果を分けてください。']),
				P('グラフで伝える', [G, 'Fiscal Quarter ごとに、Market 別の Net Sales Local を比較するグラフを作成してください。'], [E, '新しいシートに配置し、グラフが示す内容を 2 文で説明してください。'])
			],
			ko: [
				P('추세 찾기', [G, '이 데이터를 분석해서 가장 중요한 추세 세 가지를 알려 주세요.'], [S, '각 추세의 열과 기간을 밝혀 주세요.'], [E, '각 추세의 원인으로 추정되는 것을 설명하고, 데이터가 너무 제한적이라 확신하기 어렵다면 그렇게 알려 주세요.']),
				P('이상치 찾기', [G, 'Sales Transactions 시트의 Discount Percentage 열에서 평소와 다른 값을 찾아 주세요.'], [E, '이상해 보이는 행을 나열하고 이유를 설명해 주세요. 입력 오류일 수 있는 것과 실제 결과를 구분해 주세요.']),
				P('차트로 설명하기', [G, 'Fiscal Quarter마다 Market별 Net Sales Local을 비교하는 차트를 만들어 주세요.'], [E, '새 시트에 넣고, 차트가 보여 주는 내용을 두 문장으로 설명해 주세요.'])
			]
		},
		CopilotInOutlook: {
			en: [
				P('Summarise the thread', [G, 'Summarize this email thread.'], [E, 'Show what was decided, what is still open, who owns each action and any deadline. Keep it under 150 words.']),
				P('What is still unanswered?', [G, 'List the questions in this thread that nobody has answered yet.'], [E, 'Say who was asked and by when.']),
				P('Draft the reply', [G, 'Draft a reply to [name].'], [C, 'Confirm the decisions and ask for what is missing.'], [E, 'Use a polite, professional tone and keep it under 120 words.'])
			],
			es: [
				P('Resume el hilo', [G, 'Resume este hilo de correos.'], [E, 'Muestra qué se decidió, qué sigue abierto, quién es responsable de cada acción y cualquier fecha límite. Que tenga menos de 150 palabras.']),
				P('¿Qué sigue sin respuesta?', [G, 'Enumera las preguntas de este hilo que nadie ha respondido todavía.'], [E, 'Indica a quién se le preguntó y para cuándo.']),
				P('Redacta la respuesta', [G, 'Redacta una respuesta para [nombre].'], [C, 'Confirma las decisiones y pide lo que falta.'], [E, 'Usa un tono cortés y profesional, y que tenga menos de 120 palabras.'])
			],
			pt: [
				P('Resuma a conversa', [G, 'Resuma esta conversa de e-mails.'], [E, 'Mostre o que foi decidido, o que ainda está em aberto, quem é responsável por cada ação e qualquer prazo. Use menos de 150 palavras.']),
				P('O que ainda está sem resposta?', [G, 'Liste as perguntas desta conversa que ninguém respondeu ainda.'], [E, 'Diga quem foi perguntado e para quando.']),
				P('Escreva a resposta', [G, 'Escreva uma resposta para [nome].'], [C, 'Confirme as decisões e peça o que está faltando.'], [E, 'Use um tom educado e profissional, com menos de 120 palavras.'])
			],
			ja: [
				P('スレッドを要約', [G, 'このメールのスレッドを要約してください。'], [E, '決まったこと、まだ未解決のこと、各アクションの担当者、期限を示してください。300 文字以内にしてください。']),
				P('未回答の質問', [G, 'このスレッドで、まだ誰も答えていない質問を挙げてください。'], [E, '誰に尋ねたか、いつまでかを示してください。']),
				P('返信を下書き', [G, '[名前]さんへの返信を下書きしてください。'], [C, '決定事項を確認し、不足している情報を依頼してください。'], [E, '丁寧でプロフェッショナルな口調で、250 文字以内にしてください。'])
			],
			ko: [
				P('스레드 요약', [G, '이 이메일 스레드를 요약해 주세요.'], [E, '결정된 것, 아직 열려 있는 것, 각 작업의 담당자, 마감일을 보여 주세요. 150단어 미만으로 써 주세요.']),
				P('아직 답이 없는 질문', [G, '이 스레드에서 아직 아무도 답하지 않은 질문을 나열해 주세요.'], [E, '누구에게 물었는지, 언제까지인지 알려 주세요.']),
				P('답장 초안', [G, '[이름]에게 보낼 답장 초안을 작성해 주세요.'], [C, '결정 사항을 확인하고, 부족한 내용을 요청해 주세요.'], [E, '정중하고 전문적인 어조로 120단어 미만으로 써 주세요.'])
			]
		},
		CopilotInTeams: {
			en: [
				P('Decisions and actions', [G, 'Summarize this meeting.'], [E, 'List the decisions made, the action items with owners and due dates, and any open questions. Name who raised each point.']),
				P('What did we agree?', [G, 'What did we agree about [topic]?'], [E, 'Say who said it and when, and tell me if anyone disagreed.']),
				P('Follow-up message', [G, 'Draft a follow-up message for the team with the decisions and actions.'], [E, 'Keep it short and friendly, and mark anything that still needs confirmation.'])
			],
			es: [
				P('Decisiones y acciones', [G, 'Resume esta reunión.'], [E, 'Enumera las decisiones tomadas, las acciones con responsables y fechas límite, y las preguntas abiertas. Indica quién planteó cada punto.']),
				P('¿Qué acordamos?', [G, '¿Qué acordamos sobre [tema]?'], [E, 'Di quién lo dijo y cuándo, y avísame si alguien no estuvo de acuerdo.']),
				P('Mensaje de seguimiento', [G, 'Redacta un mensaje de seguimiento para el equipo con las decisiones y las acciones.'], [E, 'Que sea breve y cercano, y marca todo lo que aún necesite confirmación.'])
			],
			pt: [
				P('Decisões e ações', [G, 'Resuma esta reunião.'], [E, 'Liste as decisões tomadas, as ações com responsáveis e prazos, e as perguntas em aberto. Diga quem levantou cada ponto.']),
				P('O que combinamos?', [G, 'O que combinamos sobre [assunto]?'], [E, 'Diga quem falou e quando, e avise se alguém discordou.']),
				P('Mensagem de acompanhamento', [G, 'Escreva uma mensagem de acompanhamento para a equipe com as decisões e as ações.'], [E, 'Seja breve e simpático, e marque tudo que ainda precisa de confirmação.'])
			],
			ja: [
				P('決定事項とアクション', [G, 'この会議を要約してください。'], [E, '決定事項、担当者と期限つきのアクション項目、未解決の質問を挙げてください。各ポイントを提起した人も示してください。']),
				P('何に合意した？', [G, '[トピック]について、私たちは何に合意しましたか？'], [E, '誰がいつ発言したかを示し、反対した人がいれば教えてください。']),
				P('フォローアップ', [G, '決定事項とアクションをまとめた、チーム向けのフォローアップメッセージを下書きしてください。'], [E, '短く親しみやすい文面にし、まだ確認が必要な点には印を付けてください。'])
			],
			ko: [
				P('결정과 실행 항목', [G, '이 회의를 요약해 주세요.'], [E, '내려진 결정, 담당자와 기한이 있는 실행 항목, 아직 열려 있는 질문을 나열해 주세요. 각 요점을 제기한 사람도 알려 주세요.']),
				P('무엇에 합의했나', [G, '[주제]에 대해 우리가 무엇에 합의했나요?'], [E, '누가 언제 말했는지 알려 주고, 반대한 사람이 있었는지 알려 주세요.']),
				P('후속 메시지', [G, '결정 사항과 실행 항목을 담아 팀에 보낼 후속 메시지 초안을 작성해 주세요.'], [E, '짧고 친근하게 쓰고, 아직 확인이 필요한 부분은 표시해 주세요.'])
			]
		}
	};

	var TIPS = {"CopilotInPowerPoint":{"en":["Use a file from OneDrive","Drag a file into the chat, or type / to search and pick any file from your OneDrive.","Search your files"],"es":["Usa un archivo de OneDrive","Arrastra un archivo al chat o escribe / para buscar y elegir cualquier archivo de tu OneDrive.","Buscar tus archivos"],"pt":["Use um arquivo do OneDrive","Arraste um arquivo para o chat ou digite / para pesquisar e escolher qualquer arquivo do seu OneDrive.","Pesquisar seus arquivos"],"ja":["OneDrive のファイルを使う","ファイルをチャットにドラッグするか、/ を入力して OneDrive のファイルを検索して選びます。","ファイルを検索"],"ko":["OneDrive 파일 사용하기","파일을 채팅으로 끌어다 놓거나, /를 입력해 OneDrive의 파일을 검색해 선택하세요.","파일 검색"]},"CopilotInWord":{"en":["Use a file from OneDrive","Drag a file into the chat, or type / to search and pick any file from your OneDrive.","Search your files"],"es":["Usa un archivo de OneDrive","Arrastra un archivo al chat o escribe / para buscar y elegir cualquier archivo de tu OneDrive.","Buscar tus archivos"],"pt":["Use um arquivo do OneDrive","Arraste um arquivo para o chat ou digite / para pesquisar e escolher qualquer arquivo do seu OneDrive.","Pesquisar seus arquivos"],"ja":["OneDrive のファイルを使う","ファイルをチャットにドラッグするか、/ を入力して OneDrive のファイルを検索して選びます。","ファイルを検索"],"ko":["OneDrive 파일 사용하기","파일을 채팅으로 끌어다 놓거나, /를 입력해 OneDrive의 파일을 검색해 선택하세요.","파일 검색"]},"CopilotInExcel":{"en":["Use a file from OneDrive","Drag a file into the chat, or type / to search and pick any file from your OneDrive.","Search your files"],"es":["Usa un archivo de OneDrive","Arrastra un archivo al chat o escribe / para buscar y elegir cualquier archivo de tu OneDrive.","Buscar tus archivos"],"pt":["Use um arquivo do OneDrive","Arraste um arquivo para o chat ou digite / para pesquisar e escolher qualquer arquivo do seu OneDrive.","Pesquisar seus arquivos"],"ja":["OneDrive のファイルを使う","ファイルをチャットにドラッグするか、/ を入力して OneDrive のファイルを検索して選びます。","ファイルを検索"],"ko":["OneDrive 파일 사용하기","파일을 채팅으로 끌어다 놓거나, /를 입력해 OneDrive의 파일을 검색해 선택하세요.","파일 검색"]}};
	var SAMPLES = {"CopilotInExcel":{"file":"Regional-Sales-Performance.xlsx","ref":"Regional-Sales-Performance","d":{"en":"Sales workbook: 320 transactions, targets, distributors and returns.","es":"Libro de ventas: 320 transacciones, objetivos, distribuidores y devoluciones.","pt":"Pasta de vendas: 320 transações, metas, distribuidores e devoluções.","ja":"売上ブック：取引 320 件、目標、販売代理店、返品。","ko":"매출 통합 문서: 거래 320건, 목표, 유통업체, 반품."}},"CopilotInWord":{"file":"Audit-Interview-Notes.docx","ref":"Audit-Interview-Notes","d":{"en":"Raw interview notes, about 540 words. Fictional training data.","es":"Notas de entrevistas sin editar, unas 540 palabras. Datos de formación ficticios.","pt":"Notas de entrevistas em bruto, cerca de 540 palavras. Dados de treinamento fictícios.","ja":"未整理のインタビューメモ（約 540 語）。架空の研修データです。","ko":"정리되지 않은 인터뷰 메모, 약 540단어. 가상의 교육용 데이터입니다."}},"CopilotInPowerPoint":{"file":"Client-Background.docx","ref":"Client-Background","d":{"en":"A two-page client brief to turn into slides. Fictional training data.","es":"Un informe de cliente de dos páginas para convertir en diapositivas. Datos de formación ficticios.","pt":"Um resumo de cliente de duas páginas para virar slides. Dados de treinamento fictícios.","ja":"スライドにするための 2 ページの顧客概要。架空の研修データです。","ko":"슬라이드로 만들 두 쪽짜리 고객 개요. 가상의 교육용 데이터입니다."}}};
	var DL = {"en":["Need a file? Download the sample","Save it in OneDrive first, so Copilot can read it.","Download"],"es":["¿Necesitas un archivo? Descarga el ejemplo","Guárdalo primero en OneDrive para que Copilot pueda leerlo.","Descargar"],"pt":["Precisa de um arquivo? Baixe o exemplo","Salve-o primeiro no OneDrive, para o Copilot conseguir lê-lo.","Baixar"],"ja":["ファイルが必要ですか？サンプルをダウンロード","Copilot が読めるよう、先に OneDrive に保存してください。","ダウンロード"],"ko":["파일이 필요하세요? 샘플 다운로드","Copilot이 읽을 수 있도록 먼저 OneDrive에 저장하세요.","다운로드"]};
	var RF = {"CopilotInExcel":{"en":"Tailor it for senior management.","es":"Adáptalo para la dirección.","pt":"Adapte para a diretoria.","ja":"経営層向けに調整してください。","ko":"경영진에 맞게 조정해 주세요."},"CopilotInWord":{"en":"Tailor it for senior management.","es":"Adáptalo para la dirección.","pt":"Adapte para a diretoria.","ja":"経営層向けに調整してください。","ko":"경영진에 맞게 조정해 주세요."},"CopilotInPowerPoint":{"en":"Tailor it for senior management.","es":"Adáptalo para la dirección.","pt":"Adapte para a diretoria.","ja":"経営層向けに調整してください。","ko":"경영진에 맞게 조정해 주세요."}};
	var READY = {"en":"Ready to paste: it works with the sample file.","es":"Listo para pegar: funciona con el archivo de ejemplo.","pt":"Pronto para colar: funciona com o arquivo de exemplo.","ja":"そのまま貼り付けられます。サンプルファイルで動作します。","ko":"그대로 붙여 넣으세요. 샘플 파일에서 작동합니다."};
	g.AWM365_DATA = { tips: TIPS, refine: RF, ready: READY, samples: SAMPLES, dl: DL, ui: UI, pages: PAGES, prompts: PROMPTS };
}(window));
