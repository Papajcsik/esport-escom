import { images } from "@/lib/imageMap";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Header() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const threshold = window.innerHeight * 4.5;
			setIsVisible(window.scrollY > threshold);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-700",
				isVisible
					? "translate-y-0 opacity-100 backdrop-blur-sm"
					: "translate-y-full opacity-0",
			)}
		>
			<img src={images.headerBackground} />
		</header>
	);
}
