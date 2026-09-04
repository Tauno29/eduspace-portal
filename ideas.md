# EduSpace design direction

## Three initial directions

### Theme Name: Indigo Civic OS
**Very Brief Intro:** A crisp public-service portal translated through a premium product lens: dark utility header, ivory canvas, and signal-indigo interactions. It feels official without feeling bureaucratic.
**Probability:** 0.07

### Theme Name: Sunlit Campus Journal
**Very Brief Intro:** A warmer editorial direction built around sand, paper, campus photography, and handwritten-feeling annotations. It makes the product feel human, local, and trusted by families.
**Probability:** 0.04

### Theme Name: Signal Atlas
**Very Brief Intro:** A restrained data-visualization aesthetic using cartographic linework, region markers, and cobalt status signals. It frames school availability as a national coordination layer.
**Probability:** 0.08

## Chosen direction: Indigo Civic OS

### Design Movement
A contemporary civic-tech interpretation of **Swiss International Style** and **neo-brutalist product UI**, softened with Apple-like material depth. The system should feel as if an official national service got a meticulous software redesign: direct, legible, disciplined, and quietly premium.

### Core Principles
1. **Clarity before decoration:** every block earns its place by making school placement easier to understand or act on.
2. **Civic confidence:** use dark ink surfaces, precise labels, and explicit status cues to communicate official trust.
3. **Useful asymmetry:** favor split layouts, offset cards, and directional composition over a centered marketing stack.
4. **Soft signal, not spectacle:** indigo/violet accents should guide attention, while glass, grain, and shadows provide depth without visual noise.

### Color Philosophy
The primary canvas is warm ivory rather than pure white, creating a calmer, more human reading field for parents and educators. Deep ink/navy anchors navigation and gives the product official weight. Signature indigo signals action and availability, violet adds a digital layer to the education service, teal marks live/healthy status, and sand-gold connects the screen to Namibia's daylight and landscape. Color is functional: indigo = action, teal = live/open, amber = attention, ink = trust.

### Layout Paradigm
A **rail-and-canvas** composition: a dark sticky utility rail at the top, then broad editorial sections where content is offset into purposeful columns. Hero copy occupies the left third while the phone/product visual breaks out on the right. Feature cards use a varied 2+3 rhythm rather than identical tiles. The region snapshot behaves like a horizontal control room strip. FAQ is a narrow reading column paired with a side note, not a generic full-width accordion.

### Signature Elements
- **Signal rail:** tiny uppercase labels, live dots, and thin rules that make the site feel like a dependable service console.
- **Glass folios:** translucent cards with clipped corner details, soft shadows, and small indigo edge marks.
- **Atlas traces:** quiet map lines, region nodes, and directional arrows used as background texture and section punctuation.

### Interaction Philosophy
Interactions should feel like operating a reliable public utility: immediate, explicit, and low-drama. Buttons compress slightly on press, cards lift only a few pixels on hover, accordions open with a restrained slide/fade, and the mobile menu is a clean utility drawer. Every important action has a visible label and an accessible focus state.

### Animation
Use 180–260ms ease-out transitions for buttons, links, accordion rows, and cards. On first load, reveal the hero copy and device in separate 60ms staggered steps using only opacity and translateY/translateX. The phone visual may use a very subtle 6-second float, but it must stop under `prefers-reduced-motion`. Avoid continuous glowing effects and avoid animating layout dimensions.

### Typography System
Use **Plus Jakarta Sans** for display headlines and **Inter** for interface labels/body copy. Headlines are compact, weight 700–800, with a slightly tight tracking; body is 15–18px, 1.6 line-height, and high-contrast ink. Utility labels use 11–12px uppercase with 0.14em tracking. Numbers in availability stats use a tabular-looking bold weight and tighter letter spacing.

### Brand Essence
EduSpace is Namibia's official school placement signal for parents, learners, and educators who need to find the next available place without guesswork. **Personality:** grounded, capable, forward-looking.

### Brand Voice
Headlines are direct and high-agency. CTAs say exactly what will happen. Microcopy is calm, specific, and reassuring without overpromising or sounding like ad copy.

Example lines:
- “See where space is open before you apply.”
- “A clearer next step for every learner.”

### Wordmark & Logo
Use a custom geometric symbol that combines an open doorway, a map pin, and a rising page shape. The mark should sit in a small indigo-to-violet rounded square beside the EduSpace wordmark; the wordmark itself is set in Plus Jakarta Sans ExtraBold with a custom shortened crossbar on the ‘A’ in the supporting label treatment, never in a default browser font.

### Signature Brand Color
**Signal Indigo — `#4F46E5`**. It is familiar enough to communicate digital action, but ownable when paired with deep ink, warm ivory, teal live states, and sand-gold details.

## Style Decisions
- Keep all major page sections anchored to warm ivory and deep ink; do not introduce a purple gradient as a page-wide wash.
- Use generated visuals only where they explain or establish the product: the device mockup in the hero, the map texture in the region section, and the campus collage as a secondary visual.
- Reserve rounded corners for cards and controls with a 16–28px range; keep the outer page structure square/architectural.
- Keep the primary CTA action-led: “Download Android APK”.
- Treat the APK URL as a single shared constant so the user can replace it when the file is supplied.

## Style Decisions

- Display headlines use Plus Jakarta Sans at bold display scale with tight but readable spacing; if compression reduces word clarity, civic legibility wins over visual density.
- Every major section should include at least one official-service cue — rule, signal label, live dot, region marker, tabular row, or atlas trace — so the civic OS identity is carried by system language rather than decorative gradients.
- Ivory canvas sections should avoid generic equal-card SaaS grids; use rail-and-canvas asymmetry, editorial offsets, and control-room/table rhythms as the default composition language.
- The feature system uses offset rows, color-coded rule accents, and restrained radii so the cards read as a coordinated service console rather than interchangeable marketing tiles.
