import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useEffect, useState } from "react";
import Background from "./components/Background";
import Footer from "./components/navigation/Footer";
import { Header } from "./components/navigation/Header";
import { MusicPlayer } from "./components/MusicPlayer";
import { HeroSection } from "./components/sections/HeroSection";
import { ParallaxSection } from "./components/sections/ParallaxSection";
import { SplashScreen } from "./components/SplashScreen";
import { siteConfig } from "./lib/config";
import { cn } from "./lib/utils";
import ComicBookPage from "./pages/comic-book/index";
import FaqPage from "./pages/faq/index";
import type { FaqTab } from "./pages/faq/index";
import GamingStorePage from "./pages/gaming-store/index";
import MainNewsPage from "./pages/main-news/index";
import MerchandisePage from "./pages/merchandise/index";
import SupportPage from "./pages/support/index";
import WhatIsEscomPage from "./pages/what-is-escom/index";
import type { WhatIsEscomTab } from "./pages/what-is-escom/index";
import type { PageId } from "./types/types";

gsap.registerPlugin(ScrollTrigger, SplitText);

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
  const [faqTab, setFaqTab] = useState<FaqTab>("faq");
  const [escomTab, setEscomTab] = useState<WhatIsEscomTab>("contractors");
  const [scrollTarget, setScrollTarget] = useState<string | undefined>(undefined);
  const [readMoreTrigger, setReadMoreTrigger] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
    }, siteConfig.splashScreenDurationInSeconds * 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!activePage) {
      const el = document.getElementById("page-content");
      if (el) {
        el.scrollIntoView({ behavior: "instant", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      const id = setTimeout(() => ScrollTrigger.refresh(), 150);
      return () => clearTimeout(id);
    }
  }, [activePage]);

  function handleNavigate(pageId: PageId | null) {
    if (pageId === null || activePage === pageId) {
      setActivePage(null);
      setFaqTab("faq");
      setEscomTab("contractors");
    } else {
      if (pageId !== "faq") setFaqTab("faq");
      if (pageId !== "what-is-escom") setEscomTab("contractors");
      setActivePage(pageId);
    }
  }

  function handleReadMore(anchor?: string) {
    setScrollTarget(anchor);
    setReadMoreTrigger(t => t + 1);
    setActivePage("what-is-escom");
  }

  const ActivePageComponent = activePage ? pageComponents[activePage] : null;

  return (
    <main>
      <SplashScreen />
      <HeroSection />
      <ParallaxSection />
      <MusicPlayer startPlaying={true} />
      <Header
        onNavigate={handleNavigate}
        activePage={activePage}
        faqTab={faqTab}
        onFaqTabChange={setFaqTab}
        escomTab={escomTab}
        onEscomTabChange={setEscomTab}
        readMoreTrigger={readMoreTrigger}
      />

      <div id="page-content" className="relative" style={{ backgroundColor: "#220313" }}>
        {ActivePageComponent && (
          <div className="relative z-10">
            {activePage === "faq" ? (
              <FaqPage activeTab={faqTab} />
            ) : activePage === "what-is-escom" ? (
              <WhatIsEscomPage scrollTo={scrollTarget} />
            ) : (
              <ActivePageComponent />
            )}
          </div>
        )}
        <div className={cn(activePage && "hidden")}>
          <Background onReadMore={handleReadMore} />
        </div>
      </div>

      {!ActivePageComponent && (
        <div
          className={cn(
            "fixed inset-0 z-50 transition-opacity duration-800",
            isFadingOut && "pointer-events-none",
          )}
          style={{ opacity: isFadingOut ? 0 : 1 }}
        >
          <SplashScreen />
        </div>
      )}
      <Footer />
    </main>
  );
}
