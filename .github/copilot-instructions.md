<!-- Copilot / AI agent instructions for dilawer.github.io -->
# Repo overview

This repository is a small static personal site. Key artifacts:

- `index.html` — single-page site containing layout, inline CSS, and a small script.
- `images/` — asset directory (example: `images/dilawer.png` referenced from `index.html`).

No package manager files, build system, or CI configs were found in the repository root during inspection.

**Big picture**

- This is a plain HTML/CSS site (no bundler). Edits are made directly in `index.html`.
- Images are kept under `images/` and referenced with relative paths (e.g. `images/dilawer.png`). Keep paths relative and preserve filenames when updating assets.

**What to do when editing**

- Prefer small, atomic PRs that update only related sections (content, styling, or assets).
- If you modify styling, note that most CSS is inline in `index.html` inside a `<style>` block — search for `:root` for color variables and the `.hero` section for the primary page chrome.
- When adding or replacing images, upload to `images/` and update the `src` attributes (no CDN infra detected).

Developer workflows (how to preview locally)

- Quick static server (recommended):

  - Start: `python3 -m http.server 8000` (from repo root)
  - Open: `http://localhost:8000`

- Alternative: use VS Code Live Server extension or `npx live-server` if you prefer Node tooling.

Project-specific conventions and patterns

- Single-file layout: major structure, styles, and behavior are contained in `index.html` (styles live in `<style>`, scripts in `<script>` at bottom). Avoid scattering CSS/JS into multiple files unless you add a minimal build/process and update the README.
- Styling variables: color tokens are defined in `:root` — reuse these rather than hardcoding colors for consistency.
- Sticky header behavior is implemented by toggling the `.sticky` class on `.hero` via a small scroll script near the bottom of `index.html`.

Integrations and external dependencies

- Google Analytics 4 is included via the async script tag near the top of `index.html` (property ID `G-B90NNFGHY7`). Be mindful when editing the `<head>`.
- Social/contact links target external services (GitHub, LinkedIn, mailto). No server-side integrations were found.

What the AI agent should do and examples

- When changing layout or CSS, update the block under `/* Root Colors */` and reuse `--accent` / `--accent-light` to keep look-and-feel consistent.
- Example: to replace the hero image, update:

  ` <img src="images/dilawer.png" alt="Dilawer Hussain" class="hero-img">`

- Example: to change the sticky header threshold, edit the scroll listener near the end of the file:

  `if (window.scrollY > 150) { hero.classList.add('sticky'); }`

- Avoid adding complex build pipelines unless requested. If you introduce Node tooling, include `package.json`, document `npm` scripts, and move CSS/JS into separate files.

Checklist for PRs from an AI agent

- Edit only required parts of `index.html` and any new assets in `images/`.
- Run local preview (see commands above) and confirm responsiveness at common widths (`480px`, `768px`, desktop).
- If modifying analytics or external links, point out the change in the PR description.

When unsure — ask the maintainer

- If changes affect deployment, branch strategy, or introduce build tooling, ask before committing. This repo appears to be a simple GitHub Pages-style static site; changing that impacts how the site is published.

Contact for clarifications

- Ask in the PR or open an issue with short context and a screenshot where relevant.

---
If you'd like, I can (a) add a short `README.md` describing local preview steps, (b) move inline CSS into `styles.css` and update `index.html`, or (c) create a minimal `package.json` + `npm` scripts — tell me which and I'll proceed.
