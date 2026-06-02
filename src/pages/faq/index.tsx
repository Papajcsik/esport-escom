import { cn } from "@/lib/utils";

export type FaqTab = "faq" | "eula";

const faqData = [
	{
		question: "What is ESCOM?",
		answer:
			"ESCOM (Earth Security Command) is a sci-fi universe combining gaming, comics, and community. It is an immersive entertainment platform that brings together competitive gaming, interactive storytelling, and digital collectibles.",
	},
	{
		question: "How do I get started?",
		answer:
			"Download the ESCOM app from Google Play, create your account, and dive into the universe. You can start by exploring the comic book series, joining gaming tournaments, or browsing the merchandise store.",
	},
	{
		question: "Is the app free to download?",
		answer:
			"Yes, the ESCOM app is free to download. Some premium features and in-app purchases may be available for enhanced experiences and exclusive content.",
	},
	{
		question: "What platforms are supported?",
		answer:
			"ESCOM is currently available on Android via Google Play. We are actively working on expanding to iOS and desktop platforms in the near future.",
	},
	{
		question: "How can I contact support?",
		answer:
			"You can reach our support team through the Support page on the website, or email us directly. We aim to respond to all inquiries within 24-48 hours.",
	},
];

const eulaContent = `END USER LICENSE AGREEMENT

Last updated: June 2026

Please read this End User License Agreement ("Agreement") carefully before using the ESCOM application ("App").

1. ACCEPTANCE OF TERMS
By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree to these terms, do not use the App.

2. LICENSE GRANT
Subject to your compliance with this Agreement, ESCOM grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App for your personal, non-commercial use.

3. RESTRICTIONS
You agree not to:
• Copy, modify, or distribute the App
• Reverse engineer, decompile, or disassemble the App
• Use the App for any unlawful purpose
• Attempt to gain unauthorized access to any services or systems

4. INTELLECTUAL PROPERTY
All content, trademarks, and intellectual property in the App are owned by ESCOM and its licensors. You do not acquire any ownership rights by using the App.

5. USER CONTENT
You retain ownership of content you create within the App. By submitting content, you grant ESCOM a worldwide, non-exclusive license to use, display, and distribute such content within the platform.

6. DISCLAIMER OF WARRANTIES
The App is provided "AS IS" without warranties of any kind, either express or implied.

7. LIMITATION OF LIABILITY
To the maximum extent permitted by law, ESCOM shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App.

8. TERMINATION
ESCOM may terminate your access to the App at any time for violation of this Agreement.

9. CHANGES TO THIS AGREEMENT
ESCOM reserves the right to modify this Agreement at any time. Continued use of the App constitutes acceptance of modified terms.

10. CONTACT
For questions about this Agreement, please contact us through the Support page.`;

type Props = {
	activeTab?: FaqTab;
};

export default function FaqPage({ activeTab = "faq" }: Props) {
	return (
		<div className="min-h-screen px-6 py-8 md:px-12 lg:px-24 pt-16">
			{/* Content Area */}
			<div className="max-w-3xl mx-auto">
				{/* Section Title */}
				<div className="mb-10">
					<h2
						className={cn(
							"text-center text-white font-bold text-lg md:text-xl uppercase tracking-wider pb-4",
							"border-b border-white/20",
						)}
					>
						{activeTab === "faq" ? (
							<>
								<span className="text-white">FAQ</span>
								<span className="text-white/60 font-normal">
									{" "}
									- Frequently asked questions
								</span>
							</>
						) : (
							<>
								<span className="text-white">EULA</span>
								<span className="text-white/60 font-normal">
									{" "}
									- End User License Agreement
								</span>
							</>
						)}
					</h2>
				</div>

				{/* FAQ Content */}
				{activeTab === "faq" && (
					<div className="flex flex-col gap-8 animate-[fadeIn_0.4s_ease-out]">
						{faqData.map((item, index) => (
							<div key={index} className="group">
								<h3 className="text-white font-bold text-base md:text-lg mb-2 flex items-start gap-2">
									<span className="text-white/90 font-bold shrink-0">
										{index + 1}.
									</span>
									<span>{item.question}</span>
								</h3>
								<p className="text-white/60 text-sm md:text-base leading-relaxed pl-6">
									{item.answer}
								</p>
							</div>
						))}
					</div>
				)}

				{/* EULA Content */}
				{activeTab === "eula" && (
					<div className="animate-[fadeIn_0.4s_ease-out]">
						<pre className="text-white/70 text-sm md:text-base leading-relaxed whitespace-pre-wrap font-[inherit] m-0">
							{eulaContent}
						</pre>
					</div>
				)}
			</div>
		</div>
	);
}
