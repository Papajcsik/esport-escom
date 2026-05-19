import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./components/sections/hero";

type Props = {};

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage({}: Props) {
	return (
		<main>
			<Hero />
		</main>
	);
}
