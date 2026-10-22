## Local Development with Podman

Run these commands from the repository root:

1. Build the Node.js 24 development image and install the locked npm dependencies:
```sh
./podman-build
```

2. Start the Astro development server:
```sh
./podman-run-dev
```

3. Open [http://localhost:3000](http://localhost:3000).

The source directory is mounted for live updates. An anonymous volume keeps
the image's Linux dependencies separate from any host `node_modules` directory.
The container and its anonymous volume are removed when it exits.

Rebuild the image after changing `package.json` or `package-lock.json`, then
restart the container to use the updated dependencies.