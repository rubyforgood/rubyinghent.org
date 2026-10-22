The Ruby for Good Belgium website uses [Astro](https://astro.build/) to generate
static HTML. React is loaded only for the project modals on the homepage and the
schedule tabs. FAQs use native HTML accordions.

## 2027 Event

Ruby for Good - Belgium takes place February 1-3, 2027 in Ghent, Belgium.
Location and registration details are coming soon.

## Getting Started

Use Node.js 24 (as used in CI and Podman). Astro requires Node.js 22.23.4 or newer
and npm 9.6.5 or newer.
This project uses npm and commits `package-lock.json` for reproducible installs.

Install dependencies and run the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Edit pages in `src/pages/`, the shared layout in `src/layouts/`, and reusable
components in `src/components/`. Existing Sass styles remain in `styles/`, and
images and other static assets live in `public/`. The browser updates as you edit.

### If you want to use Podman for local development
See the [Podman instructions](podman-README.md).

## Production Build

```bash
npm run build
```

The build generates the static site in `dist/`. No application server is needed
in production. Preview the built site locally with:

```bash
npm run preview
```

Deploy `dist/` to a static web host. The GitHub Pages workflow checks the Astro
components, builds and tests the output, and deploys on pushes to `main`.
`public/CNAME` preserves the `rubyinghent.org` custom domain.

## Validation

```bash
npm run check
npm test
```

The tests build the site and verify routes, metadata, event details, static FAQ
content, React island placement, and public assets.

## Artwork

The homepage hero uses [Pair programming](https://undraw.co/illustration/pair-programming_9jyg)
and the footer uses [Coffee with friends](https://undraw.co/illustration/coffee-with-friends_ocg2).
Both illustrations are by Katerina Limpitsouni / unDraw, recolored to match the
site, and used under the [unDraw license](https://undraw.co/license).
