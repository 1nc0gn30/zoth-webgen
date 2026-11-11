# Zoth Bolt (`zoth-webgen`)

Local-first AI web application workbench, motion template engine, and 18-tool Model Context Protocol (MCP) server built on the open-source [`bolt.diy`](https://github.com/stackblitz-labs/bolt.diy) foundation for Zoth Studio and ZothOS.

- **Remix / WebContainer IDE**: `127.0.0.1:5173`
- **QuickSite Lightweight HTTP Synthesizer (`server.py`)**: `127.0.0.1:8092`

---

## Architecture & Capabilities

1. **Multi-Provider & Local CLI Routing**:
   - Supports 23+ OpenAI/Anthropic/Gemini/OpenRouter/DeepSeek cloud endpoints, local Ollama (`127.0.0.1:11434`) and LM Studio servers, plus local CLI agents (`agy`, `hermes`, `claude-cli`, `opencode`, `cline`, `aider`, `codex-cli`, `gemini-cli`, and deterministic `<50ms` `zoth-bolt-instant`).
2. **Motion & Shader Seeding**:
   - Ships six deterministic HTML5/Canvas/SVG motion templates: 15-second launch showreel, Unicode `U+2800` Braille / Bayer 4x4 dither shader stage, 16-bit pixel arcade stage, isometric multi-layer SVG exploded view, neighborhood commerce drop, and open-access client-side SaaS utility.
3. **Asset Vault & Live URL Blueprinting**:
   - Queries 200,000+ Iconify vector icons, built-in 16x16 crisp-edge pixel SVGs, procedural WebAudio cues, and `/api/zoth/url-blueprint` DOM/palette/typography extraction.
4. **Automated Production Guardrail (`ZothGuardrailBar` & `/api/zoth/self-critique`)**:
   - Audits workspace HTML against an 8-point checklist (`robots.txt`, `netlify.toml`, `Schema.org @graph` with `WebApplication` + `FAQPage`, OpenGraph headers, `alt` attribute coverage, viewport meta, and attribution) with single-click auto-remediation.

---

## Installation & Local Execution

### Full Remix + WebContainer Workbench (`:5173`)

```bash
git clone https://github.com/1nc0gn30/zoth-webgen.git
cd zoth-webgen
pnpm install
pnpm run dev
```

### Lightweight QuickSite Daemon (`:8092`)

```bash
python3 server.py
curl -s http://127.0.0.1:8092/health
```

### ZothOS CLI Wrapper

```bash
bolt.diy --status
bolt.diy --json
bolt providers
bolt templates
```

---

## MCP Server Integration (18 Tools)

Register `packages/mcp-server/index.mjs` in Claude Code, Cursor, Hermes, or `agy`:

```json
{
  "mcpServers": {
    "zoth-bolt": {
      "command": "node",
      "args": ["/path/to/zoth-webgen/packages/mcp-server/index.mjs"],
      "env": {
        "WEBGEN_BASE_URL": "http://127.0.0.1:5173"
      }
    }
  }
}
```

Exposed tools:
- `zoth_bolt_search_free_icons`, `zoth_bolt_get_svg_pixel_library`, `zoth_bolt_list_motion_templates`, `zoth_bolt_deconstruct_live_url`, `zoth_bolt_self_critique_and_polish`
- `webgen_set_prompt`, `webgen_trigger_submit`, `webgen_prompt_and_build`, `webgen_run_tool`, `webgen_select_framework`, `webgen_apply_design_preset`, `webgen_get_design_catalog`, `webgen_insert_media_pack`, `webgen_get_status`, `webgen_list_files`, `webgen_read_file`, `webgen_write_file`, `webgen_get_preview_url`

---

## Verification & Tests

```bash
pnpm run typecheck
pnpm run lint
pnpm run test
gitleaks detect --source . --no-banner --redact
```

---

## Lineage, License & Support

- **Foundation**: Built on open-source [`bolt.diy`](https://github.com/stackblitz-labs/bolt.diy) (MIT License).
- **Open Access**: 100% free and unlocked by default with zero paywalls, zero license modals, and zero telemetry locks.
- **Support**: [Buy Us a Coffee via Stripe](https://buy.stripe.com/3cIfZg27PdKo2D64Ocfw40X)

Engineered by **1nc0gn30** ([@1nc0gn30](https://github.com/1nc0gn30) · [1nc0gn30.si](https://1nc0gn30.si)) · [NullAI Platform](https://nullai.tech) · [Zoth Studio](https://zoth.nullai.tech)
