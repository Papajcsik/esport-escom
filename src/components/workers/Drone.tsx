import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { backgroundImages } from "@/lib/imageMap";
import type { Triangle } from "@/types/types";

interface DroneProps {
  triangle: Triangle;
  duration: number;
  weldDuration: number;
}

export default function Drone({
  triangle,
  duration,
  weldDuration,
}: DroneProps) {
  const groupRef = useRef<SVGGElement>(null);
  const sparksRef = useRef<SVGImageElement>(null);

  useGSAP(
    () => {
      const element = groupRef.current;
      const sparks = sparksRef.current;
      if (!element || !sparks) return;

      gsap.set(element, { x: triangle[0].x, y: triangle[0].y });
      gsap.set(sparks, { opacity: 0, scale: 1 });

      const animate = () => {
        // Returns a whole number from 0 to the length of the triangle array
        const nextIndex = Math.floor(Math.random() * triangle.length);
        const nextPoint = triangle[nextIndex];

        gsap
          .timeline({ onComplete: animate })
          .to(element, {
            x: nextPoint.x,
            y: nextPoint.y,
            duration,
            ease: "power2.inOut",
          })
          .to(sparks, { opacity: 1, duration: 0.05 })
          .to(sparks, {
            opacity: 0.2,
            scale: 1.4,
            transformOrigin: "50% 50%",
            duration: 0.1,
            repeat: Math.floor(weldDuration / 0.2), // the number of times the sparks should appear during the weld duration
            yoyo: true,
            ease: "none",
          })
          .to(sparks, { opacity: 0, scale: 1, duration: 0.05 });
      };

      animate();
    },
    { dependencies: [triangle, duration, weldDuration] },
  );

  return (
    <g ref={groupRef}>
      <image
        href={backgroundImages.weldingDrone}
        x={-65}
        y={-35}
        width={130}
        height={71}
      />
      <image
        ref={sparksRef}
        href={backgroundImages.weldingSparks}
        x={-116}
        y={-55}
        width={130}
        height={71}
      />
    </g>
  );
}

// welding sparks is -51 from the welding drone x
// welding sparks is -20 from the welding drone y
