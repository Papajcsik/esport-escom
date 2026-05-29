import { images } from "@/lib/imageMap";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export type PageId =
	| "what-is-escom"
	| "main-news"
	| "faq"
	| "comic-book"
	| "merchandise"
	| "support"
	| "gaming-store";

export const menuItems: { label: string; id: PageId }[] = [
	{ label: "WHAT IS ESCOM ?", id: "what-is-escom" },
	{ label: "MAIN NEWS", id: "main-news" },
	{ label: "FAQ / EULA", id: "faq" },
	{ label: "ESCOM COMIC BOOK", id: "comic-book" },
	{ label: "MERCHANDISE", id: "merchandise" },
	{ label: "SUPPORT", id: "support" },
	{ label: "GAMING STORE", id: "gaming-store" },
];

type Props = {
	onNavigate?: (pageId: PageId) => void;
	activePage?: PageId | null;
};

export function Header({ onNavigate, activePage }: Props) {
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

	const handleItemClick = (item: { label: string; id: PageId }) => {
		if (onNavigate) {
			onNavigate(item.id);
			setIsMenuOpen(false);
		}
	};

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
					className={cn(
						"object-contain transition-transform duration-300",
						isMenuOpen ? "w-20 h-20 hover:scale-110" : "w-20 h-16 hover:scale-110"
					)}
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
					"absolute top-full -mt-9 left-0 z-10 w-[400px] overflow-hidden transition-all duration-400 ease-in-out",
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

					<ul className="relative z-10 flex flex-col items-start gap-4 pt-24 pb-8 pl-10 pr-8 list-none m-0">
						{menuItems.map((item, index) => (
							<li
								key={item.label}
								className={cn(
									"w-full transition-all duration-500 ease-out",
									isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
								)}
								style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms" }}
							>
								<button
									onClick={() => handleItemClick(item)}
									className={cn(
										"group relative block no-underline w-full text-left bg-transparent border-none p-0 cursor-pointer",
										activePage === item.id && "scale-105"
									)}
								>
									<img
										src={images.hamburgerMenuElementBackground}
										alt=""
										className={cn(
											"w-full h-full object-fill transition-opacity duration-200",
											activePage === item.id ? "opacity-0" : "group-hover:opacity-0"
										)}
									/>
									<img
										src={images.hamburgerMenuElementHighlighted}
										alt=""
										className={cn(
											"absolute inset-0 w-full h-full object-fill transition-opacity duration-200",
											activePage === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
										)}
									/>
									<span className="absolute inset-0 flex items-center pl-6 text-white-100 text-lg font-bold uppercase tracking-wider">
										{item.label}
									</span>
								</button>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	);
}
