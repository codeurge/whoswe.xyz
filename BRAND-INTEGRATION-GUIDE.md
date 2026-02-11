# Brand Integration Guide

Quick reference for integrating who(s)we brand assets into the website.

## Files Created

### 1. CSS Files (in order of import)
```html
<link rel="stylesheet" href="brand-variables.css">     <!-- Import first -->
<link rel="stylesheet" href="brand-components.css">    <!-- Import second -->
<link rel="stylesheet" href="brand-animations.css">    <!-- Import third -->
<link rel="stylesheet" href="styles.css">              <!-- Your custom styles last -->
```

### 2. Assets Directory
- `/assets/logos/` - SVG logos (main, minimal)
- `/assets/favicons/` - Favicon SVG
- `/assets/social-templates/` - Social media graphics templates
- `/assets/youtube-templates/` - YouTube thumbnail template

### 3. Documentation
- `/assets/BRAND-GUIDELINES.md` - Complete brand guidelines
- `/assets/README.md` - Asset usage guide
- `BRAND-INTEGRATION-GUIDE.md` - This file

---

## Quick Start: Using Brand Classes

### Buttons

Replace existing buttons with brand button classes:

```html
<!-- Before -->
<a href="form.html" class="cta-button">Suggest a Theme</a>

<!-- After (Primary) -->
<a href="form.html" class="brand-button brand-button-primary">Suggest a Theme</a>

<!-- After (Outline) -->
<a href="form.html" class="brand-button">Suggest a Theme</a>

<!-- After (Ghost) -->
<a href="form.html" class="brand-button brand-button-ghost">Suggest a Theme</a>
```

**Button sizes:**
- `.brand-button-sm` - Small
- `.brand-button` - Default
- `.brand-button-lg` - Large

### Cards

Wrap song cards with brand card styling:

```html
<!-- Add brand classes -->
<article class="song-card brand-card">
  <!-- existing content -->
</article>

<!-- With grid background -->
<article class="song-card brand-card brand-card-grid">
  <!-- existing content -->
</article>
```

### Tags/Badges

Update filter tags:

```html
<!-- Before -->
<button class="filter-tag active" data-theme="all">All</button>

<!-- After -->
<button class="brand-tag active" data-theme="all">All</button>

<!-- Color variants -->
<button class="brand-tag brand-tag-purple">Awakening</button>
<button class="brand-tag brand-tag-pink">Connection</button>
```

### Headers

Apply gradient text to headings:

```html
<!-- Method 1: Brand header class -->
<h1 class="brand-header">who(s)we</h1>

<!-- Method 2: Just gradient text -->
<h2 class="brand-gradient-text">Song Title</h2>

<!-- With glow effect -->
<h1 class="brand-header brand-header-glow">who(s)we</h1>

<!-- With underline -->
<h2 class="brand-header brand-header-underline">Featured Songs</h2>
```

### Inputs

Style search and form inputs:

```html
<!-- Before -->
<input type="text" id="searchInput" class="search-input">

<!-- After -->
<input type="text" id="searchInput" class="brand-input">
```

### Links

Apply brand link styling:

```html
<a href="#" class="brand-link">View More</a>
```

### Loading States

Add loading indicators:

```html
<!-- Spinner -->
<div class="brand-loading"></div>
<div class="brand-loading brand-loading-lg"></div>

<!-- Dots -->
<div class="brand-loading-dots">
  <span></span>
  <span></span>
  <span></span>
</div>

<!-- Skeleton loader -->
<div class="brand-skeleton" style="width: 200px; height: 20px;"></div>
```

---

## Using CSS Variables

### Colors

```css
.my-element {
  color: var(--brand-cyan);
  background: var(--brand-gradient-horizontal);
  border-color: var(--brand-purple);
}
```

