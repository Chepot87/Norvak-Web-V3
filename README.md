# Norvak Web · V3

**Independent web design and front-end development by José Cortés.**

Modern, functional websites that load fast and feel good.

Norvak Web is my independent web development brand, based in Winter Haven, Florida. I build websites for small businesses with a focus on clear information, visual identity, responsive layouts, and straightforward ways to get in touch.

This repository contains the editable source for the third version of my portfolio and services website.

## Project status

**Live on GitHub Pages: https://chepot87.github.io/Norvak-Web-V3/**

The existing five-page Norvak website has been imported as the starting point for V3, including its styles, bilingual interactions, project images, transparent logo assets, and self-hosted font. Further design changes can now be made directly in this repository.

V3 is the primary client-facing website. The earlier ChatGPT-hosted preview is a separate deployment and is no longer the address to promote. Norvak-Links should send visitors to the GitHub Pages address above.

## Included features

- A clear introduction to Norvak and the services I offer.
- A portfolio of selected projects with honest descriptions of my work.
- Dedicated Home, Work, Services, About, and Contact pages.
- English and Spanish content with consistent navigation.
- A responsive interface with accessible interactions and restrained neon accents.
- A project inquiry composer with email, WhatsApp, and copy-message options.

The contact page prepares a message for the visitor to review and send in their chosen app. It does not send email itself, store inquiry details on a server, or confirm delivery. External message delivery has not been tested by sending a message.

## Technical direction

The site uses **semantic HTML, CSS, and vanilla JavaScript**. No framework, dependency installation, or build step is required. Development uses VS Code, Git, and a local preview server. Manrope is self-hosted, with its OFL license included in `assets/fonts/`.

Any future dependency will be documented with its purpose and setup instructions.

## Repository guide

| Location | Purpose |
| --- | --- |
| `index.html` | Home |
| `work.html` | Portfolio and category filters |
| `services.html` | Services, process, and common questions |
| `about.html` | Developer introduction and approach |
| `contact.html` | Contact channels and message composer |
| `styles.css` | Shared styling and responsive layout |
| `script.js` | Language switching, mobile navigation, filters, and message preparation |
| `assets/` | Brand images, project imagery, font, and font license |
| [Project brief](docs/PROJECT-BRIEF.md) | Audience, scope, content, and planned structure |
| [Brand guide](docs/BRAND.md) | Palette, logo treatment, and visual direction |
| [Roadmap](docs/ROADMAP.md) | Work completed and the next milestones |
| [Contributing](CONTRIBUTING.md) | Working conventions and review expectations |
| `.github/` | Focused issue and pull request templates |
| `.vscode/` | Recommended editor configuration |

The HTML pages live together at the repository root so their relative links work both locally and under a hosted project path. There is no generated `dist/` directory to edit.

## Get started

```bash
git clone https://github.com/Chepot87/Norvak-Web-V3.git
cd Norvak-Web-V3
code .
```

In VS Code, install the recommended **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**. You can also open `index.html` directly in a browser; a local server is recommended for consistent behavior. The site is deployed on GitHub Pages from this repository. After pushing, wait for the Pages deployment to finish and verify the affected live pages.

## Editing guide

- **Words on the page:** edit the relevant `.html` file. Bilingual elements use `data-en` and `data-es`; update both, plus the visible English fallback text. The message composer’s labels and generated text live in `script.js`.
- **Colors, fonts, spacing, and backgrounds:** edit `styles.css`. The palette variables are near the top.
- **Logo and project images:** replace the matching files in `assets/`, or update their paths in the HTML.
- **Navigation, language, filters, and contact behavior:** edit `script.js`.

Language preference is stored locally in the visitor’s browser. This static site has no application backend or database.

## Verification

Before pushing changes, check internal links and asset paths, run `node --check script.js` if Node.js is available, and review the affected interactions. Check desktop and mobile layouts, keyboard navigation, and both languages before launch. A fresh visual review and external delivery check remain outstanding; see the [roadmap](docs/ROADMAP.md).

Page canonical URLs and social metadata use the V3 GitHub Pages address. Keep them aligned if the production domain changes.

## Selected projects

- [Respiro y Renuevo](https://github.com/Chepot87/Respiro-y-Renuevo) — a bilingual wellness website rebuild.
- [Red Muse Nail Studio](https://github.com/Chepot87/red-muse-v2) — a nail studio website with a visual portfolio.
- [App Rafa](https://github.com/Chepot87/App-Rafa) — a vocabulary app in Spanish, English, and Brazilian Portuguese, with adult-guided actions and sentence-building activities.
- [Piñata Paradise](https://github.com/Chepot87/pinata-paradise) — a custom piñata website with a product gallery and Instagram contact.

## Keeping the portfolio current

- Feature Red Muse V2, App Rafa, and Piñata Paradise on Home; keep Respiro clearly labeled as a development preview on Work.
- Before updating a project summary, read its current source and README, check the published demo, and preserve both English and Spanish copy.
- Link to one selected version per project; do not promote legacy Norvak versions or duplicate demos as separate projects.
- Recheck booking and contact configuration before describing a demo as a live business service.
- This is a manual maintenance checklist; project summaries do not update automatically.

## Author and contact

**José Cortés · Norvak Web**  
Winter Haven, Florida · English / Español  
[GitHub](https://github.com/Chepot87) · [Email](mailto:norvakweb@gmail.com) · [Instagram](https://www.instagram.com/norvakweb/)

For project inquiries, email **norvakweb@gmail.com**.

## Usage and attribution

No open-source license has been selected for this project. Brand artwork and project imagery are not offered as reusable assets. Any third-party fonts or other assets added during development will retain their license and attribution information.
