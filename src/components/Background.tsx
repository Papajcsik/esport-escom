import { IMAGES } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Background() {
	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatDelay: 10,
			defaults: { ease: "sine.inOut" },
		});

		timeline.fromTo(
			"#background-lights",
			{ opacity: 0 },
			{ opacity: 1, duration: 3 },
		);

		timeline.to("#background-lights", { opacity: 0, duration: 7 });
	}, []);

	return (
		// <div className="relative w-full">
		//   <img
		//     src={images.backgroundTitan}
		//     alt="background titan"
		//     className="w-full h-auto block"
		//   />
		//   <img
		//     id="background-lights"
		//     src={images.backgroundLights}
		//     alt="background lights"
		//     className="absolute inset-0 w-full h-full"
		//   />
		// </div>
		<div className="relative w-full overflow-hidden aspect-4057/8400">
			<img
				src={IMAGES.backgroundTitan}
				alt="background titan"
				className="w-full h-auto block"
			/>
			<img
				id="background-lights"
				src={IMAGES.backgroundLights}
				alt="background lights"
				className="absolute top-0 left-0 w-full h-auto"
			/>
		</div>
	);
}
