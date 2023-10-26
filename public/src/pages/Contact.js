import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { colors } from '../Constants';


const Contact = () => {


const IMAGES = {
    gamers : new URL('../images/About us kep_0.jpg', import.meta.url).href,

}

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='mainContent' style={{paddingTop: 50}}>
        <div data-aos="fade-up" className='welcomeTextContainer left'>
            <div className='WelcomeHeader' >Get in Contact with us!</div>

            <div className='WelcomeText' >You can write us an Email here:</div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=office@gamesguru.rs" className='ContactText hoverPink' style={{textDecoration: 'underline', paddingLeft: 10 }} >office@gamesguru.rs </a>
            <br/>
            <div className='ContactText ' > <div className='bold'>Company:</div> GAMESGURU DOO SUBOTICA</div>
            <div className='ContactText ' > <div className='bold'>Adresa:</div> 
            <a className='hoverPink' href='https://www.google.com/maps/place/GAMESGURU/@46.1016542,19.6551408,41m/data=!3m1!1e3!4m6!3m5!1s0x474366cc5f15a7c1:0x6169ab61496320cb!8m2!3d46.101709!4d19.655355!16s%2Fg%2F11_pqpx_d!5m1!1e4?authuser=0&entry=ttu'>
             Jožefa Atile 24 , 24000 Subotica, Srbija </a></div>
            <div className='ContactText ' > <div className='bold'>Br. mob.:</div> <a className='hoverPink' href="tel:0637546418">063/754-6418</a>, Br. Tel.: <a className='hoverPink'href="tel:024528621">024/528-621</a></div>
            <div className='ContactText ' > <div className='bold'>Puno poslovno ime:</div>Gamesguru doo Subotica , Jožefa Atile 24</div>
            <div className='ContactText ' > <div className='bold'> Delatnost:</div> Trgovina na malo računarima, perifernim jedinicama i softverom u specijalizovanim prodavnicama</div>
            <div className='ContactText ' > <div className='bold'> PIB:</div> 106857934</div>
            <div className='ContactText ' > <div className='bold'> Matični broj:</div> 20693703</div>
            <div className='ContactText ' > <div className='bold'>Tekući račun OTP Banka: </div> 325-950070004350160</div>

        </div>


        <div data-aos="fade-up" className='gamersImageContainer '>
            <img data-aos="fade-up" src={IMAGES.gamers} className='gamersImage' alt='gamers'/>
         </div>
    </div>
  )
}

export default Contact