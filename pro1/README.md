# Profile Page - Pro1

A modern, responsive personal profile page showcasing professional information with a clean dark-themed design.

## 📸 Preview

A single-page profile layout featuring:
- Profile image with rounded corners
- Professional introduction
- Social media links
- Responsive grid layout
- Dark theme with slate color palette

## 🎯 Purpose

This project serves as a personal portfolio/profile page that can be used as:
- A landing page for personal websites
- A professional introduction page
- A portfolio header section
- A contact/about page

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **Tailwind CSS v4** - Utility-first styling (via CDN)
- **JavaScript** - (Minimal, script included but empty)
- **Google Fonts** - Inter font family
- **SVG Icons** - Custom Lucide icons for social links

## 📁 Project Structure

```
pro1/
└── src/
    ├── index.html          # Main HTML file
    ├── index.js            # JavaScript file (currently empty)
    └── images/
        ├── om.jpg          # Profile picture
        ├── github.svg      # GitHub icon
        └── linkedin.svg    # LinkedIn icon
```

## ✨ Features

### Layout & Design
- ✅ **Responsive Grid Layout** - Adapts from mobile to desktop seamlessly
  - Mobile: Single column
  - Large screens: 4-column grid with 1:3 ratio
- ✅ **Modern Typography** - Inter font with optical sizing
- ✅ **Dark Theme** - Slate-900 background with slate-200 text
- ✅ **Professional Spacing** - Consistent padding and gaps

### Content Sections
- ✅ **Profile Image** - Rounded display with overflow handling
- ✅ **Name & Title** - Large heading with role badge
- ✅ **Bio Section** - Multi-paragraph professional introduction
- ✅ **Footer** - Copyright and social links

### Components

#### Header Section
```html
- Profile name: "Om Pratap Dhaker"
- Role badge: "Full Stack Developer"
```

#### Bio Content
- Introduction to skills and background
- Professional experience (Beyond Swipes)
- Personal interests and hobbies
- Call to engage

