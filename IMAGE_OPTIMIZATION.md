# 📸 Image Optimization Guide

This guide helps you optimize the frame images for better performance and visual quality.

## Current Setup

- **Format**: JPG
- **Count**: 144 frames
- **Location**: `public/sequence/`
- **Current Size**: ~14.4 MB total
- **Estimated Load Time**: ~3-5 seconds on standard connection

## Optimization Options

### Option 1: Convert to WebP (Recommended) ⭐

**Benefits:**
- 40% smaller file size
- Better compression
- Faster loading

**How to do it:**

1. **Using Online Tool**
   - Go to [cloudconvert.com](https://cloudconvert.com)
   - Select "JPG to WebP"
   - Batch upload all frames
   - Download optimized versions

2. **Using Command Line (Windows PowerShell)**
   ```powershell
   # Install ImageMagick first
   # Then use:
   foreach ($file in Get-ChildItem "public\sequence\*.jpg") {
       magick convert $file.FullName -quality 85 "$($file.DirectoryName)\$($file.BaseName).webp"
   }
   ```

3. **Using VS Code Extension**
   - Install "Image Optimizer" extension
   - Right-click folder → Optimize images
   - Select WebP format

### Option 2: Compress JPG (Quick Fix)

**Reduce file size by 20-30% without format change:**

1. Go to [tinypng.com](https://tinypng.com) or [compressor.io](https://compressor.io)
2. Batch upload JPG files
3. Download compressed versions
4. Replace originals in `public/sequence/`

### Option 3: Use Next.js Image Optimization

Update to use Next.js Image component with automatic optimization:

```typescript
// In your component
import Image from 'next/image';

<Image
  src={`/sequence/ezgif-frame-${frameNum}.jpg`}
  alt="Frame"
  width={1920}
  height={1080}
  priority
  quality={85}
/>
```

## Performance Targets

After optimization, you should achieve:

| Metric | Target | Current |
|--------|--------|---------|
| Total Bundle | < 8 MB | ~14.4 MB |
| Single Frame | < 60 KB | ~100 KB |
| Load Time | < 2 seconds | ~3-5 seconds |
| First Paint | < 1 second | ~1.5 seconds |

## Quick Optimization Steps

1. **Download all frames locally**
2. **Compress using tinypng.com**
3. **Replace in `public/sequence/`**
4. **Test locally**: `npm run dev`
5. **Measure improvement**: Check Network tab in DevTools
6. **Deploy**: `git push`

## Advanced Options

### H.264 Video Stream (Most Optimized)

Instead of 144 JPGs, use a single H.264 MP4 video:

```typescript
// Instead of Canvas with images, use video
<video
  src="/animation.mp4"
  muted
  playsInline
  ref={videoRef}
/>
```

**Advantages:**
- 80% smaller (< 3 MB)
- Better compression
- Smoother playback

**Disadvantage:**
- Can't scrub per-frame with scroll (would need HLS)
- More complex implementation

### AVIF Format (Cutting Edge)

Newest format with best compression:

```bash
magick convert frame.jpg -format avif -quality 85 frame.avif
```

**Savings**: 50% smaller than WebP

## Testing Image Quality

After optimization, verify:

1. Visual quality is acceptable (no visible compression artifacts)
2. Load time improved
3. No 404 errors in browser console
4. Smooth scrolling (60fps)

### Measure in DevTools

```javascript
// Paste in browser console while scrolling
let maxLoadTime = 0;
performance.getEntriesByType('resource').forEach(entry => {
  if (entry.name.includes('sequence')) {
    const loadTime = entry.responseEnd - entry.responseStart;
    maxLoadTime = Math.max(maxLoadTime, loadTime);
    console.log(`${entry.name.split('/').pop()}: ${loadTime}ms`);
  }
});
console.log(`Max load time: ${maxLoadTime}ms`);
```

## Recommended Action Plan

### 30 Minutes (Quick Fix)
1. Use tinypng.com to compress all JPGs
2. Replace files in `public/sequence/`
3. Test locally
4. Deploy

### 1-2 Hours (Professional)
1. Convert to WebP format
2. Update ScrollyCanvas to support multiple formats
3. Add fallback for older browsers
4. Test thoroughly
5. Deploy

### 3+ Hours (Ultimate)
1. Create H.264 MP4 version
2. Implement video scrubbing with scroll
3. Add AVIF support
4. Implement lazy loading
5. Add analytics tracking

## File Size Comparison

```
Original JPG (avg 100KB each × 144):  14.4 MB
Compressed JPG (avg 70KB each):       10.1 MB (30% reduction)
WebP (avg 60KB each):                  8.6 MB (40% reduction)
MP4 H.264 Video:                       2.5 MB (82% reduction)
AVIF Format (avg 50KB each):            7.2 MB (50% reduction)
```

## SEO Impact

Image optimization improves:
- ✅ Core Web Vitals (LCP, CLS, FID)
- ✅ Page load speed
- ✅ Google Lighthouse score
- ✅ Search engine ranking

## After Optimization

Update this line in `ScrollyCanvas.tsx` if using different format:

```typescript
// Current (JPG)
img.src = `/sequence/ezgif-frame-${frameNum}.jpg`;

// For WebP with JPG fallback
img.src = `/sequence/ezgif-frame-${frameNum}.webp`;

// For both formats
img.srcset = `
  /sequence/ezgif-frame-${frameNum}.webp 1x,
  /sequence/ezgif-frame-${frameNum}.jpg 1x
`;
```

## Tools Recommended

- **TinyPNG**: Best for quick JPG compression
- **ImageMagick**: Best for batch processing
- **CloudConvert**: Best for format conversion
- **FFmpeg**: Best for video conversion

## Questions?

Refer to [README.md](README.md) or [SETUP_GUIDE.md](SETUP_GUIDE.md) for more help.

---

**Next Step**: Choose an optimization option above and apply it. After optimization, run `npm run build` to verify everything still works.
