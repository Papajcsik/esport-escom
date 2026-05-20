import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { images } from "@/lib/imageMap";

const LOADING_MESSAGES = [
	"Initializing Titan Systems...",
	"Connecting to ESCOM Network...",
	"Loading Contractor Data...",
	"Securing Earth Defense Protocols...",
];

export function SplashScreen() {
	const [progress, setProgress] = useState(0);
	const [messageIndex, setMessageIndex] = useState(0);
	const [_, setTickCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((p) => {
				const next = p + Math.random() * 15 + 5;
				if (next >= 100) {
					clearInterval(interval);
					return 100;
				}
				return next;
			});
			setTickCount((t) => {
				const newT = t + 1;
				if (newT % 3 === 0) {
					setMessageIndex((i) => (i + 1) % LOADING_MESSAGES.length);
				}
				return newT;
			});
		}, 400);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0c0006]">
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_50%,rgba(231,211,147,0.02)_50%)] bg-[length:100%_4px]" />
				<div className="absolute left-12 top-0 h-px w-32 bg-gradient-to-r from-transparent via-[#e7d393]/30 to-transparent" />
				<div className="absolute right-12 top-0 h-px w-32 bg-gradient-to-r from-transparent via-[#e7d393]/30 to-transparent" />
			</div>

			{/* Corner brackets */}
			<div className="absolute top-16 left-16 w-12 h-12 border-t-2 border-l-2 border-[#e7d393]/30" />
			<div className="absolute top-16 right-16 w-12 h-12 border-t-2 border-r-2 border-[#e7d393]/30" />
			<div className="absolute bottom-16 left-16 w-12 h-12 border-b-2 border-l-2 border-[#e7d393]/30" />
			<div className="absolute bottom-16 right-16 w-12 h-12 border-b-2 border-r-2 border-[#e7d393]/30" />

			<motion.div
				initial={{ opacity: 0, scale: 0.85 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
				className="relative z-10 flex flex-col items-center"
			>
				<motion.div
					className="mb-8 border border-[#e7d393]/40 px-8 py-2"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.6 }}
				>
					<span className="text-xs tracking-[0.4em] text-[#e7d393]/60">
						SECURE CONNECTION
					</span>
				</motion.div>

				<motion.img
					src={images.escomLogo}
					alt="ESCOM"
					className="h-48 w-auto"
					animate={{ opacity: [0.7, 1, 0.7] }}
					transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
				/>

				<div className="mt-16 w-80">
					<div className="flex justify-between text-sm tracking-[0.3em] text-[#e7d393]/60 mb-3">
						<span>INITIALIZING TITAN DEFENSE</span>
						<span>{Math.round(progress)}%</span>
					</div>
					<div className="h-1 overflow-hidden bg-[#e7d393]/10">
						<motion.div
							className="h-full bg-[#e7d393]"
							initial={{ width: 0 }}
							animate={{ width: `${progress}%` }}
							transition={{ ease: "easeOut" }}
						/>
					</div>
				</div>

				<AnimatePresence mode="wait">
					<motion.p
						key={messageIndex}
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.25 }}
						className="pt-6 text-sm text-[#e7d393]/50 tracking-[0.2em]"
					>
						{LOADING_MESSAGES[messageIndex]}
					</motion.p>
				</AnimatePresence>

				<div className="mt-16 flex gap-1.5">
					{[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
						<motion.div
							key={i}
							className="h-3 w-3 border border-[#e7d393]/40"
							animate={{
								opacity: [0.15, 0.8, 0.15],
								backgroundColor: ["transparent", "#e7d393", "transparent"],
							}}
							transition={{
								duration: 1.2,
								repeat: Infinity,
								delay: i * 0.12,
								ease: "easeInOut",
							}}
						/>
					))}
				</div>
			</motion.div>

			<div className="absolute bottom-12 text-sm text-[#e7d393]/30 tracking-[0.3em]">
				EARTH SECURITY COMMAND &nbsp;//&nbsp; 22ND CENTURY
			</div>
		</div>
	);
}
