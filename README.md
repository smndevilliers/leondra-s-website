# Site Update v4 - Photos and Trims (flat structure)

## Important: this version has no assets folder

All files sit at the root level of the repo, matching your existing GitHub setup. Just drag all files into the repo root and upload.

## What's new

**Real photos!**
- Nutmeg and Basil (Valais Blacknose lambs) on the Valais Blacknose page and Flock overview card
- Sage (Babydoll) on the Babydolls page, Flock overview card, and About page
- Elliottdale page still uses the placeholder (no photo yet)

**Names introduced** throughout: Nutmeg, Basil, and Sage are now named in the copy where it fits naturally.

**Trims from the buyer review:**
- "Visits are by appointment" line removed from Home and About (kept only on Contact page and in the Sheep Care FAQ)
- "Honest about everything" highlight card removed from About (kept the other two)
- Journal page now shows one honest "first post coming soon" card instead of three

## Files to upload

**New image files (add to repo root):**
- nutmeg-basil.jpg (326KB, hero size)
- nutmeg-basil-card.jpg (130KB, card size)
- sage.jpg (526KB, hero size)
- sage-card.jpg (210KB, card size)

**Updated HTML pages (replace existing):**
- index.html
- about.html
- flock.html
- valais-blacknose.html
- babydolls.html
- journal.html

**Updated CSS:**
- styles.css

**Unchanged (no need to re-upload but included for completeness):**
- elliottdale.html
- sheep-care.html
- memberships.html
- contact.html
- script.js
- logo.svg, favicon.svg
- wool.html, registration.html, gallery.html (redirect stubs)

## Heads up

I noticed in your GitHub repo that script.js, logo.svg and favicon.svg don't appear to be in the file list. These should already be in your repo from earlier deploys. If they're missing for some reason, this package includes them too, so you can upload them all together.

## Critical reminder

contact.html in this package has the placeholder for the Web3Forms access key reset. If you're uploading contact.html, paste your key back in before committing. If you're skipping contact.html (it's unchanged anyway), no action needed.

## Deployment

Same as before: drag everything into GitHub repo root, commit, push. Cloudflare redeploys automatically.

## After deploying

Hard refresh (Ctrl+Shift+R) on each page and check:
- Flock overview: two real photos, one placeholder
- Valais page: Nutmeg and Basil greet you, caption underneath
- Babydolls page: Sage greets you, caption underneath
- About: Sage photo sits below the story, only two highlight cards remain
- Journal: one card instead of three
