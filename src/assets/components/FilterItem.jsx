import React from 'react'

import Categories from './Categories';

import "./FilterItem.css";

function FilterItem(props) {
  return (
    <div className={`portfolio-item ${props.className}`} onClick={props.onClick} >
      <span className='portfolio-title'> {props.portfolioItem.title}</span>
      <img src={props.portfolioItem.img}/>
      {/* <p className='portfolio-content'>Designed a sleek one-page site highlighting our client's presentation skills. Built on WordPress with a custom theme, the site elegantly showcases their expertise. Visitors can now explore captivating storytelling and design, enhancing the impact of pitches and presentations.</p> */}
      <Categories categories={props.portfolioItem.technologies}/>
    </div>
  )
}

export default FilterItem