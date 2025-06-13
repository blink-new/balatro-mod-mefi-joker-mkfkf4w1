# Mefi Joker - Balatro Mod

A Balatro mod for the Lovely framework that introduces the **Mefi** joker - a rare joker that grows stronger with every destroyed card.

## 🃏 About Mefi

- **Rarity**: Rare (3 stars)
- **Cost**: 8 coins
- **Effect**: X1.0 Mult base, gains X0.5 Mult for every destroyed playing card
- **Blueprint Compatible**: Yes
- **Eternal Compatible**: Yes

## 📥 Installation

### Prerequisites
- [Balatro](https://store.steampowered.com/app/2379780/Balatro/) (Steam version)
- [Lovely](https://github.com/ethangreen-dev/lovely-injector) mod loader

### Install Steps
1. Download the latest release of this mod
2. Extract the mod files to your Balatro mods directory:
   - **Windows**: `%APPDATA%/Balatro/Mods/`
   - **macOS**: `~/Library/Application Support/Balatro/Mods/`
   - **Linux**: `~/.local/share/Balatro/Mods/`
3. Launch Balatro with Lovely injector
4. The Mefi joker will now appear in joker pools!

## 🎮 How It Works

The Mefi joker starts with **X1.0 Mult** and gains **X0.5 Mult** every time a playing card is destroyed. This includes:

- Cards discarded beyond hand limit
- Cards sold from hand or deck
- Cards destroyed by other jokers or effects
- Cards lost due to debuffs or negative effects

### Example Scaling
- Start: X1.0 Mult
- After 1 destroyed card: X1.5 Mult  
- After 5 destroyed cards: X3.0 Mult
- After 10 destroyed cards: X5.5 Mult
- After 20 destroyed cards: X10.5 Mult

## 🎨 Assets

The mod includes:
- `mefij.png` - 71x95 pixel joker sprite (placeholder included)
- Custom localization for the joker description
- Proper atlas configuration for sprite rendering

## 🔧 Technical Details

This mod uses the SMODS (Steamodded) framework and is compatible with:
- Lovely mod loader
- Other Balatro mods
- Blueprint joker copying
- Eternal joker protection

### File Structure
```
MefiJoker/
├── main.lua              # Main mod logic
├── lovely.toml           # Mod configuration  
├── mefij.png            # Joker sprite
├── localization/
│   └── en-us.lua        # English text
└── README.md            # This file
```

## 🐛 Known Issues

- None currently known

## 🤝 Contributing

Feel free to suggest improvements or report bugs! The mod is designed to be simple and focused on the core mechanic.

## 📄 License

This mod is released for the Balatro community. Please respect the game's terms of service.

---

**Enjoy scaling your multipliers with Mefi!** 🃏✨