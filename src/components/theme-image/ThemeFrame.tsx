import { HOLDERS } from "@/lib/constants";
import type { HologramPosition } from "@/types/types";

interface Props {
  side: HologramPosition;
  src: string;
  alt: string;
  x: number;
  y?: number;
}

export function ThemeFrame({ side, src, alt, x, y = 0 }: Props) {
  const isLeft = side === "left";

  return (
    <div className="relative w-full @container">
      <div style={{ transform: `translate(${x}cqi, ${y}cqi)` }}>
        <img
          data-themeimg
          src={src}
          alt={alt}
          className="relative z-10 block w-auto mx-auto"
        />
      </div>

      <img
        data-themeholder
        src={isLeft ? HOLDERS.rightImageHolder : HOLDERS.leftImageHolder}
        alt={`${side} holder`}
        className="absolute top-[41cqi] z-0 w-full"
      />
    </div>
  );
}
