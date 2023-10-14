import React from 'react'

import { LazyLoadImage, Effect } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
      <Categories categories={props.portfolioItem.technologies}/>
    </div>
  )
}

export default FilterItem