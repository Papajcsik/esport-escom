import { AUDIO } from "@/lib/constants";
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
			audio.play().then(() => {
				setHasStarted(true);
				setIsMuted(false);
			}).catch(() => {
				audio.muted = true;
			});
		}
	}, [startPlaying, hasStarted]);

	const handleToggle = () => {
		const audio = audioRef.current;
		if (!audio) return;

		if (!hasStarted) {
			audio.muted = false;
			audio.play().then(() => {
				setHasStarted(true);
				setIsMuted(false);
			}).catch(() => {});
			return;
		}

		const next = !isMuted;
		audio.muted = next;
		setIsMuted(next);
	};

	return (
		<div className="fixed top-4 right-4 z-[100] flex items-center gap-2">
			<button
				onClick={handleToggle}
				className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0c0006]/80 border border-yellow/30 hover:border-yellow/60 hover:bg-[#0c0006] transition-colors cursor-pointer"
				aria-label={isMuted ? "Unmute music" : "Mute music"}
			>
				{isMuted ? (
					<VolumeX className="w-5 h-5 text-yellow/70" />
				) : (
					<Volume2 className="w-5 h-5 text-yellow" />
				)}
			</button>
		</div>
	);
}
