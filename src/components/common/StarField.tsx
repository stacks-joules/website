import React, { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import * as styles from './StarField.module.css';
const wrenchbolt = `/images/wrenchbolt.svg`;

// Device-aware particle count. 500 draws/frame is fine on desktop but tanks
// mobile TBT under CPU throttling, so scale down on phones / low-core devices.
function getStarCount(): number {
  if (typeof window === `undefined`) return 300;
  const w = window.innerWidth;
  const cores = navigator.hardwareConcurrency || 4;
  if (w < 768 || cores <= 4) return 120; // phones / low-core
  if (w < 1200) return 250; // tablets / small laptops
  return 500; // desktop
}

interface Star {
  x: number;
  y: number;
  z: number;
  opacity: number;
}

export const Starfield: React.FC<{
  children?: React.ReactNode;
  warpSpeed?: boolean;
  position?: CSSProperties['position'];
  /** Optional tint color for the wrenchbolt icon (e.g. '#6cf', 'gold', 'rgb(255,0,0)') */
  iconColor?: string;
}> = ({ children, warpSpeed = false, position = `absolute`, iconColor }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const tintedCanvasRef = useRef<HTMLCanvasElement | null>(null); // NEW
  const animationRef = useRef<number | null>(null);

  // Helper: (re)build the tinted canvas using the current image + color
  const rebuildTintedCanvas = (color?: string) => {
    const img = imageRef.current;
    if (!img) return;

    // If no color provided, clear tinted canvas so we fall back to the original
    if (!color) {
      tintedCanvasRef.current = null;
      return;
    }

    const w = img.naturalWidth || img.width;
    const h = img.naturalHeight || img.height;
    if (w === 0 || h === 0) return;

    const off = document.createElement(`canvas`);
    off.width = w;
    off.height = h;
    const offCtx = off.getContext(`2d`);
    if (!offCtx) return;

    // 1) Draw the original image
    offCtx.clearRect(0, 0, w, h);
    offCtx.drawImage(img, 0, 0, w, h);

    // 2) Use source-in to keep the image's alpha but replace its color
    offCtx.globalCompositeOperation = `source-in`;
    offCtx.fillStyle = color;
    offCtx.fillRect(0, 0, w, h);

    // 3) Reset composite op just in case
    offCtx.globalCompositeOperation = `source-over`;

    tintedCanvasRef.current = off;
  };

  // Load the base image once
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext(`2d`);
    if (!ctx) return;

    // Users who asked the OS to reduce motion get a single static frame.
    const reduceMotion =
      typeof window !== `undefined` &&
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;

    // Cap to 30fps on phones (0 = uncapped on tablet/desktop). Halves
    // per-second draw work with no visible quality loss on a slow starfield.
    const frameMs =
      typeof window !== `undefined` && window.innerWidth < 768 ? 1000 / 30 : 0;
    let lastTs = 0;

    let io: IntersectionObserver | null = null;

    const starImage = new Image();
    starImage.src = wrenchbolt;
    starImage.onload = () => {
      imageRef.current = starImage;

      // Build initial tinted canvas (if color provided)
      rebuildTintedCanvas(iconColor);

      // Initialize stars once (device-aware count)
      starsRef.current = createStars(getStarCount());

      // One frame of work. Does NOT schedule the next frame itself, so it can
      // be called standalone (reduced-motion) or from the rAF loop.
      const drawFrame = () => {
        const displayWidth = canvas.clientWidth;
        const displayHeight = canvas.clientHeight;

        // Resize canvas buffer to match displayed size
        if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
          canvas.width = displayWidth;
          canvas.height = displayHeight;
        }

        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const focalLength = width;

        ctx.fillStyle = warpSpeed ? `rgba(0, 16, 32, 0.01)` : `#001020`;
        ctx.fillRect(0, 0, width, height);

        const sourceBitmap =
          iconColor && tintedCanvasRef.current
            ? tintedCanvasRef.current
            : imageRef.current;

        starsRef.current = starsRef.current.map((star) => {
          const speed = warpSpeed ? 5 : 5;
          const newZ = star.z - speed;

          if (newZ <= 0.1) {
            return {
              x: (Math.random() - 0.5) * width,
              y: (Math.random() - 0.5) * height,
              z: width,
              opacity: 0.1,
            };
          }

          const scale = focalLength / newZ;
          const screenX = centerX + star.x * scale;
          const screenY = centerY + star.y * scale;
          const size = scale * 10;

          if (sourceBitmap) {
            ctx.globalAlpha = star.opacity;
            ctx.drawImage(sourceBitmap, screenX, screenY, size, size);
            ctx.globalAlpha = 1; // reset
          }

          return {
            ...star,
            opacity: star.opacity > 1 || warpSpeed ? 1 : star.opacity + 0.005,
            z: newZ,
          };
        });
      };

      const loop = (ts: number) => {
        animationRef.current = requestAnimationFrame(loop);
        if (frameMs && ts - lastTs < frameMs) return; // skip to hit 30fps
        lastTs = ts;
        drawFrame();
      };

      // Reduced motion: paint once, never start the loop.
      if (reduceMotion) {
        drawFrame();
        return;
      }

      const start = () => {
        if (animationRef.current == null) {
          animationRef.current = requestAnimationFrame(loop);
        }
      };
      const stop = () => {
        if (animationRef.current != null) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      };

      // Only animate while the hero canvas is on screen; pause once scrolled
      // past. Initial observe fires synchronously, so this also starts it.
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) start();
          else stop();
        },
        { threshold: 0 },
      );
      io.observe(canvas);
    };

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
      if (io) io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [warpSpeed]); // keep same deps as before

  // Rebuild tinted canvas whenever iconColor changes (after image is loaded)
  useEffect(() => {
    if (imageRef.current) rebuildTintedCanvas(iconColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iconColor]);

  const createStars = (count: number): Star[] => {
    const canvas = canvasRef.current;
    const width = canvas?.clientWidth || window.innerWidth;
    const height = canvas?.clientHeight || window.innerHeight;

    return new Array(count).fill(0).map(() => ({
      x: (Math.random() - 0.5) * width,
      y: (Math.random() - 0.5) * height,
      z: Math.random() * width,
      opacity: 0.5,
    }));
  };

  return (
    <div style={{ position: `relative`, width: `100%`, height: `100%` }}>
      <canvas
        className={styles.canvas}
        ref={canvasRef}
        style={{ position, top: 0, left: 0, width: `100%`, height: `100%` }}
      />
      {children}
    </div>
  );
};
