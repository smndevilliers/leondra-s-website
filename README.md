# Leondra's Wolkaboutertjes - Site Update Notes

## What's in this package

```
/
├── index.html
├── about.html
├── flock.html
├── sheep-care.html
├── wool.html
├── registration.html
├── gallery.html
├── journal.html
├── contact.html
├── styles.css
├── script.js
└── assets/
    ├── logo.svg
    └── favicon.svg
```

Drop everything into the repo root (or the same folder structure you currently use). Cloudflare Pages will auto-deploy on commit as usual.

## Contact form setup (5 minutes)

The contact form uses Web3Forms (free, unlimited submissions, no backend needed).

1. Go to https://web3forms.com
2. Enter your email (info@leondras.com.au)
3. Check your inbox and copy the access key they send you
4. Open contact.html and find this line:
   ```
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
   ```
5. Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual key
6. Commit and push

Submissions arrive in the email address you registered. The honeypot field (`botcheck`) handles most spam automatically. If spam becomes an issue later, Web3Forms supports Turnstile (Cloudflare's captcha) as an add-on.

## What's new

**Contact form:** Working email submission with proper labels, accessible feedback messages and a "Photo coming soon" failure fallback that directs people to your email address.

**Navigation:** Mobile hamburger toggle with accessible dropdowns. On desktop, dropdowns open on hover. On mobile, the sub-items stack indented under their parent.

**Logo placeholder:** Clean SVG wool-curl mark in the header and hero. Easy to swap when the real logo is ready (just replace the SVG paths in assets/logo.svg and the inline copies in index.html and the nav).

**Photo placeholders:** Now show a subtle wool-curl icon and "Photo coming soon" label rather than a gradient panel. Reads as intentional rather than broken.

**Typography:** Fraunces for headings (warm modern serif), Lora for body. Loaded from Google Fonts.

**Instagram:** Linked in the footer of every page and on the contact page.

**Meta tags:** Open Graph tags added to every page so links shared on Instagram, Facebook, WhatsApp or in messages get proper preview cards.

**Favicon:** Custom SVG favicon (forest green with the wool-curl mark).

**Accessibility:** Form labels, skip-to-content link, ARIA attributes on nav and form status, keyboard focus styles, semantic list markup throughout.

**Value icons:** Replaced the inconsistent Unicode glyphs on the home page with clean SVG icons.

## When the real logo is ready

Three places to update:
- `assets/logo.svg` (favicon-adjacent uses)
- `assets/favicon.svg` (browser tab icon)
- Inline SVGs in the nav (every HTML page) and the hero (`index.html` only)

Once you have a designer-made SVG, search-replace the inline SVG paths and you're done. If you want to skip the search-replace burden long-term, that's the moment to migrate to a static site generator (Eleventy is the gentlest option and works seamlessly with Cloudflare Pages).

## Recommended next steps

In rough priority order:

1. Get your Web3Forms access key and wire up the contact form
2. Set up Cloudflare Web Analytics (free, no cookie banner needed, dashboard at cloudflare.com)
3. Add a 404.html page (Cloudflare Pages will use it automatically)
4. Replace photo placeholders as real photos come in
5. Generate a sitemap.xml and robots.txt when ready to go public (helpful for SEO)
6. Consider adding LocalBusiness or Farm structured data when the site copy stabilises

## Optional polish for later

- Pronunciation guide for "Wolkaboutertjes" on the About page
- A "Visit" or contact page note about whether farm visits are possible by appointment
- Instagram feed embed on the journal page
- Breed-up generation tracker (mentioned earlier, good for later when the Valais program progresses)
