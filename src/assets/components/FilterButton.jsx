import React from "react";

import './FilterButton.css'


const FilterButton = (props) => {
    return <input className={`filter-button ${props.currentCategory==props.children ? 'active':''}`} type="button" value={props.children} onClick={props.clickHandler}/>
}

export default FilterButton