import type { PageId, Point } from "@/types/types";

export const IMAGES = {
  backgroundLights: "/images/background/backgroundtitan-lights.webp",
  backgroundTitan: "/images/background/backgroundtitan.webp",
  buttonOff: "/images/header/button-off.webp",
  buttonOn: "/images/header/button-on.webp",
  googlePlay: "/images/header/google-play.webp",
  headerBackground: "/images/header/header-background.webp",
  headerLeft: "/images/header/header-left.webp",
  headerMiddle: "/images/header/header-middle.webp",
  headerRight: "/images/header/header-right.webp",
  escomHeroBattle: "/images/hero/escom-hero-battle.webp",
  escomLogo: "/images/hero/escom-logo.webp",
  polygon: "/images/hero/polygon.webp",
  arch: "/images/parallax/arch.webp",
  city: "/images/parallax/city.webp",
  contractor: "/images/parallax/contractor.webp",
  doorLeft: "/images/parallax/door-left.webp",
  doorRight: "/images/parallax/door-right.webp",
  sky: "/images/parallax/sky.webp",
  middleLayer: "/images/parallax/middle-layer.webp",
  logo: "/images/logo.webp",
  robot: "/images/robot.webp",
  bannerLeft: "/images/footer/banner-left.webp",
  bannerRight: "/images/footer/banner-right.webp",
  banner: "/images/footer/banner.webp",
  googlePlayFooter: "/images/footer/google-play-footer.webp",
  joinCause: "/images/footer/join-the-common-cause.webp",
  lifeIsGame: "/images/footer/life-is-a-game.webp",
  hamburgerMenuBackground: "/images/header/hamburger-menu-background.webp",
  hamburgerMenuElementBackground:
    "/images/header/hamburger-menu-element-background.webp",
  hamburgerMenuElementHighlighted:
    "/images/header/hamburger_menu_pointer_highlighted.webp",
  hamburgerMenuOutside: "/images/header/hamburger-menu-outside.webp",
  hamburgerSwitchButton: "/images/header/hamburger-switch-button.webp",
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

export const MECHANIC_1: [Point, Point, Point] = [
  { x: 950, y: 142 },
  { x: 1500, y: 460 },
  { x: 1700, y: 240 },
];

export const MECHANIC_2: [Point, Point, Point] = [
  { x: 700, y: 197 },
  { x: 1700, y: -230 },
  { x: 1300, y: -380 },
];

export const DRONE_1: [Point, Point, Point] = [
  { x: 822, y: -170 },
  { x: 1050, y: -450 },
  { x: 405, y: -220 },
];

export const DRONE_2: [Point, Point, Point] = [
  { x: 1243, y: 505 },
  { x: 1065, y: 910 },
  { x: 805, y: 668 },
];
