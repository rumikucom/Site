#!/bin/bash

rename_icons() {
  local dir=$1
  cd "$dir" || return
  
  mv "01 (2).png" "cat-face.png" 2>/dev/null
  mv "01 (3).png" "oval-star-ring.png" 2>/dev/null
  mv "01 (4).png" "smiley-hologram.png" 2>/dev/null
  mv "01 (5).png" "star-flare-oval.png" 2>/dev/null
  mv "01.png" "music-festival-text.png" 2>/dev/null
  mv "02 (2).png" "paw-print-circle.png" 2>/dev/null
  mv "02 (3).png" "holographic-eye-stack.png" 2>/dev/null
  mv "02 (4).png" "holographic-cylinder.png" 2>/dev/null
  mv "02 (5).png" "green-wireframe-globe.png" 2>/dev/null
  mv "02.png" "disco-ball.png" 2>/dev/null
  mv "06 (2).png" "paw-print.png" 2>/dev/null
  mv "06 (4).png" "holographic-star.png" 2>/dev/null
  mv "06 (5).png" "directional-arrows.png" 2>/dev/null
  mv "06.png" "chill-zone-text.png" 2>/dev/null
  mv "07 (2).png" "devil-cat.png" 2>/dev/null
  mv "07 (3).png" "layered-holographic-squares.png" 2>/dev/null
  mv "07 (4).png" "holographic-triangle-smiley.png" 2>/dev/null
  mv "07 (5).png" "eye-with-star-and-globe.png" 2>/dev/null
  mv "07.png" "catch-the-vibe-music-note.png" 2>/dev/null
  mv "08 (2).png" "cat-face-stamp.png" 2>/dev/null
  mv "08 (3).png" "holographic-checkerboard.png" 2>/dev/null
  mv "08 (4).png" "holographic-x.png" 2>/dev/null
  mv "08 (5).png" "live-text.png" 2>/dev/null
  mv "08.png" "music-note-circle.png" 2>/dev/null
  mv "09 (1).png" "witch-hat.png" 2>/dev/null
  mv "09 (2).png" "meow-chat-bubble.png" 2>/dev/null
  mv "09 (3).png" "wireframe-body.png" 2>/dev/null
  mv "09 (4).png" "dead-face-hologram.png" 2>/dev/null
  mv "09 (5).png" "green-oval-star.png" 2>/dev/null
  mv "09.png" "bass-drop.png" 2>/dev/null

  mv "13 (1).png" "trick-or-treat.png" 2>/dev/null
  mv "13 (2).png" "black-cat-body.png" 2>/dev/null
  mv "13 (3).png" "atom.png" 2>/dev/null
  mv "13 (4).png" "holographic-flower.png" 2>/dev/null
  mv "13 (5).png" "good-vibes-text.png" 2>/dev/null
  mv "13.png" "equalizer.png" 2>/dev/null
  mv "14 (1).png" "potion-bottle.png" 2>/dev/null
  mv "14 (2).png" "cat-box.png" 2>/dev/null
  mv "14 (3).png" "holographic-sunburst.png" 2>/dev/null
  mv "14 (4).png" "holographic-smiley-2.png" 2>/dev/null
  mv "14 (5).png" "wireframe-globe-oval.png" 2>/dev/null
  mv "14.png" "blue-star.png" 2>/dev/null
  mv "15 (2).png" "cat-eye-mask.png" 2>/dev/null
  mv "15 (3).png" "cone.png" 2>/dev/null
  mv "15 (4).png" "holographic-star-smiley.png" 2>/dev/null
  mv "15 (5).png" "holographic-orbit.png" 2>/dev/null
  mv "15.png" "party-text.png" 2>/dev/null
  
  mv "16 (1).png" "coffin.png" 2>/dev/null
  mv "16 (2).png" "cat-lover-stamp.png" 2>/dev/null
  mv "16 (3).png" "wireframe-head.png" 2>/dev/null
  mv "16 (4).png" "holographic-diamond.png" 2>/dev/null
  mv "16 (5).png" "flower-mandala.png" 2>/dev/null
  mv "16.png" "let-the-music-play.png" 2>/dev/null
  mv "17 (2).png" "cat-eye-mask-2.png" 2>/dev/null
  mv "17 (3).png" "wireframe-globe-oval-2.png" 2>/dev/null
  mv "17 (4).png" "holographic-pyramid.png" 2>/dev/null
  mv "17 (5).png" "holographic-bar.png" 2>/dev/null
  mv "17.png" "wild-and-free.png" 2>/dev/null
  mv "18 (1).png" "purple-flame.png" 2>/dev/null
  mv "18 (2).png" "bone.png" 2>/dev/null
  
  cd - || return
}

rename_icons "/mnt/2.5 1TB Disk/Vibe Code/Site/public/images/icons"
rename_icons "/mnt/2.5 1TB Disk/Vibe Code/Site/assets/icons"

echo "Done renaming"
