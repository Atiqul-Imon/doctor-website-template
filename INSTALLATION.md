# Installation Guide

This guide will help you install and set up the Doctor Portfolio Website Template.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0 or later
- **npm**: Comes with Node.js, or use yarn/pnpm
- **Git**: For version control (optional)

### Check Your Node.js Version

```bash
node --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/).

## 🚀 Installation Steps

### Step 1: Download the Template

1. **From ThemeForest**: Download the ZIP file from your ThemeForest account
2. **Extract**: Extract the ZIP file to your desired location
3. **Navigate**: Open your terminal/command prompt and navigate to the extracted folder

```bash
cd doctor-website-template
```

### Step 2: Install Dependencies

Install all required packages:

```bash
npm install
```

This will install all dependencies listed in `package.json`:
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- And other required packages

### Step 3: Run the Development Server

Start the development server:

```bash
npm run dev
```

The server will start on `http://localhost:3000`

### Step 4: View Your Website

Open your browser and navigate to `http://localhost:3000` to see your website.

## 🎨 Customization

### Update Doctor Information

1. Open `src/data/index.ts`
2. Replace the sample data with your information:

```typescript
export const doctorData: Doctor = {
  name: 'Your Name',
  title: 'Your Title',
  specialty: 'Your Specialty',
  bio: 'Your bio...',
  // ... update other fields
}
```

### Update Services

In the same file, modify the services array:

```typescript
export const services: Service[] = [
  {
    id: '1',
    title: 'Your Service',
    description: 'Service description...',
    // ... update other fields
  }
]
```

### Replace Images

1. Add your images to the `public/images/` directory
2. Update image paths in the data files
3. Recommended image sizes:
   - Doctor photo: 600x800px
   - Service images: 400x300px
   - Testimonial photos: 150x150px

### Update Contact Information

Update contact details in `src/data/index.ts`:

```typescript
phone: 'your-phone-number',
email: 'your-email@domain.com',
address: {
  street: 'Your Address',
  city: 'Your City',
  state: 'Your State',
  zipCode: 'Your ZIP',
  country: 'Your Country'
}
```

## 🎨 Styling Customization

### Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your primary color palette
  }
}
```

### Fonts

The template uses Google Fonts:
- **Inter**: For body text
- **Merriweather**: For headings
- **PT Serif**: For serif text

To change fonts, update the font imports in `src/app/globals.css`.

### Layout

Modify the layout in `src/components/layout/`:
- `Header.tsx`: Navigation and header
- `Footer.tsx`: Footer content

## 📱 Responsive Design

The template is fully responsive with these breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Test your website on different screen sizes to ensure proper display.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-key
```

### SEO Settings

Update SEO information in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
  // ... other SEO settings
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

The template works on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript checks

### Project Structure

```
src/
├── app/              # Next.js App Router
├── components/       # React components
├── data/            # Sample data
├── lib/             # Utility functions
└── types/           # TypeScript types
```

## 🐛 Troubleshooting

### Common Issues

1. **Node.js Version Error**
   - Ensure you're using Node.js 18.0 or later
   - Update Node.js if needed

2. **Dependencies Installation Failed**
   - Clear npm cache: `npm cache clean --force`
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

3. **Build Errors**
   - Check TypeScript errors: `npm run type-check`
   - Check ESLint errors: `npm run lint`
   - Fix any type or linting errors

4. **Images Not Loading**
   - Ensure images are in the `public/images/` directory
   - Check image paths in your data files
   - Verify image file formats (JPG, PNG, WebP)

### Getting Help

1. Check the documentation
2. Review the code comments
3. Search for similar issues online
4. Contact support if needed

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)

## ✅ Next Steps

After installation:

1. ✅ Customize the content with your information
2. ✅ Replace placeholder images with your photos
3. ✅ Update contact information
4. ✅ Test the website on different devices
5. ✅ Deploy to your hosting platform
6. ✅ Set up analytics and monitoring

---

**Need help?** Check the documentation or contact support.
