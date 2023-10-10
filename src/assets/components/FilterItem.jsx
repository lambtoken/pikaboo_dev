import React from 'react'

import Categories from './Categories';

import "./FilterItem.css";

function FilterItem(props) {
  return (
    <div className={`portfolio-item ${props.className}`} onClick={props.onClick} >
      <span className='portfolio-title'> {props.portfolioItem.title}</span>
      <img src={props.portfolioItem.img}/>
      <Categories categories={props.portfolioItem.technologies}/>
    </div>
  )
}

export default FilterItem