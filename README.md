# Boston Freedom Trail Companion (PWA)

A premium, mobile-first Progressive Web App (PWA) designed to guide, track, and journal your journey along Boston's historic 2.5-mile Freedom Trail. 

Features:
- **Offline-First Capabilities:** Service Worker caches app shell files, and IndexedDB stores your travel journal and photos locally on your device.
- **Custom Coordinate Map:** Displays a beautiful, projected coordinate-based path connecting the 16 stops with live GPS location tracking (without requiring a paid Google Maps API key).
- **Proximity Alerts:** Tracks your walking location and prompts you to check in when you are within 50 meters of an unvisited site.
- **Historical Factoids & Details:** Packed with descriptions, hours, admission info, and historic factoids for all 16 official sites.
- **Image Compression:** Automaticaly downscales user photos to keep offline storage usage lightweight.
- **Journal Export:** Export your entire trip logs, visited check-ins, and thoughts into a single, clean Markdown file.

---

## Technical Stack

- **Core:** HTML5, vanilla JavaScript (ES6, single `app.js`, no build step)
- **Styling:** CSS3 custom properties, glassmorphism, Light/Dark mode (defaults to your OS preference)
- **PWA support:** `manifest.json`, `sw.js` (Service Worker)
- **Storage:** `localStorage` (check-ins), `IndexedDB` (journals and compressed images)

---

## Running Locally

To run the application locally on your computer:

1. Clone this repository.
2. Serve the directory using any local web server. For example:
   ```bash
   python3 -m http.server 8000
   ```
3. Open `http://localhost:8000` in your web browser.

---

## Deployment to Vercel

This app is a static web app and can be deployed instantly to Vercel:
1. Connect this repository to your Vercel account.
2. Select the repository and deploy it with default settings (no build command, public directory is root `./`).
