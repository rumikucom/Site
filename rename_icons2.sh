#!/bin/bash

rename_and_clean() {
  local dir=$1
  cd "$dir" || return
  
  # Rename the remaining
  mv "18 (3).png" "cyberpunk-vibes-skull.png" 2>/dev/null
  mv "18 (4).png" "holographic-3d-star.png" 2>/dev/null
  mv "18 (5).png" "cyber-badges.png" 2>/dev/null
  mv "18.png" "thunder-glasses.png" 2>/dev/null
  mv "19 (1).png" "purple-eye-mask.png" 2>/dev/null
  mv "19 (2).png" "peeking-cat.png" 2>/dev/null
  mv "19 (3).png" "black-eye.png" 2>/dev/null
  mv "19 (4).png" "holographic-cylinder-smiley.png" 2>/dev/null
  mv "19 (5).png" "green-star-burst.png" 2>/dev/null
  mv "19.png" "blue-swirl.png" 2>/dev/null
  mv "20 (1).png" "purple-devil-cat.png" 2>/dev/null
  mv "20 (2).png" "black-devil-cat.png" 2>/dev/null
  mv "20 (3).png" "topographic-shape.png" 2>/dev/null
  mv "20 (4).png" "holographic-cloud.png" 2>/dev/null
  mv "20 (5).png" "double-arrow-bar.png" 2>/dev/null
  mv "20.png" "headliner-text.png" 2>/dev/null
  mv "21 (1).png" "green-devil-heart.png" 2>/dev/null
  mv "21 (2).png" "ethereum-logo.png" 2>/dev/null
  mv "21 (3).png" "dead-face-circle.png" 2>/dev/null
  mv "21 (4).png" "target-circle.png" 2>/dev/null
  mv "21.png" "star-glasses.png" 2>/dev/null
  mv "22 (1).png" "eyeball-planet.png" 2>/dev/null
  mv "22 (2).png" "dotted-eye.png" 2>/dev/null
  mv "22 (3).png" "holographic-eye.png" 2>/dev/null
  mv "22 (4).png" "capsule.png" 2>/dev/null
  mv "22.png" "lightning-circles.png" 2>/dev/null
  mv "23 (2).png" "ring-planet.png" 2>/dev/null
  mv "23 (3).png" "squiggly-line.png" 2>/dev/null
  mv "23 (4).png" "toggle-switch.png" 2>/dev/null
  mv "23.png" "play-button.png" 2>/dev/null
  mv "24 (2).png" "holographic-folded-paper.png" 2>/dev/null
  mv "24.png" "play-text-graphic.png" 2>/dev/null
  mv "25 (1).png" "pink-ghost.png" 2>/dev/null
  mv "25 (2).png" "holographic-hashtag.png" 2>/dev/null
  mv "25.png" "blue-arrow.png" 2>/dev/null
  mv "26 (1).png" "dripping-eye.png" 2>/dev/null
  mv "26 (2).png" "holographic-smiley-lightning.png" 2>/dev/null
  mv "26.png" "blue-lightning-bolt-horizontal.png" 2>/dev/null
  mv "27 (1).png" "purple-candle.png" 2>/dev/null
  mv "27.png" "blue-lightning-bolt-vertical.png" 2>/dev/null
  mv "28.png" "green-lightning-bolt.png" 2>/dev/null
  mv "29.png" "blue-double-lightning.png" 2>/dev/null

  # Delete irrelevant icons (music festival, halloween, cats, etc. that don't fit the neo-pop tech theme)
  rm -f music-festival-text.png disco-ball.png chill-zone-text.png catch-the-vibe-music-note.png live-text.png music-note-circle.png bass-drop.png
  rm -f trick-or-treat.png good-vibes-text.png party-text.png let-the-music-play.png headliner-text.png
  rm -f witch-hat.png devil-cat.png dead-face-hologram.png coffin.png purple-flame.png bone.png pink-ghost.png dripping-eye.png purple-candle.png dead-face-circle.png green-devil-heart.png purple-devil-cat.png black-devil-cat.png
  rm -f cat-face.png cat-face-stamp.png cat-lover-stamp.png cat-eye-mask.png cat-eye-mask-2.png meow-chat-bubble.png black-cat-body.png cat-box.png peeking-cat.png paw-print.png paw-print-circle.png

  cd - || return
}

rename_and_clean "/mnt/2.5 1TB Disk/Vibe Code/Site/public/images/icons"
rename_and_clean "/mnt/2.5 1TB Disk/Vibe Code/Site/assets/icons"

echo "Done renaming and cleaning"
