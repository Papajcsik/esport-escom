import { ICONS, IMAGES } from "@/lib/constants";
import type { Icon } from "@/types/types";

export default function Footer() {
  return (
    <div className="overflow-hidden bg-linear-to-b from-[#0F0108] from-58% to-[#650535] mt-[-1vw]">
      <div className="flex w-full items-end">
        <div className="relative flex-1 min-w-0 mr-[-15px] sm:mr-[clamp(-50px,-2.15vw,-32px)] translate-y-[-4px] sm:translate-y-[clamp(-12px,-0.54vw,-8px)]">
          <img
            src={IMAGES.bannerLeft}
            alt="Left Banner"
            className="w-full h-[50px] sm:h-[clamp(112px,7.51vw,168px)] object-fill"
          />
          <FooterIcons direction="left" />
        </div>
        <div className="relative shrink-0 h-[60px] sm:h-[clamp(128px,8.58vw,192px)] aspect-845/443 z-2">
          <img
            src={IMAGES.banner}
            alt="Main Banner"
            className="w-full h-full"
          />
          <img
            src={IMAGES.joinCause}
            alt="Join"
            className="absolute left-1/2 top-[15%] w-[50%] h-auto -translate-x-1/2"
          />
          <a
            href="https://play.google.com/store/apps/details?id=com.escom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={IMAGES.googlePlayFooter}
              alt="Google Play"
              className="absolute left-[50%] top-[58%] w-[73%] h-auto -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>
        <div className="relative flex-1 min-w-0 ml-[-15px] sm:ml-[clamp(-50px,-2.15vw,-32px)] translate-y-[-4px] sm:translate-y-[clamp(-12px,-0.54vw,-8px)]">
          <img
            src={IMAGES.bannerRight}
            alt="Right Banner"
            className="w-full h-[50px] sm:h-[clamp(112px,7.51vw,168px)] object-fill"
          />
          <FooterIcons direction="right" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 sm:gap-[clamp(32px,2.15vw,48px)]">
        <p className="text-xs sm:text-[clamp(16px,1.07vw,22px)] font-bold tracking-wide text-white">
          Powered By:
        </p>
        <img
          src={IMAGES.lifeIsGame}
          alt="GamesGuru Logo"
          className="h-16 sm:h-[clamp(128px,8.58vw,192px)] w-auto mb-4 sm:mb-[clamp(24px,1.61vw,36px)]"
        />
      </div>
    </div>
  );
}

function FooterIcons({ direction }: { direction: "left" | "right" }) {
  const icons: Icon[] =
    direction === "left"
      ? ICONS.slice(0, Math.ceil(ICONS.length / 2))
      : ICONS.slice(Math.ceil(ICONS.length / 2));

  return (
    <div className="absolute inset-0 z-2">
      {icons.map(({ id, icon, route, pos }) => (
        <a
          key={id}
          href={route}
          target="_blank"
          rel="noreferrer"
          aria-label={id}
          className={`absolute -translate-x-1/2 -translate-y-1/2 top-[53%] ${pos}`}
        >
          <img
            src={icon}
            alt={`${id} Icon`}
            className="h-[18px] sm:h-[clamp(36px,2.45vw,48px)] w-auto"
          />
        </a>
      ))}
    </div>
  );
}
