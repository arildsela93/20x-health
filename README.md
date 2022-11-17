## Getting Started

First, run the development server:

```bash
npm install --legacy-peer-deps
```

You need to ```--legacy-peer-deps``` because one package isn't updated to work with ```React 18```

Secondly, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/book](http://localhost:3000/api/book). This endpoint can be edited in `pages/api/book.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
