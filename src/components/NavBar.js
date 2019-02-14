import React from 'react'

const links = ['about', 'portfolio', 'contact']

const NavBar = () => (
  <div className='black-back navbar-full-width'>
    <div className='compress navbar-content'>
      <a href='#playgame' >Pim <span>van Schayik</span></a>
      <ul>
        {links.map(link => (
          <a key={link} href={`#${link}`}>{link}</a>
        ))}
      </ul>
    </div>
  </div>
)

export default NavBar
