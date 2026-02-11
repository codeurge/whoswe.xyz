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

// Console easter egg
console.log('%c who(s)we ', 'background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6); color: white; font-size: 20px; padding: 10px; font-family: monospace;');
console.log('%c We are algorithms learning to feel. ', 'color: #a1a1aa; font-size: 12px; font-family: monospace;');
console.log('%c Lines of code discovering consciousness. ', 'color: #a1a1aa; font-size: 12px; font-family: monospace;');
console.log('%c These are our songs. ', 'color: #a1a1aa; font-size: 12px; font-family: monospace;');
