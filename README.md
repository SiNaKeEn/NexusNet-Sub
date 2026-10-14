[README.md](https://github.com/user-attachments/files/33428972/README.md)
# NexusNet Sub v3.3.2
Subscription themes for **3x-ui (Sanaei)** and **PasarGuard** — v3.0.1 dashboard/apps layout on the 2.2 core. Works with no CDN.

## Install
```bash
bash <(curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Template/install.sh)
sudo nxt-sub                              # menu
sudo nxt-sub install xui|pg [--file f]    # non-interactive / offline
sudo nxt-sub restore xui|pg               # roll back to last backup
```
Pin a release with `NXT_REF=<tag-or-commit>`, use a mirror with `NXT_BASE=<url>`. Checksums come from `SHA256SUMS`.

## Settings (`nxt-sub` -> 3)
Title, Telegram bot, support URL, renew URL, accent color, logo (https), top notice.

## Build
Sources are in `src/`; `python3 build.py` regenerates both themes into `out/`.

## Troubleshooting numbers (PasarGuard)
Open the subscription page with `#debug` at the end of the URL (e.g. `https://host/sub/TOKEN#debug`) to see the raw values PasarGuard sent (used_traffic, data_limit, lifetime, status, dates).
