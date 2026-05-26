import { images } from "@/lib/imageMap";

export function Header() {
	return (
		<header className="sticky top-0 z-50 flex items-center justify-between backdrop-blur-sm">
			<img src={images.headerBackground} />
		</header>
	);
}
