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
      <div className="relative w-full overflow-hidden aspect-4057/8400">
        <img
          src={backgroundImages.backgroundTitan}
          alt="background titan"
          className="w-full h-auto block"
        />
        <img
          id="background-lights"
          src={backgroundImages.backgroundLights}
          alt="background lights"
          className="absolute top-0 left-0 w-full h-auto"
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col">
          {SECTIONS.map((section, index: number) => (
            <GameOverview key={section.title} section={section} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
