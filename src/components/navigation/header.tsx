import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Header() {
	const [isButtonOn, setIsButtonOn] = useState(false);

	return (
		<header>
			<div className="relative h-screen w-full">
				<img
					src="/images/header-background.png"
					alt="background"
					className="object-cover"
				/>

				<button
					onClick={() => setIsButtonOn((prev) => !prev)}
					className="absolute top-7 left-4 bg-transparent border-0 p-0"
				>
					<img
						src={`/images/button-${isButtonOn ? "on" : "off"}.png`}
						alt={`button ${isButtonOn ? "on" : "off"}`}
						className={cn(
							"absolute left-4",
							isButtonOn ? "top-7 w-16 h-16" : "top-8 w-16 h-14",
						)}
					/>
				</button>

				<img
					src="/images/google-play.png"
					alt="google play"
					className="absolute top-8 right-1 h-20 w-32"
				/>
			</div>
		</header>
	);
}
