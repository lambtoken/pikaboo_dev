import React from 'react'
import FilterItem from './FilterItem'
import data from '../data/data'

import './Filter.css'

const Filter = () => {
  return (
    <>
      <h2>Something we worked on:</h2>
        <div className='filter-container'>
          {data.PortfolioData.map((item, key) => {
            return <FilterItem portfolioItem={item} key={key}></FilterItem>
          })}
        </div>
    </>
        )
}

        export default Filter