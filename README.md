# NexusNet Sub

**Modern subscription page themes for 3x-ui (Sanaei) and PasarGuard.**

![Version](https://img.shields.io/badge/version-2.2-cyan)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## Features

- Responsive UI (mobile + desktop)
- Dark / light themes
- Liquid traffic ring and detailed usage stats
- Usage period selector (24h / 7d / 30d / total)
- Expiry countdown (days / hours / minutes)
- Jalali dates
- Live latency (WS / HTTP / Auto) with optional auto-refresh
- Country flags from inbound remarks
- Quick import (Happ, Hiddify, v2rayNG, V2Box)
- OS-aware clients (Happ default, Throne on Windows/Linux)
- Copy **Sub / JSON / Clash** only when that format is enabled
- Low-data and expiry warning banners
- Renew & support buttons (Telegram bot via CLI settings)
- Profile tab
- `nxt-sub` management CLI with persistent settings

---

## Requirements

| Panel | Minimum |
|-------|---------|
| 3x-ui | **v3.3.0+** (Sub Theme Directory) |
| PasarGuard | Custom templates in `.env` |

---

## Quick install

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Template/install.sh)
```

Then open the manager:

```bash
sudo nxt-sub
```

If `nxt-sub` is not found:

```bash
sudo /usr/local/bin/nxt-sub
# or
sudo /usr/bin/nxt-sub
```

### 3x-ui

Set **Settings → Subscription → Sub Theme Directory** to:

```text
/etc/x-ui/sub/
```

---

## Settings (bot / support / title)

```bash
sudo nxt-sub
# choose: 3) Settings
```

You can set:

- **Profile title** — brand name on PasarGuard page (not username)
- **Telegram bot** — username; auto-fills support/renew as `https://t.me/BotName`
- **Support URL** / **Renew URL** — full links if you prefer

Values are stored in `/etc/nxt-sub/config` and injected into installed themes.

---

## CLI menu

| # | Action |
|---|--------|
| 1 | Install / update 3x-ui theme |
| 2 | Install / update PasarGuard theme |
| 3 | Settings (bot, support, renew, title) |
| 4–5 | Remove themes |
| 6 | Status |
| 7 | Version |
| 8 | Full uninstall |
| 9 | Exit |

---

## Manual install

**3x-ui**

```bash
mkdir -p /etc/x-ui/sub
curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Template/xui-nexusnet.html -o /etc/x-ui/sub/sub.html
```

**PasarGuard**

```bash
mkdir -p /var/lib/pasarguard/templates/subscription
curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Template/pasarguard-nexusnet.html \
  -o /var/lib/pasarguard/templates/subscription/index.html
```

```env
CUSTOM_TEMPLATES_DIRECTORY="/var/lib/pasarguard/templates/"
SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"
```

```bash
pasarguard restart
```

---

## Files

```text
install.sh
nxt-sub
xui-nexusnet.html
pasarguard-nexusnet.html
README.md
```

Branch: **Template**

---

## License

MIT
