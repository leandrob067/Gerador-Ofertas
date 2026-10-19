#!/bin/bash
# Garante o CLI do Ruflo em sessões na nuvem (o container é recriado a cada sessão).
set -euo pipefail
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi
if ! command -v ruflo >/dev/null 2>&1; then
  npm install -g ruflo@latest >/dev/null 2>&1
fi
