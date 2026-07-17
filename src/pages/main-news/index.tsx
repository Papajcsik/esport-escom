import { cn } from "@/lib/utils";
import { useState } from "react";

function NewsCard({ title, text, bgImage }: { title: string; text: string; bgImage?: string }) {
	const [isFrameLoaded, setIsFrameLoaded] = useState(false);

	return (
		<div className="relative w-full">
			<img
				src="/images/frames/main-news-keret.webp"
				alt="News Frame"
				className="relative w-full h-auto z-10 pointer-events-none"
				onLoad={() => setIsFrameLoaded(true)}
			/>

			{bgImage && (
				<div className={cn(
					"absolute top-[10%] left-1/2 -translate-x-1/2 w-[87%] h-[38%] sm:h-[46%] z-0 transition-opacity duration-700 ease-out",
					isFrameLoaded ? "opacity-100" : "opacity-0"
				)}>
					<img
						src={bgImage}
						alt="News Background"
						className="w-full h-full object-cover"
					/>
				</div>
			)}

			<div className={cn(
				"absolute bottom-[8%] sm:bottom-[10%] left-[52%] -translate-x-1/2 w-[80%] h-[32%] sm:h-[35%] z-20 flex flex-col items-center justify-center text-center transition-all duration-1000 ease-out delay-100",
				isFrameLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
			)}>
				<h2 className="text-orange-400 font-bold text-xs sm:text-2xl md:text-3xl mb-1 sm:mb-4 md:mb-6 uppercase tracking-wide drop-shadow-lg">
					{title}
				</h2>
				<p className="text-white/80 text-[10px] sm:text-base md:text-lg leading-tight sm:leading-normal max-w-[90%] drop-shadow-md">
					{text}
				</p>
			</div>
		</div>
	);
}

const newsData = [
	{
		id: 1,
		title: "Assembly Dome Reaches New Milestone",
		text: "Contractors have successfully delivered a record amount of materials. Construction of TITAN-01 is progressing ahead of schedule thanks to the relentless efforts of the alliance.",
	},
	{
		id: 2,
		title: "Centauri Activity Detected",
		text: "Deep-space radar has picked up unusual anomalies near the outer colonies. All Contractors are advised to stay on high alert and report any suspicious readings immediately.",
	},
	{
		id: 3,
		title: "Hyper Train Network Upgraded",
		text: "ESCOM Engineering has completed the Phase 2 upgrade of the Hyper Train network, increasing maximum cargo throughput by 30%. Deliveries to the Assembly Dome are now faster than ever.",
	},
	{
		id: 4,
		title: "Top Contractors Honored",
		text: "The High Command has issued commendations to the top 100 Contractors of the month for their extraordinary contributions to the defense initiative. Check the DRAFT List to see if you made the cut.",
	}
];

export default function MainNewsPage() {
	return (
		<div className="min-h-screen px-6 py-8 md:px-12 lg:px-24 pt-16">
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

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[1600px] mx-auto mt-12">
				{newsData.map(news => (
					<NewsCard key={news.id} title={news.title} text={news.text} bgImage={news.bgImage} />
				))}
			</div>
		</div>
	);
}
