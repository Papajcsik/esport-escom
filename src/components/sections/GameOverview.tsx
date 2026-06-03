import { TextBlock } from "../overview/TextBlock";
import { HologramFrame } from "../overview/HologramFrame";
import type { GameSection } from "@/types/types";

interface Props {
  section: GameSection;
}

export function GameOverview({ section }: Props) {
  const isLeft = section.hologram === "left";
  return (
    <div className="grid grid-cols-3 items-center">
      {/* spacer so the stack sits on the right half, will be switched */}
      {!isLeft && <div />}
      {!isLeft && <div />} {/* icon component will be placed here */}
      <div className="relative @container">
        <HologramFrame side={section.hologram} />
        <div
          className={`absolute inset-x-0 top-[60%] z-10 flex flex-col items-center -translate-y-1/2 text-center ${
            isLeft ? "translate-x-6" : "-translate-x-6"
          }`}
        >
          <div className="max-w-[70%]">
            <TextBlock section={section} />
          </div>
        </div>
      </div>
      {/* spacer so the stack sits on the left half, will be switched */}
      {isLeft && <div />} {/* icon component will be placed here */}
      {isLeft && <div />}
    </div>
  );
}
