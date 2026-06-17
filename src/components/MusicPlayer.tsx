import { AUDIO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
	startPlaying?: boolean;
};

export function MusicPlayer({ startPlaying = false }: Props) {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [isMuted, setIsMuted] = useState(true);
	const [volume, setVolume] = useState(0.5);
	const [hasStarted, setHasStarted] = useState(false);
	const [isUnderHeader, setIsUnderHeader] = useState(false);

	useEffect(() => {
		function handleScroll() {
			const underHeroElement = document.querySelector(
				".relative.flex-1.overflow-hidden.min-h-screen",
			);
			if (underHeroElement) {
				const bottom = underHeroElement.getBoundingClientRect().bottom;
				setIsUnderHeader(bottom <= 0);
			}
		}

		window.addEventListener("scroll", handleScroll, {
			passive: true,
		});
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const audio = new Audio(AUDIO.main);
		audio.loop = true;
		audio.volume = volume;
		audio.muted = true;
		audioRef.current = audio;

		return () => {
			audio.pause();
			audio.src = "";
		};
	}, []);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume;
		}
	}, [volume]);

	useEffect(() => {
		if (startPlaying && audioRef.current && !hasStarted) {
			const audio = audioRef.current;
			audio.muted = false;
			audio
				.play()
				.then(() => {
					setHasStarted(true);
					setIsMuted(false);
				})
				.catch(() => { });
		}
	}, [startPlaying, hasStarted]);

	function handleVolumeChange(e: React.ChangeEvent<HTMLInputElement>) {
		const val = parseFloat(e.target.value);
		if (val <= 0) {
			setIsMuted(true);
		}

		setVolume(Math.min(1, Math.max(0, val)));
	}

	function handleToggle() {
		const audio = audioRef.current;
		if (!audio) return;

		if (!hasStarted) {
			audio.muted = false;
			audio
				.play()
				.then(() => {
					setHasStarted(true);
					setIsMuted(false);
				})
				.catch(() => { });
			return;
		}

		if (isMuted) {
			setIsMuted(false);
			audio.play();
		} else {
			setIsMuted(true);
			audio.pause();
		}
	}

	return (
		<div
			className={cn(
				"fixed right-5 z-100 flex flex-row items-center gap-0 backdrop-blur-sm transition-[top] duration-300",
				isUnderHeader ? "top-50" : "top-5",
			)}
		>
			<button
				onClick={handleToggle}
				className="flex items-center justify-center w-8 h-8 bg-transparent border border-yellow/20 hover:border-yellow/40 transition-colors duration-200 cursor-pointer shrink-0"
				aria-label={isMuted ? "Unmute music" : "Mute music"}
			>
				{isMuted ? (
					<VolumeX className="w-3.5 h-3.5 text-yellow/60" />
				) : (
					<Volume2 className="w-3.5 h-3.5 text-yellow/80" />
				)}
			</button>

			<AnimatePresence>
				{!isMuted && (
					<motion.div
						initial={{ width: 0, opacity: 0 }}
						animate={{ width: 88, opacity: 1 }}
						exit={{ width: 0, opacity: 0 }}
						transition={{ duration: 0.2, ease: "easeInOut" }}
						className="overflow-hidden"
					>
						<div className="h-8 flex items-center border-y border-r border-yellow/20 bg-transparent px-2.5">
							<input
								type="range"
								min="0"
								max="1"
								step="0.01"
								value={volume}
								onChange={handleVolumeChange}
								className="w-full h-0.5 appearance-none cursor-pointer bg-transparent [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-yellow/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-yellow/60 [&::-webkit-slider-thumb]:border-none [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-track]:h-1 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-yellow/20 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-yellow/60 [&::-moz-range-thumb]:border-none"
								aria-label="Volume"
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
