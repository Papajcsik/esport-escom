import type { ICONS } from "@/lib/constants";

export type Icon = (typeof ICONS)[number];

export type HologramPosition = "left" | "right";

export interface GameSection {
  title: string;
  text: string;
  hologram: HologramPosition;
}
