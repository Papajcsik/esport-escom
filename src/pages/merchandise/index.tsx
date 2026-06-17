import { cn } from "@/lib/utils";

export default function MerchandisePage() {
	return (
		<div className="min-h-screen px-6 py-8 md:px-12 lg:px-24 pt-16">
			<h1
				className={cn(
					"text-center text-white font-bold text-6xl md:text-8xl uppercase tracking-wider mb-10",
					"border-b border-orange-500/40 pb-4",
				)}
			>
				ESCOM{" "}
				<span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-500">
					MERCH
				</span>
			</h1>

			<div className="relative w-full max-w-7xl mx-auto mt-16 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 bg-black/40 backdrop-blur-sm rounded-xl border border-orange-500/20 shadow-2xl">
				{/* Merch Display */}
				<div className="relative w-full max-w-[500px] md:max-w-[700px] aspect-square flex flex-col items-center justify-center shrink-0">
					<img
						src="/images/frames/merch_frame.png"
						alt=""
						className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none"
					/>
					<img
						src="/images/background/mockup_shirt.png"
						alt="ESCOM Merch Shirt"
						className="relative z-10 w-[65%] h-[65%] object-contain mb-12"
					/>

					{/* Button fit into frame */}
					<a
						href="#"
						className="absolute bottom-[0.5%] md:bottom-[1.5%] left-1/2 -translate-x-1/2 group flex items-center justify-center px-4 py-2 w-[40%] sm:w-[35%] h-[9%] shrink-0 transition-transform duration-300 hover:scale-105 z-20"
					>
						<img
							src="/images/background/merch_frame_button.png"
							alt=""
							className="absolute inset-0 w-full h-full object-fill pointer-events-none"
						/>
						<span className="relative z-10 text-white-400 font-extrabold text-xs sm:text-sm tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
							Enter the Shop
						</span>
					</a>
				</div>

				{/* Merch Info */}
				<div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
					<h2 className="text-orange-400 font-bold text-4xl md:text-6xl mb-6 uppercase tracking-wide">
						Suit Up, Contractor
					</h2>

					<p className="text-white/90 text-xl md:text-2xl leading-relaxed drop-shadow-md">
						Show your allegiance to the Earth Security Command. The official ESCOM merchandise store features exclusive, high-quality gear and apparel designed for the defenders of the Homeworld.
					</p>
				</div>
			</div>
		</div>
	);
}
