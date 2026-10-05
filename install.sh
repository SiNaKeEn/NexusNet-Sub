#!/usr/bin/env bash
set -euo pipefail
# NexusNet Sub v2.2 — CLI: nxt-sub
REPO_RAW="https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Template"
RED='\033[0;31m'; GREEN='\033[0;32m'; CYAN='\033[0;36m'; YELLOW='\033[1;33m'; NC='\033[0m'
echo -e "${CYAN}"
echo "  ========================================"
echo "     NexusNet Theme Installer  v2.2"
echo "  ========================================"
echo -e "${NC}"
[[ "${EUID}" -eq 0 ]] || { echo -e "${RED}run as root${NC}"; exit 1; }
dl(){ echo -e "${YELLOW}Downloading...${NC}"; command -v curl >/dev/null && curl -fsSL "$1" -o "$2" || wget -q -O "$2" "$1"; }


CFG_DIR="/etc/nxt-sub"
CFG_FILE="${CFG_DIR}/config"

load_cfg() {
  PROFILE_TITLE=""; SUPPORT_URL=""; RENEW_URL=""; TELEGRAM_BOT=""
  [[ -f "$CFG_FILE" ]] && # shellcheck source
  source "$CFG_FILE" 2>/dev/null || true
  # derive renew from bot if empty
  if [[ -z "${RENEW_URL:-}" && -n "${TELEGRAM_BOT:-}" ]]; then
    local bot="${TELEGRAM_BOT#@}"
    RENEW_URL="https://t.me/${bot}"
  fi
  if [[ -z "${SUPPORT_URL:-}" && -n "${TELEGRAM_BOT:-}" ]]; then
    local bot2="${TELEGRAM_BOT#@}"
    SUPPORT_URL="https://t.me/${bot2}"
  fi
}

save_cfg() {
  mkdir -p "$CFG_DIR"
  cat > "$CFG_FILE" << EOF
# NexusNet Sub config — managed by nxt-sub
PROFILE_TITLE="${PROFILE_TITLE:-}"
SUPPORT_URL="${SUPPORT_URL:-}"
RENEW_URL="${RENEW_URL:-}"
TELEGRAM_BOT="${TELEGRAM_BOT:-}"
EOF
  chmod 600 "$CFG_FILE"
  echo -e "${GREEN}Saved ${CFG_FILE}${NC}"
}

# Inject CONFIG into a theme HTML file
inject_theme() {
  local file="$1"
  load_cfg
  [[ -f "$file" ]] || return 1
  # escape for sed
  local pt="${PROFILE_TITLE//\\/\\\\}"; pt="${pt//\//\\/}"; pt="${pt//&/\\&}"
  local su="${SUPPORT_URL//\\/\\\\}"; su="${su//\//\\/}"; su="${su//&/\\&}"
  local ru="${RENEW_URL//\\/\\\\}"; ru="${ru//\//\\/}"; ru="${ru//&/\\&}"
  # replace profileTitle / supportUrl / renewUrl values inside CONFIG block
  sed -i -E \
    -e "s|(profileTitle:[[:space:]]*\")[^\"]*(\")|\\1${pt}\\2|" \
    -e "s|(supportUrl:[[:space:]]*\")[^\"]*(\")|\\1${su}\\2|" \
    -e "s|(renewUrl:[[:space:]]*\")[^\"]*(\")|\\1${ru}\\2|" \
    "$file"
}


# Install CLI to BOTH paths for reliability
dl "${REPO_RAW}/nxt-sub" /usr/local/bin/nxt-sub
chmod 755 /usr/local/bin/nxt-sub
# also /usr/bin for PATH issues
cp -f /usr/local/bin/nxt-sub /usr/bin/nxt-sub 2>/dev/null || true
chmod 755 /usr/bin/nxt-sub 2>/dev/null || true
hash -r 2>/dev/null || true
echo -e "${GREEN}CLI installed: nxt-sub${NC}"
echo -e "  Try: ${CYAN}nxt-sub${NC}  or  ${CYAN}/usr/local/bin/nxt-sub${NC}"

echo ""
echo -e "${CYAN}Select Panel:${NC}"
echo "  1) 3x-ui / Sanaei"
echo "  2) PasarGuard"
echo -n "Choice [1-2]: "
read -r p

backup(){
  local f="$1"
  if [[ -f "$f" ]]; then
    cp -a "$f" "${f}.bak.$(date +%Y%m%d%H%M%S)"
    echo -e "${GREEN}Backup created${NC}"
  fi
}

if [[ "$p" == "1" ]]; then
  mkdir -p /etc/x-ui/sub
  backup /etc/x-ui/sub/sub.html
  dl "${REPO_RAW}/xui-nexusnet.html" /etc/x-ui/sub/sub.html
  chmod 644 /etc/x-ui/sub/sub.html
  inject_theme /etc/x-ui/sub/sub.html
  echo -e "${GREEN}OK /etc/x-ui/sub/sub.html${NC}"
  echo -e "${CYAN}Set Sub Theme Directory = /etc/x-ui/sub/${NC}"
elif [[ "$p" == "2" ]]; then
  mkdir -p /var/lib/pasarguard/templates/subscription
  backup /var/lib/pasarguard/templates/subscription/index.html
  dl "${REPO_RAW}/pasarguard-nexusnet.html" /var/lib/pasarguard/templates/subscription/index.html
  chmod 644 /var/lib/pasarguard/templates/subscription/index.html
  inject_theme /var/lib/pasarguard/templates/subscription/index.html
  envf="/opt/pasarguard/.env"; mkdir -p "$(dirname "$envf")"; touch "$envf"
  grep -q '^CUSTOM_TEMPLATES_DIRECTORY=' "$envf" 2>/dev/null && sed -i 's|^CUSTOM_TEMPLATES_DIRECTORY=.*|CUSTOM_TEMPLATES_DIRECTORY="/var/lib/pasarguard/templates/"|' "$envf" || echo 'CUSTOM_TEMPLATES_DIRECTORY="/var/lib/pasarguard/templates/"' >> "$envf"
  grep -q '^SUBSCRIPTION_PAGE_TEMPLATE=' "$envf" 2>/dev/null && sed -i 's|^SUBSCRIPTION_PAGE_TEMPLATE=.*|SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"|' "$envf" || echo 'SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"' >> "$envf"
  command -v pasarguard >/dev/null 2>&1 && pasarguard restart || true
  echo -e "${GREEN}OK PasarGuard${NC}"
else
  echo -e "${RED}Invalid${NC}"; exit 1
fi
echo -e "${GREEN}Done. Run: nxt-sub${NC}"
