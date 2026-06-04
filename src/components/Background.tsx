import { backgroundImages, SECTIONS } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GameOverview } from "./sections/GameOverview";

export default function Background() {
  useGSAP(() => {
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
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden aspect-1920/5000">
        <img
          src={backgroundImages.backgroundTitan}
          alt="background titan"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          id="background-lights"
          src={backgroundImages.backgroundLights}
          alt="background lights"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col">
          {SECTIONS.map((section, index: number) => (
            <GameOverview key={section.title} section={section} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
