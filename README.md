# Portfolio

A React portfolio site deployable to GitHub Pages.

## Setup

```bash
npm install
```

## Run locally

```bash
npm start
```

## Deploy to GitHub Pages

**1. Update `package.json`**

Change the `homepage` field to your actual GitHub username and repo name:

```json
"homepage": "https://yourusername.github.io/portfolio"
```

**2. Create a GitHub repo**

Create a new repo called `portfolio` (or whatever you want) on GitHub.

**3. Push your code**

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

**4. Deploy**

```bash
npm run deploy
```

This runs `npm run build` and pushes the build folder to the `gh-pages` branch automatically.

**5. Enable GitHub Pages**

In your GitHub repo → Settings → Pages → set Source to `gh-pages` branch.

Your site will be live at `https://yourusername.github.io/portfolio` within a minute.

## Customize

- **Your name:** search for "your name" in `Nav.js` and replace
- **Your bio:** edit `Home.js` and `About.js`
- **Your email/links:** edit `Home.js` (contact links) and `About.js`
- **Projects:** all project data lives in `src/data.js` — edit titles, descriptions, bullets, and sections there
- **Colors/fonts:** edit CSS variables in `src/index.css`

## File structure

```
src/
  App.js           — routing logic
  data.js          — all project content
  index.js         — entry point
  index.css        — global CSS variables
  components/
    Nav.js / Nav.module.css
    Home.js / Home.module.css
    CaseStudy.js / CaseStudy.module.css
    About.js / About.module.css
```
