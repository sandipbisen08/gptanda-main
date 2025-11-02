# तांडा ग्रामपंचायत - Deployment Guide

## Pre-Deployment Checklist

### ✅ Code Quality
- [x] No TypeScript errors
- [x] No ESLint errors
- [x] No unused imports
- [x] Accessibility issues fixed
- [x] All components working

### ✅ SEO
- [x] Meta tags added to all pages
- [x] Structured data (schema.org) implemented
- [x] Open Graph tags configured
- [x] Canonical URLs set
- [x] Marathi language optimization

### ✅ Features
- [x] Four official pages created
- [x] Navigation dropdown menu
- [x] Responsive design
- [x] All routes working
- [x] Contact form functional

---

## Step-by-Step Deployment

### Step 1: Build for Production

```bash
# Navigate to project directory
cd c:\Users\sandi\CascadeProjects\gptanda

# Install dependencies (if not already done)
npm install

# Create production build
npm run build
```

**Expected Output:**
```
> react-scripts build
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:
  build/static/js/main.[hash].js  [size] kB
  build/static/css/main.[hash].css [size] kB
```

### Step 2: Test Production Build Locally

```bash
# Install serve globally (if not already installed)
npm install -g serve

# Serve the production build
serve -s build
```

**Expected Output:**
```
   ┌────────────────────────────────────────┐
   │   Accepting connections at:            │
   │   http://localhost:3000                │
   └────────────────────────────────────────┘
```

### Step 3: Verify All Pages

Test the following URLs:
- [ ] http://localhost:3000/ (Home)
- [ ] http://localhost:3000/about (About)
- [ ] http://localhost:3000/services (Services)
- [ ] http://localhost:3000/contact (Contact)
- [ ] http://localhost:3000/sarpanch (Sarpanch)
- [ ] http://localhost:3000/upsarpanch (Upsarpanch)
- [ ] http://localhost:3000/gramsevak (Gramsevak)
- [ ] http://localhost:3000/adhyaksha (Adhyaksha)

### Step 4: Deploy to Hosting

#### Option A: Netlify (Recommended)

1. **Create Netlify Account**
   - Go to https://www.netlify.com
   - Sign up with GitHub/GitLab/Bitbucket

2. **Connect Repository**
   - Click "New site from Git"
   - Select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `build`

3. **Deploy**
   - Click "Deploy site"
   - Wait for deployment to complete

#### Option B: Vercel

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Select your repository
   - Click "Import"

3. **Deploy**
   - Vercel automatically detects React
   - Click "Deploy"

#### Option C: GitHub Pages

1. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/gptanda"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

#### Option D: Traditional Hosting (cPanel, etc.)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files**
   - Upload contents of `build` folder to your hosting
   - Usually via FTP/SFTP to `public_html` folder

3. **Configure .htaccess** (for Apache servers)
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## Post-Deployment Steps

### 1. Update Configuration

Update the following files with your actual domain:

**public/index.html**
```html
<meta property="og:url" content="https://yourdomain.com" />
```

**src/components/SEO.tsx** (if using hardcoded URLs)
```typescript
canonicalUrl="https://yourdomain.com/page"
```

### 2. Update Contact Information

Update in all official pages:
- Phone numbers
- Email addresses
- Office address
- Social media links

### 3. Add Images

Create `public/images/` folder and add:
- `sarpanch.jpg` - Sarpanch photo
- `upsarpanch.jpg` - Upsarpanch photo
- `gramsevak.jpg` - Gramsevak photo
- `adhyaksha.jpg` - Adhyaksha photo
- `village.jpg` - Village photo

### 4. Create Sitemap

Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/about</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/services</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/contact</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/sarpanch</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/upsarpanch</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/gramsevak</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/adhyaksha</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

### 5. Create robots.txt

Create `public/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /private

Sitemap: https://yourdomain.com/sitemap.xml
```

### 6. Setup Google Search Console

1. Go to https://search.google.com/search-console
2. Add your domain
3. Verify ownership (add HTML file or DNS record)
4. Submit sitemap
5. Monitor indexing status

### 7. Setup Google Analytics

1. Go to https://analytics.google.com
2. Create new property
3. Get tracking ID
4. Add to `public/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 8. Setup SSL Certificate

- Most modern hosting providers offer free SSL (Let's Encrypt)
- Ensure HTTPS is enabled
- Redirect HTTP to HTTPS

---

## Performance Optimization

### 1. Enable Gzip Compression

Add to `.htaccess` (Apache):
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

### 2. Browser Caching

Add to `.htaccess`:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 1 hour"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
</IfModule>
```

### 3. Image Optimization

- Use WebP format for images
- Compress images before uploading
- Use responsive images

### 4. CDN Setup

- Use Cloudflare (free tier available)
- Configure caching rules
- Enable minification

---

## Monitoring & Maintenance

### Weekly Tasks
- [ ] Check Google Search Console for errors
- [ ] Monitor website uptime
- [ ] Check analytics for traffic

### Monthly Tasks
- [ ] Review search rankings
- [ ] Update content if needed
- [ ] Check for broken links
- [ ] Review analytics reports

### Quarterly Tasks
- [ ] Update security certificates
- [ ] Backup website
- [ ] Review and update SEO
- [ ] Performance audit

---

## Troubleshooting

### Issue: Blank Page After Deployment

**Solution:**
- Check browser console for errors
- Verify build was successful
- Check hosting server logs
- Ensure .htaccess is configured correctly

### Issue: Routes Not Working

**Solution:**
- Add .htaccess file for React Router
- Configure server to redirect to index.html
- Check base URL in package.json

### Issue: Images Not Loading

**Solution:**
- Verify image paths are correct
- Check image file permissions
- Use absolute paths instead of relative

### Issue: SEO Meta Tags Not Showing

**Solution:**
- Check page source (Ctrl+U)
- Verify SEO component is imported
- Check structured data in schema validator

---

## Rollback Plan

If deployment fails:

1. **Revert to Previous Version**
   ```bash
   git revert HEAD
   npm run build
   # Redeploy
   ```

2. **Restore from Backup**
   - Contact hosting provider
   - Request restore from backup

3. **Manual Fix**
   - Identify issue
   - Fix in code
   - Rebuild and redeploy

---

## Security Checklist

- [ ] Enable HTTPS
- [ ] Set security headers
- [ ] Configure CORS if needed
- [ ] Validate form inputs
- [ ] Sanitize user data
- [ ] Keep dependencies updated
- [ ] Regular security audits

---

## Support Resources

- **React Documentation:** https://react.dev
- **React Router:** https://reactrouter.com
- **TypeScript:** https://www.typescriptlang.org
- **Netlify Docs:** https://docs.netlify.com
- **Vercel Docs:** https://vercel.com/docs

---

## Final Checklist Before Going Live

- [ ] All pages tested
- [ ] All links working
- [ ] Mobile responsive verified
- [ ] SEO meta tags verified
- [ ] Images optimized
- [ ] Performance tested
- [ ] Security configured
- [ ] Analytics setup
- [ ] Backup created
- [ ] Domain configured
- [ ] SSL certificate installed
- [ ] Sitemap submitted
- [ ] Search Console verified

---

**Deployment Date:** _______________
**Deployed By:** _______________
**Hosting Provider:** _______________
**Domain:** _______________

---

**Last Updated:** November 1, 2025
