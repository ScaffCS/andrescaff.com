# andrescaff.com

Personal portfolio & consulting site for André Scaff.

## CRITICAL: PUBLIC REPOSITORY

This is a **PUBLIC GitHub repo**. Anyone can see the code.

**NEVER commit:**
- API keys, tokens, or secrets of any kind
- Passwords or credentials
- Phone numbers (WhatsApp, personal)
- Email addresses (personal)
- Financial information (pricing, revenue, bank details)
- .env files (only .env.example with empty values)
- Any file containing personal data

**ALWAYS double-check before committing:**
- Run `git diff --staged` to review what's being committed
- Verify no hardcoded secrets in source files
- Environment variables go in .env.local (gitignored), referenced via `process.env`
- Use .env.example to document required variables with empty values only

## Project

- **Domain:** andrescaff.com
- **Purpose:** Portfolio-first personal site with consulting section as second level
- **Brand doc:** `D:\Scaff.com\Proposta marca\proposta-marca-scaff-v3.md`

## Stack

- Next.js 16 (App Router) + TypeScript (strict)
- Tailwind CSS 4
- Vercel deployment (auto-deploy from main branch)
- Inter + JetBrains Mono (Google Fonts via next/font)

## Design Tokens

Defined in `src/app/globals.css`. Dark mode by default.

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0F1117` | Main background |
| `--bg-secondary` | `#1A1D27` | Cards, sections |
| `--text-primary` | `#E8E8ED` | Main text |
| `--text-secondary` | `#8B8FA3` | Secondary text |
| `--accent-teal` | `#00D4AA` | CTAs, highlights |
| `--accent-amber` | `#F5A623` | Warm accents |

## Site Structure

```
/ (Home) — hero + featured portfolio + about preview + credentials + consulting CTA
/sobre — story in 4 acts + philosophy
/portfolio — main page: product career + AI/code projects + community
/consultoria — 3 tracks (startups, logtech, logistics digitalization)
/contato — form + WhatsApp + Calendly
```

## Commands

```bash
npm run dev      # Local development
npm run build    # Production build (run before every deploy)
npm run lint     # ESLint check
```
