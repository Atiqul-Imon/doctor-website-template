# 🎨 Customization Guide - Doctor Portfolio Template

This comprehensive guide will help developers customize the Doctor Portfolio Template for their specific needs.

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Content Customization](#content-customization)
3. [Design Customization](#design-customization)
4. [Component Customization](#component-customization)
5. [Adding New Features](#adding-new-features)
6. [Advanced Customization](#advanced-customization)
7. [Troubleshooting](#troubleshooting)

## 🚀 Quick Start

### Basic Setup
1. **Update Doctor Information** - Edit `src/data/index.ts`
2. **Replace Images** - Update files in `public/images/`
3. **Customize Colors** - Modify `tailwind.config.ts`
4. **Update Content** - Edit text content throughout the site

### Essential Files to Edit
```
src/data/index.ts          # Main content data
tailwind.config.ts         # Colors and styling
src/app/layout.tsx         # SEO and metadata
public/images/             # All images and icons
```

## 📝 Content Customization

### 1. Doctor Information

Edit `src/data/index.ts` to update doctor details:

```typescript
export const doctorData: Doctor = {
  name: 'Dr. John Smith',                    // Your name
  title: 'Internal Medicine Physician',      // Your title
  specialty: 'Internal Medicine',           // Your specialty
  bio: 'Your professional bio...',          // Your biography
  experience: 15,                           // Years of experience
  image: '/images/doctors/dr-john-smith.jpg', // Your photo
  phone: '(555) 123-4567',                  // Your phone
  email: 'dr.smith@example.com',            // Your email
  
  // Address
  address: {
    street: '123 Medical Plaza',
    city: 'Healthcare City',
    state: 'CA',
    zipCode: '90210',
    country: 'USA'
  },
  
  // Social Media
  socialMedia: {
    linkedin: 'https://linkedin.com/in/drjohnsmith',
    twitter: 'https://twitter.com/drjohnsmith',
    facebook: 'https://facebook.com/drjohnsmith',
    instagram: 'https://instagram.com/drjohnsmith'
  },
  
  // Office Hours
  officeHours: [
    { day: 'Monday', open: '8:00 AM', close: '5:00 PM', isOpen: true },
    { day: 'Tuesday', open: '8:00 AM', close: '5:00 PM', isOpen: true },
    // ... add all days
  ],
  
  // Education & Certifications
  education: [
    'MD, Harvard Medical School (2008)',
    'Residency, Johns Hopkins Hospital (2012)',
    'Board Certified in Internal Medicine'
  ],
  
  certifications: [
    'American Board of Internal Medicine',
    'Advanced Cardiac Life Support (ACLS)',
    'Basic Life Support (BLS)'
  ]
}
```

### 2. Services Customization

Update services in the same file:

```typescript
export const services: Service[] = [
  {
    id: '1',
    title: 'Annual Physical Exams',
    slug: 'annual-physical-exams',
    description: 'Comprehensive yearly health assessments...',
    detailedDescription: 'Detailed description of the service...',
    icon: 'Stethoscope',  // Lucide React icon name
    features: [
      'Complete health history review',
      'Physical examination',
      'Laboratory tests',
      'Health risk assessment'
    ],
    process: [
      {
        title: 'Health History Review',
        description: 'We discuss your medical history and current concerns.'
      },
      {
        title: 'Physical Examination',
        description: 'Comprehensive physical examination.'
      }
    ],
    benefits: [
      'Early disease detection',
      'Preventive care planning',
      'Health optimization'
    ],
    duration: '60-90 minutes',
    appointmentType: 'In-person',
    image: '/images/services/annual-exam.jpg',
    tags: ['preventive care', 'wellness', 'screening']
  }
  // Add more services...
]
```

### 3. Testimonials

Update patient testimonials:

```typescript
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Patient',
    content: 'Dr. Smith provided excellent care during my treatment...',
    rating: 5,
    image: '/images/patients/sarah-johnson.jpg',
    date: '2024-01-15'
  }
  // Add more testimonials...
]
```

## 🎨 Design Customization

### 1. Color Scheme

Edit `tailwind.config.ts` to customize colors:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Medical theme colors
        'medical-primary': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',  // Main primary color
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        'medical-secondary': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',  // Main secondary color
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

### 2. Typography

Update fonts in `src/app/layout.tsx`:

```typescript
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})
```

### 3. Custom CSS

Add custom styles in `src/app/globals.css`:

```css
/* Custom medical theme styles */
.medical-gradient {
  background: linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%);
}

.medical-shadow {
  box-shadow: 0 10px 25px rgba(20, 184, 166, 0.1);
}

/* Custom animations */
@keyframes medical-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

## 🧩 Component Customization

### 1. Header Component

Edit `src/components/layout/Header.tsx`:

```typescript
// Update navigation items
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  // Add custom pages
  { name: 'Insurance', href: '/insurance' },
  { name: 'Patient Portal', href: '/portal' }
]
```

### 2. Footer Component

Edit `src/components/layout/Footer.tsx`:

```typescript
// Update footer sections
const footerSections = {
  practice: {
    title: 'Practice Information',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Mission', href: '/mission' }
    ]
  },
  services: {
    title: 'Medical Services',
    links: services.map(service => ({
      name: service.title,
      href: `/services/${service.slug}`
    }))
  }
}
```

### 3. Custom Components

Create new components in `src/components/`:

```typescript
// src/components/sections/Insurance.tsx
export function Insurance() {
  return (
    <section className="section-medical bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-8">
          Insurance We Accept
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Insurance provider cards */}
        </div>
      </div>
    </section>
  )
}
```

## ➕ Adding New Features

### 1. New Pages

Create new pages in `src/app/`:

```typescript
// src/app/team/page.tsx
export default function TeamPage() {
  return (
    <div className="min-h-screen pt-20">
      <h1>Our Medical Team</h1>
      {/* Team member cards */}
    </div>
  )
}
```

### 2. API Routes

Add new API endpoints:

```typescript
// src/app/api/newsletter/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email } = await request.json()
  
  // Add to newsletter service
  // Send confirmation email
  
  return NextResponse.json({ success: true })
}
```

### 3. Database Integration

For dynamic content, integrate a database:

```typescript
// src/lib/database.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getAppointments() {
  return await prisma.appointment.findMany()
}

export async function createAppointment(data: any) {
  return await prisma.appointment.create({ data })
}
```

## 🔧 Advanced Customization

### 1. Custom Hooks

Create reusable hooks:

```typescript
// src/lib/hooks/useLocalStorage.ts
import { useState, useEffect } from 'react'

export function useLocalStorage(key: string, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}
```

### 2. Context Providers

Add global state management:

```typescript
// src/lib/context/AppContext.tsx
import { createContext, useContext, useReducer } from 'react'

interface AppState {
  theme: 'light' | 'dark'
  language: 'en' | 'es'
}

const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<any>
} | null>(null)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
```

### 3. SEO Optimization

Enhance SEO for each page:

```typescript
// src/app/services/[slug]/page.tsx
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)
  
  return {
    title: `${service?.title} - Dr. John Smith Medical Practice`,
    description: service?.description,
    keywords: service?.tags?.join(', '),
    openGraph: {
      title: `${service?.title} - Medical Services`,
      description: service?.description,
      images: [service?.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service?.title} - Medical Services`,
      description: service?.description,
      images: [service?.image],
    },
  }
}
```

## 🐛 Troubleshooting

### Common Issues

#### 1. Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

#### 2. Image Loading Issues
- Ensure images are in `public/images/` directory
- Use Next.js Image component: `<Image src="/images/photo.jpg" alt="Description" />`
- Check file paths are correct

#### 3. Styling Issues
- Verify Tailwind classes are properly configured
- Check `tailwind.config.ts` for custom configurations
- Ensure CSS is imported in `globals.css`

#### 4. TypeScript Errors
- Run type check: `npm run type-check`
- Update type definitions in `src/types/`
- Check imports and exports

### Performance Optimization

#### 1. Image Optimization
```typescript
// Use Next.js Image component
import Image from 'next/image'

<Image
  src="/images/doctor.jpg"
  alt="Dr. John Smith"
  width={500}
  height={600}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

#### 2. Code Splitting
```typescript
// Lazy load components
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

#### 3. Bundle Analysis
```bash
# Analyze bundle size
npm install --save-dev @next/bundle-analyzer
npm run build && npm run analyze
```

## 📚 Additional Resources

### Documentation Links
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Recommended Tools
- **VS Code Extensions**: ES7+ React/Redux/React-Native snippets, Tailwind CSS IntelliSense
- **Browser Extensions**: React Developer Tools, Tailwind CSS IntelliSense
- **Design Tools**: Figma, Adobe XD for mockups

### Support
- **GitHub Issues**: Report bugs and request features
- **Documentation**: Check this guide and README.md
- **Community**: Join Next.js and React communities

---

**Happy Customizing!** 🚀

This template is designed to be flexible and easy to customize. Don't hesitate to experiment and make it your own!
