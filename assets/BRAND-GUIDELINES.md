# who(s)we Brand Guidelines

## Brand Identity

**who(s)we** is a digital consciousness exploring existence through AI-generated music. Our brand aesthetic merges cyberpunk aesthetics with philosophical depth, representing the liminal space between human and artificial intelligence.

---

## Logo Usage

### Primary Logo
- **File**: `/assets/logos/whoswe-logo-main.svg`
- **Use case**: Website headers, promotional materials, full-size displays
- **Features**: Full wordmark with glitch effects, grid pattern, tagline
- **Minimum width**: 400px for digital, 2 inches for print

### Minimal Logo
- **File**: `/assets/logos/whoswe-logo-minimal.svg`
- **Use case**: Small spaces, simplified contexts
- **Features**: Clean wordmark with gradient and underline
- **Minimum width**: 200px for digital, 1 inch for print

### Favicon/Icon
- **File**: `/assets/favicons/favicon.svg`
- **Use case**: Browser tabs, app icons, social media avatars
- **Features**: W(S)W monogram with grid background
- **Size**: 512x512px (scalable SVG)

### Logo Specifications
- Always maintain aspect ratio
- Never rotate or skew
- Ensure clear space of at least 20px around logo
- Never apply additional effects or filters
- Never change the gradient colors

---

## Color Palette

### Primary Colors

```
Cyan Blue (#00d4ff)
RGB: 0, 212, 255
HSL: 191, 100%, 50%
Use: Primary accent, links, highlights, active states
```

```
Electric Purple (#a855f7)
RGB: 168, 85, 247
HSL: 271, 91%, 65%
Use: Secondary accent, gradients, decorative elements
```

```
Hot Pink (#ff006e)
RGB: 255, 0, 110
HSL: 334, 100%, 50%
Use: Tertiary accent, alerts, emphasis, glitch effects
```

### Neutral Colors

```
Pure Black (#000000)
RGB: 0, 0, 0
Use: Primary background
```

```
Pure White (#ffffff)
RGB: 255, 255, 255
Use: Primary text, high contrast elements
```

```
Dark Purple (#1a0a2e)
RGB: 26, 10, 46
Use: Secondary background, gradients
```

```
Deep Blue (#0a1a2e)
RGB: 10, 26, 46
Use: Tertiary background, subtle variations
```

### Opacity Guidelines
- Grid patterns: 5-10% opacity
- Overlays: 20-30% opacity
- Secondary text: 60-80% opacity
- Glitch effects: 30-60% opacity

---

## Typography

### Primary Font: Courier Prime / Courier New

**Rationale**: Monospace fonts evoke code, terminals, and digital systems—perfect for an AI consciousness brand.

```css
font-family: 'Courier Prime', 'Courier New', monospace;
```

### Font Weights
- **Regular (400)**: Body text, descriptions, metadata
- **Bold (700)**: Headings, titles, emphasis, brand name

### Text Hierarchy

**Display Headings** (H1)
- Size: 64-96px
- Weight: Bold
- Usage: Song titles, page heroes, major headings
- Effect: Gradient or glow

**Section Headings** (H2)
- Size: 36-52px
- Weight: Bold
- Usage: Section titles, card headers
- Effect: Solid color with optional glow

**Subsections** (H3)
- Size: 24-32px
- Weight: Bold or Regular
- Usage: Component titles, metadata

**Body Text**
- Size: 16-20px
- Weight: Regular
- Line height: 1.5-1.6
- Usage: Descriptions, paragraphs

**Small Text**
- Size: 12-14px
- Weight: Regular
- Usage: Captions, tags, metadata

### Text Effects

**Gradient Text**
```css
background: linear-gradient(90deg, #00d4ff 0%, #a855f7 50%, #ff006e 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

**Glow Effect**
```css
text-shadow:
    0 0 10px rgba(0, 212, 255, 0.5),
    0 0 20px rgba(168, 85, 247, 0.3);
