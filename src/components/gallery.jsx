import React, { Fragment, forwardRef, useState } from 'react'
import '../css/gallery.css'
import Carousel from './carousel.jsx';
import { galleryCarouselImages } from '../constants/gallery';

const Gallery = forwardRef(({scrollToTop}, ref) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(true);
  
  const openModal = () => {
    document.body.style.overflow = 'hidden';
    scrollToTop()
    setModalIsOpen(true)
  }

  const closeModal = () => {
    document.body.style.overflow = 'unset';
    setModalIsOpen(false);
  }

  const setCloseButtonState = (state) => {
    setShowCloseButton(state);
  }
  
  return (
    <div className='gallery-container' ref={ref}>
      <h4 onClick={openModal}>Gallery</h4>
      <img className='placeholder-img' src={galleryCarouselImages[18]} alt='gallery-img' onClick={openModal} />
        {modalIsOpen && (
          <Fragment>
            <div className='modal-overlay'></div>
            <div className='modal-container'>
              <div className='modal-wrapper'>
                {showCloseButton && <div className="modal-close-btn" onClick={closeModal}>&#x2715;</div>}
                <Carousel images={galleryCarouselImages} setCloseButtonState={setCloseButtonState} />
              </div>
            </div>
          </Fragment>
        )}
    </div>
  )
})

export default Gallery;
