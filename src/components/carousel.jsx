import React, { useState, useEffect } from 'react'
import '../css/carousel.css'
import { leftArrow, rightArrow } from '../constants/icons'
import ClipLoader from 'react-spinners/ClipLoader';

const cssOverride = {
  display: "block",
  margin: "0 auto",
};


const Carousel = ({images, autoPlay, text, setCloseButtonState}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(autoPlay) {
      const intervalId = setInterval(function () {
        setCurrentIndex((previousIndex) => (previousIndex + 1) % images.length)
      }, 8000);
      return () => clearInterval(intervalId)
    }
  }, [currentIndex, autoPlay, images.length]);

  const goToPreviousImage = () => {
    const previous = currentIndex > 0 ? currentIndex - 1 : 0;
    setCurrentIndex(previous)
  }

  const goToNextImage = () => {
    setTimeout(() => {
      const next = currentIndex < images.length - 1 ? currentIndex + 1 : images.length - 1;
      setCurrentIndex(next);
      setLoading(false);
      setCloseButtonState(true);
    }, 1000);
    setCloseButtonState(false);
    setLoading(true);
  }

  return (
    <div className="carousel-container">
      {autoPlay ? (
        <div>
          <img src={images[currentIndex]} alt='carousel-img' />
          <h1 className={`carousel-img-${currentIndex}`}>{text[currentIndex]}</h1>
        </div>
      ) : !loading ? (
        <div>
          {currentIndex > 0 && <div className="left-arrow arrows" onClick={goToPreviousImage}>
            <img src={leftArrow} alt="previous image" />  
          </div>}
          <img src={images[currentIndex]} alt='carousel-img' />
          {currentIndex < images.length - 1 && <div className="right-arrow arrows" onClick={goToNextImage}>
            <img src={rightArrow} alt="next image" />  
          </div>}
        </div>
        ) : (
          <ClipLoader
            color="#FFFFFF"
            loading={loading}
            cssOverride={cssOverride}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
      )}
    </div>
  )
}

export default Carousel;
