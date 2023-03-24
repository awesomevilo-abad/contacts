import React from "react"
import './style.css'
import Cat2 from "./assets/images/fluffykins.png"
import Cat3 from "./assets/images/felix.png"
import Cat4 from "./assets/images/pumpkin.png"
import PhoneIcon from './assets/images/phone-icon.png'
import MailIcon from "./assets/images/mail-icon.png"

import Contact from './components/Contact'

function App() {
    return (
        <div className="contacts">

            <Contact 
                img = 'mr-whiskerson.png'
                name = 'Mr. Whiskerson'
                no = '(212) 555-2345'
                email = 'fluff@me.com'
            />
            
        </div>
    )
}

export default App