import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef, useState } from "react";
import { TextBlock } from "../overview/TextBlock";
import { HologramFrame } from "../overview/HologramFrame";
import type { GameSection } from "@/types/types";

interface Props {
  section: GameSection;
}

export function GameOverview({ section }: Props) {
  const isLeft = section.hologram === "left";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useGSAP(
    () => {
      // Build only after full load: all images in + parallax pin-spacing injected.
      if (!ready) {
        if (document.readyState === "complete") {
          setReady(true);
        } else {
          const onLoad = () => setReady(true);
          window.addEventListener("load", onLoad);
          return () => window.removeEventListener("load", onLoad);
        }
        return;
      }

      const inSection = gsap.utils.selector(sectionRef);
      const hologram = inSection("[data-hologram]");
      const holder = inSection("[data-holder]");
      const readMore = inSection("[data-readmore]");
      const text = inSection("[data-textblock]");

      const splitText = SplitText.create(text, { type: "lines" });

      const xFinalPos = isLeft ? 20 : -20;
      gsap.set(hologram, { x: xFinalPos, y: 4 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center 90%",
          // markers: true,
        },
      });

      tl.fromTo(
        holder,
        { yPercent: 113 },
        { yPercent: 33, duration: 0.4, ease: "power2.in" },
      );
      tl.fromTo(
        readMore,
        { yPercent: 113 },
        { yPercent: 0, duration: 0.4, ease: "power2.in" },
        "<",
      );
      tl.from(
        hologram,
        { clipPath: "inset(100% 0% 0% 0%)", duration: 0.1, ease: "power2.out" },
        "+=0.01",
      );

      tl.fromTo(
        splitText.lines,
        {
          opacity: 0,
          yPercent: 100,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.2,
          ease: "power2.out",
          stagger: 0.1,
        },
        "+=0.1",
      );
    },
    { scope: sectionRef, dependencies: [ready] },
  );

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-[2fr_1fr_2fr] items-center flex-1 "
    >
      {/* left cell */}
      <div>
        {isLeft && (
          <div className="relative @container">
            <HologramFrame side={section.hologram} />
            <div className="absolute inset-x-0 top-[60%] z-10 flex flex-col items-center -translate-y-1/2 text-center translate-x-6">
              <div className="max-w-[70%]">
                <TextBlock section={section} />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* spacer */}
      <div />
      {/* right cell */}
      <div>
        {!isLeft && (
          <div className="relative @container">
            <HologramFrame side={section.hologram} />
            <div className="absolute inset-x-0 top-[60%] z-10 flex flex-col items-center -translate-y-1/2 text-center -translate-x-6">
              <div className="max-w-[70%]">
                <TextBlock section={section} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
