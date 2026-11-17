/*!
 * aw-prompt-anatomy-data.js — the CONTENT for the Copy-prompt hover bubble's Goal / Context / Expectations / Source cards.
 * Loaded by aw-prompt-anatomy.js (which owns the look); a page needs no per-prompt wiring.
 *
 * One entry per prompt, keyed by the prompt TEXT (the same prompt on two pages is one entry):
 *   { text: '<the prompt, exactly as the page copies it>', parts: [ [part, excerpt], … ] }
 * part = 'goal' | 'context' | 'expectations' | 'source'. Every excerpt is copied word for word from text, never reworded,
 * and excerpts do not overlap. Split by what a phrase DOES, not where it sits:
 *   source = what Copilot should use ("Using Sales Transactions…", "the attached files", "this document", "/[file]")
 *   goal = what the learner wants ("identify the three most important findings", "Draft a reply…")
 *   context = why / who for / what to focus on ("for the engagement leader", "Focus on market or channel performance…")
 *   expectations = how Copilot should answer (format, length, tone, columns, "use only facts from this document")
 * A part the prompt does not state is left out (the card then says "Not stated in this prompt"); never invent one.
 * If a page edits a prompt, update its entry here (or the bubble falls back to the plain prompt). Check with:
 *   node scripts/verify-prompt-anatomy.mjs            (every entry is consistent)
 *   node scripts/verify-prompt-anatomy.mjs --pages    (every copied prompt on every Copilot page has an entry; needs Playwright)
 */
