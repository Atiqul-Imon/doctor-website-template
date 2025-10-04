# 👨‍💻 Developer Guide - Doctor Portfolio Template

This guide is designed for developers who want to understand, modify, or extend the Doctor Portfolio Template.

## 📋 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Development Setup](#development-setup)
5. [Code Organization](#code-organization)
6. [Component Architecture](#component-architecture)
7. [Data Management](#data-management)
8. [API Routes](#api-routes)
9. [Performance Optimization](#performance-optimization)
10. [Testing](#testing)
11. [Deployment](#deployment)

## 🏗️ Architecture Overview

### Design Principles
- **Component-Based**: Modular React components for reusability
- **Type-Safe**: Full TypeScript implementation
- **Performance-First**: Optimized for Core Web Vitals
- **SEO-Friendly**: Server-side rendering and static generation
- **Mobile-First**: Responsive design approach
- **Accessible**: WCAG 2.1 AA compliance

### Application Flow
```
User Request → Next.js App Router → Page Component → Section Components → UI Components
                    ↓
            Static Generation (SSG) / Server-Side Rendering (SSR)
                    ↓
            Optimized HTML/CSS/JS → Browser
```

## 🛠️ Technology Stack

### Core Technologies
```json
{
  "framework": "Next.js 15",
  "runtime": "React 18.3.0",
  "language": "TypeScript 5.3",
  "styling": "Tailwind CSS 3.4",
  "animations": "Framer Motion 10.16",
  "icons": "Lucide React 0.294",
  "forms": "React Hook Form 7.48",
  "markdown": "React Markdown 10.1"
}
```

### Development Tools
- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript compiler
- **Code Formatting**: Prettier (recommended)
- **Package Manager**: npm/yarn/pnpm
- **Version Control**: Git

### Build & Deployment
- **Build Tool**: Next.js built-in bundler
- **Hosting**: Vercel (recommended), Netlify, or any Node.js hosting
- **CDN**: Automatic with Vercel/Netlify
- **Analytics**: Google Analytics, Vercel Analytics

## 📁 Project Structure

```
doctor-portfolio-template/
├── public/                     # Static assets
│   ├── images/                # Image assets
│   │   ├── doctors/           # Doctor photos
│   │   ├── services/          # Service illustrations
│   │   ├── patients/          # Patient testimonials
│   │   └── blog-images/       # Blog post images
│   ├── favicon.ico            # Site favicon
│   └── manifest.json          # PWA manifest
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── (routes)/          # Route groups
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # React components
│   │   ├── auth/              # Authentication
│   │   ├── forms/             # Form components
│   │   ├── layout/            # Layout components
│   │   ├── sections/          # Page sections
│   │   └── ui/                # Reusable UI
│   ├── content/               # Content files
│   │   ├── blog/              # Blog posts (Markdown)
│   │   └── authors/           # Author information
│   ├── data/                  # Static data
│   │   └── index.ts           # Main data file
│   ├── lib/                   # Utility functions
│   │   ├── blog.ts            # Blog utilities
│   │   ├── services.ts        # Service utilities
│   │   └── utils.ts           # General utilities
│   └── types/                 # TypeScript types
│       ├── global.d.ts        # Global type definitions
│       └── index.ts           # Type exports
├── scripts/                   # Build scripts
├── package.json               # Dependencies
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Documentation
```

## 🚀 Development Setup

### Prerequisites
```bash
# Check Node.js version (18.0+ required)
node --version

# Check npm version
npm --version
```

### Installation
```bash
# Clone or download template
cd doctor-portfolio-template

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

### Environment Variables
Create `.env.local` for local development:
```bash
# Optional: Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id

# Optional: Form handling
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id

# Optional: Email service
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

## 🧩 Code Organization

### Component Hierarchy
```
App Layout
├── Header (Navigation)
├── Main Content
│   ├── Hero Section
│   ├── About Section
│   ├── Services Section
│   ├── Experience Section
│   ├── Testimonials Section
│   ├── Contact Section
│   └── Blog Section
└── Footer
```

### File Naming Conventions
- **Components**: PascalCase (`Header.tsx`, `ContactForm.tsx`)
- **Pages**: lowercase (`page.tsx`, `layout.tsx`)
- **Utilities**: camelCase (`utils.ts`, `blog.ts`)
- **Types**: camelCase (`types/index.ts`)
- **Assets**: kebab-case (`doctor-photo.jpg`)

### Import Organization
```typescript
// 1. React imports
import React, { useState, useEffect } from 'react'

// 2. Next.js imports
import Link from 'next/link'
import Image from 'next/image'

// 3. Third-party imports
import { motion } from 'framer-motion'
import { Calendar, Phone } from 'lucide-react'

// 4. Local imports
import { doctorData } from '@/data'
import { cn } from '@/lib/utils'
import type { Service } from '@/types'
```

## 🎨 Component Architecture

### Component Types

#### 1. Layout Components
```typescript
// src/components/layout/Header.tsx
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Navigation content */}
    </header>
  )
}
```

#### 2. Section Components
```typescript
// src/components/sections/Hero.tsx
export function Hero() {
  return (
    <section className="hero-medical min-h-screen">
      <div className="container-custom">
        {/* Hero content */}
      </div>
    </section>
  )
}
```

#### 3. Form Components
```typescript
// src/components/forms/ContactForm.tsx
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleSubmit = async (e: React.FormEvent) => {
    // Form submission logic
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  )
}
```

#### 4. UI Components
```typescript
// src/components/ui/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ variant = 'primary', size = 'md', children, onClick }: ButtonProps) {
  return (
    <button
      className={cn(
        'btn',
        `btn-${variant}`,
        `btn-${size}`
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

### Component Patterns

#### 1. Compound Components
```typescript
// Card component with header and content
export function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>
}

Card.Header = function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="card-header">{children}</div>
}

Card.Content = function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="card-content">{children}</div>
}

// Usage
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Content>Content</Card.Content>
</Card>
```

#### 2. Render Props
```typescript
interface DataProviderProps {
  children: (data: any) => React.ReactNode
}

export function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    // Fetch data
  }, [])
  
  return <>{children(data)}</>
}
```

#### 3. Custom Hooks
```typescript
// src/lib/hooks/useLocalStorage.ts
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue] as const
}
```

## 📊 Data Management

### Static Data Structure
```typescript
// src/data/index.ts
export interface Doctor {
  name: string
  title: string
  specialty: string
  bio: string
  image: string
  experience: number
  phone: string
  email: string
  address: Address
  socialMedia: SocialMedia
  officeHours: OfficeHours[]
  education: string[]
  certifications: string[]
}

