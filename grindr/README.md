# Grindr

This directory contains an independent Next.js app configured for Firebase App Hosting. The default Firebase project ID in `.firebaserc` is a placeholder; replace `grindr` with the actual project ID you create before deploying.

## Create the Firebase project

Create a Firebase project named **Grindr** in the [Firebase console](https://console.firebase.google.com/), or use the CLI:

```sh
firebase projects:create <unique-project-id> --display-name Grindr
```

Firebase project IDs must be globally unique. Update `.firebaserc` to use the created project ID, then register a web app in the Firebase console and copy its configuration values into `.env.local` (start from `.env.example`).

## Configure App Hosting

From this directory, run:

```sh
firebase init apphosting
```

Choose the Grindr project and the `grindr` backend. The checked-in Firebase configuration uses this directory as its root; if prompted for a root directory, use `.`. Update the example `NEXT_PUBLIC_FIREBASE_*` values in `apphosting.yaml` with the web app configuration. These Firebase web configuration values are public identifiers, not secrets.

To connect the GitHub repository for continuous deployment, create or connect an App Hosting backend in the Firebase console and select this repository. Set the app's root directory to `grindr`; commits to the configured live branch then create rollouts.

## Build and deploy

```sh
npm install
npm run build
firebase deploy --only apphosting:grindr
```

You can also deploy all configured Firebase resources with `firebase deploy`. View, monitor, and roll back App Hosting rollouts in the Firebase console.
