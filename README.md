[Uploading README.md…]()
# NexusNet Sub **v3.3**

Premium subscription page for **3x-ui** and **PasarGuard** — same UI, dual data injection.

[![version](https://img.shields.io/badge/version-3.3-blue)](#)
[![license](https://img.shields.io/badge/license-MIT-green)](#)

## Quick install

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Themes/install.sh)
```

This installs the `nxt-sub` CLI and opens the interactive menu.

## CLI (`nxt-sub`)

```text
sudo nxt-sub                 # interactive menu
sudo nxt-sub install xui     # 3x-ui only
sudo nxt-sub install pg      # PasarGuard only
sudo nxt-sub install both
sudo nxt-sub settings        # profile title / support / renew / logo
sudo nxt-sub status
sudo nxt-sub update          # self-update CLI from GitHub
sudo nxt-sub restore xui|pg
sudo nxt-sub version
```

### Options

| Flag / Env | Meaning |
|------------|---------|
| `--file PATH` | Install from a local HTML file (no download) |
| `--ref NAME` / `NXT_REF` | Git branch or tag (default `Themes`) |
| `NXT_BASE` | Mirror base URL |

### Local install (no GitHub)

```bash
sudo nxt-sub install xui --file ./xui-nexusnet.html
sudo nxt-sub install pg  --file ./pasarguard-nexusnet.html
```

## Manual copy

```bash
# 3x-ui
sudo mkdir -p /etc/x-ui/sub
sudo cp -f xui-nexusnet.html /etc/x-ui/sub/sub.html
# Panel → Sub Theme Directory = /etc/x-ui/sub/

# PasarGuard
sudo mkdir -p /var/lib/pasarguard/templates/subscription
sudo cp -f pasarguard-nexusnet.html /var/lib/pasarguard/templates/subscription/index.html
```

## Features

- Unified UI for 3x-ui + PasarGuard  
- Liquid traffic ring, mood background, offline-friendly assets  
- Quick import: Happ · Hiddify · V2Box · v2rayNG (Android) · v2rayN (Windows)  
- No live ping / latency probes  
- Safe config injection via `/*NXT_CFG_BEGIN*/` markers  
- Automatic backups on every install  

## Repo layout

```text
install.sh                 # one-liner entry
nxt-sub                    # CLI manager
xui-nexusnet.html          # 3x-ui theme
pasarguard-nexusnet.html   # PasarGuard theme
SHA256SUMS                 # integrity
```

## License

MIT
