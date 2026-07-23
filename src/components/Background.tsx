import { backgroundImages, SECTIONS } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GameOverview } from "./sections/GameOverview";
import SVGStage from "./workers/SVGStage";
import Mechanic from "./workers/Mechanic";
import Drone from "./workers/Drone";
import { MECHANIC_1, MECHANIC_2, DRONE_1, DRONE_2 } from "@/lib/constants";

export default function Background({ onReadMore }: { onReadMore?: (anchor?: string) => void }) {

  useGSAP(
    () => {
      const titanTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 10,
        defaults: { ease: "sine.inOut" },
      });

      titanTimeline.fromTo(
        "#background-lights",
        { opacity: 0 },
        { opacity: 1, duration: 3 },
      );

      titanTimeline.to("#background-lights", { opacity: 0, duration: 7 });
    },
    { dependencies: [] },
  );

  return (
    <div className="relative w-full overflow-hidden max-md:aspect-1920/10700 aspect-1920/5000">
      <img
        src={backgroundImages.backgroundTitan}
        alt="background titan"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
      />
      <img
        id="background-lights"
        src={backgroundImages.backgroundLights}
        alt="background lights"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover z-1 will-change-transform"
      />

      <div className="absolute inset-0 flex flex-col z-20 pointer-events-auto">
        {SECTIONS.map((section, index: number) => (
          <GameOverview key={section.title} section={section} index={index} onReadMore={onReadMore} />
        ))}
      </div>

      <SVGStage className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <Mechanic triangle={MECHANIC_1} duration={4} />
        <Mechanic triangle={MECHANIC_2} duration={6} />
        <Drone triangle={DRONE_1} duration={3} weldDuration={6} />
        <Drone triangle={DRONE_2} duration={4} weldDuration={6} />
      </SVGStage>
      <div className="absolute top-[96%] h-150 w-[100%] z-1 inset-0 bg-black/30 backdrop-blur-sm"></div>
    </div>
  );
}
