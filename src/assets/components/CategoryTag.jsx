import React from 'react'

import "./CategoryTag.css"


function CategoryTag(props) {
  const colors = {
    "WordPress": "#280a45",
    "React": "#9ef1d2",
    "E-Commerce": "#47398b",
    "Node.js": "#95adbe",
    "MongoDB": "#e0f0ea"
  }
  return (
    <div className='category-tag' style={{backgroundColor: colors[props.tag]}}>{props.tag}</div>
  )
}

export default CategoryTag