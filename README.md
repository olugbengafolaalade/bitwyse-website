# Bitwyse website

React + Vite + react-router, deployed on Vercel.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

- Routes: `/`, `/design`, `/projects`, `/people`, `/services` (see `src/App.jsx`).
- Styles are the original Webflow CSS in `public/css`; images live in `public/images`.
- `vercel.json` rewrites unknown paths to `index.html` so client-side routes work on refresh.
- Custom domain: add it in the Vercel project settings (the old GitHub Pages `CNAME` file was removed).
