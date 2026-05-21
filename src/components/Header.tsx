import { images } from "@/lib/imageMap";
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
			className={`
        flex items-center justify-between px-6 py-4
        ${
					isHeaderSticky
						? "fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
						: "relative"
				}
      `}
		>
			<img src={images.headerBackground} />
		</header>
	);
}
