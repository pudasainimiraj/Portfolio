# Portfolio

The personal site of Miraj Pudasaini, an AI engineer in London. It is a one-page Next.js 12 site with styled-components, exported as static HTML and served from GitHub Pages at https://pudasainimiraj.github.io/Portfolio/. Every line of text on the page comes from one file, `src/constants/constants.js`, so a content change never touches a component.

## Run it

```
npm install
npm run dev
```

Open http://localhost:3000.

## Build and deploy

```
npm run build    # static site in out/
npm run deploy   # builds with the /Portfolio base path and pushes out/ to the gh-pages branch
```

The CV link expects a PDF at `public/Miraj-Pudasaini-CV.pdf`.
