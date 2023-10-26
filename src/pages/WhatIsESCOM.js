import React, { useEffect } from 'react'
import '../App.css';
import AOS from "aos";
import "aos/dist/aos.css";

const WhatIsESCOM = () => {


const IMAGES = {
    titanBattle : new URL('../images/escom-battle-artproba3.webp', import.meta.url).href,
    
}

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='mainContent whatIsEscom' >
        <div className='welcomeTextContainer'></div>
            <div data-aos="fade-up" className='WelcomeHeader' >What is Escom?</div>

            <div data-aos="fade-up" className='WelcomeText widen' >
            Escom is a community-based mobile role-playing game with logic and code-breaking elements.
            </div>

             <div data-aos="fade-up" className='WelcomeText widen' >
The player is a so-called Contractor. A 22nd century freelance businessman who registers with ESCOM, the Earth Security Command. An alliance formed to protect our planet from a new threat, an invader from the neighboring Centauri solar system. The attack comes in the form of biowar monsters traveling in asteroids. As a contractor, each player will have to produce parts as quickly as possible for the TITAN project that serves as our defense. The towering giant robot must be manufactured in one month before the asteroid arrives on earth.
            </div>

            <img data-aos="fade-up" src={IMAGES.titanBattle} className='battleImage' alt='image1'/>
            
             <div data-aos="fade-up" className='WelcomeText widen' >
Most of the merged companies were classified into 4 large categories when ESCOM was established: Armor, Weaponry, Energy and Cybercore. Contractors can contribute their own resources to any of these departments, thus facilitating the construction of Titan. The association's system scores Contractors based on the amount of the invested contribution. In ESCOM's assembly hall, the best contractors are listed live on the Draft list. Who are the ones who do the most to protect our homeworld!

            </div>
          <div data-aos="fade-up" className='WelcomeHeader' >
            Do you want to know more? Join our common cause!
            </div>


        </div>

  )
}

export default WhatIsESCOM