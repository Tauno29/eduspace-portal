# Netlify deployment guide

EduSpace is a Vite-powered static React site prepared for Netlify. The repository now includes `netlify.toml`, which sets the build command to `pnpm build`, publishes `dist/public`, uses Node 22, and enables the SPA fallback required for direct-route navigation.

## Netlify project settings

| Setting | Value |
|---|---|
| Base directory | Leave blank |
| Build command | `pnpm build` |
| Publish directory | `dist/public` |
| Node version | `22` |
| Functions | None required |

Connect the GitHub repository `Tauno29/eduspace-portal` in Netlify, select the `main` branch, and deploy. Netlify will read the repository configuration automatically. The site is frontend-only, so no database, server, or Netlify Functions configuration is required.

## Important asset note

The site currently references the real logo, app screenshot, generated visual assets, and APK through the managed `/manus-storage/...` URLs used by the Manus project. Those URLs are valid for the Manus-hosted preview and deployment lifecycle, but a standalone Netlify deployment should use assets hosted in a durable public bucket or committed to the deployment repository. Before the first Netlify production deploy, replace those managed URLs with permanent HTTPS asset URLs, especially the APK download URL.

The APK download target is centralized in `client/src/pages/Home.tsx` as `APK_DOWNLOAD_URL`. Update that constant to the final public HTTPS APK URL for Netlify. The QR code is generated from that value at runtime, so it will follow the updated URL automatically.

## Validation

Run the following locally before deploying:

```bash
pnpm install
pnpm check
pnpm build
```

The production output should be generated at `dist/public`. The included `_redirects` file and `netlify.toml` fallback keep the single-page application functional when a visitor refreshes or directly opens a route.

## Hosting note

Netlify is supported as an external hosting option for this static frontend. Manus hosting remains the native deployment path and keeps the managed storage URLs integrated automatically. If Netlify is used, external asset hosting and the APK URL must be maintained separately.
