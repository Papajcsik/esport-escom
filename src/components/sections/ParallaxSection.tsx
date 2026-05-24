import { images } from "@/lib/imageMap";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export function ParallaxSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const skyRef = useRef<HTMLImageElement>(null);
	const groundRef = useRef<HTMLDivElement>(null);
	const contractorRef = useRef<HTMLImageElement>(null);
	const doorLeftRef = useRef<HTMLImageElement>(null);
	const doorRightRef = useRef<HTMLImageElement>(null);
	const robotRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.set(groundRef.current, { y: "100%" });
			gsap.set(contractorRef.current, { xPercent: -120 });
			gsap.set(robotRef.current, { opacity: 0 });

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
				.to(groundRef.current, { y: "0%", ease: "power2.out" }, 0.05)
				.to(contractorRef.current, { xPercent: 0, ease: "power2.out" }, 0.3)
				.to(doorLeftRef.current, { xPercent: -100, ease: "power2.inOut" }, 0.55)
				.to(doorRightRef.current, { xPercent: 100, ease: "power2.inOut" }, 0.55)
				.to(robotRef.current, { opacity: 1, ease: "power2.out" }, 0.65);
		}, sectionRef.current!);

		return () => ctx.revert();
	}, []);

	return (
		<>
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

				<div ref={groundRef} className="absolute inset-0">
					<img
						src={images.city}
						alt="city"
						className="absolute bottom-0 left-0 h-[clamp(280px,28vw,360px)] w-full object-cover object-bottom"
					/>

					<div className="absolute left-1/2 -translate-x-1/2 bottom-[230px]">
						<div className="relative h-[40rem] w-[48rem]">
							<img
								ref={robotRef}
								src={images.robot}
								alt="robot"
								className="abs-center h-[34rem] w-[40rem] opacity-0"
							/>

							<div className="abs-center h-[28rem] w-[25.5rem] translate-y-[calc(-50%+4rem)]!">
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

							<img
								src={images.arch}
								alt="arch"
								className="abs-center h-[40rem] w-[48rem]"
							/>
						</div>
					</div>
				</div>

				<img
					ref={contractorRef}
					src={images.contractor}
					alt="contractor"
					className="absolute bottom-0 left-0 w-100"
				/>
			</section>
			<div className="min-h-[3400px] border w-full"></div>
		</>
	);
}
