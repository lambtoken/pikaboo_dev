import React from 'react'
import data from '../data/data'

import "./Hero.css"

function Hero() {
  return (
    <div className='hero'>
        <h1>{data.HeroContent}</h1>
    </div>
  )
}

export default Hero