import React from 'react'

import "./CategoryTag.css"


function CategoryTag(props) {
  const colors = {
    "WordPress": "#3c2a4d",
    "React": "#503a65",
    "E-Commerce": "#574f7d",
    "Node.js": "#95adbe",
    "MongoDB": "#e0f0ea"
  }
  return (
    <div className='category-tag' style={{backgroundColor: colors[props.tag]}}>{props.tag}</div>
  )
}

export default CategoryTag