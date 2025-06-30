# 🍀 Ireland Tours Project Handoff Documentation

**Project:** IAC-023 Ireland Tours  
**Domain:** guidedtourstoireland.com  
**Created:** June 2025  
**Last Updated:** June 30, 2025

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Account Credentials](#account-credentials)
3. [Quick Start Guide](#quick-start-guide)
4. [Development Setup](#development-setup)
5. [Deployment Process](#deployment-process)
6. [Content Management](#content-management)
7. [Maintenance Tasks](#maintenance-tasks)
8. [Troubleshooting](#troubleshooting)
9. [Important Contacts](#important-contacts)

---

## 🎯 Project Overview

### What is this project?
A modern, serverless landing page for "Guided Tours To Ireland" built with:
- **Astro** - Static site generator for lightning-fast performance
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Pages** - Free hosting with custom domain
- **Google Analytics 4** - Website analytics
- **Google Forms** - Contact form backend (no server needed)

### Key Features
- ✅ Mobile-responsive design
- ✅ Image carousel showcasing Ireland
- ✅ Contact form with Google Forms integration
- ✅ SEO optimized
- ✅ Fast loading (< 1 second)
- ✅ Free hosting on GitHub Pages

---

## 🔐 Account Credentials

### Primary Email Account
```
Email: gmail-ireland-tours@gmail.com
Purpose: All project-related accounts and communications
```

### Required Accounts (Create/Access via Primary Email)

1. **GitHub Account**
   - Username: [to be created]
   - Email: gmail-ireland-tours@gmail.com
   - Repository: ireland-tours
   - Purpose: Code hosting and website deployment
   - **Personal Access Token (PAT)**: Required for deployment
     - Go to: Settings → Developer settings → Personal access tokens → Tokens (classic)
     - Click "Generate new token (classic)"
     - Select scopes: `repo` (all) and `workflow`
     - Set expiration: 1 year (regenerate annually)
     - Save token in `.env` as `GITHUB_TOKEN`

2. **Google Account** (same as email)
   - Email: gmail-ireland-tours@gmail.com
   - Services used:
     - Google Analytics 4
     - Google Forms
     - Google Search Console

3. **Domain Registrar**
   - Domain: guidedtourstoireland.com
   - Registrar: [Current registrar info]
   - DNS Management: [Where DNS is managed]

4. **Cloudflare (Optional)**
   - Email: gmail-ireland-tours@gmail.com
   - Purpose: CDN and DNS management
   - Free tier sufficient

### Credentials Storage
Store all passwords securely in:
```
backups/credentials/CREDENTIALS.txt (git-ignored)
```

Template provided in `backups/credentials/CREDENTIALS.template.txt`

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js 18+ installed
- Git installed
- Access to gmail-ireland-tours@gmail.com
- GitHub account created

### 1. Clone the Repository
```bash
git clone https://github.com/[username]/ireland-tours.git
cd ireland-tours
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment
```bash
# Copy environment template
cp .env.example .env

# Edit .env with your credentials
nano .env
```

### 4. Run Development Server
```bash
# Start both website and API
npm run dev:all

# Or just the website
npm run dev
```

### 5. Access Local Site
- Website: http://localhost:4324
- Admin: http://localhost:4324/admin
- API: http://localhost:3001/api

---

## 💻 Development Setup

### Project Structure
```
IAC-023-ireland-tours/
├── src/                 # Source files
│   ├── pages/          # Page components
│   │   ├── index.astro # Home page
│   │   └── ireland.astro # Main Ireland tours page
│   ├── components/     # Reusable components
│   ├── styles/         # CSS files
│   └── content/        # Markdown content
├── public/             # Static assets
│   └── images/         # Ireland photos
├── api/                # Backend API (optional)
├── dist/               # Built files (git-ignored)
└── backups/            # Original files backup
```

### Key Files to Edit
1. **Home Page**: `src/pages/index.astro`
2. **Ireland Page**: `src/pages/ireland.astro`
3. **Styles**: `src/styles/ireland.css`
4. **Images**: `public/images/`
5. **Contact Form**: `src/components/ContactForm.astro`

### Adding New Images
1. Add images to `public/images/`
2. Optimize with: `./scripts/optimize-images.sh`
3. Update carousel in `src/components/IrelandCarousel.astro`

---

## 🌐 Deployment Process

### Option 1: GitHub Pages (Recommended - Free)

1. **Push to GitHub**
```bash
git add .
git commit -m "Update content"
git push origin main
```

2. **Enable GitHub Pages**
- Go to repository Settings → Pages
- Source: Deploy from branch
- Branch: main
- Folder: / (root)

3. **Configure Custom Domain**
- Add domain in GitHub Pages settings
- Update DNS records (see DNS_SETUP.md)

4. **Automatic Deployment**
Every push to main branch automatically deploys!

### Option 2: Manual Deployment
```bash
# Build the site
npm run build

# Deploy (using deploy script)
./deploy.sh
```

---

## 📝 Content Management

### Updating Text Content

1. **Tour Descriptions**
   - Edit: `src/pages/ireland.astro`
   - Look for tour package sections

2. **Contact Information**
   - Email: Update in `.env` and components
   - Phone: Search and replace in all `.astro` files

3. **Meta Tags/SEO**
   - Edit: `src/layouts/IrelandLayout.astro`
   - Update title, description, keywords

### Managing Images

1. **Adding New Photos**
```bash
# Add to public/images/
cp new-photo.jpg public/images/

# Optimize
./scripts/optimize-images.sh
```

2. **Carousel Images**
   - Edit: `src/components/IrelandCarousel.astro`
   - Add/remove from the images array

### Google Forms Integration

1. **Create Form**
   - Go to forms.google.com
   - Create form with: Name, Email, Message, Tour Interest

2. **Get Form IDs**
   - Preview form
   - Inspect element on each field
   - Find `entry.XXXXXX` IDs

3. **Update Configuration**
   - Add IDs to `.env`
   - Update `ContactForm.astro`

---

## 🔧 Maintenance Tasks

### Weekly
- [ ] Check Google Analytics for traffic
- [ ] Review contact form submissions
- [ ] Test website on mobile devices
- [ ] Check page load speed

### Monthly
- [ ] Update tour packages/pricing
- [ ] Add new photos from tours
- [ ] Review and respond to inquiries
- [ ] Backup Google Forms data

### Quarterly
- [ ] Full content review
- [ ] SEO audit
- [ ] Performance optimization
- [ ] Security updates (npm audit)

---

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
```bash
# Clear cache and rebuild
rm -rf dist .astro node_modules
npm install
npm run build
```

2. **Images Not Loading**
- Check file names (case-sensitive)
- Verify paths in components
- Run image optimization script

3. **Contact Form Not Working**
- Verify Google Form IDs in .env
- Check CORS settings
- Test form directly on Google

4. **Domain Not Working**
- Check DNS propagation (whatsmydns.net)
- Verify GitHub Pages settings
- Ensure CNAME file exists

### Error Logs
```bash
# Check build logs
npm run build

# Check server logs
cat server.log

# Check browser console
# F12 → Console tab
```

---

## 📞 Important Contacts

### Development Support
- **Original Developer**: [Your contact]
- **GitHub Support**: support@github.com
- **Astro Discord**: https://astro.build/chat

### Service Providers
- **Domain Registrar**: [Contact info]
- **Current Hosting**: GitHub Pages (free)
- **Email**: Google (gmail-ireland-tours@gmail.com)

### Client Contact
- **Primary**: gmail-ireland-tours@gmail.com
- **Phone**: [If applicable]

---

## 📚 Additional Resources

### Documentation
- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GitHub Pages](https://docs.github.com/pages)

### Local Files
- `DNS_SETUP.md` - Domain configuration
- `DEPLOYMENT_COMPLETE.md` - Original setup notes
- `backups/` - Original HTML/CSS files
- `.env.example` - Environment template

### Useful Commands
```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview build

# Content Management
npm run cms          # CLI tool for content

# Deployment
./deploy.sh          # Deploy to GitHub Pages

# Maintenance
npm audit            # Check security
npm update           # Update packages
```

---

## ✅ Handoff Checklist

Before considering handoff complete:

- [ ] All credentials documented
- [ ] GitHub repository transferred
- [ ] Domain DNS updated
- [ ] Google Analytics access granted
- [ ] Contact form tested
- [ ] Backup of original files created
- [ ] This documentation reviewed with new developer

---

**Note**: This project was built with modern web standards and requires minimal maintenance. The serverless architecture means no server costs or complex backend to manage. Focus on content updates and responding to inquiries for best results.

For questions during handoff, create an issue in the GitHub repository or email the development team.

---

*Last updated: June 30, 2025*