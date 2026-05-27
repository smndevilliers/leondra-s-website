# Site Update v2 - Deployment Notes

## What's changed

This is a substantial content and structure update. Key changes:

**Navigation simplified from 9 items to 6:**
About | The Flock | Sheep Care | Journal | Memberships | Contact

**Page changes:**
- `flock.html` now includes a "Visit & Buy" section with a 4-step buying process and practical notes on prices, paperwork and pickup
- `flock.html` also includes a plain-English explainer of the Valais breed-up program (F1, F2, F3 explained)
- `wool.html` content merged into `journal.html` (old URL redirects automatically)
- `registration.html` renamed to `memberships.html` (old URL redirects automatically)
- `gallery.html` removed for now (old URL redirects to journal)
- `sheep-care.html` rewritten with practical "before you get sheep" checklist, day-to-day rhythm and 8 honest FAQs
- `about.html` rewritten with a real "how this started" story angle
- `index.html` hero copy now says exactly what you do, where, and why

**Voice and tone:**
- All copy rewritten in plain Australian English
- More conversational, less corporate
- Acronyms explained where they appear (NLIS, ASBA, BSAA, RBTA)
- Honest where things are still being figured out (wool, lambing dates, etc)

**UX and design:**
- Heading weights bumped from 400 to 500/600 for stronger hierarchy
- Body text colour darkened slightly for better contrast (WCAG AA compliant)
- Sections have varied padding for editorial rhythm
- Card gap increased for breathing room
- Subtle noise texture on hero for depth
- Focus indicators improved for keyboard users
- New `.fact-list` styling for bulleted facts with olive dots
- New `.container-narrow` and `.lede` classes for long-form reading

## Deployment

Same as last time: drop all files into the repo, commit, push, Cloudflare Pages redeploys.

**Files to upload (replace existing):**
- `index.html`
- `about.html`
- `flock.html`
- `sheep-care.html`
- `journal.html`
- `contact.html`
- `styles.css`
- `script.js` (no changes but included for completeness)

**New files (add to repo):**
- `memberships.html`

**Redirect stubs (add to repo) so old links still work:**
- `wool.html` (redirects to journal.html)
- `registration.html` (redirects to memberships.html)
- `gallery.html` (redirects to journal.html)

**Assets folder (no changes):**
- `assets/logo.svg`
- `assets/favicon.svg`

## One critical step

Before you commit `contact.html`, you need to paste your existing Web3Forms access key into it. The new file has a placeholder:

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
```

Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with the same key you used last time. You can grab it from your current live `contact.html` in GitHub, or from the Web3Forms dashboard.

## Test after deploying

Because the site is still behind the Cloudflare Access wall, you'll need to log in to test. From a logged-in browser:

1. Visit each main page, click through the nav
2. Check that old URLs (yoursite.com/wool.html) redirect cleanly
3. Submit a test enquiry through the contact form to confirm Web3Forms still works
4. Open the site on your phone and check the hamburger menu works
5. Hover over the Flock dropdown on desktop and confirm the sub-items appear

## Notes about copy

The copy is intentionally placeholder-flavoured in spots so it sounds natural without making claims you can't back up. A few things to refine in your own voice when you have time:

- Hero on About page: the "Honestly? It started with..." paragraph is a good launching pad for your real story
- Anywhere it says "[your professional field, if you want to mention it]" was removed in the final version but you can add a sentence about your background on the About page when ready
- Lambing dates and timelines are kept vague ("when we have lambs available") on purpose. Update with specifics as they firm up
- The "About the wool side of things" block in journal.html is deliberately hedging. Update as you decide on direction

## Not done in this round (for future sessions)

These were discussed in the review but parked:

- Breed pre-fill on contact form when clicking "Enquire about Valais" etc
- Newsletter signup
- Real hero photo (waiting on you)
- Logo design (waiting on you)
- Cloudflare Web Analytics
- Sitemap, robots.txt, structured data (do these right before flipping Access off)
- 404 page
- Instagram feed embed
