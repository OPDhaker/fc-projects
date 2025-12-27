# To-Do App - Pro3

A full-featured task management application with persistent storage, built using vanilla JavaScript and LocalStorage API.

## 📋 Preview

A complete task management system featuring:
- Multi-page application (Home, Create Task, View Tasks)
- LocalStorage for data persistence
- Clean, modern UI with dark theme
- CRUD operations (Create, Read, Delete)
- Responsive design across all pages
- Empty state handling

## 🎯 Purpose

This project serves as:
- A functional to-do list application
- A demonstration of LocalStorage API usage
- A multi-page web application example
- A showcase of form handling and validation
- A practical JavaScript DOM manipulation project

## 🛠️ Technologies Used

- **HTML5** - Multi-page structure
- **Tailwind CSS v4** - Utility-first styling (via CDN)
- **Vanilla JavaScript** - Core functionality
- **LocalStorage API** - Data persistence
- **Crypto API** - UUID generation
- **Google Fonts** - Inter font family

## 📁 Project Structure

```
pro3/
└── src/
    ├── index.html           # Landing/home page
    ├── create-a-task.html   # Task creation form
    └── tasks.html           # Task list view
```

## ✨ Features

### Core Functionality
- ✅ **Create Tasks** - Add tasks with title and description
- ✅ **View Tasks** - Grid layout of all tasks
- ✅ **Delete All** - Clear all tasks with confirmation
- ✅ **Persistent Storage** - Data survives page reloads
- ✅ **Timestamps** - Automatic creation time tracking
- ✅ **UUID Generation** - Unique task identifiers

### UI Components
- ✅ **Navigation Bar** - Consistent across all pages
- ✅ **Form Validation** - Required fields
- ✅ **Empty State** - Helpful message when no tasks
- ✅ **Responsive Grid** - 1-3 columns based on screen size
- ✅ **Alert Feedback** - Success and confirmation messages

### Pages

#### 1. Home Page (`index.html`)
- Hero section with catchy headline
- Call-to-action button
- Navigation to other pages
- Minimal, focused design

#### 2. Create Task (`create-a-task.html`)
- Task title input (required)
- Description textarea (optional)
- Form validation
- Submit button with hover effects
- Success notification

#### 3. View Tasks (`tasks.html`)
- Grid of task cards
- Delete all button
- Empty state handling
- Formatted timestamps
- Responsive layout

## 🎨 Design System

### Color Palette
```css
Background:     bg-slate-900      /* #0f172a */
Card BG:        bg-slate-800      /* #1e293b */
Text Primary:   text-slate-200    /* #e2e8f0 */
Text Secondary: text-slate-300    /* #cbd5e1 */
Text Muted:     text-slate-400    /* #94a3b8 */
Text Dim:       text-slate-500    /* #64748b */
Border:         border-slate-700  /* #334155 */
Border Alt:     border-slate-600  /* #475569 */
Accent:         bg-slate-200      /* #e2e8f0 */
Danger:         bg-red-600        /* #dc2626 */
```

### Typography
```css
Font Family: 'Inter', sans-serif
Font Weights: 100-900 (variable)

h1: text-6xl (3.75rem / 60px) - Home page
h2: text-4xl (2.25rem / 36px) - Section headers
h3: text-lg (1.125rem / 18px) - Task titles
Body: text-sm (0.875rem / 14px)
Footer: text-xs (0.75rem / 12px)
```

### Layout
```css
Container Widths:
  - Home: max-w-sm → max-w-6xl
  - Forms: max-w-lg → max-w-3xl

Grid System:
  - Mobile: 1 column
  - sm: 2 columns
  - lg: 3 columns

Spacing:
  - Page padding: py-10
  - Section gaps: gap-6, gap-8
  - Form gaps: gap-6
```

## 🔄 Data Flow

### Task Object Structure
```javascript
{
  id: "550e8400-e29b-41d4-a716-446655440000",  // UUID
  title: "Study for SPCM Exam",                 // String (required)
  description: "Start with unit 1",             // String (optional)
  createdAt: "2024-12-27T10:30:00.000Z"        // ISO 8601 timestamp
}
```

