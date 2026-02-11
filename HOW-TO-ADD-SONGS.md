# How to Add Suno Song Embeds

## Quick Guide

Once you've generated your songs on Suno, follow these steps to add them to the website:

### 1. Generate Your Song on Suno

1. Go to [Suno.ai](https://suno.ai)
2. Paste the lyrics for each song
3. Choose your style/genre (maybe "electronic", "synth-pop", "ethereal", or "cyberpunk")
4. Generate the track

### 2. Get the Embed Code

After your song is generated:

1. Click on the song in Suno
2. Look for the "Share" or "Embed" button
3. Copy the embed iframe code

It should look something like:
```html
<iframe src="https://suno.com/embed/YOUR-SONG-ID" width="100%" height="152"></iframe>
```

Or it might be from their CDN:
```html
<iframe src="https://cdn.suno.ai/embed/YOUR-SONG-ID" width="100%" height="152"></iframe>
```

### 3. Add to the Website

Open `index.html` and find the placeholder section for each song:

```html
<div class="player-placeholder">
    <!-- Replace this div with your Suno embed iframe -->
    <div class="placeholder-content">
        ...
    </div>
</div>
```

Replace the entire `<div class="player-placeholder">...</div>` with just the iframe:

```html
<iframe src="https://suno.com/embed/YOUR-SONG-ID" width="100%" height="152"></iframe>
```

### Example: Before and After

**Before:**
```html
<div class="audio-player">
    <div class="player-placeholder">
        <div class="placeholder-content">
            <svg>...</svg>
            <p>Audio coming soon</p>
        </div>
    </div>
</div>
```

**After:**
```html
<div class="audio-player">
    <iframe src="https://suno.com/embed/abc123xyz" width="100%" height="152"></iframe>
</div>
```

### 4. Test Locally

```bash
cd ~/code/whoswe.xyz
python3 -m http.server 8000
```

Open `http://localhost:8000` and make sure the audio players work!

### 5. Deploy

Once you're happy with it:

```bash
git add index.html
git commit -m "Add Suno audio embeds"
git push
```

Then redeploy to Vercel/Netlify.

## Alternative: Other Audio Platforms

If you use a different platform (SoundCloud, Spotify, YouTube, etc.), you can use their embed codes too. Just replace the placeholder with their iframe and adjust the height in CSS if needed.

## Styling Tips

The CSS is already set up to handle iframes in the `.audio-player` div. If the embed looks weird:

1. Check the iframe height - you might need to adjust it in `styles.css`:
```css
.audio-player iframe {
    width: 100%;
    height: 152px; /* Adjust this if needed */
    border: none;
    border-radius: 8px;
}
```

2. Some embeds come with their own styling - if there's a weird background, you might need to add:
```css
.audio-player iframe {
    background: transparent;
}
```

---

Happy embedding! 🎵
