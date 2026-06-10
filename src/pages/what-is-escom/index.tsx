import { cn } from "@/lib/utils";

export type WhatIsEscomTab =
	| "contractors"
	| "asteroid-attack"
	| "escom-initiative"
	| "draft-list";

export default function WhatIsEscomPage() {
	return (
		<div className="min-h-screen px-6 py-8 md:px-12 lg:px-24 pt-16">
			<div>
				{/* Page Title */}
				<h1
					className={cn(
						"text-center text-white font-bold text-6xl md:text-8xl uppercase tracking-wider mb-10",
						"border-b border-orange-500/40 pb-4",
					)}
				>
					WHAT IS{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
						ESCOM
					</span>{" "}
					?
				</h1>

				<div className="flex flex-col gap-24 animate-[fadeIn_0.4s_ease-out]">
					{/* Section: Your time, your game */}
					<section className="relative">
						<img
							src="/images/background/mobile-game.png"
							alt=""
							className="absolute right-0 top-16 w-[600px] md:w-[700px] h-auto object-contain opacity-30 pointer-events-none"
						/>
						<div className="relative z-10 p-6 md:p-8">
							<h2 className="text-orange-400 font-bold text-4xl md:text-6xl mb-6 uppercase tracking-wide border-b border-orange-500/40 pb-3">
								Your time, your game
							</h2>

							<div className="flex flex-col gap-4 max-w-[60%]">
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									ESCOM — is a mobile game packed with fast-paced,
									challenging logic puzzles. You choose the difficulty of
									each challenge—the greater the risk, the greater the
									reward. Your performance determines your position on
									both competitive leaderboards and the global rankings.
								</p>
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									The game also features a community-driven RPG layer.
									Every challenge you complete contributes to a shared
									objective that influences the entire community and
									shapes the outcome of each monthly endgame event.
									Together, players help build humanity's ultimate defense
									against the Centauri threat.
								</p>
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									Play on your own schedule. Each campaign lasts one
									month, culminating in a community-driven endgame event.
									There are no fixed playtimes or mandatory sessions—you
									decide when, how often, and how intensely you
									participate. Every contribution counts.
								</p>
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
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
					<section id="contractors" className="relative pb-128">
						<img
							src="/images/background/contractors.png"
							alt=""
							className="absolute right-0 top-16 w-[600px] md:w-[750px] h-auto object-contain opacity-30 pointer-events-none"
						/>
						<div className="relative z-10 p-6 md:p-8">
							<h2 className="text-orange-400 font-bold text-4xl md:text-6xl mb-6 uppercase tracking-wide border-b border-orange-500/40 pb-3">
								Contractors
							</h2>

							<div className="flex flex-col gap-4 max-w-[60%]">
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									The players of ESCOM are known as
									Contractors—22nd-century entrepreneurs who answered the
									call of the ESCOM Initiative and joined the alliance.
								</p>
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									Their shared mission is to supply the ESCOM Assembly
									Dome with the components needed to construct TITAN-01,
									the most advanced defensive machine ever created.
								</p>
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									Upon joining the Initiative, Contractors reconfigure
									their existing industrial facilities for ESCOM
									production and establish a connection to the Hyper
									Train network.
								</p>
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
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
					<section id="asteroid-attack" className="relative pb-128 ">
						<img
							src="/images/background/treath.png"
							alt=""
							className="absolute right-0 top-16 w-[550px] md:w-[650px] h-auto object-contain opacity-30 pointer-events-none"
						/>
						<div className="relative z-10 p-6 md:p-8">
							<h2 className="text-orange-400 font-bold text-4xl md:text-6xl mb-6 uppercase tracking-wide border-b border-orange-500/40 pb-3">
								Threat from another Star
							</h2>

							<div className="flex flex-col gap-4 max-w-[60%]">
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									Proxima Centauri — the nearest star to our solar
									system, a dim red dwarf lurking just 4.24 light-years
									away. For centuries, it was nothing more than a faint
									point of light in the night sky. But in the 22nd
									century, everything changed.
								</p>
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									Deep-space observation arrays detected anomalous
									signals originating from the Proxima system—signals
									that were unmistakably artificial. What followed was
									the arrival of the Centauri, a hostile alien species
									bent on harvesting Earth's resources.
								</p>
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
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

					{/* Section: ESCOM's defender */}
					<section id="escom-initiative" className="relative pb-128">
						<img
							src="/images/background/escom-initiative.png"
							alt=""
							className="absolute right-0 top-16 w-[600px] md:w-[750px] h-auto object-contain opacity-30 pointer-events-none"
						/>
						<div className="relative z-10 p-6 md:p-8">
							<h2 className="text-orange-400 font-bold text-4xl md:text-6xl mb-6 uppercase tracking-wide border-b border-orange-500/40 pb-3">
								ESCOM's defender
							</h2>

							<div className="flex flex-col gap-4 max-w-[60%]">
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									Under the leadership of the W.A.R.D. Directorate and a coalition of allied corporations, construction of the ESCOM Assembly Dome is already underway.
									Within this colossal facility, humanity's greatest defense is taking shape: TITAN-01, a gigantic combat mech built with cutting-edge 22nd-century technology. Designed to stand against the Cen		tauri threat, TITAN-01 represents the combined effort of countless Contractors, engineers, and automated production systems.

									As a Contractor, your mission is to manufacture and deliver ESCOM components to the Assembly Dome. Every successful production earns Contribution Points, which determine your position on the DRAFT List (Main Leaderboard).

									Contractors choose what they send based on their skill, strategy, and specialization.

									The DRAFT List is the core of the system—where performance is measured, reputation is built, and status is earned. The higher you climb, the greater your impact within the Initiative.

									Only the Top 10 Contractors on the DRAFT List will be selected.
									These ten elite Contractors become the Pilots of TITAN-01, humanity's ultimate defense system. When the final battle begins, only their combined expertise and synchronized decision-making will control the war machine.

									Produce. Deliver. Climb the DRAFT List.
									Become one of the Ten corporations, construction of the ESCOM Assembly Dome is already underway.
									Within this colossal facility, humanity's greatest defense is taking shape:
									TITAN-01, a gigantic combat mech built with cutting-edge 22nd-century
									technology. Designed to stand against the Centauri threat, TITAN-01
									represents the combined effort of countless Contractors, engineers, and
									automated production systems.
								</p>
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									Components manufactured by Contractors are transported to the Dome within
									seconds via the Hyper Mag-Lev network. Thousands of workers and machines
									labor around the clock on the mech's immense structure.
								</p>
								<div className="text-white/80 text-xl md:text-2xl leading-relaxed">
									The project is divided into four major departments:
									<ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
										<li>Armor Division</li>
										<li>Weapons Division</li>
										<li>Energy Division</li>
										<li>Cyber Core Division</li>
									</ul>
								</div>
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									Every Contractor chooses where to invest resources and expertise.
									<br />
									Contributions are tracked by the ESCOM database, with more advanced and
									difficult developments earning greater contribution scores. Those who
									contribute the most will leave their mark on history as the builders of
									humanity's last hope
								</p>
							</div>
						</div>
					</section>

					{/* Section: Rise Through the DRAFT List */}
					<section id="draft-list" className="relative pb-96">
						<img
							src="/images/background/treath.png"
							alt=""
							className="absolute right-0 top-16 w-[550px] md:w-[650px] h-auto object-contain opacity-30 pointer-events-none"
						/>
						<div className="relative z-10 p-6 md:p-8">
							<h2 className="text-orange-400 font-bold text-4xl md:text-6xl mb-6 uppercase tracking-wide border-b border-orange-500/40 pb-3">
								Rise Through the DRAFT List
							</h2>

							<div className="flex flex-col gap-4 max-w-[60%]">
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									As a Contractor, your mission is to manufacture and deliver ESCOM components
									to the Assembly Dome. Every successful production earns Contribution Points,
									which determine your position on the DRAFT List (Main Leaderboard).
								</p>
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									Each shipment is transported via the Mag-Lev Train Network. Every transport
									request costs 1 ESCoin, the official currency of the ESCOM ecosystem.
								</p>
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									Contractors choose what they send based on their skill, strategy, and
									specialization.
								</p>
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									The DRAFT List is the core of the system—where performance is measured,
									reputation is built, and status is earned. The higher you climb, the greater
									your impact within the Initiative.
								</p>
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									Only the Top 10 Contractors on the DRAFT List will be selected.
									<br />
									These ten elite Contractors become the Pilots of TITAN-01, humanity's
									ultimate defense system. When the final battle begins, only their combined
									expertise and synchronized decision-making will control the war machine.
								</p>
								<p className="text-white/80 text-xl md:text-2xl leading-relaxed">
									Produce. Deliver. Climb the DRAFT List.
									<br />
									Become one of the Ten.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
