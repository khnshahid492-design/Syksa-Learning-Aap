# SYKSA Learning App — Website

## Latest update
This build includes a refined, viewport-fitted hero section and a moving learning announcement ribbon immediately below it.

### Hero improvements
- Hero is sized to the available viewport after the sticky header.
- Left-side content and right-side slider stay inside the first screen on desktop.
- Slider artwork uses `object-fit: contain`, so images can shrink rather than being cropped.
- Hero feature cards are compact and remain inside the hero instead of pushing the next section down.
- Slider keeps auto-play, arrows, dots, progress bar, hover pause and smooth transitions.

### New ribbon
A horizontal, continuously moving ribbon appears directly below the hero with:
- CBSE Classes 5–10
- Live Classes
- NCERT Based Learning
- Expert Teachers
- Doubt Solving
- Regular Tests
- Parent Tracking
- Recorded Lectures

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Use Live Server, or run `python -m http.server` in the project folder.
4. Open `index.html` in the browser.

## Main files
- `index.html` — page structure
- `style.css` — design, responsive layout, hero fit and ticker animation
- `script.js` — navigation, slider, scroll effects and form demo
- `assets/` — supplied SYKSA reference images

No backend is connected yet. The contact form is frontend-only and can later be connected to your admissions/CRM/WhatsApp API.
