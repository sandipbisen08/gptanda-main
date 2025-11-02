# तांडा ग्रामपंचायत - UI Design Guide

---

## Design System Overview

This document outlines the complete design system for the तांडा ग्रामपंचायत website.

---

## Color Palette

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Deep Teal | #0d3a47 | Primary buttons, headings |
| Medium Teal | #1a5f7a | Secondary elements |
| Bright Teal | #159895 | Accents, highlights |

### Neutral Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Very Light Gray | #f8fafb | Backgrounds |
| Light Gray | #ecf0f1 | Section backgrounds |
| Medium Gray | #555 | Body text |
| Dark Gray | #1a1a1a | Headings |

### Accent Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Success Green | #27ae60 | Success states |
| Warning Orange | #f39c12 | Warnings |

---

## Typography

### Font Family
**Primary:** Mukta (Marathi-optimized)
**Fallback:** Arial, sans-serif

### Font Sizes
```
H1: 3rem (hero), 2rem (mobile)
H2: 2.2rem
H3: 1.3-1.4rem
H4: 1.1rem
Body: 1rem
Small: 0.95rem
```

### Font Weights
```
Light: 300
Regular: 400
Medium: 500
Semi-bold: 600
Bold: 700
Extra-bold: 800
```

### Line Heights
```
Headings: 1.2
Body: 1.6-1.7
```

---

## Spacing System

### Padding
```
xs: 0.5rem
sm: 1rem
md: 1.5rem
lg: 2rem
xl: 2.5rem
xxl: 3rem
```

### Margins
```
xs: 0.5rem
sm: 1rem
md: 1.5rem
lg: 2rem
xl: 3rem
```

### Gap (Grid)
```
sm: 1.5rem
md: 2rem
lg: 2.5rem
xl: 3rem
```

---

## Buttons

### Primary Button
```scss
Background: linear-gradient(135deg, #0d3a47, #1a5f7a)
Color: White
Padding: 0.75rem 2rem
Border-radius: 6px
Font-weight: 600
Box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)

&:hover {
  Transform: translateY(-3px)
  Box-shadow: 0 6px 20px rgba(13, 58, 71, 0.3)
}
```

### Secondary Button
```scss
Background: linear-gradient(135deg, #159895, #0fa39f)
Color: White
Padding: 0.75rem 2rem
Border-radius: 6px
Font-weight: 600

&:hover {
  Transform: translateY(-3px)
  Box-shadow: 0 6px 20px rgba(21, 152, 149, 0.3)
}
```

### Outline Button
```scss
Background: Transparent
Border: 2px solid #0d3a47
Color: #0d3a47
Padding: 0.75rem 2rem
Border-radius: 6px

&:hover {
  Background: #0d3a47
  Color: White
}
```

---

## Cards

### Service Card
```scss
Background: White
Padding: 2.5rem 2rem
Border-radius: 12px
Box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08)
Border: 1px solid #f0f0f0

&:hover {
  Transform: translateY(-12px)
  Box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15)
  Border-color: #159895
}
```

### Announcement Card
```scss
Background: White
Padding: 2.5rem
Border-radius: 12px
Box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08)
Border-left: 5px solid #159895

&:hover {
  Transform: translateX(8px) translateY(-5px)
  Box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12)
}
```

---

## Shadows

### Shadow Levels
```scss
Subtle: 0 2px 8px rgba(0, 0, 0, 0.08)
Light: 0 4px 15px rgba(0, 0, 0, 0.1)
Medium: 0 8px 25px rgba(0, 0, 0, 0.12)
Strong: 0 12px 35px rgba(0, 0, 0, 0.15)
```

---

## Gradients

### Background Gradients
```scss
Primary: linear-gradient(135deg, #0d3a47 0%, #1a5f7a 50%, #159895 100%)
Light: linear-gradient(135deg, #f8fafb 0%, #ecf0f1 100%)
Accent: linear-gradient(90deg, #0d3a47, #159895)
```

### Text Gradients
```scss
Icon: linear-gradient(135deg, #0d3a47, #159895)
```

---

## Animations

### Timing Functions
```scss
Ease: cubic-bezier(0.25, 0.46, 0.45, 0.94)
Duration: 0.3s
```

### Animation Types
```scss
Slide In Down: translateY(-30px) → translateY(0)
Slide In Up: translateY(30px) → translateY(0)
Lift: translateY(0) → translateY(-3px to -12px)
Scale: scale(1) → scale(1.1-1.15)
Rotate: rotate(0) → rotate(5-8deg)
Border Expand: scaleX(0) → scaleX(1)
```

---

## Responsive Design

### Breakpoints
```scss
Mobile: max-width: 767px
Tablet: 768px - 1023px
Desktop: 1024px - 1439px
Large: 1440px+
```

### Mobile Adjustments
```scss
Font-size: 14px (base)
Padding: Reduced by 20-30%
Margins: Reduced by 20-30%
Grid: Single column
Animations: Simplified
```

---

## Navigation

### Navbar
```scss
Background: linear-gradient(135deg, #fff 0%, #f8fafb 100%)
Height: 80px
Box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08)
Border-bottom: 2px solid #f0f0f0
```

