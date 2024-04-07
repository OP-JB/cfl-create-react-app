import React from 'react'
import '../css/map.css'

import coverageArea from '../assets/img/coverage-area.jpg';

const Map = () => {
  return (
    <div className='map-container'>
      <img src={coverageArea} alt='coverage-area' />
    </div>
  )
}

export default Map
