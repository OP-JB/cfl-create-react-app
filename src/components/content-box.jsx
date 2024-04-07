import React from 'react'
import '../css/content-box.css'

const ContentBox = ({title, imgSrc, children}) => (
  <div className="content-box">
    <div className='content-left'>
      {imgSrc && <img className='mobile-img' src={imgSrc} alt='content-box-img' />}
      {imgSrc && <img className='desktop-img' src={imgSrc} alt='content-box-img' />}
    </div>
    <div className='content-right text-light'>
      {title && <h4>{title}</h4>}
      {children && <div>{children}</div>}
    </div>
  </div>
)

export default ContentBox;
