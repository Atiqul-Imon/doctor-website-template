# Vercel Forms Setup Guide - Doctor Portfolio Template

This guide explains how to set up email notifications for your contact and appointment forms when deploying to Vercel.

## 🎯 **Current Status: Forms Work on Vercel!**

✅ **Good News**: Your forms are already configured to work on Vercel!  
✅ **API Routes**: Contact and appointment forms have dedicated API endpoints  
✅ **Validation**: Built-in form validation and error handling  
✅ **Auto-Detection**: Forms automatically detect the deployment platform  

## 🚀 **How It Works**

### **Automatic Platform Detection**
Your forms automatically detect whether they're deployed on:
- **Netlify**: Uses Netlify Forms (zero configuration)
- **Vercel**: Uses API routes (`/api/contact`, `/api/appointment`)
- **Development**: Simulated form submissions

### **Current API Endpoints**
- **Contact Form**: `POST /api/contact`
- **Appointment Form**: `POST /api/appointment`

---

## 📧 **Setting Up Email Notifications**

### **Option 1: Resend (Recommended)**

**Why Resend?**
- Modern email API designed for developers
- Great free tier (3,000 emails/month)
- Easy integration with Next.js
- Excellent deliverability

#### **Setup Steps:**

1. **Sign up for Resend**
   - Go to [resend.com](https://resend.com)
   - Create an account
   - Verify your domain (optional for testing)

2. **Get API Key**
   ```bash
   # In your Vercel dashboard
   # Go to Settings → Environment Variables
   # Add: RESEND_API_KEY = your_api_key_here
   ```

3. **Update API Routes**
   ```typescript
   // In src/app/api/contact/route.ts
   import { Resend } from 'resend'
   
   const resend = new Resend(process.env.RESEND_API_KEY)
   
   // Add this in the POST function:
   await resend.emails.send({
     from: 'contact@yourdomain.com',
     to: ['your-email@domain.com'],
     subject: `New Contact Form: ${subject}`,
     html: `
       <h2>New Contact Form Submission</h2>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
       <p><strong>Subject:</strong> ${subject}</p>
       <p><strong>Message:</strong></p>
       <p>${message}</p>
     `
   })
   ```

4. **Install Resend Package**
   ```bash
   npm install resend
   ```

---

### **Option 2: SendGrid**

**Setup Steps:**

1. **Sign up for SendGrid**
   - Go to [sendgrid.com](https://sendgrid.com)
   - Create account and verify email

2. **Get API Key**
   ```bash
   # In Vercel dashboard
   # Add: SENDGRID_API_KEY = your_api_key_here
   ```

3. **Update API Routes**
   ```typescript
   import sgMail from '@sendgrid/mail'
   
   sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
   
   const msg = {
     to: 'your-email@domain.com',
     from: 'contact@yourdomain.com',
     subject: `New Contact Form: ${subject}`,
     html: `
       <h2>New Contact Form Submission</h2>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Message:</strong> ${message}</p>
     `
   }
   
   await sgMail.send(msg)
   ```

---

### **Option 3: Nodemailer (Gmail/SMTP)**

**Setup Steps:**

1. **Enable App Passwords** (for Gmail)
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Generate app password

2. **Add Environment Variables**
   ```bash
   # In Vercel dashboard
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 587
   SMTP_USER = your-email@gmail.com
   SMTP_PASS = your_app_password
   ```

3. **Install Nodemailer**
   ```bash
   npm install nodemailer
   npm install @types/nodemailer --save-dev
   ```

4. **Update API Routes**
   ```typescript
   import nodemailer from 'nodemailer'
   
   const transporter = nodemailer.createTransporter({
     host: process.env.SMTP_HOST,
     port: parseInt(process.env.SMTP_PORT!),
     secure: false,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS,
     },
   })
   
   await transporter.sendMail({
     from: process.env.SMTP_USER,
     to: 'your-email@domain.com',
     subject: `New Contact Form: ${subject}`,
     html: `
       <h2>New Contact Form Submission</h2>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Message:</strong> ${message}</p>
     `
   })
   ```

---

## 🔧 **Environment Variables Setup**

### **In Vercel Dashboard:**

1. **Go to your project**
2. **Settings → Environment Variables**
3. **Add the following:**

```bash
# For Resend
RESEND_API_KEY=re_your_api_key_here

# For SendGrid
SENDGRID_API_KEY=SG.your_api_key_here

# For Nodemailer/SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your_app_password

# Optional: Custom email addresses
CONTACT_EMAIL=your-email@domain.com
DOCTOR_EMAIL=doctor@domain.com
```

---

## 📋 **Testing Your Forms**

### **Development Testing:**
```bash
npm run dev
# Forms will show simulated success messages
```

### **Production Testing:**
1. Deploy to Vercel
2. Fill out contact/appointment forms
3. Check your email for notifications
4. Check Vercel function logs for any errors

### **Debugging:**
```bash
# Check Vercel function logs
vercel logs --follow

# Or in Vercel dashboard:
# Go to Functions tab → View logs
```

---

## 🎯 **Quick Setup Checklist**

### **For Junior Developers:**

#### **Easiest Option (Resend):**
- [ ] Sign up at resend.com
- [ ] Get API key
- [ ] Add `RESEND_API_KEY` to Vercel environment variables
- [ ] Uncomment Resend code in API routes
- [ ] Run `npm install resend`
- [ ] Deploy to Vercel
- [ ] Test forms

#### **Alternative (Gmail/SMTP):**
- [ ] Enable Gmail app passwords
- [ ] Add SMTP environment variables to Vercel
- [ ] Uncomment Nodemailer code in API routes
- [ ] Run `npm install nodemailer @types/nodemailer`
- [ ] Deploy to Vercel
- [ ] Test forms

---

## 🚨 **Common Issues & Solutions**

### **Issue 1: "Module not found" error**
**Solution:**
```bash
npm install resend  # or sendgrid, or nodemailer
```

### **Issue 2: Environment variables not working**
**Solution:**
- Redeploy after adding environment variables
- Check variable names match exactly
- Ensure no extra spaces in values

### **Issue 3: Emails not sending**
**Solution:**
- Check API key is correct
- Verify domain authentication (for Resend/SendGrid)
- Check spam folder
- Review Vercel function logs

### **Issue 4: CORS errors**
**Solution:**
- API routes already include CORS headers
- If issues persist, check your domain configuration

---

## 💡 **Pro Tips**

### **1. Email Templates**
Create beautiful HTML email templates:
```typescript
const emailTemplate = `
  <div style="font-family: Arial, sans-serif; max-width: 600px;">
    <h2 style="color: #0f766e;">New Contact Form Submission</h2>
    <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>
    </div>
  </div>
`
```

### **2. Database Integration**
Store form submissions in a database:
```typescript
// Example with Supabase
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

await supabase.from('contact_submissions').insert({
  name,
  email,
  phone,
  subject,
  message,
  created_at: new Date().toISOString()
})
```

### **3. Form Analytics**
Track form submissions:
```typescript
// Add to API routes
console.log('Form submission:', {
  type: 'contact',
  timestamp: new Date().toISOString(),
  userAgent: request.headers.get('user-agent'),
  ip: request.headers.get('x-forwarded-for')
})
```

---

## ✅ **Summary**

### **Your Forms Are Ready!**
- ✅ **API Routes**: Already implemented
- ✅ **Validation**: Built-in error handling
- ✅ **Platform Detection**: Automatic
- ✅ **Documentation**: Complete setup guide

### **Next Steps:**
1. **Choose email service** (Resend recommended)
2. **Add environment variables** to Vercel
3. **Install required packages**
4. **Uncomment email code** in API routes
5. **Deploy and test**

### **For Junior Developers:**
This setup is **beginner-friendly** because:
- ✅ **No complex configuration** required
- ✅ **Clear step-by-step** instructions
- ✅ **Multiple options** to choose from
- ✅ **Comprehensive troubleshooting** guide
- ✅ **Working code examples** provided

**Your forms will work perfectly on Vercel with minimal setup!** 🚀
