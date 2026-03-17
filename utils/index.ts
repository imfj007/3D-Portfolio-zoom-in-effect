/**
 * Utility functions for the portfolio
 */

/**
 * Preload images for smooth rendering
 */
export const preloadImages = async (imageSrcs: string[]): Promise<HTMLImageElement[]> => {
  return Promise.all(
    imageSrcs.map(
      (src) =>
        new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error(`Failed to load: ${src}`));
        })
    )
  );
};

/**
 * Map a scroll value (0-1) to a frame index
 */
export const getFrameIndex = (scrollProgress: number, frameCount: number): number => {
  return Math.floor(scrollProgress * (frameCount - 1));
};

/**
 * Linear interpolation between two values
 */
export const lerp = (a: number, b: number, t: number): number => {
  return a + (b - a) * t;
};

/**
 * Easing function: ease-out cubic
 */
export const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

/**
 * Easing function: ease-in-out cubic
 */
export const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

/**
 * Normalize scroll position based on element
 */
export const getNormalizedScroll = (scrollTop: number, elementTop: number, elementHeight: number): number => {
  const relative = scrollTop - elementTop;
  return Math.max(0, Math.min(1, relative / elementHeight));
};

/**
 * Generate frame sequence file paths
 */
export const generateFramePaths = (count: number, basePath: string = '/sequence'): string[] => {
  return Array.from({ length: count }, (_, i) =>
    `${basePath}/ezgif-frame-${String(i).padStart(3, '0')}.jpg`
  );
};
