## Black in Ai

This project was created using Reactjs and UI material as a styling component. 

- To construct the design, I created a component for each item.
- Each item was imported in a main page, that brings all the components together.
- Each component has its own style. 
- It's possible combine this frontend for consuming data from a API, to change text and images without having to change directly in the code.
- All text and images are being hard code loaded.
- The publication was made free of charge, using the vercel plataform.
- The project structure:

```
src
├── assets
│   └── img // with image files
├── components
│   ├── About // blank page for About Us
│   │   ├── about.md
│   │   └── index.js
│   ├── Button
│   │   └── index.js
│   ├── CommunityValues
│   │   └── index.js
│   ├── Footer
│   │   └── index.js
│   ├── Header
│   │   └── index.js
│   ├── HeaderLayout
│   │   └── index.js
│   ├── JoinUs
│   │   └── index.js
│   ├── Markdown // component that accepts texts written in markdown files to be redenried on some page or component.
│   │   └── index.js
│   ├── Navbar
│   │   └── index.js
│   ├── TeamMembers
│   │   ├── index.js
│   │   └── teamList.json
│   ├── TextField
│   │   └── index.js
│   └── Typography
│       └── index.js
├── pages
│   ├── About // black page
│   │   └── index.js
│   └── Home // home page
│       └── index.js // on this page the components that were created are imported to form the main page.
├── index.js // main file, render pages and create navigation routes
├── index.scss
├── serviceWorker.js
└── theme.js // file with theme, colors, fonts used in the project.
```
