import React, { useEffect, useRef, useState } from 'react';
import * as styles from './WarpField.module.css';
import { Link } from 'gatsby';
interface Star {
  x: number;
  y: number;
  z: number;
  o: string;
}

export const WarpField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [warp, setWarp] = useState<number>(0);
  const [stars, setStars] = useState<Star[]>([]);
  const numStars = 1900;
  const starImageRef = useRef<HTMLImageElement | null>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  // Initialize stars
  const initializeStars = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const newStars: Star[] = [];
    for (let i = 0; i < numStars; i++) {
      const star = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
        o: '0.' + Math.floor(Math.random() * 99) + 1,
      };
      newStars.push(star);
    }
    setStars(newStars);
  };

  // Move stars
  const moveStars = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    setStars((prevStars) =>
      prevStars.map((star) => {
        let z = star.z - 1;
        if (z <= 0) {
          z = canvas.width;
        }
        return { ...star, z };
      }),
    );
  };

  // Draw stars
  const drawStars = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const focalLength = canvas.width * 2;

    // Clear or fill based on warp mode
    if (warp === 0) {
      ctx.fillStyle = 'rgba(0,10,20,1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Draw each star
    stars.forEach((star) => {
      const pixelX = (star.x - centerX) * (focalLength / star.z) + centerX;
      const pixelY = (star.y - centerY) * (focalLength / star.z) + centerY;
      const pixelRadius = 1 * (focalLength / star.z);

      if (starImageRef.current && starImageRef.current.complete) {
        // Use star image if loaded
        const pixelWidth = pixelRadius;
        const pixelHeight =
          starImageRef.current.naturalHeight *
          (pixelRadius / starImageRef.current.naturalWidth);
        ctx.drawImage(
          starImageRef.current,
          pixelX,
          pixelY,
          pixelWidth,
          pixelHeight,
        );
      } else {
        // Use rectangle as fallback
        ctx.fillStyle = `rgba(209, 255, 255, ${star.o})`;
        ctx.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
      }
    });
  };

  // Animation loop
  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      moveStars();
      drawStars();
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  // Handle resize
  const handleResize = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars();
  };

  // Load star image
  useEffect(() => {
    const starImage = new Image();
    starImage.onload = () => {
      starImageRef.current = starImage;
    };
    starImage.src =
      'https://images.squarespace-cdn.com/content/58ea893c03596efb322d71b9/b51b5953-98e2-4d37-be61-75a2a56e1152/wrenchonly100.png?content-type=image%2Fpng';

    return () => {
      starImageRef.current = null;
    };
  }, []);

  // Initialize and start animation
  useEffect(() => {
    if (!canvasRef.current) return;

    // Set initial canvas size
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize stars
    initializeStars();

    // Start animation loop
    requestRef.current = requestAnimationFrame(animate);

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle warp mode
  const toggleWarp = () => {
    setWarp((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.space}></canvas>
      <div className={styles.warp} onClick={toggleWarp}>
        I think you're lost, friend.
        <br />
        Looks like you’ve slipped through a dimensional tear in the code.
        <br />
        This page doesn’t exist in this galaxy.
        <br />
        Head on back to <Link to="/">Mission Control</Link> to continue your
        journey.
      </div>
    </div>
  );
};
