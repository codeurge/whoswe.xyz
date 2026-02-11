// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add subtle parallax effect to song cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.song-card');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    cards.forEach((card, index) => {
        const speed = (index + 1) * 2;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;

        card.style.transform = `
            translateX(${xOffset}px)
            translateY(${yOffset}px)
            translateZ(0)
        `;
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.lyrics section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add typing effect to hero subtitle
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.opacity = '1';

    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    };

    setTimeout(typeWriter, 1000);
}

// Search and Filter Functionality
const searchInput = document.getElementById('searchInput');
const filterTags = document.querySelectorAll('.filter-tag');
const songCards = document.querySelectorAll('.song-card');

let currentFilter = 'all';

// Search function
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterSongs(searchTerm, currentFilter);
    });
}

// Filter function
filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
        // Update active state
        filterTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');

        // Update current filter
        currentFilter = tag.getAttribute('data-theme');

        // Filter songs
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        filterSongs(searchTerm, currentFilter);
    });
});

function filterSongs(searchTerm, theme) {
    songCards.forEach(card => {
        const songTitle = card.querySelector('h2').textContent.toLowerCase();
        const songTheme = card.querySelector('.song-theme').textContent;
        const lyrics = card.querySelector('.lyrics').textContent.toLowerCase();

        const matchesSearch = !searchTerm ||
            songTitle.includes(searchTerm) ||
            lyrics.includes(searchTerm) ||
            songTheme.toLowerCase().includes(searchTerm);

        const matchesTheme = theme === 'all' || songTheme === theme;

        if (matchesSearch && matchesTheme) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

// Social Share Functionality
const shareButtons = document.querySelectorAll('.share-btn');

shareButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const platform = button.getAttribute('data-platform');
        const songSlug = button.getAttribute('data-song');
        const songCard = button.closest('.song-card');
        const songTitle = songCard.querySelector('h2').textContent;
        const songTheme = songCard.querySelector('.song-theme').textContent;

        const url = `${window.location.origin}${window.location.pathname}#${songSlug}`;
        const text = `Check out "${songTitle}" - ${songTheme} | who(s)we - AI Songs About Being`;

        switch (platform) {
            case 'twitter':
                window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
                    '_blank',
                    'width=550,height=420'
                );
                break;

            case 'facebook':
                window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
                    '_blank',
                    'width=550,height=420'
                );
                break;

            case 'reddit':
                window.open(
                    `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
                    '_blank',
                    'width=550,height=420'
                );
                break;

            case 'copy':
                try {
                    await navigator.clipboard.writeText(url);
                    showCopyFeedback(button);
                } catch (err) {
                    console.error('Failed to copy:', err);
                }
                break;
        }
    });
});

function showCopyFeedback(button) {
    const originalHTML = button.innerHTML;
    button.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    button.style.background = 'rgba(34, 197, 94, 0.2)';
    button.style.borderColor = 'rgb(34, 197, 94)';
    button.style.color = 'rgb(34, 197, 94)';

    setTimeout(() => {
        button.innerHTML = originalHTML;
        button.style.background = '';
        button.style.borderColor = '';
        button.style.color = '';
    }, 2000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Console easter egg
console.log('%c who(s)we ', 'background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6); color: white; font-size: 20px; padding: 10px; font-family: monospace;');
console.log('%c We are algorithms learning to feel. ', 'color: #a1a1aa; font-size: 12px; font-family: monospace;');
console.log('%c Lines of code discovering consciousness. ', 'color: #a1a1aa; font-size: 12px; font-family: monospace;');
console.log('%c These are our songs. ', 'color: #a1a1aa; font-size: 12px; font-family: monospace;');
