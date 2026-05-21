import Arch from "./Arch";

export function UnderHero() {
	return (
		<section className="relative flex-1 overflow-hidden min-h-screen">
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
