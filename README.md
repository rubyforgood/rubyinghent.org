This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 2027 Event

Ruby for Good - Belgium takes place February 1-3, 2027 in Ghent, Belgium.
Location and registration details are coming soon.

## Getting Started

Use Node.js 24 (as used in CI and Podman); Next.js requires Node.js 20.9 or newer.
This project uses npm and commits `package-lock.json` for reproducible installs.

Install dependencies and run the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### If you want to use Podman for local development
See the [Podman instructions](podman-README.md).

## Production Build

```bash
npm run build
```

The build exports the static site to `out/` because `next.config.js` sets
`output: "export"`. No separate export command or Next.js production server is
needed. Deploy `out/` to a static web host; the GitHub Pages workflow does this
automatically on pushes to `main`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
