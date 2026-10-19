# Modexa website

Static bilingual landing page and legal pages for Modexa at https://modexa.artem4ik493.ru.

## Structure

- index.html — rebuilt responsive landing page with Discord and Telegram integration previews.
- effects.css — shared visual system, responsive layout, liquid-glass panels, reveal transitions, status pulses, and card-tilt styling.
- script.js — animated metaball background, RU/EN language switch saved in localStorage, scroll reveal, card tilt, mobile navigation, and consent-gated Yandex Metrica.
- privacy.html and terms.html — full Russian and English legal text for the Modexa service.
- ../discord/privacy.html and ../discord/terms.html — bilingual policies specific to the Discord application.
- .htaccess — Apache rules for clean URLs such as /privacy and /terms.
- nginx.conf — Nginx location snippet for the active aaPanel virtual-host configuration.

## Clean URLs and deployment

The intended document root for modexa.artem4ik493.ru is this modexa/ directory. Use modexa/.htaccess only when the active web server is Apache and mod_rewrite is enabled. If the virtual host runs Nginx, copy the locations from modexa/nginx.conf into that virtual host's server block instead; Nginx does not automatically read configuration files stored with the static site. Do not activate both routing variants in the same virtual host.

The root .htaccess and nginx.conf provide equivalent routing for the repository-root site and extensionless nested HTML paths. The rules serve a matching .html file internally and redirect direct .html requests to a clean URL.

## Analytics and privacy

Yandex Metrica is loaded only after the visitor explicitly allows analytics in the banner. Rejecting analytics stores the choice and leaves the counter script unloaded. The preference is stored in browser local storage. The Privacy Policy explains data categories, bridge behaviour, retention, requests, and platform API transfers.

This is a static website: no Node.js runtime or build step is needed. The server must still be configured with the appropriate document root and rewrite rules.
