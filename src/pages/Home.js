import React, { useEffect } from 'react'
import '../App.css';
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {

const IMAGES = {
    titan1 : new URL('../images/escom-titan-hatter.webp', import.meta.url).href,
    logo1 : new URL('../images/escom_logo-SEC-COMMAND2-veryion.png', import.meta.url).href,
    qrCode: new URL('../images/frame.png', import.meta.url).href,
    guruLogo: new URL('../images/Guru-logo-escom-menupoint.png', import.meta.url).href,

}

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
        <div className='mainContent' >


          <div data-aos="fade-up" className='welcomeTextContainer'>
            <div className='WelcomeHeader' >Welcome to ESCOM's Official Website</div>
              <div className='WelcomeText' >Coming soon in the Google Play Store</div>
            {/* <img className='qrCode' src={IMAGES.qrCode} alt='qrKod' /> */}
              <div className='WelcomeText' >2024 - Q4</div>


          </div>
          <img data-aos="fade-up" className='titanImage' src={IMAGES.titan1} alt='titan' />
        
        
        </div>  )
}

export default Home