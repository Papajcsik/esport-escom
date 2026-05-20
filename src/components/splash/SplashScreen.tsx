import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LOADING_MESSAGES = [
	"Initializing Titan Systems...",
	"Connecting to ESCOM Network...",
	"Loading Contractor Data...",
	"Securing Earth Defense Protocols...",
];

export default function SplashScreen() {
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
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2a1a] via-[#0c0006] to-[#0c0006]" />
				<div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_50%,rgba(0,255,0,0.03)_50%)] bg-[length:100%_4px]" />
				<div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e7d393] to-transparent opacity-20" />
				<div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e7d393] to-transparent opacity-20" />
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="relative z-10 flex flex-col items-center"
			>
				<motion.div
					className="mb-8 border-2 border-[#e7d393] px-8 py-2"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					<span className="text-xs tracking-[0.5em] text-[#e7d393] opacity-70">
						SECURE CONNECTION
					</span>
				</motion.div>

				<motion.img
					src="/images/logo.webp"
					alt="ESCOM"
					className="h-48 w-auto"
					animate={{
						filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
					}}
					transition={{ duration: 2, repeat: Infinity }}
				/>

				<div className="mt-16 w-80">
					<div className="flex justify-between text-lg tracking-widest text-[#e7d393] opacity-70 mb-4 font-sans font-bold">
						<span>INITIALIZING TITAN DEFENSE</span>
						<span>{Math.round(progress)}%</span>
					</div>
					<div className="h-2 overflow-hidden rounded-sm bg-[#1a2a1a] border border-[#e7d393]/30">
						<motion.div
							className="h-full bg-gradient-to-r from-[#e7d393] via-[#7fff00] to-[#e7d393]"
							initial={{ width: 0 }}
							animate={{ width: `${progress}%` }}
							transition={{ ease: "easeOut" }}
						/>
					</div>
				</div>

				<AnimatePresence mode="wait">
					<motion.p
						key={messageIndex}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className="pt-5 text-xl text-[#e7d393] opacity-80 font-sans tracking-widest font-bold"
					>
						{LOADING_MESSAGES[messageIndex]}
					</motion.p>
				</AnimatePresence>

				<div className="mt-20 flex gap-2">
					{[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
						<motion.div
							key={i}
							className="h-4 w-4 rounded-sm bg-[#e7d393]"
							animate={{
								opacity: [0.2, 1, 0.2],
								scale: [1, 1.3, 1],
							}}
							transition={{
								duration: 0.8,
								repeat: Infinity,
								delay: i * 0.1,
							}}
						/>
					))}
				</div>
			</motion.div>

			<div className="absolute bottom-12 text-lg text-[#e7d393] opacity-40 font-sans tracking-widest">
				EARTH SECURITY COMMAND // 22ND CENTURY
			</div>

			<div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col gap-4">
				{[...Array(8)].map((_, i) => (
					<div
						key={i}
						className="h-2 w-20 bg-[#e7d393]/20"
						style={{ opacity: 0.2 + i * 0.1 }}
					/>
				))}
			</div>
			<div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4">
				{[...Array(8)].map((_, i) => (
					<div
						key={i}
						className="h-2 w-20 bg-[#e7d393]/20"
						style={{ opacity: 0.2 + i * 0.1 }}
					/>
				))}
			</div>
		</div>
	);
}
