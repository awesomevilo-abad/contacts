import React from "react";

import PhoneIcon from '../assets/images/phone-icon.png'
import MailIcon from "../assets/images/mail-icon.png"
import '../style.css'
// import Image from '../assets/images/mr-whiskerson.png'

function Contact ({img, name, no, email }) {
    return (
        <div className="contact-card">
            <img src ={`src/assets/images/${img}`}/>
            <h3 className="contact-card--name">{name}</h3>
            <div className="info-group">
                <img src={PhoneIcon} />
                <p>{no}</p>
            </div>
            <div className="info-group">
                <img src={MailIcon} />
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Contact