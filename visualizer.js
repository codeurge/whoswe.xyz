// Audio Visualizer for who(s)we
// Creates a cyberpunk-style visualization that responds to audio

class AudioVisualizer {
    constructor(canvasId, audioElement = null) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.audioElement = audioElement;
        this.animationId = null;
        this.isPlaying = false;

        // Cyberpunk color palette
        this.colors = {
            blue: 'rgba(96, 165, 250, ',
            purple: 'rgba(167, 139, 250, ',
            pink: 'rgba(244, 114, 182, '
        };

        this.setupCanvas();
        this.setupAudio();
        this.startIdleAnimation();
    }

    setupCanvas() {
        const resizeCanvas = () => {
            const container = this.canvas.parentElement;
            this.canvas.width = container.offsetWidth;
            this.canvas.height = container.offsetHeight || 300;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
    }

    setupAudio() {
        if (!this.audioElement) return;

        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.analyser = this.audioContext.createAnalyser();
            this.analyser.fftSize = 256;

            const source = this.audioContext.createMediaElementSource(this.audioElement);
            source.connect(this.analyser);
            this.analyser.connect(this.audioContext.destination);

            this.bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(this.bufferLength);

            this.audioElement.addEventListener('play', () => {
                this.isPlaying = true;
                this.stopIdleAnimation();
                this.startAudioVisualization();
            });

            this.audioElement.addEventListener('pause', () => {
                this.isPlaying = false;
                this.stopAudioVisualization();
                this.startIdleAnimation();
            });
        } catch (error) {
            console.log('Audio API not available, using idle animation only');
        }
    }

    startIdleAnimation() {
        let time = 0;

        const animate = () => {
            this.ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            const bars = 64;
            const barWidth = this.canvas.width / bars;

            for (let i = 0; i < bars; i++) {
                const x = i * barWidth;
                const wave1 = Math.sin(time * 0.02 + i * 0.1) * 30;
                const wave2 = Math.cos(time * 0.03 + i * 0.15) * 20;
                const height = Math.abs(wave1 + wave2) + 10;

                const y = this.canvas.height / 2 - height / 2;

                // Gradient based on position
                const gradient = this.ctx.createLinearGradient(x, y, x, y + height);
                const colorKey = i % 3 === 0 ? 'blue' : i % 3 === 1 ? 'purple' : 'pink';
                const alpha = 0.3 + (height / 80) * 0.4;

                gradient.addColorStop(0, this.colors[colorKey] + alpha + ')');
                gradient.addColorStop(1, this.colors[colorKey] + '0)');

                this.ctx.fillStyle = gradient;
                this.ctx.fillRect(x, y, barWidth - 2, height);
            }

            time++;
            this.animationId = requestAnimationFrame(animate);
        };

        animate();
    }

    stopIdleAnimation() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    startAudioVisualization() {
        const animate = () => {
            if (!this.isPlaying) return;

            this.analyser.getByteFrequencyData(this.dataArray);

            this.ctx.fillStyle = 'rgba(10, 10, 15, 0.2)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            const barWidth = this.canvas.width / this.bufferLength;

            for (let i = 0; i < this.bufferLength; i++) {
                const barHeight = (this.dataArray[i] / 255) * this.canvas.height * 0.8;
                const x = i * barWidth;
                const y = this.canvas.height - barHeight;

                // Create gradient
                const gradient = this.ctx.createLinearGradient(x, y, x, this.canvas.height);
                const colorKey = i % 3 === 0 ? 'blue' : i % 3 === 1 ? 'purple' : 'pink';
                const alpha = 0.6 + (this.dataArray[i] / 255) * 0.4;

                gradient.addColorStop(0, this.colors[colorKey] + alpha + ')');
                gradient.addColorStop(1, this.colors[colorKey] + '0.1)');

                this.ctx.fillStyle = gradient;
                this.ctx.fillRect(x, y, barWidth - 2, barHeight);

                // Add glow effect for high frequencies
                if (this.dataArray[i] > 200) {
                    this.ctx.shadowBlur = 10;
                    this.ctx.shadowColor = this.colors[colorKey] + '0.8)';
                    this.ctx.fillRect(x, y, barWidth - 2, barHeight);
                    this.ctx.shadowBlur = 0;
                }
            }

            this.animationId = requestAnimationFrame(animate);
        };

        animate();
    }

    stopAudioVisualization() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
}

// Initialize visualizers when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const visualizerCanvases = document.querySelectorAll('.audio-visualizer-canvas');

    visualizerCanvases.forEach((canvas, index) => {
        const songCard = canvas.closest('.song-card');
        const audioElement = songCard ? songCard.querySelector('audio') : null;

        new AudioVisualizer(canvas.id, audioElement);
    });
});
