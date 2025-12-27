# Photo Gallery - Pro2

A responsive photo gallery showcasing images in a dynamic flexbox layout with a modern dark-themed interface.

## 📸 Preview

A clean, minimalist gallery page featuring:
- Dynamic flexbox image layout
- Varied image sizing for visual interest
- Dark slate theme
- Responsive design
- Playful header text

## 🎯 Purpose

This project serves as:
- A photography portfolio
- An image showcase
- A visual gallery for artwork
- A demonstration of responsive image layouts
- A template for image-based content

## 🛠️ Technologies Used

- **HTML5** - Structure and semantics
- **Tailwind CSS v4** - Utility-first styling (via CDN)
- **JavaScript** - (Minimal, script included but empty)
- **Google Fonts** - Montserrat font family

## 📁 Project Structure

```
pro2/
└── src/
    ├── index.html       # Main gallery page
    ├── script.js        # JavaScript file (currently empty)
    └── images/
        ├── 1.jpeg       # Gallery images
        ├── 2.jpeg
        ├── 3.jpeg
        ├── 4.jpeg
        ├── 5.jpeg
        ├── 6.jpeg
        ├── 7.jpeg
        ├── 8.jpeg
        └── 9.jpeg
```

## ✨ Features

### Layout & Design
- ✅ **Flexbox Layout** - Dynamic wrapping gallery grid
- ✅ **Variable Sizing** - Different image widths for visual variety
- ✅ **Responsive Design** - Adapts to all screen sizes
- ✅ **Dark Theme** - Consistent slate-900 background
- ✅ **Montserrat Typography** - Clean, modern font

### Gallery Components
- ✅ **9 Image Placeholders** - Ready for custom images
- ✅ **Mixed Aspect Ratios** - Varied visual presentation
- ✅ **Rounded Corners** - Modern aesthetic with rounded-lg
- ✅ **Gap Spacing** - Consistent 1.5rem spacing between images

### Image Sizing Strategy
The gallery uses varied widths for visual interest:
- Small: `w-20` (5rem / 80px) - Images 4, 8
- Medium: `w-40` (10rem / 160px) - Image 3
- Standard: `w-100` (25rem / 400px) - Images 1, 2, 5, 6
- Large: `w-80` (20rem / 320px) - Image 7
- Extra Large: `w-90` (22.5rem / 360px) - Image 9

## 🎨 Design System

### Color Palette
```css
Background: bg-slate-900     /* #0f172a */
Text:       text-slate-200   /* #e2e8f0 */
```

### Typography
```css
Font Family: 'Montserrat', sans-serif
Font Weights: 100-900 (variable font)
Optical Sizing: Auto

Heading: 4xl (2.25rem / 36px)
  - Tracking: tighter (-0.05em)
  - Weight: 600 (semibold)
```

### Spacing
```css
Container Padding:
  - Vertical: py-10 (2.5rem)
  - Max Width: Progressive (sm → 6xl)

Gallery Grid:
  - Display: flex flex-wrap
  - Gap: gap-6 (1.5rem)

Heading Margin:
  - Bottom: mb-7 (1.75rem)
```

## 📱 Responsive Design

### Container Breakpoints
```css
max-w-sm    /* 640px  - Mobile */
sm:max-w-lg /* 1024px - Small tablets */
md:max-w-2xl /* 1536px - Tablets */
lg:max-w-4xl /* 1792px - Laptops */
xl:max-w-6xl /* 2560px - Desktops */
```

### Image Behavior
- Images maintain aspect ratio (`aspect-auto`)
- Container uses `w-fit h-fit` for natural sizing
- Flexbox wraps images based on available width
- No fixed grid - organic flow layout

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Local web server (optional, recommended)
- Image files for gallery

### Installation

1. **Clone or navigate to project**
   ```bash
   git checkout pro2
   cd src
   ```

2. **Prepare your images**
   - Place images in `src/images/` directory
   - Name them: 1.jpeg, 2.jpeg, etc.
   - Recommended formats: JPEG, JPG, PNG, WebP

3. **Open in browser**
   ```bash
   # Direct method
   open index.html
   
   # Using Python server
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using VS Code
   Right-click → Open with Live Server
   ```

4. **View the gallery**
   - Navigate to `http://localhost:8000`

## 🔧 Customization Guide

### Update Gallery Title

```html
<h1 class="text-4xl tracking-tighter font-semibold mb-7">
  Your Gallery Title Here
</h1>
```

### Add/Remove Images

Add a new image:
```html
<div class="w-fit h-fit">
  <img src="./images/10.jpeg" class="rounded-lg aspect-auto w-80" />
</div>
```

Remove an image:
Simply delete the corresponding div block.

### Change Image Sizes

