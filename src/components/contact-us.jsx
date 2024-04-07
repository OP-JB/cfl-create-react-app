import React, { forwardRef } from 'react'
import '../css/contact-us.css'
import ContentBox from './content-box'
import ContactInfo from './contact-info'

import coverageArea from '../assets/img/coverage-area.jpg';

const ContactUs = forwardRef((props, ref) => {  
  return (
    <div className='contact-us-container content-box-container' ref={ref}>
      <ContentBox title="Contact Us" imgSrc={coverageArea}>
        <ContactInfo />
        {/* <Map /> */}
      </ContentBox>
    </div>
  )
})

export default ContactUs
