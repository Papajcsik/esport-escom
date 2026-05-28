import { images } from "@/lib/imageMap";

export default function Footer() {
  return (
    <div className="overflow-hidden bg-linear-to-b from-[#0F0108] to-[#650535]">
      <div className="flex w-full items-end">
        <img
          src={images.bannerLeft}
          className="flex-1 min-w-0 h-20 object-cover object-right"
          alt="Left Banner"
        />
        <div className="relative shrink-0">
          <img src={images.banner} className="h-32" alt="Main Banner" />
          <img
            src={images.joinCause}
            alt="Join"
            className="absolute left-1/2 top-[8%] h-3 w-auto -translate-x-1/2"
          />
          <img
            src={images.googlePlayFooter}
            alt="Google Play"
            className="absolute left-1/2 top-[58%] h-14 w-auto -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <img
          src={images.bannerRight}
          className="flex-1 min-w-0 h-20 object-cover object-left"
          alt="Right Banner"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-2 py-6">
        <p className="text-sm font-bold tracking-wide text-white">
          Powered By:
        </p>
        <img
          src={images.lifeIsGame}
          alt="GamesGuru Logo"
          className="h-20 w-auto"
        />
      </div>
    </div>
  );
}
