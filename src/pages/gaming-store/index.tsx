import { cn } from "@/lib/utils";

export default function GamingStorePage() {
	return (
		<div className="min-h-screen px-6 py-8 md:px-12 lg:px-24 pt-16">
			<h1
				className={cn(
					"text-center text-white font-bold text-6xl md:text-8xl uppercase tracking-wider mb-10",
					"border-b border-orange-500/40 pb-4",
				)}
			>
				GAMING{" "}
				<span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-500">
					STORE
				</span>
			</h1>

			<div className="relative w-full max-w-5xl mx-auto mt-16 p-8 md:p-16 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm rounded-xl border border-orange-500/20 shadow-2xl">
				<img 
					src="/images/background/backgroundtitan.webp" 
					alt="" 
					className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 pointer-events-none rounded-xl" 
				/>

				<div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
					<h2 className="text-orange-400 font-bold text-3xl md:text-5xl mb-6 uppercase tracking-wide">
						Upgrade Your Arsenal
					</h2>
					
					<p className="text-white/90 text-lg md:text-2xl leading-relaxed mb-12 drop-shadow-md">
						Every Contractor needs the right tools to climb the DRAFT list. Visit our official gaming store partner, Games Guru, for the best high-performance hardware and peripherals to enhance your ESCOM experience.
					</p>

					<a 
						href="https://www.gamesguru.rs/" 
						target="_blank" 
						rel="noopener noreferrer"
						className="group relative px-10 py-5 bg-orange-500/20 border border-orange-500/50 hover:bg-orange-500/40 text-orange-400 font-bold text-lg md:text-xl tracking-widest uppercase transition-all duration-300 rounded shadow-[0_0_15px_rgba(255,100,0,0.2)] hover:shadow-[0_0_30px_rgba(255,100,0,0.5)] hover:scale-105 backdrop-blur-sm"
					>
						Visit Games Guru
					</a>
				</div>
			</div>
		</div>
	);
}
