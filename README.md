
# Currency Converter

A small React app (Vite) to convert between currencies using the ExchangeRate API. Built with React, Vite, Bootstrap, and React Query for data fetching.

## Features

- Convert an amount between two currencies.
- Choose currencies from a large list of ISO currency codes.
- Fast local development with Vite.
- Configurable API key via Vite `.env` file.

## Demo

Run the app locally to try it out (instructions below).

## Quick Start

### Prerequisites

- Node.js or Bun installed on your system.
- An API key from your exchange-rate provider (for example, https://www.exchangerate-api.com/).

### Install dependencies

Using Bun:

```powershell
bun install
```

Using npm:

```powershell
npm install
```

### Environment variables

Create a `.env` file in the project root with the Vite-style variable shown below. This file is ignored by git by default.

```
VITE_API_KEY=your_api_key_here
```

The app reads the key via `import.meta.env.VITE_API_KEY` and uses it to call the API.

### Run the dev server

```powershell
bun dev
# or
npm run dev
```

### Build and preview

```powershell
npm run build
npm run preview
```

## Available Scripts

- `dev` - Start Vite dev server
- `build` - Build production bundle
- `preview` - Preview the production build
- `lint` - Run ESLint

## API / Implementation Details

- The app uses `axios` and constructs requests like:

```
https://v6.exchangerate-api.com/v6/${VITE_API_KEY}/pair/{FROM}/{TO}/{AMOUNT}
```

- Ensure your API key supports the `/pair` endpoint and is valid.

## React Query note

This project may use either `react-query` (v3) or the newer `@tanstack/react-query` (v4+). If you see import errors, update the import to match the installed package:

- For v3: `import { useQuery } from "react-query";`
- For v4+: `import { useQuery } from "@tanstack/react-query";`

Check `package.json` and install the appropriate package if needed.

## Styling notes

- Global styles are in `src/index.css`. The project includes a rule to hide the cursor when a `button` is disabled: `button:disabled { cursor: none; }`.

## Folder Structure

- `src/` - React source
	- `src/App.jsx` - Main UI and convert button
	- `src/api/api.js` - API client (uses `axios` and `VITE_API_KEY`)
	- `src/index.css` - Styles
	- `src/main.jsx` - Entry point
- `index.html` - Vite template
- `.env` - Local environment variables (ignored)
- `package.json` - Scripts and dependencies

## Troubleshooting

- Dev server fails to start: inspect terminal output; try reinstalling deps (`bun install` or `npm install`).
- API returns 401/403: verify `VITE_API_KEY` is correct and active.
- React Query import errors: ensure installed package matches imports (see note above).
- CORS or network errors: test the API endpoint with curl/Postman and confirm provider status.

## Contributing

1. Fork the repo
2. Create a feature branch
3. Run lint and tests (if any) and open a PR

## License

Add a `LICENSE` file if you plan to open-source this project (e.g., MIT).

---

If you want, I can also:

- Add an example `.env.example` (without secrets) to show required env keys.
- Update `src/App.jsx` to disable the Convert button when `amount <= 0` instead of `amount < 0`.
- Create a short screenshot or GIF and add it to this README.

Tell me which additions you'd like and I'll apply them.
