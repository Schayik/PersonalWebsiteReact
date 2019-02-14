import React from 'react'

import back1 from '../images/back1.jpg'
import playgame from '../images/playgame.png'

const PlayGame = () => (
  <div id='playgame' className='section black-back play-game' style={{backgroundImage: `url(${back1})`}}>
    <a href='#playgame'>
      <img src={playgame} alt='Pim van Schayik play game button'/>
    </a>
  </div>
)

export default PlayGame