### LocalStorage Schema
```javascript
Key: "tasks"
Value: JSON array of task objects

Example:
localStorage.getItem("tasks")
// Returns: '[{"id":"...","title":"...","description":"...","createdAt":"..."}]'
```

### Create Task Flow
```
1. User fills form (title required, description optional)
2. Form submit event triggered
3. Validation checks
4. Generate UUID for task ID
5. Create task object with timestamp
6. Retrieve existing tasks from LocalStorage
7. Add new task to array
8. Save updated array to LocalStorage
9. Reset form
10. Show success alert
```

### View Tasks Flow
```
1. Page loads
2. Retrieve tasks from LocalStorage
3. Parse JSON data
4. Check if tasks exist
   - If no tasks: Show empty state
   - If tasks exist: Render task cards
5. Format timestamps for display
6. Apply line-clamp to descriptions
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser with LocalStorage support
- Local web server (optional but recommended)

### Installation

1. **Clone or navigate to project**
   ```bash
   git checkout pro3
   cd src
   ```

2. **Open in browser**
   ```bash
   # Direct method
   open index.html
   
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Navigate the app**
   - Start at: `http://localhost:8000/index.html`
   - Create task: Click "Create Task" button
   - View tasks: Navigate to Tasks page

## 📝 Code Documentation

### Creating a Task

```javascript
// Form submit handler in create-a-task.html
const form = document.getElementById("taskForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload

  // Get form values
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  // Validate required field
  if (!title) return;

  // Create task object
  const task = {
    id: crypto.randomUUID(),              // Generate unique ID
    title,
    description,
    createdAt: new Date().toISOString(),  // ISO 8601 format
  };

  // Get existing tasks
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
  // Add new task
  tasks.push(task);

  // Save to LocalStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Reset form and notify user
  form.reset();
  alert("Task created successfully 🚀");
});
```

### Displaying Tasks

```javascript
// Task rendering in tasks.html
const container = document.getElementById("tasksContainer");
const emptyState = document.getElementById("emptyState");

// Retrieve tasks
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Handle empty state
if (tasks.length === 0) {
  emptyState.classList.remove("hidden");
} else {
  // Render each task
  tasks.forEach(task => {
    const card = document.createElement("div");
    card.className = "bg-slate-800 border-[0.3px] border-slate-600 rounded-md p-6 flex flex-col gap-4";

    card.innerHTML = `
      <h3 class="text-lg font-semibold tracking-tight capitalize">${task.title}</h3>
      <p class="text-sm text-slate-400 line-clamp-2">${task.description || "No description"}</p>
      <span class="text-xs text-slate-500 mt-10">
        ${new Date(task.createdAt).toLocaleString()}
      </span>
    `;

    container.appendChild(card);
  });
}
```

### Deleting All Tasks

```javascript
// Delete all handler in tasks.html
const deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", (e) => {
  // Confirm action
  alert("This action will delete all the created tasks.");
  
  // Clear LocalStorage
  localStorage.clear();
  
  // Reload page to show empty state
  location.reload();
});
```

## 🔧 Customization Guide

### Change Form Fields

Add new field in `create-a-task.html`:
```html
<div>
  <label class="block tracking-tight font-medium text-slate-300">Due Date</label>
  <input
    type="date"
    id="dueDate"
    class="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-700"
  />
</div>
```

Update JavaScript to include new field:
```javascript
const task = {
  id: crypto.randomUUID(),
  title,
  description,
  dueDate: document.getElementById("dueDate").value,  // Add this
  createdAt: new Date().toISOString(),
};
```

### Customize Task Card

Modify card template in `tasks.html`:
```javascript
card.innerHTML = `
  <div class="flex justify-between items-start">
    <h3 class="text-lg font-semibold">${task.title}</h3>
    <button class="text-red-500 hover:text-red-700">Delete</button>
  </div>
  <p class="text-sm text-slate-400">${task.description || "No description"}</p>
  <div class="flex justify-between items-center mt-4">
    <span class="text-xs text-slate-500">${new Date(task.createdAt).toLocaleString()}</span>
    <span class="px-2 py-1 bg-green-600 rounded text-xs">Active</span>
  </div>
