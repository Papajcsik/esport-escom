import { TextBlock } from "../overview/TextBlock";
import { HologramFrame } from "../overview/HologramFrame";
import type { GameSection } from "@/types/types";

interface Props {
  section: GameSection;
}

export function GameOverview({ section }: Props) {
  const isLeft = section.hologram === "left";
  return (
    <div className="grid grid-cols-2 items-center">
      {/* spacer so the stack sits on the right half, will be switched */}
      {!isLeft && <div />}

      <div className="relative @container">
        <HologramFrame side={section.hologram} />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
          <div className="max-w-[70%]">
            <TextBlock section={section} />
          </div>
        </div>
      </div>

      {/* spacer so the stack sits on the left half, will be switched */}
      {isLeft && <div />}
    </div>
  );
}
