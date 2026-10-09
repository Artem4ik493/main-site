# Modexa landing page

Static landing page for **Modexa**, intended to be served from `https://modexa.artem4ik493.ru`.

## Files

- `index.html` — page content and responsive layout.
- `effects.css` — animated backgrounds, card hover effects, glow, and motion styling.
- `effects.js` — cursor particles, animated node mesh, scroll progress, interactive card tilt, and reveal effects.

The effects are adapted from the animation system used by the root `main-site`, with Modexa's purple/pink palette. Reduced-motion preferences and mobile performance safeguards are included.

## Deployment

Configure the web server's document root for `modexa.artem4ik493.ru` to the repository's `modexa/` directory (or copy the contents of this directory to the subdomain's document root). Enable HTTPS and point the subdomain's DNS record to the hosting server.

The page is static and does not require Node.js, a build step, or a backend.
