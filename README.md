# Clemson Joel — React Portfolio

A responsive multi-page developer portfolio built with React, Vite and React Router.

## Features
- Separate Home, About, Projects, Services and Contact routes
- Responsive mobile navigation
- Persistent dark/light theme toggle
- Project category filters
- CSS-built project previews and hero illustration (no image assets required)
- Contact form that opens the visitor's email app with a pre-filled message
- Font Awesome icons

## Run locally

1. Install [Node.js](https://nodejs.org/) (LTS recommended).
2. Open this folder in VS Code.
3. Open the integrated terminal and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite, usually `http://localhost:5173`.

## Customize
- Update your name, email, WhatsApp number and social links in `src/components` and `src/pages/Contact.jsx`.
- Update project details in `src/data/siteData.js`.
- Adjust colors and typography in `src/styles.css`.
- Add or edit pages in `src/pages` and register routes in `src/App.jsx`.

## Before publishing
Replace the sample project descriptions/previews with real screenshots and add your actual GitHub, LinkedIn and other profile links. The contact form currently uses `mailto:`; connect a form backend (such as Formspree or your own API) if you want submissions without the visitor opening an email app.
