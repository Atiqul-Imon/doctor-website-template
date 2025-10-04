# Deployment Guide - Doctor Portfolio Template

This guide covers multiple deployment options for your doctor portfolio website template. Choose the option that best fits your needs.

## 🚀 Quick Deployment Options

### 1. **Vercel (Recommended) - 5 Minutes**

**Why Vercel?**
- Built by Next.js creators
- Automatic deployments from GitHub
- Free tier available
- Excellent performance
- Built-in analytics

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "New Project"
5. Import your repository
6. Click "Deploy"
7. Your site is live!

**Domain Setup:**
- Custom domain: Add in Vercel dashboard
- SSL: Automatic
- CDN: Global edge network

**Form Handling:**
- ✅ **Contact & Appointment forms work automatically**
- ✅ **API routes included** (`/api/contact`, `/api/appointment`)
- ✅ **Built-in validation** and error handling
- 📧 **Email notifications**: See `VERCEL_FORMS_GUIDE.md` for setup
- 🔧 **Zero configuration** required for basic functionality

---

### 2. **Netlify - 5 Minutes**

**Why Netlify?**
- Great for static sites
- Form handling included
- Free tier available
- Easy custom domains

**Steps:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. Click "New site from Git"
5. Select your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy site"

**Form Handling:**
- Contact forms work automatically
- No additional setup needed
- Forms appear in Netlify dashboard

---

### 3. **GitHub Pages - 10 Minutes**

**Why GitHub Pages?**
- Free hosting
- Integrated with GitHub
- Good for portfolios

**Steps:**
1. Enable GitHub Pages in repository settings
2. Create `next.config.js` for static export:
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
3. Run `npm run build`
4. Deploy the `out` folder to GitHub Pages

---

### 4. **Traditional Hosting (cPanel/Shared Hosting)**

**Why Traditional Hosting?**
- Familiar interface
- Often included with domain purchase
- Good for existing hosting

**Steps:**
1. Build the project: `npm run build`
2. Upload the `.next` folder to your hosting
3. Configure server for Next.js
4. Set up environment variables

---

## 📋 Pre-Deployment Checklist

### ✅ **Required Steps:**

1. **Update Content**
   ```bash
   # Edit these files with your information:
   - src/data/index.ts (doctor info, services, etc.)
   - src/app/layout.tsx (SEO metadata)
   - public/manifest.json (PWA settings)
   ```

2. **Replace Images**
   ```bash
   # Replace placeholder images in:
   - public/images/doctor-sarah.svg
   - public/images/testimonials/*.svg
   - public/images/services/*.svg
   - public/images/blog/*.svg
   ```

3. **Configure Forms**
   ```bash
   # For Netlify Forms (automatic):
   # Forms work out of the box
   
   # For other platforms:
   # Update form action URLs in components
   ```

4. **Set Environment Variables**
   ```bash
   # Create .env.local:
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
   ```

5. **Test Locally**
   ```bash
   npm run build
   npm run start
   ```

---

## 🔧 Platform-Specific Configurations

### **Vercel Configuration**

Create `vercel.json`:
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

### **Netlify Configuration**

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### **GitHub Pages Configuration**

Update `package.json`:
```json
{
  "scripts": {
    "build": "next build",
    "export": "next build && next export"
  }
}
```

---

## 📊 Performance Optimization

### **Image Optimization**
- Use WebP format when possible
- Compress images before upload
- Use Next.js Image component

### **SEO Optimization**
- Update meta tags in `src/app/layout.tsx`
- Add structured data
- Create sitemap.xml
- Submit to Google Search Console

### **Analytics Setup**
- Google Analytics 4
- Google Search Console
- Social media pixels (Facebook, LinkedIn)

---

## 🔒 Security Considerations

### **Environment Variables**
- Never commit sensitive data
- Use `.env.local` for local development
- Set environment variables in hosting platform

### **Form Security**
- Netlify Forms include spam protection
- Add honeypot fields
- Validate form inputs

### **HTTPS**
- All modern platforms provide SSL
- Redirect HTTP to HTTPS
- Use security headers

---

## 📱 Mobile Optimization

### **Testing**
- Test on real devices
- Use browser dev tools
- Check Core Web Vitals

### **PWA Features**
- Manifest file included
- Service worker ready
- Offline functionality

---

## 🆘 Troubleshooting

### **Common Issues:**

1. **Build Errors**
   ```bash
   # Clear cache and reinstall:
   rm -rf .next node_modules
   npm install
   npm run build
   ```

2. **Image Loading Issues**
   - Check image paths
   - Verify file formats
   - Use absolute paths

3. **Form Submission Problems**
   - Verify form names match
   - Check Netlify Forms setup
   - Test with simple forms first

4. **Styling Issues**
   - Check Tailwind CSS compilation
   - Verify CSS imports
   - Clear browser cache

---

## 📞 Support

### **Getting Help:**
1. Check this documentation
2. Review Next.js documentation
3. Check hosting platform docs
4. Contact support if needed

### **Useful Resources:**
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages](https://pages.github.com)

---

**Your doctor portfolio website is now ready to deploy! Choose your preferred platform and follow the steps above.** 🚀
