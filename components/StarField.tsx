import type { CSSProperties } from "react";

import { STAR_PATH } from "./StarOfDavid";
import { buildStarField } from "@/lib/stars";

export const STAR_COUNT = 200;

const stars = buildStarField(STAR_COUNT, 0x5eed);

if (stars.length !== STAR_COUNT) {
  throw new Error(
    `Expected exactly ${STAR_COUNT} background stars, generated ${stars.length}.`,
  );
}

/**
 * Fixed, decorative background made of exactly 200 Stars of David.
 * Stars are positioned in percentages, so the complete field is always
 * inside the viewport at any screen size.
 */
export function StarField() {
  return (
    <div className="star-field" aria-hidden="true">
      <svg className="star-field__defs" aria-hidden="true" focusable="false">
        <defs>
          <symbol id="david-star" viewBox="0 0 100 100">
            <path d={STAR_PATH} vectorEffect="non-scaling-stroke" />
          </symbol>
        </defs>
      </svg>

      <div className="star-field__stars">
        {stars.map((star, index) => (
          <svg
            key={index}
            data-david-star
            viewBox="0 0 100 100"
            className="star-field__star"
            style={
              {
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                transform: `translate(-50%, -50%) rotate(${star.rotation}deg)`,
              } as CSSProperties
            }
          >
            <use
              href="#david-star"
              fill={star.filled ? "currentColor" : "none"}
              stroke={star.filled ? "none" : "currentColor"}
              strokeWidth={star.filled ? 0 : 0.9}
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
