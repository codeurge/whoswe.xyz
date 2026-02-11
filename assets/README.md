# who(s)we Brand Assets

This directory contains all visual brand assets and templates for the who(s)we project.

## Directory Structure

```
/assets
├── README.md                          (this file)
├── BRAND-GUIDELINES.md               (comprehensive brand guidelines)
├── /logos                            (logo variations)
│   ├── whoswe-logo-main.svg         (primary logo with effects)
│   └── whoswe-logo-minimal.svg      (minimal wordmark)
├── /favicons                         (icons and favicons)
│   └── favicon.svg                  (512x512 icon/favicon)
├── /social-templates                 (social media graphics)
│   └── lyric-quote.html             (1080x1080 quote template)
└── /youtube-templates                (YouTube graphics)
    └── thumbnail-template.html      (1280x720 thumbnail template)
```

## Quick Start

### Using the Logos

1. **Website Header**: Use `whoswe-logo-main.svg`
2. **Small Spaces**: Use `whoswe-logo-minimal.svg`
3. **Favicon/Icon**: Use `favicon.svg`

All logos are SVG format and scale perfectly at any size.

### Creating Social Media Posts

**For Lyric Quotes (Instagram/Twitter):**
1. Open `/social-templates/lyric-quote.html` in a web browser
2. Edit the quote text, highlight spans, and song name in the HTML
3. Resize browser to exactly 1080x1080px (use browser dev tools)
4. Take a screenshot or use browser screenshot tools
5. Save as PNG

**For YouTube Thumbnails:**
1. Open `/youtube-templates/thumbnail-template.html` in a web browser
2. Edit the song title, subtitle, and metadata in the HTML
3. Resize browser to exactly 1280x720px
4. Take a screenshot
5. Save as PNG or JPG

### Color Palette (Copy-Ready)

```css
/* Primary Colors */
--cyan-blue: #00d4ff;
--electric-purple: #a855f7;
--hot-pink: #ff006e;

/* Neutrals */
--black: #000000;
--white: #ffffff;
--dark-purple: #1a0a2e;
--deep-blue: #0a1a2e;

/* Primary Gradient */
--gradient: linear-gradient(90deg, #00d4ff 0%, #a855f7 50%, #ff006e 100%);
```

### Typography

```css
font-family: 'Courier Prime', 'Courier New', monospace;
```

**Web Font Import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">
```

## Asset Guidelines

### Logo Usage
- ✅ Use on black or very dark backgrounds
- ✅ Maintain aspect ratio
- ✅ Provide 20px clear space around logo
- ❌ Don't rotate, skew, or distort
- ❌ Don't change gradient colors
- ❌ Don't add effects or filters

### File Format Guide

| Asset Type | Recommended Format | Notes |
|------------|-------------------|-------|
| Logos | SVG | Scalable, use everywhere |
| Social Graphics | PNG | Lossless, supports transparency |
| YouTube Thumbnails | JPG/PNG | Balance quality/file size |
| Print Materials | PDF | High resolution, color managed |

### Social Media Dimensions

| Platform | Dimension | Template Available |
|----------|-----------|-------------------|
| Instagram Post | 1080x1080 | ✅ lyric-quote.html |
| Instagram Story | 1080x1920 | Use vertical crop |
| Twitter Post | 1200x675 | Use thumbnail template |
| YouTube Thumbnail | 1280x720 | ✅ thumbnail-template.html |
| Facebook Post | 1200x630 | Use thumbnail template |

## Customization Tips

### Editing HTML Templates

1. **Change Text**: Find the text content in the HTML and edit directly
2. **Change Colors**: Modify hex values in the `<style>` section
3. **Adjust Layout**: Edit CSS properties (padding, font-size, etc.)
4. **Add Effects**: Copy animation keyframes from existing styles

### Generating Variants

**Quick color variant:**
```css
/* Replace the gradient definition */
<linearGradient id="cyberpunkGradient">
  <stop offset="0%" style="stop-color:#YOUR_COLOR;"/>
  <stop offset="50%" style="stop-color:#YOUR_COLOR;"/>
  <stop offset="100%" style="stop-color:#YOUR_COLOR;"/>
</linearGradient>
```

**Font size adjustment:**
```css
/* Scale all text proportionally */
.quote-text { font-size: 52px; }  /* Original */
.quote-text { font-size: 64px; }  /* Larger variant */
```

## Best Practices

### File Optimization

**SVG Files:**
```bash
# Use SVGO for optimization
npx svgo --multipass assets/logos/*.svg
```

**PNG Files:**
```bash
# Use pngquant for compression
pngquant --quality=85-95 --ext .png --force image.png
```

### Accessibility

- Ensure text contrast meets WCAG AA standards (4.5:1 for body text)
- Provide alt text for all images
- Test animations with reduced motion preferences
- Use semantic HTML in templates

### Version Control

- Commit source files (SVG, HTML) to repository
- Keep generated assets (PNG, JPG) in separate export folder
- Tag major brand updates with version numbers
- Document changes in commit messages

## Tools & Resources

### Recommended Tools

**Design:**
- [Figma](https://figma.com) - Vector design
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization
- [Inkscape](https://inkscape.org) - Open source SVG editor

**Color:**
- [Coolors](https://coolors.co) - Palette generator
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Accessibility

**Fonts:**
- [Google Fonts](https://fonts.google.com/specimen/Courier+Prime) - Courier Prime download

**Screenshots:**
- Browser DevTools (F12) - Responsive design mode
- [ShareX](https://getsharex.com/) - Windows screenshot tool
- macOS Screenshot (Cmd+Shift+4) - Precise captures

### Web Resources

- Brand Guidelines: See `BRAND-GUIDELINES.md`
- Project Website: https://whoswe.xyz
- Repository: (Add link when available)

## FAQ

**Q: Can I use these assets for my own project?**
A: These assets are specific to who(s)we. Check the license file for usage rights.

**Q: How do I generate a favicon.ico from the SVG?**
A: Use an online converter like [RealFaviconGenerator](https://realfavicongenerator.net/) or ImageMagick:
```bash
convert favicon.svg -define icon:auto-resize=16,32,48,64,256 favicon.ico
```

**Q: Can I modify the templates?**
A: Yes! The HTML/CSS templates are meant to be customized. Keep the core brand elements (colors, fonts) consistent.

**Q: What if I need a size/format not included?**
A: SVG files scale infinitely. Open in Inkscape or Figma and export at any size needed.

**Q: How do I report issues or request new assets?**
A: Open an issue in the project repository or contact the project maintainers.

---

**Asset Pack Version**: 1.0
**Created**: 2026-02-11
**Last Updated**: 2026-02-11

For complete brand guidelines, see `BRAND-GUIDELINES.md`.
