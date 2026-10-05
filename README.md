# NexusNet Sub

**Modern subscription page themes for 3x-ui (Sanaei) and PasarGuard.**

![Version](https://img.shields.io/badge/version-2.1-cyan)
![License](https://img.shields.io/badge/license-MIT-blue)
![Panels](https://img.shields.io/badge/panels-3x--ui%20%7C%20PasarGuard-purple)

---

## Features

- Responsive UI (mobile + desktop)
- Dark / light / ultra-dark themes
- Color palettes: cyan, purple, green
- Liquid traffic ring + detailed usage stats
- Usage period selector (24h / 7d / 30d / total)
- Countdown expiry timer (days / hours / minutes)
- Jalali date support (Persian calendar)
- Live latency probe (WS / HTTP / Auto) with auto-refresh
- Country flag detection from inbound remarks
- Quick import for Happ, Hiddify, v2rayNG, V2Box
- OS-aware client recommendations (Happ default, Throne on Windows/Linux)
- Copy subscription / JSON / Clash **only when that format is enabled**
- QR code, share button, keyboard shortcuts (`C` copy, `Q` QR)
- Low-data and expiry warning banners
- Renew & support buttons (Telegram bot friendly)
- Profile tab with account details
- Animated ambient background
- One-line installer + `nxt-sub` management CLI

---

## Requirements

| Panel | Minimum version | Notes |
|-------|-----------------|--------|
| **3x-ui** | **v3.3.0+** | Needs **Sub Theme Directory** setting |
| **PasarGuard** | Custom templates enabled | `.env` template paths |

Older 3x-ui v2.x does **not** support Sub Theme Directory.

---

## Quick install

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Template/install.sh)
```

The installer will:

1. Install the **`nxt-sub`** CLI
2. Ask for panel type (3x-ui or PasarGuard)
3. Back up any existing theme file
4. Deploy the theme

### After install (3x-ui)

Panel → **Settings → Subscription → Information → Sub Theme Directory**:

```text
/etc/x-ui/sub/
```

Save settings. Open a subscription URL in a browser to verify.

### After install (PasarGuard)

Already applied via `.env` and service restart when possible.

---

## Manage with CLI

```bash
sudo nxt-sub
```

| Option | Action |
|--------|--------|
| 1 | Install / update 3x-ui theme |
| 2 | Install / update PasarGuard theme |
| 3 | Remove 3x-ui theme |
| 4 | Remove PasarGuard theme |
| 5 | Status |
| 6 | Version / remote check |
| 7 | Full uninstall (themes + CLI) |
| 8 | Exit |

> Legacy command `nexusnetsub` is still symlinked to `nxt-sub` when installed via the installer.

---

## Configuration (optional)

Edit the `CONFIG` block near the top of the HTML file (or re-edit after each update):

```js
const CONFIG = {
  profileTitle: "",   // PasarGuard page title (e.g. "NexusNet"). Empty = "Subscription"
  supportUrl: "",     // Support / Telegram link
  renewUrl: "",       // Renew bot or payment URL
  footerText: "NexusNet · Secure Access",
  palette: "cyan",    // cyan | purple | green
};
```

**PasarGuard title:** the panel HTML API does not expose profile-title the same way as 3x-ui. Set `profileTitle` in `CONFIG` so the page title is your brand (not the username). Username still appears under the title.

**3x-ui title:** uses panel **Subscription Title** (`subTitle`). `CONFIG.profileTitle` overrides if set.

---

## Manual install

### 3x-ui

```bash
mkdir -p /etc/x-ui/sub
curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Template/xui-nexusnet.html -o /etc/x-ui/sub/sub.html
chmod 644 /etc/x-ui/sub/sub.html
```

Set **Sub Theme Directory** to `/etc/x-ui/sub/`.

### PasarGuard

```bash
mkdir -p /var/lib/pasarguard/templates/subscription
curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Template/pasarguard-nexusnet.html \
  -o /var/lib/pasarguard/templates/subscription/index.html
```

In `/opt/pasarguard/.env`:

```env
CUSTOM_TEMPLATES_DIRECTORY="/var/lib/pasarguard/templates/"
SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"
```

```bash
pasarguard restart
```

---

## Repository layout

```text
install.sh                 # one-line installer
nxt-sub                    # management CLI
xui-nexusnet.html          # 3x-ui theme
pasarguard-nexusnet.html   # PasarGuard theme
README.md
```

Branch used for raw installs: **`Template`**.

---

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `C` | Copy subscription URL |
| `Q` | Show QR code |

---

## Notes

- Browser latency is an **estimate** (WS/HTTP), not Xray core RTT.
- JSON / Clash copy buttons appear only when the panel provides those URLs.
- Always hard-refresh the subscription page (`Ctrl+Shift+R`) after updating the theme.

---

## License

MIT

## Credits

Built for **NexusNet**. Compatible with MHSanaei 3x-ui and PasarGuard panels.
