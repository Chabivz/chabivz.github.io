import React from 'react';
import gpt3Logo from '../../assets/logo.png'
import './footer.css';
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others.</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-link_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Sphynx of black quartz, judge my vow.</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Contact</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>@ 2022 Chabivz. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer;