import { backgroundImages } from "@/lib/imageMap";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
      </div>

      <div className="bg-white">
        <img
          src={backgroundImages.mechanic}
          alt="mechanic"
          className="w-auto h-auto flex-none"
        />
        <img
          src={backgroundImages.weldingSparks}
          alt="welding sparks"
          className="w-auto h-auto flex-none"
        />
        <img
          src={backgroundImages.weldingDrone}
          alt="welding drone"
          className="w-auto h-auto flex-none"
        />
      </div>
    </>
  );
}
