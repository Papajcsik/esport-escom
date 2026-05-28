import { images } from "@/lib/imageMap";

export default function Footer() {
  return (
    <div className="overflow-hidden bg-linear-to-b from-[#0F0108] from-58% to-[#650535] mt-[-2vw]">
      <div className="flex w-full items-end">
        <img
          src={images.bannerLeft}
          alt="Left Banner"
          className="flex-1 min-w-0 h-[clamp(112px,7.51vw,168px)] object-fill mr-[clamp(-50px,-2.15vw,-32px)] translate-y-[clamp(-12px,-0.54vw,-8px)]"
        />
        <div className="relative shrink-0 h-[clamp(128px,8.58vw,192px)] aspect-845/443 z-2">
          <img
            src={images.banner}
            alt="Main Banner"
            className="w-full h-full"
          />
          <img
            src={images.joinCause}
            alt="Join"
            className="absolute left-1/2 top-[15%] w-[50%] h-auto -translate-x-1/2"
          />
          <img
            src={images.googlePlayFooter}
            alt="Google Play"
            className="absolute left-1/2 top-[58%] w-[73%] h-auto -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <img
          src={images.bannerRight}
          alt="Right Banner"
          className="flex-1 min-w-0 h-[clamp(112px,7.51vw,168px)] object-fill ml-[clamp(-50px,-2.15vw,-32px)] translate-y-[clamp(-12px,-0.54vw,-8px)]"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-[clamp(32px,2.15vw,48px)] my-[clamp(64px,4.29vw,96px)]">
        <p className="text-[clamp(16px,1.07vw,22px)] font-bold tracking-wide text-white">
          Powered By:
        </p>
        <img
          src={images.lifeIsGame}
          alt="GamesGuru Logo"
          className="h-[clamp(128px,8.58vw,192px)] w-auto mb-[clamp(24px,1.61vw,36px)]"
        />
      </div>
    </div>
  );
}
