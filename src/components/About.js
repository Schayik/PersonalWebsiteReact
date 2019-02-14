import React from 'react'

import contactbtn from '../images/contactbtn.png'

const About = () => (
  <div id='about' className='section compress white-back'>
    <h1>ABOUT ME</h1>
    <div className='about-wrapper'>
      <div className='about-video'></div>
      <div className='about-content'>
        <h2>PIM VAN SCHAYIK</h2>
        <h3>Software Developer (former Chemist)</h3>
        <p>I completed my Master with a great interest in programming. I use my skills
          to make websites and games, but can also make databases and perform data analysis.
          I have a great passion for gaming, so I believe my future lies in software development
          or the gaming industry and I am excited to jump into a new challenge!</p>
        <a href='#contact' className='contact-btn' style={{ backgroundImage: `url(${contactbtn})` }}>
          <h2>CONTACT ME</h2>
        </a>
      </div>
    </div>
  </div>
)

export default About
