[Uploading CHANGELOG.md…]()
# Changelog

## 3.5.0
- **PasarGuard now uses the same four stat labels as 3x-ui** (Downloaded · Uploaded · Used · Remaining). PasarGuard only reports one total, so *Downloaded* shows the total and *Uploaded* shows `—`; `pgcells=simple` gives Used · Remaining · Used % · Remaining %.
- **`nxt-sub` rewritten**: dashboard with panel status, settings editor for every text/link (title, bot, support, renew, channel, notice, footer, accent, logo, default language/theme, PasarGuard cells) with validation and instant apply, backups browser, uninstall, `doctor` + `fix`, non-interactive `set/get/config/apply`.
- New optional page elements: channel button, footer line, default language/theme.
- Themes carry a version stamp; `nxt-sub` shows installed vs CLI version.
- Removed the optional Google Fonts request — the themes now make **no third-party requests**.

## 3.4.x
- Stat cells: icon + label top-right, value bottom-left. Blue theme only; the whole page turns red when the service is disabled / finished / expired.
- PasarGuard fixes (status, lifetime row, `#debug`), app-logo embedding pipeline (`src/appicons/`), dead code removed.

## 3.1
- Dashboard & apps layout, 3D glass orb (tilt, tap-to-splash), count-up numbers, live countdown, headline sentence, accordion apps with Install/Add buttons, sliding nav, auto light/dark.

## 2.2
- Liquid-glass orb engine, no CDN (inline SVG icons, built-in QR), safe storage, real status badge, safer installer.
