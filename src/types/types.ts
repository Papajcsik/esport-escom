import type { ICONS } from "@/lib/constants";

export type Icon = (typeof ICONS)[number];

export type PageId =
	| "what-is-escom"
	| "main-news"
	| "faq"
	| "comic-book"
	| "merchandise"
	| "support"
	| "gaming-store";
