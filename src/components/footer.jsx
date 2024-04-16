import React from 'react'
import '../css/footer.css'

import {logo} from '../constants/icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo-container'>
        <img id='footer-logo' src={logo} alt="footer-icon" />
      </div>
      <div className='footer-links-container'>
        <div className='copyright-text'>&copy; 2024 CFL Specialty Services</div>
      </div>
    </footer>
  )
}

export default Footer
