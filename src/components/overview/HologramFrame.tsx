import { cn } from "@/lib/utils";
import { HOLDERS } from "@/lib/constants";
import type { HologramPosition } from "@/types/types";

interface Props {
  side: HologramPosition;
}

export function HologramFrame({ side }: Props) {
  const isLeft = side === "left";
  const horizontal = isLeft ? "left-8" : "right-8";
  const textPosition = isLeft ? "left-4" : "right-4";

  return (
    <div className="relative w-full">
      <img
        data-hologram
        src={isLeft ? HOLDERS.hologramLeft : HOLDERS.hologramRight}
        alt={`${side} hologram`}
        className="w-full"
      />

      <div data-readmore className={cn("absolute w-[38%]", horizontal)}>
        <div className="cursor-pointer hover:scale-105 transition-transform">
          <img
            src={isLeft ? HOLDERS.readMoreLeft : HOLDERS.readMoreRight}
            alt="Read more"
            className="w-full"
          />
          <p
            className={cn(
              "absolute inset-0 flex items-center justify-center p-0 text-orange text-base text-[2.5cqi] cursor-pointer hover:scale-105 transition-transform",
              textPosition,
            )}
          >
            READ MORE
          </p>
        </div>
      </div>

      <img
        data-holder
        src={isLeft ? HOLDERS.holderLeft : HOLDERS.holderRight}
        alt={`${side} holder`}
        className="absolute -bottom-2 w-full pointer-events-none"
      />
    </div>
  );
}
