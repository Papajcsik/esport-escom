import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { backgroundImages } from "@/lib/imageMap";
import type { Triangle } from "@/types/types";

interface MechanicProps {
  triangle: Triangle;
  duration: number;
}

export default function Mechanic({ triangle, duration }: MechanicProps) {
  const groupRef = useRef<SVGGElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const isVisibleRef = useRef(true);

  useGSAP(
    () => {
      const element = groupRef.current;
      if (!element) return;

      // Returns a whole number from 0 to the length of the triangle array
      const index = Math.floor(Math.random() * triangle.length);
      gsap.set(element, { x: triangle[index].x, y: triangle[index].y });

      const animate = () => {
        const nextIndex = Math.floor(Math.random() * triangle.length);
        const nextPoint = triangle[nextIndex];

        const tl = gsap.timeline({ onComplete: animate, delay: 20 }).to(element, {
          x: nextPoint.x,
          y: nextPoint.y,
          duration,
          ease: "power2.inOut",
        });

        tlRef.current = tl;
        if (!isVisibleRef.current) tl.pause();
      };

      animate();

      const observer = new IntersectionObserver(([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          tlRef.current?.play();
        } else {
          tlRef.current?.pause();
        }
      });
      observer.observe(element);

      return () => observer.disconnect();
    },
    { dependencies: [triangle, duration] },
  );

  return (
    <g ref={groupRef}>
      <image
        href={backgroundImages.mechanic}
        x={-81}
        y={-45}
        width={162}
        height={89}
      />
    </g>
  );
}
