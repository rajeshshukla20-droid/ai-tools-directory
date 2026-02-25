# Development Guide

## Quick Start

### 1. Install Node.js
Visit [nodejs.org](https://nodejs.org) and download LTS version (18.17+)

### 2. Setup Project
```bash
# Navigate to project directory
cd d:\My Projects\AI Apps\ai-tools-directory

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local
```

### 3. Start Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Project Structure Guide

### Pages (src/app/)
Each page is a Route in Next.js App Router. Files named `page.tsx` become routes:
- `page.tsx` → `/`
- `tools/page.tsx` → `/tools`
- `tools/[id]/page.tsx` → `/tools/:id` (dynamic)

### Components (src/components/)
Reusable UI components organized by feature:
- **layout/**: Header, Footer, Sidebar
- **sections/**: Page sections (Hero, Features, etc.)
- **providers/**: Context providers and configuration

### Styling
- **Global Styles**: `src/globals.css` (Tailwind directives)
- **Component Styling**: Inline Tailwind classes
- **Dark Mode**: Handled by Next Themes

---

## Adding New Features

### Add a New Page

1. Create the file structure:
```bash
mkdir -p src/app/new-page
touch src/app/new-page/page.tsx
```

2. Add content to `page.tsx`:
```tsx
export default function NewPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold">Welcome</h1>
    </div>
  )
}
```

### Add a New Component

1. Create component file:
```bash
touch src/components/my-component.tsx
```

2. Structure:
```tsx
export default function MyComponent() {
  return (
    <div className="card">
      {/* Component content */}
    </div>
  )
}
```

### Add New Routes

Dynamic routes use `[param]` syntax:
```
src/app/tools/[id]/page.tsx → /tools/123
```

Access params with:
```tsx
interface PageProps {
  params: {
    id: string
  }
}

export default function ToolPage({ params }: PageProps) {
  // Use params.id
}
```

---

## Working with Data

### Using Sample Data
```tsx
import { SAMPLE_TOOLS } from '@/data/sample'

export default function Page() {
  return (
    <>
      {SAMPLE_TOOLS.map((tool) => (
        <div key={tool.id}>{tool.name}</div>
      ))}
    </>
  )
}
```

### Fetching from API (When Ready)
```tsx
async function getTools() {
  const res = await fetch('https://api.example.com/tools')
  return res.json()
}

export default async function ToolsPage() {
  const tools = await getTools()
  // Use tools data
}
```

### Database Integration
When you're ready to add a database:
1. Choose a database (MongoDB, PostgreSQL, etc.)
2. Create API routes in `src/app/api/`
3. Update data fetching logic

---

## Styling Guidelines

### Tailwind Classes Used

**Colors:**
```
bg-primary-600, text-primary-700, border-primary-200
dark:bg-neutral-900, dark:text-white
```

**Components:**
```
btn-primary, btn-secondary, btn-outline
card, input-field, badge
```

**Spacing:**
```
container-custom (responsive padding)
py-12 (vertical), px-6 (horizontal)
gap-6 (grid/flex gaps)
```

### Adding New Styles

Global component styles in `src/globals.css`:
```css
@layer components {
  .custom-button {
    @apply px-4 py-2 bg-primary-600 text-white rounded-lg;
  }
}
```

---

## API Structure (When Ready)

Create API routes in `src/app/api/`:

```bash
src/app/api/
├── tools/
│   ├── route.ts (GET /api/tools, POST new tool)
│   └── [id]/route.ts (GET /api/tools/:id)
├── categories/route.ts
├── blog/route.ts
└── contact/route.ts
```

Example API route:
```tsx
// src/app/api/tools/route.ts
export async function GET() {
  return Response.json({ tools: [] })
}

export async function POST(request: Request) {
  const data = await request.json()
  return Response.json({ success: true })
}
```

---

## Forms & Validation

Using React Hook Form:
```tsx
import { useForm } from 'react-hook-form'

export default function ContactForm() {
  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      <button type="submit">Submit</button>
    </form>
  )
}
```

---

## SEO & Meta Tags

### Page Meta Tags
```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  keywords: 'keyword1, keyword2',
}
```

### Open Graph (Sharing)
Add to metadata:
```tsx
openGraph: {
  title: 'Title',
  description: 'Description',
  type: 'website',
}
```

---

## Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
DATABASE_URL=your_database_url
```

Access in code:
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL
const dbUrl = process.env.DATABASE_URL
```

---

## TypeScript Tips

Use types for better development experience:

```tsx
import { Tool, Category } from '@/types'

export default function ToolList({ tools }: { tools: Tool[] }) {
  return (
    <>
      {tools.map((tool: Tool) => (
        <div key={tool.id}>{tool.name}</div>
      ))}
    </>
  )
}
```

---

## Common Tasks

### Add Dark Mode Support
Already configured! Use:
```tsx
<div className="bg-white dark:bg-neutral-900">Content</div>
```

### Add Theme Toggle Button
Already in Header component. Check `src/components/layout/header.tsx`

### Responsive Classes
```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

### Add Loading State
```tsx
const [isLoading, setIsLoading] = useState(false)

<button disabled={isLoading}>
  {isLoading ? 'Loading...' : 'Submit'}
</button>
```

---

## Testing & Linting

### Run Linter
```bash
npm run lint
```

### Type Check
```bash
npm run type-check
```

### Build Production
```bash
npm run build
npm start
```

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Netlify: Connect GitHub repo
- AWS: Docker container
- DigitalOcean: App Platform

---

## Performance Tips

1. Use Next.js Image component for images
2. Implement code splitting automatically
3. Use dynamic imports for heavy components
4. Optimize fonts (using system fonts is faster)
5. Add preload for critical resources

Example Image:
```tsx
import Image from 'next/image'

<Image
  src="/logo.png"
  alt="Logo"
  width={100}
  height={100}
/>
```

---

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Clear cache
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### TypeScript errors
```bash
npm run type-check
```

---

## Additional Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [React Hooks](https://react.dev/reference/react)

---

## Need Help?

Check the README.md for more information or contact support@aitoolsdirectory.com
