import React, { forwardRef } from 'react'
import '../css/services.css'
import ContentBox from './content-box.jsx'
import {services} from '../constants/services.js'

import pianoImgSrc from '../assets/img/piano.jpg';

const Services = forwardRef(({isMobile, ...props}, ref) => {
  return (
    <div className='services-container content-box-container' ref={ref}>
      <ContentBox title="Services" imgSrc={pianoImgSrc} dir={isMobile ? 'rtl' : 'ltr'}>
        <ul>
          {services.length && services.map(({title, rows}, idx) => (
            <div key={title + String(idx)}>
              <h5 className='service-title'>{title}</h5>
              <ul>
                {rows.map((row, idx) => (
                  <li key={row + String(idx)}>{row}</li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </ContentBox>
    </div>
  )
})

export default Services
