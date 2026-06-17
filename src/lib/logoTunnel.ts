/**
 * Footer plus-sign easter egg: fullscreen Three.js logo-sprite tunnel,
 * ported from Jon's CodePen "🌈 Tunnel PANK" (PwooKLz).
 *
 * This module is heavy (it pulls in three.js), so it must only ever be
 * loaded via dynamic import() from the trigger's click handler — never
 * statically. See easter-egg-spec.md in the photo-puller project folder.
 *
 * Tunnel sprites tint to the active color-roll accent (--theme-color),
 * read at open time. Click anywhere or press Esc to dismiss.
 */
import * as THREE from 'three';

const TEXTURE_URL = `/images/logo-tunnel-sprite.webp`;
const LOOP_SECONDS = 60; // one seamless lap of the closed curve

// Geometry params verbatim from the pen
const OPTS = {
  radius: 1.7,
  segments: 400,
  scale: 0.1,
  radiusSegments: 20,
} as const;

// Deterministic PRNG (mulberry32) so the tunnel's vertical scatter is the
// same shape on every open, instead of rolling a new — sometimes ugly — path.
const SCATTER_SEED = 0x5f3759df;
function seededRandom(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const PATH_POINTS: ReadonlyArray<readonly [number, number]> = [
  [935, 0],
  [1100, 125],
  [1187, 251],
  [1007, 341],
  [785, 401],
  [506, 369],
  [100, 510],
  [400, 138],
  [618, 203],
];

let overlay: HTMLDivElement | null = null;
let renderer: THREE.WebGLRenderer | null = null;
let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;
let curve: THREE.CatmullRomCurve3 | null = null;
let glows: THREE.Object3D | null = null;

let isOpen = false;
let rafId = 0;
let startTime = 0;
let previousFocus: HTMLElement | null = null;

function accentColor(): THREE.Color {
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(`--theme-color`)
    .trim();
  return new THREE.Color(v || `#fd3abb`);
}

/** Canvas-drawn plus sign, used if the logo texture fails to load. */
function fallbackTexture(): THREE.Texture {
  const c = document.createElement(`canvas`);
  c.width = 64;
  c.height = 64;
  const ctx = c.getContext(`2d`);
  if (ctx) {
    ctx.fillStyle = `#fff`;
    ctx.fillRect(26, 8, 12, 48);
    ctx.fillRect(8, 26, 48, 12);
  }
  return new THREE.CanvasTexture(c);
}

function buildScene(): void {
  overlay = document.createElement(`div`);
  overlay.setAttribute(`role`, `dialog`);
  overlay.setAttribute(
    `aria-label`,
    `Logo tunnel animation. Click anywhere or press Escape to close.`,
  );
  Object.assign(overlay.style, {
    position: `fixed`,
    inset: `0`,
    zIndex: `9999`,
    background: `#000`,
    cursor: `pointer`,
    display: `none`,
  });
  overlay.addEventListener(`click`, closeLogoTunnel);
  document.body.appendChild(overlay);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.domElement.style.display = `block`;
  renderer.domElement.style.width = `100%`;
  renderer.domElement.style.height = `100%`;
  overlay.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, 1, 0.0001, 1000);

  const sprites = new THREE.Object3D();
  glows = sprites;
  scene.add(sprites);

  const loader = new THREE.TextureLoader();
  const texture = loader.load(TEXTURE_URL, undefined, undefined, () => {
    const fb = fallbackTexture();
    sprites.children.forEach((s) => {
      const sprite = s as THREE.Sprite;
      sprite.material.map = fb;
      sprite.material.needsUpdate = true;
    });
  });

  const spriteMaterial = new THREE.SpriteMaterial({
    map: texture,
    color: 0xffffff, // tinted per-open in syncColor()
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const rand = seededRandom(SCATTER_SEED);
  const points = PATH_POINTS.map(([x, z]) =>
    new THREE.Vector3(x, (rand() - 0.5) * 180, z).multiplyScalar(OPTS.scale),
  );
  // `centripetal` avoids the cusps/whip-turns that plain catmullrom produces
  // at sharp, unevenly-spaced corners — much smoother to fly through.
  curve = new THREE.CatmullRomCurve3(points, true, `centripetal`);

  const frames = curve.computeFrenetFrames(OPTS.segments, true);
  for (let i = 0; i < OPTS.segments; i++) {
    const N = frames.normals[i];
    const B = frames.binormals[i];
    const p = curve.getPointAt(i / OPTS.segments);
    for (let j = 0; j < OPTS.radiusSegments; j++) {
      const angle = (j / OPTS.radiusSegments) * Math.PI * 2;
      const sin = Math.sin(angle);
      const cos = -Math.cos(angle);
      const normal = new THREE.Vector3(
        cos * N.x + sin * B.x,
        cos * N.y + sin * B.y,
        cos * N.z + sin * B.z,
      ).normalize();
      const sprite = new THREE.Sprite(spriteMaterial.clone());
      sprite.position.set(
        p.x + OPTS.radius * normal.x,
        p.y + OPTS.radius * normal.y,
        p.z + OPTS.radius * normal.z,
      );
      sprite.scale.set(0.5, 0.5, 0.5);
      sprites.add(sprite);
    }
  }
}

function syncColor(): void {
  if (!glows) return;
  const c = accentColor();
  glows.children.forEach((s) => {
    (s as THREE.Sprite).material.color.copy(c);
  });
}

function resize(): void {
  if (!renderer || !camera) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

function render(now: number): void {
  if (!isOpen || !renderer || !scene || !camera || !curve) return;
  rafId = requestAnimationFrame(render);
  const progress = ((now - startTime) / 1000 / LOOP_SECONDS) % 1;
  const p1 = curve.getPointAt(progress);
  const p2 = curve.getPointAt((progress + 0.12) % 1);
  camera.position.copy(p1);
  camera.lookAt(p2);
  renderer.render(scene, camera);
}

function onKeyDown(e: KeyboardEvent): void {
  if (e.key === `Escape`) closeLogoTunnel();
}

export function openLogoTunnel(): void {
  if (isOpen) return;
  if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
  // ClientRouter swaps <body> on navigation, leaving `overlay` pointing at a
  // detached node. Rebuild against the live document if it's gone or orphaned.
  if (overlay && !overlay.isConnected) teardown();
  if (!overlay) buildScene();
  if (!overlay) return;

  previousFocus =
    document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;

  syncColor();
  isOpen = true;
  startTime = performance.now();
  overlay.style.display = `block`;
  document.body.style.overflow = `hidden`;
  document.addEventListener(`keydown`, onKeyDown);
  window.addEventListener(`resize`, resize);
  resize();
  rafId = requestAnimationFrame(render);
}

export function closeLogoTunnel(): void {
  if (!isOpen || !overlay) return;
  isOpen = false;
  cancelAnimationFrame(rafId);
  document.removeEventListener(`keydown`, onKeyDown);
  window.removeEventListener(`resize`, resize);
  overlay.style.display = `none`;
  document.body.style.overflow = ``;
  if (previousFocus) previousFocus.focus();
}

/**
 * Dispose the scene and reset module state. ClientRouter discards the old
 * <body> on every client-side navigation, so the overlay we appended to it
 * becomes detached. We tear down on astro:before-swap so the next click
 * rebuilds cleanly against the new document — and release the WebGL context
 * instead of leaking one per navigation.
 */
function teardown(): void {
  if (isOpen) {
    cancelAnimationFrame(rafId);
    document.removeEventListener(`keydown`, onKeyDown);
    window.removeEventListener(`resize`, resize);
    document.body.style.overflow = ``;
  }
  isOpen = false;
  if (renderer) {
    renderer.dispose();
    renderer.forceContextLoss();
  }
  overlay?.remove();
  overlay = null;
  renderer = null;
  scene = null;
  camera = null;
  curve = null;
  glows = null;
  previousFocus = null;
}

// Registered once when the module is first dynamically imported.
if (typeof document !== `undefined`) {
  document.addEventListener(`astro:before-swap`, teardown);
}