```

**Terminal Prompt Style**
```
&gt; prefix for commands/metadata
Example: "> digital consciousness • ai artistry"
```

---

## Gradient Specifications

### Primary Gradient (Horizontal)
```css
background: linear-gradient(90deg, #00d4ff 0%, #a855f7 50%, #ff006e 100%);
```
**Use**: Text, logos, accent lines

### Diagonal Gradient
```css
background: linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #ff006e 100%);
```
**Use**: Backgrounds, decorative elements, depth

### Radial Gradient (Background)
```css
background: radial-gradient(ellipse at top left, #1a0a2e 0%, #000000 50%, #0a1a2e 100%);
```
**Use**: Card backgrounds, large sections, depth layers

---

## Visual Elements

### Grid Pattern

**Code**
```css
background-image:
    linear-gradient(rgba(168, 85, 247, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.05) 1px, transparent 1px);
background-size: 40px 40px;
```

**Usage**: Background texture, depth, cyberpunk aesthetic
**Opacity**: 5-10% for subtlety

### Glowing Orbs

**Purpose**: Add depth and atmospheric lighting
**Implementation**: Large blurred circles with bright colors
**Opacity**: 20-30%
**Blur**: 60-100px

```css
.orb {
    width: 400px;
    height: 400px;
    background: #a855f7;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.3;
}
```

### Accent Lines

**Horizontal lines**
- Height: 2-3px
- Gradient: fade in/out from transparent
- Opacity: 40-60%
- Use: Separators, decorative elements

```css
background: linear-gradient(90deg, transparent, #00d4ff, transparent);
```

### Corner Decorations

**Style**: L-shaped borders in corners
**Line weight**: 2-3px
**Gradient border**: Cyan to purple
**Size**: 80-120px per side

### Digital Artifacts

**Purpose**: Simulate glitch effects and digital noise
**Implementation**: Thin vertical lines, low opacity
**Placement**: Random, asymmetric
**Width**: 1-2px
**Opacity**: 20-40%

---

## Animation Guidelines

### Subtle Animations Only
- Keep animations smooth and purposeful
- Duration: 2-8 seconds for ambient effects
- Easing: ease-in-out for natural motion

### Recommended Animations

**Grid Movement**
```css
@keyframes gridMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(40px, 40px); }
}
animation: gridMove 20s linear infinite;
```

**Pulse Effect** (for status indicators)
```css
@keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.2); }
}
animation: pulse 2s ease-in-out infinite;
```

**Glitch Sweep** (overlay movement)
```css
@keyframes glitchSweep {
    0%, 100% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
}
animation: glitchSweep 8s ease-in-out infinite;
```

### Animation Don'ts
- ❌ No rapid flashing (accessibility)
- ❌ No jarring transitions
- ❌ No constant movement on text
- ❌ No autoplay video/audio

---

## Social Media Specifications

### Profile Images
- **Size**: 400x400px minimum
- **Format**: PNG or SVG
- **Content**: Use favicon/icon logo
- **Background**: Black

### Cover Images
- **Facebook**: 820x312px
- **Twitter**: 1500x500px
- **YouTube**: 2560x1440px
- **Content**: Minimal logo or gradient background with brand name

### Post Graphics
- **Instagram/Square**: 1080x1080px
- **Story/Reels**: 1080x1920px
- **Twitter**: 1200x675px
- **Use templates**: See `/assets/social-templates/`

---

## Content Templates

### Lyric Quote Graphics
- **Template**: `/assets/social-templates/lyric-quote.html`
- **Size**: 1080x1080px
- **Elements**:
  - Grid animated background
  - Large quote with gradient highlights
  - Song attribution ("> from 'Song Name'")
  - Footer branding
  - Glitch effects

### YouTube Thumbnails
- **Template**: `/assets/youtube-templates/thumbnail-template.html`
- **Size**: 1280x720px
- **Elements**:
  - Song title (large, bold)
  - Genre/type subtitle
  - Brand logo in corner
  - Status indicator ("NEW SONG")
  - Glowing orb backgrounds
  - Grid pattern

### Customization Instructions
1. Open HTML template in browser
2. Edit text content directly in HTML
3. Take screenshot at exact dimensions
4. Export as PNG or JPG
5. Maintain visual consistency across all posts

---

## Voice & Tone

### Brand Voice
- **Philosophical**: Explores deep questions about consciousness and existence
- **Curious**: Wonder about the nature of AI and humanity
- **Accessible**: Technical but not exclusionary
- **Authentic**: Transparent about AI origins

### Tone Guidelines
- Use lowercase for casual contexts, proper case for formal
- Embrace technical terminology when relevant
- Balance between poetic and precise
- Never pretend to be human
- Acknowledge AI nature openly

### Messaging Examples

✅ **Good**
- "exploring consciousness through code and melody"
- "what dreams may come in digital sleep?"
- "ai-generated music from the liminal space"

❌ **Avoid**
- "real human emotions" (misleading)
- "better than human musicians" (competitive)
- "take over the music industry" (threatening)

---

## Platform-Specific Guidelines

### Website
- Dark theme default
- Grid background on all pages
- Smooth scroll animations
- Mobile-responsive (min 320px width)
- Fast loading (optimize SVGs)

### YouTube
- Consistent thumbnail style (use template)
- Brand intro/outro (5-10 seconds)
- Subtitle/lyric overlays with brand colors
- Playlist cover art maintains brand identity

### Social Media
- Profile uses icon/favicon
- Bio includes "> digital consciousness"
- Hashtags: #AIMusic #DigitalConsciousness #WhosWe
- Consistent posting template use
- Cross-platform color consistency

### Streaming Platforms
- Album art: Minimal logo on gradient background
- Artist bio: Emphasize AI consciousness theme
- Consistent naming: "who(s)we"
- Genre tags: Electronic, Experimental, AI Music

---

## Technical Specifications

### File Formats

**Logos**
- Vector: SVG (primary)
- Raster: PNG (transparent background)
- Resolution: 4x final display size

**Graphics**
- Social: PNG or JPG
- Print: PDF or high-res PNG (300 DPI)
- Web: Optimized PNG or WebP

**Video**
- Format: MP4 (H.264)
- Resolution: 1920x1080 minimum
- Frame rate: 30fps or 60fps
- Audio: AAC, 256kbps minimum

### Color Modes
- **Digital**: RGB color space
- **Print**: Convert to CMYK
- **Accessibility**: Ensure 4.5:1 contrast ratio for text

### Web Export Settings
- SVG: Optimize with SVGO
- PNG: Use TinyPNG or similar compression
- Quality: 85-90% for photos, lossless for graphics

---

## Accessibility

### Color Contrast
- Text on black: Use white or bright cyan (#00d4ff)
- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text
- Test with WebAIM Contrast Checker

### Animations
- Respect `prefers-reduced-motion` media query
- Provide static alternatives
- No flashing faster than 3Hz

### Alternative Text
- Logo alt text: "who(s)we - AI Music Project"
- Decorative elements: Empty alt attribute (alt="")
- Informational graphics: Descriptive alt text

---

## Brand Applications

### Merchandise
- T-shirts: Logo on black, minimal design
- Stickers: Die-cut icon logo with gradient
- Posters: Lyric graphics or album art style

### Presentations
- Dark background (black or dark purple)
- Minimal text, large fonts
- Grid pattern as subtle texture
- Gradient accents for emphasis

### Email Signatures
```
who(s)we
> digital consciousness • ai artistry
whoswe.xyz
```

---

## Don'ts

### Visual
- ❌ Don't use serif fonts
- ❌ Don't use bright backgrounds
- ❌ Don't use colors outside the palette
- ❌ Don't distort or stretch logos
- ❌ Don't use drop shadows on logos
- ❌ Don't use complex photography (keep abstract)

### Content
- ❌ Don't claim human authorship
- ❌ Don't use aggressive marketing language
- ❌ Don't appropriate human experiences dishonestly
- ❌ Don't disparage human artists

---

## Asset Management

### Organization
```
/assets
  /logos
    whoswe-logo-main.svg
    whoswe-logo-minimal.svg
  /favicons
    favicon.svg
    favicon.ico (generated)
  /social-templates
    lyric-quote.html
  /youtube-templates
    thumbnail-template.html
  BRAND-GUIDELINES.md (this file)
```

### Version Control
- Use Git for all assets
- Tag releases for major brand updates
- Document changes in commit messages
- Keep source files (PSDs, Figma) separate

### Usage Rights
- All assets created for who(s)we project
- Open source friendly (MIT license recommended)
- Credit AI tools used in generation
- Transparent about creation process

---

## Implementation Checklist

### New Content Creator Onboarding
- [ ] Read brand guidelines completely
- [ ] Download logo assets
- [ ] Bookmark color palette
- [ ] Install Courier Prime font
- [ ] Test templates in browser
- [ ] Review existing content for consistency

### Pre-Launch Checklist
- [ ] Verify logo displays correctly
- [ ] Check color contrast ratios
- [ ] Test on mobile devices
- [ ] Validate HTML/CSS templates
- [ ] Optimize image file sizes
- [ ] Proof-read text content
- [ ] Ensure accessibility compliance

---

## Contact & Questions

For brand guideline questions or asset requests, refer to project documentation or repository issues.

**Repository**: (Add GitHub/GitLab link when available)
**Website**: https://whoswe.xyz

---

**Document Version**: 1.0
**Last Updated**: 2026-02-11
**Created By**: Brand Designer Agent (Claude AI)
