# 🔧 Troubleshooting Guide - Doctor Portfolio Template

This guide helps resolve common issues when working with the Doctor Portfolio Template.

## 📋 Table of Contents

1. [Installation Issues](#installation-issues)
2. [Build Errors](#build-errors)
3. [Runtime Errors](#runtime-errors)
4. [Performance Issues](#performance-issues)
5. [Styling Issues](#styling-issues)
6. [Form Issues](#form-issues)
7. [Image Issues](#image-issues)
8. [Deployment Issues](#deployment-issues)
9. [Browser Compatibility](#browser-compatibility)
10. [General Debugging](#general-debugging)

## 🚀 Installation Issues

### Node.js Version Issues

**Problem**: Build fails with Node.js version errors
```
Error: You are using Node.js 16.19.0. Next.js requires Node.js 18.0.0 or higher.
```

**Solution**:
```bash
# Check current version
node --version

# Update to Node.js 18+ from nodejs.org
# Or use a version manager like nvm
nvm install 18
nvm use 18
```

### Package Installation Issues

**Problem**: `npm install` fails with dependency conflicts
```
npm ERR! peer dep missing: react@^18.0.0
```

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# Alternative: Use yarn
yarn install
```

### Permission Issues

**Problem**: Permission denied errors on macOS/Linux
```
EACCES: permission denied, access '/usr/local/lib/node_modules'
```

**Solution**:
```bash
# Use nvm instead of global npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Or fix npm permissions
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

## 🔨 Build Errors

### TypeScript Errors

**Problem**: TypeScript compilation errors
```
Type error: Property 'title' does not exist on type 'Service'.
```

**Solution**:
1. Check type definitions in `src/types/index.ts`
2. Update interfaces if needed:
```typescript
export interface Service {
  id: string
  title: string  // Ensure this property exists
  description: string
  // ... other properties
}
```

3. Run type checking:
```bash
npm run type-check
```

### Import/Export Errors

**Problem**: Module not found errors
```
Module not found: Can't resolve '@/components/Header'
```

**Solution**:
1. Check file paths and exports
2. Verify `tsconfig.json` path mapping:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

3. Ensure proper exports:
```typescript
// Component file
export { Header } from './Header'

// Or default export
export default function Header() { /* ... */ }
```

### Environment Variable Errors

**Problem**: Environment variables not loading
```
ReferenceError: process is not defined
```

**Solution**:
1. Use `NEXT_PUBLIC_` prefix for client-side variables:
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

2. Access server-side variables in API routes:
```typescript
// src/app/api/contact/route.ts
const apiKey = process.env.SECRET_API_KEY
```

## ⚠️ Runtime Errors

### Hydration Errors

**Problem**: Hydration mismatch errors
```
Warning: Text content did not match. Server: "Hello" Client: "Hi"
```

**Solution**:
1. Use `useEffect` for client-only content:
```typescript
const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
}, [])

if (!mounted) return null

return <div>{new Date().toLocaleString()}</div>
```

2. Use dynamic imports for client-only components:
```typescript
import dynamic from 'next/dynamic'

const ClientOnlyComponent = dynamic(() => import('./ClientOnly'), {
  ssr: false
})
```

### API Route Errors

**Problem**: API routes returning 500 errors
```
Error: API route returned 500
```

**Solution**:
1. Check server logs for detailed errors
2. Add error handling:
```typescript
export async function POST(request: Request) {
  try {
    const body = await request.json()
    // ... processing
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

3. Validate request data:
```typescript
if (!body.email || !body.name) {
  return NextResponse.json(
    { error: 'Missing required fields' },
    { status: 400 }
  )
}
```

### Form Submission Errors

**Problem**: Forms not submitting properly
```
Failed to submit form: Network error
```

**Solution**:
1. Check API endpoint URLs
2. Verify CORS settings for external APIs
3. Add loading states:
```typescript
const [isSubmitting, setIsSubmitting] = useState(false)

const handleSubmit = async (data) => {
  setIsSubmitting(true)
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    
    if (!response.ok) {
      throw new Error('Submission failed')
    }
  } catch (error) {
    console.error('Form error:', error)
  } finally {
    setIsSubmitting(false)
  }
}
```

## ⚡ Performance Issues

### Slow Loading Times

**Problem**: Website loads slowly
```
Lighthouse: Poor performance score
```

**Solution**:
1. Optimize images:
```typescript
import Image from 'next/image'

<Image
  src="/images/doctor.jpg"
  alt="Doctor"
  width={500}
  height={600}
  priority // For above-the-fold images
  placeholder="blur"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

2. Use dynamic imports for heavy components:
```typescript
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <div>Loading...</div>
})
```

3. Optimize bundle size:
```bash
npm run build
npm run analyze
```

### Memory Issues

**Problem**: High memory usage during build
```
JavaScript heap out of memory
```

**Solution**:
```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Or use yarn
yarn build --max-old-space-size=4096
```

### Large Bundle Size

**Problem**: Bundle size too large
```
Bundle size: 2.5MB (too large)
```

**Solution**:
1. Analyze bundle:
```bash
npm install --save-dev @next/bundle-analyzer
npm run analyze
```

2. Remove unused dependencies
3. Use dynamic imports for large libraries
4. Optimize images and assets

## 🎨 Styling Issues

### Tailwind CSS Not Working

**Problem**: Tailwind styles not applying
```
Button styles not showing
```

**Solution**:
1. Check `tailwind.config.ts`:
```typescript
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'medical-primary': {
          500: '#14b8a6',
          // ... other colors
        }
      }
    }
  },
  plugins: [],
}
```

2. Ensure Tailwind is imported in `globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. Restart development server after config changes

### Responsive Design Issues

**Problem**: Mobile layout broken
```
Mobile view not responsive
```

**Solution**:
1. Check Tailwind responsive prefixes:
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Content */}
</div>
```

2. Use mobile-first approach:
```css
/* Mobile first */
.container {
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}
```

3. Test on real devices using browser dev tools

### Animation Issues

**Problem**: Framer Motion animations not working
```
Animations not smooth
```

**Solution**:
1. Check Framer Motion version compatibility
2. Use proper animation props:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

3. Add `will-change` CSS property for better performance:
```css
.animated-element {
  will-change: transform, opacity;
}
```

## 📝 Form Issues

### Form Validation Errors

**Problem**: Form validation not working
```
Required fields not validated
```

**Solution**:
1. Use React Hook Form for validation:
```typescript
import { useForm } from 'react-hook-form'

const { register, handleSubmit, formState: { errors } } = useForm()

<form onSubmit={handleSubmit(onSubmit)}>
  <input
    {...register('email', { 
      required: 'Email is required',
      pattern: {
        value: /^\S+@\S+$/i,
        message: 'Invalid email'
      }
    })}
  />
  {errors.email && <span>{errors.email.message}</span>}
</form>
```

2. Add client-side validation:
```typescript
const validateForm = (data) => {
  const errors = {}
  
  if (!data.name) {
    errors.name = 'Name is required'
  }
  
  if (!data.email) {
    errors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Email is invalid'
  }
  
  return errors
}
```

### Form Submission Issues

**Problem**: Forms not sending data
```
Form data not reaching server
```

**Solution**:
1. Check form action and method:
```typescript
<form
  action="/api/contact"
  method="POST"
  encType="application/json"
>
```

2. Verify API route exists and is working
3. Check network tab in browser dev tools
4. Add error handling:
```typescript
try {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  
  const result = await response.json()
  console.log('Success:', result)
} catch (error) {
  console.error('Error:', error)
}
```

## 🖼️ Image Issues

### Images Not Loading

**Problem**: Images not displaying
```
Image not found or broken
```

**Solution**:
1. Check file paths:
```typescript
// Correct path (starts with /)
<Image src="/images/doctor.jpg" alt="Doctor" />

// Wrong path (missing /)
<Image src="images/doctor.jpg" alt="Doctor" />
```

2. Ensure images are in `public/images/` directory
3. Check file permissions and case sensitivity
4. Use Next.js Image component:
```typescript
import Image from 'next/image'

<Image
  src="/images/doctor.jpg"
  alt="Dr. John Smith"
  width={500}
  height={600}
  priority // For above-the-fold images
/>
```

### Image Optimization Issues

**Problem**: Images loading slowly
```
Large image files causing slow loading
```

**Solution**:
1. Optimize image sizes before adding to project
2. Use appropriate image formats (WebP, AVIF)
3. Add proper sizing attributes:
```typescript
<Image
  src="/images/doctor.jpg"
  alt="Doctor"
  width={500}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  placeholder="blur"
/>
```

4. Use responsive images:
```typescript
<Image
  src="/images/doctor.jpg"
  alt="Doctor"
  width={500}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

## 🚀 Deployment Issues

### Build Fails on Deployment

**Problem**: Build fails on Vercel/Netlify
```
Build failed: npm run build
```

**Solution**:
1. Check Node.js version in deployment settings
2. Verify environment variables are set
3. Check build logs for specific errors
4. Ensure all dependencies are in `package.json`:
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.3.0"
  }
}
```

### Static Export Issues

**Problem**: Static export not working
```
Error: Static export failed
```

**Solution**:
1. Update `next.config.js` for static export:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

2. Remove server-side features for static export
3. Use client-side data fetching

### Environment Variables Not Working

**Problem**: Environment variables not available in production
```
process.env.VARIABLE is undefined
```

**Solution**:
1. Set environment variables in deployment platform
2. Use `NEXT_PUBLIC_` prefix for client-side variables
3. Check variable names and values
4. Restart deployment after adding variables

## 🌐 Browser Compatibility

### Internet Explorer Issues

**Problem**: Website not working in IE
```
IE doesn't support modern JavaScript
```

**Solution**:
1. Add polyfills for modern features
2. Use Babel to transpile ES6+ features
3. Consider dropping IE support (recommended)

### Safari-Specific Issues

**Problem**: Styles or features not working in Safari
```
Safari rendering issues
```

**Solution**:
1. Add Safari-specific CSS prefixes:
```css
-webkit-appearance: none;
-webkit-transform: translateX(0);
```

2. Check for CSS Grid/Flexbox support
3. Test on actual Safari browser

### Mobile Browser Issues

**Problem**: Mobile browsers not working properly
```
Touch events not working
```

**Solution**:
1. Add touch event handling:
```typescript
const handleTouchStart = (e: React.TouchEvent) => {
  // Handle touch start
}

<div onTouchStart={handleTouchStart}>
  Touchable content
</div>
```

2. Use responsive design principles
3. Test on actual mobile devices

## 🔍 General Debugging

### Debugging Tools

**Development Tools**:
```bash
# Enable debug mode
DEBUG=* npm run dev

# Check for console errors
# Open browser dev tools (F12)

# Network debugging
# Check Network tab for failed requests

# Performance debugging
# Use Lighthouse for performance audit
```

**React Developer Tools**:
1. Install React DevTools browser extension
2. Use Components tab to inspect component state
3. Use Profiler tab to identify performance issues

### Common Debugging Steps

1. **Check Console Errors**:
   - Open browser dev tools
   - Look for JavaScript errors
   - Check for network errors

2. **Verify Data Flow**:
   - Check component props
   - Verify state updates
   - Trace data from API to component

3. **Test Incrementally**:
   - Comment out problematic code
   - Add console.log statements
   - Test one feature at a time

### Performance Debugging

**Lighthouse Audit**:
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html
```

**Bundle Analysis**:
```bash
# Analyze bundle size
npm run build
npm run analyze
```

## 📞 Getting Help

### Self-Help Resources
- Check this troubleshooting guide
- Review Next.js documentation
- Search Stack Overflow
- Check GitHub issues

### Reporting Issues
When reporting issues, include:
1. Node.js version
2. Operating system
3. Browser and version
4. Error messages
5. Steps to reproduce
6. Expected vs actual behavior

### Community Support
- Next.js Discord
- React Community
- Stack Overflow
- GitHub Discussions

---

**Still having issues?** 🆘

If you can't resolve your issue with this guide, please:
1. Check the error logs carefully
2. Search for similar issues online
3. Create a minimal reproduction case
4. Reach out to the community for help

Remember: Most issues have simple solutions, so don't give up! 🚀
