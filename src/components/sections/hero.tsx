import { siteConfig } from "@/lib/config";
import { images } from "@/lib/imageMap";
import { motion } from "framer-motion";

const D = siteConfig.splashScreenDurationInSeconds + 1;

const ease = [0.215, 0.61, 0.355, 1] as const;

export function Hero() {
	return (
		<div
			style={{
				backgroundImage: `url(${images.escomHeroBattle})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
			className="w-full min-h-screen flex flex-col gap-5 items-center justify-center object-contain relative"
		>
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: D + 0.2, ease }}
				className="border border-[#e7d393]/30 px-6 py-1.5"
			>
				<span className="text-xs tracking-[0.4em] text-[#e7d393]/60">
					WELCOME TO
				</span>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: D + 0.35, ease }}
				className="flex items-center justify-center flex-col"
			>
				<motion.img
					src={images.escomLogo}
					initial={{ opacity: 0 }}
					animate={{ opacity: [1, 0.7, 1] }}
					transition={{
						opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: D + 0.35 },
					}}
				/>

				<div className="flex items-center gap-3 mt-6">
					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 0.4, delay: D + 0.5, ease: "easeOut" }}
						className="h-px w-12 bg-[#e7d393]/40 origin-left"
					/>
					<motion.span
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: D + 0.55, ease }}
						className="text-xs tracking-[0.35em] text-[#e7d393]/50"
					>
						SCROLL DOWN TO
					</motion.span>
					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 0.4, delay: D + 0.5, ease: "easeOut" }}
						className="h-px w-12 bg-[#e7d393]/40 origin-right"
					/>
				</div>

				<span className="text-white/90 text-7xl font-bold my-4 flex tracking-[0.05em]">
					{"INITIALIZE".split("").map((char, i) => (
						<motion.span
							key={i}
							initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							transition={{
								duration: 0.5,
								delay: D + 0.6 + i * 0.06,
								ease,
							}}
							className="inline-block"
						>
							{char}
						</motion.span>
					))}
				</span>
			</motion.div>

			<motion.img
				src={images.polygon}
				className="mt-6"
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: [0, 1, 0.5], y: [16, 0, 8, 0, 16] }}
				transition={{
					opacity: { duration: 0.4, delay: D + 1.0, ease: "easeOut" },
					y: { duration: 2.5, delay: D + 1.0, repeat: Infinity, ease: "easeInOut" },
				}}
			/>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5, delay: D + 0.5 }}
				className="absolute inset-0 bg-[linear-gradient(0deg,transparent_50%,rgba(231,211,147,0.02)_50%)] bg-[length:100%_4px] pointer-events-none"
			/>
		</div>
	);
}
