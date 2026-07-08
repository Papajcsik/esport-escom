import { HOLDERS } from "@/lib/constants";
import type { HologramPosition } from "@/types/types";
import { cn } from "@/lib/utils";

interface Props {
  side: HologramPosition;
  src: string;
  alt: string;
  x: number;
  y?: number;
}

export function ThemeFrame({ side, src, alt, x, y = 7 }: Props) {
  const isLeft = side === "left";
  const horizontal = isLeft ? "translate-x-[-13cqi]" : "translate-x-[13cqi]";
  const alignment = isLeft ? "ml-auto" : "";

  return (
    <div className={`w-full @container scale-[0.55] md:scale-[1] translate-y-[-30cqi] md:translate-y-[0cqi] ${isLeft ? 'translate-x-[28cqi]' : 'translate-x-[-28cqi]'} md:translate-x-[0cqi]`}>
      <div
        className="relative z-10"
        style={{ transform: `translate(${x}cqi, ${y}cqi)` }}
      >
        <img
          data-themeimg
          src={src}
          alt={alt}
          className="block w-[75%] mx-auto scale-[1.6] will-change-transform"
        />
      </div>

      <img
        data-spark
        src={
          isLeft ? HOLDERS.rightImageHolderSpark : HOLDERS.leftImageHolderSpark
        }
        alt={`${side} spark`}
        className={cn(
          "block w-[75%] scale-x-[1.12] translate-y-[5cqi]",
          horizontal,
          alignment,
        )}
      />
      <img
        data-themeholder
        src={isLeft ? HOLDERS.rightImageHolder : HOLDERS.leftImageHolder}
        alt={`${side} holder`}
        className={cn("block w-[75%]", alignment)}
      />
    </div>
  );
}
