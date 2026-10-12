# NexusNet Sub Theme

**Version 3.0.0** — subscription page themes for **3x-ui (Sanaei)** and **PasarGuard**.

Based on the stable **2.1-opt** UI (fonts, layout, buttons) with renew/support and without live latency.

---

## Quick install

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Themes/install.sh)
```

Then:

```bash
sudo nxt-sub
```

---

## CLI menu (`sudo nxt-sub`)

```
1) Install / Reinstall  →  3x-ui
2) Install / Reinstall  →  PasarGuard
3) Update installed themes
4) Update manager (nxt-sub only)
5) Settings (title / bot / support / renew)
6) Restore from backup
7) Status
8) Uninstall
9) About
0) Exit
```

### Injectable settings

| Setting | Description |
|---------|-------------|
| Profile Title | Header title on the sub page |
| Telegram Bot | `@username` |
| Support URL | Support button link |
| Renew URL | Renew button (home + profile) |

Values are stored as base64 and injected safely into the theme `CONFIG` object.

---

## Features

| Feature | Detail |
|---------|--------|
| Dual panel | 3x-ui / Sanaei + PasarGuard |
| UI | Inter + Vazirmatn, glass cards, bottom nav |
| Background | Dark blue ambient orbs + stars |
| Dark / Light | Theme toggle |
| Traffic | Liquid ring (remaining) + down / up / used / left |
| Expire | Day / hour / minute + Jalali |
| Renew & Support | From `nxt-sub` settings |
| Quick import | Happ, Hiddify, v2rayNG, V2Box |
| Apps list | Android, iOS, Windows, macOS, Linux |
| Language | Persian / English |

---

## Manual paths

| Panel | Path |
|-------|------|
| 3x-ui | `/etc/x-ui/sub/sub.html` |
| PasarGuard | `/var/lib/pasarguard/templates/subscription/index.html` |

**3x-ui:** if available, set `Sub Theme Directory = /etc/x-ui/sub/`.  
Older panels: copy `sub.html` to the default sub folder and restart x-ui.

---

## Update / Uninstall

```bash
sudo nxt-sub
# 3) Update themes
# 4) Update manager only (no bash install needed)
# 8) Uninstall
```

---

## Package files

| File | Purpose |
|------|---------|
| `xui-nexusnet.html` | 3x-ui theme |
| `pasarguard-nexusnet.html` | PasarGuard theme |
| `nxt-sub` | Interactive CLI |
| `install.sh` | One-line installer |
