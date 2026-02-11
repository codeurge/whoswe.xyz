/**
 * Global Spotify-style audio player for who(s)we.xyz
 * Automatically detects .mp3 files and creates a persistent bottom player
 */

class GlobalAudioPlayer {
    constructor() {
        this.audio = new Audio();
        this.playlist = [];
        this.currentIndex = 0;
        this.isPlaying = false;
        this.volume = 0.7;

        this.initializePlayer();
        this.setupEventListeners();
        this.loadPlaylist();
    }

    initializePlayer() {
        // Create player HTML
        const playerHTML = `
            <div id="global-player" class="global-player">
                <div class="player-content">
                    <!-- Song Info -->
                    <div class="player-song-info">
                        <div class="player-album-art">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                                <circle cx="12" cy="12" r="3" fill="currentColor"/>
                            </svg>
                        </div>
                        <div class="player-text">
                            <div class="player-song-title">No song loaded</div>
                            <div class="player-song-artist">who(s)we</div>
                        </div>
                    </div>

                    <!-- Controls -->
                    <div class="player-controls">
                        <button class="player-btn player-prev" title="Previous">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                            </svg>
                        </button>
                        <button class="player-btn player-play-pause" title="Play">
                            <svg class="play-icon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                            <svg class="pause-icon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style="display:none">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                            </svg>
                        </button>
                        <button class="player-btn player-next" title="Next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 18h2V6h-2zm-11-7l8.5-6v12z"/>
                            </svg>
                        </button>
                    </div>

                    <!-- Progress -->
                    <div class="player-progress-section">
                        <span class="player-time player-current">0:00</span>
                        <div class="player-progress-bar">
                            <div class="player-progress-bg">
                                <div class="player-progress-fill"></div>
                            </div>
                        </div>
                        <span class="player-time player-duration">0:00</span>
                    </div>

                    <!-- Volume -->
                    <div class="player-volume">
                        <button class="player-btn player-volume-btn" title="Mute">
                            <svg class="volume-on" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                            </svg>
                            <svg class="volume-off" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display:none">
                                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                            </svg>
                        </button>
                        <div class="player-volume-slider">
                            <div class="player-volume-bg">
                                <div class="player-volume-fill"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', playerHTML);

        // Cache DOM elements
        this.playerEl = document.getElementById('global-player');
        this.playPauseBtn = this.playerEl.querySelector('.player-play-pause');
        this.prevBtn = this.playerEl.querySelector('.player-prev');
        this.nextBtn = this.playerEl.querySelector('.player-next');
        this.progressBar = this.playerEl.querySelector('.player-progress-bg');
        this.progressFill = this.playerEl.querySelector('.player-progress-fill');
        this.currentTimeEl = this.playerEl.querySelector('.player-current');
        this.durationEl = this.playerEl.querySelector('.player-duration');
        this.songTitleEl = this.playerEl.querySelector('.player-song-title');
        this.songArtistEl = this.playerEl.querySelector('.player-song-artist');
        this.volumeBtn = this.playerEl.querySelector('.player-volume-btn');
        this.volumeSlider = this.playerEl.querySelector('.player-volume-slider');
        this.volumeFill = this.playerEl.querySelector('.player-volume-fill');
        this.playIcon = this.playerEl.querySelector('.play-icon');
        this.pauseIcon = this.playerEl.querySelector('.pause-icon');
        this.volumeOnIcon = this.playerEl.querySelector('.volume-on');
        this.volumeOffIcon = this.playerEl.querySelector('.volume-off');

        // Set initial volume
        this.audio.volume = this.volume;
        this.updateVolumeDisplay();
    }

    setupEventListeners() {
        // Play/Pause
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());

        // Previous/Next
        this.prevBtn.addEventListener('click', () => this.playPrevious());
        this.nextBtn.addEventListener('click', () => this.playNext());

        // Progress bar
        this.progressBar.addEventListener('click', (e) => this.seek(e));

        // Volume
        this.volumeBtn.addEventListener('click', () => this.toggleMute());
        this.volumeSlider.addEventListener('click', (e) => this.setVolume(e));

        // Audio events
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.playNext());
        this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
        this.audio.addEventListener('play', () => this.updatePlayState(true));
        this.audio.addEventListener('pause', () => this.updatePlayState(false));

        // Song card click handlers
        document.addEventListener('click', (e) => {
            const songCard = e.target.closest('.song-card');
            if (songCard && !e.target.closest('.share-buttons')) {
                const songIndex = Array.from(document.querySelectorAll('.song-card')).indexOf(songCard);
                if (songIndex >= 0 && this.playlist[songIndex]) {
                    this.playSong(songIndex);
                }
            }
        });
    }

    async loadPlaylist() {
        const songCards = document.querySelectorAll('.song-card');
        this.playlist = [];

        for (const card of songCards) {
            const titleEl = card.querySelector('.song-header h2');
            const themeEl = card.querySelector('.song-theme');

            if (!titleEl) continue;

            const title = titleEl.textContent.trim();
            const theme = themeEl ? themeEl.textContent.trim() : '';
            const slug = this.titleToSlug(title);
            const filename = `audio/${slug}.mp3`;

            // Check if file exists
            const exists = await this.checkFileExists(filename);

            this.playlist.push({
                title,
                theme,
                slug,
                filename,
                available: exists
            });
        }

        console.log(`Loaded playlist: ${this.playlist.filter(s => s.available).length}/${this.playlist.length} songs available`);

        // Load first available song
        const firstAvailable = this.playlist.findIndex(s => s.available);
        if (firstAvailable >= 0) {
            this.loadSong(firstAvailable);
        }
    }

    async checkFileExists(filename) {
        try {
            const response = await fetch(filename, { method: 'HEAD' });
            return response.ok;
        } catch {
            return false;
        }
    }

    titleToSlug(title) {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    loadSong(index) {
        if (index < 0 || index >= this.playlist.length) return;

        const song = this.playlist[index];
        if (!song.available) {
            console.log(`Song not available: ${song.title}`);
            return;
        }

        this.currentIndex = index;
        this.audio.src = song.filename;
        this.songTitleEl.textContent = song.title;
        this.songArtistEl.textContent = song.theme ? `${song.theme} • who(s)we` : 'who(s)we';

        // Highlight current song card
        document.querySelectorAll('.song-card').forEach((card, i) => {
            card.classList.toggle('playing', i === index);
        });

        console.log(`Loaded: ${song.title}`);
    }

    playSong(index) {
        this.loadSong(index);
        this.play();
    }

    play() {
        this.audio.play();
        this.isPlaying = true;
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    playNext() {
        let nextIndex = this.currentIndex + 1;

        // Find next available song
        while (nextIndex < this.playlist.length && !this.playlist[nextIndex].available) {
            nextIndex++;
        }

        if (nextIndex < this.playlist.length) {
            this.playSong(nextIndex);
        } else {
            // Loop back to first available
            const firstAvailable = this.playlist.findIndex(s => s.available);
            if (firstAvailable >= 0) {
                this.playSong(firstAvailable);
            }
        }
    }

    playPrevious() {
        let prevIndex = this.currentIndex - 1;

        // Find previous available song
        while (prevIndex >= 0 && !this.playlist[prevIndex].available) {
            prevIndex--;
        }

        if (prevIndex >= 0) {
            this.playSong(prevIndex);
        } else {
            // Loop to last available
            for (let i = this.playlist.length - 1; i >= 0; i--) {
                if (this.playlist[i].available) {
                    this.playSong(i);
                    break;
                }
            }
        }
    }

    seek(e) {
        const rect = this.progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        this.audio.currentTime = percent * this.audio.duration;
    }

    setVolume(e) {
        const rect = this.volumeSlider.getBoundingClientRect();
        const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        this.volume = percent;
        this.audio.volume = percent;
        this.updateVolumeDisplay();
    }

    toggleMute() {
        if (this.audio.volume > 0) {
            this.audio.volume = 0;
        } else {
            this.audio.volume = this.volume || 0.7;
        }
        this.updateVolumeDisplay();
    }

    updateProgress() {
        if (this.audio.duration) {
            const percent = (this.audio.currentTime / this.audio.duration) * 100;
            this.progressFill.style.width = `${percent}%`;
            this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
        }
    }

    updateDuration() {
        this.durationEl.textContent = this.formatTime(this.audio.duration);
    }

    updatePlayState(playing) {
        this.isPlaying = playing;
        this.playIcon.style.display = playing ? 'none' : 'block';
        this.pauseIcon.style.display = playing ? 'block' : 'none';
        this.playerEl.classList.toggle('playing', playing);
    }

    updateVolumeDisplay() {
        const volume = this.audio.volume;
        this.volumeFill.style.width = `${volume * 100}%`;
        this.volumeOnIcon.style.display = volume > 0 ? 'block' : 'none';
        this.volumeOffIcon.style.display = volume === 0 ? 'block' : 'none';
    }

    formatTime(seconds) {
        if (!seconds || isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
}

// Initialize player when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.globalPlayer = new GlobalAudioPlayer();
    });
} else {
    window.globalPlayer = new GlobalAudioPlayer();
}
