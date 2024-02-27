import React from 'react'
import '../css/footer.css'
import logoIcon from '../assets/img/CFL-logo.png';
import mobileLogoIcon from '../assets/img/CFL-logo_mobile.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo-container'>
        <div id='footer-logo'>
          <img src={logoIcon} />
          <span>Crating and third-party solutions</span>
        </div>
        <img id='mobile-footer-logo' src={mobileLogoIcon} />
      </div>
      <div className='footer-links-container'>
        <div className='copyright-text'>&copy; 2023 CFL Specialty Services</div>
      </div>
    </footer>
  )
}

export default Footer
