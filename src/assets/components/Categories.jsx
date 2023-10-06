import React from 'react'

import CategoryTag from "./CategoryTag"

import "./Categories.css"

function Categories(props) {
  return (
    <div className='categories-container'>
        {props.categories.map((item, key) => {
            return <CategoryTag tag={item} key={key}/>
        })}
    </div>
  )
}

export default Categories