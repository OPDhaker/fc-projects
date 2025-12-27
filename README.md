# Founder's Club Projects Collection

A collection of web development projects showcasing frontend skills, DOM manipulation, API integration, and modern UI design using HTML, CSS (Tailwind CSS), and vanilla JavaScript.

## 📋 Table of Contents

- [Projects Overview](#projects-overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Branch Information](#branch-information)
- [Features Summary](#features-summary)
- [Learning Outcomes](#learning-outcomes)

## 🎯 Projects Overview

This repository contains four distinct web projects, each demonstrating different aspects of web development:

| Project | Branch | Description | Key Features |
|---------|--------|-------------|--------------|
| **Profile Page** | `pro1` | Personal portfolio/profile page | Responsive design, Professional layout, Social links |
| **Photo Gallery** | `pro2` | Image gallery showcase | Flexbox layout, Responsive grid, Image display |
| **To-Do App** | `pro3` | Task management application | LocalStorage, CRUD operations, Multi-page SPA |
| **Weather App** | `pro4` | Real-time weather information | API integration, Dynamic rendering, Search functionality |

## 🛠️ Technologies Used

### Core Technologies
- **HTML5** - Semantic markup and structure
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Dynamic functionality and logic
- **Tailwind CSS v4** - Utility-first CSS framework (via CDN)

### Additional Libraries & APIs
- **Google Fonts** - Inter & Montserrat font families
- **WeatherAPI** - Real-time weather data (pro4)
- **Lucide Icons** - SVG icons (pro1)

### Key Concepts Demonstrated
- Responsive Web Design (Mobile-first approach)
- DOM Manipulation
- Event Handling
- LocalStorage API
- Fetch API / Async-Await
- Form Handling & Validation
- Component-based UI thinking

## 📁 Project Structure

```
├── pro1/           # Profile Page
│   └── src/
│       ├── index.html
│       ├── index.js
│       └── images/
│           ├── om.jpg
│           ├── github.svg
│           └── linkedin.svg
│
├── pro2/           # Photo Gallery
│   └── src/
│       ├── index.html
│       ├── script.js
│       └── images/
│           └── [1.jpeg - 9.jpeg]
│
├── pro3/           # To-Do App
│   └── src/
│       ├── index.html
│       ├── create-a-task.html
│       └── tasks.html
│
└── pro4/           # Weather App
    └── src/
        ├── index.html
        └── script.js
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for better development experience)
  - Python: `python -m http.server`
  - Node.js: `npx serve`
  - VS Code: Live Server extension

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Navigate to desired project**
   ```bash
   git checkout pro1  # or pro2, pro3, pro4
   cd src
   ```

3. **Open in browser**
   - Simply open `index.html` in your browser, or
   - Use a local server for better experience

### Project-Specific Setup

#### Pro4 (Weather App)
The Weather App requires an API key. The current implementation includes:
```javascript
const weatherApi = "f5c7c526a9a9471689a41644252712";
```
**Note:** For production use, get your own API key from [WeatherAPI.com](https://www.weatherapi.com/)

## 🌿 Branch Information

### Main Branch
Contains this comprehensive README with project overview and documentation.

### pro1 - Profile Page
Personal portfolio page with professional layout and social media integration.
- **Live Demo Pages:** 1
- **Tech Stack:** HTML, Tailwind CSS, JavaScript
- **Highlights:** Responsive grid, SVG icons, Modern typography

### pro2 - Photo Gallery
Image gallery with dynamic layout for showcasing photography or artwork.
- **Live Demo Pages:** 1
- **Tech Stack:** HTML, Tailwind CSS, JavaScript
- **Highlights:** Flexbox layout, Responsive images, Visual variety

### pro3 - To-Do App
Full-featured task management application with persistent storage.
- **Live Demo Pages:** 3 (Home, Create Task, View Tasks)
- **Tech Stack:** HTML, Tailwind CSS, Vanilla JavaScript
- **Highlights:** LocalStorage, UUID generation, CRUD operations

### pro4 - Weather App
Real-time weather application with city search and detailed weather metrics.
- **Live Demo Pages:** 1
- **Tech Stack:** HTML, Tailwind CSS, JavaScript, WeatherAPI
- **Highlights:** API integration, Async operations, Error handling

## ✨ Features Summary

### Pro1 - Profile Page
- ✅ Responsive grid layout (mobile to desktop)
- ✅ Professional typography with Inter font
- ✅ Social media links (GitHub, LinkedIn)
- ✅ Dark theme with slate color palette
- ✅ Footer with copyright information

### Pro2 - Photo Gallery
- ✅ Flexible image gallery layout
- ✅ Responsive image sizing
- ✅ Montserrat font family
- ✅ Dark themed interface
- ✅ Mixed aspect ratio support

### Pro3 - To-Do App
- ✅ Create tasks with title and description
- ✅ View all tasks in grid layout
- ✅ Persistent storage using LocalStorage
- ✅ Delete all tasks functionality
- ✅ Empty state handling
- ✅ Timestamp tracking
- ✅ Multi-page navigation
- ✅ UUID-based task identification

### Pro4 - Weather App
- ✅ City-based weather search
- ✅ Real-time weather data
- ✅ Temperature (Celsius) and feels-like temperature
- ✅ Wind speed and direction
- ✅ Humidity and cloud coverage
- ✅ Weather condition with icon
- ✅ Beautiful gradient card design
- ✅ Error handling for invalid searches
- ✅ Loading states

## 📚 Learning Outcomes

These projects demonstrate proficiency in:

1. **Frontend Fundamentals**
   - Semantic HTML structure
   - CSS Grid and Flexbox layouts
   - Responsive design principles

2. **JavaScript Skills**
   - DOM manipulation
   - Event handling
   - Async/await patterns
   - LocalStorage API
   - Form validation

3. **Modern Development**
   - Utility-first CSS (Tailwind)
   - API integration
   - Error handling
   - Component thinking

4. **UI/UX Design**
   - Dark theme implementation
   - Typography hierarchy
   - Color theory (slate palette)
   - User feedback (alerts, empty states)
   - Responsive breakpoints

## 🎨 Design System

All projects follow a consistent design language:

### Color Palette
- **Background:** `slate-900` (#0f172a)
- **Text Primary:** `slate-200` (#e2e8f0)
- **Text Secondary:** `slate-400` (#94a3b8)
- **Accent:** `slate-200` background with `slate-900` text
- **Borders:** `slate-700` / `slate-600`

### Typography
- **Primary Font:** Inter (Pro1, Pro3, Pro4)
- **Secondary Font:** Montserrat (Pro2)
- **Weights:** 100-900 (variable)

### Layout
- **Max Width:** Responsive (sm: 640px → xl: 1280px)
- **Spacing:** Consistent padding and margins
- **Breakpoints:** Mobile-first responsive design

## 🤝 Contributing

Feel free to fork this repository and create your own variations of these projects. Some ideas:
- Add dark/light theme toggle
- Implement task editing in To-Do App
- Add weather forecast (7-day) in Weather App
- Create image upload feature for Gallery
- Add animations and transitions

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**Om Pratap Dhaker**
- GitHub: [@OPDhaker](https://github.com/OPDhaker)
- LinkedIn: [opdhaker](https://linkedin.com/in/opdhaker)

---

### 🔖 Version History

- **v1.0.0** - Initial release with 4 projects
  - Profile Page (pro1)
  - Photo Gallery (pro2)
  - To-Do App (pro3)
  - Weather App (pro4)

---

**Last Updated:** December 2024
