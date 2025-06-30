# 🚀 Ireland Tours Setup Checklist

Use this checklist to ensure all accounts and services are properly configured.

## 📧 Step 1: Email Setup
- [ ] Access gmail-ireland-tours@gmail.com
- [ ] Enable 2-factor authentication
- [ ] Generate app-specific password for SMTP
- [ ] Set up email signature with business info
- [ ] Create filters for form submissions

## 🐙 Step 2: GitHub Setup
- [ ] Create GitHub account with gmail-ireland-tours@gmail.com
- [ ] Verify email address
- [ ] Generate Personal Access Token (PAT):
  - [ ] Follow `GITHUB_PAT_SETUP.md` guide
  - [ ] Save token in `.env` as `GITHUB_TOKEN`
  - [ ] Set 1-year expiration reminder
- [ ] Create repository named "ireland-tours"
- [ ] Make repository public (for GitHub Pages)

## 📊 Step 3: Google Analytics 4
- [ ] Sign in to Google Analytics with project email
- [ ] Create new GA4 property
- [ ] Set up data stream for guidedtourstoireland.com
- [ ] Copy Measurement ID (G-XXXXXXXXXX)
- [ ] Add tracking code to website
- [ ] Verify tracking is working

## 📝 Step 4: Google Forms
- [ ] Create new form for contact inquiries
- [ ] Required fields:
  - [ ] Name (short text)
  - [ ] Email (short text with validation)
  - [ ] Phone (optional)
  - [ ] Tour Interest (dropdown/multiple choice)
  - [ ] Message (paragraph text)
- [ ] Set up email notifications
- [ ] Get form ID and entry IDs
- [ ] Link to Google Sheets for responses

## 🌐 Step 5: Domain Configuration
- [ ] Access domain registrar account
- [ ] Update nameservers (if using Cloudflare)
- [ ] Configure DNS records:
  - [ ] A records for GitHub Pages
  - [ ] CNAME for www subdomain
  - [ ] MX records for email (if needed)
- [ ] Enable DNSSEC (if available)

## 🔧 Step 6: Local Development
- [ ] Clone repository
- [ ] Run `npm install`
- [ ] Copy `.env.example` to `.env`
- [ ] Fill in all environment variables
- [ ] Test local development server
- [ ] Verify contact form works locally

## 🚀 Step 7: Deployment
- [ ] Push code to GitHub
- [ ] Enable GitHub Pages in repo settings
- [ ] Add custom domain
- [ ] Wait for DNS propagation
- [ ] Enable HTTPS
- [ ] Test live website

## ✅ Step 8: Verification
- [ ] Website loads at guidedtourstoireland.com
- [ ] All images display correctly
- [ ] Contact form submits successfully
- [ ] Google Analytics tracking events
- [ ] Mobile responsive design works
- [ ] Page speed score > 90

## 🔍 Step 9: SEO Setup
- [ ] Submit to Google Search Console
- [ ] Verify domain ownership
- [ ] Submit sitemap.xml
- [ ] Check for crawl errors
- [ ] Set up Bing Webmaster Tools (optional)

## 📱 Step 10: Business Listings
- [ ] Google Business Profile
- [ ] Facebook Page
- [ ] Instagram Business Account
- [ ] TripAdvisor listing
- [ ] Local directories

## 🛡️ Step 11: Monitoring
- [ ] Set up uptime monitoring (UptimeRobot free tier)
- [ ] Configure email alerts
- [ ] Weekly Analytics reports
- [ ] Form submission notifications
- [ ] Error tracking (optional)

## 📋 Step 12: Documentation
- [ ] Store all credentials securely
- [ ] Document any customizations
- [ ] Create maintenance schedule
- [ ] Train client on updates
- [ ] Schedule handoff meeting

---

## 🎉 Launch Checklist

Before going live:
- [ ] All content reviewed and approved
- [ ] Contact information correct
- [ ] Legal pages added (Privacy, Terms)
- [ ] Forms tested multiple times
- [ ] Backup of everything created
- [ ] Client has all access credentials
- [ ] Support agreement in place

---

**Setup Started:** _______________  
**Setup Completed:** _______________  
**Launched:** _______________  
**Handed Off:** _______________