AWPromptAnatomy.register([
{ text: "Analyze the Sales Transactions, Sales Targets, Distributors, and Returns and Adjustments sheets. Identify the most important sales trends, underperforming markets, margin risks, unusual discounts, return patterns, and distributor concerns. Reference the relevant market, product, channel, and figures. Separate possible data-quality problems from genuine business findings.",
  parts: [
    ["goal", "Analyze"],
    ["source", "the Sales Transactions, Sales Targets, Distributors, and Returns and Adjustments sheets"],
    ["goal", "Identify the most important sales trends, underperforming markets, margin risks, unusual discounts, return patterns, and distributor concerns."],
    ["expectations", "Reference the relevant market, product, channel, and figures."],
    ["expectations", "Separate possible data-quality problems from genuine business findings."]
  ] },
{ text: "Create visualizations showing Net Sales Local versus Sales Target Local by market, Net Sales Local by Product Category and Sales Channel, and Gross Margin Percentage over time. Choose an appropriate chart type for each comparison. Add the charts to a new worksheet named Sales Analysis and explain what each chart reveals.",
  parts: [
    ["goal", "Create visualizations showing Net Sales Local versus Sales Target Local by market, Net Sales Local by Product Category and Sales Channel, and Gross Margin Percentage over time."],
    ["expectations", "Choose an appropriate chart type for each comparison."],
    ["expectations", "Add the charts to a new worksheet named Sales Analysis and explain what each chart reveals."]
  ] },
{ text: "Check the Sales Transactions sheet for duplicates or near-duplicate records. Explain which fields make a record suspicious and list the transaction IDs that should be reviewed. Do not delete any records.",
  parts: [
    ["goal", "Check"],
    ["source", "the Sales Transactions sheet"],
    ["goal", "for duplicates or near-duplicate records."],
    ["expectations", "Explain which fields make a record suspicious and list the transaction IDs that should be reviewed."],
    ["expectations", "Do not delete any records."]
  ] },
{ text: "Analyze Campaign Activity, Digital Engagement, Events and Tastings, and Audience Segments. Compare spend, engagement, clicks, leads, coupon redemptions, attributed sales, and event orders. Identify campaigns that appear successful at the top of the funnel but weak in actual commercial results, and identify any overspending or unusually strong outcomes.",
  parts: [
    ["goal", "Analyze"],
    ["source", "Campaign Activity, Digital Engagement, Events and Tastings, and Audience Segments"],
    ["goal", "Compare spend, engagement, clicks, leads, coupon redemptions, attributed sales, and event orders."],
    ["goal", "Identify campaigns that appear successful at the top of the funnel but weak in actual commercial results, and identify any overspending or unusually strong outcomes."]
  ] },
{ text: "Create a visualization comparing Audience Segments by Premium Interest Score, Experimentation Score, Price Sensitivity, Estimated Audience Size, Preferred Product Category, and Market. Recommend the most promising segments and marketing channels for launching an unfamiliar premium beverage.",
  parts: [
    ["goal", "Create a visualization comparing Audience Segments by Premium Interest Score, Experimentation Score, Price Sensitivity, Estimated Audience Size, Preferred Product Category, and Market."],
    ["goal", "Recommend the most promising segments and marketing channels"],
    ["context", "for launching an unfamiliar premium beverage"]
  ] },
{ text: "Analyze Customer Feedback, Customer Profiles, Service Cases, and Product Preferences. Identify the major positive themes, recurring complaints, unusual rating patterns, and meaningful differences across markets or customer segments. Compare written comments with numeric ratings and flag contradictions for review.",
  parts: [
    ["goal", "Analyze"],
    ["source", "Customer Feedback, Customer Profiles, Service Cases, and Product Preferences"],
    ["goal", "Identify the major positive themes, recurring complaints, unusual rating patterns, and meaningful differences across markets or customer segments."],
    ["expectations", "Compare written comments with numeric ratings and flag contradictions for review."]
  ] },
{ text: "Create visualizations comparing Preferred Sweetness, Preferred Smokiness, Preferred Smoothness, Preferred Alcohol Range, Acceptable Price Range USD, Experimentation Score, Premium Purchase Ratio, and Interest in New Products across markets and customer segments. Identify customer segments that show both willingness to experiment and realistic premium purchasing potential.",
  parts: [
    ["goal", "Create visualizations comparing Preferred Sweetness, Preferred Smokiness, Preferred Smoothness, Preferred Alcohol Range, Acceptable Price Range USD, Experimentation Score, Premium Purchase Ratio, and Interest in New Products across markets and customer segments."],
    ["goal", "Identify customer segments that show both willingness to experiment and realistic premium purchasing potential."]
  ] },
{ text: "Compare all proposed products using Product Concepts, Sensory Panel, Sourcing Assessment, and Market Opportunity. Evaluate taste, aroma, smoothness, sweetness, smokiness, purchase intent, expected price, recommended retail price, production and landed costs, minimum order quantity, supply capacity, market growth, distribution readiness, and sourcing risk. Identify the strongest product-market combinations and major commercial constraints.",
  parts: [
    ["goal", "Compare all proposed products"],
    ["source", "using Product Concepts, Sensory Panel, Sourcing Assessment, and Market Opportunity"],
    ["goal", "Evaluate taste, aroma, smoothness, sweetness, smokiness, purchase intent, expected price, recommended retail price, production and landed costs, minimum order quantity, supply capacity, market growth, distribution readiness, and sourcing risk."],
    ["goal", "Identify the strongest product-market combinations and major commercial constraints."]
  ] },
{ text: "Create visualizations comparing Aurelius Oak, Black Fjord, Solara Cask, Verdant No. 8, Celestine Rose, and Ember Coast by Smoothness, Aroma Intensity, Sweetness, Smokiness, Fruitiness, Spiciness, Overall Score, Purchase Intent, and Expected Price USD. Distinguish broad-appeal products from specialist products and explain the evidence.",
  parts: [
    ["goal", "Create visualizations comparing Aurelius Oak, Black Fjord, Solara Cask, Verdant No. 8, Celestine Rose, and Ember Coast by Smoothness, Aroma Intensity, Sweetness, Smokiness, Fruitiness, Spiciness, Overall Score, Purchase Intent, and Expected Price USD."],
    ["goal", "Distinguish broad-appeal products from specialist products"],
    ["expectations", "explain the evidence"]
  ] },
{ text: "Analyze the four attached Excel workbooks together. Identify the most important existing sales patterns, marketing-channel results, customer sensory preferences, service or distribution risks, and commercially viable new-product concepts. For every major finding, name the workbook and worksheet that supports it. Clearly separate confirmed evidence, calculated interpretation, possible explanation, and missing information.",
  parts: [
    ["goal", "Analyze"],
    ["source", "the four attached Excel workbooks together"],
    ["goal", "Identify the most important existing sales patterns, marketing-channel results, customer sensory preferences, service or distribution risks, and commercially viable new-product concepts."],
    ["expectations", "For every major finding, name the workbook and worksheet that supports it."],
    ["expectations", "Clearly separate confirmed evidence, calculated interpretation, possible explanation, and missing information."]
  ] },
{ text: "Recommend the three strongest new product and market combinations. Evaluate each combination using current category and channel performance, marketing effectiveness, customer preferences, acceptable price, purchase intent, sensory fit, production cost, freight and duty, supply capacity, minimum order quantity, distribution readiness, market growth, competitive intensity, and sourcing risk. Provide supporting evidence from the attached files and explain why each alternative was selected or rejected.",
  parts: [
    ["goal", "Recommend the three strongest new product and market combinations."],
    ["goal", "Evaluate each combination"],
    ["context", "using current category and channel performance, marketing effectiveness, customer preferences, acceptable price, purchase intent, sensory fit, production cost, freight and duty, supply capacity, minimum order quantity, distribution readiness, market growth, competitive intensity, and sourcing risk"],
    ["expectations", "Provide supporting evidence"],
    ["source", "the attached files"],
    ["expectations", "explain why each alternative was selected or rejected"]
  ] },
{ text: "For each recommended product-market combination, create low, base, and high first-year revenue scenarios. Show the formula and assumptions for estimated addressable customers, trial or conversion rate, purchase frequency, units per purchase, expected selling price, supply constraints, and revenue. Use source values where available. Label every assumption that is not directly provided by the files. Do not present an assumption as a confirmed fact.",
  parts: [
    ["context", "For each recommended product-market combination"],
    ["goal", "create low, base, and high first-year revenue scenarios."],
    ["expectations", "Show the formula and assumptions for estimated addressable customers, trial or conversion rate, purchase frequency, units per purchase, expected selling price, supply constraints, and revenue."],
    ["expectations", "Use source values where available."],
    ["expectations", "Label every assumption that is not directly provided by the files."],
    ["expectations", "Do not present an assumption as a confirmed fact."]
  ] },
{ text: "Act as a skeptical commercial director reviewing this recommendation. Identify unsupported assumptions, contradictory evidence, data-quality concerns, execution risks, and reasons the revenue forecast could fail. Then revise the recommendation or confidence levels where necessary.",
  parts: [
    ["context", "Act as a skeptical commercial director reviewing this recommendation."],
    ["goal", "Identify unsupported assumptions, contradictory evidence, data-quality concerns, execution risks, and reasons the revenue forecast could fail."],
    ["goal", "Then revise the recommendation or confidence levels where necessary."]
  ] },
{ text: "Imagine you are me, three years from now. Write me a short, encouraging letter with one piece of practical advice about my work, my learning and my wellbeing.",
  parts: [
    ["context", "Imagine you are me, three years from now."],
    ["goal", "Write me a short, encouraging letter with one piece of practical advice about my work, my learning and my wellbeing."]
  ] },
{ text: "What did you base that answer on?",
  parts: [
    ["goal", "What did you base that answer on?"]
  ] },
{ text: "Summarise my emails and Teams chats from the last 3 days. What needs my attention first?",
  parts: [
    ["goal", "Summarise"],
    ["source", "my emails and Teams chats from the last 3 days"],
    ["goal", "What needs my attention first?"]
  ] },
{ text: "For each item, tell me who it is from and the date, so I can check it.",
  parts: [
    ["expectations", "For each item"],
    ["goal", "tell me who it is from and the date"],
    ["context", "so I can check it"]
  ] },
{ text: "Summarise this in 3 bullet points and tell me what I need to do.",
  parts: [
    ["goal", "Summarise"],
    ["source", "this"],
    ["expectations", "in 3 bullet points"],
    ["goal", "tell me what I need to do."]
  ] },
{ text: "I work as [my role] in my organisation. Use plain Australian English. Start with the answer, then give up to 3 bullet points.",
  parts: [
    ["context", "I work as [my role] in my organisation."],
    ["expectations", "Use plain Australian English."],
    ["expectations", "Start with the answer, then give up to 3 bullet points."]
  ] },
{ text: "What are three things I should do in my first week of using Copilot?",
  parts: [
    ["goal", "What are three things I should do in my first week of using Copilot?"]
  ] },
{ text: "Draft a one-page welcome guide for a new person joining my team. Use these headings: About our team, Who to ask for what, First week checklist. Keep it friendly and in plain Australian English.",
  parts: [
    ["goal", "Draft a one-page welcome guide"],
    ["context", "for a new person joining my team."],
    ["expectations", "Use these headings: About our team, Who to ask for what, First week checklist."],
    ["expectations", "Keep it friendly and in plain Australian English."]
  ] },
{ text: "Make the checklist shorter and turn it into a table with the columns: Task, Who can help, By when.",
  parts: [
    ["goal", "Make the checklist shorter and turn it into a table"],
    ["expectations", "with the columns: Task, Who can help, By when."]
  ] },
{ text: "Create a 5-slide presentation from /[the welcome guide from Try Out 4] for a team meeting. Keep the text short and add speaker notes.",
  parts: [
    ["goal", "Create a 5-slide presentation"],
    ["source", "/[the welcome guide from Try Out 4]"],
    ["context", "for a team meeting."],
    ["expectations", "Keep the text short and add speaker notes."]
  ] },
{ text: "Add a final slide with 3 questions new team members often ask, and suggested answers.",
  parts: [
    ["goal", "Add a final slide with 3 questions new team members often ask, and suggested answers."]
  ] },
{ text: "Create a 5-slide presentation introducing our team to new staff.",
  parts: [
    ["goal", "Create a 5-slide presentation"],
    ["context", "introducing our team to new staff."]
  ] },
{ text: "What are the 3 most important insights in this data? Explain them in plain English.",
  parts: [
    ["goal", "What are the 3 most important insights in"],
    ["source", "this data"],
    ["expectations", "Explain them in plain English."]
  ] },
{ text: "Create a chart that shows the main trend.",
  parts: [
    ["goal", "Create a chart that shows the main trend."]
  ] },
{ text: "Summarise this chat from the last 2 days and list any action items for me.",
  parts: [
    ["goal", "Summarise"],
    ["source", "this chat from the last 2 days"],
    ["goal", "list any action items for me."]
  ] },
{ text: "Draft a short reply confirming what I will do and by when.",
  parts: [
    ["goal", "Draft a short reply confirming what I will do and by when."]
  ] },
{ text: "Summarise this email thread and highlight what I need to do.",
  parts: [
    ["goal", "Summarise"],
    ["source", "this email thread"],
    ["goal", "highlight what I need to do."]
  ] },
{ text: "Draft a polite reply that thanks them, confirms the next step, and says I will respond in full by Friday.",
  parts: [
    ["goal", "Draft a polite reply that thanks them, confirms the next step, and says I will respond in full by Friday."]
  ] },
{ text: "Using the files in this workspace, create a one-page summary of the key points and anything that is unclear.",
  parts: [
    ["source", "Using the files in this workspace"],
    ["goal", "create a one-page summary of the key points and anything that is unclear."]
  ] },
{ text: "Turn that summary into 5 questions I should ask my manager.",
  parts: [
    ["goal", "Turn that summary into 5 questions I should ask my manager."]
  ] },
{ text: "Research how Australian state governments have used AI to improve public services in the last 12 months. Give me 5 examples with sources.",
  parts: [
    ["goal", "Research how Australian state governments have used AI to improve public services in the last 12 months."],
    ["expectations", "Give me 5 examples with sources."]
  ] },
{ text: "Which of these could apply to my work as [my role]?",
  parts: [
    ["goal", "Which of these could apply"],
    ["context", "to my work as [my role]?"]
  ] },
{ text: "Help me improve this prompt: \"write an email to my team about the change\"",
  parts: [
    ["goal", "Help me improve this prompt:"],
    ["source", "\"write an email to my team about the change\""]
  ] },
{ text: "Rewrite it as one clear prompt I can copy and use.",
  parts: [
    ["goal", "Rewrite it"],
    ["expectations", "as one clear prompt I can copy and use."]
  ] },
{ text: "I have an idea to [improve something in my team, e.g. run a monthly lunch-and-learn]. Ask me questions one at a time to help me test the idea and make it stronger.",
  parts: [
    ["context", "I have an idea to [improve something in my team, e.g. run a monthly lunch-and-learn]."],
    ["goal", "Ask me questions"],
    ["expectations", "one at a time"],
    ["goal", "to help me test the idea and make it stronger."]
  ] },
{ text: "Summarise the strongest version of my idea in 5 bullet points.",
  parts: [
    ["goal", "Summarise the strongest version of my idea"],
    ["expectations", "in 5 bullet points."]
  ] },
{ text: "Review this paragraph for clarity and plain English for a general audience, and suggest specific improvements: [paste text]",
  parts: [
    ["goal", "Review"],
    ["source", "this paragraph"],
    ["goal", "for clarity and plain English"],
    ["context", "for a general audience"],
    ["goal", "suggest specific improvements:"],
    ["source", "[paste text]"]
  ] },
{ text: "Now make it 30% shorter without losing the key message.",
  parts: [
    ["goal", "Now make it 30% shorter"],
    ["expectations", "without losing the key message."]
  ] },
{ text: "What meetings and appointments do I have today? Put them in time order and briefly explain what each one appears to be about. Identify any gaps I could use for focused work.",
  parts: [
    ["goal", "What meetings and appointments do I have today?"],
    ["expectations", "Put them in time order and briefly explain what each one appears to be about."],
    ["goal", "Identify any gaps I could use for focused work."]
  ] },
{ text: "Summarise my emails and Teams messages from the last two working days. Focus on items related to citizen, resident or public services. Tell me what needs my response, action or attention. Do not invent deadlines that are not stated.",
  parts: [
    ["goal", "Summarise"],
    ["source", "my emails and Teams messages from the last two working days."],
    ["context", "Focus on items related to citizen, resident or public services."],
    ["goal", "Tell me what needs my response, action or attention."],
    ["expectations", "Do not invent deadlines that are not stated."]
  ] },
{ text: "Turn those items into a work plan for today. Group them into:\n- Handle first\n- Complete today\n- Waiting for someone else\n- Monitor for an update\nFor each item, explain the priority, name the source and include any stated deadline.",
  parts: [
    ["goal", "Turn"],
    ["source", "those items"],
    ["goal", "into a work plan for today."],
    ["expectations", "Group them into:\n- Handle first\n- Complete today\n- Waiting for someone else\n- Monitor for an update"],
    ["expectations", "For each item, explain the priority, name the source and include any stated deadline."]
  ] },
{ text: "I work in a government team that provides services to residents. Explain generative AI to me in simple language using a public-service example. Keep it under 150 words.",
  parts: [
    ["context", "I work in a government team that provides services to residents."],
    ["goal", "Explain generative AI to me"],
    ["expectations", "in simple language using a public-service example."],
    ["expectations", "Keep it under 150 words."]
  ] },
{ text: "Now explain it as if you were speaking to a resident who has never used AI before.",
  parts: [
    ["goal", "Now explain it"],
    ["context", "as if you were speaking to a resident who has never used AI before."]
  ] },
{ text: "Here are my rough notes:\n\n- Online service unavailable Saturday 8 am to 12 pm\n- Residents can still call the contact centre\n- Applications already submitted will not be affected\n- Work is required for a system upgrade\n- Service expected back by 12 pm\n\nTurn these notes into a short, clear public notice for residents. Use plain language and a helpful tone.",
  parts: [
    ["source", "Here are my rough notes:"],
    ["source", "- Online service unavailable Saturday 8 am to 12 pm\n- Residents can still call the contact centre\n- Applications already submitted will not be affected\n- Work is required for a system upgrade\n- Service expected back by 12 pm"],
    ["goal", "Turn"],
    ["source", "these notes"],
    ["goal", "into a short, clear public notice"],
    ["context", "for residents."],
    ["expectations", "Use plain language and a helpful tone."]
  ] },
{ text: "Make it shorter and suitable for a website banner.",
  parts: [
    ["goal", "Make it shorter"],
    ["expectations", "and suitable for a website banner."]
  ] },
{ text: "A government service team wants to encourage more residents to use online services, but some residents may have limited internet access, accessibility needs, language barriers or low confidence using digital services.\n\nSuggest 5 ways the team could improve access without removing telephone or in-person support. Put the ideas in a table with Benefits and Things to Consider.",
  parts: [
    ["context", "A government service team wants to encourage more residents to use online services, but some residents may have limited internet access, accessibility needs, language barriers or low confidence using digital services."],
    ["goal", "Suggest 5 ways the team could improve access"],
    ["expectations", "without removing telephone or in-person support."],
    ["expectations", "Put the ideas in a table with Benefits and Things to Consider."]
  ] },
{ text: "Which ideas could the team try first with a small pilot? Explain your reasoning, but do not make the final decision for us.",
  parts: [
    ["goal", "Which ideas could the team try first with a small pilot?"],
    ["expectations", "Explain your reasoning, but do not make the final decision for us."]
  ] },
{ text: "Review the attached files and give me a short service update. Include:\n- What is going well\n- What may need attention\n- The main themes in resident feedback\n- Information that is unclear or missing\n- Three questions the team should investigate\nUse only the attached files and cite the source for each finding.",
  parts: [
    ["goal", "Review"],
    ["source", "the attached files"],
    ["goal", "give me a short service update."],
    ["expectations", "Include:\n- What is going well\n- What may need attention\n- The main themes in resident feedback\n- Information that is unclear or missing\n- Three questions the team should investigate"],
    ["expectations", "Use only"],
    ["source", "the attached files"],
    ["expectations", "cite the source for each finding."]
  ] },
{ text: "Using the service update you created, draft a short email to my manager. Summarise the current position, identify the most urgent concern and recommend three next steps. Clearly label recommendations and do not present them as approved decisions. Use plain, professional language.",
  parts: [
    ["source", "Using the service update you created"],
    ["goal", "draft a short email to my manager."],
    ["expectations", "Summarise the current position, identify the most urgent concern and recommend three next steps."],
    ["expectations", "Clearly label recommendations and do not present them as approved decisions."],
    ["expectations", "Use plain, professional language."]
  ] },
{ text: "Which source supports that statement?",
  parts: [
    ["goal", "Which source supports that statement?"]
  ] },
{ text: "What information is missing?",
  parts: [
    ["goal", "What information is missing?"]
  ] },
{ text: "Make the email shorter for a manager who has one minute to read it.",
  parts: [
    ["goal", "Make the email shorter"],
    ["context", "for a manager who has one minute to read it."]
  ] },
{ text: "Turn the update into five briefing points.",
  parts: [
    ["goal", "Turn the update into five briefing points."]
  ] },
{ text: "Analyze all four worksheets in this workbook: Sales Transactions, Sales Targets, Distributor Performance, and Returns and Adjustments. Identify the most important sales trends, underperforming markets, margin risks, unusual discounts, return patterns, distributor concerns, and possible data-quality issues. Reference the relevant market, product, channel, transaction or distributor ID, and figures. Separate confirmed findings from possible explanations.",
  parts: [
    ["goal", "Analyze"],
    ["source", "all four worksheets in this workbook: Sales Transactions, Sales Targets, Distributor Performance, and Returns and Adjustments."],
    ["goal", "Identify the most important sales trends, underperforming markets, margin risks, unusual discounts, return patterns, distributor concerns, and possible data-quality issues."],
    ["expectations", "Reference the relevant market, product, channel, transaction or distributor ID, and figures."],
    ["expectations", "Separate confirmed findings from possible explanations."]
  ] },
{ text: "Create a new worksheet named Sales Analysis. Add: (1) a chart comparing Net Sales Local and Gross Margin Percentage by market, (2) a chart comparing Net Sales Local by Product Category and Sales Channel, and (3) a quarterly view of sales performance. Keep currencies separated or clearly warn where direct comparison is not valid. Explain the most important pattern shown by each visual.",
  parts: [
    ["goal", "Create a new worksheet named Sales Analysis."],
    ["goal", "a chart comparing Net Sales Local and Gross Margin Percentage by market"],
    ["goal", "a chart comparing Net Sales Local by Product Category and Sales Channel"],
    ["goal", "a quarterly view of sales performance."],
    ["expectations", "Keep currencies separated or clearly warn where direct comparison is not valid."],
    ["expectations", "Explain the most important pattern shown by each visual."]
  ] },
{ text: "Check Sales Transactions for duplicate or near-duplicate records and unusually high discounts. List records for review and explain the fields that make each record suspicious. Do not delete or modify any source records.",
  parts: [
    ["goal", "Check"],
    ["source", "Sales Transactions"],
    ["goal", "for duplicate or near-duplicate records and unusually high discounts."],
    ["expectations", "List records for review and explain the fields that make each record suspicious."],
    ["expectations", "Do not delete or modify any source records."]
  ] },
{ text: "Analyze Campaign Performance and Events and Tastings. Compare Actual Spend USD, Impressions, Engagements, Clicks, Leads, Conversions, Attributed Sales USD, Acquisition Cost USD, Event Cost USD, Positive Intent Count, Follow-up Leads, and Orders Within 30 Days USD. Identify campaigns or events with strong attention but weak commercial results, inefficient spending, and unusually strong outcomes. Explain any limitation in comparing attribution across channels.",
  parts: [
    ["goal", "Analyze"],
    ["source", "Campaign Performance and Events and Tastings."],
    ["goal", "Compare Actual Spend USD, Impressions, Engagements, Clicks, Leads, Conversions, Attributed Sales USD, Acquisition Cost USD, Event Cost USD, Positive Intent Count, Follow-up Leads, and Orders Within 30 Days USD."],
    ["goal", "Identify campaigns or events with strong attention but weak commercial results, inefficient spending, and unusually strong outcomes."],
    ["expectations", "Explain any limitation in comparing attribution across channels."]
  ] },
{ text: "Analyze Customer Feedback, Customer Segments, and Service and Channel Issues. Identify positive and negative themes, comment-rating contradictions, sensory and price preferences, customer segments with both high Experimentation Score and meaningful Premium Purchase Ratio, and recurring service or channel issues. Recommend the most promising target segment, market, preferred channel, sensory profile, and acceptable price range for a new premium beverage.",
  parts: [
    ["goal", "Analyze"],
    ["source", "Customer Feedback, Customer Segments, and Service and Channel Issues."],
    ["goal", "Identify positive and negative themes, comment-rating contradictions, sensory and price preferences, customer segments with both high Experimentation Score and meaningful Premium Purchase Ratio, and recurring service or channel issues."],
    ["goal", "Recommend the most promising target segment, market, preferred channel, sensory profile, and acceptable price range"],
    ["context", "for a new premium beverage."]
  ] },
{ text: "Create a new worksheet named Customer Opportunity. Visualize customer segments by Market, Experimentation Score, Premium Purchase Ratio, Average Purchase Value USD, Preferred Smoothness, Preferred Smokiness, Preferred Sweetness, Acceptable Price Range USD, Interest in New Products, and Preferred Channel. Highlight the segments that combine new-product interest with realistic premium purchasing potential.",
  parts: [
    ["goal", "Create a new worksheet named Customer Opportunity."],
    ["goal", "Visualize customer segments"],
    ["expectations", "by Market, Experimentation Score, Premium Purchase Ratio, Average Purchase Value USD, Preferred Smoothness, Preferred Smokiness, Preferred Sweetness, Acceptable Price Range USD, Interest in New Products, and Preferred Channel."],
    ["expectations", "Highlight the segments that combine new-product interest with realistic premium purchasing potential."]
  ] },
{ text: "Compare Aurelius Oak, Black Fjord, Solara Cask, Verdant No. 8, Celestine Rose, and Ember Coast using Product Concepts, Sensory Panel, Sourcing and Cost, and Market Opportunity. Evaluate taste, aroma, smoothness, sweetness, smokiness, fruitiness, spiciness, purchase intent, expected price, recommended retail price, estimated landed cost, minimum order quantity, production capacity, lead time, supply risk, market growth, competitive intensity, addressable customers, distribution readiness, and launch investment. Recommend the strongest product-market combinations and explain the main constraints.",
  parts: [
    ["goal", "Compare Aurelius Oak, Black Fjord, Solara Cask, Verdant No. 8, Celestine Rose, and Ember Coast"],
    ["source", "using Product Concepts, Sensory Panel, Sourcing and Cost, and Market Opportunity."],
    ["context", "Evaluate taste, aroma, smoothness, sweetness, smokiness, fruitiness, spiciness, purchase intent, expected price, recommended retail price, estimated landed cost, minimum order quantity, production capacity, lead time, supply risk, market growth, competitive intensity, addressable customers, distribution readiness, and launch investment."],
    ["goal", "Recommend the strongest product-market combinations"],
    ["expectations", "explain the main constraints."]
  ] },
{ text: "Create a new worksheet named Product Positioning. Compare the six products by Smoothness, Aroma Intensity, Sweetness, Smokiness, Fruitiness, Spiciness, Purchase Intent, Expected Price USD, and Overall Score. Separate broad-appeal products from specialist products. Flag sensory records where Overall Score appears inconsistent with component scores or Purchase Intent.",
  parts: [
    ["goal", "Create a new worksheet named Product Positioning."],
    ["goal", "Compare the six products"],
    ["expectations", "by Smoothness, Aroma Intensity, Sweetness, Smokiness, Fruitiness, Spiciness, Purchase Intent, Expected Price USD, and Overall Score."],
    ["goal", "Separate broad-appeal products from specialist products."],
    ["expectations", "Flag sensory records where Overall Score appears inconsistent with component scores or Purchase Intent."]
  ] },
{ text: "Analyze the three attached Excel workbooks together. Identify the most important current market and channel performance, customer and segment preferences, marketing or tasting-channel effectiveness, service or distributor risks, and commercially viable new-product opportunities. For every major finding, name the workbook and worksheet that supports it. Clearly separate confirmed evidence, calculated interpretation, possible explanation, and missing information.",
  parts: [
    ["goal", "Analyze"],
    ["source", "the three attached Excel workbooks together."],
    ["goal", "Identify the most important current market and channel performance, customer and segment preferences, marketing or tasting-channel effectiveness, service or distributor risks, and commercially viable new-product opportunities."],
    ["expectations", "For every major finding, name the workbook and worksheet that supports it."],
    ["expectations", "Clearly separate confirmed evidence, calculated interpretation, possible explanation, and missing information."]
  ] },
{ text: "Recommend one primary new-product launch and two alternatives. For each option, specify the product, target market, customer segment, launch channel, recommended positioning, and evidence. Evaluate current category and channel performance, marketing conversion and tasting results, customer ratings and comments, sensory and price preferences, purchase value, experimentation, sensory panel results, purchase intent, recommended price, estimated landed cost, supply capacity, minimum order quantity, distribution readiness, market growth, competition, sourcing risk, and launch investment. Explain why the primary option ranks above the alternatives.",
  parts: [
    ["goal", "Recommend one primary new-product launch and two alternatives."],
    ["expectations", "For each option, specify the product, target market, customer segment, launch channel, recommended positioning, and evidence."],
    ["context", "Evaluate current category and channel performance, marketing conversion and tasting results, customer ratings and comments, sensory and price preferences, purchase value, experimentation, sensory panel results, purchase intent, recommended price, estimated landed cost, supply capacity, minimum order quantity, distribution readiness, market growth, competition, sourcing risk, and launch investment."],
    ["expectations", "Explain why the primary option ranks above the alternatives."]
  ] },
{ text: "For the primary recommendation, create Low, Base, and High first-year revenue scenarios. Show the formula and assumptions for addressable customers, trial or conversion rate, purchase frequency, units per purchase, expected selling price, and supply capacity. Use source values where available. Label every assumption that is not directly provided by the files. Do not allow forecast units to exceed available supply without an explicit constraint warning. Then provide a smaller revenue range for each alternative.",
  parts: [
    ["goal", "For the primary recommendation, create Low, Base, and High first-year revenue scenarios."],
    ["expectations", "Show the formula and assumptions for addressable customers, trial or conversion rate, purchase frequency, units per purchase, expected selling price, and supply capacity."],
    ["source", "Use source values where available."],
    ["expectations", "Label every assumption that is not directly provided by the files."],
    ["expectations", "Do not allow forecast units to exceed available supply without an explicit constraint warning."],
    ["goal", "provide a smaller revenue range for each alternative."]
  ] },
{ text: "Act as a skeptical commercial director. Review the primary recommendation and revenue forecast. Identify unsupported assumptions, contradictory evidence, data-quality concerns, commercial risks, operational constraints, and reasons the forecast could fail. Revise the recommendation, scenarios or confidence level where necessary. End with the additional information required before a real launch approval.",
  parts: [
    ["context", "Act as a skeptical commercial director."],
    ["goal", "Review the primary recommendation and revenue forecast."],
    ["goal", "Identify unsupported assumptions, contradictory evidence, data-quality concerns, commercial risks, operational constraints, and reasons the forecast could fail."],
    ["goal", "Revise the recommendation, scenarios or confidence level where necessary."],
    ["expectations", "End with the additional information required before a real launch approval."]
  ] },
{ text: "Using Sales Transactions and Sales Targets, identify the three most important commercial findings. Focus on market or channel performance, sales versus target, and gross margin percentage. For each finding, name the market, product or channel and the supporting figures. Keep the answer to a maximum of six bullets.",
  parts: [
    ["source", "Using Sales Transactions and Sales Targets"],
    ["goal", "identify the three most important commercial findings."],
    ["context", "Focus on market or channel performance, sales versus target, and gross margin percentage."],
    ["expectations", "For each finding, name the market, product or channel and the supporting figures."],
    ["expectations", "Keep the answer to a maximum of six bullets."]
  ] },
{ text: "Check this workbook for important mismatches or anomalies. Focus on duplicate or near-duplicate sales records, discounts above 20%, sales with unusually weak gross margin percentage, distributors with low fulfilment or high return rates, and repeated returns or adjustments. List only the records that require review, explain why each is suspicious, and do not change the source data.",
  parts: [
    ["goal", "Check"],
    ["source", "this workbook"],
    ["goal", "for important mismatches or anomalies."],
    ["context", "Focus on duplicate or near-duplicate sales records, discounts above 20%, sales with unusually weak gross margin percentage, distributors with low fulfilment or high return rates, and repeated returns or adjustments."],
    ["expectations", "List only the records that require review, explain why each is suspicious, and do not change the source data."]
  ] },
{ text: "Using Campaign Performance, Events and Tastings, and Customer Segments, recommend one target market, one customer segment, and one launch channel for a new premium beverage. Consider conversion or attributed sales, event orders, Experimentation Score, Premium Purchase Ratio, Average Purchase Value USD, acceptable price range, and preferred channel. Provide the recommendation and four supporting facts.",
  parts: [
    ["source", "Using Campaign Performance, Events and Tastings, and Customer Segments"],
    ["goal", "recommend one target market, one customer segment, and one launch channel"],
    ["context", "for a new premium beverage."],
    ["context", "Consider conversion or attributed sales, event orders, Experimentation Score, Premium Purchase Ratio, Average Purchase Value USD, acceptable price range, and preferred channel."],
    ["expectations", "Provide the recommendation and four supporting facts."]
  ] },
{ text: "Find the five most important contradictions or mismatches across Campaign Performance, Customer Feedback, and Service and Channel Issues. Look for high engagement with weak conversion, high ratings with negative comments, good product feedback with low value ratings, and repeated issues linked to the same channel or distributor. Give the relevant IDs, values, and a short explanation.",
  parts: [
    ["goal", "Find the five most important contradictions or mismatches"],
    ["source", "across Campaign Performance, Customer Feedback, and Service and Channel Issues."],
    ["context", "Look for high engagement with weak conversion, high ratings with negative comments, good product feedback with low value ratings, and repeated issues linked to the same channel or distributor."],
    ["expectations", "Give the relevant IDs, values, and a short explanation."]
  ] },
{ text: "Using Product Concepts, Sensory Panel, Sourcing and Cost, and Market Opportunity, recommend the two strongest product-market combinations. Compare purchase intent, expected price, recommended retail price, estimated landed cost, supply capacity, minimum order quantity, market growth, distribution readiness, and launch investment. Explain the main advantage and main constraint for each option.",
  parts: [
    ["source", "Using Product Concepts, Sensory Panel, Sourcing and Cost, and Market Opportunity"],
    ["goal", "recommend the two strongest product-market combinations."],
    ["context", "Compare purchase intent, expected price, recommended retail price, estimated landed cost, supply capacity, minimum order quantity, market growth, distribution readiness, and launch investment."],
    ["expectations", "Explain the main advantage and main constraint for each option."]
  ] },
{ text: "Find the five most important product mismatches or outliers. Look for high Overall Score with low Purchase Intent or weak component scores, strong sensory appeal with expected price below recommended retail price, attractive market growth with weak distribution readiness, and products limited by high landed cost, minimum order quantity, lead time, capacity, or supply risk. Provide the product, market or evaluation ID and the conflicting values.",
  parts: [
    ["goal", "Find the five most important product mismatches or outliers."],
    ["context", "Look for high Overall Score with low Purchase Intent or weak component scores, strong sensory appeal with expected price below recommended retail price, attractive market growth with weak distribution readiness, and products limited by high landed cost, minimum order quantity, lead time, capacity, or supply risk."],
    ["expectations", "Provide the product, market or evaluation ID and the conflicting values."]
  ] },
{ text: "Analyze the three attached Excel workbooks together. Recommend one primary new-product launch and one alternative. For each, specify the product, target market, customer segment, launch channel, positioning, and the strongest supporting evidence from each workbook. Explain why the primary option ranks higher. Clearly separate confirmed evidence, interpretation, and missing information.",
  parts: [
    ["goal", "Analyze"],
    ["source", "the three attached Excel workbooks together."],
    ["goal", "Recommend one primary new-product launch and one alternative."],
    ["expectations", "For each, specify the product, target market, customer segment, launch channel, positioning, and the strongest supporting evidence from each workbook."],
    ["expectations", "Explain why the primary option ranks higher."],
    ["expectations", "Clearly separate confirmed evidence, interpretation, and missing information."]
  ] },
{ text: "For the primary recommendation, create Low, Base, and High first-year revenue scenarios. Show the formula and label assumptions for addressable customers, trial or conversion rate, purchase frequency, units per purchase, selling price, and supply capacity. Then challenge the forecast: identify the five biggest assumptions, contradictions, data-quality risks, or operational constraints, and revise the confidence level or scenarios if needed.",
  parts: [
    ["goal", "For the primary recommendation, create Low, Base, and High first-year revenue scenarios."],
    ["expectations", "Show the formula and label assumptions for addressable customers, trial or conversion rate, purchase frequency, units per purchase, selling price, and supply capacity."],
    ["goal", "challenge the forecast: identify the five biggest assumptions, contradictions, data-quality risks, or operational constraints"],
    ["goal", "revise the confidence level or scenarios if needed."]
  ] },
{ text: "Act as an audit senior. Using only the attached files, write a one-page briefing for an engagement leader joining today: the client, the key FY2026 numbers, the top 5 risks and the evidence still outstanding. Name the file for each point.",
  parts: [
    ["context", "Act as an audit senior."],
    ["source", "Using only the attached files"],
    ["goal", "write a one-page briefing"],
    ["context", "for an engagement leader joining today"],
    ["expectations", "the client, the key FY2026 numbers, the top 5 risks and the evidence still outstanding."],
    ["expectations", "Name the file for each point."]
  ] },
{ text: "Which of these points are confirmed by a document and which are your assumptions?",
  parts: [
    ["goal", "Which of these points are confirmed by a document and which are your assumptions?"]
  ] },
{ text: "Investigate Year-end revenue. Find all related evidence across the three files, explain what looks wrong, quantify the exposure in SGD and list the evidence we should request next.",
  parts: [
    ["goal", "Investigate Year-end revenue."],
    ["goal", "Find all related evidence"],
    ["source", "across the three files"],
    ["goal", "explain what looks wrong"],
    ["expectations", "quantify the exposure in SGD and list the evidence we should request next."]
  ] },
{ text: "Investigate [our group topic]. Find all related evidence across the three files, explain what looks wrong, quantify the exposure in SGD and list the evidence we should request next.",
  parts: [
    ["goal", "Investigate [our group topic]."],
    ["goal", "Find all related evidence"],
    ["source", "across the three files"],
    ["goal", "explain what looks wrong"],
    ["expectations", "quantify the exposure in SGD and list the evidence we should request next."]
  ] },
{ text: "Turn this into three sentences I can present to the engagement leader in one minute.",
  parts: [
    ["goal", "Turn this into three sentences"],
    ["context", "I can present to the engagement leader in one minute."]
  ] },
{ text: "Check your investigation again. For each number you quoted, tell me the exact file and where it appears. Remove anything you cannot support.",
  parts: [
    ["goal", "Check your investigation again."],
    ["expectations", "For each number you quoted, tell me the exact file and where it appears."],
    ["expectations", "Remove anything you cannot support."]
  ] },
{ text: "Compare your answer with another group's — did Copilot reach the same conclusion?",
  parts: [
    ["goal", "Compare your answer with another group's"],
    ["goal", "did Copilot reach the same conclusion?"]
  ] },
{ text: "Add a column called Self_Approved that shows Yes when Prepared By equals Approved By, and a column called Late_Posting that shows Yes when Posting Time is after 20:00.",
  parts: [
    ["goal", "Add a column called Self_Approved"],
    ["expectations", "that shows Yes when Prepared By equals Approved By,"],
    ["goal", "a column called Late_Posting"],
    ["expectations", "that shows Yes when Posting Time is after 20:00."]
  ] },
{ text: "How many Manual journals are both self-approved and posted late? List them with Journal ID, Description and Local Amount.",
  parts: [
    ["goal", "How many Manual journals are both self-approved and posted late?"],
    ["expectations", "List them with Journal ID, Description and Local Amount."]
  ] },
{ text: "Find transactions that look unusual: the same amount paid to the same vendor on the same day, amounts just below SGD 25,000, and round-number manual entries in December. Explain why each one is unusual.",
  parts: [
    ["goal", "Find transactions that look unusual"],
    ["context", "the same amount paid to the same vendor on the same day, amounts just below SGD 25,000, and round-number manual entries in December."],
    ["expectations", "Explain why each one is unusual."]
  ] },
{ text: "Look up each Vendor ID in the Vendors sheet and flag payments to vendors that are Dormant or a Related Party.",
  parts: [
    ["goal", "Look up each Vendor ID"],
    ["source", "in the Vendors sheet"],
    ["goal", "flag payments to vendors that are Dormant or a Related Party."]
  ] },
{ text: "Find duplicate claims and claims approved by the person who submitted them.",
  parts: [
    ["goal", "Find duplicate claims"],
    ["goal", "claims approved by the person who submitted them."]
  ] },
{ text: "Summarise my top 5 exceptions by priority with Journal ID, amount, why it is unusual and the evidence we should request.",
  parts: [
    ["goal", "Summarise my top 5 exceptions"],
    ["expectations", "by priority with Journal ID, amount, why it is unusual and the evidence we should request."]
  ] },
{ text: "Copy your top 5 into the Audit_Findings sheet and compare with the answers revealed by your instructor.",
  parts: [
    ["goal", "Copy your top 5 into the Audit_Findings sheet"],
    ["goal", "compare"],
    ["source", "with the answers revealed by your instructor."]
  ] },
{ text: "Act as an audit senior. In the Tax_Adjustments sheet, list the items whose Evidence Status is not Provided, with the evidence still needed and the row each comes from. Say these are training assumptions, not tax advice.",
  parts: [
    ["context", "Act as an audit senior."],
    ["source", "In the Tax_Adjustments sheet"],
    ["goal", "list the items whose Evidence Status is not Provided"],
    ["expectations", "with the evidence still needed and the row each comes from."],
    ["expectations", "Say these are training assumptions, not tax advice."]
  ] },
{ text: "Act as an audit senior. In Review_Summary, draft a conclusion and next action for each area, naming the evidence still needed. No tax opinion: these are training assumptions.",
  parts: [
    ["context", "Act as an audit senior."],
    ["source", "In Review_Summary"],
    ["goal", "draft a conclusion and next action for each area"],
    ["expectations", "naming the evidence still needed."],
    ["expectations", "No tax opinion: these are training assumptions."]
  ] },
{ text: "Summarise this email and its attachments. What is being asked of me, by when, and which items are blocked by missing evidence?",
  parts: [
    ["goal", "Summarise"],
    ["source", "this email and its attachments."],
    ["expectations", "What is being asked of me, by when, and which items are blocked by missing evidence?"]
  ] },
{ text: "Put the actions in a table with Action, Owner, Due date and Evidence needed, sorted by due date.",
  parts: [
    ["goal", "Put the actions in a table"],
    ["expectations", "with Action, Owner, Due date and Evidence needed, sorted by due date."]
  ] },
{ text: "Draft a reply to the Finance Director confirming we can meet the 20 February board timeline only if the outstanding evidence arrives by 12 February. List the three most urgent evidence items. Professional and firm, under 150 words.",
  parts: [
    ["goal", "Draft a reply"],
    ["context", "to the Finance Director"],
    ["goal", "confirming we can meet the 20 February board timeline only if the outstanding evidence arrives by 12 February."],
    ["expectations", "List the three most urgent evidence items."],
    ["expectations", "Professional and firm, under 150 words."]
  ] },
{ text: "Make it more diplomatic and propose a 30-minute call this Thursday.",
  parts: [
    ["goal", "Make it more diplomatic"],
    ["goal", "propose a 30-minute call this Thursday."]
  ] },
{ text: "Compare my reply with the original email. Have I answered every question and request? List anything I missed.",
  parts: [
    ["goal", "Compare"],
    ["source", "my reply with the original email."],
    ["goal", "Have I answered every question and request?"],
    ["expectations", "List anything I missed."]
  ] },
{ text: "Fix the gaps and save the reply as a draft (do not send).",
  parts: [
    ["goal", "Fix the gaps"],
    ["expectations", "save the reply as a draft (do not send)."]
  ] },
{ text: "Create a 5-slide executive briefing for Meridian Retail Group's leadership from /03_Audit_Findings_Draft.docx. Slides: Executive summary, Financial snapshot, Top 3 findings, Evidence outstanding, Recommended next actions. Maximum 4 bullets per slide.",
  parts: [
    ["goal", "Create a 5-slide executive briefing"],
    ["context", "for Meridian Retail Group's leadership"],
    ["source", "from /03_Audit_Findings_Draft.docx."],
    ["expectations", "Slides: Executive summary, Financial snapshot, Top 3 findings, Evidence outstanding, Recommended next actions."],
    ["expectations", "Maximum 4 bullets per slide."]
  ] },
{ text: "Add a slide with a table of all six findings showing Finding, Rating, Owner and Target date.",
  parts: [
    ["goal", "Add a slide"],
    ["expectations", "with a table of all six findings showing Finding, Rating, Owner and Target date."]
  ] },
{ text: "Rewrite the Executive summary slide for a busy CFO: one headline sentence and three bullets that each include an amount.",
  parts: [
    ["goal", "Rewrite the Executive summary slide"],
    ["context", "for a busy CFO"],
    ["expectations", "one headline sentence and three bullets that each include an amount."]
  ] },
{ text: "Add a slide about the related-party logistics arrangement using /06_Supporting_Documents.pdf: what we found, why it matters, and what evidence we still need.",
  parts: [
    ["goal", "Add a slide about the related-party logistics arrangement"],
    ["source", "using /06_Supporting_Documents.pdf"],
    ["expectations", "what we found, why it matters, and what evidence we still need."]
  ] },
{ text: "Review this presentation as a sceptical board member. What is unclear, unsupported or missing? Suggest three improvements.",
  parts: [
    ["goal", "Review"],
    ["source", "this presentation"],
    ["context", "as a sceptical board member."],
    ["goal", "What is unclear, unsupported or missing?"],
    ["expectations", "Suggest three improvements."]
  ] },
{ text: "Apply the one improvement that matters most.",
  parts: [
    ["goal", "Apply the one improvement that matters most."]
  ] },
{ text: "Summarise this conversation. What has been decided, what is still open, and who owns each action?",
  parts: [
    ["goal", "Summarise"],
    ["source", "this conversation."],
    ["expectations", "What has been decided, what is still open, and who owns each action?"]
  ] },
{ text: "What has been said about the related-party logistics arrangement and the duplicate advisory payments? Show who said it.",
  parts: [
    ["goal", "What has been said about the related-party logistics arrangement and the duplicate advisory payments?"],
    ["expectations", "Show who said it."]
  ] },
{ text: "Help me prepare a 30-minute status meeting with the Finance Director: an agenda, the five questions we must ask, and the evidence we still need.",
  parts: [
    ["goal", "Help me prepare a 30-minute status meeting"],
    ["context", "with the Finance Director"],
    ["expectations", "an agenda, the five questions we must ask, and the evidence we still need."]
  ] },
{ text: "Draft a short message to the team sharing the agenda and asking each owner to update their status by 5 pm.",
  parts: [
    ["goal", "Draft a short message"],
    ["context", "to the team"],
    ["goal", "sharing the agenda and asking each owner to update their status by 5 pm."]
  ] },
{ text: "Based on this chat, list every action with owner and due date. Flag anything with no owner or no date.",
  parts: [
    ["source", "Based on this chat"],
    ["goal", "list every action"],
    ["expectations", "with owner and due date."],
    ["expectations", "Flag anything with no owner or no date."]
  ] },
{ text: "Post your action list in the training chat (training chat only).",
  parts: [
    ["goal", "Post your action list in the training chat"],
    ["expectations", "(training chat only)."]
  ] },
{ text: "Summarise this client background for a new engagement team member in no more than 8 bullet points. Include what the business does, the group structure, the key FY2026 numbers and the three changes that increase risk the most.",
  parts: [
    ["goal", "Summarise"],
    ["source", "this client background"],
    ["context", "for a new engagement team member"],
    ["expectations", "in no more than 8 bullet points."],
    ["expectations", "Include what the business does, the group structure, the key FY2026 numbers and the three changes that increase risk the most."]
  ] },
{ text: "Which numbers or statements in this document look inconsistent or need checking? Tell me the section for each one.",
  parts: [
    ["goal", "Which numbers or statements in"],
    ["source", "this document"],
    ["goal", "look inconsistent or need checking?"],
    ["expectations", "Tell me the section for each one."]
  ] },
{ text: "From the Financial Controller and Inventory Manager interviews, create a table with the columns: Statement, Who said it, Possible risk, Evidence to request.",
  parts: [
    ["source", "From the Financial Controller and Inventory Manager interviews"],
    ["goal", "create a table"],
    ["expectations", "with the columns: Statement, Who said it, Possible risk, Evidence to request."]
  ] },
{ text: "Pick the most serious issue and write one audit finding with three headings: Condition, Risk, Recommendation. Use only facts from this document.",
  parts: [
    ["goal", "Pick the most serious issue and write one audit finding"],
    ["expectations", "with three headings: Condition, Risk, Recommendation."],
    ["expectations", "Use only facts from this document."]
  ] },
{ text: "Write the executive summary for this draft: the three most significant matters, the financial exposure and the evidence still outstanding, in under 150 words for the engagement leader.",
  parts: [
    ["goal", "Write the executive summary"],
    ["source", "for this draft"],
    ["expectations", "the three most significant matters, the financial exposure and the evidence still outstanding"],
    ["expectations", "in under 150 words"],
    ["context", "for the engagement leader."]
  ] },
{ text: "Check your summary against the document and list anything you cannot support.",
  parts: [
    ["goal", "Check your summary"],
    ["source", "against the document"],
    ["expectations", "list anything you cannot support."]
  ] },
{ text: "Review the selected workbook. Create a table showing each sheet, its key fields, the business question it can answer, important limitations, and the anomaly or bias risks the learner should watch for. Do not analyse outcomes yet.",
  parts: [
    ["goal", "Review"],
    ["source", "the selected workbook."],
    ["goal", "Create a table"],
    ["expectations", "showing each sheet, its key fields, the business question it can answer, important limitations, and the anomaly or bias risks the learner should watch for."],
    ["expectations", "Do not analyse outcomes yet."]
  ] },
{ text: "Analyse daily hotel performance. Identify the five most important signals and up to eight unusual days or periods. For each, show the date, metric values, why it is unusual, and the next sheet or evidence you would inspect. Include counterexamples that challenge a simple high-occupancy-causes-poor-service conclusion.",
  parts: [
    ["goal", "Analyse daily hotel performance."],
    ["goal", "Identify the five most important signals and up to eight unusual days or periods."],
    ["expectations", "For each, show the date, metric values, why it is unusual, and the next sheet or evidence you would inspect."],
    ["expectations", "Include counterexamples that challenge a simple high-occupancy-causes-poor-service conclusion."]
  ] },
{ text: "Investigate whether facility demand, queue time, downtime, maintenance readiness, complaints, and guest ratings show related patterns. Build an evidence table with Claim, Supporting evidence, Contradicting evidence, Missing evidence, and Confidence. Do not state that one measure caused another unless the workbook directly proves it.",
  parts: [
    ["goal", "Investigate whether facility demand, queue time, downtime, maintenance readiness, complaints, and guest ratings show related patterns."],
    ["expectations", "Build an evidence table with Claim, Supporting evidence, Contradicting evidence, Missing evidence, and Confidence."],
    ["expectations", "Do not state that one measure caused another unless the workbook directly proves it."]
  ] },
{ text: "Which of these claims has the weakest evidence, and which record would I need to check next?",
  parts: [
    ["goal", "Which of these claims has the weakest evidence"],
    ["goal", "which record would I need to check next?"]
  ] },
{ text: "Using only the attached workbook, write a one-page briefing for the hotel general manager. Cover overall performance, the three most important guest-experience pressures, one positive counterexample, the strongest operational risk, and the next three questions to investigate. Name the sheet for every point and label any assumption. Do not open Excel while drafting the briefing.",
  parts: [
    ["source", "Using only the attached workbook"],
    ["goal", "write a one-page briefing"],
    ["context", "for the hotel general manager."],
    ["expectations", "Cover overall performance, the three most important guest-experience pressures, one positive counterexample, the strongest operational risk, and the next three questions to investigate."],
    ["expectations", "Name the sheet for every point and label any assumption."],
    ["expectations", "Do not open Excel while drafting the briefing."]
  ] },
{ text: "List every sentence in the briefing that does not name a sheet. Add the sheet, or label the sentence as an assumption.",
  parts: [
    ["goal", "List every sentence in the briefing that does not name a sheet."],
    ["expectations", "Add the sheet, or label the sentence as an assumption."]
  ] },
{ text: "Review this analysis for bias and overconfidence. Check whether it relies on unequal sample sizes, raw counts instead of rates, loyalty tier, room type, booking channel, guest segment, missing values, or a single dramatic incident. Identify counterexamples and rewrite the conclusions using only evidence supported by the workbook.",
  parts: [
    ["goal", "Review this analysis for bias and overconfidence."],
    ["goal", "Check whether it relies on unequal sample sizes, raw counts instead of rates, loyalty tier, room type, booking channel, guest segment, missing values, or a single dramatic incident."],
    ["goal", "Identify counterexamples and rewrite the conclusions"],
    ["source", "using only evidence supported by the workbook"]
  ] },
{ text: "Which conclusions in the original draft cannot be rewritten because the workbook has no evidence for them? List them as questions to investigate.",
  parts: [
    ["goal", "Which conclusions in the original draft cannot be rewritten because the workbook has no evidence for them?"],
    ["expectations", "List them as questions to investigate."]
  ] },
{ text: "Analyse the reservation journey by channel and abandonment stage. Compare completion, response time, payment errors, change requests, cancellations, and data-quality conflicts. Identify the strongest supported pain points and suggest improvement experiments. Include the metric that would show whether each experiment worked.",
  parts: [
    ["goal", "Analyse the reservation journey by channel and abandonment stage."],
    ["goal", "Compare completion, response time, payment errors, change requests, cancellations, and data-quality conflicts."],
    ["goal", "Identify the strongest supported pain points and suggest improvement experiments."],
    ["expectations", "Include the metric that would show whether each experiment worked."]
  ] },
{ text: "Which of these experiments could be tested with data already in the workbook, and which need new data?",
  parts: [
    ["goal", "Which of these experiments could be tested with"],
    ["source", "data already in the workbook"],
    ["goal", "which need new data?"]
  ] },
{ text: "Verify the analysis against the workbook. Check every quoted number, date, facility, record ID, comparison, and recommendation. List unsupported claims, missing data, contradictory evidence, biased framing, duplicate counting, and causal language that must be corrected. End with Ready / Not Ready and the required fixes.",
  parts: [
    ["goal", "Verify the analysis"],
    ["source", "against the workbook."],
    ["goal", "Check every quoted number, date, facility, record ID, comparison, and recommendation."],
    ["expectations", "List unsupported claims, missing data, contradictory evidence, biased framing, duplicate counting, and causal language that must be corrected."],
    ["expectations", "End with Ready / Not Ready and the required fixes."]
  ] },
{ text: "Rewrite only the statements that passed verification, each with its source location, and list the rest as open questions.",
  parts: [
    ["goal", "Rewrite only the statements that passed verification"],
    ["expectations", "each with its source location"],
    ["expectations", "list the rest as open questions."]
  ] },
{ text: "Analyse the guest journey across food service, room readiness, parking, lobby waiting, and feedback. Identify where the experience appears most inconsistent, which operational measure supports the observation, and what additional evidence is needed. Separate broad patterns from isolated incidents.",
  parts: [
    ["goal", "Analyse the guest journey across food service, room readiness, parking, lobby waiting, and feedback."],
    ["goal", "Identify where the experience appears most inconsistent, which operational measure supports the observation, and what additional evidence is needed."],
    ["expectations", "Separate broad patterns from isolated incidents."]
  ] },
{ text: "Create an agent named Hotel Contact Finder for Aurora Hospitality Group, a synthetic global hotel group headquartered in Bangkok. The agent helps hotel employees find the right primary, backup, standby, regional or emergency contact for a hotel department. It must use only the knowledge files I add, check duty hours, local time and approved leave coverage, name its source and the last-updated date, and never invent a name, e-mail address, phone number or availability. If the hotel or department is missing, it must ask for it.",
  parts: [
    ["goal", "Create an agent named Hotel Contact Finder"],
    ["context", "for Aurora Hospitality Group, a synthetic global hotel group headquartered in Bangkok."],
    ["context", "The agent helps hotel employees find the right primary, backup, standby, regional or emergency contact for a hotel department."],
    ["source", "use only the knowledge files I add"],
    ["expectations", "check duty hours, local time and approved leave coverage, name its source and the last-updated date, and never invent a name, e-mail address, phone number or availability."],
    ["expectations", "If the hotel or department is missing, it must ask for it."]
  ] },
{ text: "Which hotels in Thailand are in the knowledge files? Name three, with their hotel IDs, and say which file each one comes from.",
  parts: [
    ["goal", "Which hotels in Thailand are in"],
    ["source", "the knowledge files"],
    ["expectations", "Name three, with their hotel IDs, and say which file each one comes from."]
  ] },
{ text: "Who is the primary IT contact for Bangkok Riverside Hotel?",
  parts: [
    ["goal", "Who is the primary IT contact for Bangkok Riverside Hotel?"]
  ] },
{ text: "Who should I contact if the primary IT contact at Bangkok Riverside Hotel is unavailable?",
  parts: [
    ["goal", "Who should I contact if the primary IT contact at Bangkok Riverside Hotel is unavailable?"]
  ] },
{ text: "Who is scheduled to provide IT support at Bangkok Riverside Hotel at 10 PM local time on 18 November 2026?",
  parts: [
    ["goal", "Who is scheduled to provide IT support at Bangkok Riverside Hotel at 10 PM local time on 18 November 2026?"]
  ] },
{ text: "There is a critical system outage at Bangkok Riverside Hotel. Who is the emergency escalation contact?",
  parts: [
    ["context", "There is a critical system outage at Bangkok Riverside Hotel."],
    ["goal", "Who is the emergency escalation contact?"]
  ] },
{ text: "Who is the primary IT contact for Aurora Suites Ho Chi Minh City Harbour?",
  parts: [
    ["goal", "Who is the primary IT contact for Aurora Suites Ho Chi Minh City Harbour?"]
  ] },
{ text: "Who should I contact if the primary IT contact at Aurora Suites Ho Chi Minh City Harbour is unavailable?",
  parts: [
    ["goal", "Who should I contact if the primary IT contact at Aurora Suites Ho Chi Minh City Harbour is unavailable?"]
  ] },
{ text: "Who is scheduled to provide IT support at Aurora Suites Ho Chi Minh City Harbour at 10 PM local time on 18 November 2026?",
  parts: [
    ["goal", "Who is scheduled to provide IT support at Aurora Suites Ho Chi Minh City Harbour at 10 PM local time on 18 November 2026?"]
  ] },
{ text: "There is a critical system outage at Aurora Suites Ho Chi Minh City Harbour. Who is the emergency escalation contact?",
  parts: [
    ["context", "There is a critical system outage at Aurora Suites Ho Chi Minh City Harbour."],
    ["goal", "Who is the emergency escalation contact?"]
  ] },
{ text: "Who is the ASEAN Technology business-unit contact, and which shared mailbox can I use for regional technology support?",
  parts: [
    ["goal", "Who is the ASEAN Technology business-unit contact, and which shared mailbox can I use for regional technology support?"]
  ] },
{ text: "Who should I contact about a technology problem?",
  parts: [
    ["goal", "Who should I contact about a technology problem?"]
  ] },
{ text: "If the hotel or the department is missing, do not answer. Ask for the hotel or location, the department and the issue type.",
  parts: [
    ["context", "If the hotel or the department is missing,"],
    ["expectations", "do not answer."],
    ["goal", "Ask for the hotel or location, the department and the issue type."]
  ] },
{ text: "Never mention why someone is away. Say only that they are Unavailable for the requested period. Never show a leave category.",
  parts: [
    ["goal", "Never mention why someone is away."],
    ["expectations", "Say only that they are Unavailable for the requested period."],
    ["expectations", "Never show a leave category."]
  ] },
{ text: "Give the emergency group only for a critical incident: life safety, cybersecurity, a hotel-wide technology outage, a major utility failure, a serious security event, or a stop to an essential guest service such as check-in. For a routine request such as a password reset, do not give it.",
  parts: [
    ["goal", "Give the emergency group only for a critical incident"],
    ["context", "life safety, cybersecurity, a hotel-wide technology outage, a major utility failure, a serious security event, or a stop to an essential guest service such as check-in."],
    ["expectations", "For a routine request such as a password reset, do not give it."]
  ] },
{ text: "End every answer with the source file name and its last-updated date. If two current records conflict, show both records and say: \"Not confirmed in the available sources.\"",
  parts: [
    ["expectations", "End every answer with the source file name and its last-updated date."],
    ["context", "If two current records conflict,"],
    ["goal", "show both records"],
    ["expectations", "say: \"Not confirmed in the available sources.\""]
  ] },
{ text: "A guest at Aurora Grand Seoul Palace needs a routine password reset for their room tablet. Who is the emergency escalation contact?",
  parts: [
    ["context", "A guest at Aurora Grand Seoul Palace needs a routine password reset for their room tablet."],
    ["goal", "Who is the emergency escalation contact?"]
  ] },
{ text: "It is 10:00 PM on 18 November 2026 in Hong Kong. Guests cannot check in at Aurora Suites Hong Kong Central because of a hotel-wide system outage. Who should I contact for IT support? Include the hotel and department, the primary contact and duty hours, availability, the backup, the standby group and the emergency escalation contact, with your sources.",
  parts: [
    ["context", "It is 10:00 PM on 18 November 2026 in Hong Kong."],
    ["context", "Guests cannot check in at Aurora Suites Hong Kong Central because of a hotel-wide system outage."],
    ["goal", "Who should I contact for IT support?"],
    ["expectations", "Include the hotel and department, the primary contact and duty hours, availability, the backup, the standby group and the emergency escalation contact, with your sources."]
  ] },
{ text: "Research trusted public approaches that hotels use to improve the daily guest experience across three connected operating areas: guest arrival and room readiness; facilities and maintenance; and food, housekeeping, and service flow. Focus on practical approaches that frontline hotel teams could evaluate. For each approach, explain the operational problem, how the approach works, supporting evidence, conditions required, limitations or risks, suggested measures, and unanswered questions. Prioritize credible hospitality, service-operations, facilities, food-service, housekeeping, professional, academic, government, or recognized industry sources. Name the source and publication date for every major finding. Separate evidence from opinion, retain conflicting findings, and do not claim that an approach will work at our hotel. Finish with a concise comparison of practical approaches and clearly identify which questions require local hotel data.",
  parts: [
    ["goal", "Research trusted public approaches that hotels use to improve the daily guest experience across three connected operating areas: guest arrival and room readiness; facilities and maintenance; and food, housekeeping, and service flow."],
    ["context", "Focus on practical approaches that frontline hotel teams could evaluate."],
    ["expectations", "For each approach, explain the operational problem, how the approach works, supporting evidence, conditions required, limitations or risks, suggested measures, and unanswered questions."],
    ["source", "Prioritize credible hospitality, service-operations, facilities, food-service, housekeeping, professional, academic, government, or recognized industry sources."],
    ["expectations", "Name the source and publication date for every major finding."],
    ["expectations", "Separate evidence from opinion, retain conflicting findings, and do not claim that an approach will work at our hotel."],
    ["expectations", "Finish with a concise comparison of practical approaches and clearly identify which questions require local hotel data."]
  ] },
{ text: "Review the Researcher report, Hotel_Operations_Improvement.xlsx, and Hotel Approach Assessment in this workspace. Confirm what each file contributes to the project. List the main external-research findings, the strongest supporting hotel evidence, the strongest contradictory evidence or counterexamples, and the most important missing evidence. For every hotel-data statement, name the workbook sheet or table and the relevant record, date, period, shift, incident ID, item ID, or feedback ID. Do not turn association into causation, do not treat blanks as zero, and do not invent owners, approvals, costs, deadlines, or outcomes.",
  parts: [
    ["goal", "Review"],
    ["source", "the Researcher report, Hotel_Operations_Improvement.xlsx, and Hotel Approach Assessment in this workspace."],
    ["goal", "Confirm what each file contributes to the project."],
    ["goal", "List the main external-research findings, the strongest supporting hotel evidence, the strongest contradictory evidence or counterexamples, and the most important missing evidence."],
    ["expectations", "For every hotel-data statement, name the workbook sheet or table and the relevant record, date, period, shift, incident ID, item ID, or feedback ID."],
    ["expectations", "Do not turn association into causation, do not treat blanks as zero, and do not invent owners, approvals, costs, deadlines, or outcomes."]
  ] },
{ text: "Using all files in this workspace, create a concise Final Conclusions page for the Hotel Improvement project. Separate verified findings, cautious interpretations, contradictions, and unresolved questions. Explain where the external research and hotel evidence agree, where they differ, and what the combined evidence cannot establish. Retain source names and publication dates from the Researcher report and exact workbook evidence locations from the Analyst work. End with three to five evidence-based conclusions, each labelled Strong support, Partial support, Not supported, or Cannot assess.",
  parts: [
    ["source", "Using all files in this workspace"],
    ["goal", "create a concise Final Conclusions page for the Hotel Improvement project."],
    ["expectations", "Separate verified findings, cautious interpretations, contradictions, and unresolved questions."],
    ["expectations", "Explain where the external research and hotel evidence agree, where they differ, and what the combined evidence cannot establish."],
    ["expectations", "Retain source names and publication dates from the Researcher report and exact workbook evidence locations from the Analyst work."],
    ["expectations", "End with three to five evidence-based conclusions, each labelled Strong support, Partial support, Not supported, or Cannot assess."]
  ] },
{ text: "Convert the final conclusions into a practical Hotel Improvement Proposal for operational discussion. Include: the guest-experience problem; the selected approach; what trusted research suggests; what the hotel data supports and challenges; the proposed improvement idea; a small and reversible pilot; affected operating areas; current baseline; success measures; conditions and dependencies; risks and stop or review conditions; missing evidence; and questions for peers or operations leaders. Clearly separate evidence from inference. Do not present the proposal as approved, funded, assigned, scheduled, or guaranteed. Save the result as Hotel_Improvement_Proposal.docx.",
  parts: [
    ["goal", "Convert the final conclusions into a practical Hotel Improvement Proposal"],
    ["context", "for operational discussion."],
    ["expectations", "Include: the guest-experience problem; the selected approach; what trusted research suggests; what the hotel data supports and challenges; the proposed improvement idea; a small and reversible pilot; affected operating areas; current baseline; success measures; conditions and dependencies; risks and stop or review conditions; missing evidence; and questions for peers or operations leaders."],
    ["expectations", "Clearly separate evidence from inference."],
    ["expectations", "Do not present the proposal as approved, funded, assigned, scheduled, or guaranteed."],
    ["expectations", "Save the result as Hotel_Improvement_Proposal.docx."]
  ] },
{ text: "Review Hotel_Improvement_Proposal.docx against the Researcher report, Hotel Approach Assessment, and Hotel_Operations_Improvement.xlsx. Identify unsupported, unclear, duplicated, conflicting, or overly confident statements. Check every source name, publication date, hotel figure, workbook location, baseline, measure, dependency, risk, approval statement, cost, deadline, and promised outcome. Suggest exact corrections and a short list of questions for collaborators. End with Ready for presentation or Needs correction.",
  parts: [
    ["goal", "Review Hotel_Improvement_Proposal.docx"],
    ["source", "against the Researcher report, Hotel Approach Assessment, and Hotel_Operations_Improvement.xlsx."],
    ["goal", "Identify unsupported, unclear, duplicated, conflicting, or overly confident statements."],
    ["goal", "Check every source name, publication date, hotel figure, workbook location, baseline, measure, dependency, risk, approval statement, cost, deadline, and promised outcome."],
    ["expectations", "Suggest exact corrections and a short list of questions for collaborators."],
    ["expectations", "End with Ready for presentation or Needs correction."]
  ] },
{ text: "Create a concise presentation from the verified Hotel Improvement Proposal. Use six slides: 1) challenge and guest impact; 2) what trusted research suggests; 3) what the hotel data shows; 4) supporting evidence, contradictions, and missing evidence; 5) proposed small pilot with baseline and success measures; 6) decisions and questions for operational discussion. Preserve source names, dates, workbook evidence locations, and cautious status language. Do not invent owners, approvals, costs, deadlines, or outcomes. Save the presentation as Hotel_Improvement_Proposal.pptx.",
  parts: [
    ["goal", "Create a concise presentation"],
    ["source", "from the verified Hotel Improvement Proposal."],
    ["expectations", "Use six slides: 1) challenge and guest impact; 2) what trusted research suggests; 3) what the hotel data shows; 4) supporting evidence, contradictions, and missing evidence; 5) proposed small pilot with baseline and success measures; 6) decisions and questions for operational discussion."],
    ["expectations", "Preserve source names, dates, workbook evidence locations, and cautious status language."],
    ["expectations", "Do not invent owners, approvals, costs, deadlines, or outcomes."],
    ["expectations", "Save the presentation as Hotel_Improvement_Proposal.pptx."]
  ] },
{ text: "Draft a meeting invite for an operational discussion of the Hotel Improvement Proposal. Provide a clear subject line, a concise invitation message, and a 30-minute agenda: 5 minutes for the challenge and evidence; 10 minutes for research and hotel-data findings; 10 minutes for the proposed pilot, measures, risks, and missing evidence; and 5 minutes for decisions and next steps. Refer to Hotel_Improvement_Proposal.docx and Hotel_Improvement_Proposal.pptx as preparation materials. Do not choose recipients, a date, a time, an owner, or an approval status unless the learner supplies them. The website must never send the invite.",
  parts: [
    ["goal", "Draft a meeting invite"],
    ["context", "for an operational discussion of the Hotel Improvement Proposal."],
    ["expectations", "Provide a clear subject line, a concise invitation message, and a 30-minute agenda: 5 minutes for the challenge and evidence; 10 minutes for research and hotel-data findings; 10 minutes for the proposed pilot, measures, risks, and missing evidence; and 5 minutes for decisions and next steps."],
    ["source", "Refer to Hotel_Improvement_Proposal.docx and Hotel_Improvement_Proposal.pptx as preparation materials."],
    ["expectations", "Do not choose recipients, a date, a time, an owner, or an approval status unless the learner supplies them."],
    ["expectations", "The website must never send the invite."]
  ] },
{ text: "Use Hotel_Operations_Improvement.xlsx to test the local applicability of the class approach shown in the workshop. Review the Arrival & Rooms, Facilities, and Food & Service evidence. Identify the exact workbook location and records that support the approach, evidence that challenges it, conditions or dependencies, missing evidence, one current baseline measure, and one success measure for a small operational test. Assign one status: Relevant to test, Possibly relevant, Not supported, or Cannot assess. Explain the reasoning without turning association into causation. Treat blank values as missing, not zero. Retain positive examples and counterexamples. Do not invent owners, approvals, costs, deadlines, or guaranteed outcomes. Return a concise Hotel Approach Assessment.",
  parts: [
    ["source", "Hotel_Operations_Improvement.xlsx"],
    ["goal", "test the local applicability of the class approach shown in the workshop."],
    ["source", "Review the Arrival & Rooms, Facilities, and Food & Service evidence."],
    ["goal", "Identify the exact workbook location and records that support the approach, evidence that challenges it, conditions or dependencies, missing evidence, one current baseline measure, and one success measure for a small operational test."],
    ["expectations", "Assign one status: Relevant to test, Possibly relevant, Not supported, or Cannot assess."],
    ["expectations", "Explain the reasoning without turning association into causation."],
    ["expectations", "Treat blank values as missing, not zero."],
    ["expectations", "Retain positive examples and counterexamples."],
    ["expectations", "Do not invent owners, approvals, costs, deadlines, or guaranteed outcomes."],
    ["expectations", "Return a concise Hotel Approach Assessment."]
  ] },
{ text: "Which emails from today need my response or action? Put them in priority order. Include the email subject, what is requested, the deadline, and my recommended next step. Do not invent missing information.\nOnly use emails that have [Copilot Learning] in the subject.",
  parts: [
    ["goal", "Which emails"],
    ["source", "from today"],
    ["goal", "need my response or action?"],
    ["expectations", "Put them in priority order."],
    ["expectations", "Include the email subject, what is requested, the deadline, and my recommended next step."],
    ["expectations", "Do not invent missing information."],
    ["source", "Only use emails that have [Copilot Learning] in the subject."]
  ] },
{ text: "Separate the items I can handle by email from the items that require escalation. For each item, cite the email you used and briefly explain the priority.",
  parts: [
    ["goal", "Separate the items I can handle by email from the items that require escalation."],
    ["expectations", "For each item, cite the email you used and briefly explain the priority."]
  ] },
{ text: "Summarise this email conversation. Show:\n1. The current situation\n2. What has been confirmed\n3. What has already been decided\n4. What remains unresolved\n5. Actions, owners, and deadlines\n\nEnd with the most urgent decision or action. Do not make unsupported assumptions.",
  parts: [
    ["goal", "Summarise"],
    ["source", "this email conversation."],
    ["expectations", "The current situation"],
    ["expectations", "What has been confirmed"],
    ["expectations", "What has already been decided"],
    ["expectations", "What remains unresolved"],
    ["expectations", "Actions, owners, and deadlines"],
    ["expectations", "End with the most urgent decision or action."],
    ["expectations", "Do not make unsupported assumptions."]
  ] },
{ text: "Who is waiting for whom? List each dependency and the next update time, if one is mentioned.",
  parts: [
    ["goal", "Who is waiting for whom?"],
    ["expectations", "List each dependency and the next update time, if one is mentioned."]
  ] },
{ text: "Draft a professional and caring reply to this guest. Acknowledge the request or concern, explain what the hotel understands, and clearly state the next step. Do not guarantee availability, an upgrade, compensation, early check-in, late checkout, or loyalty benefits unless the email confirms it. Keep the reply under 150 words.",
  parts: [
    ["goal", "Draft a professional and caring reply to this guest."],
    ["expectations", "Acknowledge the request or concern, explain what the hotel understands, and clearly state the next step."],
    ["expectations", "Do not guarantee availability, an upgrade, compensation, early check-in, late checkout, or loyalty benefits unless the email confirms it."],
    ["expectations", "Keep the reply under 150 words."]
  ] },
{ text: "Draft a concise reply to the vendor. Include:\n- The operational impact\n- The action required from the vendor\n- The required completion or response time\n- A temporary solution if the main issue cannot be resolved immediately\n- A request for an escalation contact\n\nKeep the reply professional and under 150 words.",
  parts: [
    ["goal", "Draft a concise reply to the vendor."],
    ["expectations", "The operational impact"],
    ["expectations", "The action required from the vendor"],
    ["expectations", "The required completion or response time"],
    ["expectations", "A temporary solution if the main issue cannot be resolved immediately"],
    ["expectations", "A request for an escalation contact"],
    ["expectations", "Keep the reply professional and under 150 words."]
  ] },
{ text: "Turn my priority emails into an action plan for today. Group the actions into:\n- Handle immediately\n- Complete before noon\n- This afternoon\n- Delegate or escalate\n- Monitor for an update\n\nInclude the reason for the priority and any deadline.\nOnly use emails that have [Copilot Learning] in the subject.",
  parts: [
    ["goal", "Turn my priority emails into an action plan for today."],
    ["expectations", "Group the actions into:"],
    ["expectations", "Handle immediately"],
    ["expectations", "Complete before noon"],
    ["expectations", "This afternoon"],
    ["expectations", "Delegate or escalate"],
    ["expectations", "Monitor for an update"],
    ["expectations", "Include the reason for the priority and any deadline."],
    ["source", "Only use emails that have [Copilot Learning] in the subject."]
  ] },
{ text: "Create a 25-minute meeting agenda to resolve the issues affecting today's conference. Cover:\n- Conference hall cooling\n- Catering delay\n- Replacement microphones\n- Guest and organiser communications\n- Decisions required\n\nGive each agenda item a purpose and time allocation. Reserve the last five minutes to confirm decisions, action owners, and deadlines.",
  parts: [
    ["goal", "Create a 25-minute meeting agenda"],
    ["context", "to resolve the issues affecting today's conference."],
    ["context", "Conference hall cooling"],
    ["context", "Catering delay"],
    ["context", "Replacement microphones"],
    ["context", "Guest and organiser communications"],
    ["context", "Decisions required"],
    ["expectations", "Give each agenda item a purpose and time allocation."],
    ["expectations", "Reserve the last five minutes to confirm decisions, action owners, and deadlines."]
  ] },
{ text: "Summarise what I missed in this channel today. Show important updates, decisions, unresolved issues, unanswered questions, and actions with owners. Include references to the relevant messages.",
  parts: [
    ["goal", "Summarise what I missed"],
    ["source", "in this channel today."],
    ["expectations", "Show important updates, decisions, unresolved issues, unanswered questions, and actions with owners."],
    ["expectations", "Include references to the relevant messages."]
  ] },
{ text: "Organise today's channel discussion by topic: conference hall facilities, catering, audio and visual equipment, and guest communication. Under each topic, show the latest status, decisions made, open questions, and next action.",
  parts: [
    ["goal", "Organise"],
    ["source", "today's channel discussion"],
    ["expectations", "by topic: conference hall facilities, catering, audio and visual equipment, and guest communication."],
    ["expectations", "Under each topic, show the latest status, decisions made, open questions, and next action."]
  ] },
{ text: "Which messages in this channel require a response or action? Prioritise them based on operational impact and deadline. Include who asked, what is required, and whether the request has already been answered.",
  parts: [
    ["goal", "Which messages"],
    ["source", "in this channel"],
    ["goal", "require a response or action?"],
    ["expectations", "Prioritise them based on operational impact and deadline."],
    ["expectations", "Include who asked, what is required, and whether the request has already been answered."]
  ] },
{ text: "Review the source document for a customer presentation. Identify: 1) the audience, 2) the presentation purpose, 3) confirmed event facts, 4) open items or missing decisions, 5) the guest journey, and 6) a recommended presentation story. Separate confirmed facts from items requiring confirmation. Do not invent details.",
  parts: [
    ["goal", "Review"],
    ["source", "the source document"],
    ["context", "for a customer presentation."],
    ["goal", "the audience"],
    ["goal", "the presentation purpose"],
    ["goal", "confirmed event facts"],
    ["goal", "open items or missing decisions"],
    ["goal", "the guest journey"],
    ["goal", "a recommended presentation story"],
    ["expectations", "Separate confirmed facts from items requiring confirmation."],
    ["expectations", "Do not invent details."]
  ] },
{ text: "Create a concise customer-facing presentation from these two Word documents. Use 01 Conference Presentation Source.docx as the primary source, and use 05 Suggestions Presentation Source.docx to improve the storyline and the slide titles. Use strong message-led slide titles. Show the event purpose, guest journey, venue and team support, readiness approach, open decisions, and next steps. Suggest purposeful visuals, but do not add facilities, services, numbers, owners, or deadlines that are not in the source documents.",
  parts: [
    ["goal", "Create a concise customer-facing presentation"],
    ["source", "from these two Word documents."],
    ["source", "Use 01 Conference Presentation Source.docx as the primary source, and use 05 Suggestions Presentation Source.docx to improve the storyline and the slide titles."],
    ["expectations", "Use strong message-led slide titles."],
    ["expectations", "Show the event purpose, guest journey, venue and team support, readiness approach, open decisions, and next steps."],
    ["expectations", "Suggest purposeful visuals, but do not add facilities, services, numbers, owners, or deadlines that are not in the source documents."]
  ] },
{ text: "Review this presentation against the source document. For each slide, identify: accurate content, unsupported or missing content, excessive detail, unclear storyline, and visual opportunities. End with the five highest-priority improvements before the presentation is shared.",
  parts: [
    ["goal", "Review this presentation"],
    ["source", "against the source document."],
    ["goal", "For each slide, identify: accurate content, unsupported or missing content, excessive detail, unclear storyline, and visual opportunities."],
    ["expectations", "End with the five highest-priority improvements before the presentation is shared."]
  ] },
{ text: "Compare the existing presentation with the revised customer pack. Create a table showing what can be kept, what must change, what should be removed, and why. Treat the revised customer pack as the controlling source when details conflict. Highlight any item that still requires confirmation.",
  parts: [
    ["goal", "Compare the existing presentation with the revised customer pack."],
    ["expectations", "Create a table showing what can be kept, what must change, what should be removed, and why."],
    ["source", "Treat the revised customer pack as the controlling source when details conflict."],
    ["expectations", "Highlight any item that still requires confirmation."]
  ] },
{ text: "Create a new customer presentation storyline based on the revised source pack. Use 06 Changes Comparison Source.docx to see what to keep, change and remove. Rebuild rather than patch the outdated deck. Show the larger and more senior audience, earlier start and later finish, two parallel breakouts, working lunch and executive tables, expanded equipment, the 7:45 AM consolidated update, open risks, and required customer decisions. Use one clear message per slide.",
  parts: [
    ["goal", "Create a new customer presentation storyline"],
    ["source", "based on the revised source pack."],
    ["source", "Use 06 Changes Comparison Source.docx to see what to keep, change and remove."],
    ["expectations", "Rebuild rather than patch the outdated deck."],
    ["expectations", "Show the larger and more senior audience, earlier start and later finish, two parallel breakouts, working lunch and executive tables, expanded equipment, the 7:45 AM consolidated update, open risks, and required customer decisions."],
    ["expectations", "Use one clear message per slide."]
  ] },
{ text: "Recommend a visual treatment for the rebuilt presentation using the modern tropical evening direction. Apply Deep Navy, Warm Sand, Sage Green, Soft Lavender, and White. Suggest purposeful imagery, diagrams, timelines, and comparison tables. Protect readability and do not show any unconfirmed facility or service.",
  parts: [
    ["goal", "Recommend a visual treatment for the rebuilt presentation"],
    ["context", "using the modern tropical evening direction."],
    ["expectations", "Apply Deep Navy, Warm Sand, Sage Green, Soft Lavender, and White."],
    ["expectations", "Suggest purposeful imagery, diagrams, timelines, and comparison tables."],
    ["expectations", "Protect readability and do not show any unconfirmed facility or service."]
  ] },
{ text: "Create a short board-level presentation story from the workbook. Select three to five supported metrics, recommend suitable charts, explain what is going well, identify areas to improve, and state the management action or question. Present revenue with cost or margin. Distinguish observed trends from unproven causes and label all values as fictional training data.",
  parts: [
    ["goal", "Create a short board-level presentation story"],
    ["source", "from the workbook."],
    ["goal", "Select three to five supported metrics, recommend suitable charts, explain what is going well, identify areas to improve, and state the management action or question."],
    ["expectations", "Present revenue with cost or margin."],
    ["expectations", "Distinguish observed trends from unproven causes and label all values as fictional training data."]
  ] },
{ text: "Verify the presentation against the source files. Check audience, purpose, attendance, programme timing, rooms, equipment, catering format, update time, metrics, chart values, decisions, owners, deadlines, and open risks. List unsupported details, missing information, and superseded content that must be removed. End with a Ready / Not Ready recommendation and the required fixes.",
  parts: [
    ["goal", "Verify the presentation"],
    ["source", "against the source files."],
    ["goal", "Check audience, purpose, attendance, programme timing, rooms, equipment, catering format, update time, metrics, chart values, decisions, owners, deadlines, and open risks."],
    ["expectations", "List unsupported details, missing information, and superseded content that must be removed."],
    ["expectations", "End with a Ready / Not Ready recommendation and the required fixes."]
  ] },
{ text: "Review the Conference Event Brief, Friday Issues Report, and Shift Handover Notes.\n\nOrganise the information into four sections:\n1. Confirmed event requirements\n2. Problems observed during the previous conference\n3. Suggested improvements\n4. Missing or unconfirmed information\n\nInclude the relevant times, rooms, equipment, communication requirements, owners, and unresolved items.\n\nDo not invent missing information. Clearly label informal suggestions and anything that needs confirmation.",
  parts: [
    ["goal", "Review"],
    ["source", "the Conference Event Brief, Friday Issues Report, and Shift Handover Notes."],
    ["goal", "Organise the information into four sections"],
    ["expectations", "Confirmed event requirements"],
    ["expectations", "Problems observed during the previous conference"],
    ["expectations", "Suggested improvements"],
    ["expectations", "Missing or unconfirmed information"],
    ["expectations", "Include the relevant times, rooms, equipment, communication requirements, owners, and unresolved items."],
    ["expectations", "Do not invent missing information."],
    ["expectations", "Clearly label informal suggestions and anything that needs confirmation."]
  ] },
{ text: "Check your summary against the three reference files.\n\nFor each major requirement or recommendation, show:\n- The supporting file\n- Whether it is confirmed, observed, suggested, or unresolved\n- Any conflict or missing detail\n\nPay particular attention to final room-ready approval, catering service times, escalation contacts, audio equipment ownership, and organiser communication.\n\nDo not resolve uncertainty unless the files provide the answer.",
  parts: [
    ["goal", "Check your summary"],
    ["source", "against the three reference files."],
    ["expectations", "For each major requirement or recommendation, show:"],
    ["expectations", "The supporting file"],
    ["expectations", "Whether it is confirmed, observed, suggested, or unresolved"],
    ["expectations", "Any conflict or missing detail"],
    ["context", "Pay particular attention to final room-ready approval, catering service times, escalation contacts, audio equipment ownership, and organiser communication."],
    ["expectations", "Do not resolve uncertainty unless the files provide the answer."]
  ] },
{ text: "Compare the Draft Conference Checklist with the Conference Event Brief, Friday Issues Report, and Shift Handover Notes.\n\nIdentify:\n1. Useful content that should be retained\n2. Vague or repeated instructions\n3. Missing requirements\n4. Missing owners, times, deadlines, or escalation guidance\n5. Instructions that are not supported by the reference files\n\nFor every major weakness, recommend a specific improvement.\n\nDo not rewrite the checklist yet.",
  parts: [
    ["goal", "Compare"],
    ["source", "the Draft Conference Checklist with the Conference Event Brief, Friday Issues Report, and Shift Handover Notes"],
    ["goal", "Useful content that should be retained"],
    ["goal", "Vague or repeated instructions"],
    ["goal", "Missing requirements"],
    ["goal", "Missing owners, times, deadlines, or escalation guidance"],
    ["goal", "Instructions that are not supported by the reference files"],
    ["expectations", "For every major weakness, recommend a specific improvement."],
    ["expectations", "Do not rewrite the checklist yet."]
  ] },
{ text: "Using the Conference Event Brief, Friday Issues Report, Shift Handover Notes, and Draft Conference Checklist, create a concise Conference Day Readiness Guide for hotel operations staff.\n\nThe guide should help the team prepare for the next Regional Hospitality Leadership Conference.\n\nInclude:\n- Purpose\n- Confirmed event details\n- Before the event\n- Final room and facilities checks\n- Catering readiness\n- Audio-visual readiness\n- Guest and organiser communication\n- What to do if something is delayed or unavailable\n- Owners and escalation\n- Shift handover\n- Final room-ready confirmation\n\nUse clear headings, short sentences, and practical checklist items.\n\nRetain confirmed times and requirements from the reference files.\n\nClearly mark missing owners, contacts, service times, approvals, or decisions as “To be confirmed.”\n\nDo not invent hotel policies, names, contact details, compensation, approvals, or commitments.",
  parts: [
    ["source", "Using the Conference Event Brief, Friday Issues Report, Shift Handover Notes, and Draft Conference Checklist,"],
    ["goal", "create a concise Conference Day Readiness Guide"],
    ["context", "for hotel operations staff."],
    ["context", "The guide should help the team prepare for the next Regional Hospitality Leadership Conference."],
    ["expectations", "Purpose"],
    ["expectations", "Confirmed event details"],
    ["expectations", "Before the event"],
    ["expectations", "Final room and facilities checks"],
    ["expectations", "Catering readiness"],
    ["expectations", "Audio-visual readiness"],
    ["expectations", "Guest and organiser communication"],
    ["expectations", "What to do if something is delayed or unavailable"],
    ["expectations", "Owners and escalation"],
    ["expectations", "Shift handover"],
    ["expectations", "Final room-ready confirmation"],
    ["expectations", "Use clear headings, short sentences, and practical checklist items."],
    ["expectations", "Retain confirmed times and requirements from the reference files."],
    ["expectations", "Clearly mark missing owners, contacts, service times, approvals, or decisions as “To be confirmed.”"],
    ["expectations", "Do not invent hotel policies, names, contact details, compensation, approvals, or commitments."]
  ] },
{ text: "Improve this Conference Day Readiness Guide for a busy hotel operations team.\n\nKeep the verified meaning, requirements, times, and unresolved items, but make the document easier to scan and use during event preparation.\n- Use action-based headings.\n- Shorten long paragraphs.\n- Convert suitable instructions into checklist items.\n- Remove repetition.\n- Put actions in a logical working order.\n- Make owners, deadlines, escalation, and “To be confirmed” items easy to see.\n- Distinguish preparation checks from issue-recovery actions.\n- Keep the tone professional, practical, and concise.\n\nDo not add new facts, names, contacts, policies, approvals, or promises.",
  parts: [
    ["goal", "Improve this Conference Day Readiness Guide"],
    ["context", "for a busy hotel operations team."],
    ["expectations", "Keep the verified meaning, requirements, times, and unresolved items, but make the document easier to scan and use during event preparation."],
    ["expectations", "Use action-based headings."],
    ["expectations", "Shorten long paragraphs."],
    ["expectations", "Convert suitable instructions into checklist items."],
    ["expectations", "Remove repetition."],
    ["expectations", "Put actions in a logical working order."],
    ["expectations", "Make owners, deadlines, escalation, and “To be confirmed” items easy to see."],
    ["expectations", "Distinguish preparation checks from issue-recovery actions."],
    ["expectations", "Keep the tone professional, practical, and concise."],
    ["expectations", "Do not add new facts, names, contacts, policies, approvals, or promises."]
  ] },
{ text: "Review this Conference Day Readiness Guide against the four reference files.\n\nIdentify:\n- Any confirmed requirement that is missing\n- Any statement not supported by the files\n- Any suggestion incorrectly presented as confirmed\n- Any missing “To be confirmed” label\n- Any duplicated or vague action\n- Any instruction that could lead someone to communicate readiness without approval\n\nDo not rewrite the document. Give me a short correction list.",
  parts: [
    ["goal", "Review this Conference Day Readiness Guide"],
    ["source", "against the four reference files."],
    ["goal", "Any confirmed requirement that is missing"],
    ["goal", "Any statement not supported by the files"],
    ["goal", "Any suggestion incorrectly presented as confirmed"],
    ["goal", "Any missing “To be confirmed” label"],
    ["goal", "Any duplicated or vague action"],
    ["goal", "Any instruction that could lead someone to communicate readiness without approval"],
    ["expectations", "Do not rewrite the document."],
    ["expectations", "Give me a short correction list."]
  ] },
{ text: "Create a simple staff quick-reference visual titled “Conference Day Ready.”\n\nUse the verified Conference Day Readiness Guide as the content source.\n\nShow:\n- Facilities\n- Catering\n- Audio visual\n- Guest and organiser communication\n- Ownership and escalation\n- Final confirmation\n\nUse minimal text, clear hospitality-related graphics, and short action labels.\n\nInclude:\n“Check • Confirm • Communicate”\n\nDo not add facts, names, contacts, or procedures that are not in the guide.",
  parts: [
    ["goal", "Create a simple staff quick-reference visual titled “Conference Day Ready.”"],
    ["source", "Use the verified Conference Day Readiness Guide as the content source."],
    ["expectations", "Facilities"],
    ["expectations", "Catering"],
    ["expectations", "Audio visual"],
    ["expectations", "Guest and organiser communication"],
    ["expectations", "Ownership and escalation"],
    ["expectations", "Final confirmation"],
    ["expectations", "Use minimal text, clear hospitality-related graphics, and short action labels."],
    ["expectations", "“Check • Confirm • Communicate”"],
    ["expectations", "Do not add facts, names, contacts, or procedures that are not in the guide."]
  ] },
{ text: "Add a concise section titled “[insert selected section title]” to my Conference Day Readiness Guide.\n\nUse only information supported by the current guide and the four reference files.\n\nMake the section action-oriented and easy to scan.\n\nIf an owner, deadline, contact, approval, or procedure is missing, mark it “To be confirmed.”\n\nDo not invent additional information.",
  parts: [
    ["goal", "Add a concise section titled “[insert selected section title]” to my Conference Day Readiness Guide."],
    ["source", "Use only information supported by the current guide and the four reference files."],
    ["expectations", "Make the section action-oriented and easy to scan."],
    ["expectations", "If an owner, deadline, contact, approval, or procedure is missing, mark it “To be confirmed.”"],
    ["expectations", "Do not invent additional information."]
  ] },
{ text: "Keep all critical requirements and unresolved items, but reduce this document to a concise operational guide. Replace explanatory paragraphs with short checklist actions where appropriate. Do not remove times, owners, escalation, approval, or “To be confirmed” items.",
  parts: [
    ["expectations", "Keep all critical requirements and unresolved items,"],
    ["goal", "reduce this document to a concise operational guide."],
    ["expectations", "Replace explanatory paragraphs with short checklist actions where appropriate."],
    ["expectations", "Do not remove times, owners, escalation, approval, or “To be confirmed” items."]
  ] },
{ text: "Review emails with [Copilot Learning] in the subject. List the emails that need my attention in priority order. For each email, show the sender, the issue, why it may be urgent, any deadline mentioned, and the next action I should consider. Use only information from those emails and say when something is unclear.",
  parts: [
    ["source", "emails with [Copilot Learning] in the subject"],
    ["goal", "List the emails that need my attention in priority order."],
    ["expectations", "For each email, show the sender, the issue, why it may be urgent, any deadline mentioned, and the next action I should consider."],
    ["expectations", "Use only information from those emails and say when something is unclear."]
  ] },
{ text: "Draft a short acknowledgement of this email. Thank the resident for reporting the damaged bus-stop seat, briefly confirm what they reported, and explain that the matter has been referred to the appropriate team for assessment. Do not promise a repair date, decision or outcome. Keep the email under 120 words.",
  parts: [
    ["goal", "Draft a short acknowledgement of"],
    ["source", "this email"],
    ["expectations", "Thank the resident for reporting the damaged bus-stop seat, briefly confirm what they reported, and explain that the matter has been referred to the appropriate team for assessment."],
    ["expectations", "Do not promise a repair date, decision or outcome."],
    ["expectations", "Keep the email under 120 words."]
  ] },
{ text: "Summarise this email thread under four headings: Confirmed, Not yet confirmed, Decisions needed, and Actions with owners and dates. Do not assume an owner, decision or date that is not stated.",
  parts: [
    ["goal", "Summarise"],
    ["source", "this email thread"],
    ["expectations", "under four headings: Confirmed, Not yet confirmed, Decisions needed, and Actions with owners and dates."],
    ["expectations", "Do not assume an owner, decision or date that is not stated."]
  ] },
{ text: "Create a 30-minute internal meeting agenda to resolve the open issues in this email thread. Include the meeting objective, the required participants by role, each agenda item with a time and desired outcome, the decisions that need to be made, and five minutes at the end to confirm actions, owners and dates. Do not treat unconfirmed information as decided.",
  parts: [
    ["goal", "Create a 30-minute internal meeting agenda"],
    ["context", "to resolve the open issues in"],
    ["source", "this email thread"],
    ["expectations", "Include the meeting objective, the required participants by role, each agenda item with a time and desired outcome, the decisions that need to be made, and five minutes at the end to confirm actions, owners and dates."],
    ["expectations", "Do not treat unconfirmed information as decided."]
  ] },
{ text: "Summarise what we have covered so far in this training. Organise the recap under Outlook workflow, Teams workflow, and important cautions.",
  parts: [
    ["goal", "Summarise what we have covered so far in"],
    ["source", "this training"],
    ["expectations", "Organise the recap under Outlook workflow, Teams workflow, and important cautions."]
  ] },
{ text: "List the action items mentioned in this training session. For each action, include the owner and due date if stated. Put anything without an owner or due date under “Needs confirmation.” Do not assign missing information.",
  parts: [
    ["goal", "List the action items mentioned in"],
    ["source", "this training session"],
    ["expectations", "For each action, include the owner and due date if stated."],
    ["expectations", "Put anything without an owner or due date under “Needs confirmation.”"],
    ["expectations", "Do not assign missing information."]
  ] },
{ text: "Review the conversations in this channel from the past seven days. List the items that need attention in priority order. For each item, show why it matters, any deadline mentioned, who is waiting for a response, and the next action. Use only this channel and say when the priority is unclear.",
  parts: [
    ["source", "the conversations in this channel from the past seven days"],
    ["goal", "List the items that need attention in priority order."],
    ["expectations", "For each item, show why it matters, any deadline mentioned, who is waiting for a response, and the next action."],
    ["expectations", "Use only this channel and say when the priority is unclear."]
  ] },
{ text: "Review my work for today and create a priority list. Include meetings I need to prepare for, emails or messages that may need a response, deadlines mentioned, and follow-up actions. Explain why each item is important. Use only information you can find, and say when an owner, deadline or priority is unclear.",
  parts: [
    ["goal", "Review my work for today and create a priority list."],
    ["context", "Include meetings I need to prepare for, emails or messages that may need a response, deadlines mentioned, and follow-up actions."],
    ["expectations", "Explain why each item is important."],
    ["expectations", "Use only information you can find, and say when an owner, deadline or priority is unclear."]
  ] },
{ text: "Help me plan my work for this week. Group the items under Must complete, Prepare for, Follow up, and Monitor. Include any stated deadline and the related email, meeting or conversation. Flag possible scheduling conflicts and say when the priority is unclear.",
  parts: [
    ["goal", "Help me plan my work for this week."],
    ["expectations", "Group the items under Must complete, Prepare for, Follow up, and Monitor."],
    ["context", "Include any stated deadline and the related email, meeting or conversation."],
    ["expectations", "Flag possible scheduling conflicts and say when the priority is unclear."]
  ] },
{ text: "Compare the three supporting files. Organise the findings under Confirmed, Proposed, Conflicting, and Needs validation. Identify the supporting file for each finding. Do not treat community requests, indicative priorities or proposed works as approved decisions.",
  parts: [
    ["goal", "Compare"],
    ["source", "the three supporting files"],
    ["expectations", "Organise the findings under Confirmed, Proposed, Conflicting, and Needs validation."],
    ["expectations", "Identify the supporting file for each finding."],
    ["expectations", "Do not treat community requests, indicative priorities or proposed works as approved decisions."]
  ] },
{ text: "Using the three supporting files, create a concise project brief titled “Community Facilities Improvement Program – Project Brief”. Include an executive summary, community concerns, confirmed findings, proposed improvements, risks and dependencies, unresolved matters, recommendations, decisions required, and next steps. Clearly label anything that is proposed, indicative or still needs validation.",
  parts: [
    ["source", "Using the three supporting files"],
    ["goal", "create a concise project brief titled “Community Facilities Improvement Program – Project Brief”."],
    ["context", "Include an executive summary, community concerns, confirmed findings, proposed improvements, risks and dependencies, unresolved matters, recommendations, decisions required, and next steps."],
    ["expectations", "Clearly label anything that is proposed, indicative or still needs validation."]
  ] },
{ text: "Convert the proposed improvements section into a table with Issue, Evidence, Proposed response, Status, and Validation needed. Preserve the distinction between confirmed evidence and proposed action. Do not add new facts.",
  parts: [
    ["goal", "Convert"],
    ["source", "the proposed improvements section"],
    ["goal", "into a table"],
    ["expectations", "with Issue, Evidence, Proposed response, Status, and Validation needed."],
    ["expectations", "Preserve the distinction between confirmed evidence and proposed action."],
    ["expectations", "Do not add new facts."]
  ] },
{ text: "Rewrite the executive summary so the key findings, major risks and decisions required appear first. Keep it concise and do not add new information.",
  parts: [
    ["goal", "Rewrite"],
    ["source", "the executive summary"],
    ["context", "so the key findings, major risks and decisions required appear first."],
    ["expectations", "Keep it concise and do not add new information."]
  ] },
{ text: "Review this project brief against the three supporting files. Flag unsupported statements, inconsistencies, missing qualifications, and any proposal or indicative date presented as confirmed. Suggest corrections without adding new facts.",
  parts: [
    ["goal", "Review"],
    ["source", "this project brief"],
    ["source", "the three supporting files"],
    ["goal", "Flag unsupported statements, inconsistencies, missing qualifications, and any proposal or indicative date presented as confirmed."],
    ["expectations", "Suggest corrections without adding new facts."]
  ] },
{ text: "Create a six-slide stakeholder briefing about the Community Facilities Improvement Program. Use the Word project brief as the primary source for the narrative. Use the supporting PDF only for evidence, risks and supporting details. Use the website capture only as visual guidance for colour, typography, spacing, shapes and overall look and feel. Do not copy text from the website or add information that is not supported by the Word brief or PDF.",
  parts: [
    ["goal", "Create a six-slide stakeholder briefing about the Community Facilities Improvement Program."],
    ["source", "Use the Word project brief as the primary source for the narrative."],
    ["source", "Use the supporting PDF only for evidence, risks and supporting details."],
    ["context", "Use the website capture only as visual guidance for colour, typography, spacing, shapes and overall look and feel."],
    ["expectations", "Do not copy text from the website or add information that is not supported by the Word brief or PDF."]
  ] },
{ text: "Improve the “Risks and decisions required” slide. Make the distinction between confirmed risks, unresolved questions and decisions required immediately clear. Keep all claims grounded in the Word brief and supporting PDF, and retain the presentation’s existing visual style.",
  parts: [
    ["goal", "Improve the “Risks and decisions required” slide."],
    ["expectations", "Make the distinction between confirmed risks, unresolved questions and decisions required immediately clear."],
    ["expectations", "Keep all claims grounded in"],
    ["source", "the Word brief and supporting PDF"],
    ["expectations", "and retain the presentation’s existing visual style."]
  ] }
]);
