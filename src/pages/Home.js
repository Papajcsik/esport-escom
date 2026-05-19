import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "../App.css";

const Home = () => {
	const IMAGES = {
		titan1: new URL("../images/escombot-escomweb.webp", import.meta.url).href,
		logo1: new URL(
			"../images/escom_logo-SEC-COMMAND2-veryion.webp",
			import.meta.url,
		).href,
		qrCode: new URL("../images/frame.png", import.meta.url).href,
		guruLogo: new URL(
			"../images/Guru-logo-escom-menupoint.webp",
			import.meta.url,
		).href,

		Dome: new URL("../images/dome.webp", import.meta.url).href,
		Play: new URL("../images/play.webp", import.meta.url).href,
		Beta: new URL("../images/beta.webp", import.meta.url).href,
		Cyber: new URL("../images/cybercore.webp", import.meta.url).href,
		Tree: new URL("../images/tree.webp", import.meta.url).href,
		Contractor: new URL("../images/contractorTitan.webp", import.meta.url).href,
		getItOnPlay: new URL("../images/getItOnPlay.webp", import.meta.url).href,
	};

	useEffect(() => {
		AOS.init();
		AOS.refresh();

		const handleScroll = () => {
			const scrollTop = window.scrollY; // Get the current scroll position
			const parallaxElement = document.querySelector(".titanImage");
			const viewportWidth = window.innerWidth;

			if (parallaxElement) {
				if (viewportWidth < 430) {
					// Parallax effect for smaller screens
					parallaxElement.style.backgroundPositionY = `${scrollTop * 1.1}px`;
				} else {
					// Default parallax effect for larger screens
					parallaxElement.style.backgroundPositionY = `${scrollTop * 0.5}px`;
				}
			}
		};

		// Call handleScroll on page load to set the initial position
		handleScroll();

		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup event listener on unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleGooglePlayLink = () => {
		const mobileCheck =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent,
			);
		const playStoreUrl =
			"https://play.google.com/store/apps/details?id=com.escom";
		const newWindow = window.open();

		if (mobileCheck) {
			// Mobile - try to open Play Store app first, fallback to browser
			newWindow.location.href = `market://details?id=com.escom`;
			setTimeout(() => {
				if (!newWindow.closed) {
					newWindow.location.href = playStoreUrl;
				}
			}, 500);
		} else {
			// Desktop - open in new tab
			newWindow.location.href = playStoreUrl;
		}
	};

	return (
		<div className="mainContent">
			<div data-aos="fade-up" className="titanImage">
				<div className="section1">
					<div className="textSection" data-aos="fade-up">
						<text>
							Welcome to ESCOM's Official Website
							<br />
							<br />
							Available now in the <br />
							Google Play Store
						</text>
					</div>
					<img
						className="image1"
						src={IMAGES.Dome}
						alt="Dome"
						data-aos="fade-up"
					/>
				</div>

				<div className="section2">
					<img
						className="image1"
						src={IMAGES.Play}
						alt="Play"
						data-aos="fade-up"
					/>
					<div className="textSection2" data-aos="fade-up">
						<text>
							ESCOM
							<br />
							is a logic and code-breaking mobile game,
							<br />
							with community-based role-playing elements.
						</text>

						<text className="betaText">
							Currently we are in the
							<br />
							OPEN BETA phase!
							<img alt="beta" src={IMAGES.Beta} className="beta" />
						</text>
					</div>
				</div>

				<div className="section1">
					<div className="textSection" data-aos="fade-up">
						<text>
							Contribute to the common goal of the game, with logic puzzles that
							are even less than a minute long. Work your way up the draft list
							to become one of the top Contractors.
							<br />
							<br />
							All this is done with exciting mini-games, without any serious
							time requirements and completely free of in-game advertising!
						</text>
					</div>
					<img
						className="image1"
						src={IMAGES.Cyber}
						alt="Cyber"
						data-aos="fade-up"
					/>
				</div>

				<div className="section2">
					<img
						className="image1"
						src={IMAGES.Tree}
						alt="Tree"
						data-aos="fade-up"
					/>
					<div className="textSection2" data-aos="fade-up">
						<text>
							Moreover, you can also contribute to real-world values ​ ​with
							your game, as we want to protect our Homeworld with our green
							program plan and your help by planting trees.
						</text>
					</div>
				</div>

				<div className="section1">
					<div className="textSection" data-aos="fade-up">
						<text>
							Become a Contractor!
							<br />
							Help the community build the Titan!
							<br />
							<br />
							Contribute to the protection of our Homeworld!
						</text>
					</div>
					<img
						className="image1"
						src={IMAGES.Contractor}
						alt="Contractor"
						data-aos="fade-up"
					/>
				</div>

				<div className="getItOnPlayContainer" data-aos="fade-up">
					<button onClick={handleGooglePlayLink}>
						<img alt="getItOnPlay" src={IMAGES.getItOnPlay} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
