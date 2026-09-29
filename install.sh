#!/usr/bin/env bash
set -euo pipefail

# ============================================================
# NexusNet Subscription Theme Installer
# Supports: 3x-ui (Sanaei) and PasarGuard
# Themes:   Default | NexusNet
# Repo:     https://github.com/SiNaKeEn/NexusNet-Sub
# ============================================================

REPO_RAW="https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Themes"
RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_banner() {
  echo -e "${CYAN}"
  cat << 'BANNER'
  ========================================
       NexusNet  Theme  Installer
  ========================================
BANNER
  echo -e "${NC}"
}

need_root() {
  if [[ "${EUID}" -ne 0 ]]; then
    echo -e "${RED}Error: Please run as root (sudo).${NC}"
    exit 1
  fi
}

download_file() {
  local url="$1"
  local dest="$2"
  echo -e "${YELLOW}Downloading...${NC}"
  if command -v curl >/dev/null 2>&1; then
    curl -fsSL "$url" -o "$dest"
  elif command -v wget >/dev/null 2>&1; then
    wget -q -O "$dest" "$url"
  else
    echo -e "${RED}Error: neither curl nor wget found.${NC}"
    exit 1
  fi
}

install_xui() {
  local theme="$1"
  local install_dir="/etc/x-ui/sub"
  local install_file="${install_dir}/sub.html"
  local source_url="${REPO_RAW}/xui-${theme}.html"

  mkdir -p "$install_dir"
  chmod 755 "$install_dir"
  rm -f "$install_file"

  download_file "$source_url" "$install_file"

  if [[ -f "$install_file" ]]; then
    chmod 644 "$install_file"
    echo -e "${GREEN}Success: 3x-ui theme (${theme}) installed to ${install_file}${NC}"
    echo -e "${CYAN}Tip: In 3x-ui panel go to Settings > Subscription and set the custom template if needed.${NC}"
  else
    echo -e "${RED}Failed to install file.${NC}"
    exit 1
  fi
}

install_pasarguard() {
  local theme="$1"
  local install_dir="/var/lib/pasarguard/templates/subscription"
  local install_file="${install_dir}/index.html"
  local env_file="/opt/pasarguard/.env"
  local source_url="${REPO_RAW}/pasarguard-${theme}.html"

  mkdir -p "$install_dir"
  chmod 755 "$install_dir"
  rm -f "$install_file"

  download_file "$source_url" "$install_file"

  if [[ ! -f "$install_file" ]]; then
    echo -e "${RED}Failed to install file.${NC}"
    exit 1
  fi
  chmod 644 "$install_file"

  mkdir -p "$(dirname "$env_file")"
  touch "$env_file"

  if grep -q '^CUSTOM_TEMPLATES_DIRECTORY=' "$env_file" 2>/dev/null; then
    sed -i 's|^CUSTOM_TEMPLATES_DIRECTORY=.*|CUSTOM_TEMPLATES_DIRECTORY="/var/lib/pasarguard/templates/"|' "$env_file"
  else
    echo 'CUSTOM_TEMPLATES_DIRECTORY="/var/lib/pasarguard/templates/"' >> "$env_file"
  fi

  if grep -q '^SUBSCRIPTION_PAGE_TEMPLATE=' "$env_file" 2>/dev/null; then
    sed -i 's|^SUBSCRIPTION_PAGE_TEMPLATE=.*|SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"|' "$env_file"
  else
    echo 'SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"' >> "$env_file"
  fi

  echo -e "${GREEN}Success: PasarGuard theme (${theme}) installed to ${install_file}${NC}"

  if command -v pasarguard >/dev/null 2>&1; then
    pasarguard restart
    echo -e "${GREEN}PasarGuard restarted.${NC}"
  else
    echo -e "${YELLOW}Warning: pasarguard command not found. Restart the service manually.${NC}"
  fi
}

main() {
  print_banner
  need_root

  echo -e "${CYAN}Select Panel:${NC}"
  echo "  1) 3x-ui / Sanaei"
  echo "  2) PasarGuard"
  echo -n "Choice [1-2]: "
  read -r panel_choice

  case "$panel_choice" in
    1) PANEL="xui" ;;
    2) PANEL="pasarguard" ;;
    *) echo -e "${RED}Invalid choice.${NC}"; exit 1 ;;
  esac

  echo ""
  echo -e "${CYAN}Select Theme:${NC}"
  echo "  1) Default  - Clean generic theme (recommended for public use)"
  echo "  2) NexusNet - Branded cyan/blue neon theme"
  echo -n "Choice [1-2]: "
  read -r theme_choice

  case "$theme_choice" in
    1) THEME="default" ;;
    2) THEME="nexusnet" ;;
    *) echo -e "${RED}Invalid choice.${NC}"; exit 1 ;;
  esac

  echo ""
  echo -e "${YELLOW}Installing panel=${PANEL} theme=${THEME} ...${NC}"
  echo ""

  if [[ "$PANEL" == "xui" ]]; then
    install_xui "$THEME"
  else
    install_pasarguard "$THEME"
  fi

  echo ""
  echo -e "${GREEN}Done!${NC}"
  echo -e "Repo: https://github.com/SiNaKeEn/NexusNet-Sub"
}

main "$@"
