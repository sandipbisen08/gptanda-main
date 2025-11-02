# Gallery Section - Quick Setup Guide

---

## 📸 Gallery Overview

A responsive, professional gallery section showcasing village activities, development projects, and community events with smooth hover animations and green overlay.

---

## 🎨 Gallery Features

### Visual Design
- **Grid Layout:** 3 columns (desktop), 2 (tablet), 1 (mobile)
- **Square Images:** 1:1 aspect ratio
- **Rounded Corners:** 12px border-radius
- **Shadows:** Professional depth effect
- **Overlay:** Green gradient with title

### Animations
- **Image Zoom:** 1.1x scale on hover
- **Card Lift:** -8px transform
- **Overlay Fade:** Smooth opacity transition
- **Duration:** 0.3s smooth easing

---

## 📁 Image Setup

### Create Images Directory
```bash
mkdir -p public/images
```

### Add Gallery Images
Place these images in `/public/images/`:

1. **gallery-1.jpg** - गाव विकास कार्यक्रम (Village Development)
2. **gallery-2.jpg** - स्वच्छता अभियान (Cleanliness Campaign)
3. **gallery-3.jpg** - शिक्षा कार्यक्रम (Education Programs)
4. **gallery-4.jpg** - सामाजिक कार्यक्रम (Social Events)
5. **gallery-5.jpg** - कृषि विकास (Agricultural Development)
6. **gallery-6.jpg** - महिला सशक्तिकरण (Women Empowerment)

### Image Specifications
- **Size:** 400x400px minimum
- **Format:** JPG, PNG, or WebP
- **File Size:** 100-300KB (optimized)
- **Aspect Ratio:** 1:1 (square)

---

## 🎯 Customization

### Change Gallery Titles
Edit in `src/pages/Home.tsx`:

```tsx
<div className="gallery-item">
  <img src="/images/gallery-1.jpg" alt="Your Title" />
  <div className="gallery-overlay">
    <h3>Your Custom Title</h3>
  </div>
</div>
```

### Change Overlay Color
Edit in `src/pages/Home.scss`:

```scss
.gallery-overlay {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(14, 159, 110, 0.95) 100%);
  // Change rgba(14, 159, 110, 0.95) to your color
}
```

### Change Grid Columns
Edit in `src/pages/Home.scss`:

```scss
.gallery-grid {
  // Desktop: 3 columns
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
  // Tablet: 2 columns
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  // Mobile: 1 column
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}
```

---

## 🔧 Add More Gallery Items

### Step 1: Add Image
Place new image in `/public/images/gallery-7.jpg`

### Step 2: Update Home.tsx
Add new gallery item:

```tsx
<div className="gallery-item">
  <img src="/images/gallery-7.jpg" alt="नई गतिविधि" />
  <div className="gallery-overlay">
    <h3>नई गतिविधि</h3>
  </div>
</div>
```

### Step 3: No CSS Changes Needed
The grid will automatically adjust!

---

## 📱 Responsive Behavior

### Desktop (1024px+)
- 3 columns
- 2rem gap
- Full-size images

### Tablet (768px - 1023px)
- 2 columns
- 1rem gap
- Optimized spacing

### Mobile (320px - 767px)
- 1 column
- 1rem gap
- Full-width images

---

## 🎬 Animation Details

### Hover Effects
```scss
// Card lifts up
transform: translateY(-8px);

// Image zooms in
img {
  transform: scale(1.1);
}

// Overlay fades in from bottom
.gallery-overlay {
  opacity: 1;
  transform: translateY(0);
}
```

### Timing
- **Duration:** 0.3s
- **Easing:** cubic-bezier(0.25, 0.46, 0.45, 0.94)
- **GPU Accelerated:** Yes

---

## ✅ Testing Checklist

- [ ] Images are placed in `/public/images/`
- [ ] All 6 images are 400x400px or larger
- [ ] Images are optimized (100-300KB each)
- [ ] Gallery displays on desktop
- [ ] Gallery displays on tablet
- [ ] Gallery displays on mobile
- [ ] Hover effects work smoothly
- [ ] Overlay titles are visible
- [ ] No console errors
- [ ] Images load quickly

---

## 🚀 Deployment

### Before Deploying
1. ✅ Optimize all images
2. ✅ Test on mobile devices
3. ✅ Verify image paths
4. ✅ Check alt text
5. ✅ Test hover effects

### Deploy Command
```bash
npm run build
```

---

## 📝 Marathi Titles

### Current Titles
1. गाव विकास कार्यक्रम - Village Development Programs
2. स्वच्छता अभियान - Cleanliness Campaign
3. शिक्षा कार्यक्रम - Education Programs
4. सामाजिक कार्यक्रम - Social Events
5. कृषि विकास - Agricultural Development
6. महिला सशक्तिकरण - Women Empowerment

### To Change Titles
Edit in `src/pages/Home.tsx` and update the `<h3>` text inside `.gallery-overlay`

---

## 🎨 Color Reference

### Overlay Gradient
- **Top:** Transparent (shows image)
- **Bottom:** Green (#0E9F6E) with 95% opacity

### Text Color
- **Color:** White (#FFFFFF)
- **Font Weight:** Bold (700)
- **Font Size:** 1.1rem

---

## 🔍 Troubleshooting

### Images Not Showing
- Check image paths in Home.tsx
- Verify images exist in `/public/images/`
- Check browser console for 404 errors

### Hover Effects Not Working
- Clear browser cache
- Restart development server
- Check CSS compilation

### Layout Issues
- Check responsive breakpoints
- Verify CSS is loaded
- Test on different screen sizes

---

## 📚 Related Files

- **Component:** `src/pages/Home.tsx`
- **Styling:** `src/pages/Home.scss`
- **Images:** `/public/images/`
- **Documentation:** `GALLERY_SECTION.md`

---

## 🎯 Next Steps

1. **Add Images:** Place 6 images in `/public/images/`
2. **Customize:** Update titles and descriptions as needed
3. **Test:** Verify on desktop, tablet, and mobile
4. **Deploy:** Build and deploy to production

---

**Status:** ✅ Ready to Use
**Last Updated:** November 2, 2025
