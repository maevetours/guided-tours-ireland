# 🎯 Quick Reference Guide - Ireland Tours Website

## 🔥 Most Common Tasks

### Update Tour Prices
1. Open `src/pages/ireland.astro`
2. Find the pricing section (search for "€" symbol)
3. Update prices
4. Commit and push to deploy

### Add New Photos
```bash
# 1. Add photos to public/images/
cp /path/to/new-photo.jpg public/images/

# 2. Optimize the images
./scripts/optimize-images.sh

# 3. Add to carousel in src/components/IrelandCarousel.astro
```

### Update Contact Info
```bash
# Search and replace in all files
grep -r "old-phone-number" src/
grep -r "old-email@example.com" src/

# Update in components and .env file
```

### Check Form Submissions
1. Go to [Google Forms](https://forms.google.com)
2. Open "Ireland Tours Contact Form"
3. Click "Responses" tab
4. Or check linked Google Sheet

## 🛠️ Development Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
git add .
git commit -m "Update content"
git push origin main
```

## 📱 Testing Checklist

### Before Deploying Changes
- [ ] Test on desktop (Chrome, Firefox, Safari)
- [ ] Test on mobile (iPhone, Android)
- [ ] Check contact form submission
- [ ] Verify all images load
- [ ] Run lighthouse audit

### Quick Mobile Test
1. Run `npm run dev`
2. Get your local IP: `hostname -I`
3. Open on phone: `http://[YOUR-IP]:4324`

## 🚨 Emergency Fixes

### Site is Down
```bash
# 1. Check GitHub Pages status
# https://www.githubstatus.com/

# 2. Check DNS
nslookup guidedtourstoireland.com

# 3. Check deployment
git log --oneline -5  # Recent commits
```

### Form Not Working
1. Check Google Forms still exists
2. Verify form IDs in `.env`
3. Test form directly on Google
4. Check browser console for errors

### Images Not Loading
```bash
# Check image names (case-sensitive!)
ls public/images/

# Verify in component
grep -r "image-name" src/
```

## 📊 Analytics Quick Views

### Check Website Traffic
1. Go to [Google Analytics](https://analytics.google.com)
2. Select "Ireland Tours" property
3. View Real-time → Overview (see current visitors)
4. View Reports → Engagement → Pages (popular pages)

### Important Metrics
- **Users**: Unique visitors
- **Sessions**: Total visits
- **Bounce Rate**: < 50% is good
- **Avg Session Duration**: > 1 minute is good

## 🔗 Important URLs

### Live Sites
- Production: https://guidedtourstoireland.com
- GitHub Repo: https://github.com/[username]/ireland-tours

### Services
- GitHub Pages: https://github.com/[username]/ireland-tours/settings/pages
- Google Analytics: https://analytics.google.com
- Google Forms: https://forms.google.com
- Domain DNS: [Registrar URL]

### Development
- Local Site: http://localhost:4324
- Local Admin: http://localhost:4324/admin
- Local API: http://localhost:3001

## 💡 Pro Tips

### Faster Deployments
```bash
# Create deploy alias
alias deploy-ireland='git add . && git commit -m "Update content" && git push'
```

### Backup Before Major Changes
```bash
# Quick backup
cp -r src/ backups/src-backup-$(date +%Y%m%d)/
```

### Monitor Performance
- Use [GTmetrix](https://gtmetrix.com) monthly
- Check [Google PageSpeed](https://pagespeed.web.dev)
- Monitor in Google Search Console

### Content Ideas
- Seasonal tour packages
- Customer testimonials
- Blog posts about Irish attractions
- Photo galleries from recent tours
- Special offers/discounts

## 📞 Quick Contacts

- **Developer Support**: [Your contact]
- **GitHub Support**: support@github.com
- **Google Support**: support.google.com
- **Domain Support**: [Registrar support]

---

**Remember**: Always test locally before deploying! 🚀