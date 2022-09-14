import React from 'react';
// import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className='gpt3__header section__padding' id='home'>
    <div className='gpt3__header-content'>
      <h2 className='gradient__text'>Hi, I'm </h2>
      <h1 className='gradient__text'>Chris Abiva</h1>
      <p>I'm an aspiring full-stack developer. I enjoy creating things that live in the internet. Currently, focused on building accessible website, mastering Big O and reading Cracking the Coding Interview. </p>
    </div>
    
    {/* <div className='gpt3__header-image'>
      <img src={ai} alt="ai" />
    </div> */}
  </div>
)

export default Header;