import React from 'react'

import './ContactCard.css'

const ContactCard = (props) => {
  return (
    <div className="contact-card-container">
        <div className='contact-card-image'>
            <img src={props.dev.img} alt="profile picture" />
        </div>
        <div className='meta-container'>
            <div className='contact-card-name'>{props.dev.name}</div>
            <div className='contact-card-title'>{props.dev.title}</div>
            <a className='contact-card-linkedin' href={props.linkedin}>LinkedIn</a>
        </div>
    </div>
  )
}

export default ContactCard