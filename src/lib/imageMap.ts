export const images = {
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
  hamburgerMenuOutside: "/images/frames/hamburger-menu-outside.png",
  hamburgerSwitchButton: "/images/header/hamburger-switch-button.png",
  mainNewsKeret: "/images/frames/main-news-keret.png",
} as const;

export const backgroundImages = {
  backgroundLights: "/images/background/backgroundtitan-lights.webp",
  backgroundTitan: "/images/background/backgroundtitan.webp",
  mechanic: "/images/background/mechanic.webp",
  weldingSparks: "/images/background/welding-drone-sparks.webp",
  weldingDrone: "/images/background/welding-drone.webp",
  draftList: "/images/background/draft-list.png",
  contractors: "/images/background/contractors.png",
  escomInitiative: "/images/background/escom-initiative.png",
  mobileGame: "/images/background/mobile-game.png",
  treath: "/images/background/treath.png",
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
