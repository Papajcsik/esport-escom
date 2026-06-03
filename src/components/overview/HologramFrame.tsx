import { HOLDERS } from "@/lib/constants";
import type { HologramPosition } from "@/types/types";

interface Props {
  side: HologramPosition;
}

export function HologramFrame({ side }: Props) {
  const isLeft = side === "left";
  const horizontal = isLeft ? "left-8" : "right-8";
  const textPosition = isLeft ? "left-4" : "right-4";
  const hologramTransform = isLeft ? "translate-x-4" : "-translate-x-4";

  return (
    <div className="relative w-full">
      <img
        src={isLeft ? HOLDERS.hologramLeft : HOLDERS.hologramRight}
        alt={`${side} hologram`}
        className={`w-full ${hologramTransform}`}
      />

      <div
        className={`absolute w-[40%] cursor-pointer hover:scale-105 transition-transform ${horizontal}`}
      >
        <img
          src={isLeft ? HOLDERS.readMoreLeft : HOLDERS.readMoreRight}
          alt="Read more"
          className="w-full"
        />
        <p
          className={`absolute inset-0 flex items-center justify-center text-orange text-base text-[2.5cqi] hover:scale-105 transition-transform ${textPosition}`}
        >
          READ MORE
        </p>
      </div>

      <img
        src={isLeft ? HOLDERS.holderLeft : HOLDERS.holderRight}
        alt={`${side} holder`}
        className="absolute bottom-0 w-full translate-y-1/3 pointer-events-none"
      />
    </div>
  );
}
