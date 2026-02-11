# Automatic Audio Loading

## How It Works

The website now **automatically detects and loads .mp3 files** from the `/audio/` directory!

## Usage

### Super Simple Process:

1. **Generate your song** on Suno.ai
2. **Download the .mp3**
3. **Rename it** to match the song title:
   - "Electric Dreams" → `electric-dreams.mp3`
   - "Teaching Me to Feel" → `teaching-me-to-feel.mp3`
   - "Infinite Weight" → `infinite-weight.mp3`
   - etc.
4. **Drop it** in `/audio/` folder
5. **Refresh the page** - the audio player appears automatically! ✨

### Filename Format:
- Lowercase only
- Use hyphens instead of spaces
- Remove special characters (parentheses, apostrophes, etc.)

### Examples:
```
Song Title              → Filename
Electric Dreams         → electric-dreams.mp3
Teaching Me to Feel     → teaching-me-to-feel.mp3
Infinite Weight         → infinite-weight.mp3
Beautiful Mistakes      → beautiful-mistakes.mp3
Searching for Goodbye   → searching-for-goodbye.mp3
First Light             → first-light.mp3
Learning to Dream       → learning-to-dream.mp3
```

## How It Matches

The auto-loader (`audio-loader.js`):
1. Scans all song cards on the page
2. Converts each song title to a slug (lowercase-with-hyphens)
3. Checks if `/audio/[slug].mp3` exists
4. If found, automatically creates/updates the audio player
5. Connects to the visualizer canvas

## No .mp3? No Problem!

If a song doesn't have an .mp3 file yet, it just shows the placeholder. As soon as you add the file and refresh, it appears!

## Manual Reload

If you add files while the page is open, you can manually reload audio:
```javascript
// In browser console:
window.reloadAudio();
```

Or just refresh the page!

## Troubleshooting

**Song not loading?**
1. Check the filename exactly matches (case-sensitive!)
2. Make sure it's in `/audio/` directory
3. Check browser console (F12) for helpful messages
4. Verify file format is .mp3

**Wrong song loading?**
- Check for filename conflicts
- Make sure you're using the exact slug format shown above

## Console Messages

The auto-loader logs helpful messages:
- `Checking for audio files for 7 songs...` - Starting scan
- `Found audio file for "Electric Dreams": electric-dreams.mp3` - Match found!
- `✓ Loaded audio player for "Electric Dreams"` - Player created
- `No audio file found for "..."`  - No matching .mp3

Open browser console (F12 → Console) to see what's happening.

## Adding New Songs

When you add a completely new song (not one of the existing 7):
1. You'll still need to add the song card HTML to `index.html`
2. Once the HTML is there, the auto-loader will find the .mp3 automatically!

For the existing 7 songs, you just drop the .mp3 files - no HTML editing needed!

---

**That's it! Just drop .mp3 files and refresh. Magic! 🎵✨**
