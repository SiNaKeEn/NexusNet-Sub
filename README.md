# NexusNet Sub Theme v2.8

Optimized stable theme for **3x-ui** and **PasarGuard** panels.

## Install
```bash
bash <(curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Template/install.sh)
```

Then run `nxt-sub` for settings (profile title, support, renew, bot).

## Fixes in 2.8
- No CDN (system fonts + SVG icons; QR has offline fallback)
- Safe localStorage (private mode)
- Badge status: Expired / Quota full / Expiring / Online / Off
- Liquid ring: remaining-based, correct geometry, color by level, pauses when tab hidden
- Ping: https-only, onerror = fail (no fake success)
- XSS escape on config names
- List no longer auto-reorders under finger
- Negative expire = "On first use"
- Fake 24h/7d/30d usage periods removed
- Installer: temp download + mv, backup, does not overwrite existing CUSTOM_TEMPLATES_DIRECTORY
- nxt-sub: printf %q for config (safe against special chars)

## Files
- `xui-nexusnet.html` → 3x-ui `/etc/x-ui/sub/sub.html`
- `pasarguard-nexusnet.html` → PasarGuard subscription template
- `nxt-sub` CLI
- `install.sh`
