import type { SVGProps } from "react";

/**
 * Outline geometry for a six-pointed star (Star of David),
 * drawn inside a 100 × 100 viewBox.
 */
export const STAR_PATH =
  "M50 4 L63.3 27 L89.8 27 L76.6 50 L89.8 73 L63.3 73 L50 96 L36.7 73 L10.2 73 L23.4 50 L10.2 27 L36.7 27 Z";

type StarOfDavidProps = SVGProps<SVGSVGElement>;

export function StarOfDavid({ className, ...props }: StarOfDavidProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d={STAR_PATH} />
    </svg>
  );
}
