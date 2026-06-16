import { IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

type SwitchButtonProps = {
	label: string;
	isActive: boolean;
	onClick: () => void;
	flipped?: boolean;
	id?: string;
	className?: string;
};

export function SwitchButton({
	label,
	isActive,
	onClick,
	flipped = false,
	id,
	className,
}: SwitchButtonProps) {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<button
			onClick={onClick}
			className={cn(
				"group relative cursor-pointer bg-transparent border-none p-0 transition-all duration-500",
				isActive && "scale-105",
				!isLoaded && "opacity-0 translate-y-2",
				isLoaded && "opacity-100 translate-y-0",
				className,
			)}
			aria-label={label}
			id={id}
		>
			<img
				src={IMAGES.hamburgerSwitchButton}
				alt=""
				onLoad={() => setIsLoaded(true)}
				className={cn(
					"w-36 sm:w-44 md:w-60 h-auto object-contain transition-all duration-300",
					flipped && "-scale-x-100",
					isActive
						? "brightness-125 drop-shadow-[0_0_12px_rgba(255,100,50,0.6)]"
						: "brightness-75 group-hover:brightness-100",
				)}
			/>
			<span
				className={cn(
					"absolute inset-0 flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg uppercase tracking-widest transition-all duration-300 pointer-events-none",
					isActive
						? "drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
						: "",
				)}
			>
				{label}
			</span>
		</button>
	);
}
