import React from "react";

import './Modal.css'

const Modal = (props) => {
    return <div onClick={props.onClick} className="modal"></div>
}

export default Modal