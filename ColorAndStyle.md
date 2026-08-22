# Rumiku Color & Visual System

## Core Color Tokens
* **Electric Purple (Primary):** `#7038F7`
  * Main surface background, brand anchors, primary accent on light backgrounds.
* **Neon Lime (Accent & CTA):** `#D4FF37`
  * High-visibility call to action buttons, pill tags, badges, and focus states.
* **Void Black (Borders & 3D Extrusion):** `#000000` / `#0A0A0C`
  * Solid borders, hard drop shadows, tactile button bases, primary dark typography.
* **Neutral Light (Canvas):** `#FFFFFF` / `#F4F4F6`
  * Card backgrounds, modal sheets, and high-readability text containers.

## Visual Styling Rules
* **Corner Radius:**
  * Badges and buttons: `rounded-full`
  * Card containers and bento grids: `rounded-2xl` to `rounded-3xl`
  * Image frames: `rounded-xl`
* **Borders & Shadows:**
  * Standard stroke: `2px solid #000000`
  * Heavy accent stroke: `3px solid #000000`
  * Hard drop shadow: `4px 4px 0px #000000` or `5px 5px 0px #7038F7`
* **Tactile Interactions:**
  * Buttons use a 3D bottom border (`border-b-4` or `border-b-6`) that compresses on click (`active:border-b-2 active:translate-y-1`).