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

  useGSAP(
    () => {
      const element = groupRef.current;
      if (!element) return;

      gsap.set(element, { x: triangle[0].x, y: triangle[0].y });

      const animate = () => {
        // Returns a whole number from 0 to the length of the triangle array
        const nextIndex = Math.floor(Math.random() * triangle.length);
        const nextPoint = triangle[nextIndex];

        gsap.timeline({ onComplete: animate }).to(element, {
          x: nextPoint.x,
          y: nextPoint.y,
          duration,
          ease: "power2.inOut",
        });
      };

      //animate();
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
