import React, { Fragment, forwardRef, useState } from 'react'
import '../css/gallery.css'
import Carousel from './carousel.jsx';
import { galleryCarouselImages } from '../constants/gallery.js';

const Gallery = forwardRef(({scrollToTop}, ref) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const openModal = () => {
    document.body.style.overflow = 'hidden';
    scrollToTop()
    setModalIsOpen(true)
  }

  const closeModal = () => {
    document.body.style.overflow = 'unset';
    setModalIsOpen(false);
  }
  
  return (
    <div className='gallery-container' ref={ref}>
      <h4 onClick={openModal}>View Gallery</h4>
      <img className='placeholder-img' src={galleryCarouselImages[0]} alt='gallery-img' />
        {modalIsOpen && (
          <Fragment>
            <div className='modal-overlay'></div>
            <div className='modal-container'>
              <div className='modal-wrapper'>
                <div className="modal-close-btn" onClick={closeModal}>&#x2715;</div>
                <Carousel images={galleryCarouselImages} />
              </div>
            </div>
          </Fragment>
        )}
    </div>
  )
})

export default Gallery;
