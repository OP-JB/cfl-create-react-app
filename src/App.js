import React, {useRef} from 'react'
import useMediaQuery from './hooks/useMediaQuery.jsx'
import './App.css'
import { heroCarouselImages } from './constants/hero-images'
import { heroCarouselImagesMobile } from './constants/hero-images'
import Navbar from './components/navbar.jsx'
import Carousel from './components/carousel.jsx'
import Services from './components/services.jsx'
import About from './components/about.jsx'
import Gallery from './components/gallery.jsx'
import ContactUs from './components/contact-us.jsx'
import Footer from './components/footer.jsx'

const App = () => {
  const isMobile = useMediaQuery('(max-width: 900px)');

  const topRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const galleryRef = useRef(null)
  
  const scrollRefs = [servicesRef, aboutRef, contactRef, galleryRef]
  const scrollToRef = (section) => scrollRefs[section].current.scrollIntoView({behavior: 'smooth'})

  return (
    <div ref={topRef}>
      <Navbar scrollToSection={scrollToRef} />
      {isMobile ? (
        <Carousel images={heroCarouselImagesMobile} autoPlay={true} />
      ) : (
        <Carousel images={heroCarouselImages} autoPlay={true} />
      )}
      <div className='content-boxes-container'>
        <About ref={aboutRef} isMobile={isMobile} />
        <Services ref={servicesRef} isMobile={isMobile} />
        <ContactUs ref={contactRef} isMobile={isMobile} />
        <Gallery scrollToTop={() => topRef.current.scrollIntoView()} ref={galleryRef} isMobile={isMobile} />
      </div>
      <Footer />
    </div>
  )
}

export default App;
