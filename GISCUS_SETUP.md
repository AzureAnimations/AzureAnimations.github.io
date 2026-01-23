# Giscus Setup Instructions

## What I've Done:
✅ Installed @giscus/react package
✅ Created GiscusComponent.tsx with reaction buttons enabled
✅ Created DocItem wrapper to show Giscus on all doc pages

## What You Need to Do:

### Step 1: Enable GitHub Discussions
1. Go to your repository: https://github.com/AzureAnimations/AzureAnimations.github.io
2. Click on **Settings** tab
3. Scroll down to **Features** section
4. Check ✅ **Discussions**

### Step 2: Get Giscus Configuration IDs
1. Visit: https://giscus.app/
2. Enter your repository: `AzureAnimations/AzureAnimations.github.io`
3. Select **Discussion Category**: Choose "Announcements" or create a new category called "Feedback"
4. Under **Page ↔️ Discussions Mapping**: Select "Discussion title contains page pathname"
5. Enable **Reactions**: ✅ Enable reactions for the main post
6. Scroll to the bottom - you'll see a script tag like this:

```html
<script src="https://giscus.app/client.js"
        data-repo="AzureAnimations/AzureAnimations.github.io"
        data-repo-id="YOUR_REPO_ID_HERE"
        data-category="Feedback"
        data-category-id="YOUR_CATEGORY_ID_HERE"
        ...
</script>
```

7. Copy the values:
   - `data-repo-id` → This is your **REPO_ID**
   - `data-category-id` → This is your **CATEGORY_ID**

### Step 3: Update the Configuration
Open: `src/components/GiscusComponent.tsx`

Replace these lines:
```typescript
repoId="REPLACE_WITH_YOUR_REPO_ID"
categoryId="REPLACE_WITH_YOUR_CATEGORY_ID"
```

With your actual IDs from step 2.

### Step 4: Test Locally
1. Save the file
2. The dev server should reload automatically
3. Visit any doc page (e.g., http://localhost:3000/ai/intro)
4. You should see reaction buttons at the bottom of the page

### Step 5: Deploy
```bash
npm run build
npm run deploy
```

## Features You'll Get:
- 👍 👎 ❤️ 🎉 😕 🚀 👀 Reaction buttons on every doc page
- Optional: Comments section (currently enabled)
- All feedback stored in GitHub Discussions
- Works with light/dark mode
- Free and no backend required

## To View Feedback:
Go to your repository → Discussions tab → "Feedback" category

## Optional Customizations:
In `src/components/GiscusComponent.tsx`:
- Change `category` to your preferred discussion category
- Set `reactionsEnabled="0"` to disable reactions (only show comments)
- Change `inputPosition="bottom"` to move comment box to bottom
- Modify which pages show Giscus in `src/theme/DocItem/index.tsx`

Need help? Let me know!
