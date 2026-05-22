import { images } from "@/lib/imageMap";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Props = {};

export function Header({ }: Props) {
	const [isHeaderSticky, setIsHeaderSticky] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	return (
		<header
			className={cn(
				"flex items-center justify-between transition-all",
				isHeaderSticky
					? "fixed top-0 left-0 right-0 z-50 backdrop-blur-sm translate-0"
					: "relative  -translate-y-15",
			)}
		>
			<img src={images.headerBackground} className="relative z-20 w-full" />


			<button
				onClick={toggleMenu}
				className="absolute left-4 top-1/2 -translate-y-1/2 z-30 cursor-pointer bg-transparent border-none p-0"
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
			>
				<img
					src={isMenuOpen ? images.buttonOn : images.buttonOff}
					alt="Menu"
					className="w-16 h-14 transition-transform duration-300 hover:scale-110"
				/>
			</button>


			<a
				href="https://play.google.com/store/apps/details?id=com.escom"
				target="_blank"
				rel="noopener noreferrer"
				className="absolute right-4 top-1/2 -translate-y-1/2 z-30"
			>
				<img
					src={images.googlePlay}
					alt="Get it on Google Play"
					className="h-14 w-auto transition-transform duration-300 hover:scale-105"
				/>
			</a>


			<nav
				className={cn(
					"absolute top-full -mt-7 left-0 z-10 w-[280px] overflow-hidden transition-all duration-400 ease-in-out",
					isMenuOpen
						? "max-h-[600px] opacity-100"
						: "max-h-0 opacity-0 pointer-events-none",
				)}
			>
				<div className="relative">
					<img
						src={images.hamburgerMenuBackground}
						alt=""
						className="absolute inset-0 w-full h-full object-fill"
					/>

					<img
						src={images.hamburgerMenuOutside}
						alt=""
						className="absolute top-0 left-0 w-full h-full pointer-events-none object-fill"
					/>

					<ul className="relative z-10 flex flex-col items-start gap-2 pt-10 pb-6 pl-8 pr-6 list-none m-0">
						{[
							"WHAT IS ESCOM ?",
							"MAIN NEWS",
							"FAQ / EULA",
							"ESCOM COMIC BOOK",
							"MERCHANDISE",
							"SUPPORT",
							"GAMING STORE",
						].map((item) => (
							<li key={item} className="w-full">
								<a
									href={`#${item.toLowerCase().replace(/[\s\/\?]/g, "-")}`}
									onClick={toggleMenu}
									className="relative block no-underline"
								>
									<img
										src={images.hamburgerMenuElementBackground}
										alt=""
										className="w-full h-full object-fill"
									/>
									<span className="absolute inset-0 flex items-center pl-4 text-white-100 text-sm font-bold uppercase tracking-wider">
										{item}
									</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	);
}
