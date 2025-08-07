# Us In Context CMS

React-based Content Management System for "Us In Context" - independent UK economics media brand.

## Features

- Track and manage 134+ content pieces across 7 social platforms
- Progress tracking and task completion
- Export functionality
- Responsive design with Tailwind CSS

## Tech Stack

- React 18
- Vite
- Tailwind CSS (via CDN)
- Lucide React icons

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Content Structure

- **X-Twitter**: 28 posts (4 weeks × 7 daily posts)
- **Instagram**: 28 posts (4 weeks × 7 posts)  
- **Facebook**: 28 posts (4 weeks × 7 posts)
- **LinkedIn**: 12 posts (4 weeks × 3 weekly posts)
- **Website**: 12 articles (4 weeks × 3 articles)
- **YouTube**: 12 videos (4 weeks × 3 videos)
- **TikTok**: 4 videos (1 per week)

**Total: 134 content pieces**

## Deployment

Deploy the `dist/` folder to any static hosting service:
- Netlify (drag & drop)
- Vercel (connect GitHub)
- Traditional hosting (upload dist/ contents)

No backend needed - everything runs client-side with local state.
