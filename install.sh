#!/usr/bin/env bash
# NexusNet Theme Installer v3.1 — installs the nxt-sub CLI, then runs it.
set -euo pipefail
REF="${NXT_REF:-Template}"
BASE="${NXT_BASE:-https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/${REF}}"
[[ "${EUID}" -eq 0 ]] || { echo "run as root"; exit 1; }
tmp="$(mktemp)"; trap 'rm -f "$tmp"' EXIT
if command -v curl >/dev/null 2>&1; then curl -fsSL --retry 2 --max-time 60 "${BASE}/nxt-sub" -o "$tmp"; else wget -q -T 60 -O "$tmp" "${BASE}/nxt-sub"; fi
head -1 "$tmp" | grep -q '^#!/usr/bin/env bash' && bash -n "$tmp" || { echo "Downloaded CLI is invalid"; exit 1; }
install -m 755 "$tmp" /usr/local/bin/nxt-sub; cp -f /usr/local/bin/nxt-sub /usr/bin/nxt-sub 2>/dev/null || true; hash -r 2>/dev/null || true
echo "CLI installed: nxt-sub  (v3.1, ref ${REF})"
exec /usr/local/bin/nxt-sub
