import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { lazy, Suspense, useEffect, useState } from "react";
import Background from "./components/Background";
import Footer from "./components/navigation/Footer";
import { Header } from "./components/navigation/Header";
import { MusicPlayer } from "./components/MusicPlayer";
import { HeroSection } from "./components/sections/HeroSection";
import { ParallaxSection } from "./components/sections/ParallaxSection";
import { SplashScreen } from "./components/SplashScreen";
import { cn } from "./lib/utils";
import type { FaqTab } from "./pages/faq/index";
import type { WhatIsEscomTab } from "./pages/what-is-escom/index";
import type { PageId } from "./types/types";

const ComicBookPage = lazy(()=>import("./pages/comic-book/index"));
const FaqPage = lazy(()=>import("./pages/faq/index"));
const GamingStorePage = lazy(()=>import("./pages/gaming-store/index"));
const MainNewsPage = lazy(()=>import("./pages/main-news/index"));
const MerchandisePage = lazy(()=>import("./pages/merchandise/index"));
const SupportPage = lazy(()=>import("./pages/support/index"));
const WhatIsEscomPage = lazy(()=>import("./pages/what-is-escom/index"));

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
  const [activePage, setActivePage] = useState<PageId | null>(null);
  const [faqTab, setFaqTab] = useState<FaqTab>("faq");
  const [escomTab, setEscomTab] = useState<WhatIsEscomTab>("contractors");
  const [scrollTarget, setScrollTarget] = useState<string | undefined>(undefined);
  const [readMoreTrigger, setReadMoreTrigger] = useState(0);
  const [firstRender, setFirstRender] = useState(true); // useState is a must because there is some strange race condition.

  useEffect(() => {
    // Skip initial page load mount scroll
    if (firstRender) {
      setFirstRender(false);
      return;
    }

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
    const target = anchor || "your-time-your-game";
    setScrollTarget(target);
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
              <WhatIsEscomPage key={`${scrollTarget}-${readMoreTrigger}`} scrollTo={scrollTarget} />
            ) : (
            <Suspense fallback={null}>
              <ActivePageComponent />
            </Suspense>
            )}
          </div>
        )}
        <div className={cn(activePage && "hidden")}>
          <Background onReadMore={handleReadMore} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
