import React from 'react'
import '../css/footer.css'

import {desktopLogo, mobileLogo} from '../constants/icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo-container'>
        <div id='footer-logo'>
          <img src={desktopLogo} alt="footer-icon" />
          <span>Crating and third-party solutions</span>
        </div>
        <img id='mobile-footer-logo' src={mobileLogo} alt="footer-icon" />
      </div>
      <div className='footer-links-container'>
        <div className='copyright-text'>&copy; 2023 CFL Specialty Services</div>
      </div>
    </footer>
  )
}

export default Footer
