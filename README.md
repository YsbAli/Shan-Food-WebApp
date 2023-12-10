# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


#  Install Tailwind CSS with Vite - Set up tailwind css

  - npm install -D tailwindcss postcss autoprefixer
  - npx tailwindcss init -p


  - Configure your template paths  :
   <p>/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</p>


- Add the Tailwind directives to your CSS
- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file

  <p>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;</p>



## Packages : 
 1. - npm i react-icons 


