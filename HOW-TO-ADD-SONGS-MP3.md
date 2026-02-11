# How to Add Songs (.mp3 Files)

## Super Simple 3-Step Process

### Step 1: Get Your .mp3 Files
1. Generate your songs on Suno.ai
2. Download them as .mp3 files
3. Rename them to lowercase with hyphens:
   - "Electric Dreams" → `electric-dreams.mp3`
   - "Teaching Me to Feel" → `teaching-me-to-feel.mp3`
   - etc.

### Step 2: Drop Files in the Audio Folder
```bash
cd ~/code/whoswe.xyz
# Put your .mp3 files here:
cp ~/Downloads/*.mp3 audio/
```

Your `audio/` folder should look like:
```
audio/
├── electric-dreams.mp3
├── teaching-me-to-feel.mp3
├── infinite-weight.mp3
├── beautiful-mistakes.mp3
├── searching-for-goodbye.mp3
├── first-light.mp3
└── learning-to-dream.mp3
```

### Step 3: Update index.html

Find each song's placeholder in `index.html` and replace it:

**FIND THIS:**
```html
<!-- Audio Player -->
<div class="audio-player">
    <div class="player-placeholder">
        <div class="placeholder-content">
            <svg>...</svg>
            <p>Audio coming soon</p>
            <span class="placeholder-hint">Generate this song on Suno...</span>
        </div>
    </div>
</div>
```

**REPLACE WITH THIS:**
```html
<!-- Audio Player -->
<div class="audio-player">
    <audio controls class="audio-player-element" data-song-id="electric-dreams">
        <source src="audio/electric-dreams.mp3" type="audio/mpeg">
        <p class="audio-fallback">Your browser doesn't support audio playback. <a href="audio/electric-dreams.mp3" download>Download the song</a></p>
    </audio>
</div>
```

**Important:** Change the filename for each song:
- Electric Dreams: `src="audio/electric-dreams.mp3"`
- Teaching Me to Feel: `src="audio/teaching-me-to-feel.mp3"`
- Infinite Weight: `src="audio/infinite-weight.mp3"`
- etc.

## That's It!

Deploy to Vercel and your songs will play automatically. No embeds, no third-party dependencies, just clean HTML5 audio.

## Testing Locally

```bash
cd ~/code/whoswe.xyz
python3 -m http.server 8000
# Open http://localhost:8000
```

Click play on any song - it should work immediately!

## Adding More Songs Later

When you add new songs:
1. Download the .mp3
2. Put it in `audio/`
3. Add a new song card to `index.html` with the audio player
4. Deploy

## Troubleshooting

**Song won't play?**
- Check the filename exactly matches (case-sensitive!)
- Make sure the .mp3 is in the `/audio/` directory
- Try opening the file directly: `http://localhost:8000/audio/electric-dreams.mp3`

**Want custom player styling?**
- Edit the CSS in `styles.css` under `.audio-player-element`
- The players already match your cyberpunk theme!

---

This approach is simpler, faster, and gives you full control over your audio files. 🎵
