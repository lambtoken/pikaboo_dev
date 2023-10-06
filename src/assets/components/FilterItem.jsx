import React from 'react'

import "./FilterItem.css";

function FilterItem(props) {
  return (
    <div className='portfolio-item' >
      <span className='portfolio-title'> {props.portfolioItem.title}</span>
      <img src={props.portfolioItem.img}/>
      {/* <p className='portfolio-content'>Designed a sleek one-page site highlighting our client's presentation skills. Built on WordPress with a custom theme, the site elegantly showcases their expertise. Visitors can now explore captivating storytelling and design, enhancing the impact of pitches and presentations.</p> */}
      <ul className='portfolio-categories'>
      {props.portfolioItem.technologies.map((item, key) => {
        return <li className='portfolio-category category'>{item}</li>
      }
      )}

        {/* <li className='portfolio-category category'>WordPress</li>
        <li className='portfolio-category category'>Custom Theme</li> */}

      </ul>


    </div>
  )
}

export default FilterItem