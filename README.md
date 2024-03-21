# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Project Overview

- Created a Weather App which tell the realtime and forecast weather of any place.
- Initially it tells the weather of the current location of the user by using the geolocation.
- The user can search the realtime and the forecast weather of any place.

## Tech Stack used

- React.JS
- Tailwind css
- Vite

# Installation and Setup

- Used Vite to install react

```bash
npm create vite@latest
```

- Used the following commands to install tailwind in the project

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- Then added following code in tailwind.config.js file which came after the installation of the tailwind

```javascript

tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Then remove all the pre included css code from index.css and app.css and added the following code in index.css.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

-  Also Installed react-icons and react-hot-toast(for displaying error)

```bash
npm install react-icons --save

npm install react-hot-toast
```
- After all the installation was done. I ran the code with the following command.

```bash
npm run dev
```