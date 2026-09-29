#!/usr/bin/env bash
set -euo pipefail
REPO_RAW="https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Themes"
RED='\033[0;31m'; GREEN='\033[0;32m'; CYAN='\033[0;36m'; YELLOW='\033[1;33m'; NC='\033[0m'
echo -e "${CYAN}"
echo "  ========================================"
echo "       NexusNet  Theme  Installer"
echo "  ========================================"
echo -e "${NC}"
[[ "${EUID}" -eq 0 ]] || { echo -e "${RED}run as root${NC}"; exit 1; }
dl(){ echo -e "${YELLOW}Downloading...${NC}"; command -v curl >/dev/null && curl -fsSL "$1" -o "$2" || wget -q -O "$2" "$1"; }
dl "${REPO_RAW}/nexusnetsub" /usr/local/bin/nexusnetsub
chmod +x /usr/local/bin/nexusnetsub
echo -e "${GREEN}CLI: nexusnetsub${NC}"
echo ""
echo -e "${CYAN}Select Panel:${NC}"
echo "  1) 3x-ui / Sanaei"
echo "  2) PasarGuard"
echo -n "Choice [1-2]: "
read -r p
if [[ "$p" == "1" ]]; then
  mkdir -p /etc/x-ui/sub
  dl "${REPO_RAW}/xui-nexusnet.html" /etc/x-ui/sub/sub.html
  chmod 644 /etc/x-ui/sub/sub.html
  echo -e "${GREEN}OK /etc/x-ui/sub/sub.html${NC}"
elif [[ "$p" == "2" ]]; then
  mkdir -p /var/lib/pasarguard/templates/subscription
  dl "${REPO_RAW}/pasarguard-nexusnet.html" /var/lib/pasarguard/templates/subscription/index.html
  chmod 644 /var/lib/pasarguard/templates/subscription/index.html
  envf="/opt/pasarguard/.env"; mkdir -p "$(dirname "$envf")"; touch "$envf"
  grep -q '^CUSTOM_TEMPLATES_DIRECTORY=' "$envf" 2>/dev/null && sed -i 's|^CUSTOM_TEMPLATES_DIRECTORY=.*|CUSTOM_TEMPLATES_DIRECTORY="/var/lib/pasarguard/templates/"|' "$envf" || echo 'CUSTOM_TEMPLATES_DIRECTORY="/var/lib/pasarguard/templates/"' >> "$envf"
  grep -q '^SUBSCRIPTION_PAGE_TEMPLATE=' "$envf" 2>/dev/null && sed -i 's|^SUBSCRIPTION_PAGE_TEMPLATE=.*|SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"|' "$envf" || echo 'SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"' >> "$envf"
  command -v pasarguard >/dev/null 2>&1 && pasarguard restart || true
  echo -e "${GREEN}OK PasarGuard${NC}"
else
  echo -e "${RED}Invalid${NC}"; exit 1
fi
echo -e "${GREEN}Done${NC}"
