import React, {useState, useEffect} from 'react'
import '../css/navbar.css'

import {desktopLogo, mobileLogo, hamburgerMenu} from '../constants/icons';

const Navbar = ({scrollToSection}) => {
  const [mobileNavIsVisible, setMobileNavIsVisible] = useState(false)

  const toggleMobileNav = () => {
    setMobileNavIsVisible(!mobileNavIsVisible)
  }

  const scrollToSectionFromMobileNav = (section) => {
    setMobileNavIsVisible(false)
    scrollToSection(section)
  }

  const handleResize = () => {
    if (window.innerWidth > 800) {
      setMobileNavIsVisible(false)
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  });

  return (
    <div className="nav-container">
      <nav>
        <img id="logo" src={desktopLogo} alt="nav-logo" />
        <img id="mobile-logo" src={mobileLogo} alt="nav-logo" />
        <span id="slogan">Crating and third-party solutions</span>
        <div className="nav-links-container">
          <span onClick={() => scrollToSection(0)}>Services</span>
          <span onClick={() => scrollToSection(1)}>About</span>
          <span onClick={() => scrollToSection(2)}>Contact</span>
          <span onClick={() => scrollToSection(3)}>Gallery</span>
        </div>
        <img src={hamburgerMenu} className='mobile-nav-icon' onClick={toggleMobileNav} alt="mobile-menu" />
        {mobileNavIsVisible && (
          <div className='mobile-nav-menu'>
            <div className="mobile-nav-links-container">
              <span onClick={() => scrollToSectionFromMobileNav(0)}>Services</span>
              <span onClick={() => scrollToSectionFromMobileNav(1)}>About</span>
              <span onClick={() => scrollToSectionFromMobileNav(2)}>Contact</span>
              <span onClick={() => scrollToSectionFromMobileNav(3)}>Gallery</span>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
