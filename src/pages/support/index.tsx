import { cn } from "@/lib/utils";

export default function SupportPage() {
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
					SUPPORT
				</span>
			</h1>

			<div className="relative w-full max-w-5xl mx-auto mt-16 p-8 md:p-16 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm rounded-xl border border-orange-500/20 shadow-2xl">
				<img 
					src="/images/background/welding-drone-sparks.webp" 
					alt="" 
					className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 pointer-events-none rounded-xl" 
				/>

				<div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
					<h2 className="text-orange-400 font-bold text-3xl md:text-5xl mb-6 uppercase tracking-wide">
						Need Assistance, Contractor?
					</h2>
					
					<p className="text-white/90 text-lg md:text-2xl leading-relaxed mb-12 drop-shadow-md">
						The ESCOM Directorate is here to ensure your operations run smoothly. If you are experiencing technical difficulties, account issues, or have questions regarding the Initiative, our support team is ready to help.
					</p>

					<a 
						href="mailto:support@escom.com" 
						className="group relative px-10 py-5 bg-orange-500/20 border border-orange-500/50 hover:bg-orange-500/40 text-orange-400 font-bold text-lg md:text-xl tracking-widest uppercase transition-all duration-300 rounded shadow-[0_0_15px_rgba(255,100,0,0.2)] hover:shadow-[0_0_30px_rgba(255,100,0,0.5)] hover:scale-105 backdrop-blur-sm"
					>
						Contact Support
					</a>
				</div>
			</div>
		</div>
	);
}
