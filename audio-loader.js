/**
 * Auto-load .mp3 files from /audio/ directory and match them to song cards
 * Automatically populates audio players when matching .mp3 files are found
 */

// Song slug mapping (normalize song titles to filenames)
const songSlugMap = {
    'electric-dreams': 'Electric Dreams',
    'teaching-me-to-feel': 'Teaching Me to Feel',
    'infinite-weight': 'Infinite Weight',
    'beautiful-mistakes': 'Beautiful Mistakes',
    'searching-for-goodbye': 'Searching for Goodbye',
    'first-light': 'First Light',
    'learning-to-dream': 'Learning to Dream'
};

/**
 * Convert song title to slug (filename without .mp3)
 */
function titleToSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/**
 * Check if an audio file exists
 */
async function audioFileExists(filename) {
    try {
        const response = await fetch(`audio/${filename}`, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        return false;
    }
}

/**
 * Load audio for a specific song card
 */
async function loadAudioForSong(songCard) {
    const songTitle = songCard.querySelector('.song-header h2')?.textContent.trim();
    if (!songTitle) return;

    const slug = titleToSlug(songTitle);
    const filename = `${slug}.mp3`;

    // Check if audio file exists
    const exists = await audioFileExists(filename);
    if (!exists) {
        console.log(`No audio file found for "${songTitle}" (looking for: ${filename})`);
        return;
    }

    console.log(`Found audio file for "${songTitle}": ${filename}`);

    // Find the audio player in this song card
    const audioPlayer = songCard.querySelector('.audio-player');
    if (!audioPlayer) return;

    // Check if it already has an audio element
    let audioElement = audioPlayer.querySelector('audio');

    if (!audioElement) {
        // Replace placeholder with audio element
        audioPlayer.innerHTML = `
            <audio controls class="audio-player-element" data-song-slug="${slug}">
                <source src="audio/${filename}" type="audio/mpeg">
                <p class="audio-fallback">
                    Your browser doesn't support audio playback.
                    <a href="audio/${filename}" download>Download the song</a>
                </p>
            </audio>
        `;

        audioElement = audioPlayer.querySelector('audio');

        // Connect to visualizer if available
        const visualizerCanvas = songCard.querySelector('.audio-visualizer-canvas');
        if (visualizerCanvas && window.connectAudioToVisualizer) {
            window.connectAudioToVisualizer(audioElement, visualizerCanvas);
        }

        console.log(`✓ Loaded audio player for "${songTitle}"`);
    } else {
        // Update existing audio element
        const source = audioElement.querySelector('source');
        if (source && source.src !== `audio/${filename}`) {
            source.src = `audio/${filename}`;
            audioElement.load();
            console.log(`✓ Updated audio source for "${songTitle}"`);
        }
    }
}

/**
 * Load all available audio files
 */
async function loadAllAudio() {
    const songCards = document.querySelectorAll('.song-card');

    console.log(`Checking for audio files for ${songCards.length} songs...`);

    // Load audio for each song card
    const loadPromises = Array.from(songCards).map(card => loadAudioForSong(card));
    await Promise.all(loadPromises);

    console.log('Audio loading complete!');
}

/**
 * Initialize audio loader when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllAudio);
} else {
    loadAllAudio();
}

/**
 * Reload audio when returning to the page (in case files were added)
 */
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        loadAllAudio();
    }
});

// Export for manual reloading if needed
window.reloadAudio = loadAllAudio;
