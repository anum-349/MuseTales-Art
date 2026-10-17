# Muse Tales Art

Muse Tales Art is an art discovery and collecting website. Visitors can browse artwork and categories, explore artist profiles and exhibitions, read stories and articles, and view arts locations on an interactive map. The site also includes account sign-in, a cart, and forms for art advice, support, feedback, and accessibility requests.

## Features

- Browse artwork, categories, artists, and artist profiles.
- Explore stories, blog articles, exhibitions, and art fairs.
- View locations on a Mapbox-powered map.
- Register and sign in with email/password or Google.
- Manage a cart and submit advisory, support, feedback, and accessibility forms.
- Responsive React interface with dedicated buying, returns, privacy, and help pages.

## Tech stack

- **Frontend:** React 19, Vite, React Router, Tailwind CSS
- **Backend:** Node.js, Express 5, MongoDB, Mongoose
- **Integrations:** Google OAuth, Mapbox

## Project layout

```text
MuseTales-Art/
├── Art_website_Frontend/   # React/Vite application
└── Art_Website_Backend/    # Express API and MongoDB models
```

## Requirements

- Node.js and npm
- A running MongoDB instance or a MongoDB connection URI
- A Mapbox access token for the map
- Google OAuth credentials if Google sign-in is required

## Local setup

### 1. Configure the frontend

```powershell
cd Art_website_Frontend
Copy-Item .env.example .env
npm install
npm run dev
```

Set `VITE_MAPBOX_TOKEN` in `Art_website_Frontend/.env` to a Mapbox access token. Vite serves the frontend at `http://localhost:5173` by default.

### 2. Configure and run the backend

In a second terminal:

```powershell
cd Art_Website_Backend
Copy-Item .env.example .env
npm install
node app.js
```

Set `MONGO_URI` to your MongoDB connection string and `JWT_SECRET` to a strong, private signing secret in `Art_Website_Backend/.env`. The API listens on `http://localhost:5000`; `GET /test` can be used to check that it is running.

To enable Google sign-in, configure `CLIENT_ID`, `GOOGLE_CLIENT_ID`, and `CLIENT_SECRET` with credentials from the same Google OAuth client. The frontend Google OAuth client ID is currently configured in `Art_website_Frontend/src/main.jsx` and must match the backend client ID.

## Useful commands

From `Art_website_Frontend`:

```bash
npm run dev      # Start the Vite development server
npm run build    # Build the frontend for production
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

The backend currently starts with `node app.js`; its `package.json` does not define a start script.
