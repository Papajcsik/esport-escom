import Arch from "./Arch";

export function ParallaxSection() {
	return (
		<section className="relative flex-1 overflow-hidden min-h-screen bg-linear-to-b from-black to-transparent">
			<img
				src="/images/sky.webp"
				alt="sky"
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<img
				src="/images/city.webp"
				alt="city"
				className="absolute bottom-0 left-0 h-[clamp(280px,28vw,360px)] w-full object-cover object-bottom"
			/>
			<Arch />
			<img
				src="/images/contractor.webp"
				alt="contractor"
				className="absolute bottom-0 left-0 size-100"
			/>
		</section>
	);
}
