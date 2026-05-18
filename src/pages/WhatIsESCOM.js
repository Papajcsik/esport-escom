import React, { useEffect } from 'react'
import '../App.css';
import AOS from "aos";
import "aos/dist/aos.css";

const WhatIsESCOM = () => {


const IMAGES = {
    titanBattle : new URL('../images/escom-battle-artproba3.webp', import.meta.url).href,
    getItOnPlay: new URL('../images/getItOnPlay.webp', import.meta.url).href,

}

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleGooglePlayLink = () => {
    const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.escom';
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
    <div className='mainContent whatIsEscom' >
        <div className='whatIsEscomContainer'></div>
            <div data-aos="fade-up" className='WelcomeHeader' >What is Escom?</div>

            <div data-aos="fade-up" className='whatIsText widen' >
ESCOM is a logic and code-breaking mobile game with community-based role-playing elements.
            </div>

             <div data-aos="fade-up" className='whatIsText widen' >
The player is a so-called Contractor. A 22nd century freelance businessman who registers with ESCOM, the Earth Security Command. An alliance formed to protect our planet from a new threat, an invader from the neighboring Centauri solar system. The attack comes in the form of biowar monsters traveling in asteroids. As a contractor, each player will have to produce parts as quickly as possible for the TITAN project that serves as our defense. The towering giant robot must be manufactured in one month before the asteroid arrives on earth.
            </div>

            <img data-aos="fade-up" src={IMAGES.titanBattle} className='battleImage' alt='image1'/>
            
             <div data-aos="fade-up" className='whatIsText widen' >
Most of the merged companies were classified into 4 large categories when ESCOM was established: Armor, Weaponry, Energy and Cybercore. Contractors can contribute their own resources to any of these departments, thus facilitating the construction of Titan. The association's system scores Contractors based on the amount of the invested contribution. In ESCOM's assembly hall, the best contractors are listed live on the Draft list. Who are the ones who do the most to protect our homeworld!

            </div>
          <div data-aos="fade-up" className='JoinUsText' >
            Do you want to know more? Join our common cause!
            </div>

            <div className='getItOnPlayContainer' data-aos="fade-up" >
                <button  onClick={handleGooglePlayLink}>
                  <img alt='getItOnPlay'  src={IMAGES.getItOnPlay} />
                </button>
            </div>

        </div>

  )
}

export default WhatIsESCOM