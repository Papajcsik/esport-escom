import { cn } from "@/lib/utils";
import { useState } from "react";

export default function MainNewsPage() {
	const [isFrameLoaded, setIsFrameLoaded] = useState(false);

	return (
		<div className="min-h-screen px-6 py-8 md:px-12 lg:px-24 pt-16">
			{/* Page Title */}
			<h1
				className={cn(
					"text-center text-white font-bold text-6xl md:text-8xl uppercase tracking-wider mb-10",
					"border-b border-orange-500/40 pb-4",
				)}
			>
				MAIN{" "}
				<span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-500">
					NEWS
				</span>
			</h1>

			{/* Main News Layout */}
			<div className="relative w-full max-w-6xl mx-auto mt-12 flex flex-col justify-end">
				
				{/* The main news overlay frame - defines the natural height */}
				<img 
					src="/images/background/main-news-keret.png" 
					alt="News Frame" 
					className="relative w-full h-auto z-10 pointer-events-none" 
					onLoad={() => setIsFrameLoaded(true)}
				/>

				{/* The actual news picture - behind the frame, fades in when frame is ready */}
				<div className={cn(
					"absolute inset-0 z-0 transition-opacity duration-700 ease-out",
					isFrameLoaded ? "opacity-100" : "opacity-0"
				)}>
					<img 
						src="/images/background/mechanic.webp" 
						alt="News Background" 
						className="absolute inset-0 w-full h-full object-cover" 
					/>
				</div>

				{/* The text part - above the frame in the lower part, slides & fades in */}
				<div className={cn(
					"absolute bottom-0 left-0 w-full z-20 py-8 pr-8 pl-16 md:py-12 md:pr-12 md:pl-24 lg:py-16 lg:pr-16 lg:pl-32 flex flex-col items-center text-center transition-all duration-1000 ease-out delay-100",
					isFrameLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
				)}>
					<h2 className="text-orange-400 font-bold text-3xl md:text-5xl lg:text-6xl mb-4 uppercase tracking-wide drop-shadow-lg">
						Assembly Dome Reaches New Milestone
					</h2>
					<p className="text-white text-lg md:text-2xl leading-relaxed max-w-4xl drop-shadow-md">
						Contractors have successfully delivered a record amount of materials. Construction of TITAN-01 is progressing ahead of schedule thanks to the relentless efforts of the alliance.
					</p>
					<button className="mt-8 px-10 py-4 bg-orange-500/20 border border-orange-500/50 hover:bg-orange-500/40 text-orange-400 font-bold text-lg tracking-widest uppercase transition-colors rounded-sm shadow-lg backdrop-blur-sm">
						Read Report
					</button>
				</div>
			</div>
		</div>
	);
}
