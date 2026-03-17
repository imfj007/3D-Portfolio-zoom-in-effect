'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface ScrollyCanvasProps {
  frameCount?: number;
}

export default function ScrollyCanvas({
  frameCount = 144,
}: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const currentFrameRef = useRef<number>(-1);
  const animationFrameRef = useRef<number>();

  const { scrollY } = useScroll();
  const scrollProgress = useTransform(
    scrollY,
    [0, typeof window !== 'undefined' ? window.innerHeight * 5 : 5000],
    [0, 1]
  );

  // Preload all images with priority
  useEffect(() => {
    const preloadImages = async () => {
      const images: HTMLImageElement[] = [];
      let loadedCount = 0;

      const promises = Array.from({ length: frameCount }, (_, i) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          const frameNum = String(i + 1).padStart(3, '0');
          img.src = `/sequence/ezgif-frame-${frameNum}.jpg`;
          img.decoding = 'async';
          img.onload = () => {
            images[i] = img;
            loadedCount++;
            // Show first frame after 10% loaded
            if (loadedCount === Math.ceil(frameCount * 0.1) && !isLoading) {
              renderFrame(0);
            }
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to load frame ${frameNum}`);
            resolve();
          };
        });
      });

      await Promise.all(promises);
      imagesRef.current = images;
      setIsLoading(false);
    };

    preloadImages();
  }, [frameCount]);

  // Optimized frame rendering
  const renderFrame = (frameIndex: number) => {
    if (currentFrameRef.current === frameIndex) return; // Skip if same frame
    
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length === 0) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    if (!ctx) return;

    // Only set canvas size once
    if (canvas.width === 0 || canvas.height === 0) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }

    // Draw image with optimization
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    currentFrameRef.current = frameIndex;
  };

  // Smoothly animate frames with requestAnimationFrame
  useEffect(() => {
    const handleProgressChange = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const progressValue = scrollProgress.get();
        const frameIndex = Math.round(progressValue * (frameCount - 1));
        renderFrame(frameIndex);
      });
    };

    const unsubscribe = scrollProgress.onChange(() => {
      handleProgressChange();
    });

    return () => {
      unsubscribe();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollProgress, frameCount]);

  // Initial render
  useEffect(() => {
    if (imagesRef.current.length > 0 && !isLoading) {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const img = imagesRef.current[0];
      if (img && img.complete) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        renderFrame(0);
      }
    }
  }, [isLoading]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: '500vh' }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        {/* Loading state */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
            <div className="text-center">
              <div className="inline-block">
                <div className="w-12 h-12 border-2 border-gray-600 border-t-white rounded-full animate-spin"></div>
              </div>
              <p className="mt-4 text-gray-400">Loading sequence...</p>
            </div>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
}
