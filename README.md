# WriteFlow AI - Premium Landing Page

A stunning, premium landing page for an AI-powered content generation tool. Built with Next.js 16, TypeScript, Tailwind CSS v4.1, and Framer Motion.

## Features

### Design & Visual
- Modern, minimalist, tech-forward design
- Beautiful gradient theme (Purple #8B5CF6, Blue #3B82F6, Cyan #06B6D4)
- Smooth, professional animations powered by Framer Motion
- Glassmorphism effects and custom scrollbar
- Fully responsive, mobile-first design
- Dark mode support

### Sections
1. **Hero Section** - Full-screen hero with animated stats, gradient backgrounds, and CTAs
2. **Trusted By** - Company logos showcase
3. **Features** - 6 content type cards with icons and hover effects
4. **How It Works** - 3-step process with visual indicators
5. **Live Demo** - Interactive typewriter effect showing AI content generation
6. **Use Cases** - 4 persona cards with gradient accents
7. **Pricing** - 3 pricing tiers with popular badge and hover effects
8. **Testimonials** - Customer reviews with ratings and photos
9. **FAQ** - Accordion-style frequently asked questions
10. **Final CTA** - Conversion-focused call-to-action
11. **Footer** - Complete footer with links and social media

### Animations
- Fade-in and slide-up animations on scroll
- Counter animations for stats (0 → 50,000)
- Typewriter effect in live demo
- Hover effects with scale and glow
- Smooth transitions throughout
- Floating background elements

### Interactive Elements
- Functional "Watch Demo" modal with feature highlights
- "Start Free Trial" modal with form and loading states
- Toast notifications on form submission
- Responsive navigation and smooth scrolling
- Working accordion FAQ section

## Tech Stack

- **Next.js 16** - App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS v4.1** - Utility-first styling with custom configurations
- **Framer Motion** - Professional animations and transitions
- **React Hot Toast** - Beautiful toast notifications
- **Lucide React** - Clean, consistent icons

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
writeflow-ai/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Main landing page
│   │   └── globals.css          # Global styles and animations
│   └── components/
│       ├── ui/
│       │   ├── Button.tsx       # Reusable button component
│       │   └── Modal.tsx        # Reusable modal component
│       ├── Hero.tsx             # Hero section
│       ├── TrustedBy.tsx        # Company logos
│       ├── Features.tsx         # Feature cards
│       ├── HowItWorks.tsx       # Process steps
│       ├── LiveDemo.tsx         # Interactive demo
│       ├── UseCases.tsx         # Use case cards
│       ├── Pricing.tsx          # Pricing plans
│       ├── Testimonials.tsx     # Customer reviews
│       ├── FAQ.tsx              # FAQ accordion
│       ├── FinalCTA.tsx         # Final call-to-action
│       └── Footer.tsx           # Footer section
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Customization

### Colors
Edit the gradient colors in `src/app/globals.css`:
```css
:root {
  --primary-purple: #8B5CF6;
  --primary-blue: #3B82F6;
  --primary-cyan: #06B6D4;
}
```

### Content
- Update section content in individual component files
- Modify pricing plans in `src/components/Pricing.tsx`
- Edit testimonials in `src/components/Testimonials.tsx`
- Change FAQ items in `src/components/FAQ.tsx`

### SEO
Update metadata in `src/app/layout.tsx` for optimal SEO

## Performance

This landing page is optimized for performance:
- Server-side rendering with Next.js 16
- Optimized animations with Framer Motion
- Lazy loading of components
- Optimized images and assets
- Target: 100/100 Lighthouse score

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a demo project for portfolio purposes.

## Credits

- Design inspiration: Linear.app, Notion.so, Vercel.com
- Icons: Lucide React
- Fonts: Inter (Google Fonts)
- Images: Unsplash

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
