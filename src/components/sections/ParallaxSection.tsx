import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { images } from "@/lib/imageMap";

export function ParallaxSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const skyRef = useRef<HTMLImageElement>(null);
	const cityRef = useRef<HTMLImageElement>(null);
	const archRef = useRef<HTMLImageElement>(null);
	const contractorRef = useRef<HTMLImageElement>(null);
	const doorLeftRef = useRef<HTMLImageElement>(null);
	const doorRightRef = useRef<HTMLImageElement>(null);
	const robotRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.set(cityRef.current, { y: "100%" });
			gsap.set(archRef.current, { scale: 0.8, opacity: 0 });
			gsap.set(contractorRef.current, { xPercent: -120 });
			gsap.set(robotRef.current, { scale: 0 });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top top",
					end: "+=500%",
					pin: true,
					scrub: 1,
				},
			});

			tl.to(skyRef.current, { scale: 1.08, ease: "none" }, 0)
				.to(cityRef.current, { y: "0%", ease: "power2.out" }, 0.05)
				.to(archRef.current, { scale: 1, opacity: 1, ease: "power2.out" }, 0.05)
				.to(contractorRef.current, { xPercent: 0, ease: "power2.out" }, 0.3)
				.to(doorLeftRef.current, { xPercent: -100, ease: "power2.inOut" }, 0.55)
				.to(doorRightRef.current, { xPercent: 100, ease: "power2.inOut" }, 0.55)
				.to(robotRef.current, { scale: 1, ease: "back.out(2)" }, 0.7);
		}, sectionRef.current);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="relative flex-1 overflow-hidden min-h-screen bg-linear-to-b from-black to-transparent"
		>
			<img
				ref={skyRef}
				src={images.sky}
				alt="sky"
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<img
				ref={cityRef}
				src={images.city}
				alt="city"
				className="absolute bottom-0 left-0 h-[clamp(280px,28vw,360px)] w-full object-cover object-bottom"
			/>
			<img
				ref={contractorRef}
				src={images.contractor}
				alt="contractor"
				className="absolute bottom-0 left-0 size-100"
			/>
			<img
				ref={robotRef}
				src={images.robot}
				alt="robot"
				className="abs-center h-70 w-84 scale-0"
			/>
			<img
				ref={archRef}
				src={images.arch}
				alt="arch"
				className="abs-center h-82 w-96"
			/>
			<div className="abs-center h-56 w-51 translate-y-[calc(-50%+2rem)]!">
				<img
					ref={doorLeftRef}
					src={images.doorLeft}
					alt="arch left"
					className="absolute left-0 h-full w-1/2 object-contain"
				/>
				<img
					ref={doorRightRef}
					src={images.doorRight}
					alt="arch right"
					className="absolute right-0 h-full w-1/2 object-contain"
				/>
			</div>
		</section>
	);
}
