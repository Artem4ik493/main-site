# Image assets

Place the following images in this folder. Recommended source files are PNG or WebP. Replace the placeholder files with your own images before publishing.

| File | Recommended size | Used for |
|---|---:|---|
| `site-logo.png` | 512 × 512 px | Site logo + PNG fallback |
| `site-logo.ico` | 16/32/48/64 px | Browser tab favicon |\n| `avatar.png` | 512 × 512 px | Main profile avatar |
| `armt-logo.png` | 512 × 512 px | ARMT VPN project logo |
| `modexa-logo.png` | 512 × 512 px | Modexa project logo |
| `minecraft-logo.png` | 512 × 512 px | Minecraft project logo |

## Notes

- All image slots are square.
- Transparent PNG/WebP works well for logos.
- The profile avatar uses `object-fit: cover`, so keep the important part near the center.
- Project logos are displayed inside a 56 × 56 px UI slot, but 512 × 512 px source files are recommended for sharpness on high-DPI screens.
- Keep the exact filenames above unless the paths in `index.html` are changed.
