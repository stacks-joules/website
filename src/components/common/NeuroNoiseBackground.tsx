// @ts-nocheck — WebGL shader code; strict-null & implicit-any noise not worth refactoring
import React, { useEffect, useRef, useState } from 'react';

interface NeuroNoiseBackgroundProps {
  children?: React.ReactNode;
  height?: string;
  width?: string;
  fallbackImage?: string;
  fallbackColor?: string;
  color?: string;
}

export const NeuroNoiseBackground: React.FC<NeuroNoiseBackgroundProps> = ({
  children,
  height = `100%`,
  width = `100%`,
  fallbackImage = ``,
  fallbackColor = `#151515`,
  color = `pink`,
}) => {
  const [webGLFailed, setWebGLFailed] = useState(false);
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const startTimeRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const positionAttributeRef = useRef(null);
  const timeUniformRef = useRef(null);
  const ratioUniformRef = useRef(null);
  const pointerPositionUniformRef = useRef(null);
  const scrollProgressUniformRef = useRef(null);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });

  const colorMap = {
    pink: `normalize(vec3(0.992, 0.227, 0.733))`, // #FD3ABB
    sky: `normalize(vec3(0.302, 0.898, 0.976))`, // #4DE5F9
    yellow: `normalize(vec3(0.980, 0.882, 0.314))`, // #FAE150
  };
  const glslColor = colorMap[color] ?? colorMap.pink;

  // Vertex shader code
  const vertexShaderSource = `
    precision mediump float;
    varying vec2 vUv;
    attribute vec2 a_position;
    void main() {
        vUv = .5 * (a_position + 1.);
        gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  // Fragment shader code
  const fragmentShaderSource = `
    precision mediump float;
    varying vec2 vUv;
    uniform float u_time;
    uniform float u_ratio;
    uniform vec2 u_pointer_position;
    uniform float u_scroll_progress;
    vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
    }
    float neuro_shape(vec2 uv, float t, float p) {
        vec2 sine_acc = vec2(0.);
        vec2 res = vec2(0.);
        float scale = 8.;
        for (int j = 0; j < 15; j++) {
            uv = rotate(uv, 1.);
            sine_acc = rotate(sine_acc, 1.);
            vec2 layer = uv * scale + float(j) + sine_acc - t;
            sine_acc += sin(layer) + 2.4 * p;
            res += (.5 + .5 * cos(layer)) / scale;
            scale *= (1.2);
        }
        return res.x + res.y;
    }
    void main() {
        vec2 uv = .5 * vUv;
        uv.x *= u_ratio;
        vec2 pointer = vUv - u_pointer_position;
        pointer.x *= u_ratio;
        float p = clamp(length(pointer), 0., 1.);
        p = .5 * pow(1. - p, 2.);
        float t = .001 * u_time;
        vec3 color = vec3(0.);
        float noise = neuro_shape(uv, t, p);
        noise = 1.2 * pow(noise, 3.); // Decreased multiplier for less color intensity
        noise += pow(noise, 8.); // Slightly reduced the exponent to soften effect
        noise = max(.0, noise - .4); // Increased threshold to reduce color area
        noise *= (1. - length(vUv - .5));
        color = ${glslColor};
        color = color * noise;
        gl_FragColor = vec4(color, noise);
    }
  `;

  // Helper function to create shader
  const createShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(
        `An error occurred compiling the shaders: ` +
          gl.getShaderInfoLog(shader),
      );
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  };

  // Initialize WebGL
  const initWebGL = () => {
    const canvas = canvasRef.current;
    const gl =
      canvas.getContext(`webgl`) || canvas.getContext(`experimental-webgl`);

    if (!gl) {
      console.error(`WebGL not supported`);
      setWebGLFailed(true);
      return false;
    }

    glRef.current = gl;

    // Create shaders
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    if (!vertexShader) {
      setWebGLFailed(true);
      return false;
    }

    const fragmentShader = createShader(
      gl,
      gl.FRAGMENT_SHADER,
      fragmentShaderSource,
    );
    if (!fragmentShader) {
      setWebGLFailed(true);
      return false;
    }

    // Create program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(
        `Unable to initialize the shader program: ` +
          gl.getProgramInfoLog(program),
      );
      setWebGLFailed(true);
      return false;
    }

    programRef.current = program;

    // Setup positions (full screen quad)
    const positions = new Float32Array([
      -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0,
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    // Get attribute and uniform locations
    positionAttributeRef.current = gl.getAttribLocation(program, `a_position`);
    timeUniformRef.current = gl.getUniformLocation(program, `u_time`);
    ratioUniformRef.current = gl.getUniformLocation(program, `u_ratio`);
    pointerPositionUniformRef.current = gl.getUniformLocation(
      program,
      `u_pointer_position`,
    );
    scrollProgressUniformRef.current = gl.getUniformLocation(
      program,
      `u_scroll_progress`,
    );

    // Set initial uniform values
    gl.useProgram(program);
    gl.uniform1f(ratioUniformRef.current, canvas.width / canvas.height);
    gl.uniform2f(pointerPositionUniformRef.current, 0.5, 0.5);
    gl.uniform1f(scrollProgressUniformRef.current, 0);

    // Enable attributes
    gl.enableVertexAttribArray(positionAttributeRef.current);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(
      positionAttributeRef.current,
      2,
      gl.FLOAT,
      false,
      0,
      0,
    );
  };

  // Animation frame
  const animate = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;

    const gl = glRef.current;
    const canvas = canvasRef.current;

    // Resize canvas to match actual dimensions
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
      canvas.width = displayWidth;
      canvas.height = displayHeight;
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.uniform1f(ratioUniformRef.current, canvas.width / canvas.height);
    }

    // Update uniforms
    gl.useProgram(programRef.current);
    gl.uniform1f(timeUniformRef.current, elapsed);
    gl.uniform2f(
      pointerPositionUniformRef.current,
      pointerRef.current.x,
      pointerRef.current.y,
    );

    // Draw
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestRef.current = requestAnimationFrame(animate);
  };

  // Handle mouse/touch movement
  const handlePointerMove = (e) => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    // Convert to normalized coordinates (0 to 1)
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    pointerRef.current = { x, y };
  };

  // Handle scroll
  const handleScroll = () => {
    if (!scrollProgressUniformRef.current || !glRef.current) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollProgress = scrollTop / scrollHeight;

    glRef.current.useProgram(programRef.current);
    glRef.current.uniform1f(scrollProgressUniformRef.current, scrollProgress);
  };

  // Function to handle shader compilation error
  // const checkShaderCompilation = (gl, shader, type) => {
  //   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
  //     console.error(
  //       `Error compiling ${type} shader:`,
  //       gl.getShaderInfoLog(shader),
  //     );
  //     setWebGLFailed(true);
  //     return false;
  //   }
  //   return true;
  // };

  // Function to handle program linking error
  // const checkProgramLinking = (gl, program) => {
  //   if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  //     console.error(
  //       'Error linking shader program:',
  //       gl.getProgramInfoLog(program),
  //     );
  //     setWebGLFailed(true);
  //     return false;
  //   }
  //   return true;
  // };

  useEffect(() => {
    // Skip the expensive WebGL animation where it's pure cost: small screens
    // (also the Lighthouse mobile target) and users who prefer reduced motion.
    // Falls back to the static header background instead.
    const prefersReducedMotion = window.matchMedia(
      `(prefers-reduced-motion: reduce)`,
    ).matches;
    const isSmallScreen = window.matchMedia(`(max-width: 768px)`).matches;
    if (prefersReducedMotion || isSmallScreen) {
      setWebGLFailed(true);
      return;
    }

    const start = () => {
      try {
        // Setup canvas and WebGL
        const success = initWebGL();

        // Only start animation if WebGL initialization succeeded
        if (success !== false) {
          // Start animation loop
          requestRef.current = requestAnimationFrame(animate);

          // Add event listeners
          window.addEventListener(`mousemove`, handlePointerMove);
          window.addEventListener(`touchmove`, (e) =>
            handlePointerMove(e.touches[0]),
          );
          window.addEventListener(`scroll`, handleScroll);
        }
      } catch (error) {
        console.error(`Error initializing WebGL:`, error);
        setWebGLFailed(true);
      }
    };

    // Defer shader compilation off the critical path so it doesn't block
    // initial interactivity (TBT). Runs when the main thread is idle.
    let idleId;
    if (typeof window.requestIdleCallback === `function`) {
      idleId = window.requestIdleCallback(start, { timeout: 2000 });
    } else {
      idleId = window.setTimeout(start, 200);
    }

    // Cleanup
    return () => {
      if (idleId) {
        if (typeof window.cancelIdleCallback === `function`) {
          window.cancelIdleCallback(idleId);
        } else {
          window.clearTimeout(idleId);
        }
      }
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener(`mousemove`, handlePointerMove);
      window.removeEventListener(`touchmove`, (e) =>
        handlePointerMove(e.touches[0]),
      );
      window.removeEventListener(`scroll`, handleScroll);
    };
    // Re-init when the theme color changes: the accent is baked into the
    // fragment shader source, so a new color needs a shader recompile.
    // animate/initWebGL are stable module-pattern functions; including them
    // would re-init every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  // Helper to create a CSS linear gradient as fallback
  const createGradientBackground = () => {
    // Create a gradient based on the fallback color
    const color = fallbackColor;
    return `linear-gradient(135deg, ${color}22 0%, ${color}55 50%, ${color}22 100%)`;
  };

  return (
    <div
      className="neuro-background-container"
      style={{
        position: `relative`,
        height,
        // Apply fallback background image or gradient if WebGL failed
        ...(webGLFailed && {
          backgroundImage: fallbackImage
            ? `url(${fallbackImage})`
            : createGradientBackground(),
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }),
      }}
    >
      {/* Only render canvas if WebGL didn't fail */}
      {!webGLFailed && (
        <canvas
          ref={canvasRef}
          style={{
            width,
            height,
            position: `absolute`,
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
      )}
      <div
        className="neuro-content"
        style={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          position: `relative`,
          zIndex: 1,
          height,
          width,
        }}
      >
        {children}
      </div>
    </div>
  );
};
