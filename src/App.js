import React, {useRef} from 'react'
import './App.css'
import { heroCarouselImages } from './image-constants.js'
import Navbar from './components/navbar.jsx'
import Carousel from './components/carousel.jsx'
import Services from './components/services.jsx'
import About from './components/about.jsx'
import Gallery from './components/gallery.jsx'
import ContactUs from './components/contact-us.jsx'
import Footer from './components/footer.jsx'

const App = () => {
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
      <Carousel images={heroCarouselImages} autoPlay={true} />
      <div className='content-boxes-container'>
        <Services ref={servicesRef} />
        <About ref={aboutRef} />
        <ContactUs ref={contactRef} />
        <Gallery scrollToTop={() => topRef.current.scrollIntoView()} ref={galleryRef} />
      </div>
      <Footer />
    </div>
  )
}

export default App;