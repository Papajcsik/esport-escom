import type { ICONS } from "@/lib/constants";

export type Icon = (typeof ICONS)[number];

export type HologramPosition = "left" | "right";

export interface GameSection {
  title: string;
  text: string;
  hologram: HologramPosition;
  scrollTo?: string;
}

export type PageId =
  | "what-is-escom"
  | "main-news"
  | "faq"
  | "comic-book"
  | "merchandise"
  | "support"
  | "gaming-store";

export type Point = {
  x: number;
  y: number;
};
export type Triangle = [Point, Point, Point];
