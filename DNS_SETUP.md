# DNS Setup for GitHub Pages

## For guidedtourstoireland.com

### Option 1: Apex Domain (guidedtourstoireland.com)
Add these DNS records at your domain registrar:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### Option 2: WWW Subdomain (www.guidedtourstoireland.com)
```
Type: CNAME
Name: www
Value: [her-github-username].github.io
```

### For Both (Recommended):
1. Set up the A records for apex domain
2. Add CNAME for www
3. GitHub will handle redirects

### Enable HTTPS:
1. Wait ~15 minutes after DNS propagates
2. Go to repo Settings → Pages
3. Check "Enforce HTTPS"

### DNS Propagation:
- Takes 10 minutes to 48 hours
- Check status: https://www.whatsmydns.net/

### Already Using Domain?
If currently on Replit:
1. Remove/disable Replit's DNS first
2. Wait 1 hour
3. Add GitHub's DNS records