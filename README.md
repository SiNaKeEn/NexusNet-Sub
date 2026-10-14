[README.md](https://github.com/user-attachments/files/33457018/README.md)
# NexusNet Sub v3.4.1
Themes for **3x-ui (Sanaei)** and **PasarGuard** — same layout on both. No CDN needed.

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Themes/install.sh)
```
```bash
nxt-sub
```
- Blue by default, red when the service is disabled / quota finished / expired.
- PasarGuard only sends one total-usage number (no download/upload split), so its four cells are: used, remaining, used %, remaining %. Add `#debug` to the page URL to see the raw values the panel sent.
- App logos: put `happ.png`, `hiddify.png`, `v2rayng.png`, `v2box.png` ... in `src/appicons/` and run `python3 build.py` (they get embedded in the HTML).
