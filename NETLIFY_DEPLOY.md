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

## Asset handling

The real logo, app homepage screenshot, map texture, campus collage, and latest APK now live in `client/public/assets/`, so Netlify publishes them as stable repository-relative URLs under `/assets/`. The APK download target is centralized in `client/src/pages/Home.tsx` as `APK_DOWNLOAD_URL`, and the QR code is generated from that value at runtime.

If you later move the assets to a separate public CDN, set the Netlify environment variable `VITE_ASSET_BASE_URL` to the CDN origin without a trailing slash. The same source code will then prefix the `/assets/...` paths with that origin.

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
