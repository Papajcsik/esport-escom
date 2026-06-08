import { IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type SwitchButtonProps = {
	/** Text label displayed on the button */
	label: string;
	/** Whether this button is currently the active/selected one */
	isActive: boolean;
	/** Click handler */
	onClick: () => void;
	/** Horizontally flip the button image */
	flipped?: boolean;
	/** Optional id for the button element */
	id?: string;
	/** Optional extra className on the outer button */
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
	return (
		<button
			onClick={onClick}
			className={cn(
				"group relative cursor-pointer bg-transparent border-none p-0 transition-transform duration-300 hover:scale-105",
				isActive && "scale-105",
				className,
			)}
			aria-label={label}
			id={id}
		>
			<img
				src={IMAGES.hamburgerSwitchButton}
				alt=""
				className={cn(
					"w-48 md:w-60 h-auto object-contain transition-all duration-300",
					flipped && "-scale-x-100",
					isActive
						? "brightness-125 drop-shadow-[0_0_12px_rgba(255,100,50,0.6)]"
						: "brightness-75 group-hover:brightness-100",
				)}
			/>
			<span
				className={cn(
					"absolute inset-0 flex items-center justify-center text-white font-bold text-base md:text-lg uppercase tracking-widest transition-all duration-300 pointer-events-none",
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
