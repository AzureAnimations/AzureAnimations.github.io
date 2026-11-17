/* Runtime shared by the "office" home-page designs (index-2.html, index-3.html, ...).

   Each design supplies only a scene (<div id="ao-scene"> holding an <svg>) and calls
     AWOffice.init({ layout:'split'|'center', design:2, render(api){ ... } })
   render() runs once and again on every language change; inside it the design paints localized
   labels and calls api.attach(el, zoneId) for each clickable room so hover / focus / tap opens the
   journey popover. Journey names, descriptions, icons and hrefs come from lib/js/aw-office-data.js
   (generated from index.html), so nothing is translated twice.  */
(function (global) {
	'use strict';
	var D = global.AW_OFFICE_DATA;
	var LANG_KEY = 'aw-lang';

	// Which journeys live in which team's room. All 15 journeys are placed exactly once.
	var ZONES = [
		{ id: 'business', journeys: ['copilot'], color: '#0078d4', apps: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Teams', 'Copilot'] },
		{ id: 'makers',   journeys: ['studio'], color: '#0f9d8f', apps: ['CopilotStudio'] },
		{ id: 'ai',       journeys: ['foundry'], color: '#8b5cf6' },
		{ id: 'academy',  journeys: ['fundamentals', 'architect'], color: '#d08a1f' },
		{ id: 'network',  journeys: ['network'], color: '#00a3b0' },
		{ id: 'security', journeys: ['security', 'identity'], color: '#6b3fb5' },
		{ id: 'devops',   journeys: ['github'], color: '#2da44e' },
		{ id: 'cloud',    journeys: ['vms', 'compute', 'container', 'storage', 'database', 'integration'], color: '#e97526' }
	];

	var UI = {
		en: {
			kicker: 'Azure Animations', heroTitle: 'Every team has a room. <span class="grad-a">Walk in and press play.</span>',
			heroLead: 'Business users, agent makers and the IT teams that keep the cloud running all have a desk here. Pick a room and learn it, one short animation at a time.',
			hint: 'Hover or tap a room to peek inside', open: 'Open journey', dirTitle: 'All journeys, by team', design: 'Design',
			zones: {
				business: ['Business users', 'Word, Excel, PowerPoint and Outlook, with Copilot beside you'],
				makers: ['Agent makers', 'Low code: build agents for your own workflow in Copilot Studio'],
				ai: ['AI engineers', 'Pro code: models, agents and apps in Foundry'],
				academy: ['Cloud academy', 'Start here: fundamentals and architecture (AZ-900, AZ-305)'],
				network: ['Network team', 'VNets, peering, firewalls and load balancing'],
				security: ['Security & identity', 'Zero Trust, Key Vault and who gets in'],
				devops: ['DevOps team', 'Plan, branch, prove and ship'],
				cloud: ['Cloud platform team', 'Virtual machines, apps, containers, storage, data and messaging']
			}
		},
		es: {
			kicker: 'Azure Animations', heroTitle: 'Cada equipo tiene su sala. <span class="grad-a">Entra y dale a reproducir.</span>',
			heroLead: 'Usuarios de negocio, creadores de agentes y los equipos de TI que mantienen la nube en marcha: todos tienen su escritorio aquí. Elige una sala y aprende, una animación corta a la vez.',
			hint: 'Pasa el cursor o toca una sala para asomarte', open: 'Abrir recorrido', dirTitle: 'Todos los recorridos, por equipo', design: 'Diseño',
			zones: {
				business: ['Usuarios de negocio', 'Word, Excel, PowerPoint y Outlook, con Copilot a tu lado'],
				makers: ['Creadores de agentes', 'Low code: crea agentes para tu propio flujo de trabajo en Copilot Studio'],
				ai: ['Ingenieros de IA', 'Pro code: modelos, agentes y apps en Foundry'],
				academy: ['Academia de la nube', 'Empieza aquí: fundamentos y arquitectura (AZ-900, AZ-305)'],
				network: ['Equipo de redes', 'VNets, emparejamiento, firewalls y balanceo de carga'],
				security: ['Seguridad e identidad', 'Zero Trust, Key Vault y quién entra'],
				devops: ['Equipo DevOps', 'Planifica, ramifica, prueba y publica'],
				cloud: ['Plataforma en la nube', 'Máquinas virtuales, apps, contenedores, almacenamiento, datos y mensajería']
			}
		},
		ja: {
			kicker: 'Azure Animations', heroTitle: 'どのチームにも専用の部屋があります。<span class="grad-a">入って、再生を押そう。</span>',
			heroLead: 'ビジネスユーザー、エージェントを作る人、クラウドを支える IT チーム。それぞれの席がここにあります。部屋を選んで、短いアニメーションで一つずつ学びましょう。',
			hint: '部屋にカーソルを重ねるか、タップして中をのぞく', open: 'ジャーニーを開く', dirTitle: 'チーム別 すべてのジャーニー', design: 'デザイン',
			zones: {
				business: ['ビジネスユーザー', 'Word・Excel・PowerPoint・Outlook を Copilot と一緒に'],
				makers: ['エージェントを作る人', 'ローコード：Copilot Studio で自分の業務フロー用エージェントを作る'],
				ai: ['AI エンジニア', 'プロコード：Foundry でモデル・エージェント・アプリ'],
				academy: ['クラウド アカデミー', 'まずはここから：基礎とアーキテクチャ (AZ-900、AZ-305)'],
				network: ['ネットワークチーム', 'VNet、ピアリング、ファイアウォール、負荷分散'],
				security: ['セキュリティと ID', 'ゼロトラスト、Key Vault、誰が入れるか'],
				devops: ['DevOps チーム', '計画、ブランチ、検証、リリース'],
				cloud: ['クラウド基盤チーム', '仮想マシン、アプリ、コンテナー、ストレージ、データ、メッセージング']
			}
		},
		ko: {
			kicker: 'Azure Animations', heroTitle: '모든 팀에는 자기 방이 있습니다. <span class="grad-a">들어와서 재생을 누르세요.</span>',
			heroLead: '비즈니스 사용자, 에이전트를 만드는 사람, 클라우드를 운영하는 IT 팀까지 모두 이곳에 자리가 있습니다. 방을 고르고 짧은 애니메이션으로 하나씩 배워 보세요.',
			hint: '방에 마우스를 올리거나 탭해서 들여다보세요', open: '여정 열기', dirTitle: '팀별 전체 여정', design: '디자인',
			zones: {
				business: ['비즈니스 사용자', 'Word, Excel, PowerPoint, Outlook을 Copilot과 함께'],
				makers: ['에이전트 제작자', '로우코드: Copilot Studio로 내 업무 흐름용 에이전트 만들기'],
				ai: ['AI 엔지니어', '프로코드: Foundry의 모델, 에이전트, 앱'],
				academy: ['클라우드 아카데미', '여기서 시작: 기본과 아키텍처 (AZ-900, AZ-305)'],
				network: ['네트워크 팀', 'VNet, 피어링, 방화벽, 부하 분산'],
				security: ['보안 및 ID', '제로 트러스트, Key Vault, 누가 들어오는가'],
				devops: ['DevOps 팀', '계획, 브랜치, 검증, 배포'],
				cloud: ['클라우드 플랫폼 팀', '가상 머신, 앱, 컨테이너, 스토리지, 데이터, 메시징']
			}
		},
		pt: {
			kicker: 'Azure Animations', heroTitle: 'Cada equipe tem a sua sala. <span class="grad-a">Entre e aperte o play.</span>',
			heroLead: 'Usuários de negócio, criadores de agentes e as equipes de TI que mantêm a nuvem de pé: todos têm um lugar aqui. Escolha uma sala e aprenda, uma animação curta de cada vez.',
			hint: 'Passe o mouse ou toque numa sala para espiar', open: 'Abrir jornada', dirTitle: 'Todas as jornadas, por equipe', design: 'Design',
			zones: {
				business: ['Usuários de negócio', 'Word, Excel, PowerPoint e Outlook, com o Copilot ao lado'],
				makers: ['Criadores de agentes', 'Low code: agentes para o seu próprio fluxo de trabalho no Copilot Studio'],
				ai: ['Engenheiros de IA', 'Pro code: modelos, agentes e apps no Foundry'],
				academy: ['Academia da nuvem', 'Comece aqui: fundamentos e arquitetura (AZ-900, AZ-305)'],
				network: ['Equipe de redes', 'VNets, emparelhamento, firewalls e balanceamento de carga'],
				security: ['Segurança e identidade', 'Zero Trust, Key Vault e quem entra'],
				devops: ['Equipe DevOps', 'Planeje, crie branches, valide e publique'],
				cloud: ['Plataforma de nuvem', 'Máquinas virtuais, apps, contêineres, armazenamento, dados e mensageria']
			}
		}
	};

	var lang = 'en', opts = {}, pop, activeEl = null, pinned = false, hideTimer = 0;
	var PATHS = global.AW_OFFICE_PATHS || {};   // optional, only present on the private design pages

	// Headline + lead of the original home page (opts.head === 'classic').
	var CLASSIC_HEAD = {
		en: { heroTitle: 'Learn <span class="grad-a">Azure</span> and <span class="grad-b">Copilot</span>, one animation at a time.', heroLead: 'Short, visual, story-driven explainers for Azure, AI, and low-code \u2014 refreshingly light on text. Pick a journey and press play.' },
		es: { heroTitle: 'Aprende <span class="grad-a">Azure</span> y <span class="grad-b">Copilot</span>, una animaci\u00F3n a la vez.', heroLead: 'Explicaciones cortas, visuales y narradas sobre Azure, IA y low-code, con muy poco texto. Elige un recorrido y dale a reproducir.' },
		ja: { heroTitle: '<span class="grad-a">Azure</span> \u3068 <span class="grad-b">Copilot</span> \u3092\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3067\u5B66\u307C\u3046\u3002', heroLead: 'Azure\u3001AI\u3001\u30ED\u30FC\u30B3\u30FC\u30C9\u3092\u3001\u77ED\u304F\u3066\u30D3\u30B8\u30E5\u30A2\u30EB\u3067\u7269\u8A9E\u4ED5\u7ACB\u3066\u306E\u89E3\u8AAC\u3067\u3002\u6587\u5B57\u306F\u9A5A\u304F\u307B\u3069\u5C11\u306A\u3081\u3002\u30B8\u30E3\u30FC\u30CB\u30FC\u3092\u9078\u3093\u3067\u518D\u751F\u3059\u308B\u3060\u3051\u3002' },
		ko: { heroTitle: '<span class="grad-a">Azure</span>\uC640 <span class="grad-b">Copilot</span>\uC744 \uC560\uB2C8\uBA54\uC774\uC158\uC73C\uB85C \uD55C \uAC78\uC74C\uC529 \uBC30\uC6B0\uC138\uC694.', heroLead: 'Azure\uC640 AI, \uB85C\uC6B0\uCF54\uB4DC\uB97C \uC9E7\uACE0 \uC2DC\uAC01\uC801\uC774\uBA70 \uC774\uC57C\uAE30 \uC911\uC2EC\uC73C\uB85C \uC124\uBA85\uD569\uB2C8\uB2E4. \uAE00\uC790\uB294 \uB180\uB784 \uB9CC\uD07C \uC801\uAC8C. \uC5EC\uC815\uC744 \uACE8\uB77C \uC7AC\uC0DD\uD558\uC138\uC694.' },
		pt: { heroTitle: 'Aprenda <span class="grad-a">Azure</span> e <span class="grad-b">Copilot</span>, uma anima\u00E7\u00E3o de cada vez.', heroLead: 'Explica\u00E7\u00F5es curtas, visuais e narradas sobre Azure, IA e low-code \u2014 com muito pouco texto. Escolha uma jornada e aperte o play.' }
	};

	// "What is this site?" section (opts.about) — shown on the main home page.
	var ABOUT = {
		en: { title: 'What is Azure Animations?', hero: 'Free, short, animated explainers for Azure, AI, Copilot and GitHub, with a narrator and almost no text to read. Every team has a room: pick yours and press play.', lead: 'A free library of short, animated explainers for Azure, Microsoft 365 Copilot, AI agents and GitHub. One idea per step, a narrator to guide you, and almost no text to read.',
			cards: [['Animated journeys', 'Each journey is a set of short animations. Press play, follow one idea at a time, and replay, slow down or jump to any step.'],
				['Narrated in five languages', 'Every step can be read aloud, with captions, in English, Spanish, Japanese, Korean and Portuguese.'],
				['A room for every role', 'Business users, agent makers, AI engineers and IT teams each have a room. Start where you work.'],
				['Study paths for certifications', 'Azure, AI, Microsoft 365 and GitHub study paths, with free official practice assessments where available.']] },
		es: { title: '¿Qué es Azure Animations?', hero: 'Explicaciones animadas, breves y gratuitas sobre Azure, IA, Copilot y GitHub, con narrador y casi nada de texto. Cada equipo tiene su sala: elige la tuya y pulsa reproducir.', lead: 'Una biblioteca gratuita de explicaciones animadas y breves sobre Azure, Microsoft 365 Copilot, agentes de IA y GitHub. Una idea por paso, un narrador que te guía y casi nada de texto que leer.',
			cards: [['Recorridos animados', 'Cada recorrido es un conjunto de animaciones cortas. Pulsa reproducir, sigue una idea cada vez y repite, ralentiza o salta a cualquier paso.'],
				['Narrado en cinco idiomas', 'Cada paso se puede escuchar, con subtítulos, en inglés, español, japonés, coreano y portugués.'],
				['Una sala para cada perfil', 'Usuarios de negocio, creadores de agentes, ingenieros de IA y equipos de TI tienen cada uno su sala. Empieza donde trabajas.'],
				['Rutas de estudio para certificaciones', 'Rutas de Azure, IA, Microsoft 365 y GitHub, con evaluaciones de práctica oficiales y gratuitas cuando están disponibles.']] },
		ja: { title: 'Azure Animations とは？', hero: 'Azure、AI、Copilot、GitHub を学べる、短くて無料のアニメーション解説。ナレーションつきで、読む文字はほとんどありません。チームごとに部屋があるので、自分の部屋を選んで再生を押しましょう。', lead: 'Azure、Microsoft 365 Copilot、AI エージェント、GitHub を短いアニメーションで学べる無料のライブラリです。1 ステップにひとつのアイデア、案内役のナレーション、読む文字はほとんどありません。',
			cards: [['アニメーションのジャーニー', '各ジャーニーは短いアニメーションの集まりです。再生を押して、ひとつずつ理解し、くり返し再生・速度調整・好きなステップへのジャンプができます。'],
				['5 言語のナレーション', 'すべてのステップを、字幕つきで英語・スペイン語・日本語・韓国語・ポルトガル語で聞けます。'],
				['役割ごとの部屋', 'ビジネスユーザー、エージェントを作る人、AI エンジニア、IT チームに、それぞれ専用の部屋があります。自分の仕事から始めましょう。'],
				['認定資格の学習パス', 'Azure、AI、Microsoft 365、GitHub の学習パス。利用できる場合は無料の公式練習問題も使えます。']] },
		ko: { title: 'Azure Animations란?', hero: 'Azure, AI, Copilot, GitHub를 배우는 짧고 무료인 애니메이션 설명. 나레이션과 함께하며 읽을 글은 거의 없습니다. 팀마다 방이 있으니 내 방을 골라 재생을 누르세요.', lead: 'Azure, Microsoft 365 Copilot, AI 에이전트, GitHub를 짧은 애니메이션으로 배우는 무료 라이브러리입니다. 한 단계에 하나의 아이디어, 안내하는 나레이션, 읽을 글은 거의 없습니다.',
			cards: [['애니메이션 여정', '각 여정은 짧은 애니메이션 모음입니다. 재생을 누르고 아이디어를 하나씩 따라가며, 다시 보기·속도 조절·원하는 단계로 건너뛰기를 할 수 있습니다.'],
				['5개 언어 나레이션', '모든 단계를 자막과 함께 영어, 스페인어, 일본어, 한국어, 포르투갈어로 들을 수 있습니다.'],
				['역할마다 하나의 방', '비즈니스 사용자, 에이전트 제작자, AI 엔지니어, IT 팀마다 자기 방이 있습니다. 내가 일하는 곳에서 시작하세요.'],
				['자격증 학습 경로', 'Azure, AI, Microsoft 365, GitHub 학습 경로와, 제공되는 경우 무료 공식 연습 평가를 이용할 수 있습니다.']] },
		pt: { title: 'O que é o Azure Animations?', hero: 'Explicações animadas, curtas e gratuitas sobre Azure, IA, Copilot e GitHub, com narrador e quase nenhum texto. Cada equipe tem a sua sala: escolha a sua e aperte o play.', lead: 'Uma biblioteca gratuita de explicações animadas e curtas sobre Azure, Microsoft 365 Copilot, agentes de IA e GitHub. Uma ideia por passo, um narrador para guiar você e quase nenhum texto para ler.',
			cards: [['Jornadas animadas', 'Cada jornada é um conjunto de animações curtas. Aperte o play, siga uma ideia de cada vez e repita, desacelere ou pule para qualquer passo.'],
				['Narrado em cinco idiomas', 'Cada passo pode ser ouvido, com legendas, em inglês, espanhol, japonês, coreano e português.'],
				['Uma sala para cada perfil', 'Usuários de negócio, criadores de agentes, engenheiros de IA e equipes de TI têm, cada um, a sua sala. Comece onde você trabalha.'],
				['Trilhas de estudo para certificações', 'Trilhas de Azure, IA, Microsoft 365 e GitHub, com avaliações práticas oficiais e gratuitas quando disponíveis.']] }
	};
	// Card text for the narrated tour (the spoken words live in narration/<lang>/index.md).
	var TOUR = {
		en: { welcomeTitle: 'Welcome to the future of learning', welcomeBody: 'An innovative, agentic learning platform where Azure, AI and Copilot come alive as short, narrated animations. Every team has a room on this floor, so let\u2019s take a quick walk around.', endTitle: 'Your turn', endBody: 'Pick the room closest to your work, hover over it to see its journeys, and press play. And if this helps you, tap the heart up here to show some love.' },
		es: { welcomeTitle: 'Bienvenido al futuro del aprendizaje', welcomeBody: 'Una plataforma de aprendizaje innovadora y agéntica donde Azure, la IA y Copilot cobran vida en animaciones breves y narradas. Cada equipo tiene una sala en esta planta; demos un paseo rápido.', endTitle: 'Te toca', endBody: 'Elige la sala más cercana a tu trabajo, pasa el cursor para ver sus recorridos y pulsa reproducir. Y si te ayuda, pulsa el corazón de aquí arriba para mostrar tu cariño.' },
		ja: { welcomeTitle: 'ようこそ、学びの未来へ', welcomeBody: '革新的なエージェント型の学習プラットフォーム。Azure、AI、Copilot が、ナレーションつきの短いアニメーションで動き出します。このフロアにはチームごとに部屋があります。さっそく見て回りましょう。', endTitle: 'あなたの番です', endBody: '自分の仕事にいちばん近い部屋を選び、カーソルを重ねてジャーニーを確認し、再生を押してください。役に立ったら、ここのハートをタップして応援してください。' },
		ko: { welcomeTitle: '배움의 미래에 오신 것을 환영합니다', welcomeBody: '혁신적인 에이전트형 학습 플랫폼. Azure, AI, Copilot이 나레이션이 있는 짧은 애니메이션으로 살아납니다. 이 층에는 팀마다 방이 있으니 함께 둘러볼까요.', endTitle: '이제 직접 해 보세요', endBody: '내 업무와 가장 가까운 방을 골라 마우스를 올려 여정을 확인하고, 재생을 누르세요. 도움이 되었다면 위의 하트를 탭해서 응원해 주세요.' },
		pt: { welcomeTitle: 'Bem-vindo ao futuro do aprendizado', welcomeBody: 'Uma plataforma de aprendizado inovadora e agêntica, onde Azure, IA e Copilot ganham vida em animações curtas e narradas. Cada equipe tem uma sala neste andar; vamos dar uma volta rápida.', endTitle: 'Sua vez', endBody: 'Escolha a sala mais próxima do seu trabalho, passe o mouse para ver as jornadas e aperte o play. E, se ajudar, toque no coração aqui em cima para mostrar seu carinho.' }
	};
	// Visiting order: Cloud academy first (the place to start), then the top row, then the bottom row.
	var TOUR_ROOMS = ['academy', 'business', 'makers', 'ai', 'cloud', 'network', 'security', 'devops'];

	// Formal tone (AI mastery designs): swaps the playful hero copy for a curriculum-style one.
	var FORMAL = {
		en: { kicker: 'AI Mastery', heroTitle: 'Master AI across <span class="grad-a">every team</span>.', heroLead: 'A structured path from first prompt to production architecture. Choose your function, follow the curriculum, and build skills that hold up at work.', hint: 'Select a department to see its curriculum', dirTitle: 'Curriculum, by department' },
		es: { kicker: 'Dominio de la IA', heroTitle: 'Domina la IA en <span class="grad-a">cada equipo</span>.', heroLead: 'Una ruta estructurada desde el primer prompt hasta la arquitectura en producción. Elige tu área, sigue el plan de estudios y desarrolla habilidades que resisten en el trabajo.', hint: 'Selecciona un departamento para ver su plan de estudios', dirTitle: 'Plan de estudios, por departamento' },
		ja: { kicker: 'AI マスタリー', heroTitle: '<span class="grad-a">すべてのチーム</span>で AI を使いこなす。', heroLead: '最初のプロンプトから本番アーキテクチャまで、体系的に学べるパス。担当領域を選び、カリキュラムに沿って、仕事で通用するスキルを身につけましょう。', hint: '部門を選ぶとカリキュラムが表示されます', dirTitle: '部門別カリキュラム' },
		ko: { kicker: 'AI 마스터리', heroTitle: '<span class="grad-a">모든 팀</span>에서 AI를 마스터하세요.', heroLead: '첫 프롬프트부터 프로덕션 아키텍처까지 체계적인 학습 경로입니다. 담당 분야를 고르고 커리큘럼을 따라 실무에서 통하는 역량을 쌓으세요.', hint: '부서를 선택하면 커리큘럼이 표시됩니다', dirTitle: '부서별 커리큘럼' },
		pt: { kicker: 'Domínio de IA', heroTitle: 'Domine a IA em <span class="grad-a">todas as equipes</span>.', heroLead: 'Um caminho estruturado do primeiro prompt à arquitetura em produção. Escolha sua área, siga o currículo e desenvolva habilidades que valem no trabalho.', hint: 'Selecione um departamento para ver o currículo', dirTitle: 'Currículo, por departamento' }
	};

	function pickLang() {
		var q = null, saved = null;
		try { q = new URLSearchParams(location.search).get('lang'); } catch (e) {}
		try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
		var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
		return [q, saved, nav].filter(function (l) { return l && D.i18n[l]; })[0] || 'en';
	}
	function dict() { return D.i18n[lang] || D.i18n.en; }
	function ui() {
		var b = UI[lang] || UI.en;
		if (opts.head === 'classic') b = Object.assign({}, b, CLASSIC_HEAD[lang] || CLASSIC_HEAD.en);   // main page: the same headline and lead the original home page had
		else if (opts.about) b = Object.assign({}, b, { heroLead: (ABOUT[lang] || ABOUT.en).hero });
		return opts.tone === 'formal' ? Object.assign({}, b, FORMAL[lang] || FORMAL.en) : b;
	}
	function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

	function journey(key) {
		var j = D.journeys.filter(function (x) { return x.key === key; })[0];
		var t = dict().items[key] || D.i18n.en.items[key];
		var p = new URLSearchParams({ lang: lang });
		try { var a = new URLSearchParams(location.search).get('audio'); if (a === 'on' || a === 'off') p.set('audio', a); } catch (e) {}
		// design N links into that design's hub preview; the private folder name comes from the optional paths file
		// (not part of the published site), so published code never names it. ?hubs=classic or opts.hubs:'classic' keeps the real hubs.
		var classic = opts.hubs === 'classic' || /[?&]hubs=classic/.test(location.search);
		var href = PATHS.hubsDir && opts.design >= 2 && opts.design <= 4 && !classic ? j.href.replace(/^journeys\//, PATHS.hubsDir + '/').replace(/index\.html$/, 'index-' + opts.design + '.html') : j.href;
		return { key: key, name: t.n, desc: t.d, chips: t.chips || [], stops: j.stops, color: j.color, icon: j.icon, svg: j.svg, href: href + '?' + p, cert: j.cert };
	}
	function zone(id) {
		var z = ZONES.filter(function (x) { return x.id === id; })[0];
		var txt = ui().zones[id];
		var js = z.journeys.map(journey);
		return { id: id, color: z.color, name: txt[0], role: txt[1], apps: z.apps || [], journeys: js, stops: js.reduce(function (s, j) { return s + j.stops; }, 0) };
	}
	function icon(j) { return j.svg ? '<span class="ic" style="color:' + j.color + '">' + j.svg + '</span>' : '<span class="ic"><img src="' + j.icon + '" alt="" decoding="async"></span>'; }
	function journeyLink(j, withDesc) {
		return '<a class="ao-jl" href="' + esc(j.href) + '" style="--jc:' + j.color + '">' + icon(j) +
			'<span><b>' + esc(j.name) + '</b><small>' + j.stops + ' ' + esc(dict().fact2) + '</small></span><span class="go" aria-hidden="true">\u2192</span></a>';
	}

	/* ---- chrome ---- */
	var GH = '<svg viewBox="0 0 16 16" width="17" height="17" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>';
	var THEME = '<button id="theme-toggle" type="button" class="theme-toggle" aria-label="Switch theme" title="Switch theme"><svg class="icon-moon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg><svg class="icon-sun" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.5" y1="4.5" x2="6.5" y2="6.5"/><line x1="17.5" y1="17.5" x2="19.5" y2="19.5"/><line x1="4.5" y1="19.5" x2="6.5" y2="17.5"/><line x1="17.5" y1="6.5" x2="19.5" y2="4.5"/></g></svg></button>';

	var LIKES = '<div class="aw-like-top"><button class="aw-like" data-aw-like data-like-total data-page-slug="site" type="button" aria-pressed="false" aria-label="Support Azure Animations \u2014 tap the heart"><span class="aw-like-heart" aria-hidden="true">\u2764\uFE0F</span><span class="aw-like-label">Support</span><span class="aw-like-count" data-like-count>0</span></button><div class="aw-like-pop" role="tooltip"><strong>A little tap makes our day \uD83D\uDC99</strong><span>These Azure animations are a labour of love. If they helped you, a tap of the heart means the world \u2014 thank you for your support! \uD83D\uDE4F</span><span class="aw-like-geo" data-like-geo hidden></span></div></div>';

	function buildChrome() {
		var scene = document.getElementById('ao-scene');
		var root = document.createElement('div');
		var brandHtml = '<a class="brand" href="index.html" aria-label="Azure Animations home"><img data-aw-logo src="img/brand/logo.svg" alt=""><span class="brand-name" data-aw-name="accent"></span></a>';
		var certHtml = '<section class="ao-cert' + (opts.certTop ? ' ao-cert--top' : '') + (opts.head === 'classic' ? ' ao-cert--flat' : '') + '"><div class="ao-cert-in"><img src="https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg" alt="" width="56" height="56">' +
			'<div><h2 data-k="certTitle"></h2><p data-k="certLead"></p></div><a class="ao-btn primary" href="exam-prep.html?v=20260922-integration" data-exam data-k="certAction"></a></div></section>';
		var classic = opts.head === 'classic';
		var factsHtml = '<ul class="ao-facts"><li><b>' + D.journeys.length + '</b><span data-k="fact1"></span></li><li><b>' + D.totalStops + '</b><span data-k="fact2"></span></li><li><b>5</b><span data-k="fact3"></span></li></ul>';
		var hintHtml = '<span class="ao-hint"><i aria-hidden="true">\u261E</i><span data-u="hint"></span></span>';
		var heroHtml = classic
			// original home layout: headline + lead on the left, stats on the right, then the certification strip, then the floor plan
			? '<section class="ao-head"><div class="ao-head-copy"><h1 class="ao-h1" data-uh="heroTitle"></h1><p class="ao-lead" data-u="heroLead"></p></div>' + factsHtml + '</section>' + certHtml +
				'<section class="ao-top ao-top--center ao-stage">' + hintHtml + '<div class="ao-scene-wrap" id="ao-scene-wrap"></div></section>'
			: (opts.certTop ? certHtml : '') + '<section class="ao-top ao-top--' + (opts.layout || 'split') + '"><div class="ao-copy"><p class="ao-kicker" data-u="kicker"></p><h1 class="ao-h1" data-uh="heroTitle"></h1>' +
				'<p class="ao-lead" data-u="heroLead"></p>' + factsHtml + hintHtml + '</div><div class="ao-scene-wrap" id="ao-scene-wrap"></div></section>';
		root.innerHTML =
			'<header class="ao-bar">' + (opts.likes ? '<div class="ao-left">' + brandHtml + LIKES + '</div>' : brandHtml) +
			'<div class="ao-actions">' + (opts.tour ? '<button id="audio-toggle" class="ao-btn ao-tour" type="button"><span class="aw-audio-ico" aria-hidden="true">&#128263;</span><span data-k="tourStart"></span></button>' : '') + '<a class="ao-btn" href="contents.html" data-k="navContents"></a>' +
			'<a class="ao-btn primary" href="exam-prep.html?v=20260922-integration" data-exam data-k="navExam"></a>' +
			'<a class="ao-btn" href="https://github.com/AzureAnimations/AzureAnimations.github.io/issues" target="_blank" rel="noopener noreferrer">' + GH + '<span data-k="navSuggest"></span></a>' +
			'<select id="lang-select" aria-label="Language"><option value="en">English</option><option value="es">Español</option><option value="ja">日本語</option><option value="ko">한국어</option><option value="pt">Português</option></select>' +
			THEME + '</div></header>' +
			'<main>' + heroHtml +
			(opts.about ? '<section class="ao-about" aria-labelledby="ao-about-t"><h2 id="ao-about-t"></h2><p class="ao-about-lead"></p><div class="ao-about-grid" id="ao-about-grid"></div></section>' : '') +
			'<section class="ao-zones" aria-labelledby="ao-dir-t"><h2 id="ao-dir-t" data-u="dirTitle"></h2><div class="ao-zone-grid" id="ao-zone-grid"></div></section>' +
			(opts.certTop ? '' : certHtml) + '</main>' +
			'<footer class="ao-foot"><p class="foot-made" data-aw-madeby></p><div data-aw-credit="18"></div><div class="foot-meta" data-aw-footmeta="https://learn.microsoft.com/azure/"></div>' +
			(opts.archiveLink ? '<div class="foot-archive" data-kh="footArchiveHtml"></div>' : '') + '</footer>';
		var frag = document.createDocumentFragment();
		while (root.firstChild) frag.appendChild(root.firstChild);
		document.body.insertBefore(frag, document.body.firstChild);
		document.getElementById('ao-scene-wrap').appendChild(scene);
		pop = document.createElement('div'); pop.className = 'ao-pop'; pop.setAttribute('role', 'dialog');
		document.body.appendChild(pop);
		pop.addEventListener('mouseenter', function () { clearTimeout(hideTimer); });
		pop.addEventListener('mouseleave', function () { if (!pinned) scheduleHide(); });
		var sw = document.createElement('nav'); sw.className = 'ao-switch'; sw.setAttribute('aria-label', 'Design');
		var homes = PATHS.homes || {};
		sw.innerHTML = '<span>' + ui().design + '</span>' + [1, 2, 3, 4, 5, 6].filter(function (n) { return homes[n]; }).map(function (n) {
			return '<a href="' + homes[n] + '" class="' + (opts.design === n ? 'on' : '') + '">' + n + '</a>'; }).join('');
		if (opts.switcher !== false && PATHS.homes) document.body.appendChild(sw);
	}

	function paintText() {
		var d = dict(), u = ui();
		document.documentElement.setAttribute('lang', lang);
		[].forEach.call(document.querySelectorAll('[data-k]'), function (el) { if (d[el.dataset.k] != null) el.textContent = d[el.dataset.k]; });
		[].forEach.call(document.querySelectorAll('[data-u]'), function (el) { el.textContent = u[el.dataset.u]; });
		[].forEach.call(document.querySelectorAll('[data-uh]'), function (el) { el.innerHTML = u[el.dataset.uh]; });
		[].forEach.call(document.querySelectorAll('[data-kh]'), function (el) { if (d[el.dataset.kh] != null) el.innerHTML = d[el.dataset.kh]; });
		[].forEach.call(document.querySelectorAll('[data-exam]'), function (a) {
			var x = new URL(a.getAttribute('href'), location.href); x.searchParams.set('lang', lang); a.setAttribute('href', x.pathname.replace(/^.*\//, '') + x.search); });
		var grid = document.getElementById('ao-zone-grid');
		grid.innerHTML = ZONES.map(function (z) {
			var zz = zone(z.id);
			return '<article class="ao-zc" data-zone="' + z.id + '" style="--zc:' + zz.color + '"><h3>' + esc(zz.name) + '</h3><p>' + esc(zz.role) + '</p><ul>' +
				zz.journeys.map(function (j) { return '<li>' + journeyLink(j) + '</li>'; }).join('') + '</ul></article>'; }).join('');
		var sw = document.querySelector('.ao-switch span'); if (sw) sw.textContent = u.design;
		if (opts.about) {
			var ab = ABOUT[lang] || ABOUT.en;
			document.getElementById('ao-about-t').textContent = ab.title;
			document.querySelector('.ao-about-lead').textContent = ab.lead;
			document.getElementById('ao-about-grid').innerHTML = ab.cards.map(function (c, i) {
				return '<article class="ao-ac"><span class="n" aria-hidden="true">' + (i + 1) + '</span><h3>' + esc(c[0]) + '</h3><p>' + esc(c[1]) + '</p></article>'; }).join('');
		}
	}

	/* ---- narrated tour (opts.tour): lib/js/aw-tour.js + aw-captions.js, clips at audio/index[/lang]/step-NN.mp3 ---- */
	function spotOn(id) {
		// the tour spotlight is a CSS shadow on an HTML box, so overlay a transparent box on the SVG room
		var wrap = document.getElementById('ao-scene-wrap'), room = document.querySelector('[data-zone-id="' + id + '"]');
		if (!wrap || !room) return;
		var box = document.getElementById('ao-tour-spot');
		if (!box) { box = document.createElement('div'); box.id = 'ao-tour-spot'; box.setAttribute('aria-hidden', 'true'); wrap.appendChild(box); }
		var a = room.getBoundingClientRect(), b = wrap.getBoundingClientRect(), pad = 6;
		box.style.left = (a.left - b.left - pad) + 'px'; box.style.top = (a.top - b.top - pad) + 'px';
		box.style.width = (a.width + pad * 2) + 'px'; box.style.height = (a.height + pad * 2) + 'px';
	}
	function tourSteps() {
		var d = dict(), tt = TOUR[lang] || TOUR.en, ab = ABOUT[lang] || ABOUT.en;
		var exam = document.querySelector('.ao-cert-in [data-exam]');
		var certStop = { target: '.ao-cert-in', scrollTo: '.ao-cert-in', scrollBlock: 'center', title: d.certTitle, body: d.certLead, href: exam && exam.getAttribute('href'), openLabel: d.certAction };
		var stops = [
			{ scrollTo: '.ao-bar', title: tt.welcomeTitle, body: tt.welcomeBody }
		];
		if (opts.certTop) stops.push(certStop);   // the banner is at the top of the page, so it is the second stop
		stops.push({ target: '.ao-about', scrollTo: '.ao-about', scrollBlock: 'center', title: ab.title, body: ab.lead });
		TOUR_ROOMS.forEach(function (id) {
			var z = zone(id);
			stops.push({ before: function () { spotOn(id); }, target: '#ao-tour-spot', scrollTo: '#ao-scene-wrap', scrollBlock: 'center', ring: z.color,
				title: z.name, body: z.role, href: z.journeys.length === 1 ? z.journeys[0].href : undefined, openLabel: d.tourOpen });
		});
		if (!opts.certTop) stops.push(certStop);
		stops.push({ target: '.aw-like-top .aw-like', scrollTo: '.ao-bar', title: tt.endTitle, body: tt.endBody });   // closing stop spotlights the Support heart
		return stops.map(function (s, i) { s.eyebrow = String(d.tourStop).replace('{n}', i + 1).replace('{t}', stops.length); return s; });
	}
	function configureTour() {
		if (!opts.tour || !global.AWTour) return;
		var btn = document.getElementById('audio-toggle'), ico = btn && btn.querySelector('.aw-audio-ico');
		var seen = false; try { seen = localStorage.getItem('aw-hub-audio') === '1'; } catch (e) {}
		if (btn) {
			if (seen) { btn.classList.add('on'); if (ico) ico.innerHTML = '&#128266;'; }
			btn.title = dict().tourStart; btn.setAttribute('aria-label', dict().tourStart);
			if (!btn._aoTour) { btn._aoTour = true; btn.addEventListener('click', function () { btn.classList.add('on'); if (ico) ico.innerHTML = '&#128266;'; try { localStorage.setItem('aw-hub-audio', '1'); } catch (e) {} }); }
		}
		global.AWTour.configure({ audioBase: 'audio/index/', audioVersion: '20261117c-home-tour', narration: '/narration/', narrationPage: 'index', startButton: '#audio-toggle',
			lang: function () { return lang; }, openLabel: dict().tourOpen, steps: tourSteps() });
		global.AWTour.setSteps(tourSteps());
	}

	/* ---- popover ---- */
	function placePop(el) {
		var r = el.getBoundingClientRect(), w = Math.min(340, innerWidth - 24);
		var x = Math.min(Math.max(12, r.left + r.width / 2 - w / 2), innerWidth - w - 12);
		pop.style.left = x + 'px';
		pop.style.top = '0px';
		var h = pop.offsetHeight, below = r.bottom + 10, above = r.top - h - 10;
		var y = above >= 12 ? above : (below + h < innerHeight - 8 ? below : Math.max(12, innerHeight - h - 12));
		pop.style.top = y + 'px';
	}
	function openPop(el, id) {
		clearTimeout(hideTimer);
		var z = zone(id);
		if (activeEl && activeEl !== el) activeEl.classList.remove('is-active');
		activeEl = el; el.classList.add('is-active');
		[].forEach.call(document.querySelectorAll('.ao-zc'), function (c) { c.classList.toggle('is-active', c.dataset.zone === id); });
		pop.style.setProperty('--zc', z.color);
		pop.innerHTML = '<h3>' + esc(z.name) + '</h3><p class="role">' + esc(z.role) + '</p>' +
			(z.apps.length ? '<div class="apps">' + z.apps.map(function (a) { return '<img src="' + global.AWArt.icons[a] + '" alt="' + a + '" title="' + a + '">'; }).join('') + '</div>' : '') +
			'<ul>' + z.journeys.map(function (j) { return '<li>' + journeyLink(j) + '</li>'; }).join('') + '</ul>' +
			(z.journeys.length === 1 ? '<p class="desc">' + esc(z.journeys[0].desc) + '</p>' : '');
		pop.classList.add('show'); placePop(el);
		if (opts.onZone) opts.onZone(id, true);
	}
	function closePop() {
		pinned = false; pop.classList.remove('show');
		if (activeEl) { activeEl.classList.remove('is-active'); if (opts.onZone) opts.onZone(activeEl.dataset.zoneId, false); }
		activeEl = null;
		[].forEach.call(document.querySelectorAll('.ao-zc.is-active'), function (c) { c.classList.remove('is-active'); });
	}
	function scheduleHide() { clearTimeout(hideTimer); hideTimer = setTimeout(function () { if (!pinned) closePop(); }, 260); }

	function attach(el, id) {
		var z = zone(id);
		el.dataset.zoneId = id;
		el.classList.add('ao-zone');
		el.setAttribute('tabindex', '0'); el.setAttribute('role', 'button');
		el.setAttribute('aria-label', z.name + ' \u2014 ' + z.role);
		if (el._aoBound) return;
		el._aoBound = true;
		el.addEventListener('mouseenter', function () { if (!pinned) openPop(el, el.dataset.zoneId); });
		el.addEventListener('mouseleave', function () { if (!pinned) scheduleHide(); });
		el.addEventListener('focus', function () { if (!pinned) openPop(el, el.dataset.zoneId); });
		el.addEventListener('click', function (e) { e.stopPropagation(); pinned = !(pinned && activeEl === el); if (pinned) openPop(el, el.dataset.zoneId); else closePop(); });
		el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pinned = true; openPop(el, el.dataset.zoneId); var a = pop.querySelector('a'); if (a) a.focus(); } });
	}

	function setLang(l) {
		lang = D.i18n[l] ? l : 'en';
		try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
		try { var u = new URL(location.href); u.searchParams.set('lang', lang); history.replaceState(null, '', u); } catch (e) {}
		var sel = document.getElementById('lang-select'); if (sel) sel.value = lang;
		closePop(); paintText();
		if (opts.render) opts.render(api);
		configureTour();
	}

	var api = { zones: ZONES.map(function (z) { return z.id; }), zone: zone, journey: journey, attach: attach, lang: function () { return lang; }, esc: esc,
		ui: ui, close: closePop, ids: ZONES.map(function (z) { return z.id; }), color: function (id) { return ZONES.filter(function (z) { return z.id === id; })[0].color; } };

	function init(o) {
		opts = o || {};
		lang = pickLang();
		buildChrome();
		var sel = document.getElementById('lang-select'); sel.value = lang;
		sel.addEventListener('change', function (e) { setLang(e.target.value); });
		document.addEventListener('click', function (e) { if (pinned && !pop.contains(e.target)) closePop(); });
		document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePop(); });
		addEventListener('scroll', function () { if (activeEl && pop.classList.contains('show')) placePop(activeEl); }, { passive: true });
		addEventListener('resize', function () { if (activeEl) placePop(activeEl); });
		paintText();
		if (opts.render) opts.render(api);
		configureTour();
	}

	global.AWOffice = { init: init, api: api };
})(window);
