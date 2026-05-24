import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";
import Background from "./components/Background";
import { Header } from "./components/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { ParallaxSection } from "./components/sections/ParallaxSection";
import { SplashScreen } from "./components/SplashScreen";
import { siteConfig } from "./lib/config";
import { cn } from "./lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
	const [isFadingOut, setIsFadingOut] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsFadingOut(true);
		}, siteConfig.splashScreenDurationInSeconds * 1000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<main>
			<HeroSection />
			<ParallaxSection />
			<Header />
			<Background />
			{/* <div
				className={cn(
					"fixed inset-0 z-50 transition-opacity duration-800",
					isFadingOut && "pointer-events-none",
				)}
				style={{ opacity: isFadingOut ? 0 : 1 }}
			>
				<SplashScreen />
			</div> */}
		</main>
	);
}
