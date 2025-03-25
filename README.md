# 📚 UTK Library Hours Explorer

This is a modern React application to browse and explore University of Tennessee, Knoxville library locations, open hours, and contact details. It includes support for daily and weekly views, responsive display, and an interactive map of all libraries on campus.

Built with React and Bootstrap, it follows a clean MVC-inspired architecture with reusable components and modular separation of logic, styles, and data.

---

## 🔧 Features

- 📅 Toggle between **Daily** and **Weekly** views
- 🗓️ View **hours for any specific date and the weekly hours surrounding it**
- ✅ Shows real-time **Open/Closed** status, along with details on when it **Opens/Closes**
- 📍 **Map of campus library locations** using Leaflet.js
- 🧩 **Reusable UI components** for maintainability
- 🧠 MVC structure with `models`, `controllers`, and `utils`

---

## 🚀 Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 📦 Prerequisites

- Node.js ≥ 14.x
- npm or yarn

---

## 🔧 Available Scripts

In the project directory, you can run:

### `npm install`

Install all dependencies.

### `npm start`

Runs the app in development mode.  
Visit [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```bash
src/
├── assets/                 # Logos and static assets
├── components/
│   ├── LibraryCard/        # Modular, reusable card components
│   │   ├── LibraryCard.js
│   │   ├── LibraryHeader.js
│   │   ├── LibraryStatus.js
│   │   ├── LibraryHoursList.js
│   │   └── LibraryHoursItem.js
│   ├── LibraryMap.js       # Leaflet map for locations
│   ├── Header.js
│   ├── Footer.js
│   └── Home.js             # Main page layout
├── controllers/
│   └── hoursController.js  # Handles transformation of API data
├── models/
│   └── hoursModel.js       # Data fetching from LibCal API
├── utils/
│   └── dateUtils.js        # Date helpers (formatting, ordering, etc)
├── styles/
│   └── custom.css          # Global & component-specific styles
└── index.js

---

## 🔌 API Source

Library hours are pulled dynamically from: https://libcal.utk.edu/widget/hours/grid?format=json&weeks=4

---

## 🧠 Design Philosophy

- **Reusability First**: Components are broken into granular subcomponents like `LibraryStatus`, `LibraryHeader`, etc.
- **Separation of Concerns**: MVC-like directory structure
- **Responsiveness**: Built with Bootstrap for full mobile and tablet support
- **Extensibility**: Easy to plug in new features like event calendars, library reservations, etc.

---

## 🌐 Libraries Used

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Leaflet](https://react-leaflet.js.org/)
- [Leaflet](https://leafletjs.com/)

--
```
