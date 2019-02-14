import React from 'react'

import back2 from '../images/back2.png'
import hexagonOrange from '../images/hexagonOrange.png'
import hexagonGrey from '../images/hexagonGrey.png'
import { skills } from '../utils/data'

const Portfolio = () => (
  <div id='portfolio' className='section black-back'
    style={{backgroundImage: `url(${back2})`}}>
    <div className='compress'>
      <h1>PORTFOLIO</h1>
      <ul className='skills-wrapper'>
        {Object.keys(skills).map(categoryId => (
          <li key={categoryId} className='skills-item'>
            <h4>{categoryId}</h4>
            <ul>
              {Object.keys(skills[categoryId]).map(skillId => (
                <li key={skillId} className='skill-wrapper'>
                  <h5>{skills[categoryId][skillId].name}</h5>
                  <ul className='stars-wrapper'>
                    {[0,1,2,3,4].map(number => (
                      number < skills[categoryId][skillId].skill
                        ? <img key={number} src={hexagonOrange} alt='Pim van Schayik orange hexagon'/>
                        : <img key={number} src={hexagonGrey} alt='Pim van Schayik grey hexagon'/>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Portfolio
