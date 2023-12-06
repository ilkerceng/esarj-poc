# Esarj-POC

## Development
> **Compatibility Note:**
> [Vite](https://vitejs.dev/) requires [Node.js](https://nodejs.org/en/) version 18+, 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

Setup
make sure to install the dependencies:
```bash
# npm
npm install
```

## Scripts
- `build` Creates built files under dist folder.
- `preview` Locally preview production build:
- `dev` Starts UI at http://localhost:5173 .
- `sb` Starts storybook application used for component development at http://localhost:6006/.
- `generate-api` Generates api layer under src/api/generated getting content from `docs/swagger.yaml`.
- `test` Runs unit tests..

## .env 
The settings on the .env file are used as variables during build.

## Note
For the current status of the project, since all services are mocked, the mutations will not be reflected on UI. 
For example When the new user is created, all the rules will apply but the new user will not be rendered on the List.
To be able to see the changes reflected correctly; a real service should be integrated, Or it can be debugged using console.logs on callback functions. 


## Learn More
The main technologies used to create this POC.
- [Vite - Build Tool](https://vitejs.dev/)
- [Antd - UI Kit](https://ant.design/)
- [Tailwindcss - Styling](https://tailwindcss.com/)
- [React-Query - Async State Management](https://tanstack.com/query/latest/)
- [Orval - Generate API](https://orval.dev/)
- [MSW - Mock Service Library](https://mswjs.io/)
