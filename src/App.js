import { colors } from './Constants';
import './App.css';
import { IoMenu } from 'react-icons/io5'
import { AiOutlineHome, AiOutlineClose } from 'react-icons/ai'
import { GoMail } from 'react-icons/go'
import { BsQuestionCircle } from 'react-icons/bs'
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi'
import { useState } from 'react';
import Contact from './pages/Contact';
import WhatIsESCOM from './pages/WhatIsESCOM';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


function App() {

  const [menuShown, setMenuShown] = useState(false);

const IMAGES = {
    titan1 : new URL('../src/images/escom-titan-hatter.webp', import.meta.url).href,
    logo1 : new URL('../src/images/escom_logo-SEC-COMMAND2-veryion.webp', import.meta.url).href,
    qrCode: new URL('../src/images/frame.png', import.meta.url).href,
    guruLogo: new URL('../src/images/Guru-logo-escom-menupoint.webp', import.meta.url).href,

    
}

  let Component;
  switch(window.location.pathname)
  {
    case "/":
      Component = Home;
      break;
    case "/Contact":
      Component = Contact;
      break;
    case "/WhatIsESCOM":
      Component = WhatIsESCOM;
      break;
    default: 
      Component = NotFound;
    break;
  }

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
    <div className="App">

      <div className='main' >

        <div className='navbar'>
          <button className='hamburgerMenu' onClick={()=>{setMenuShown(true)}} >
            <IoMenu  size={'95%'} color='white' />
          </button>
          
          <a href='/' className='logoContainer'>
              <img className='logo1' src={IMAGES.logo1} alt='logo1' />
          </a>

           <button className='signUpButton' onClick={handleGooglePlayLink}>
              {/* <h1 className='signUpText' >Sign Up!</h1> */}
          </button>
        </div>

          <div className={menuShown ? 'menuContent menuShown' : 'menuContent menuHidden'}>
            <div className='menuItem' onClick={()=>{setMenuShown(false)}}>
             <div className='menuItemText' ><AiOutlineClose style={{paddingRight: 25, color: colors.grey}} /></div>
            </div>
            <a href="/" className={window.location.pathname === "/" ? 'menuItem active' : 'menuItem' }>
             <div className={window.location.pathname === "/" ? 'verticalLine activeVertical' : 'verticalLine'}/> <div className='menuItemText'> <AiOutlineHome style={{paddingRight: 25, color: colors.grey}}/>Home</div>
            </a>
            <a href="/Contact" className={window.location.pathname === "/Contact" ? 'menuItem active' : 'menuItem' }>
             <div className={window.location.pathname === "/Contact" ? 'verticalLine activeVertical' : 'verticalLine'}/> <div className='menuItemText'> <GoMail style={{paddingRight: 25, color: colors.grey}}/>Contact</div>
            </a>
            <a href="/WhatIsESCOM" className={window.location.pathname === "/WhatIsESCOM" ? 'menuItem active' : 'menuItem' }>
             <div className={window.location.pathname === "/WhatIsESCOM" ? 'verticalLine activeVertical' : 'verticalLine'}/> <div className='menuItemText' > <BsQuestionCircle style={{paddingRight: 25, color: colors.grey}}/>What is ESCOM?</div>
            </a>
            <div className='menuItem' onClick={() => { window.open('https://www.gamesguru.rs/', '_blank'); }}>
             <div className='verticalLine'/> <div className='menuItemText'> <img src={IMAGES.guruLogo} className='guruLogo' alt='guruLogo' /> Gaming Shop</div>
            </div>
          </div>

        <Component />

        <div className='footer'>
        
        <div className='footerLogoContainer'>
             <img  className='logoClass' alt='guru' src={require('../src/images/Guru_logo.png')}/>
             <img  className='logoClass' alt='prosperitati' src={require('../src/images/prospi.png')}/>
             <img  className='logoClass' alt='sp' src={require('../src/images/cover-photo.png')}/>

        </div>

        <div className='footertextContainer'>
          <div className='footerText' >Powered by:   <div style={{textDecoration: 'underline', paddingLeft: 10 }} className='hoverPink' onClick={() => { window.open('https://www.gamesguru.rs/', '_blank'); }}>GamesGuru</div></div>
            
            <div className='socialMediaContainer'>
              <a className='socialMediaItem' href='https://www.facebook.com/esportEscom' target="_blank" rel="noopener noreferrer"><BiLogoFacebook style={{color: colors.grey, height: '80%', width: '80%'}}/></a>
              <a className='socialMediaItem' href='https://twitter.com/esport_escom' target="_blank" rel="noopener noreferrer"><BiLogoTwitter style={{color: colors.grey, height: '80%', width: '80%'}}/></a>
              <a className='socialMediaItem' href='https://www.instagram.com/Esport_Escom/' target="_blank" rel="noopener noreferrer"><BiLogoInstagram style={{color: colors.grey, height: '80%', width: '80%'}}/></a>
              <a className='socialMediaItem' href='https://www.youtube.com/channel/UC9lAnxCQy5BZ1lB-cNSlO4Q?view_as=subscriber' target="_blank" rel="noopener noreferrer"><BiLogoYoutube style={{color: colors.grey, height: '80%', width: '80%'}}/></a>

            </div>

          <div className='footerText' >Code and design by:   <div style={{textDecoration: 'underline', paddingLeft: 10 }} className='hoverPink' onClick={() => { window.open('https://www.studiopresent.rs/', '_blank'); }}>StudioPresent</div></div>
         </div>
        </div>


      </div>
  
    </div>
  );
}

export default App;
