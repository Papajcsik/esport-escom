import { IMAGES, menuItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { PageId } from "@/types/types";
import { SwitchButton } from "@/components/SwitchButton";
import type { FaqTab } from "@/pages/faq/index";
import type { WhatIsEscomTab } from "@/pages/what-is-escom/index";
import { useEffect, useRef, useState } from "react";

type Props = {
  onNavigate?: (pageId: PageId | null) => void;
  activePage?: PageId | null;
  faqTab?: FaqTab;
  onFaqTabChange?: (tab: FaqTab) => void;
  escomTab?: WhatIsEscomTab;
  onEscomTabChange?: (tab: WhatIsEscomTab) => void;
};

export function Header({ onNavigate, activePage, faqTab, onFaqTabChange, escomTab, onEscomTabChange }: Props) {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollLockUntil = useRef<number>(0);
  const hideHeaderTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Prevent animation flashes on initial sticky state
  useEffect(() => {
    if (isHeaderSticky) {
      const timer = setTimeout(() => setIsTransitionEnabled(true), 50);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setIsTransitionEnabled(false), 0);
      return () => clearTimeout(timer);
    }
  }, [isHeaderSticky]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const underHeroElement = document.querySelector(
        ".relative.flex-1.overflow-hidden.min-h-screen",
      );

      if (underHeroElement) {
        const underHeroBottom = underHeroElement.getBoundingClientRect().bottom;
        const atTopThreshold = 60;
        const offScreenThreshold = -300;

        let newSticky = isHeaderSticky;
        if (!isHeaderSticky && underHeroBottom <= offScreenThreshold) {
          newSticky = true;
        } else if (isHeaderSticky && underHeroBottom > atTopThreshold) {
          newSticky = false;
        }

        setIsHeaderSticky(newSticky);

        if (newSticky && !isMenuOpen) {
          if (!isHeaderSticky) {
            setIsHeaderHidden(true);
          } else {
            const scrollDelta = currentScrollY - lastScrollY.current;
            if (Date.now() > scrollLockUntil.current) {
              if (scrollDelta > 5) {
                setIsHeaderHidden(true);
              } else if (scrollDelta < -5) {
                setIsHeaderHidden(false);
              }
            }
          }
        }

        if (!newSticky) {
          setIsHeaderHidden(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen, isHeaderSticky]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleItemClick = (pageId: PageId | null) => {
    if (onNavigate) {
      onNavigate(pageId);
      setIsMenuOpen(false);

      const underHeroElement = document.querySelector(
        ".relative.flex-1.overflow-hidden.min-h-screen",
      );
      if (underHeroElement) {
        const headerOffset = 50;
        const offsetPosition =
          underHeroElement.getBoundingClientRect().bottom +
          window.scrollY -
          headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleEscomTabClick = (tab: WhatIsEscomTab) => {
    const element = document.getElementById(tab);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    onEscomTabChange?.(tab);

    setIsHeaderHidden(false);
    scrollLockUntil.current = Date.now() + 1000;
    if (hideHeaderTimeoutRef.current)
      clearTimeout(hideHeaderTimeoutRef.current);
    hideHeaderTimeoutRef.current = setTimeout(() => {
      setIsHeaderHidden(true);
    }, 1000);
  };

  return (
    <div className="relative w-full" style={{ backgroundColor: "#220313" }}>
      <div
        className="w-full flex justify-center overflow-hidden invisible pointer-events-none select-none"
        aria-hidden="true"
      >
        <img
          src={IMAGES.headerBackground}
          className="w-[180%] sm:w-[140%] md:w-full max-w-[180%] sm:max-w-[140%] md:max-w-full block shrink-0"
        />
      </div>

      <header
        className={cn(
          "flex items-center justify-between z-50",
          isHeaderSticky && isTransitionEnabled
            ? "transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            : "",
          isHeaderSticky
            ? "fixed top-0 left-0 right-0 backdrop-blur-sm"
            : "absolute inset-x-0 top-0 -translate-y-6 sm:-translate-y-10 md:-translate-y-15",
          isHeaderSticky && isHeaderHidden && "translate-y-[-200%]",
        )}
      >
        <div className="relative z-20 w-full flex justify-center items-center overflow-hidden pointer-events-none select-none">
          <img
            src={IMAGES.headerBackground}
            className="w-[180%] sm:w-[140%] md:w-full max-w-[180%] sm:max-w-[140%] md:max-w-full shrink-0 block"
          />
        </div>

        <button
          onClick={() => handleItemClick(null)}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-transparent border-none w-[20%] h-[80%] cursor-pointer"
          aria-label="Go to home page"
        >
          <span className="sr-only">Home</span>
        </button>

        <button
          onClick={toggleMenu}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 cursor-pointer bg-transparent border-none p-0"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <img
            src={isMenuOpen ? IMAGES.buttonOn : IMAGES.buttonOff}
            alt="Menu"
            className={cn(
              "object-contain transition-transform duration-300",
              isMenuOpen
                ? "w-10 sm:w-12 md:w-20 h-10 sm:h-12 md:h-20 hover:scale-110"
                : "w-10 sm:w-12 md:w-20 h-8 sm:h-10 md:h-16 hover:scale-110",
            )}
          />
        </button>

        <a
          href="https://play.google.com/store/apps/details?id=com.escom"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30"
        >
          <img
            src={IMAGES.googlePlay}
            alt="Get it on Google Play"
            className="h-8 sm:h-10 md:h-20 w-auto transition-transform duration-300 hover:scale-105"
          />
        </a>

        <nav
          className={cn(
            "absolute top-full -mt-2 sm:-mt-4 md:-mt-9 left-0 z-50 w-70 sm:w-85 md:w-100 overflow-hidden transition-all duration-400 ease-in-out",
            isMenuOpen
              ? "max-h-150 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none",
          )}
        >
          <div className="relative">
            <img
              src={IMAGES.hamburgerMenuBackground}
              alt=""
              className="absolute inset-0 w-full h-full object-fill"
            />

            <img
              src={IMAGES.hamburgerMenuOutside}
              alt=""
              className="absolute top-0 left-0 w-full h-full pointer-events-none object-fill"
            />

            <ul className="relative z-10 flex flex-col items-start gap-3 md:gap-4 pt-14 sm:pt-18 md:pt-24 pb-5 md:pb-8 pl-8 md:pl-10 pr-6 md:pr-8 list-none m-0">
              {/* Home button */}
              <li
                className={cn(
                  "w-full transition-all duration-500 ease-out",
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-8",
                )}
                style={{ transitionDelay: isMenuOpen ? "0ms" : "0ms" }}
              >
                <button
                  onClick={() => handleItemClick(null)}
                  className={cn(
                    "group relative block no-underline w-full text-left bg-transparent border-none p-0 cursor-pointer",
                    activePage === null && "scale-105",
                  )}
                >
                  <img
                    src={IMAGES.hamburgerMenuElementBackground}
                    alt=""
                    className={cn(
                      "w-full h-full object-fill transition-opacity duration-200",
                      activePage === null
                        ? "opacity-0"
                        : "group-hover:opacity-0",
                    )}
                  />
                  <img
                    src={IMAGES.hamburgerMenuElementHighlighted}
                    alt=""
                    className={cn(
                      "absolute inset-0 w-full h-full object-fill transition-opacity duration-200",
                      activePage === null
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100",
                    )}
                  />
                  <span className="absolute inset-0 flex items-center pl-5 md:pl-6 text-white-100 text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider">
                    HOME
                  </span>
                </button>
              </li>

              {/* Page items */}
              {menuItems.map((item, index) => (
                <li
                  key={item.label}
                  className={cn(
                    "w-full transition-all duration-500 ease-out",
                    isMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-8",
                  )}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${(index + 1) * 100}ms`
                      : "0ms",
                  }}
                >
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={cn(
                      "group relative block no-underline w-full text-left bg-transparent border-none p-0 cursor-pointer",
                      activePage === item.id && "scale-105",
                    )}
                  >
                    <img
                      src={IMAGES.hamburgerMenuElementBackground}
                      alt=""
                      className={cn(
                        "w-full h-full object-fill transition-opacity duration-200",
                        activePage === item.id
                          ? "opacity-0"
                          : "group-hover:opacity-0",
                      )}
                    />
                    <img
                      src={IMAGES.hamburgerMenuElementHighlighted}
                      alt=""
                      className={cn(
                        "absolute inset-0 w-full h-full object-fill transition-opacity duration-200",
                        activePage === item.id
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100",
                      )}
                    />
                    <span className="absolute inset-0 flex items-center pl-5 md:pl-6 text-white-100 text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider">
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* FAQ / EULA toggle buttons — shown only when FAQ page is active */}
        {activePage === "faq" && (
          <div className="absolute top-full left-0 right-0 z-40 -mt-2 md:-mt-4 flex items-center justify-center gap-8 sm:gap-24 md:gap-48 lg:gap-100 py-2 px-2">
            <SwitchButton
              label="F.A.Q."
              isActive={faqTab === "faq"}
              onClick={() => onFaqTabChange?.("faq")}
              flipped
              id="faq-tab-button"
            />
            <SwitchButton
              label="EULA"
              isActive={faqTab === "eula"}
              onClick={() => onFaqTabChange?.("eula")}
              id="eula-tab-button"
            />
          </div>
        )}

        {/* What is ESCOM toggle buttons */}
        {activePage === "what-is-escom" && (
          <div className="absolute top-full left-0 right-0 z-40 -mt-2 md:-mt-4 flex flex-wrap items-center justify-center gap-2 md:gap-6 lg:gap-10 py-2 px-2">
            <SwitchButton
              label="Contractors"
              isActive={escomTab === "contractors"}
              onClick={() => handleEscomTabClick("contractors")}
              flipped
              id="escom-contractors-button"
            />
            <SwitchButton
              label="Asteroid attack"
              isActive={escomTab === "asteroid-attack"}
              onClick={() => handleEscomTabClick("asteroid-attack")}
              flipped
              id="escom-asteroid-button"
            />
            <SwitchButton
              label="ESCOM Initiative"
              isActive={escomTab === "escom-initiative"}
              onClick={() => handleEscomTabClick("escom-initiative")}
              id="escom-initiative-button"
            />
            <SwitchButton
              label="Draft-list"
              isActive={escomTab === "draft-list"}
              onClick={() => handleEscomTabClick("draft-list")}
              id="escom-draft-list-button"
            />
          </div>
        )}
      </header>
    </div>
  );
}
