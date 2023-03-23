import React from "react";

import Cat1 from '../assets/images/mr-whiskerson.png'
import PhoneIcon from '../assets/images/phone-icon.png'
import MailIcon from "../assets/images/mail-icon.png"
import '../style.css'

export default function () {
    return (
        <div className="contact-card">
            <img src={Cat1}/>
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img src={PhoneIcon} />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img src={MailIcon} />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    )
}