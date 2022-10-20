import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'
function Possibility() {
  return (
    <div className="gpt3__possibility section__padding">
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="Possibility" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The Possibility</h1>
        <p>Sphynx of black quartz, judge my vow</p>
      </div>
    </div>
  )
}

export default Possibility