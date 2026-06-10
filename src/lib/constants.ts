import type { PageId } from "@/types/types";

export const IMAGES = {
  buttonOff: "/images/header/button-off.webp",
  buttonOn: "/images/header/button-on.webp",
  googlePlay: "/images/header/google-play.webp",
  headerBackground: "/images/header/header-background.webp",
  headerLeft: "/images/header/header-left.png",
  headerMiddle: "/images/header/header-middle.png",
  headerRight: "/images/header/header-right.png",
  escomHeroBattle: "/images/hero/escom-hero-battle.png",
  escomLogo: "/images/hero/escom-logo.png",
  polygon: "/images/hero/polygon.png",
  arch: "/images/parallax/arch.webp",
  city: "/images/parallax/city.webp",
  contractor: "/images/parallax/contractor.webp",
  doorLeft: "/images/parallax/door-left.webp",
  doorRight: "/images/parallax/door-right.webp",
  sky: "/images/parallax/sky.webp",
  middleLayer: "/images/parallax/middle-layer.png",
  logo: "/images/logo.webp",
  robot: "/images/robot.webp",
  bannerLeft: "/images/footer/banner-left.webp",
  bannerRight: "/images/footer/banner-right.webp",
  banner: "/images/footer/banner.webp",
  googlePlayFooter: "/images/footer/google-play-footer.webp",
  joinCause: "/images/footer/join-the-common-cause.webp",
  lifeIsGame: "/images/footer/life-is-a-game.webp",
  hamburgerMenuBackground: "/images/header/hamburger-menu-background.png",
  hamburgerMenuElementBackground:
    "/images/header/hamburger-menu-element-background.png",
  hamburgerMenuElementHighlighted:
    "/images/header/hamburger_menu_pointer_highlighted.png",
  hamburgerMenuOutside: "/images/header/hamburger-menu-outside.png",
} as const;

export const backgroundImages = {
  backgroundLights: "/images/background/backgroundtitan-lights.webp",
  backgroundTitan: "/images/background/backgroundtitan.webp",
  mechanic: "/images/background/mechanic.webp",
  weldingSparks: "/images/background/welding-drone-sparks.webp",
  weldingDrone: "/images/background/welding-drone.webp",
} as const;

export const ICONS = [
  {
    id: "Facebook",
    icon: "/images/icons/facebook-icon.webp",
    route: "https://www.facebook.com/esportEscom",
    pos: "left-[35%]",
  },
  {
    id: "Instagram",
    icon: "/images/icons/instagram-icon.webp",
    route: "https://www.instagram.com/Esport_Escom/",
    pos: "left-[70%]",
  },
  {
    id: "TikTok",
    icon: "/images/icons/tiktok-icon.webp",
    route: "https://www.tiktok.com/@earthsecuritycomma",
    pos: "right-[70%]",
  },
  {
    id: "YouTube",
    icon: "/images/icons/youtube-icon.webp",
    route: "https://www.youtube.com/channel/UC9lAnxCQy5BZ1lB-cNSlO4Q",
    pos: "right-[35%]",
  },
] as const;

export type Icon = (typeof ICONS)[number];

export const SECTIONS = [
  {
    title: "Escom",
    text: "is a logic and code-breaking mobile game, with community-based role-playing elements.\n\nEXPECT FAST CHALLENGES, NO TIME REQUIRMENT AND NO IN-GAME ADS!",
    hologram: "left",
  },
  {
    title: "You Play as a Contractor",
    text: "22nd century businessman contracted by the ESCOM Initiative. Your task is to manufacture components for ESCOM's assembly facilities. Alongside countless other contractors, you work toward one shared goal: protecting our Homeworld.",
    hologram: "right",
  },
  {
    title: "Incoming Extinction",
    text: "The threat is real. Hollow asteroids from the Centauri system are heading toward Earth… Something alive is hidden inside them. If humanity fails to act now, there may be no future left to save.",
    hologram: "left",
  },
  {
    title: "Escom Initiative",
    text: "The threat is real! ESCOM and its Contractors are building TITAN-01 — humanity's ultimate war machine. Our Homeworld depends on it.",
    hologram: "right",
  },
  {
    title: "The Leaderboard",
    text: "The system ranks the top contributing Contractors on a global leaderboard. The best among them will be remembered forever as the saviors of the Homeworld.",
    hologram: "left",
  },
  {
    title: "Develop, Adapt, Defend",
    text: "Download now! Build the TITAN-01 with us, take on real challenges, and enjoy intelligent, purpose-driven gameplay.",
    hologram: "right",
  },
] as const;

export const HOLDERS = {
  left: "/images/holders/left-holder.webp",
  right: "/images/holders/right-holder.webp",
  readMoreLeft: "/images/holders/read-more-left.webp",
  readMoreRight: "/images/holders/read-more-right.webp",
  hologramLeft: "/images/holders/hologram-left.webp",
  hologramRight: "/images/holders/hologram-right.webp",
  holderLeft: "/images/holders/hologram-holder-left.webp",
  holderRight: "/images/holders/hologram-holder-right.webp",
  leftImageHolder: "/images/theme-images/image-holder-left.webp",
  rightImageHolder: "/images/theme-images/image-holder-right.webp",
} as const;

export const THEME_IMG = [
  {
    src: "/images/theme-images/01.webp",
    alt: "mobile game",
    x: -5.9,
  },
  {
    src: "/images/theme-images/02.webp",
    alt: "contractor",
    x: -7.3,
  },
  {
    src: "/images/theme-images/03.webp",
    alt: "asteroid",
    x: 11,
  },
  {
    src: "/images/theme-images/04.webp",
    alt: "titan 01",
    x: -4.1,
  },
  {
    src: "/images/theme-images/05.webp",
    alt: "leaderboard",
    x: 11.4,
  },
  {
    src: "/images/theme-images/06.webp",
    alt: "titan defense",
    x: 1.7,
  },
] as const;

export const AUDIO = {
	main: "/audio/main.mp3",
} as const;

export const menuItems: {
	label: string;
	id: PageId;
}[] = [
	{ label: "WHAT IS ESCOM ?", id: "what-is-escom" },
	{ label: "MAIN NEWS", id: "main-news" },
	{ label: "FAQ / EULA", id: "faq" },
	{ label: "ESCOM COMIC BOOK", id: "comic-book" },
	{ label: "MERCHANDISE", id: "merchandise" },
	{ label: "SUPPORT", id: "support" },
	{ label: "GAMING STORE", id: "gaming-store" },
];
