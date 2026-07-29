import { IMAGES } from "@/lib/constants";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export function ParallaxSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const skyRef = useRef<HTMLImageElement>(null);
	const middleLayerRef = useRef<HTMLImageElement>(null);
	const groundRef = useRef<HTMLDivElement>(null);
	const contractorRef = useRef<HTMLImageElement>(null);
	const doorLeftRef = useRef<HTMLImageElement>(null);
	const doorRightRef = useRef<HTMLImageElement>(null);
	const robotRef = useRef<HTMLImageElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const context = gsap.context(() => {
			gsap.set(skyRef.current, { scale: 1.12 });
			gsap.set(overlayRef.current, { transformOrigin: "top" });
			gsap.set(middleLayerRef.current, { y: "70%", scale: 1.12 });
			gsap.set(groundRef.current, { y: "100%", scale: 1.03 });
			gsap.set(contractorRef.current, { xPercent: -120 });
			gsap.set(robotRef.current, { opacity: 0 });

			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top top",
					end: "+=200%",
					pin: true,
					scrub: 1,
				},
			});

			timeline
				.to(skyRef.current, { scale: 1, ease: "none" }, 0)
				.to(overlayRef.current, { scaleY: 0, opacity: 0, ease: "none" }, 0)
				.to(middleLayerRef.current, { scale: 1, ease: "none" }, 0)
				.to(middleLayerRef.current, { y: "0%", ease: "power2.out" }, 0.08)
				.to(groundRef.current, { y: "0%", scale: 1, ease: "power2.out" }, 0.18)
				.to(contractorRef.current, { xPercent: 0, ease: "power2.out" }, 0.35)
				.to(doorLeftRef.current, { xPercent: -60, ease: "power2.inOut" }, 0.55)
				.to(doorRightRef.current, { xPercent: 60, ease: "power2.inOut" }, 0.55)
				.to(robotRef.current, { opacity: 1, ease: "power2.out" }, 0.65);
		}, sectionRef.current!);

		return () => context.revert();
	}, []);

	return (
		<>
			<section
				ref={sectionRef}
				className="relative flex-1 overflow-hidden min-h-screen bg-linear-to-b from-black to-transparent"
			>
				<img
					ref={skyRef}
					src={IMAGES.sky}
					alt="sky"
					className="absolute inset-x-0 top-0 h-[70vh] w-full object-cover object-[35%_center] md:h-full md:object-cover md:object-center"
					decoding="async"
				/>

				<div
					ref={overlayRef}
					className="absolute inset-x-0 top-0 h-60 -translate-y-2.5 bg-linear-to-b from-black via-black/50 to-transparent pointer-events-none z-10"
				/>

				<img
					ref={middleLayerRef}
					src={IMAGES.middleLayer}
					alt="middle layer"
					className="absolute bottom-0 inset-x-0 h-[95%] w-full object-cover object-bottom md:inset-0 md:h-full md:object-cover"
					decoding="async"
				/>

				<div ref={groundRef} className="absolute inset-0">
					<img
						src={IMAGES.city}
						alt="city"
						decoding="async"
						className="absolute bottom-0 left-0 h-[150vh] w-full object-cover object-bottom md:h-[clamp(17.5rem,28vw,22.5rem)]"
					/>

					<div className="absolute bottom-[22.5rem] md:bottom-[clamp(12rem,42vw,15.3125rem)] left-1/2 -translate-x-1/2 ">
						<div className="relative h-[clamp(18rem,78vw,38rem)] w-[clamp(20rem,92vw,46rem)]">
							<img
								ref={robotRef}
								src={IMAGES.robot}
								alt="robot"
								decoding="async"
								className="abs-center h-[clamp(12rem,52vw,26rem)] translate-y-[-35%] opacity-0"
							/>

							<div className="abs-center h-[clamp(13rem,56vw,28rem)] w-[clamp(12rem,51vw,25.5rem)] translate-y-[calc(-50%+clamp(2rem,8vw,4rem))]!">
								<img
									ref={doorLeftRef}
									src={IMAGES.doorLeft}
									alt="arch left"
									decoding="async"
									className="absolute left-0 h-full w-1/2 object-contain"
								/>
								<img
									ref={doorRightRef}
									src={IMAGES.doorRight}
									alt="arch right"
									decoding="async"
									className="absolute right-0 h-full w-1/2 object-contain"
								/>
							</div>

							<img
								src={IMAGES.arch}
								alt="arch"
								decoding="async"
								className="abs-center h-[clamp(19rem,80vw,40rem)] w-[clamp(22rem,96vw,48rem)]"
							/>
						</div>
					</div>
				</div>

				<img
					ref={contractorRef}
					src={IMAGES.contractor}
					alt="contractor"
					decoding="async"
					className="absolute bottom-0 left-0 w-[clamp(20rem,36vw,25rem)]"
				/>
			</section>
		</>
	);
}
