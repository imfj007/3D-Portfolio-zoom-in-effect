#!/bin/bash
# Script to organize image frames into public/sequence folder

# Create the sequence folder if it doesn't exist
mkdir -p public/sequence

# Copy all image files from the current directory to public/sequence
# Adjust the source path as needed
cp ezgif-frame-*.jpg public/sequence/ 2>/dev/null || echo "No JPG files found"

# Verify
echo "✓ Image frames organized in public/sequence/"
echo "Found: $(ls public/sequence/ | wc -l) frames"
