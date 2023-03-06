import './MainBanner.scss';

import React from 'react';

import Button from '../../../../components/Button/Button';


const profileText1 = 'Experienced Web & Mobile App Developer. Built more than 8 awesome apps and websites.'
const profileText2 = 'I develop cross-platform and responsive websites to help you achieve your business goals!'

function MainBanner() {

  return (
    <div className="main-banner-container">
      <div className="main-banner">
        <div className="main-banner-content">
          <h2 className="chat-box chat-box-arrow-right-center animated bounceIn">Help has arrived!</h2>
          <img src={require('../../../../assets/tired-man.png')} alt="Businessman" />
          <h1 className="chat-box chat-box-arrow-left animated fadeIn">Hi, I'm Abdurezak. I'm here to <br /> realize your <span>awesome</span> ideas.</h1>
        </div>
      </div>

      <div className="person-img animated zoomIn" id="about">
        <img src={require('../../../../assets/profile.jpg')} alt="Freelance developer - Abdurezak" />
      </div>

      <div className="person-about animated bounceIn" >
        <h2>Abdurezak Seid</h2>

        <h3>{profileText1}</h3>
        <h3>{profileText2}</h3>

        <a className="cta-btn" href="#contact">
          <Button>
            Contact me!
          </Button>
        </a>

         <a className="cta-btn" href="/Ab-seid-resume.pdf" download>
          <Button>
            Download CV
          </Button>
        </a> 
      </div>

    </div>
  )
}


export default React.memo(MainBanner);