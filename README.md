
# Portfolio Website

A personal portfolio website built with React and Vite. It showcases projects, services, and contact information and uses Tailwind CSS for styling and Lucide icons.

Tech stack
- React 19
- Vite
- Tailwind CSS
- Lucide React icons

Prerequisites
- Node.js (recommended v16 or later)
- npm (or yarn/pnpm)

Quick start (Windows PowerShell)
1. Install dependencies

	 npm install

2. Run the dev server

	 npm run dev

	 Open http://localhost:5173 in your browser (Vite default)

Build for production

	npm run build

Preview production build locally

	npm run preview

Linting

	npm run lint

Project structure (important files)

- `index.html` — app entry HTML
- `vite.config.js` — Vite config
- `package.json` — scripts & dependencies
- `src/` — React source
	- `main.jsx`, `App.jsx` — app bootstrap and main component
	- `assets/images/` — images used in the site
	- `components/` — React components (Navbar, Hero, About, Services, Portfolio, Contact, Footer, IconGallery)
- `public/` — static assets served as-is

Notes
- This project uses the scripts defined in `package.json`: `dev`, `build`, `preview`, and `lint`.
- If you use a different package manager, replace `npm` with `yarn` or `pnpm`.

Contributing
- Open a PR or edit files and create issues for bugs or feature requests.

License
- No license file included. Add a `LICENSE` file if you want to specify one (MIT is a common choice).

Contact
- For questions or help, update this README or add an issue in the repo.
