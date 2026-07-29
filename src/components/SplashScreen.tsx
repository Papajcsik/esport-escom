import { siteConfig } from "@/lib/config";
import { IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LOADING_MESSAGES = [
	"Initializing Titan Systems...",
	"Connecting to ESCOM Network...",
	"Loading Contractor Data...",
	"Securing Earth Defense Protocols...",
];

export function SplashScreen({
	duration = siteConfig.splashScreenDurationInSeconds,
	onComplete,
}: {
	duration?: number;
	onComplete?: () => void;
}) {
	const [progress, setProgress] = useState(0);
	const [messageIndex, setMessageIndex] = useState(0);
	const [, setTickCount] = useState(0);
	const [isFadingOut, setIsFadingOut] = useState(false);

	useEffect(() => {
		const progressInterval = setInterval(() => {
			setProgress((p) => {
				const next = p + Math.random() * 15 + 5;
				if (next >= 100) {
					clearInterval(progressInterval);
					setIsFadingOut(true);
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

		const completionTimer = setTimeout(() => {
			setProgress(100);
			setIsFadingOut(true);
		}, duration * 1000);

		return () => {
			clearInterval(progressInterval);
			clearTimeout(completionTimer);
		};
	}, [duration, onComplete]);

	useEffect(() => {
		if (isFadingOut) {
			const fadeOutTimer = setTimeout(() => {
				onComplete?.();
			}, 800);

			return () => clearTimeout(fadeOutTimer);
		}
	}, [isFadingOut, onComplete]);

	return (
		<div
			className={cn(
				"fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#0c0006]",
				isFadingOut && "pointer-events-none transition-opacity duration-800",
			)}
			style={{ opacity: isFadingOut ? 0 : 1 }}
		>
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_50%,rgba(231,211,147,0.02)_50%)] bg-size-[100%_4px]" />
				<div className="absolute left-12 top-0 h-px w-32 bg-linear-to-r from-transparent via-yellow/30 to-transparent" />
				<div className="absolute right-12 top-0 h-px w-32 bg-linear-to-r from-transparent via-yellow/30 to-transparent" />
			</div>

			{/* Corner brackets */}
			<div className="absolute left-[clamp(1.5rem,5vw,4rem)] top-[clamp(1.5rem,7vh,4rem)] h-[clamp(2rem,6vw,3rem)] w-[clamp(2rem,6vw,3rem)] border-l-2 border-t-2 border-yellow/30" />
			<div className="absolute right-[clamp(1.5rem,5vw,4rem)] top-[clamp(1.5rem,7vh,4rem)] h-[clamp(2rem,6vw,3rem)] w-[clamp(2rem,6vw,3rem)] border-r-2 border-t-2 border-yellow/30" />
			<div className="absolute bottom-[clamp(1.5rem,7vh,4rem)] left-[clamp(1.5rem,5vw,4rem)] h-[clamp(2rem,6vw,3rem)] w-[clamp(2rem,6vw,3rem)] border-b-2 border-l-2 border-yellow/30" />
			<div className="absolute bottom-[clamp(1.5rem,7vh,4rem)] right-[clamp(1.5rem,5vw,4rem)] h-[clamp(2rem,6vw,3rem)] w-[clamp(2rem,6vw,3rem)] border-b-2 border-r-2 border-yellow/30" />

			<motion.div
				initial={{ opacity: 0, scale: 0.85 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
				className="relative z-10 flex w-full max-w-md flex-col items-center px-6"
			>
				<motion.div
					className="mb-[clamp(1rem,4vh,2rem)] border border-yellow/40 px-[clamp(1rem,6vw,2rem)] py-2 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.6 }}
				>
					<span className="text-[clamp(0.6rem,2.5vw,0.75rem)] tracking-[clamp(0.2em,1vw,0.4em)] text-yellow/60">
						SECURE CONNECTION
					</span>
				</motion.div>

				<motion.img
					src={IMAGES.escomLogo}
					alt="ESCOM"
					className="h-auto w-[clamp(10rem,45vw,15rem)]"
					animate={{ opacity: [0.7, 1, 0.7] }}
					transition={{
						duration: 3,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 0.5,
					}}
				/>

				<div className="mt-[clamp(2rem,7vh,4rem)] w-full max-w-80">
					<div className="mb-3 flex justify-between gap-4 text-[clamp(0.6rem,2.5vw,0.875rem)] tracking-[clamp(0.12em,0.8vw,0.3em)] text-yellow/60">
						<span>INITIALIZING TITAN DEFENSE</span>
						<span>{Math.round(progress)}%</span>
					</div>
					<div className="h-1 overflow-hidden bg-yellow/10">
						<motion.div
							className="h-full bg-yellow"
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
						className="px-2 pt-[clamp(1rem,3vh,1.5rem)] text-center text-[clamp(0.65rem,2.7vw,0.875rem)] tracking-[clamp(0.08em,0.6vw,0.2em)] text-yellow/50"
					>
						{LOADING_MESSAGES[messageIndex]}
					</motion.p>
				</AnimatePresence>

				<div className="mt-[clamp(2rem,7vh,4rem)] flex gap-1.5">
					{[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
						<motion.div
							key={i}
							className="h-3 w-3 border border-yellow/40"
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

			<div className="absolute bottom-[clamp(1rem,5vh,3rem)] max-w-[80vw] text-center text-[clamp(0.55rem,2.2vw,0.875rem)] tracking-[clamp(0.1em,0.8vw,0.3em)] text-yellow/30">
				EARTH SECURITY COMMAND &nbsp;//&nbsp; 22ND CENTURY
			</div>
		</div>
	);
}
