import { images } from "@/lib/imageMap";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Props = {};

export function Header({}: Props) {
	const [isHeaderSticky, setIsHeaderSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const underHeroElement = document.querySelector(
				".relative.flex-1.overflow-hidden.min-h-screen",
			);
			if (underHeroElement) {
				const underHeroBottom = underHeroElement.getBoundingClientRect().bottom;
				setIsHeaderSticky(underHeroBottom <= 0);
			}
		};

		window.addEventListener("scroll", handleScroll);

		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"flex items-center justify-between transition-all",
				isHeaderSticky
					? "fixed top-0 left-0 right-0 z-50 backdrop-blur-sm translate-0"
					: "relative  -translate-y-15",
			)}
		>
			<img src={images.headerBackground} />
		</header>
	);
}
