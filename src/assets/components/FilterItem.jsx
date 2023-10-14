import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import Categories from './Categories';

import "./FilterItem.css";

function FilterItem(props) {
  return (
    <div className={`portfolio-item ${props.className}`} onClick={props.onClick} >
      <lazySizes className="img"></lazySizes>
      <span className='portfolio-title'> {props.portfolioItem.title}</span>
      <LazyLoadImage
        alt="thumbnail"
        effect="blur"
        src={`./images/${props.portfolioItem.title}.png`}
        placeholderSrc={`./images/${props.portfolioItem.title}_low.jpeg`}
      />
      {/* <img
	      alt="thumbnail"
	      src={`./images/${props.portfolioItem.title}_low`}
	      data-src={`./images/${props.portfolioItem.title}`}
	      className="lazyload"
      /> */}
      <Categories categories={props.portfolioItem.technologies}/>
    </div>
  )
}

export default FilterItem