`;
```

### Add Task Status

```javascript
// In create task
const task = {
  id: crypto.randomUUID(),
  title,
  description,
  status: "pending",  // Add status field
  createdAt: new Date().toISOString(),
};
```

### Implement Individual Delete

```javascript
// Add delete button to each card
card.innerHTML = `
  <h3>${task.title}</h3>
  <p>${task.description}</p>
  <button 
    onclick="deleteTask('${task.id}')" 
    class="text-red-500"
  >
    Delete
  </button>
`;

// Add delete function
function deleteTask(id) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  location.reload();
}
```

## 🎓 Learning Outcomes

This project demonstrates:

1. **LocalStorage API**
   - Storing data persistently
   - Retrieving and parsing JSON
   - Updating stored data
   - Clearing storage

2. **Form Handling**
   - Event prevention
   - Input validation
   - Form reset
   - User feedback

3. **DOM Manipulation**
   - Creating elements dynamically
   - Adding event listeners
   - Modifying classes
   - Updating content

4. **JavaScript Concepts**
   - ES6+ syntax
   - Array methods (push, filter, forEach)
   - JSON methods (parse, stringify)
   - Template literals
   - Arrow functions

5. **Multi-Page Architecture**
   - Navigation patterns
   - Shared components (navbar)
   - State management across pages
   - Consistent styling

6. **UUID Generation**
   - Using Crypto API
   - Unique identifiers
   - Data integrity

## 🔄 Future Enhancements

Potential improvements:
- [ ] Edit individual tasks
- [ ] Delete individual tasks
- [ ] Mark tasks as complete
- [ ] Filter tasks (all, active, completed)
- [ ] Sort tasks (date, alphabetical)
- [ ] Search functionality
- [ ] Due dates and reminders
- [ ] Priority levels
- [ ] Categories/tags
- [ ] Dark/light theme toggle
- [ ] Export tasks to JSON/CSV
- [ ] Import tasks from file
- [ ] Drag and drop reordering
- [ ] Task statistics/analytics
- [ ] Undo delete functionality

## 🐛 Known Issues & Limitations

### Current Issues
- No edit functionality for existing tasks
- No individual task deletion
- Alert dialogs are basic (not custom modals)
- No confirmation on "Delete All"
- No undo functionality

### Browser Limitations
- LocalStorage has ~5-10MB limit per domain
- Data is domain-specific (can't share across domains)
- Data is cleared if user clears browser data
- No automatic sync across devices

### Missing Features
- No user authentication
- No cloud backup
- No offline sync
- No collaborative features
- No task sharing

## 💡 Pro Tips

### Testing LocalStorage

```javascript
// View all tasks in console
console.log(JSON.parse(localStorage.getItem("tasks")));

// Clear all tasks manually
localStorage.removeItem("tasks");

// Add sample tasks
const sampleTasks = [
  {
    id: crypto.randomUUID(),
    title: "Sample Task 1",
    description: "This is a sample",
    createdAt: new Date().toISOString()
  }
];
localStorage.setItem("tasks", JSON.stringify(sampleTasks));
```

### Error Handling

Add try-catch for robust code:
```javascript
try {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // Process tasks...
} catch (error) {
  console.error("Error reading tasks:", error);
  // Show user-friendly error message
}
```

### Input Sanitization

```javascript
// Prevent XSS attacks
const sanitize = (str) => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

const task = {
  title: sanitize(title),
  description: sanitize(description),
  // ...
};
```

## 📚 Resources

- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Crypto API - randomUUID](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
- [Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Date.prototype.toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)

## 👤 Author

**Om Pratap Dhaker**
- GitHub: [@OPDhaker](https://github.com/OPDhaker)
- LinkedIn: [opdhaker](https://linkedin.com/in/opdhaker)

---

**Project:** To-Do App  
**Branch:** pro3  
**Last Updated:** December 2025  
**Version:** 1.0.0
