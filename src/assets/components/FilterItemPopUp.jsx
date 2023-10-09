import React from "react";

import Modal from "./Modal";

import './FilterItemPopUp.css'

const FilterItemPopUp = (props) => {
    return (
        <>
            <Modal onClick={props.closePopUp} />
            <div className="filter-item-popup">
                <div className="filter-item-popup-title">{props.portfolioItem.title}</div>
                <div className="filter-item-popup-description">{props.portfolioItem.summary}</div>
            </div>
        </>
    )
}

export default FilterItemPopUp