# Balatro Mod: Mefi Joker

## Overview
A Balatro mod for the Lovely framework that introduces the "Mefi" joker - a rare joker that gains X0.5 multiplier for every destroyed playing card during gameplay.

## Core Features
- **Mefi Joker**: A rare rarity joker that tracks destroyed cards
- **Dynamic Multiplier**: Gains X0.5 mult per destroyed card
- **Visual Assets**: Uses mefij.png as the joker sprite
- **Lovely Integration**: Properly structured for Lovely mod loader

## Technical Specifications
- **Rarity**: Rare (3/4 stars)
- **Base Effect**: X0.5 mult per destroyed card
- **Cost**: 8 (standard for rare jokers)
- **Position**: Any position
- **Trigger**: On card destruction events

## File Structure
```
/
├── lovely.toml           # Mod configuration
├── main.lua             # Main mod entry point
├── assets/
│   └── mefij.png        # Joker sprite (placeholder)
└── localization/
    └── en-us.lua        # English localization
```

## User Experience
1. Mod loads with Lovely framework
2. Mefi joker appears in joker pools at rare rarity
3. When cards are destroyed (discarded, sold, etc.), Mefi gains permanent X0.5 mult
4. Visual feedback shows increasing multiplier value
5. Scales throughout the game for high-value late-game potential

## Design Vision
The mod follows Balatro's aesthetic with clean Lua code structure and proper Lovely integration patterns.