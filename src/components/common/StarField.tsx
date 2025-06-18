import React, { useEffect, useRef, CSSProperties } from 'react';
import * as styles from './StarField.module.css';
import wrenchbolt from '../../assets/images/wrenchbolt.svg';

const MAX_STARS = 500;

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
}> = ({ children, warpSpeed = false, position = `absolute` }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext(`2d`);
    if (!ctx) return;

    const starImage = new Image();
    starImage.src = wrenchbolt;
    starImage.onload = () => {
      imageRef.current = starImage;

      // Initialize stars once
      const stars = createStars(MAX_STARS);
      starsRef.current = stars;

      const animate = () => {
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

          if (imageRef.current) {
            ctx.globalAlpha = star.opacity;
            ctx.drawImage(imageRef.current, screenX, screenY, size, size);
          }

          return {
            ...star,
            opacity: star.opacity > 1 || warpSpeed ? 1 : star.opacity + 0.005,
            z: newZ,
          };
        });

        animationRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [warpSpeed]);

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
    <>
      <canvas
        className={styles.canvas}
        ref={canvasRef}
        style={{ position, top: 0, left: 0, width: `100%`, height: `100%` }}
      />
      {children}
    </>
  );
};
