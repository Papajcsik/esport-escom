import { images } from "@/lib/imageMap";

export function Header() {
	return (
		<header className="sticky top-0 z-50 flex items-center justify-between backdrop-blur-sm bg-[#0c0006]">
			<img
				src={images.headerBackground}
				className="w-full h-full object-cover"
			/>
		</header>
	);
}
