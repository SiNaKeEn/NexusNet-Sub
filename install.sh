#!/usr/bin/env bash
# bash <(curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Themes/install.sh)
set -euo pipefail
REF="${NXT_REF:-Themes}"
BASE="${NXT_BASE:-https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/${REF}}"
[[ ${EUID} -eq 0 ]] || { echo "sudo bash install.sh"; exit 1; }
tmp="$(mktemp)"; trap 'rm -f "$tmp"' EXIT
if command -v curl >/dev/null 2>&1; then curl -fsSL --retry 3 --max-time 90 "${BASE}/nxt-sub" -o "$tmp"
elif command -v wget >/dev/null 2>&1; then wget -q -T 90 -O "$tmp" "${BASE}/nxt-sub"
else echo "need curl/wget"; exit 1; fi
head -1 "$tmp" | grep -q '^#!/usr/bin/env bash' || { echo "bad download"; exit 1; }
bash -n "$tmp" || { echo "syntax error"; exit 1; }
install -m 755 "$tmp" /usr/local/bin/nxt-sub
cp -f /usr/local/bin/nxt-sub /usr/bin/nxt-sub 2>/dev/null || true
echo "nxt-sub $(/usr/local/bin/nxt-sub version)"
exec nxt-sub
