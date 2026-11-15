# Narrator Script — Monitor · KQL Basics: Ask Your Logs a Question

**Source animation:** [KqlBasics.html](../../journeys/Monitor/KqlBasics.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/kusto/query/>
- <https://learn.microsoft.com/azure/azure-monitor/logs/get-started-queries>
- <https://learn.microsoft.com/kusto/query/datatypes-string-operators>
- <https://learn.microsoft.com/kusto/query/join-operator>

---

## Step 1 · A query is a pipeline

[calm] A KQL query starts with a table. Then it passes the rows through one operator after another.
[600ms]
[curious] Each pipe character hands its result to the next step, so you read the query from top to bottom.
[600ms]
[reassuring] A query only reads data. It never changes a table, so it's safe to experiment.

## Step 2 · where: keep only the rows you want

[calm] Filter by time first, using ago, between, and now.
[600ms]
[confident] Every operator after that works on a much smaller table. Ago of thirty minutes means thirty minutes before now, and between includes both ends.
[600ms]
[serious] The portal time picker limits a query too. If you set a time in the query as well, the smaller range applies.

## Step 3 · project and extend: choose and compute columns

[calm] Project keeps only the columns you name. Everything else is dropped from the result.
[600ms]
[curious] Extend works differently. It keeps every column and adds a new one that you calculate.
[600ms]
[confident] Project can also rename columns, and extend is great for quick calculations inside a query.

## Step 4 · summarize: many rows become one row per group

[calm] Summarize turns many rows into one row per group. You can count the rows, or average a value.
[600ms]
[confident] Group by a column such as Name, or use bin to cut time into slices.
[600ms]
[serious] Grouping by TimeGenerated alone would make one group per timestamp. Bin rounds the times into slices first.

## Step 5 · order by, top, take, distinct: shape the answer

[calm] Order by sorts the rows. Top sorts and keeps just the first few.
[600ms]
[curious] Take grabs any few rows, in no particular order, and distinct lists the unique values of a column.
[600ms]
[confident] To get the latest records, use top rather than sorting the whole table.

## Step 6 · Text matching: has, contains, startswith

[curious] Has matches a whole word. Contains matches any piece of the text, but it scans slower.
[600ms]
[calm] Startswith checks the beginning of the text. All three ignore case.
[600ms]
[serious] Equals compares exactly, so there case matters. When you can, prefer has, because it looks up whole terms instead of scanning every value.

## Step 7 · join and union: combine two tables

[calm] Join matches rows from two tables on a shared column.
[600ms]
[confident] Union simply stacks the rows of several tables on top of each other.
[600ms]
[serious] The default join kind removes duplicate rows on the left. Say kind equals inner to keep every match, and put the smaller table on the left.

## Step 8 · render timechart: turn rows into a picture

[calm] To see a trend, summarize by bin of TimeGenerated, with five minute slices.
[600ms]
[confident] Then end the query with render timechart. The first column becomes the time axis.
[600ms]
[serious] Render must be the last operator. It doesn't change the data, it only tells the tool how to draw it.

## Step 9 · Build a query yourself

[excited] Now it's your turn. Click operators to add them, and click a line to remove it.
[600ms]
[curious] The goal is failed requests per five minutes, drawn as a chart.
[600ms]
[encouraging] Remember the order. Filter before you summarize, and render comes last.

## Step 10 · From answer to action

[calm] When a query returns what you need, don't throw it away. Reuse it.
[600ms]
[confident] You can start a new alert rule from the current query, so you're told when the result changes.
[600ms]
[optimistic] Or save the query and pin it as a tile on a workbook or a dashboard.

## Step 11 · Three beginner mistakes

[calm] Here are three mistakes that every beginner makes. Spot each one, then fix it.
[600ms]
[serious] KQL is case sensitive. Table names, column names, and equals all care about case.
[600ms]
[reassuring] Each mistake is easy to make and just as easy to avoid, once you know to look for it.

## Step 12 · KQL at a glance

[calm] One question per pipe. Start with the table, then filter by time.
[600ms]
[confident] Shape the columns, summarize the rows, and render the result.
[600ms]
[proud] Now practice on a real workspace, or on the demo environment linked from the Log Analytics get started article.
