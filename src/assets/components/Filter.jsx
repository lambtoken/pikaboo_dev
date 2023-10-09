import React, { useState } from 'react'
import FilterItem from './FilterItem'
import data from '../data/data'
import FilterButton from './FilterButton'
import FilterItemPopUp from './FilterItemPopUp'

import './Filter.css'

const Filter = () => {

  const [category, setCategory] = useState('all')
  const [openedItem, setOpenedItem] = useState('')

  const itemClickHandler = () => {
    alert('mame u blizini 18+')
    setOpenedItem()
  }

  const clickHandler = () => {
    if (category === event.target.value) {
      setCategory('all')
    } else {
      setCategory(event.target.value);
    }
  }

  const closePopUpClickHandler = () => {
    setOpenedItem('')
  }

  const filteredData = category == "all" ? data.PortfolioData : data.PortfolioData.filter(items => items.category.includes(category));


  return (
    <>
      <h2 className='something-we-worked-on'>Something we worked on:</h2>
      <div className='button-container'>
        <FilterButton clickHandler={clickHandler} currentCategory={category}>Art</FilterButton>
        <FilterButton clickHandler={clickHandler} currentCategory={category}>Business</FilterButton>
        <FilterButton clickHandler={clickHandler} currentCategory={category}>Portfolio</FilterButton>
        <FilterButton clickHandler={clickHandler} currentCategory={category}>Platform</FilterButton>
        <FilterButton clickHandler={clickHandler} currentCategory={category}>Shop</FilterButton>
      </div>
      <div className='filter-container'>
        {filteredData.map((item, key) => {
          return <FilterItem onClick={() => {
            setOpenedItem(item.title)
          }} 
          portfolioItem={item} key={key}></FilterItem>
        })}
      </div>
      {openedItem && <FilterItemPopUp closePopUp={closePopUpClickHandler} portfolioItem={data.PortfolioData.filter((item) => item.title == openedItem )[0]}/>}
    </>
  )
}

export default Filter