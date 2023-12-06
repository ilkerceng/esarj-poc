# Esarj-POC

## Development
> **Compatibility Note:**
> [Vite](https://vitejs.dev/) requires [Node.js](https://nodejs.org/en/) version 18+, 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

Setup
make sure to install the dependencies:
```bash

# npm
npm install

## Development Server
Start the development server on http://localhost:3000

```bash
npm run dev
```

## Scripts
- `build` Creates built files under dist folder.
- `dev` Starts UI at http://localhost:5173 .
- `sb` Starts storybook application used for component development at http://localhost:6006/.
- `generate-api` Generates api layer under src/api/generated getting content from `docs/swagger.yaml`.
- `test` Runs unit tests..

## .env 
The settings on the .env file are used as variables during build.


## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Learn More
The main technologies used to create this POC.
- [Vite - Build Tool](https://vitejs.dev/)
- [Antd - UI Kit](https://ant.design/)
- [Tailwindcss - Styling](https://tailwindcss.com/)
- [React-Query - Async State Management](https://tanstack.com/query/latest/)
- [Orval - Generate API](https://orval.dev/)
- [MSW - Mock Service Library](https://mswjs.io/)
