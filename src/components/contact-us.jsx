import React, { forwardRef } from 'react'
import '../css/contact-us.css'
import ContentBox from './content-box'
import ContactInfo from './contact-info'
import Map from './map'
import locationIcon from '../assets/img/location-icon.png';

const ContactUs = forwardRef((props, ref) => {  
  return (
    <div className='contact-us-container content-box-container' ref={ref}>
      <ContentBox title="Contact Us" iconSrc={locationIcon}>
        <ContactInfo />
        <Map />
      </ContentBox>
    </div>
  )
})

export default ContactUs
