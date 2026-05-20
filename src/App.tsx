import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";
import Hero from "./components/sections/hero";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
	"/images/sky.webp",
	"/images/city.webp",
	"/images/contractor.webp",
	"/images/robot.webp",
	"/images/arch.webp",
	"/images/door-left.webp",
	"/images/door-right.webp",
	"/images/header-background.webp",
	"/images/logo.webp",
	"/images/button-on.webp",
	"/images/button-off.webp",
	"/images/google-play.webp",
];

function preloadImages(srcs: string[]): Promise<void> {
	return new Promise((resolve) => {
		if (srcs.length === 0) {
			resolve();
			return;
		}
		let loaded = 0;
		srcs.forEach((src) => {
			const img = new Image();
			img.onload = () => {
				loaded++;
				if (loaded === srcs.length) resolve();
			};
			img.onerror = () => {
				loaded++;
				if (loaded === srcs.length) resolve();
			};
			img.src = src;
		});
	});
}

export default function LandingPage() {
	const [showSplash, setShowSplash] = useState(true);

	useEffect(() => {
		Promise.all([preloadImages(IMAGES), document.fonts.ready]).then(() => {
			setTimeout(() => {
				requestAnimationFrame(() => {
					setShowSplash(false);
				});
			}, 1000);
		});
	}, []);

	return (
		<main>
			<Hero />
			<div
				className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c0006] transition-opacity duration-700"
				style={{
					opacity: showSplash ? 1 : 0,
					pointerEvents: showSplash ? "auto" : "none",
				}}
			>
				<img
					src="/images/logo.webp"
					alt="ESCOM"
					className="h-24 w-auto animate-pulse"
				/>
			</div>
		</main>
	);
}
