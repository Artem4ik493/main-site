# Modexa landing page

Static landing page for **Modexa**, intended to be served from `https://modexa.artem4ik493.ru`.

## Files

- `index.html` — responsive landing page, content structure inspired by the supplied Nexolia example, plus a Russian/English language switch (saved in the browser).
- `effects.css` — animated backgrounds, card hover effects, scroll progress, and motion styling.
- `effects.js` — cursor particles, animated node mesh, scroll progress, interactive card tilt, and reveal effects. The cursor-following glow has been removed; the particle trail remains.

The content flow includes a hero, architecture overview, 12 feature cards, a roadmap-stage progress panel, roadmap, FAQ, and CTA. A visible progress indicator reflects the current roadmap stage without inventing a completion percentage. The supplied Nexolia file is used only as a reference for information hierarchy; its branding, styling, metrics, and product claims are not copied. The effects are adapted from the animation system used by the root `main-site`, with Modexa's purple/pink palette. Reduced-motion preferences and mobile performance safeguards are included.

## Deployment

Configure the web server's document root for `modexa.artem4ik493.ru` to the repository's `modexa/` directory (or copy the contents of this directory to the subdomain's document root). Enable HTTPS and point the subdomain's DNS record to the hosting server.

The page is static and does not require Node.js, a build step, or a backend.
