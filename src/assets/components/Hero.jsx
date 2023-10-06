import React from 'react'
import data from '../data/data'

import "./Hero.css"

function Hero() {
  return (
    <div className='hero'>
        <h2>{data.HeroContent}</h2>

    </div>
  )
}

export default Hero