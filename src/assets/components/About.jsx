import React from 'react'
import  Data from "/src/assets/data/data"

import "./About.css"
function About() {
    console.log(Data);
    return (
        <div className='about-part'>
            <h2 className='about-title'></h2>
            <p className='about-text'>
                {Data.AboutData}
            </p>
        </div>
    )
}

export default About