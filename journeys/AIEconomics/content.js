/* AI Economics & FinOps · all learning content (English only).
 * Keep words here, never in app.js: edit this file to change what learners read without touching the layout.
 * Every number below is ILLUSTRATIVE and uses fictional organisations. It is not real pricing and not a forecast.
 */
window.AIE_CONTENT = {
	hero: {
		eyebrow: 'Azure Animations · Business & Finance',
		headline: 'AI Economics & FinOps',
		subheading: 'Understand the Cost. Manage the Investment. Maximize the Value.',
		introduction: [
			'Artificial intelligence is transforming how organizations work, innovate, and serve their customers. But adopting AI is not just about choosing the right technology. It is also about understanding costs, managing resources, and ensuring that investments deliver meaningful results.',
			'This learning journey introduces the essential concepts of AI Economics and FinOps, helping you make more informed decisions about AI adoption, spending, governance, and business value.'
		],
		primary: 'Explore the Learning Journey',
		secondary: 'What Will I Learn?',
		flow: [
			{ id: 'usage', label: 'AI usage', hint: 'People and apps send requests' },
			{ id: 'cost', label: 'Costs', hint: 'Usage turns into spend' },
			{ id: 'gov', label: 'Governance', hint: 'Budgets, alerts, ownership' },
			{ id: 'opt', label: 'Optimization', hint: 'Do the same with less' },
			{ id: 'value', label: 'Business value', hint: 'Outcomes worth paying for' }
		],
		flowAlt: 'Animated diagram: AI usage creates costs, governance keeps spending in check, optimization improves efficiency, and together they lead to business value, which informs the next round of AI usage.'
	},

	why: {
		headline: 'AI Innovation Needs Financial Understanding',
		lead: 'As organizations expand their use of AI, new questions emerge:',
		questions: [
			{ q: 'How much will an AI solution cost?', a: 'Before you build, you need a range, not a guess. Usage, model choice, and growth all move the number.' },
			{ q: 'Why do AI costs change as usage grows?', a: 'Many AI services charge for what you use. More people, longer requests, and new automations all add up.' },
			{ q: 'How can organizations monitor and control spending?', a: 'With visibility, budgets, alerts, and clear ownership, so surprises show up early instead of on the invoice.' },
			{ q: 'How do we know whether AI delivers real value?', a: 'By choosing success measures up front, such as time saved or quality, and comparing them with the cost.' }
		],
		body: 'Understanding these questions helps organizations move from experimenting with AI to adopting it responsibly and sustainably.',
		keyMessage: 'Successful AI adoption requires more than powerful technology. It requires financial awareness, responsible management, and a clear understanding of business value.'
	},

	journey: {
		headline: 'Explore Four Essential Dimensions of AI Economics',
		intro: 'Follow four connected learning stages, from understanding AI investment to measuring its business impact. Open a stage, try its interactive, then mark it as explored.'
	},

	learningStages: [
		{
			id: 'invest', n: 1, title: 'Understand AI Investment', short: 'Invest', question: 'What are we investing in?',
			description: 'Learn how organizations approach AI investment and why different AI solutions may involve different purchasing and consumption models.',
			topics: ['Introduction to AI Economics.', 'Subscription-based and usage-based models.', 'Understanding AI consumption.', 'Key considerations when planning AI investments.'],
			outcome: 'Explain the basic ways organizations purchase and consume AI services.',
			animation: 'pricingCompare',
			animationTitle: 'Subscription or usage-based?',
			animationIntro: 'Move the sliders. Watch which model costs less, and notice that the cheaper option changes as usage changes.'
		},
		{
			id: 'costs', n: 2, title: 'Understand AI Costs', short: 'Costs', question: 'What drives the cost of AI?',
			description: 'Explore the factors that influence AI spending and why costs may change depending on usage, workload, and technical requirements.',
			topics: ['Common AI cost drivers.', 'Introduction to tokens and model usage.', 'Understanding consumption patterns.', 'Basic cost estimation and forecasting.', 'Introduction to return on investment.'],
			outcome: 'Identify common AI cost drivers and explain how usage can influence spending.',
			animation: 'usageSimulator',
			animationTitle: 'AI usage simulator',
			animationIntro: 'Change the request volume, the request size, and the model tier. The estimate updates straight away.'
		},
		{
			id: 'manage', n: 3, title: 'Manage and Optimize Spending', short: 'Manage', question: 'How can we keep AI spending under control?',
			description: 'Discover how organizations monitor AI consumption, manage budgets, and improve resource efficiency.',
			topics: ['Introduction to FinOps for AI.', 'Monitoring AI consumption.', 'Budgets, alerts, and spending controls.', 'Cost allocation and accountability.', 'Identifying optimization opportunities.', 'Responsible governance.'],
			outcome: 'Describe practical approaches to monitoring, controlling, and optimizing AI spending.',
			animation: 'spendDashboard',
			animationTitle: 'A simple spending dashboard',
			animationIntro: 'Turn the controls on one at a time and watch how visibility, alerts, and optimization work together.'
		},
		{
			id: 'value', n: 4, title: 'Measure AI Business Value', short: 'Value', question: 'Is our AI investment delivering value?',
			description: 'Understand how organizations evaluate AI outcomes beyond the amount of money spent.',
			topics: ['Connecting AI investment to business objectives.', 'Defining success measures.', 'Understanding return on investment.', 'Productivity, efficiency, and quality improvements.', 'Tracking adoption and business outcomes.', 'Continuous improvement.'],
			outcome: 'Explain how organizations can evaluate whether AI investments support meaningful business results.',
			animation: 'beforeAfter',
			animationTitle: 'The same process, with and without AI assistance',
			animationIntro: 'Switch between the two views. Look at more than one measure before you decide whether it worked.'
		}
	],

	glossary: {
		headline: 'Understand the Language of AI Economics',
		intro: 'Ten ideas you will meet again and again. Open a card for a plain-language explanation and a small picture.',
		terms: [
			{ id: 'ae', term: 'AI Economics', def: 'Understanding the costs, financial decisions, and business value associated with AI.', visual: 'flow3', more: 'It connects three things: what you spend, the decisions you make, and the value you get back.' },
			{ id: 'fo', term: 'FinOps for AI', def: 'A collaborative approach to managing and optimizing AI-related spending.', visual: 'loop', more: 'Finance, technology, and business teams work from the same numbers: see the spend, improve it, and keep improving.' },
			{ id: 'tk', term: 'Tokens', def: 'Units of information processed by certain AI models that can influence usage-based costs.', visual: 'tokens', more: 'A token is a small piece of text, often part of a word. Longer requests and longer answers use more tokens. Exact splitting differs between models.' },
			{ id: 'cp', term: 'Consumption-based pricing', def: 'A pricing approach where charges depend on how much of a service is used.', visual: 'rising', more: 'Quiet month, small bill. Busy month, bigger bill. It is flexible, but it needs monitoring.' },
			{ id: 'sp', term: 'Subscription-based pricing', def: 'A pricing approach involving a recurring fee for defined access or services.', visual: 'flat', more: 'The bill is easy to predict. It can be wasteful if many seats are barely used.' },
			{ id: 'cf', term: 'Cost forecasting', def: 'Estimating future spending based on expected usage and assumptions.', visual: 'forecast', more: 'A forecast is only as good as its assumptions, so write them down and revisit them.' },
			{ id: 'ob', term: 'Observability', def: 'Understanding how AI systems operate, perform, and consume resources.', visual: 'tiles', more: 'If you cannot see requests, tokens, and errors, you cannot explain a spike when it happens.' },
			{ id: 'roi', term: 'Return on Investment', def: 'Evaluating the value gained relative to the cost of an investment.', visual: 'roi', more: 'ROI compares value with cost. The value side needs measures you trust, not guesses.' },
			{ id: 'gv', term: 'AI Governance', def: 'Policies, responsibilities, and controls that guide responsible AI use.', visual: 'checks', more: 'Clear owners and simple rules help teams move quickly without losing control of cost, data, or risk.' },
			{ id: 'co', term: 'Cost Optimization', def: 'Improving efficiency and reducing unnecessary spending while maintaining desired outcomes.', visual: 'shrink', more: 'The goal is not the lowest bill. It is the same outcome for less waste.' }
		]
	},

	scenarios: {
		headline: 'Learn Through Real-World Decisions',
		intro: 'Three short, fictional scenarios. Make a choice, then read why. All organizations and numbers here are made up for learning.',
		disclaimer: 'Fictional organizations and clearly illustrative data. No real customer, pricing, or confidential information.',
		items: [
			{
				id: 'A', title: 'Planning an AI Assistant', org: 'Northwind Learning (fictional)',
				story: 'A company wants to introduce an AI assistant for its 300 employees.',
				challenge: 'How should the company think about subscriptions, usage, and expected costs?',
				activity: 'Compare two illustrative purchasing approaches and identify factors that could affect the decision.',
				panel: { type: 'options', title: 'Two illustrative approaches', items: [
					{ name: 'Option 1 · Per-user subscription', price: '$30 per user, per month', note: 'Fixed and predictable. Everyone with a seat is covered.' },
					{ name: 'Option 2 · Pay for what you use', price: '$0.02 per request', note: 'Follows real activity. Needs monitoring as use grows.' }
				] },
				steps: [
					{ type: 'multi', prompt: 'Which factors could affect the decision? Select all that apply, then check.', options: [
						{ t: 'How many employees will actually use the assistant', ok: true, why: 'Seats you pay for but do not use are a common source of waste.' },
						{ t: 'How often each person will use it', ok: true, why: 'Frequency is what drives a usage-based bill.' },
						{ t: 'Whether the company needs a predictable monthly bill', ok: true, why: 'Predictability is a real business need, and it favors fixed pricing.' },
						{ t: 'Whether usage will be steady or come in bursts', ok: true, why: 'Bursty use can make a usage-based bill swing from month to month.' },
						{ t: 'The color of the assistant\'s logo', ok: false, why: 'It has no effect on cost or value.' },
						{ t: 'Whether every employee needs access, or only some', ok: true, why: 'Access for everyone and access for a few lead to different totals.' }
					] },
					{ type: 'single', prompt: 'Only about 40 of the 300 employees are expected to use it heavily. The rest will try it now and then. Which approach is worth exploring first?', options: [
						{ t: 'A per-user subscription for all 300 employees', ok: false, why: 'You could pay for many seats that are rarely used. It may still be right if predictability matters most, but test it against the usage pattern.' },
						{ t: 'Pay for what you use, with budgets and alerts', ok: true, why: 'Cost follows actual activity, which suits a few heavy users and many light ones. It does need monitoring.' },
						{ t: 'Decide later, without estimating anything', ok: false, why: 'Even a rough estimate with stated assumptions beats a surprise invoice.' }
					] },
					{ type: 'single', prompt: 'Finance asks for a predictable bill. What is a sensible next step?', options: [
						{ t: 'Estimate a usage range, then set a budget and an alert', ok: true, why: 'A range plus a guardrail gives Finance something to plan with, even under usage-based pricing.' },
						{ t: 'Wait for the first invoice and react', ok: false, why: 'By then the money is spent.' },
						{ t: 'Pick whichever has the lowest price per request, whatever the volume', ok: false, why: 'A low unit price multiplied by high volume can still be a large bill.' }
					] }
				]
			},
			{
				id: 'B', title: 'Managing Growing AI Usage', org: 'Contoso Field Services (fictional)',
				story: 'An organization notices that its AI consumption is increasing each month.',
				challenge: 'How can it understand the increase and manage spending responsibly?',
				activity: 'Explore a simulated usage dashboard, identify possible cost drivers, and select appropriate management actions.',
				panel: { type: 'spark', title: 'Monthly AI spend (illustrative, $ thousands)', labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], values: [4.2, 4.9, 6.1, 7.8, 9.9, 12.6], note: 'Three busy teams. Spend has risen 3x in six months.' },
				steps: [
					{ type: 'multi', prompt: 'Which of these could be driving the increase? Select all that apply, then check.', options: [
						{ t: 'More employees are using the assistant', ok: true, why: 'More users means more requests.' },
						{ t: 'Prompts now include much longer documents', ok: true, why: 'Longer inputs use more tokens on every request.' },
						{ t: 'Some tasks were moved to a more advanced, pricier model', ok: true, why: 'Model choice changes the price of every request.' },
						{ t: 'A new automation calls the AI for every incoming email', ok: true, why: 'Automations can multiply request volume without anyone noticing.' },
						{ t: 'The company updated its logo', ok: false, why: 'A logo has no effect on AI consumption.' },
						{ t: 'People are sending fewer requests than last month', ok: false, why: 'Fewer requests would lower spend, not raise it.' }
					] },
					{ type: 'multi', prompt: 'Which management actions are appropriate? Select all that apply, then check.', options: [
						{ t: 'Set budgets and alerts for each team', ok: true, why: 'Guardrails turn a surprise into an early warning.' },
						{ t: 'Tag usage so each team can see its own spend', ok: true, why: 'Accountability starts with knowing who spent what.' },
						{ t: 'Use a smaller model for simple, repetitive tasks', ok: true, why: 'Matching the model to the task is a classic optimization.' },
						{ t: 'Review long prompts and repeated identical requests', ok: true, why: 'Trimming and reusing answers reduces waste without hurting results.' },
						{ t: 'Switch off AI for everyone immediately', ok: false, why: 'That removes the value along with the cost. Manage and optimize instead.' },
						{ t: 'Hide the dashboard so teams do not worry', ok: false, why: 'Hiding data removes accountability. Share it instead.' }
					] }
				]
			},
			{
				id: 'C', title: 'Demonstrating AI Value', org: 'Fabrikam Support (fictional)',
				story: 'A customer service team introduces an AI solution to help handle routine inquiries.',
				challenge: 'How can the team determine whether the solution is successful?',
				activity: 'Select meaningful measures, such as time saved, service quality, and operating costs, and evaluate an illustrative outcome.',
				panel: { type: 'table', title: 'Illustrative results after three months', head: ['Measure', 'Before', 'With AI assistance'], rows: [
					['Time per inquiry', '12 min', '7 min'],
					['Customer satisfaction (out of 5)', '4.1', '4.3'],
					['Operating cost per inquiry', '$6.00', '$3.90'],
					['Inquiries needing rework', '9%', '11%']
				] },
				steps: [
					{ type: 'multi', prompt: 'Which measures would help the team judge success? Select all that apply, then check.', options: [
						{ t: 'Time saved per inquiry', ok: true, why: 'A direct productivity measure.' },
						{ t: 'Customer satisfaction', ok: true, why: 'Faster is not better if customers are less happy.' },
						{ t: 'Operating cost per resolved inquiry', ok: true, why: 'Include the AI cost, not just the labor saved.' },
						{ t: 'How many inquiries need rework or escalation', ok: true, why: 'A quality check that stops speed from hiding mistakes.' },
						{ t: 'How many times the AI tool was opened', ok: false, why: 'Activity alone does not show value. It is useful as an adoption signal, not as proof of success.' },
						{ t: 'Whether staff like the name of the tool', ok: false, why: 'Not connected to outcomes.' }
					] },
					{ type: 'single', prompt: 'Look at the results table. What is the most sensible conclusion?', options: [
						{ t: 'Clear success. Stop measuring.', ok: false, why: 'Rework went up. Measuring should continue.' },
						{ t: 'Promising, but investigate the rise in rework before scaling', ok: true, why: 'Time, satisfaction, and cost improved, yet one quality measure moved the wrong way. Look into it before expanding.' },
						{ t: 'A failure, because the AI is not free', ok: false, why: 'Cost per inquiry actually fell. The question is value for the cost, not zero cost.' }
					] }
				]
			}
		]
	},

	outcomes: {
		headline: 'Turn AI Knowledge into Better Decisions',
		intro: 'By completing this introductory journey, learners should be able to:',
		items: [
			{ t: 'Understand AI Economics', d: 'Explain how AI investments, consumption, and business value are connected.' },
			{ t: 'Recognize Cost Drivers', d: 'Identify factors that influence AI spending.' },
			{ t: 'Manage Spending Responsibly', d: 'Understand the role of monitoring, budgets, governance, and optimization.' },
			{ t: 'Evaluate Business Value', d: 'Identify measures that help determine whether AI is delivering useful outcomes.' },
			{ t: 'Make Informed Decisions', d: 'Ask better questions when planning, operating, or expanding AI solutions.' }
		],
		note: 'These are intended learning outcomes, not claims of guaranteed financial savings.'
	},

	knowledgeCheck: {
		headline: 'Put Your Knowledge to the Test',
		intro: 'Five optional questions. You get feedback after every answer, and you can try again as often as you like. Nothing is stored or sent.',
		questions: [
			{ topic: 'AI Economics and FinOps', q: 'Which statement best describes FinOps for AI?', options: [
				{ t: 'A programming language used to build AI models', ok: false },
				{ t: 'A collaborative approach to managing and optimizing AI-related spending', ok: true },
				{ t: 'A guarantee that AI costs will fall every month', ok: false },
				{ t: 'A type of AI model that predicts prices', ok: false }
			], why: 'FinOps for AI is a way of working: finance, technology, and business teams share the numbers and improve spending together. It is not a tool or a guarantee. AI Economics is the wider picture of cost, decisions, and value.' },
			{ topic: 'Subscription versus usage-based pricing', q: 'What is the key difference between subscription-based and usage-based pricing?', options: [
				{ t: 'Subscription charges a recurring fee for defined access, while usage-based charges depend on how much is used', ok: true },
				{ t: 'Subscription is always cheaper than usage-based', ok: false },
				{ t: 'Usage-based pricing never changes from month to month', ok: false },
				{ t: 'They are two names for the same thing', ok: false }
			], why: 'Neither is always cheaper. The better fit depends on how many people use the service, how often, and whether the bill needs to be predictable.' },
			{ topic: 'Common AI cost drivers', q: 'Which of these is a common driver of AI cost?', options: [
				{ t: 'The color theme of the app', ok: false },
				{ t: 'The number of requests and how much text each request processes (tokens)', ok: true },
				{ t: 'The length of the project name', ok: false },
				{ t: 'The day of the week the team meets', ok: false }
			], why: 'Request volume, request size (tokens), and the model tier are typical drivers. Growth over time multiplies all three.' },
			{ topic: 'Monitoring and governance', q: 'Which practice helps control AI spending before the invoice arrives?', options: [
				{ t: 'Waiting until month end to review the bill', ok: false },
				{ t: 'Hiding usage data to avoid worry', ok: false },
				{ t: 'Budgets and alerts, with spend allocated to the teams that use it', ok: true },
				{ t: 'Turning AI off for everyone', ok: false }
			], why: 'Budgets and alerts give an early warning, and allocation gives each team ownership. Shutting everything down or hiding data removes accountability and value.' },
			{ topic: 'Measuring AI business value', q: 'Which is the best sign that an AI investment is delivering value?', options: [
				{ t: 'The number of prompts that were sent', ok: false },
				{ t: 'It uses the newest model available', ok: false },
				{ t: 'Agreed business measures, such as time saved and quality, improved relative to the cost', ok: true },
				{ t: 'The monthly bill went down', ok: false }
			], why: 'Value is outcomes compared with cost. A lower bill can simply mean less use, and activity or a new model says nothing about results.' }
		],
		results: [
			{ min: 5, title: 'Excellent', text: 'You can connect AI cost, control, and value. Try applying these questions to a real AI project.' },
			{ min: 3, title: 'Well done', text: 'You have the core ideas. Review the concepts you missed and try again.' },
			{ min: 0, title: 'A good start', text: 'This is a new topic for many people. Revisit the learning stages and try again, with no penalty.' }
		]
	},

	completion: {
		headline: 'Your AI Economics Journey Starts Here',
		body: 'Understanding AI costs is only the beginning. The real opportunity is learning how to balance innovation, financial responsibility, and business value.',
		body2: 'Continue exploring how thoughtful planning, effective cost management, and meaningful measurement can support sustainable AI adoption.',
		message: 'You\'ve explored the foundations of AI Economics and FinOps. You now have a framework for asking better questions about AI investments, spending, and value.',
		actions: [
			{ id: 'concepts', label: 'Review Key Concepts' },
			{ id: 'stages', label: 'Revisit Learning Stages' },
			{ id: 'quiz', label: 'Try the Knowledge Check Again' }
		]
	}
};
