#!/bin/bash
# Convert favicon.svg to favicon.ico for legacy browser support
#
# Requirements: ImageMagick (install with: brew install imagemagick)
#
# Usage: ./convert-favicon.sh

if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick is not installed."
    echo "Install with: brew install imagemagick (macOS) or apt-get install imagemagick (Linux)"
    exit 1
fi

echo "Converting favicon.svg to favicon.ico..."

# Generate ICO with multiple sizes (16x16, 32x32, 48x48, 64x64)
convert favicon.svg \
    -define icon:auto-resize=16,32,48,64 \
    favicon.ico

if [ $? -eq 0 ]; then
    echo "✓ Successfully created favicon.ico"
    echo "  File location: $(pwd)/favicon.ico"
    echo ""
    echo "Add to your HTML:"
    echo '  <link rel="icon" type="image/svg+xml" href="assets/favicons/favicon.svg">'
    echo '  <link rel="alternate icon" href="assets/favicons/favicon.ico">'
else
    echo "✗ Conversion failed"
    exit 1
fi
