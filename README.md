# 🎙️ Podcast Explorer – React Application
---
## 📌 Overview
Podcast Explorer is a modern React application designed to display a clean, responsive grid of podcast previews. Each podcast is presented as an interactive visual card containing its *cover*, *title*, *genres*, *season count*, and *updated date*.
This project demonstrates the fundamentals of component-based UI design, reusable logic patterns, and state-driven rendering in React.

Although search, filtering, and modal interaction elements are visually present, **their logic is not yet implemented in this version**. These features will be added in a future phase of the project.

---

## 📘 Project description
- The application loads and displays podcasts using an API helper and React state management. It uses modular components — such as `PodcastCard`, `PodcastGrid`, `Header`, and `Container` — to ensure the UI is structured, readable, and easy to extend.
- Podcasts are displayed in a structured layout, with genre mapping, date formatting, and responsive card styling.
The focus of this version is **presentation, rendering efficiency, component reuse, and data mapping**, while interaction-based features (search, filter, modal) are intentionally left incomplete for later implementation.

---

## 🛠️ Technologies used
- **React 18+**
- **JavaScript (ES6+)**
- **Vite** (or your chosen bundler)
- **CSS (global styles + component-specific styling)**
- **Fetch API** (used inside the API helper)
- **SVG assets**
- **JSX + Functional Component Architecture**

---

## ✨ Features
### 🎨 UI Rendering
- Responsive grid of podcast cards
- Each card displays:
  - Cover image
  - Title
  - Genre tags
  - Season count
  - Human-readable "Updated" date

### 🧩 Component-Based Architecture
- `PodcastCard.jsx` → Single podcast preview
- `PodcastGrid.jsx` → Layout engine for list rendering
- `Header.jsx` → Top application header
- `Container.jsx` → Space for future search/filter UI
- `App.jsx` → Main logic and data flow
- `fetchPodcast.js` → Centralized API helper

### 🔄 Data Processing
- Genre ID → Genre name mapping
- ISO date → Localized readable format
- Initial fetch on page load
- Loading and error handling states

### 🚧 Features Included in UI but Not Yet Functional
*(These are visual placeholders only. Logic will be implemented in the next project.)*
- Search bar
- Genre filter
- Sorting options
- Modal opening on card click

---

## 📁 Project Structure
```
📂 PodcastApp/
│
├── index.html                     # HTML layout
│
├── 📂 src
│   ├── 📂 api/
│   │   ├── fetchPodcast.js       # Fetches podcast data
│   │
│   ├── 📂 assets/                # SVG icons and assets
│   │
│   ├── 📂 components/ 
│   │   ├── Container.jsx         # Placeholder for search/filter controls
│   │   ├── Header.jsx            # Page header
│   │   ├── PodcastCard.jsx       # Renders a single podcast card
│   │   └── PodcastGrid.jsx       # Renders all podcasts
│   │
│   ├── data.js                   # Genre metadata
│   ├── App.jsx                   # Main application component
│   ├── App.css                   # Page-specific styling
│   ├── index.css                 # Global styles
└── └── main.jsx                  # App bootstrap
```
---

## ⚙️ Setup Instructions
#### 1️⃣ Clone the repository
   ```bash
   git clone https://github.com/Davidaniekan/DAVANI25160_PTO2503_A_David-Aniekan_DJS03.git

   cd podcastApp
   ```
#### 2️⃣ Install dependencies
- Using npm:
   ```bash
   npm install
   ```
#### 3️⃣ Start development server
  ```bash
   npm run dev
   ```
- Your app will run at:
   ```
   http://localhost:5173/
   ```
---

## 🚀 Usage / Interaction guide
### ▶️ Viewing Podcasts
Once the application loads:
- Podcasts will display automatically in a grid.
- If data is loading, a loading message is shown.
- If the fetch fails, an error message displays.

### 🎧 Podcast Card Interactions
Each card shows:
- Large podcast cover
- Title
- Seasons count with icon
- Genre tags
- Updated date

The project includes **hover states and keyboard focusability**, preparing the UI for future interactive behavior.

### 🔍 Non-Functional Elements (Visual Only)
These UI components **exist but do not work yet:**
- Search bar
- Genre and sorting filters
- Modal / expanded detail view

These elements are visible as part of the design but will be implemented in a future iteration.

---
## 🏗️ Future Enhancements (Planned)
- Functional search with real-time filtering
- Functional genre filtering and sorting
- Detailed modal view triggered by clicking a podcast card

---

## 👤 Author

Developed by **David Aniekan**
[GitHub](https://github.com/Davidaniekan) | [LinkedIn](https://linkedin.com/in/david-aniekan)

