import { cn } from "@/lib/utils";

export type WhatIsEscomTab =
	| "contractors"
	| "asteroid-attack"
	| "escom-initiative"
	| "eula";

type Props = {
	activeTab?: WhatIsEscomTab;
};

export default function WhatIsEscomPage({
	activeTab = "contractors",
}: Props) {
	return (
		<div className="min-h-screen px-6 py-8 md:px-12 lg:px-24 pt-16">
			<div>
				{/* Page Title */}
				<h1
					className={cn(
						"text-center text-white font-bold text-2xl md:text-3xl uppercase tracking-wider mb-10",
						"border-b border-orange-500/40 pb-4",
					)}
				>
					WHAT IS{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
						ESCOM
					</span>{" "}
					?
				</h1>

				{/* Contractors Tab */}
				{activeTab === "contractors" && (
					<div className="flex flex-col gap-14 animate-[fadeIn_0.4s_ease-out]">
						{/* Section: Your time, your game */}
						<section className="relative overflow-hidden">
							<img
								src="/images/background/mobile-game.png"
								alt=""
								className="absolute right-0 bottom-0 w-[500px] md:w-[600px] h-auto object-contain opacity-30 pointer-events-none"
							/>
							<div className="relative z-10 p-6 md:p-8">
								<h2 className="text-orange-400 font-bold text-xl md:text-2xl mb-6 uppercase tracking-wide border-b border-orange-500/40 pb-3">
									Your time, your game
								</h2>

								<div className="flex flex-col gap-4">
									<p className="text-white/80 text-sm md:text-base leading-relaxed">
										ESCOM — is a mobile game packed with fast-paced,
										challenging logic puzzles. You choose the difficulty of
										each challenge—the greater the risk, the greater the
										reward. Your performance determines your position on
										both competitive leaderboards and the global rankings.
									</p>
									<p className="text-white/80 text-sm md:text-base leading-relaxed">
										The game also features a community-driven RPG layer.
										Every challenge you complete contributes to a shared
										objective that influences the entire community and
										shapes the outcome of each monthly endgame event.
										Together, players help build humanity's ultimate defense
										against the Centauri threat.
									</p>
									<p className="text-white/80 text-sm md:text-base leading-relaxed">
										Play on your own schedule. Each campaign lasts one
										month, culminating in a community-driven endgame event.
										There are no fixed playtimes or mandatory sessions—you
										decide when, how often, and how intensely you
										participate. Every contribution counts.
									</p>
									<p className="text-white/80 text-sm md:text-base leading-relaxed">
										Train for free. Compete for glory. Practice unlimited
										challenges at no cost, sharpen your logical thinking,
										and master the game at your own pace. When you're ready
										to prove yourself, use ESCoin to enter live ranked
										competitions, climb the leaderboards, and earn your
										place among the greatest Contractors of the Homeworld.
									</p>
								</div>
							</div>
						</section>

						{/* Section: Contractors */}
						<section className="relative overflow-hidden">
							<img
								src="/images/background/contractors.png"
								alt=""
								className="absolute right-0 bottom-0 w-[500px] md:w-[650px] h-auto object-contain opacity-30 pointer-events-none"
							/>
							<div className="relative z-10 p-6 md:p-8">
								<h2 className="text-orange-400 font-bold text-xl md:text-2xl mb-6 uppercase tracking-wide border-b border-orange-500/40 pb-3">
									Contractors
								</h2>

								<div className="flex flex-col gap-4">
									<p className="text-white/80 text-sm md:text-base leading-relaxed">
										The players of ESCOM are known as
										Contractors—22nd-century entrepreneurs who answered the
										call of the ESCOM Initiative and joined the alliance.
									</p>
									<p className="text-white/80 text-sm md:text-base leading-relaxed">
										Their shared mission is to supply the ESCOM Assembly
										Dome with the components needed to construct TITAN-01,
										the most advanced defensive machine ever created.
									</p>
									<p className="text-white/80 text-sm md:text-base leading-relaxed">
										Upon joining the Initiative, Contractors reconfigure
										their existing industrial facilities for ESCOM
										production and establish a connection to the Hyper
										Train network.
									</p>
									<p className="text-white/80 text-sm md:text-base leading-relaxed">
										The Hyper Train transports all manufactured components
										to the Assembly Dome. Each delivery request costs 1
										ESCoin, the official cryptocurrency of the ESCOM
										ecosystem. Every shipment contributes to the
										construction effort, bringing humanity one step closer
										to defending the Homeworld.
									</p>
								</div>
							</div>
						</section>

						{/* Section: Threat from another Star */}
						<section className="relative overflow-hidden">
							<img
								src="/images/background/treath.png"
								alt=""
								className="absolute right-0 bottom-0 w-[450px] md:w-[550px] h-auto object-contain opacity-30 pointer-events-none"
							/>
							<div className="relative z-10 p-6 md:p-8">
								<h2 className="text-orange-400 font-bold text-xl md:text-2xl mb-6 uppercase tracking-wide border-b border-orange-500/40 pb-3">
									Threat from another Star
								</h2>

								<div className="flex flex-col gap-4">
									<p className="text-white/80 text-sm md:text-base leading-relaxed">
										Proxima Centauri — the nearest star to our solar
										system, a dim red dwarf lurking just 4.24 light-years
										away. For centuries, it was nothing more than a faint
										point of light in the night sky. But in the 22nd
										century, everything changed.
									</p>
									<p className="text-white/80 text-sm md:text-base leading-relaxed">
										Deep-space observation arrays detected anomalous
										signals originating from the Proxima system—signals
										that were unmistakably artificial. What followed was
										the arrival of the Centauri, a hostile alien species
										bent on harvesting Earth's resources.
									</p>
									<p className="text-white/80 text-sm md:text-base leading-relaxed">
										The first wave of asteroid bombardments shattered
										orbital infrastructure and devastated key cities across
										the globe. Governments collapsed under the pressure.
										From the ashes of the old world order, the Earth
										Security Command — ESCOM — was founded, uniting what
										remained of humanity's industrial and military might
										under one banner.
									</p>
								</div>
							</div>
						</section>
					</div>
				)}

				{/* Asteroid Attack Tab */}
				{activeTab === "asteroid-attack" && (
					<div className="flex flex-col gap-10 animate-[fadeIn_0.4s_ease-out]">
						<section className="relative overflow-hidden">
							<div className="relative z-10 p-6 md:p-8">
								<h2 className="text-orange-400 font-bold text-xl md:text-2xl mb-4 uppercase tracking-wide">
									Asteroid Attack
								</h2>
								<p className="text-white/80 text-sm md:text-base leading-relaxed">
									The Centauri weaponize asteroids, hurling them across the void
									of space toward Earth. These devastating attacks target
									critical infrastructure and population centers. As a
									Contractor, your production efforts directly contribute to
									building the planetary defense systems needed to intercept
									and neutralize these threats before they reach the surface.
								</p>
							</div>
						</section>
					</div>
				)}

				{/* ESCOM Initiative Tab */}
				{activeTab === "escom-initiative" && (
					<div className="flex flex-col gap-10 animate-[fadeIn_0.4s_ease-out]">
						<section className="relative overflow-hidden">
							<div className="relative z-10 p-6 md:p-8">
								<h2 className="text-orange-400 font-bold text-xl md:text-2xl mb-4 uppercase tracking-wide">
									The ESCOM Initiative
								</h2>
								<p className="text-white/80 text-sm md:text-base leading-relaxed">
									The ESCOM Initiative is humanity's united response to the
									Centauri threat. Formed from the remnants of Earth's
									governments and military forces, ESCOM coordinates global
									defense production, scientific research, and the
									construction of TITAN-01 — the most powerful defensive
									weapon ever conceived. Every Contractor plays a vital role
									in this effort.
								</p>
							</div>
						</section>
					</div>
				)}

				{/* EULA Tab */}
				{activeTab === "eula" && (
					<div className="flex flex-col gap-10 animate-[fadeIn_0.4s_ease-out]">
						<section className="relative overflow-hidden">
							<div className="relative z-10 p-6 md:p-8">
								<h2 className="text-orange-400 font-bold text-xl md:text-2xl mb-4 uppercase tracking-wide">
									End User License Agreement
								</h2>
								<pre className="text-white/70 text-sm md:text-base leading-relaxed whitespace-pre-wrap font-[inherit] m-0">
{`Last updated: June 2026

Please read this End User License Agreement ("Agreement") carefully before using the ESCOM application ("App").

1. ACCEPTANCE OF TERMS
By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree to these terms, do not use the App.

2. LICENSE GRANT
Subject to your compliance with this Agreement, ESCOM grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App for your personal, non-commercial use.

3. RESTRICTIONS
You agree not to:
• Copy, modify, or distribute the App
• Reverse engineer, decompile, or disassemble the App
• Use the App for any unlawful purpose
• Attempt to gain unauthorized access to any services or systems

4. INTELLECTUAL PROPERTY
All content, trademarks, and intellectual property in the App are owned by ESCOM and its licensors. You do not acquire any ownership rights by using the App.

5. CONTACT
For questions about this Agreement, please contact us through the Support page.`}
								</pre>
							</div>
						</section>
					</div>
				)}
			</div>
		</div>
	);
}
