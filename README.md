# NexusNet Sub Theme

Professional dual-panel subscription page for **3x-ui** and **PasarGuard**.

Clean dark/light UI • No external CDN • Offline-friendly • CLI managed

---

## Quick Install

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Template/install.sh)
```

After install, manage everything with:

```bash
sudo nxt-sub
```

---

## Features

| Feature | Detail |
|---------|--------|
| Dual panel | 3x-ui / Sanaei + PasarGuard |
| No CDN | System fonts + inline SVG icons |
| Offline QR | Works without external libraries |
| Safe storage | localStorage wrapped (private mode safe) |
| XSS safe | Config names escaped |
| Status badges | Expired / Quota full / Expiring / Online / Off |
| Liquid ring | Remaining-based level + color |
| Privacy ping | HTTPS only, onerror = fail |
| Expire handling | Negative = "On first use" |
| CLI | Full interactive menu |

---

## CLI Menu (`sudo nxt-sub`)

```
1) Install / Reinstall  →  3x-ui
2) Install / Reinstall  →  PasarGuard
3) Update installed themes
4) Settings (title / bot / support / renew)
5) Restore from backup
6) Status
7) Uninstall
8) About
0) Exit
```

### Settings you can inject

- Profile Title
- Telegram Bot (`@username`)
- Support URL
- Renew URL

Settings are written safely (`printf %q`) and injected into the theme CONFIG object.

---

## Manual paths

| Panel | Theme path |
|-------|------------|
| 3x-ui | `/etc/x-ui/sub/sub.html` |
| PasarGuard | `/var/lib/pasarguard/templates/subscription/index.html` |

**3x-ui panel setting:**  
`Sub Theme Directory = /etc/x-ui/sub/`

**PasarGuard:**  
Installer writes `CUSTOM_TEMPLATES_DIRECTORY` and `SUBSCRIPTION_PAGE_TEMPLATE` into `/opt/pasarguard/.env` (only if missing).

---

## Update

```bash
sudo nxt-sub
# → choose 3) Update
```

Or re-run the one-liner installer.

---

## Uninstall

```bash
sudo nxt-sub
# → 7) Uninstall
```

Backups of previous theme files are kept automatically.

---

## Files in this repo

| File | Purpose |
|------|---------|
| `xui-nexusnet.html` | 3x-ui theme |
| `pasarguard-nexusnet.html` | PasarGuard theme |
| `nxt-sub` | Interactive CLI manager |
| `install.sh` | One-line installer |

---

## Version

**2.8** — stable core from 2.1 + safety & UX fixes

Repo: https://github.com/SiNaKeEn/NexusNet-Sub  
Branch: `Template`
