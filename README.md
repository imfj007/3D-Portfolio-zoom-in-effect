# Scrollytelling Portfolio - High-End Creative Developer

A premium scrollytelling portfolio built with Next.js 14, Framer Motion, and Canvas rendering. Features scroll-linked animations that scrub through an image sequence for a cinematic, smooth user experience.

## 🚀 Features

- **Scroll-Linked Canvas Animation**: 144-frame image sequence that responds to scroll position
- **Parallax Text Overlay**: Multi-section text elements with depth and smooth transitions
- **Glassmorphism Design**: Modern glass effect cards with backdrop blur
- **Dark Theme**: Premium #121212 background matching the video frame aesthetic
- **Performance Optimized**: Preloaded images, Canvas rendering, and smooth 60fps animations
- **Fully Responsive**: Works flawlessly on mobile and desktop
- **TypeScript**: Full type safety throughout the codebase

## 📋 Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd "Portfolio samples/new 3d portfolio faizan - Copy"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Organize assets**
   - Ensure your image sequence (ezgif-frame-000.jpg to ezgif-frame-143.jpg) is in the `public/sequence/` folder
   - Create the folder if it doesn't exist:
     ```bash
     mkdir -p public/sequence
     ```
   - Copy all frame images to this folder

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000`

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and resets
├── components/
│   ├── ScrollyCanvas.tsx   # Canvas renderer with scroll tracking
│   ├── Overlay.tsx         # Parallax text overlay
│   └── Projects.tsx        # Project showcase grid
├── public/
│   └── sequence/           # Image frames (ezgif-frame-*.jpg)
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Project metadata and dependencies
```

## 🎨 Customization

### Change Hero Text
Edit `components/Overlay.tsx` to customize the hero section text.

### Update Color Scheme
Modify `tailwind.config.js` to adjust colors. The main background is set in `app/globals.css`.

### Adjust Scroll Duration
In `components/ScrollyCanvas.tsx`, modify the height multiplier (currently `500vh`):
```typescript
style={{ height: '500vh' }}  // Change this value to adjust scroll distance
```

### Frame Count
If you have a different number of frames, update in `app/page.tsx`:
```typescript
<ScrollyCanvas frameCount={YOUR_FRAME_COUNT} />
```

### Update Project Data
Edit the `projects` array in `components/Projects.tsx` to showcase your work.

## 🚀 Production Build

```bash
npm run build
npm start
```

## 📊 Performance Tips

1. **Image Optimization**: Consider pre-converting JPGs to WebP for smaller file sizes
2. **Lazy Loading**: The canvas automatically handles lazy rendering
3. **Cache**: Browser caches are leveraged for repeated scrolls

## 🔧 Dependencies

- **Next.js 14**: React framework with built-in optimizations
- **Framer Motion**: Smooth animations and scroll tracking
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe development

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✨ Key Technologies

| Technology | Purpose |
|-----------|---------|
| Canvas API | High-performance image rendering |
| Framer Motion | Scroll-linked animations & parallax |
| Tailwind CSS | Responsive styling |
| TypeScript | Type safety |
| Next.js 14 | Full-stack React framework |

## 🎬 Animation Breakdown

1. **ScrollyCanvas**: Tracks scroll position (0-1) and maps it to frame index
2. **Overlay**: Text sections fade in/out at specific scroll triggers
3. **Projects**: Entrance animations with staggered timing

## 🆘 Troubleshooting

### Images not loading?
- Verify images are in `public/sequence/` folder
- Check browser console for 404 errors
- Ensure filenames match: `ezgif-frame-XXX.jpg`

### Canvas flickering?
- Check that image preloading completes (`isLoading` state)
- Ensure proper Canvas context cleanup

### Performance issues?
- Reduce frame count if necessary
- Check for unnecessary re-renders
- Profile in DevTools Performance tab

## 📄 License

This portfolio template is ready for customization and deployment.

## 🎯 Next Steps

1. Customize color scheme and typography
2. Add your actual project case studies
3. Update social links and contact information
4. Optimize images for production
5. Deploy to Vercel for free hosting

---

**Built with ❤️ for creative developers**
