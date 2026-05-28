# Site Update v3 - Deployment Notes

## What's changed from v2

**Three new breed pages:**
- `valais-blacknose.html` (includes the breed-up explainer)
- `babydolls.html`
- `elliottdale.html`

**flock.html simplified** to an overview with three cards linking to the new breed pages. Visit & Buy section removed.

**sheep-care.html simplified.** Day-to-day section removed. Before-You-Get-Sheep checklist and FAQs remain.

**journal.html restored** to the three-column card layout for upcoming posts. The wool block is gone; Instagram callout takes its place.

**Centered alignment** applied throughout. All sections, headings, eyebrows, and body copy centered by default. Forms and FAQs remain left-aligned for usability (they need to be readable line by line).

**Em-dash list style** applied to all `.fact-list` elements, replacing the olive dots. Clay-coloured em-dash markers, max-width 540px centered, with the list itself left-aligned for readability.

**Dropdown nav** updated to point to the three new breed pages (Valais Blacknose, Babydolls, Elliottdale).

## File summary

**Main pages (replace existing):**
- index.html
- about.html
- flock.html (now an overview only)
- sheep-care.html
- journal.html (column layout restored)
- memberships.html
- contact.html
- styles.css

**New files (add to repo):**
- valais-blacknose.html
- babydolls.html
- elliottdale.html

**Redirect stubs (no changes if already deployed):**
- wool.html → journal.html
- registration.html → memberships.html
- gallery.html → journal.html

**Unchanged (already in repo):**
- script.js
- assets/logo.svg
- assets/favicon.svg

## One critical step before deploying

`contact.html` has been rebuilt and the Web3Forms access key is back to the placeholder. Before you commit, replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your real key. You can copy it from the currently-live contact.html in GitHub.

## Test after deploying

1. Click through the nav, including the Flock dropdown with the three breed pages
2. Confirm the alignment looks right on each page
3. Check the journal page shows three columns on desktop, stacks on mobile
4. Submit a test enquiry through the contact form
5. Check on mobile: hamburger menu, breed sub-items, all pages stack cleanly

## What didn't change

- Web3Forms wiring (just needs the access key pasted back in)
- Cloudflare Access setup
- Email Routing
- Colour palette and typography
- Logo placeholder (still the wool curl)
- Photo placeholders (still "Photo coming soon")
