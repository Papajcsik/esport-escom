import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Background from "./components/Background";
import { Header } from "./components/Header";
import type { PageId } from "./components/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { ParallaxSection } from "./components/sections/ParallaxSection";
import { SplashScreen } from "./components/SplashScreen";
import { siteConfig } from "./lib/config";
import { cn } from "./lib/utils";
import ComicBookPage from "./pages/comic-book/index";
import FaqPage from "./pages/faq/index";
import GamingStorePage from "./pages/gaming-store/index";
import MainNewsPage from "./pages/main-news/index";
import MerchandisePage from "./pages/merchandise/index";
import SupportPage from "./pages/support/index";
import WhatIsEscomPage from "./pages/what-is-escom/index";

gsap.registerPlugin(ScrollTrigger);

const pageComponents: Record<PageId, React.FC> = {
	"what-is-escom": WhatIsEscomPage,
	"main-news": MainNewsPage,
	faq: FaqPage,
	"comic-book": ComicBookPage,
	merchandise: MerchandisePage,
	support: SupportPage,
	"gaming-store": GamingStorePage,
};

export default function LandingPage() {
	const [isFadingOut, setIsFadingOut] = useState(false);
	const [activePage, setActivePage] = useState<PageId | null>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsFadingOut(true);
		}, siteConfig.splashScreenDurationInSeconds * 1000);
		return () => clearTimeout(timer);
	}, []);

	const handleNavigate = (pageId: PageId | null) => {
		// null = home, same page = toggle off, different page = switch
		if (pageId === null || activePage === pageId) {
			setActivePage(null);
		} else {
			setActivePage(pageId);
		}
	};

	const ActivePageComponent = activePage ? pageComponents[activePage] : null;

	return (
		<>
			<SplashScreen />
			<HeroSection />
			<ParallaxSection />
			<Header onNavigate={handleNavigate} activePage={activePage} />

			{ActivePageComponent ? (
				<ActivePageComponent />
			) : (
				<div className="min-h-screen border">test</div>
			)}

			<div
				className={cn(
					"fixed inset-0 z-50 transition-opacity duration-800",
					isFadingOut && "pointer-events-none",
				)}
				style={{ opacity: isFadingOut ? 0 : 1 }}
			>
				<SplashScreen />
			</div>
		</main >
	);
}
