import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef, useState } from "react";
import { TextBlock } from "../overview/TextBlock";
import { HologramFrame } from "../overview/HologramFrame";
import type { GameSection } from "@/types/types";
import { ThemeFrame } from "../theme-image/ThemeFrame";
import { THEME_IMG } from "@/lib/constants";

interface Props {
  section: GameSection;
  index: number;
}

export function GameOverview({ section, index }: Props) {
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
      const themeImg = inSection("[data-themeimg]");
      const themeHolder = inSection("[data-themeholder]");

      const splitText = SplitText.create(text, { type: "lines" });

      const xFinalPos = isLeft ? 3.5 : -3.5;
      const hologramHolderStartRot = isLeft ? -90 : 90;
      const imgHolderStartRot = -90;
      gsap.set(hologram, {
        xPercent: xFinalPos,
        y: 4,
        transformOrigin: "center center",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // when the top of the section hits 80% of the viewport height
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
      tl.fromTo(
        hologram,
        { rotation: hologramHolderStartRot, opacity: 0 },
        { rotation: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
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

      tl.fromTo(
        themeHolder,
        {
          rotation: imgHolderStartRot,
          yPercent: 113,
          transformOrigin: "center center",
        },
        { rotation: 0, yPercent: 0, duration: 0.4, ease: "power2.in" },
      );

      tl.from(
        themeImg,
        {
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 0.35,
          ease: "power2.out",
        },
        "+=0.01",
      );

      tl.then(() => {
        gsap.to(themeImg, {
          y: -12,
          duration: 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        const glitchLoop = () => {
          const gt = gsap.timeline({
            onComplete: () => {
              gsap.delayedCall(gsap.utils.random(2, 6), glitchLoop);
            },
          });

          gt.to(themeImg, {
            clipPath: "inset(20% 0% 60% 0%)",
            x: 10,
            duration: 0.03,
            ease: "none",
          })
            .to(themeImg, {
              clipPath: "inset(0% 40% 0% 0%)",
              x: 0,
              duration: 0.03,
              ease: "none",
            })
            .to(themeImg, {
              clipPath: "inset(50% 0% 30% 0%)",
              x: -8,
              duration: 0.03,
              ease: "none",
            })
            .to(themeImg, {
              clipPath: "inset(0% 35% 0% 0%)",
              x: 0,
              duration: 0.03,
              ease: "none",
              clearProps: "clipPath,x",
            });
        };

        gsap.delayedCall(gsap.utils.random(1, 3), glitchLoop);
      });
    },
    { scope: sectionRef, dependencies: [ready] },
  );

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-[2fr_1fr_2fr] items-center flex-1"
    >
      {/* left cell */}
      <div>
        {isLeft ? (
          <div className="relative @container">
            <HologramFrame side={section.hologram} />
            <div className="absolute inset-x-0 top-[60%] z-10 flex flex-col items-center -translate-y-1/2 text-center translate-x-[4.1cqi]">
              <div className="max-w-[70%]">
                <TextBlock section={section} />
              </div>
            </div>
          </div>
        ) : (
          <ThemeFrame
            side={section.hologram}
            src={THEME_IMG[index].src}
            alt={THEME_IMG[index].alt}
            x={THEME_IMG[index].x}
          />
        )}
      </div>
      {/* spacer */}
      <div />
      {/* right cell */}
      <div>
        {!isLeft ? (
          <div className="relative @container">
            <HologramFrame side={section.hologram} />
            <div className="absolute inset-x-0 top-[60%] z-10 flex flex-col items-center -translate-y-1/2 text-center translate-x-[-4.1cqi]">
              <div className="max-w-[70%]">
                <TextBlock section={section} />
              </div>
            </div>
          </div>
        ) : (
          <ThemeFrame
            side={section.hologram}
            src={THEME_IMG[index].src}
            alt={THEME_IMG[index].alt}
            x={THEME_IMG[index].x}
          />
        )}
      </div>
    </div>
  );
}
