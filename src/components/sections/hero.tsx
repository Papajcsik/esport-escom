import { images } from "@/lib/imageMap";

type Props = {};

export function Hero({}: Props) {
	return (
		<div
			style={{
				backgroundImage: `url(${images.escomHeroBattle})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
			className="w-full min-h-screen flex flex-col gap-5 items-center justify-center object-contain"
		>
			<div className="text-orange-500 text-2xl font-bold">WELCOME TO</div>
			<div className="flex items-center justify-center flex-col">
				<img src={images.escomLogo} />
				<span className="text-orange-500 text-xl font-semibold">
					SCROLL DOWN TO
				</span>
				<span className="font-white text-6xl font-bold my-4">INITIALIZE</span>
				<img src={images.polygon} className="mt-10" />
			</div>
		</div>
	);
}
