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
  * Card containers and bento grids: `rounded-[2rem]` to `rounded-[3rem]`
  * Image frames: `rounded-2xl`
* **Borders & Shadows (Soft Neobrutalism):**
  * Standard stroke: `3px solid #000000` (`border-neo`)
  * Solid drop shadow: `4px 4px 0px rgba(0, 0, 0, 0.85)` or `6px 6px 0px #7038F7`
* **Tactile Interactions:**
  * Buttons use a thick border and solid shadow that compress on hover (`hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none`).