Tailwind width utilities:
```css
w-20  → 5rem   (80px)   /* Small */
w-40  → 10rem  (160px)  /* Medium-Small */
w-60  → 15rem  (240px)  /* Medium */
w-80  → 20rem  (320px)  /* Large */
w-100 → 25rem  (400px)  /* Extra Large */
w-full → 100%           /* Full width */
```

Example:
```html
<img src="./images/1.jpeg" class="rounded-lg aspect-auto w-60" />
```

### Modify Layout Gap

Change spacing between images:
```html
<!-- Current: 1.5rem -->
<div class="flex flex-wrap gap-6">

<!-- Options -->
<div class="flex flex-wrap gap-2">  <!-- 0.5rem - Tight -->
<div class="flex flex-wrap gap-4">  <!-- 1rem - Medium -->
<div class="flex flex-wrap gap-8">  <!-- 2rem - Loose -->
<div class="flex flex-wrap gap-10"> <!-- 2.5rem - Very Loose -->
```

### Change Color Theme

Update background and text colors:
```html
<!-- Current Dark Theme -->
<div class="min-h-screen bg-slate-900 text-slate-200">

<!-- Light Theme -->
<div class="min-h-screen bg-gray-50 text-gray-900">

<!-- Blue Theme -->
<div class="min-h-screen bg-blue-900 text-blue-50">

<!-- Custom Theme -->
<div class="min-h-screen bg-zinc-900 text-zinc-100">
```

### Adjust Container Width

```html
<!-- Current -->
<div class="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">

<!-- Narrower -->
<div class="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">

<!-- Wider -->
<div class="max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">

<!-- Full Width -->
<div class="max-w-full px-4">
```

## 📝 Code Highlights

### Responsive Container
```html
<div class="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto py-10 gap-8">
```
Progressive max-width that grows with screen size, centered with `mx-auto`.

### Flexible Gallery Grid
```html
<div class="flex flex-wrap gap-6">
```
- `flex`: Enables flexbox layout
- `flex-wrap`: Allows items to wrap to next line
- `gap-6`: 1.5rem spacing between items

### Image Container Pattern
```html
<div class="w-fit h-fit">
  <img src="./images/1.jpeg" class="rounded-lg aspect-auto w-100" />
</div>
```
- Outer div: Natural sizing (`w-fit h-fit`)
- Image: Rounded corners, maintains aspect ratio, custom width

### Typography Setup
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

body {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
```

## 🎓 Learning Outcomes

This project demonstrates:

1. **Flexbox Mastery**
   - Dynamic wrapping layouts
   - Gap spacing
   - Natural content flow

2. **Responsive Images**
   - Aspect ratio preservation
   - Variable sizing
   - Performance considerations

3. **Tailwind CSS**
   - Utility classes
   - Responsive modifiers
   - Spacing system

4. **Design Principles**
   - Visual hierarchy through sizing
   - Whitespace management
   - Dark theme implementation

5. **Web Performance**
   - Image optimization
   - CDN usage for fonts
   - Minimal JavaScript

## 🔄 Future Enhancements

Potential improvements:
- [ ] Add image lazy loading
- [ ] Implement lightbox/modal for full-size view
- [ ] Add image captions or descriptions
- [ ] Include filtering/category system
- [ ] Add image upload functionality
- [ ] Implement masonry layout
- [ ] Add hover effects and transitions
- [ ] Include image metadata (date, location)
- [ ] Add pagination or infinite scroll
- [ ] Implement search functionality
- [ ] Add share buttons for images
- [ ] Include image optimization
- [ ] Add loading skeletons
- [ ] Implement grid/list view toggle

## 🐛 Known Issues

- `script.js` is currently empty (no JavaScript functionality)
- Images must be manually added to `/images` folder
- No dynamic image loading
- Image sizes are hardcoded in HTML
- No alt text for images (accessibility concern)

## 💡 Pro Tips

### Image Optimization
```bash
# Optimize images before adding to gallery
# Use tools like:
- ImageOptim (Mac)
- TinyPNG (Web)
- Sharp (Node.js)
- Squoosh (Web)
```

### Accessibility Improvements
Add alt text to all images:
```html
<img 
  src="./images/1.jpeg" 
  alt="Description of image for screen readers"
  class="rounded-lg aspect-auto w-100" 
/>
```

### Performance
Use modern image formats:
```html
<picture>
  <source srcset="./images/1.webp" type="image/webp">
  <img src="./images/1.jpeg" alt="..." class="rounded-lg aspect-auto w-100">
</picture>
```

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Montserrat Font](https://fonts.google.com/specimen/Montserrat)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

## 👤 Author

**Om Pratap Dhaker**
- GitHub: [@OPDhaker](https://github.com/OPDhaker)
- LinkedIn: [opdhaker](https://linkedin.com/in/opdhaker)

---

**Project:** Photo Gallery  
**Branch:** pro2  
**Last Updated:** December 2025  
**Version:** 1.0.0
