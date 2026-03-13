# Arbind Das — Portfolio

A "Terminal Luxe" aesthetic portfolio built with React + Vite.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your images to src/assets/
#    Required files:
#    - profile-pic.png
#    - jeevan2.png
#    - anish.png
#    - motilaal.png

# 3. Start development server
npm run dev

# 4. Open http://localhost:5173
```

## 📁 Project Structure

```
src/
├── assets/              # Images (profile-pic, testimonial photos)
├── hooks/               # Custom React hooks
│   ├── useInView.js     # IntersectionObserver hook
│   ├── useScrollY.js    # Scroll position hook
│   ├── useWindowWidth.js# Responsive breakpoint hook
│   ├── useMouse.js      # Mouse position hook
│   └── index.js         # Barrel export
├── constants/           # Data / config
│   ├── nav.js           # NAV_LINKS
│   ├── hero.js          # HERO_ROLES
│   ├── skills.js        # SKILLS array
│   ├── projects.js      # PROJECTS array
│   ├── journey.js       # JOURNEY_ITEMS array
│   ├── testimonials.js  # TESTIMONIALS array
│   └── index.js         # Barrel export
├── components/          # Reusable UI components
│   ├── CustomCursor.jsx
│   ├── MagBtn.jsx       # Magnetic button
│   ├── Reveal.jsx       # Scroll-triggered reveal
│   ├── TiltCard.jsx     # 3D tilt on hover
│   ├── SectionChrome.jsx# Label + H2 primitives
│   ├── TagBadge.jsx     # Tech tag pill
│   ├── SkillBar.jsx     # Animated skill bar
│   ├── Avatar.jsx       # Profile photo with rings
│   ├── CodeBlock.jsx    # Fake Java code editor
│   ├── TypewriterHeading.jsx
│   ├── LoopingSubtitle.jsx
│   ├── MobileMenu.jsx
│   ├── ProjectModal.jsx
│   ├── ProjectCard.jsx
│   ├── Testimonials.jsx
│   ├── JourneyTimeline.jsx
│   └── index.js         # Barrel export
├── pages/               # Full page sections
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── JourneySection.jsx
│   ├── SkillsSection.jsx
│   ├── ProjectsSection.jsx
│   ├── ContactSection.jsx
│   └── index.js         # Barrel export
├── App.jsx              # Root: Nav + all sections + Footer
└── main.jsx             # React entry point
```

## 🛠 Build for Production

```bash
npm run build
# Output → dist/
```
