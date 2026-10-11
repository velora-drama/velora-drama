# VELORA — AI Drama Starter

A responsive, multilingual front-end prototype for a short-form AI drama streaming app.

## What works in this starter
- Responsive home page and drama catalog
- Russian, English, and Korean interface labels
- Genre filters
- Drama detail / video player modal
- Creator Studio form to add a title, poster URL, and direct MP4 video URL
- Browser-local saving with `localStorage`

## Important limitations
- This is a front-end prototype only. Added dramas are saved in the current browser/device and are NOT shared with other users.
- It does not upload video files, provide user accounts, protect premium episodes, or process payments.
- For a public multi-user service, add a backend/database, storage/CDN, authentication, moderation, and proper access controls.
- Use only videos, images, voices, and music you own or have permission to use.
- Free hosting tiers can have restrictions, including restrictions on commercial use. Check current terms before monetizing.

## Run locally
### Easiest
1. Download and unzip the project.
2. Open `index.html` in a modern browser.

If your browser restricts some features when opening a file directly, use a local static server:
- Install Node.js from the official Node.js website.
- Open a terminal in this folder.
- Run: `npx serve .`
- Open the local URL printed in the terminal.

No build step is required.

## Deploy as a free prototype
1. Create a GitHub account and a new repository.
2. Upload `index.html`, `styles.css`, `app.js`, and `README.md`.
3. Import the repository into a static hosting service that has a free tier.
4. Check the host's current plan terms and limits. Some free plans are for personal/non-commercial projects only.
5. When deploying, test on iPhone Safari and Android Chrome.

## Add a video
The video field expects a DIRECT URL to an MP4 file accessible by the browser. A normal web page URL, a YouTube watch URL, or a private cloud-sharing page usually will not work as a direct video source. In this prototype, paste a permitted direct MP4 URL into Creator Studio. The app stores the URL in the browser only.

## Next development steps
1. Replace sample titles with original dramas and licensed poster art.
2. Choose the first video generation workflow and test a short scene.
3. Add a backend and shared catalog before inviting public users.
4. Add privacy policy, terms, content reporting, age guidance, and accessibility.
5. Add payments only after validating audience demand and checking app-store/payment rules.
