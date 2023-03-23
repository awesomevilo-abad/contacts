import React from "react"
import './style.css'
import Cat1 from './assets/images/mr-whiskerson.png'
import Cat2 from "./assets/images/fluffykins.png"
import Cat3 from "./assets/images/felix.png"
import Cat4 from "./assets/images/pumpkin.png"
import PhoneIcon from './assets/images/phone-icon.png'
import MailIcon from "./assets/images/mail-icon.png"

import Contact from './components/Contact'


/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

function App() {
    return (
        <div className="contacts">

            <Contact />
            <Contact />
            <Contact />
            <Contact />
            
            <div className="contact-card">
                <img src={Cat2}/>
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <img src={PhoneIcon}/>
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <img src={MailIcon} />
                    <p>fluff@me.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src={Cat3}/>
                <h3>Felix</h3>
                <div className="info-group">
                    <img src={PhoneIcon}/>
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img src={MailIcon} />
                    <p>thecat@hotmail.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src={Cat4}/>
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <img src={PhoneIcon}/>
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <img src={MailIcon} />
                    <p>pumpkin@scrimba.com</p>
                </div>
            </div>
            
        </div>
    )
}

export default App