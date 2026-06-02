import { HOLDERS } from "@/lib/constants";
import type { HologramPosition } from "@/types/types";

const HOLOGRAM_SRC: Record<HologramPosition, string> = {
  left: HOLDERS.left,
  right: HOLDERS.right,
};

interface Props {
  side: HologramPosition;
}

export function HologramFrame({ side }: Props) {
  return (
    <img src={HOLOGRAM_SRC[side]} alt={`${side} hologram`} className="w-full" />
  );
}
