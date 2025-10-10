# YAASH Portfolio (Static Site)

This is a single-page portfolio for **YAASH** with:
- Dark theme, animated UI
- In-page modals for projects with lazy-loaded images
- Accessible modal basics (focus trap, Escape to close)
- Placeholder images in `assets/`

## Files
- `index.html` — main site
- `assets/` — placeholder images used by modals
- `README.md` — this file

## How to view locally
1. Unzip the archive.
2. Open `index.html` in your browser.
   - For full functionality (smooth scrolling, file:// still works for most, but it's recommended to serve via a local server):
     ```bash
     # Python 3
     python -m http.server 8000
     # then open http://localhost:8000
     ```

## Deploy to GitHub Pages
1. Create a new repository on GitHub and push these files to the `main` branch.
2. Go to repository Settings → Pages.
3. Under "Source", select the `main` branch and `/ (root)`.
4. Save. Your site will be published at `https://<username>.github.io/<repo>/` within a minute or two.

## Performance notes (included)
- Images inside modals are lazy-loaded: the `src` is set only when a modal opens.
- To improve performance further:
  - Replace placeholder PNGs with optimised WebP images.
  - Serve images from a CDN.
  - Use a build step to generate multiple sizes and `srcset`.
