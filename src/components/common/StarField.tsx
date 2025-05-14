import React, { useEffect, useRef, useState } from 'react';
import * as styles from './StarField.module.css';
import wrenchbolt from '../../assets/images/wrenchbolt.svg';

const MAX_STARS = 500;

interface Star {
  x: number;
  y: number;
  z: number;
  opacity: number;
}

export const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const [warpSpeed, setWarpSpeed] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext(`2d`);
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const centerX = width / 2;
    const centerY = height / 2;

    const focalLength = width;

    // Fill background
    ctx.fillStyle = `#001020`;
    ctx.fillRect(0, 0, width, height);

    const starImage = new Image();
    starImage.src = wrenchbolt;
    starImage.onload = () => {
      imageRef.current = starImage;
      // Create and draw stars
      const stars = createStars(MAX_STARS, width, height);
      starsRef.current = stars;

      // Draw stars
      // stars.forEach((star) => {
      //   ctx.beginPath();
      //   ctx.drawImage(starImage, star.x, star.y, star.length, star.length);
      // });

      // Animate stars
      const animate = () => {
        ctx.fillStyle = `#001020`;
        ctx.fillRect(0, 0, width, height);

        starsRef.current = starsRef.current.map((star) => {
          // Move forward (closer)
          const newZ = star.z - 5;

          // Reset star if too close or gone
          if (newZ <= 0.1) {
            return {
              x: (Math.random() - 0.5) * width,
              y: (Math.random() - 0.5) * height,
              z: width,
              opacity: 0.3,
            };
          }

          // Project 3D to 2D
          const scale = focalLength / newZ;
          const screenX = centerX + star.x * scale;
          const screenY = centerY + star.y * scale;
          const size = scale * 10; // grows as it approaches

          if (imageRef.current) {
            ctx.globalAlpha = star.opacity;
            ctx.drawImage(imageRef.current, screenX, screenY, size, size);
          }

          return {
            ...star,
            opacity: star.opacity > 1 ? 1 : star.opacity + 0.001,
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
  }, []);

  const createStars = (
    count: number,
    width: number,
    height: number,
  ): Star[] => {
    return new Array(count).fill(0).map(() => ({
      x: (Math.random() - 0.5) * width, // range: -width/2 to width/2
      y: (Math.random() - 0.5) * height, // range: -height/2 to height/2
      z: Math.random() * width, // depth: closer to 0 = closer to camera
      opacity: 0.3,
    }));
  };

  return (
    <>
      <canvas className={styles.canvas} ref={canvasRef} />
      <div className={styles.overlay}>
        <h1>404</h1>
        <p>
          You appear to have reached an uncharted area. Please check your url or
          <p>
            <a href="/">return to the homepage</a>
          </p>
        </p>
        <button onClick={() => setWarpSpeed(warpSpeed + 1)}>Warp Speed</button>
      </div>
    </>
  );
};
