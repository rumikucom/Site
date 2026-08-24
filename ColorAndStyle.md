# Rumiku Color & Visual System

## Core Color Tokens
* **Electric Purple (Primary):** `#7038F7` / `hsl(var(--secondary))`
  * Main surface background, brand anchors, primary accent.
* **Neon Lime (Accent & CTA):** `#e7ff57` / `hsl(var(--primary))`
  * High-visibility call to action buttons, pill tags, badges, and focus states.
* **Backgrounds:** `#09070f` (Dark Mode) / `#f9f8fc` (Light Mode)
  * Deep space dark theme and a vibrant, bright light theme.
* **Neutral Light (Canvas):** `#FFFFFF` / `#F4F4F6`
  * Card backgrounds, modal sheets, and high-readability text containers.

## Visual Styling Rules
* **Corner Radius:**
  * Badges and buttons: `rounded-full`
  * Card containers and bento grids: `rounded-[2rem]` to `rounded-[3rem]`
  * Image frames: `rounded-2xl`
* **Borders & Shadows (Glow & Glassmorphism):**
  * Soft outlines for contrast in light mode (`border-black/15` or `drop-shadow-[0_0_1.5px_rgba(0,0,0,0.25)]`).
  * Glowing drop shadow: `shadow-glow` or `shadow-glow-secondary`.
* **Tactile Interactions:**
  * Buttons use scale and glow transitions (`hover:scale-105 hover:shadow-glow-secondary`).
  * Ascii background grid responds dynamically to mouse movement to create a topographic wave effect.