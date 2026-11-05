import { mulberry32 } from "./prng";

export type BackgroundStar = {
  /** Horizontal position as a percentage of the viewport. */
  x: number;
  /** Vertical position as a percentage of the viewport. */
  y: number;
  /** Rendered size in pixels. */
  size: number;
  opacity: number;
  rotation: number;
  filled: boolean;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const round = (value: number, precision = 2) => {
  const factor = 10 ** precision;
  return Math.round(value * factor) / factor;
};

/**
 * Builds a jittered grid of Stars of David.
 *
 * The grid is 20 columns wide; 200 stars therefore fill exactly 10 rows.
 * Positions are percentages so the whole field always covers the viewport.
 */
export function buildStarField(count: number, seed: number): BackgroundStar[] {
  const random = mulberry32(seed);
  const columns = 20;
  const rows = Math.ceil(count / columns);

  return Array.from({ length: count }, (_, index) => {
    const column = index % columns;
    const row = Math.floor(index / columns);

    const jitterX = (random() - 0.5) * (100 / columns) * 0.62;
    const jitterY = (random() - 0.5) * (100 / rows) * 0.62;

    const x = clamp(((column + 0.5) / columns) * 100 + jitterX, 1.5, 98.5);
    const y = clamp(((row + 0.5) / rows) * 100 + jitterY, 1.5, 98.5);

    const filled = random() < 0.42;
    const size = 24 + random() * 56;
    const opacity = 0;
    const rotation = random() * 360;

    return {
      x: round(x),
      y: round(y),
      size: round(size),
      opacity: round(opacity, 3),
      rotation: round(rotation, 1),
      filled,
    };
  });
}
