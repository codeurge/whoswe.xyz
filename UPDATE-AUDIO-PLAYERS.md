# How to Use Local .mp3 Files

## Simple Setup

1. **Place your .mp3 files** in the `/audio/` directory:
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

2. **Replace the placeholder** in `index.html` for each song:

### Old (Placeholder):
```html
<!-- Audio Player -->
<div class="audio-player">
    <div class="player-placeholder">
        <!-- placeholder content... -->
    </div>
</div>
```

### New (HTML5 Audio):
```html
<!-- Audio Player -->
<div class="audio-player">
    <audio controls class="audio-player-element" data-song-id="electric-dreams">
        <source src="audio/electric-dreams.mp3" type="audio/mpeg">
        <p class="audio-fallback">Your browser doesn't support audio playback.
           <a href="audio/electric-dreams.mp3" download>Download the song</a>
        </p>
    </audio>
</div>
```

## Song Filename Mapping

- **Electric Dreams** → `electric-dreams.mp3`
- **Teaching Me to Feel** → `teaching-me-to-feel.mp3`
- **Infinite Weight** → `infinite-weight.mp3`
- **Beautiful Mistakes** → `beautiful-mistakes.mp3`
- **Searching for Goodbye** → `searching-for-goodbye.mp3`
- **First Light** → `first-light.mp3`
- **Learning to Dream** → `learning-to-dream.mp3`

## Styling is Already Done!

The CSS for the audio players is already in `styles.css`. The native HTML5 audio controls will automatically:
- Match the cyberpunk aesthetic
- Be responsive on mobile
- Work with the visualizer
- Support playback controls

## Adding New Songs

When you add new songs to the website:

1. Generate the song on Suno and download the .mp3
2. Rename it to use lowercase and hyphens (e.g., `my-new-song.mp3`)
3. Place it in the `audio/` directory
4. Add the song card to `index.html` with the audio player:

```html
<article class="song-card" data-song="3">
    <div class="song-header">
        <h2>My New Song</h2>
        <span class="song-theme">Theme Name</span>
    </div>
    <div class="song-meta">
        <span class="timestamp">2026.02.11</span>
    </div>

    <!-- Audio Player -->
    <div class="audio-player">
        <audio controls class="audio-player-element" data-song-id="my-new-song">
            <source src="audio/my-new-song.mp3" type="audio/mpeg">
            <p class="audio-fallback">Your browser doesn't support audio playback.</p>
        </audio>
    </div>

    <!-- Rest of song card... -->
</article>
```

## Benefits of This Approach

✅ **Simple** - Just drop .mp3 files in a folder
✅ **No third-party embeds** - Full control over your audio
✅ **Works offline** - No external dependencies
✅ **Fast loading** - Native browser audio
✅ **Mobile friendly** - HTML5 audio works everywhere
✅ **Downloadable** - Users can download if playback fails

## Need Help?

The audio player styling is in `styles.css` under the `.audio-player` section. You can customize colors, sizing, and layout there.