### Nav Links
```scss
Color: #1a1a1a
Font-weight: 500
Padding: 0.5rem 1.2rem
Position: Relative

&::after {
  Height: 3px
  Background: linear-gradient(90deg, #0d3a47, #159895)
  Transform: scaleX(0) → scaleX(1) on hover
}
```

### Dropdown Menu
```scss
Background: linear-gradient(135deg, #fff 0%, #f8fafb 100%)
Width: 220px
Border-top: 3px solid #159895
Box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12)
Border-radius: 0 0 12px 12px
```

---

## Hero Section

### Layout
```scss
Padding: 160px 20px 120px
Margin-top: 80px
Text-align: Center
```

### Background
```scss
Gradient: linear-gradient(135deg, #0d3a47 0%, #1a5f7a 50%, #159895 100%)
Overlay: Radial gradients for depth
```

### Typography
```scss
H1: 3rem, white, text-shadow
P: 1.3rem, rgba(255, 255, 255, 0.9)
```

---

## Sections

### About Section
```scss
Padding: 80px 20px
Background: #f9f9f9
Grid: 2 columns (1 on mobile)
Gap: 3rem
```

### Services Section
```scss
Padding: 80px 20px
Background: White
Grid: 3-4 columns (1 on mobile)
Gap: 2rem
```

### Announcements Section
```scss
Padding: 80px 20px
Background: linear-gradient(135deg, #f8fafb 0%, #ecf0f1 100%)
Grid: 2-3 columns (1 on mobile)
Gap: 2.5rem
```

---

## Footer

### Layout
```scss
Padding: 80px 20px 30px
Margin-top: 100px
Grid: 4 columns (1 on mobile)
Gap: 2rem
```

### Background
```scss
Gradient: linear-gradient(135deg, #0d3a47 0%, #1a5f7a 50%, #159895 100%)
Overlay: Radial gradients
```

### Typography
```scss
H3: 1.4rem, white, font-weight: 700
H4: 1.1rem, rgba(255, 255, 255, 0.95)
P: rgba(255, 255, 255, 0.8)
```

---

## Accessibility

### Color Contrast
- ✅ Primary text on white: 7.5:1 (AAA)
- ✅ White text on primary: 8.2:1 (AAA)
- ✅ Secondary text: 4.5:1 (AA)

### Font Sizes
- ✅ Minimum: 0.95rem (body)
- ✅ Maximum: 3rem (hero)
- ✅ Line height: 1.6+ (body)

### Interactive Elements
- ✅ Minimum touch target: 44x44px
- ✅ Clear focus states
- ✅ Keyboard navigation support

---

## Best Practices

### Do's ✅
- Use consistent spacing
- Apply gradients for depth
- Smooth animations (0.3s)
- Clear visual hierarchy
- Sufficient contrast
- Responsive design
- Professional fonts

### Don'ts ❌
- Don't use harsh colors
- Don't animate too fast
- Don't use too many fonts
- Don't forget mobile
- Don't ignore accessibility
- Don't use low contrast
- Don't overuse effects

---

## Component Examples

### Service Card Example
```html
<div class="service-card">
  <div class="service-icon">
    <FaTools />
  </div>
  <h3>रस्ते आणि वाहतूक</h3>
  <p>गावातील रस्त्यांची देखभाल आणि वाहतूक सुविधा</p>
</div>
```

### Button Example
```html
<button class="btn btn-primary">आमच्या सेवा</button>
<button class="btn btn-secondary">संपर्क साधा</button>
<button class="btn btn-outline">अधिक जाणून घ्या</button>
```

### Card Example
```html
<div class="announcement">
  <div class="announcement-date">१५ मे २०२४</div>
  <h3>पावसाळ्याआधी रस्त्यांची दुरुस्ती</h3>
  <p>सर्व ग्रामस्थांना कळविण्यात येत आहे...</p>
</div>
```

---

## Design Tokens

### Colors
```json
{
  "primary": "#0d3a47",
  "secondary": "#1a5f7a",
  "accent": "#159895",
  "success": "#27ae60",
  "warning": "#f39c12",
  "light": "#f8fafb",
  "dark": "#1a1a1a",
  "gray": "#555"
}
```

### Spacing
```json
{
  "xs": "0.5rem",
  "sm": "1rem",
  "md": "1.5rem",
  "lg": "2rem",
  "xl": "2.5rem",
  "xxl": "3rem"
}
```

### Typography
```json
{
  "fontFamily": "Mukta, Arial, sans-serif",
  "fontSize": {
    "h1": "3rem",
    "h2": "2.2rem",
    "h3": "1.3rem",
    "body": "1rem"
  },
  "fontWeight": {
    "regular": 400,
    "medium": 500,
    "bold": 700
  }
}
```

---

## Maintenance

### Regular Updates
- Review color usage quarterly
- Update typography as needed
- Optimize animations
- Test accessibility
- Monitor performance

### Version Control
- Document all changes
- Keep design consistent
- Update this guide
- Test across browsers

---

## Support

For questions about the design system:
1. Refer to this guide
2. Check component examples
3. Review source files
4. Test in browser

---

**Design System Version:** 1.0
**Last Updated:** November 1, 2025
**Status:** ✅ Active
