[README.md](https://github.com/user-attachments/files/33518050/README.md)
<div align="center">

<img src="docs/banner.png" alt="NexusNet Sub" width="100%">

# NexusNet Sub

**Beautiful, fast, CDN-free subscription pages for [3x-ui (Sanaei)](https://github.com/MHSanaei/3x-ui) and [PasarGuard](https://github.com/PasarGuard/panel)**

![version](https://img.shields.io/badge/version-3.5.0-22d3ee?style=for-the-badge&labelColor=0b1220)
![panels](https://img.shields.io/badge/3x--ui%20%C2%B7%20PasarGuard-supported-2563eb?style=for-the-badge&labelColor=0b1220)
![cdn](https://img.shields.io/badge/CDN-none-10b981?style=for-the-badge&labelColor=0b1220)
![size](https://img.shields.io/badge/single%20file-~100%20KB-f59e0b?style=for-the-badge&labelColor=0b1220)
![lang](https://img.shields.io/badge/fa%20%C2%B7%20en-RTL%20ready-a855f7?style=for-the-badge&labelColor=0b1220)

**English** · [فارسی](README.fa.md)

</div>

---

## ✨ Highlights

| | |
|---|---|
| 🫧 **Liquid-glass volume orb** | Water level = remaining data. Tilt your phone (or move the mouse) and the glass tilts with it, tap it to make waves. Unlimited = a full glass that sloshes over the rim. |
| 🚦 **Status you can feel** | Blue when everything is fine. The **whole page turns red** — background, buttons, orb — when the service is disabled, the quota is used up or it has expired. |
| ⏱ **Live countdown** | Days · hours · minutes · seconds, ticking. Jalali (Persian) dates. A plain-language headline: *"Only 5 days left"*, *"75% of your data left"*. |
| ⚡ **One-tap import** | Detects Android / iOS / Windows / macOS / Linux and offers the right app first (Happ, Hiddify, V2Box, v2rayNG). Per-app **Install** and **Add** buttons. |
| 📱 **Mobile-first** | Light / dark / auto theme, fa / en, reduced-motion aware, pinch-zoom allowed, icon buttons have labels. Tested from 360 px up. |
| 🔌 **Works offline** | Zero third-party requests: no Google Fonts, no Font Awesome CDN, no QR CDN. Icons are inline SVG, the QR generator is built in, text uses the system font stack. Firewall-friendly (the only external fetch is the logo URL *you* may set). |
| 🖥 **Terminal manager** | `nxt-sub` — install, update, roll back, re-brand (title, bot, support, renew, channel, notice, accent, logo…) without touching a file. |
| 🔒 **Safe by design** | All dynamic text is escaped, URL schemes are validated, settings are JSON-escaped on injection (never evaluated as code), downloads are checksum-verified, every change makes a backup. |

---

## 📸 Screenshots

<div align="center">

| Normal | Unlimited | Problem → red |
|:--:|:--:|:--:|
| <img src="docs/xui_blue.png" width="250"> | <img src="docs/xui_unlimited.png" width="250"> | <img src="docs/xui_red.png" width="250"> |
| **PasarGuard** | **Light theme** | **Apps** |
| <img src="docs/pg.png" width="250"> | <img src="docs/light.png" width="250"> | <img src="docs/apps.png" width="250"> |

</div>

---

## 🚀 Install

> Requirements: Linux, **root**, `bash`, `curl` or `wget`, and 3x-ui and/or PasarGuard already running.

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Themes/install.sh)
```

That installs the `nxt-sub` command and opens its menu. Next time just run:

```bash
sudo nxt-sub
```

Prefer no menu?

```bash
sudo nxt-sub install xui      # 3x-ui (Sanaei)
sudo nxt-sub install pg       # PasarGuard
sudo nxt-sub install both
```

<details>
<summary><b>3x-ui: one extra step</b></summary>

After installing, open the panel → **Settings → Subscription** and set **Sub Theme Directory** to `/etc/x-ui/sub/`, then restart (`x-ui restart`). `nxt-sub` offers to restart for you.
</details>

<details>
<summary><b>PasarGuard: what the installer does</b></summary>

It writes `subscription/index.html` inside your `CUSTOM_TEMPLATES_DIRECTORY` (default `/var/lib/pasarguard/templates`), adds that variable to `/opt/pasarguard/.env` only if it is missing, **never overrides a templates directory you already use**, and offers to point `SUBSCRIPTION_PAGE_TEMPLATE` to `subscription/index.html` if it points elsewhere.
</details>

<details>
<summary><b>Offline / mirror / pinned version</b></summary>

```bash
sudo nxt-sub install xui --file ./xui-nexusnet.html     # no network needed
NXT_BASE=https://your-mirror.example/NexusNet-Sub sudo -E nxt-sub install both
sudo nxt-sub install both --ref v3.5.0                   # pin a tag/commit
```
</details>

---

## 🖥 `nxt-sub` — the terminal manager

<div align="center">

<img src="docs/terminal_menu.png" width="49%"> <img src="docs/terminal_settings.png" width="49%">

</div>

Everything the page shows can be changed from the terminal, and **every change is applied to the installed themes instantly**.

| Command | What it does |
|---|---|
| `sudo nxt-sub` | Interactive menu: install, brand & texts, backups, doctor, uninstall, update |
| `nxt-sub install xui\|pg\|both` | Install or update a theme (`--file`, `--ref` supported) |
| `nxt-sub set <key> <value>` | Change one setting (validated and applied right away) |
| `nxt-sub get <key>` · `nxt-sub config` | Read one / all settings |
| `nxt-sub apply` | Re-inject current settings into installed themes |
| `nxt-sub restore xui\|pg` | Roll back to the last backup |
| `nxt-sub doctor` | Diagnose permissions, `.env`, template paths, versions, connectivity |
| `nxt-sub fix` | Auto-fix the common problems the doctor finds |
| `nxt-sub status` · `update` · `version` | Overview · self-update (checksum-verified) · version |

### What you can customize

| Key | Example | Where it shows up |
|---|---|---|
| `title` | `NexusNet VIP` | Page header and browser tab (empty = panel's name) |
| `bot` | `@MyBot` | Used for **Renew** and **Support** when those are empty |
| `renew` | `https://t.me/MyBot` | Big **Renew** button when the service is expiring / finished |
| `support` | `https://t.me/MySupport` | **Support** button in the Profile tab |
| `channel` | `https://t.me/MyChannel` | Optional **Channel** button |
| `notice` | `Maintenance tonight 02:00` | Banner on top of every page |
| `footer` | `© MyBrand` | Small line at the bottom |
| `accent` | `#22d3ee` | Brand color (the page still goes red on problems) |
| `logo` | `https://…/logo.png` | Square logo next to the title |
| `lang` | `fa` · `en` | Default language for first-time visitors |
| `theme` | `auto` · `dark` · `light` | Default theme for first-time visitors |
| `pgcells` | `xui` · `simple` | PasarGuard stat cells (see below) |

```bash
sudo nxt-sub set title "NexusNet VIP"
sudo nxt-sub set bot @MyBot
sudo nxt-sub set accent "#a855f7"
```

---

## 🧩 3x-ui vs PasarGuard

Both panels share the same layout. They differ only in the data the panel hands to the page:

| | 3x-ui (Sanaei) | PasarGuard |
|---|---|---|
| Download / Upload | ✅ separate numbers | ❌ one total number only |
| Stat cells | Downloaded · Uploaded · Used · Remaining | Same four labels (`pgcells=xui`, default): *Downloaded* shows the total used, *Uploaded* shows `—` |
| Alternative | – | `pgcells=simple`: Used · Remaining · Used % · Remaining % |
| Status | enabled / expiry / quota | real status (`active`, `limited`, `expired`, `disabled`, `on_hold`) |

> **Numbers look off on PasarGuard?** Open the subscription page with `#debug` at the end of the URL (`https://host/sub/TOKEN#debug`) to see the raw values PasarGuard sent.

---

## 🛠 Build from source

Sources live in `src/` and both themes are generated from the same files:

```bash
python3 build.py        # → out/xui-nexusnet.html, out/pasarguard-nexusnet.html
```

App logos: drop `happ.png`, `hiddify.png`, `v2rayng.png`, `v2box.png`, … into `src/appicons/` and rebuild — they are resized to 72 px and embedded in the HTML (no external requests). Apps without a logo keep a colored letter tile.

```
NexusNet-Sub/
├─ install.sh                 # one-line installer → installs nxt-sub
├─ nxt-sub                    # terminal manager
├─ xui-nexusnet.html          # 3x-ui theme   (ready to use)
├─ pasarguard-nexusnet.html   # PasarGuard theme (ready to use)
├─ SHA256SUMS                 # checksums verified by nxt-sub
├─ build.py · src/            # sources
└─ docs/                      # screenshots
```

---

## ❓ FAQ

<details><summary><b>The page shows the old design.</b></summary>
Restart the panel (<code>x-ui restart</code> / <code>pasarguard restart</code>) and hard-refresh the browser. Run <code>sudo nxt-sub doctor</code> to check paths and permissions.
</details>

<details><summary><b>My renew / support buttons don't appear.</b></summary>
Set them with <code>nxt-sub set renew …</code> / <code>set support …</code> or set a <code>bot</code>. Only <code>https://</code>, <code>http://</code> and <code>tg://</code> links are accepted.
</details>

<details><summary><b>Can I uninstall?</b></summary>
Yes: <code>sudo nxt-sub</code> → <b>Uninstall</b>. It offers to restore the file you had before instead of deleting.
</details>

---

## 📦 Changelog

See [CHANGELOG.md](CHANGELOG.md).

## 🙏 Credits

- Icons: [Font Awesome Free](https://fontawesome.com/license/free) (CC BY 4.0), inlined as SVG.
- QR code generator: © Kazuhiko Arase, MIT — <http://www.d-project.com/>.
