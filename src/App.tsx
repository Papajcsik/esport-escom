import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Background from "./components/Background";
import { Header } from "./components/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { ParallaxSection } from "./components/sections/ParallaxSection";
import { SplashScreen } from "./components/SplashScreen";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
	return (
		<>
			<SplashScreen />
			<HeroSection />
			<ParallaxSection />
			<Header />
			<Background />
		</>
	);
}
