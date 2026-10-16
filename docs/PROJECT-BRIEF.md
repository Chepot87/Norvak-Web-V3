# Project brief

## Purpose

Build Norvak Web’s third portfolio website as a clear, personal introduction to José Cortés and his independent web development services. Help prospective small-business clients understand the offer, inspect relevant work, and start a conversation.

## Audience

Small-business owners and independent service providers, with a local focus on Winter Haven, Polk County, and Central Florida. English and Spanish visitors should both be able to understand and navigate the site.

## Content and pages

| Page | Content |
| --- | --- |
| Home | Offer, selected projects, services overview, introduction, contact action |
| Work | Curated portfolio, contribution, relevant features, working project links |
| Services | Website builds, refreshes, launch support, and maintenance scope |
| About | José’s background, approach, and the story behind Norvak |
| Contact | Business email and a clear project inquiry path |

Use first-person copy for an independent developer. Identify client projects, personal work, and previews accurately. Publish no invented testimonials, results, delivery promises, or conversion metrics.

## Source layout

| Path | Responsibility |
| --- | --- |
| `index.html` | Home |
| `work.html` | Work |
| `services.html` | Services |
| `about.html` | About |
| `contact.html` | Contact |
| `styles.css` | Shared styles and responsive layout |
| `script.js` | Navigation, language switching, and other enhancements |
| `assets/` | Brand assets and project imagery |
| `assets/fonts/` | Self-hosted fonts and their licenses, if used |

The existing website is the V3 starting point. Its pages, CSS, JavaScript, and required assets were imported without redesigning them. The flat layout preserves their existing relative paths and keeps direct editing simple.

## Implementation expectations

- Keep HTML, CSS, and JavaScript readable, with consistent formatting.
- Use semantic landmarks, descriptive page titles, visible form labels, and useful image alternatives.
- Support keyboard navigation, visible focus, reduced motion, and readable contrast.
- Keep navigation usable when JavaScript is unavailable where practical.
- Preserve English/Spanish content consistently across pages.
- Use responsive imagery with explicit dimensions and deferred loading below the first screen.
- Keep secrets, local machine settings, and downloaded archives out of Git.
- Treat a message composer as a composer; only claim delivery after a connected backend confirms it.

## Current scope

The repository foundation and website source are available. Review and refine the imported site in VS Code, then choose and configure the deployment host.

The separately hosted reference website stays unchanged. Repository setup does not replace or redeploy that site.