export interface Service {
  id: string
  title: string
  slug: string
  description: string
  detailedDescription?: string
  icon: string
  features: string[]
  process?: ProcessStep[]
  benefits?: string[]
  duration?: string
  appointmentType?: string
  image?: string
  tags?: string[]
}

// Data exports
export const doctorData: Doctor = { /* ... */ }
export const services: Service[] = [ /* ... */ ]
export const testimonials: Testimonial[] = [ /* ... */ ]
```

### Content Management
```typescript
// src/lib/blog.ts
export function getBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR)
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace('.md', '')
      const filePath = path.join(BLOG_DIR, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug,
        content,
        ...data
      } as BlogPost
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.md`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      content,
      ...data
    } as BlogPost
  } catch (error) {
    return null
  }
}
```

## 🔌 API Routes

### Contact Form API
```typescript
// src/app/api/contact/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email service integration
    // await sendEmail({ name, email, subject, message })

    return NextResponse.json(
      { message: 'Contact form submitted successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Failed to submit contact form.' },
      { status: 500 }
    )
  }
}

// CORS support
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
```

### Appointment Booking API
```typescript
// src/app/api/appointment/route.ts
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, date, time, service, message } = body

    // Validation
    if (!name || !email || !date || !time || !service) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Calendar integration
    // await createCalendarEvent({ name, email, date, time, service })

    // Email notification
    // await sendAppointmentConfirmation({ name, email, date, time, service })

    const confirmationNumber = `APT-${Date.now()}`

    return NextResponse.json(
      { 
        message: 'Appointment booked successfully!', 
        confirmationNumber 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Appointment booking error:', error)
    return NextResponse.json(
      { message: 'Failed to book appointment.' },
      { status: 500 }
    )
  }
}
```

## ⚡ Performance Optimization

### Image Optimization
```typescript
// Next.js Image component with optimization
import Image from 'next/image'

<Image
  src="/images/doctor.jpg"
  alt="Dr. John Smith"
  width={500}
  height={600}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### Code Splitting
```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false // Disable SSR for client-only components
})
```

### Bundle Analysis
```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Analyze bundle
npm run build
npm run analyze
```

### Performance Monitoring
```typescript
// src/lib/analytics.ts
export function reportWebVitals(metric: any) {
  if (metric.label === 'web-vital') {
    // Send to analytics service
    console.log(metric)
  }
}

// src/app/layout.tsx
export function reportWebVitals(metric: any) {
  // Report to analytics
}
```

## 🧪 Testing

### Unit Testing Setup
```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom

# Install additional testing utilities
npm install --save-dev @testing-library/user-event
```

### Test Configuration
```javascript
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
```

### Component Testing
```typescript
// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

describe('Button Component', () => {
  it('renders button with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### API Route Testing
```typescript
// __tests__/api/contact.test.ts
import { createMocks } from 'node-mocks-http'
import handler from '@/app/api/contact/route'

describe('/api/contact', () => {
  it('handles POST request', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'Test message'
      }
    })

    await handler(req, res)
    
    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual({
      message: 'Contact form submitted successfully!'
    })
  })
})
```

## 🚀 Deployment

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm start

# Or export static files
npm run export
```

### Environment Configuration
```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export
  trailingSlash: true,
  images: {
    unoptimized: true // For static export
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  }
}

module.exports = nextConfig
```

### Docker Deployment
```dockerfile
# Dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      - run: npm run test
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📚 Additional Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Tools & Extensions
- **VS Code Extensions**: ES7+ React/Redux/React-Native snippets, Tailwind CSS IntelliSense, TypeScript Importer
- **Browser Extensions**: React Developer Tools, Lighthouse
- **Design Tools**: Figma, Adobe XD

### Community & Support
- [Next.js Discord](https://discord.gg/nextjs)
- [React Community](https://react.dev/community)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

**Happy Coding!** 🚀

This template is built with modern best practices and is designed to be easily extensible. Feel free to customize and enhance it for your specific needs.
