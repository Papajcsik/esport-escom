export const images = {
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
  hamburgerMenuOutside: "/images/frames/hamburger-menu-outside.webp",
} as const;

export const backgroundImages = {
  backgroundLights: "/images/background/backgroundtitan-lights.webp",
  backgroundTitan: "/images/background/backgroundtitan.webp",
  mechanic: "/images/background/mechanic.webp",
  weldingSparks: "/images/background/welding-drone-sparks.webp",
  weldingDrone: "/images/background/welding-drone.webp",
  draftList: "/images/background/draft-list.png",
  contractors: "/images/background/contractors.webp",
  escomInitiative: "/images/background/escom-initiative.webp",
  mobileGame: "/images/background/mobile-game.webp",
  treath: "/images/background/treath.webp",
  develop: "/images/background/develop.png",
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
