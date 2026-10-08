# Grindr

A Next.js app configured for [Firebase App Hosting](https://firebase.google.com/docs/app-hosting).

## Setup

```sh
pnpm install
cp .env.example .env.local   # fill in your Firebase web app config
pnpm --filter grindr dev
```

## Build

```sh
pnpm --filter grindr build
```

## Deploy

1. Create a Firebase project on the Blaze plan and a web app.
2. Store the API key as a secret: `firebase apphosting:secrets:set grindr-firebase-api-key`.
3. Update the `env` values in `apphosting.yaml` with your project's config.
4. Create the backend: `firebase apphosting:backends:create --project <project-id>`
   (use backend ID `grindr` and root directory `grindr`), or roll out with
   `firebase deploy --only apphosting` from this directory.