#### Social Links
- GitHub: [@OPDhaker](https://github.com/OPDhaker)
- LinkedIn: [opdhaker](https://linkedin.com/in/opdhaker)

## 🎨 Design System

### Color Palette
```css
Background: bg-slate-900     /* #0f172a */
Text:       text-slate-200   /* #e2e8f0 */
Muted:      text-slate-400   /* #94a3b8 */
Badge:      bg-slate-600     /* #475569 */
```

### Typography
```css
Font Family: 'Inter', sans-serif
Font Weights: 100-900 (variable font)
Optical Sizing: Auto

Heading: 4xl (2.25rem / 36px)
Badge: xs (0.75rem / 12px)
Body: base (1rem / 16px)
Footer: xs (0.75rem / 12px)
```

### Spacing & Layout
```css
Container Max-Width:
  - sm: 640px (max-w-sm)
  - lg: 1024px (max-w-lg)
  - 2xl: 1536px (max-w-2xl)
  - 4xl: 1920px (max-w-4xl)
  - 6xl: 2560px (max-w-6xl)

Grid Configuration:
  - Mobile: 1 column
  - lg+: 4 columns (1:3 ratio)

Vertical Spacing:
  - Container padding: py-10
  - Section gaps: gap-8
  - Content gaps: space-y-1, space-y-3, space-y-8
```

## 📱 Responsive Breakpoints

```css
Mobile:     < 640px   (Default)
sm:         640px     (max-w-sm, max-w-lg)
md:         768px     (max-w-2xl)
lg:         1024px    (max-w-4xl, grid-cols-4)
xl:         1280px    (max-w-6xl)
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Local web server (optional)

### Installation

1. **Clone or download the project**
   ```bash
   git checkout pro1
   cd src
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser, or
   - Use a local server:
     ```bash
     # Python
     python -m http.server 8000
     
     # Node.js
     npx serve
     
     # VS Code
     Use Live Server extension
     ```

3. **View the page**
   - Direct: Open `index.html`
   - Server: Navigate to `http://localhost:8000`

## 🔧 Customization Guide

### Update Profile Information

1. **Profile Image**
   ```html
   <!-- Replace in index.html -->
   <img src="./images/your-image.jpg" alt="Your Name" />
   ```

2. **Name and Title**
   ```html
   <h1>Your Name</h1>
   <span class="...">Your Role</span>
   ```

3. **Bio Content**
   Edit the paragraph content inside:
   ```html
   <div class="text-slate-400 space-y-3">
     <p>Your introduction...</p>
     <!-- Add more paragraphs as needed -->
   </div>
   ```

4. **Social Links**
   ```html
   <a href="https://github.com/yourusername">
   <a href="https://linkedin.com/in/yourusername">
   ```

### Customize Colors

Change the color scheme by modifying Tailwind classes:

```html
<!-- Background -->
<div class="bg-slate-900">  <!-- Change to bg-zinc-900, bg-gray-900, etc. -->

<!-- Text -->
<div class="text-slate-200"> <!-- Change to text-zinc-200, text-gray-200, etc. -->

<!-- Badge -->
<span class="bg-slate-600">  <!-- Change to bg-blue-600, bg-green-600, etc. -->
```

### Add More Sections

Add new content sections before the footer:

```html
<div class="lg:col-span-3 space-y-8">
  <!-- Existing content -->
  
  <!-- New section example: Skills -->
  <div class="space-y-4">
    <h2 class="text-2xl font-semibold">Skills</h2>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 bg-slate-700 rounded-full text-sm">JavaScript</span>
      <span class="px-3 py-1 bg-slate-700 rounded-full text-sm">React</span>
      <!-- Add more skills -->
    </div>
  </div>
</div>
```

## 📝 Code Highlights

### Responsive Grid
```html
<div class="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto grid lg:grid-cols-4 py-10 gap-8">
```
This creates a responsive container that:
- Grows from small to extra-large
- Switches to 4-column grid at `lg` breakpoint
- Maintains consistent spacing

### Profile Image Container
```html
<div class="lg:col-span-1 rounded-lg overflow-hidden bg-red-300 h-fit">
  <img src="./images/om.jpg" alt="om's image" />
</div>
```
- Spans 1 column in grid
- Rounded corners with overflow control
- Height fits content
- Background color fallback

### Footer with Flexbox
```html
<div class="flex items-center justify-between border-t h-8 px-10 lg:px-40 text-xs text-slate-400 py-6">
```
- Horizontal layout with space-between
- Border top separator
- Responsive horizontal padding
- Small text size

## 🎓 Learning Outcomes

This project demonstrates:

1. **Responsive Design**
   - Mobile-first approach
   - Breakpoint management
   - Flexible grid layouts

2. **Tailwind CSS**
   - Utility-first methodology
   - Spacing and sizing
   - Color palette usage
   - Typography scale

3. **HTML Best Practices**
   - Semantic structure
   - Proper meta tags
   - External resource loading
   - Alt text for images

4. **Modern CSS**
   - Flexbox for footer
   - CSS Grid for main layout
   - Custom fonts integration
   - SVG icons

## 🔄 Future Enhancements

Potential improvements:
- [ ] Add smooth scroll animations
- [ ] Implement dark/light theme toggle
- [ ] Add contact form section
- [ ] Include project showcase grid
- [ ] Add skills section with icons
- [ ] Implement typing animation for intro
- [ ] Add downloadable resume button
- [ ] Include testimonials section
- [ ] Add smooth page transitions
- [ ] Implement lazy loading for images

## 🐛 Known Issues

- `index.js` is currently empty (included for future functionality)
- Social SVG icons have hardcoded stroke color
- No favicon specified

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Inter Font](https://fonts.google.com/specimen/Inter)
- [Lucide Icons](https://lucide.dev/)

## 👤 Author

**Om Pratap Dhaker**
- Role: Full Stack Developer
- GitHub: [@OPDhaker](https://github.com/OPDhaker)
- LinkedIn: [opdhaker](https://linkedin.com/in/opdhaker)

---

**Project:** Profile Page  
**Branch:** pro1  
**Last Updated:** December 2025  
**Version:** 1.0.0

