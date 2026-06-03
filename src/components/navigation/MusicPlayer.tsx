import { AUDIO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type Props = {
	startPlaying?: boolean;
};

export function MusicPlayer({ startPlaying = false }: Props) {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [isMuted, setIsMuted] = useState(true);
	const [volume, setVolume] = useState(0.5);
	const [hasStarted, setHasStarted] = useState(false);

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
			audio.play()
				.then(() => {
					setHasStarted(true);
					setIsMuted(false);
				})
				.catch(() => {
					audio.muted = true;
				});
		}
	}, [startPlaying, hasStarted]);

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = parseFloat(e.target.value);
		setVolume(val);
	};

	const handleToggle = () => {
		const audio = audioRef.current;
		if (!audio) return;

		if (!hasStarted) {
			audio.muted = false;
			audio.play()
				.then(() => {
					setHasStarted(true);
					setIsMuted(false);
				})
				.catch(() => {});
			return;
		}

		const next = !isMuted;
		audio.muted = next;
		setIsMuted(next);
	};

	return (
		<div className="fixed top-5 right-5 z-[100] flex flex-col items-end">
			<div className="relative">
				{/* Pulsing glow ring when unmuted */}
				{!isMuted && hasStarted && (
					<motion.div
						className="absolute -inset-1 rounded-sm border border-yellow/30 pointer-events-none"
						animate={{ opacity: [0.15, 0.4, 0.15] }}
						transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
					/>
				)}

				<button
					onClick={handleToggle}
					className={cn(
						"relative w-9 h-9 flex items-center justify-center bg-[#0c0006] border transition-all duration-300 cursor-pointer group",
						isMuted
							? "border-yellow/20 hover:border-yellow/40"
							: "border-yellow/40 hover:border-yellow/60",
					)}
					aria-label={isMuted ? "Unmute music" : "Mute music"}
				>
					{/* Corner brackets */}
					<span className="absolute top-0 left-0 w-2 h-px bg-yellow/50 group-hover:bg-yellow/70" />
					<span className="absolute top-0 left-0 w-px h-2 bg-yellow/50 group-hover:bg-yellow/70" />
					<span className="absolute top-0 right-0 w-2 h-px bg-yellow/50 group-hover:bg-yellow/70" />
					<span className="absolute top-0 right-0 w-px h-2 bg-yellow/50 group-hover:bg-yellow/70" />
					<span className="absolute bottom-0 left-0 w-2 h-px bg-yellow/50 group-hover:bg-yellow/70" />
					<span className="absolute bottom-0 left-0 w-px h-2 bg-yellow/50 group-hover:bg-yellow/70" />
					<span className="absolute bottom-0 right-0 w-2 h-px bg-yellow/50 group-hover:bg-yellow/70" />
					<span className="absolute bottom-0 right-0 w-px h-2 bg-yellow/50 group-hover:bg-yellow/70" />

					{isMuted ? (
						<VolumeX className="w-4 h-4 text-yellow/50 group-hover:text-yellow/70 transition-colors" />
					) : (
						<Volume2 className="w-4 h-4 text-yellow/80 transition-colors" />
					)}
				</button>
			</div>

			{/* Volume slider panel drops down from button */}
			<AnimatePresence>
				{!isMuted && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.2, ease: "easeInOut" }}
						className="overflow-hidden"
					>
						<div className="border-x border-b border-yellow/20 bg-[#0c0006] px-3 py-2">
							<input
								type="range"
								min="0"
								max="1"
								step="0.01"
								value={volume}
								onChange={handleVolumeChange}
								className={cn(
									"w-24 h-1 rounded-full appearance-none cursor-pointer",
									"bg-yellow/20 accent-yellow",
									"[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-yellow [&::-webkit-slider-thumb]:border-none",
								)}
								style={{
									background: `linear-gradient(to right, #e7d393 0%, #e7d393 ${volume * 100}%, rgba(231,211,147,0.2) ${volume * 100}%)`,
								}}
								aria-label="Volume"
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