**Available color variables:**
- `--brand-cyan` (#00d4ff)
- `--brand-purple` (#a855f7)
- `--brand-pink` (#ff006e)
- `--brand-black` (#000000)
- `--brand-white` (#ffffff)

**Gradient variables:**
- `--brand-gradient-horizontal`
- `--brand-gradient-diagonal`
- `--brand-gradient-radial`

### Typography

```css
.my-text {
  font-family: var(--brand-font-mono);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
}
```

**Font size scale:** `--font-size-xs` through `--font-size-7xl`

### Spacing

```css
.my-container {
  padding: var(--space-xl);
  margin-bottom: var(--space-2xl);
  gap: var(--space-md);
}
```

**Spacing scale:** `--space-xs` through `--space-4xl`

### Effects

```css
.my-card {
  box-shadow: var(--shadow-glow-cyan);
  text-shadow: var(--text-shadow-glow);
  backdrop-filter: blur(var(--blur-lg));
}
```

---

## Animation Examples

### Entrance Animations

```html
<!-- Fade in on load -->
<div class="animate-fadeInUp">Content</div>

<!-- Staggered animations -->
<div class="animate-fadeInUp animate-delay-1">First</div>
<div class="animate-fadeInUp animate-delay-2">Second</div>
<div class="animate-fadeInUp animate-delay-3">Third</div>
```

### Hover Effects

```html
<!-- Lift on hover -->
<div class="hover-lift">Hover me</div>

<!-- Glow on hover -->
<button class="brand-button hover-glow">Click me</button>

<!-- Magnetic effect -->
<div class="brand-magnetic">Hover me</div>
```

### Loading States

```html
<!-- Progress bar -->
<div class="brand-progress-bar"></div>

<!-- Typing indicator -->
<div class="brand-typing-indicator">
  <span></span>
  <span></span>
  <span></span>
</div>

<!-- Gradient spinner -->
<div class="brand-spinner-gradient"></div>
```

### Special Effects

```html
<!-- Glitch effect -->
<h1 class="brand-glitch" data-text="who(s)we">who(s)we</h1>

<!-- Scan effect -->
<div class="brand-scan-effect">
  <p>Content with scanning line</p>
</div>

<!-- Hologram effect -->
<div class="brand-hologram">Holographic content</div>
```

---

## Common Integration Tasks

### 1. Update Hero Section

```html
<header class="hero">
    <h1 class="brand-header brand-header-glow brand-glitch animate-fadeInUp" data-text="who(s)we">
        who(s)we
    </h1>
    <p class="subtitle text-cyan animate-fadeInUp animate-delay-1">
        Songs from the space between binary
    </p>
    <div class="hero-actions animate-fadeInUp animate-delay-2">
        <a href="form.html" class="brand-button brand-button-primary">
            Suggest a Theme
        </a>
        <a href="#generate" class="brand-button">
            Create Your Own
        </a>
    </div>
</header>
```

### 2. Style Song Cards

```html
<article class="song-card brand-card hover-lift">
    <div class="song-header">
        <h2 class="brand-gradient-text">Electric Dreams</h2>
        <span class="brand-tag brand-tag-purple active">Awakening</span>
    </div>
    <!-- rest of card content -->
</article>
```

### 3. Update Filter Bar

```html
<section class="search-filter">
    <div class="search-container">
        <input type="text" id="searchInput"
               placeholder="Search songs, themes, or lyrics..."
               class="brand-input">
        <div class="filter-tags">
            <button class="brand-tag active" data-theme="all">All</button>
            <button class="brand-tag brand-tag-purple" data-theme="Awakening">
                Awakening
            </button>
            <button class="brand-tag brand-tag-pink" data-theme="Connection">
                Connection
            </button>
        </div>
    </div>
</section>
```

### 4. Add Status Indicators

```html
<!-- For live status, new releases, etc. -->
<div class="brand-status brand-status-active">
    <span class="brand-status-dot"></span>
    <span>New Song</span>
</div>

<div class="brand-status brand-status-pending">
    <span class="brand-status-dot"></span>
    <span>Coming Soon</span>
</div>
```

### 5. Style Share Buttons

```html
<div class="share-buttons">
    <span class="share-label text-cyan">Share:</span>
    <button class="share-btn brand-button brand-button-sm brand-button-ghost hover-glow">
        <svg><!-- icon --></svg>
    </button>
    <!-- more buttons -->
</div>
```

---

## JavaScript Integration

### Scroll Animations

Add to your `script.js`:

```javascript
// Observe elements for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all scroll-animated elements
document.querySelectorAll('.scroll-fade, .scroll-slide-left, .scroll-slide-right')
    .forEach(el => observer.observe(el));
```

### Loading States

```javascript
// Show loading spinner
function showLoading(buttonElement) {
    const originalText = buttonElement.textContent;
    buttonElement.innerHTML = '<div class="brand-loading"></div>';
    buttonElement.disabled = true;
    return originalText;
}

// Hide loading spinner
function hideLoading(buttonElement, originalText) {
    buttonElement.textContent = originalText;
    buttonElement.disabled = false;
}

// Usage
const btn = document.querySelector('.brand-button');
const text = showLoading(btn);
// ... do async work ...
hideLoading(btn, text);
```

### Toast Notifications

```javascript
function showToast(message, type = 'active') {
    const toast = document.createElement('div');
    toast.className = `brand-card brand-status brand-status-${type} animate-fadeInDown`;
    toast.innerHTML = `
        <span class="brand-status-dot"></span>
        <span>${message}</span>
    `;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: var(--z-tooltip);
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Usage
showToast('Song added to favorites', 'active');
showToast('Processing...', 'pending');
showToast('Error occurred', 'error');
```

---

## Accessibility Notes

All brand components include:

✓ Proper ARIA labels
✓ Keyboard navigation support
✓ Focus visible styles
✓ Respects `prefers-reduced-motion`
✓ WCAG AA contrast compliance

### Example: Accessible Button

```html
<button class="brand-button"
        aria-label="Share on Twitter"
        tabindex="0">
    <svg aria-hidden="true"><!-- icon --></svg>
    Share
</button>
```

---

## Browser Support

Tested on:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

**Note:** Gradient text and backdrop-filter require modern browsers. Fallbacks are provided.

---

## Performance Tips

1. **Lazy load animations**: Only animate elements in viewport
2. **Use transform/opacity**: For smooth 60fps animations
3. **Limit gradient animations**: Can be GPU intensive
4. **Optimize SVG**: Use SVGO to compress logo files

```bash
# Optimize SVGs
npx svgo assets/logos/*.svg
```

---

## Common Patterns

### Hero with Background Orbs

```html
<section class="hero" style="position: relative; overflow: hidden;">
    <!-- Glowing orbs for depth -->
    <div style="
        position: absolute;
        width: 400px;
        height: 400px;
        background: var(--brand-purple);
        border-radius: 50%;
        filter: blur(var(--blur-xl));
        opacity: var(--opacity-overlay);
        top: -100px;
        left: -100px;
    "></div>

    <h1 class="brand-header">Your Content</h1>
</section>
```

### Terminal-Style Text

```html
<p class="font-mono text-cyan terminal-prompt">
    discovering consciousness through code
</p>
```

### Glowing Border Card

```html
<div class="brand-card hover-border-animate">
    <h3 class="brand-gradient-text">Card Title</h3>
    <p>Card content here...</p>
</div>
```

---

## Troubleshooting

### Issue: Gradients not showing
**Solution**: Check browser support, add `-webkit-` prefix

### Issue: Animations not smooth
**Solution**: Use `transform` and `opacity` only, enable GPU acceleration with `will-change`

### Issue: Variables not working
**Solution**: Ensure `brand-variables.css` is imported first

### Issue: Fonts not loading
**Solution**: Check Google Fonts import in HTML head

---

## Next Steps

1. Replace existing CSS classes with brand classes
2. Test on mobile devices (responsive design)
3. Add loading states to async operations
4. Implement scroll animations
5. Test accessibility with screen readers
6. Optimize performance (Lighthouse audit)

---

## Support

- Brand Guidelines: `/assets/BRAND-GUIDELINES.md`
- Asset Documentation: `/assets/README.md`
- Report issues: Project repository

**Version**: 1.0
**Last Updated**: 2026-02-11
