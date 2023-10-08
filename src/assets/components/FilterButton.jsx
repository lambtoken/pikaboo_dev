import React from "react";

import './FilterButton.css'

const FilterButton = (props) => {
    return <input className={`filter-button ${props.active && 'active'}`} type="button" value={props.children} />
}

export default FilterButton