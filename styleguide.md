# L’Oréal Branding Guidelines

## 🎯 Brand Purpose
- **Core Purpose Statement**: *"Create the beauty that moves the world."*  
- Originated in 2021 as a unified rallying call across all L’Oréal entities :contentReference[oaicite:1]{index=1}.

## Visual Identity

### 🔵 Iconic "O" Motif
- The “O” from **L’Oréal** logo and the shape from their first product ad form the basis of a rallying icon-inspired visual device :contentReference[oaicite:2]{index=2}.
- This motif should be used as a **consistent design element across headers, overlays, and brand-device backdrops**.

### 🎨 Primary Colour Palette
- **Black** and **white** remain core.  
- **Vibrant red** added for **bold contrast**, reflecting L’Oréal's energy and passion :contentReference[oaicite:3]{index=3}.

#### Color Use Guidelines:
- **Black (#000000)**: primary text and core branding.
- **White (#FFFFFF)**: background, whitespace.
- **Vibrant Red** (exact brand hex to be defined): for accents, CTA buttons, highlights.

### 🖋️ Typography
- Typeface families include **serif** and **sans-serif** for flexibility.
- A **custom script font**, inspired by founder Eugène Schueller’s handwriting, adds personal character :contentReference[oaicite:4]{index=4}.

#### Implementation rules:
- Heading text: **Serif** preferred (elegant, refined).
- Body text: **Sans-serif** for readability across devices.
- Highlights or brand-signature quotes: **Script font**.

## Tone & Aesthetic
- **Bold and simple**—with attention to a "sophisticated but fragile subtlety" :contentReference[oaicite:5]{index=5}.
- Clean layouts, strong contrast, precise spacing, restrained graphic flourishes.

## Usage Guidance for AI
- Always include the **“O” motif** when generating page headers, load-screens, or section dividers.
- **Color scheme**: use black (#000), white (#FFF), and vibrant red strategically (e.g. hover states, CTAs).
- **Typography**:
  - Headings ➝ serif (e.g. Playfair Display, Times New Roman)
  - Body copy ➝ sans-serif (e.g. Helvetica, Arial)
  - Emphasis/citations ➝ script font
- **Maintain visual harmony** across all pages: consistent margins, alignment, spacing.
- **Accessibility support**:
  - Ensure high contrast for text & UI elements.
  - Provide pause controls for auto-played media, and increased contrast mode availability.

---

## Checklist: When Updating a Site

| Component         | Requirement                                                                 |
|------------------|------------------------------------------------------------------------------|
| Logo/branding     | Incorporate “O” motif in design                                                 |
| Colors            | Use black, white + vibrant red consistently                                    |
| Typography        | Serif for headings, sans-serif for body, script for accents                   |
| Visual contrast   | Bold visuals with subtle sophistication                                       |
| Accessibility     | High contrast, media controls, readable type sizes                            |
| Layout            | Clean structure, consistent spacing, alignment                                |

---

## Example Implementation (CSS-style)

```css
:root {
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-red: /* Replace with exact hex code */;
}

body {
  font-family: 'Helvetica, Arial, sans-serif';
  color: var(--brand-black);
  background-color: var(--brand-white);
}

h1, h2, h3 {
  font-family: 'Playfair Display, serif';
}

em, .script {
  font-family: 'SchuellerScript, cursive';
  color: var(--brand-red);
}

a, .btn-primary {
  color: var(--brand-white);
  background-color: var(--brand-red);
}

header::before {
  content: url('path/to/o-motif.svg');
  display: block;
}

.high-contrast-mode {
  filter: contrast(150%);
}
