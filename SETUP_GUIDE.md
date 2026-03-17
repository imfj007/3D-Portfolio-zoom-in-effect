# 📚 Scrollytelling Portfolio - Setup Guide

## Quick Start (5 Minutes)

### Step 1: Organize Image Frames

Your frame images need to be in `public/sequence/` folder for the app to find them.

**Option A: Using PowerShell (Windows)**
```powershell
# Run from the project root directory
.\organize-images.ps1
```

**Option B: Using Bash (macOS/Linux)**
```bash
# Run from the project root directory
chmod +x organize-images.sh
./organize-images.sh
```

**Option C: Manual (All Platforms)**
1. Create folder: `public/sequence/`
2. Copy all `ezgif-frame-*.jpg` files into this folder

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Navigate to `http://localhost:3000`

## 🎬 How It Works

### The Scrollytelling Mechanic

1. **ScrollyCanvas.tsx**
   - Creates a container with `height: 500vh` (5x screen height)
   - Inside is a `sticky` element that stays in view
   - A Canvas element renders the image sequence
   - Framer Motion's `useScroll` hook tracks your scroll position (0 to 1)
   - This position is mapped to the frame index (0 to 143)
   - As you scroll, the canvas rerenders with the next frame

2. **Overlay.tsx**
   - Text layers sit on top of the canvas with `z-index: 10`
   - Each section (hero, message, value) appears at different scroll points
   - Uses parallax effects by moving slower/faster than scroll speed
   - Opacity fades in and out based on scroll position

3. **Projects.tsx**
   - Begins after the 500vh scroll section ends
   - Glassmorphism cards with hover effects
   - Staggered entrance animations

## 🔧 Configuration

### Change Scroll Duration

In `components/ScrollyCanvas.tsx`, line ~44:
```typescript
// Current: 5 screens of scrolling
style={{ height: '500vh' }}

// For faster scroll through frames:
style={{ height: '300vh' }}  // 3 screens (quicker)

// For slower scroll through frames:
style={{ height: '800vh' }}  // 8 screens (slower, more cinematic)
```

### Update Hero Text

In `components/Overlay.tsx`, modify the text:
```typescript
<motion.h1 className="text-6xl md:text-7xl font-bold">
  Your Name Here  {/* Change this */}
</motion.h1>
```

### Change Theme Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  dark: {
    900: '#121212',  // Main background (change this)
    800: '#1a1a1a',
  },
}
```

Edit `app/globals.css`:
```css
body {
  background-color: #121212;  /* Change this */
}
```

### Update Projects

Edit `components/Projects.tsx`, update the `projects` array:
```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Your project description',
    tags: ['React', 'Next.js'],
    category: 'Web App',
    image: 'https://your-image-url.com/image.jpg',
    link: 'https://your-project.com',
  },
  // Add more projects...
];
```

## 📊 File Structure Explained

```
project-root/
├── app/
│   ├── layout.tsx              // HTML structure, metadata
│   ├── page.tsx                // Combines all components
│   └── globals.css             // Global resets and styles
│
├── components/
│   ├── ScrollyCanvas.tsx       // Canvas rendering & scroll tracking
│   │   Key logic:
│   │   - Preloads 144 images
│   │   - Tracks scroll (0 to 1)
│   │   - Maps scroll to frame index
│   │   - Redraws canvas on each frame
│   │
│   ├── Overlay.tsx             // Parallax text sections
│   │   Sections:
│   │   - Hero (0% scroll)
│   │   - Message (30% scroll)
│   │   - Value (60% scroll)
│   │
│   └── Projects.tsx            // Glassmorphism grid
│       Features:
│       - 4 sample projects
│       - Hover animations
│       - Responsive grid
│
├── public/
│   └── sequence/
│       ├── ezgif-frame-000.jpg
│       ├── ezgif-frame-001.jpg
│       └── ... up to 143
│
└── Config files:
    ├── tailwind.config.js      // Styling configuration
    ├── tsconfig.json           // TypeScript settings
    ├── next.config.js          // Next.js settings
    └── postcss.config.js       // CSS processing
```

## ⚡ Performance Optimization

### Image Preloading
The app preloads all 144 images on mount. This prevents flickering during scroll. Check the loading spinner to see progress.

### Canvas Rendering
Canvas provides better performance than DOM elements for this use case because:
- Single element instead of 144 elements
- Hardware-accelerated rendering
- Faster frame switching

### Lazy Loading Images
Images are loaded on demand, not immediately. The `useEffect` in `ScrollyCanvas.tsx` handles this:
```typescript
const preloadImages = async () => {
  // Images load one by one
  // onload event fires when each completes
};
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel automatically detects Next.js
5. Deploy with one click!

The `vercel.json` file is already configured.

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the .next folder
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🆘 Troubleshooting

### Issue: Black canvas with loading spinner stuck
**Solution:**
- Check browser console for 404 errors
- Verify images are in `public/sequence/`
- Ensure filenames are exactly: `ezgif-frame-000.jpg` through `ezgif-frame-143.jpg`

### Issue: Scroll animation is choppy
**Solution:**
- This is normal on first load while images preload
- Check DevTools Performance tab for bottlenecks
- Try reducing frame count (change `frameCount` prop)

### Issue: Text overlay not appearing
**Solution:**
- Check that you're scrolling enough (scroll animation spans 500vh)
- Verify overlay z-index is working (should be 10)
- Clear browser cache

### Issue: Images not loading even after organizing
**Solution:**
1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Check terminal for build errors
3. Verify file naming convention exactly

## 📱 Mobile Optimization

The site is fully responsive. Mobile considerations:
- Canvas scales to fill screen
- Text sizing adjusts with Tailwind's `md:` breakpoints
- Touch-friendly scroll interactions
- Performance optimized for mobile devices

## 🎓 Learning Resources

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 📝 Next Steps

1. ✅ Install and run locally
2. ✅ Verify images are loading
3. ✅ Customize colors and text
4. ✅ Update project showcase
5. ✅ Add your social links
6. ✅ Deploy to Vercel

---

**Need help?** Check the console for errors: `Cmd+Option+J` (Mac) or `F12` (Windows)
