import React from 'react'

import back1 from '../images/back1.jpg'
import contactName from '../images/contactName.png'
import contactAddress from '../images/contactAddress.png'
import contactLinkedIn from '../images/contactLinkedIn.png'

export const Contact = () => (
  <div id='contact' className='section black-back' style={{ backgroundImage: `url(${back1})` }}>
    <div className='compress'>
      <h1>CONTACT</h1>
      <div className='contact-wrapper'>
        <div className='contact-item black-text' style={{ backgroundImage: `url(${contactName})` }}>
          <h4>Pim van Schayik</h4>
          <a href='mailto:pimvschayik@live.nl'>pimvschayik@live.nl</a>
          <a href="tel:+16047048254">+1 (604) 704 8254</a>
        </div>
        <div className='contact-item black-text' style={{ backgroundImage: `url(${contactAddress})` }}>
          <h4>Address</h4>
          <a href="https://www.google.ca/maps/place/958+Bute+St,+Vancouver,+BC+V6E+1Y8/@49.2346036,-123.1230298,11.08z/data=!4m5!3m4!1s0x5486722a6eca34fb:0x1f134bdbb3329d3c!8m2!3d49.2842927!4d-123.1293298" target="_blank">3-958 Bute St.
          <span>Vancouver, BC</span>
          </a>
        </div>
        <div className='contact-item' style={{ backgroundImage: `url(${contactLinkedIn})` }}>
          <h4>LinkedIn</h4>
          <a className="white" href="http://www.linkedin.com/in/pimvschayik" target="_blank">www.linkedin.com/
            <span>in/pimvschayik</span>
          </a>
        </div>
      </div>
    </div>
  </div>
)
