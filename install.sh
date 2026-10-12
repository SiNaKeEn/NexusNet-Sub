#!/usr/bin/env bash
# =============================================================================
#  NexusNet Sub — One-line Installer  v3.0.0
#  Usage:
#    bash <(curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Template/install.sh)
# =============================================================================
set -euo pipefail

REPO_RAW="https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Template"
VERSION="3.0.0"

RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
DIM='\033[2m'
NC='\033[0m'

echo -e "${CYAN}${BOLD}"
echo "  ╔══════════════════════════════════════════════╗"
echo "  ║        NexusNet Theme Installer  v${VERSION}       ║"
echo "  ╚══════════════════════════════════════════════╝"
echo -e "${NC}"

if [[ "${EUID}" -ne 0 ]]; then
  echo -e "${RED}Error: run as root${NC}"
  echo "  sudo bash <(curl -fsSL ${REPO_RAW}/install.sh)"
  exit 1
fi

dl() {
  local url="$1" dest="$2"
  local tmp
  tmp=$(mktemp)
  echo -e "  ${YELLOW}Downloading $(basename "$url")...${NC}"
  if command -v curl >/dev/null 2>&1; then
    curl -fsSL --connect-timeout 15 --max-time 60 "$url" -o "$tmp" || { rm -f "$tmp"; return 1; }
  elif command -v wget >/dev/null 2>&1; then
    wget -q --timeout=30 -O "$tmp" "$url" || { rm -f "$tmp"; return 1; }
  else
    echo -e "${RED}curl or wget required${NC}"
    return 1
  fi
  mv -f "$tmp" "$dest"
}

# Prefer files from this extracted release archive; use GitHub only for one-line installs.
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" 2>/dev/null && pwd -P || true)"
install_asset() {
  local name="$1" dest="$2"
  if [[ -n "${SCRIPT_DIR:-}" && -f "${SCRIPT_DIR}/${name}" ]]; then
    if [[ -f "${SCRIPT_DIR}/SHA256SUMS" ]] && command -v sha256sum >/dev/null 2>&1; then
      (cd "$SCRIPT_DIR" && sha256sum -c --status <(grep "  ${name}$" SHA256SUMS)) || { echo -e "${RED}Checksum failed for ${name}${NC}"; return 1; }
    fi
    local tmp
    tmp=$(mktemp "$(dirname "$dest")/.nxt-sub.XXXXXX")
    cp -- "${SCRIPT_DIR}/${name}" "$tmp"
    chmod 0644 "$tmp"
    mv -f "$tmp" "$dest"
  else
    dl "${REPO_RAW}/${name}" "$dest"
  fi
}

# Install CLI
echo -e "${CYAN}→ Installing nxt-sub CLI...${NC}"
install_asset "nxt-sub" /usr/local/bin/nxt-sub
chmod 755 /usr/local/bin/nxt-sub
cp -f /usr/local/bin/nxt-sub /usr/bin/nxt-sub 2>/dev/null || true
chmod 755 /usr/bin/nxt-sub 2>/dev/null || true
hash -r 2>/dev/null || true

echo -e "${GREEN}✓ CLI installed${NC}"
echo -e "  Run anytime:  ${CYAN}sudo nxt-sub${NC}"
echo ""

# Optional: quick install of a theme right now
echo -e "${CYAN}Install a theme now?${NC}"
echo "  1) 3x-ui / Sanaei"
echo "  2) PasarGuard"
echo "  3) Skip (open menu later with: sudo nxt-sub)"
echo ""
read -rp "  Choice [1-3]: " p

case "$p" in
  1)
    mkdir -p /etc/x-ui/sub
    if [[ -f /etc/x-ui/sub/sub.html ]]; then
      cp -a /etc/x-ui/sub/sub.html "/etc/x-ui/sub/sub.html.bak.$(date +%Y%m%d%H%M%S)"
      echo -e "  ${GREEN}Backup created${NC}"
    fi
    install_asset "xui-nexusnet.html" /etc/x-ui/sub/sub.html
    chmod 644 /etc/x-ui/sub/sub.html
    echo -e "${GREEN}✓ 3x-ui theme installed → /etc/x-ui/sub/sub.html${NC}"
    echo -e "  ${DIM}Set panel Sub Theme Directory = /etc/x-ui/sub/${NC}"
    ;;
  2)
    envf="/opt/pasarguard/.env"
    template_root="/var/lib/pasarguard/templates/"
    template_rel="subscription/index.html"
    if [[ -f "$envf" ]]; then
      configured=$(grep '^CUSTOM_TEMPLATES_DIRECTORY=' "$envf" | tail -n1 | cut -d= -f2- | sed 's/^"//;s/"$//;s/^\x27//;s/\x27$//')
      configured_template=$(grep '^SUBSCRIPTION_PAGE_TEMPLATE=' "$envf" | tail -n1 | cut -d= -f2- | sed 's/^"//;s/"$//;s/^\x27//;s/\x27$//')
      [[ -n "$configured" ]] && template_root="$configured"
      [[ -n "$configured_template" ]] && template_rel="$configured_template"
    fi
    template_root="${template_root%/}/"
    template_file="${template_root}${template_rel#/}"
    mkdir -p "$(dirname "$template_file")"
    if [[ -f "$template_file" ]]; then
      cp -a "$template_file" "$template_file.bak.$(date +%Y%m%d%H%M%S)"
      echo -e "  ${GREEN}Backup created${NC}"
    fi
    install_asset "pasarguard-nexusnet.html" "$template_file"
    chmod 644 "$template_file"

    envf="/opt/pasarguard/.env"
    mkdir -p "$(dirname "$envf")"
    touch "$envf"
    # Keep the host template path and template filename aligned with this package.
    if ! grep -q '^CUSTOM_TEMPLATES_DIRECTORY=' "$envf"; then
      printf '%s\n' 'CUSTOM_TEMPLATES_DIRECTORY="/var/lib/pasarguard/templates/"' >> "$envf"
    fi
    if ! grep -q '^SUBSCRIPTION_PAGE_TEMPLATE=' "$envf"; then
      printf '%s\n' 'SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"' >> "$envf"
    fi
    restarted=0
    if command -v pasarguard >/dev/null 2>&1 && pasarguard restart; then restarted=1; fi
    if [[ "$restarted" -eq 0 ]] && command -v docker >/dev/null 2>&1 && [[ -d /opt/pasarguard ]]; then
      if (cd /opt/pasarguard && docker compose ps --services 2>/dev/null | grep -qx 'pasarguard') && (cd /opt/pasarguard && docker compose restart pasarguard); then restarted=1; fi
    fi
    if [[ "$restarted" -eq 1 ]]; then
      echo -e "${GREEN}✓ PasarGuard theme installed and restart confirmed${NC}"
    else
      echo -e "${YELLOW}! Theme installed, but restart/mount activation could not be confirmed.${NC}"
    fi
    ;;
  3|*)
    echo -e "${YELLOW}Skipped theme install. Use: sudo nxt-sub${NC}"
    ;;
esac

echo ""
echo -e "${GREEN}${BOLD}Done!${NC}"
echo -e "  Manage everything with:  ${CYAN}sudo nxt-sub${NC}"
echo ""
