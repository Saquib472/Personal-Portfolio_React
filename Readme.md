# Personal Portfolio Using React

## Tech Stack
- React + Vite
- TailwindCss

## Project Set Up
- npm create vite@latest
- npm install tailwindcss @tailwindcss/vite
- Add `import tailwindcss from '@tailwindcss/vite'` And `tailwindcss()` in Plugins of vite.config.js
- Add `@import "tailwindcss"` in index.css file.
- For Always access roots for imports by `@/` Do Add the configuration in vite.config.js
    - import path from "path";
    - resolve: {
        alias: {
        "@": path.resolve(import.meta.dirname,"./src"),
        },
    }
- Clean Up the code.
- Custom CSS Styles : Check index.css File.

## Component Structure
- Folder > layout
    - Navbar
- Folder > sections
    - Hero
    - About
    - Projects
    - Experience
    - Testimonials
    - Contact

## Navbar
- LOGO
- Nav Items
- Contact Me Button : Creating Button Component.
- Mobile Menu
- npm i lucid-react for Icons.
- Check index.css for animation of the NavMenu which is opening by clicking the Hamburger Menu.
- Using md: for Dynamically handle the Responsiveness.

## Hero Section
- 