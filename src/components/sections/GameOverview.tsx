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
  const hologramCellRef = useRef<HTMLDivElement>(null);
  const themeCellRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(() => document.readyState === "complete");

  // Build only after full load: all images in + parallax pin-spacing injected.
  useGSAP(
    () => {
      if (ready) return;
      const onLoad = () => setReady(true);
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    },
    { dependencies: [ready] },
  );

  useGSAP(
    () => {
      if (!ready) return;

      const inCell = gsap.utils.selector(hologramCellRef);
      const hologram = inCell("[data-hologram]");
      const holder = inCell("[data-holder]");
      const readMore = inCell("[data-readmore]");
      const text = inCell("[data-textblock]");

      const splitText = SplitText.create(text, { type: "lines" });

      // consts for hologram + read more animations - ensures they end in the same position regardless of side
      const xFinalPos = isLeft ? 3.5 : -3.5;
      const holderOrigin = isLeft ? "left center" : "right center";
      const hologramHolderStartRot = isLeft ? 90 : -90;
      const startingX = isLeft ? -113 : 113;

      gsap.set([holder, readMore], {
        transformOrigin: holderOrigin,
      });

      gsap.set(hologram, {
        xPercent: xFinalPos,
        y: 4,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hologramCellRef.current,
          start: "center 45%", // when the top of the section hits 40% of the viewport height
        },
      });

      tl.fromTo(
        holder,
        { yPercent: 113 },
        { yPercent: 33, duration: 0.45, ease: "expo.out" },
      );
      tl.fromTo(
        holder,
        { rotation: hologramHolderStartRot },
        { rotation: 0, duration: 0.45, ease: "back.out(1.5)" },
        "<",
      );

      tl.fromTo(
        readMore,
        {
          xPercent: startingX,
          yPercent: 113,
        },
        {
          xPercent: 0,
          yPercent: 0,
          duration: 0.45,
          ease: "expo.out",
        },
        "<",
      );
      tl.fromTo(
        readMore,
        {
          rotation: hologramHolderStartRot,
        },
        {
          rotation: 0,
          duration: 0.45,
          ease: "back.out(1.5)",
        },
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
    { scope: hologramCellRef, dependencies: [ready] },
  );

  useGSAP(
    () => {
      if (!ready) return;

      const inCell = gsap.utils.selector(themeCellRef);
      const themeImg = inCell("[data-themeimg]");
      const themeHolderSpark = inCell("[data-spark]");
      const themeHolder = inCell("[data-themeholder]");

      // consts for theme image holder animation - ensures it ends in the same position regardless of side
      const imgHolderOrigin = isLeft ? "right center" : "left center";
      const imgHolderStartRot = isLeft ? -90 : 90;

      gsap.set(themeHolder, {
        transformOrigin: imgHolderOrigin,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: themeCellRef.current,
          start: "center 35%", // when the top of the section hits 70% of the viewport height
          once: true, // animation plays only once
        },
      });

      tl.fromTo(
        themeHolder,
        { yPercent: 113 },
        { yPercent: 0, duration: 0.45, ease: "expo.out" },
      );

      tl.fromTo(
        themeHolder,
        { rotation: imgHolderStartRot },
        { rotation: 0, duration: 0.45, ease: "back.out(1.5)" },
        "<",
      );

      tl.from(
        themeHolderSpark,
        { clipPath: "inset(100% 0% 0% 0%)", duration: 0.1, ease: "power2.out" },
        "+=0.01",
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
    { scope: themeCellRef, dependencies: [ready] },
  );

  return (
    <div className="grid grid-cols-[2fr_1fr_2fr] items-center flex-1">
      {/* left cell */}
      <div ref={isLeft ? hologramCellRef : themeCellRef}>
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
      <div ref={!isLeft ? hologramCellRef : themeCellRef}>
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
