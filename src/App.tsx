import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";
import Hero from "./components/sections/hero";
import SplashScreen from "./components/splash/SplashScreen";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
	const [isFadingOut, setIsFadingOut] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsFadingOut(true);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<main>
			<Hero />
			<div
				className="fixed inset-0 z-50 transition-opacity duration-800"
				style={{ opacity: isFadingOut ? 0 : 1 }}
			>
				<SplashScreen />
			</div>
		</main>
	);
}
