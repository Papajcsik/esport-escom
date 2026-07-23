import { cn } from "@/lib/utils";
import { HOLDERS } from "@/lib/constants";
import type { HologramPosition } from "@/types/types";

interface Props {
  side: HologramPosition;
  onReadMore?: () => void;
}

export function HologramFrame({ side, onReadMore }: Props) {
  const isLeft = side === "left";
  const horizontal = isLeft ? "left-[5.5cqi]" : "right-[5.5cqi]";
  const textPosition = isLeft ? "left-[2.8cqi]" : "right-[2.8cqi]";
  const containerAlignment = isLeft ? "" : "max-md:ml-auto";

  return (
    <div className={cn(
          "relative w-full max-md:w-[70%]",
          containerAlignment,
        )}>
      <img
        data-hologram
        src={isLeft ? HOLDERS.hologramLeft : HOLDERS.hologramRight}
        alt={`${side} hologram`}
        className="w-full"
      />

      <div
        data-readmore
        className={cn("absolute w-[38%] z-20", horizontal)}
      >
        <div
          className="cursor-pointer hover:scale-105 transition-transform"
          onClick={onReadMore}
        >
          <img
            src={isLeft ? HOLDERS.readMoreLeft : HOLDERS.readMoreRight}
            alt="Read more"
            className="w-full pointer-events-none"
          />
          <p
            className={cn(
              "absolute inset-0 flex items-center justify-center text-orange text-[2.8cqi] md:text-[2.5cqi] cursor-pointer hover:scale-105 transition-transform pointer-events-none",
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
        className="absolute bottom-[-1.4cqi] w-full pointer-events-none"
      />
    </div>
  );
}
