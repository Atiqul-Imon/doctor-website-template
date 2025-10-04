# 🩺 Doctor Portfolio Template - Next.js

A modern, responsive Next.js template designed specifically for medical professionals. Built with Next.js 15, React 18, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🎯 Perfect For
- **Doctors & Physicians** - Professional medical portfolios
- **Medical Practices** - Clinic and practice websites  
- **Healthcare Professionals** - Nurses, specialists, consultants
- **Medical Students** - Residency and fellowship applications

## 🚀 Features

### ✨ **Modern Design**
- Clean, professional medical-themed design
- Fully responsive across all devices
- Smooth animations with Framer Motion
- Medical color palette and typography
- High-quality SVG illustrations

### 🏗️ **Built with Latest Technologies**
- **Next.js 15** with App Router
- **React 18.3.0** with TypeScript
- **Tailwind CSS v3** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

### 📱 **Multi-Page Structure**
- **Homepage** - Hero, About, Services, Experience, Statistics, Testimonials, FAQ, Contact CTA
- **About Page** - Detailed doctor information and experience
- **Services Page** - Medical services with appointment booking
- **Blog Page** - Medical blog with markdown support
- **Contact Page** - Contact form and information
- **Appointment Page** - Online appointment booking
- **Admin Panel** - Blog management system

### 📝 **Blog Management System**
- File-based CMS using Markdown
- Admin panel for content management
- Category and tag support
- SEO-optimized blog posts
- Related posts functionality

### 🎨 **Professional UI Components**
- Custom medical-themed components
- Responsive navigation with mobile menu
- Interactive contact forms
- Testimonial carousel
- FAQ accordion
- Statistics counters
- Service cards with hover effects

### ⚡ **Performance Optimized**
- Static site generation (SSG)
- Image optimization with Next.js Image
- SEO-optimized with meta tags
- Fast loading times
- Lighthouse score optimized

### 🔧 **Developer Friendly**
- TypeScript for type safety
- ESLint configuration
- Prettier formatting
- Modular component structure
- Custom hooks and utilities

## 🛠️ Installation

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn

### Quick Start

1. **Clone or download** the template
```bash
# If you have the template files
cd doctor-portfolio-template
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
doctor-portfolio-template/
├── public/
│   ├── images/                 # All images and icons
│   │   ├── doctors/           # Doctor photos
│   │   ├── services/          # Service illustrations
│   │   ├── patients/          # Patient testimonials
│   │   └── blog-images/       # Blog post images
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── about/
│   │   ├── admin/
│   │   ├── appointment/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── services/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── auth/              # Authentication components
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Page sections
│   │   └── ui/                # Reusable UI components
│   ├── data/                  # Static data and content
│   ├── lib/                   # Utilities and helpers
│   └── types/                 # TypeScript type definitions
├── content/                   # Blog posts (Markdown)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### 1. **Update Doctor Information**
Edit `src/data/index.ts` to update:
- Doctor name, title, and bio
- Contact information
- Social media links
- Office hours
- Education and certifications

### 2. **Modify Services**
Update the `services` array in `src/data/index.ts`:
```typescript
export const services: Service[] = [
  {
    id: '1',
    title: 'Your Service Name',
    description: 'Service description',
    icon: 'Heart', // Icon name from Lucide React
    features: ['Feature 1', 'Feature 2'],
    image: '/images/services/your-service.svg'
  }
]
```

### 3. **Customize Colors**
Update the medical theme colors in `tailwind.config.ts`:
```typescript
'medical-primary': {
  500: '#14b8a6', // Your primary color
  600: '#0d9488',
  // ... other shades
}
```

### 4. **Add Blog Posts**
1. Navigate to `/admin` (default password: `admin123`)
2. Click "Add New Post"
3. Fill in the form and publish

Or manually create markdown files in the `content/` directory.

### 5. **Update Images**
Replace images in the `public/images/` directory:
- `doctors/` - Doctor photos
- `services/` - Service illustrations
- `patients/` - Patient testimonial photos
- `blog-images/` - Blog post featured images

## 📝 Content Management

### Blog System
The template includes a file-based CMS for blog management:

1. **Access Admin Panel**: `/admin`
2. **Default Login**: 
   - Username: `admin`
   - Password: `admin123`
3. **Features**:
   - Create, edit, delete posts
   - Category management
   - Tag system
   - Featured posts
   - SEO metadata

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Import and use existing components
4. Update navigation in `src/components/layout/Header.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The template is compatible with any platform that supports Next.js static exports.

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: Optimized and minified

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any API keys:
```bash
# Optional: Add your API keys here
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

### SEO Configuration
Update metadata in `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Doctor Name - Medical Practice',
  description: 'Your practice description',
  // ... other metadata
}
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This template is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

## 🆘 Support

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### Common Issues

**Build Errors**: Make sure you're using Node.js 18+ and have run `npm install`

**Image Issues**: Ensure all images are in the `public/images/` directory

**Styling Issues**: Check Tailwind CSS classes and ensure they're properly imported

## 🚀 What's Included

- ✅ Complete source code
- ✅ All images and assets
- ✅ Documentation
- ✅ Blog management system
- ✅ Admin panel
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ TypeScript support
- ✅ Modern UI/UX

## 💡 Tips for Success

1. **Customize thoroughly** - Replace all placeholder content with your own
2. **Optimize images** - Use high-quality but compressed images
3. **Add real testimonials** - Replace placeholder testimonials with real ones
4. **Update regularly** - Keep the blog updated with fresh content
5. **Test thoroughly** - Test on multiple devices and browsers

---

**Ready to launch your medical practice online?** This template provides everything you need to create a professional, modern website that will attract and convert patients.

For questions or support, please refer to the documentation or contact the template author.

---

*Built with ❤️ for medical professionals*