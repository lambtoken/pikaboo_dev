import React, { useState } from 'react'
import FilterItem from './FilterItem'
import data from '../data/data'
import FilterButton from './FilterButton'
import './Filter.css'

const Filter = () => {

  const [category, setCategory] = useState('all')

  return (
    <>
      <h2 className='something-we-worked-on'>Something we worked on:</h2>
      <div className='button-container'>
        <FilterButton>Art</FilterButton>
        <FilterButton>Business</FilterButton>
        <FilterButton>Portfolio</FilterButton>
        <FilterButton>Shop</FilterButton>
      </div>
        <div className='filter-container'>
          {data.PortfolioData.map((item, key) => {
            return <FilterItem portfolioItem={item} key={key}></FilterItem>
          })}
        </div>
    </>
        )
}

        export default Filter