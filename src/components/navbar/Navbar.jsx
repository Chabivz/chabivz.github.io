import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/logo.png';

const Menu = () => (
  <>
  <p  className='slide-in-top-0'><a href='#about'>About</a></p>
  <p  className='slide-in-top-1'><a href='#experience'>Experience</a></p>
  <p  className='slide-in-top-2'><a href='#work'>Work</a></p>
  <p  className='slide-in-top-3'><a href='#contact'>Contact</a></p>
  <p  className='slide-in-top-4'><a href='#resume'>Resume</a></p>
  </>
);

// ClassNaming Convention BEM --> Block Element Modifier
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links-logo slide-in-top-4'>
          <img src={logo} alt="Chris A Logo"/>
        </div>
        <div className='gpt3__navbar-links-container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#FFF" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#FFF" size={27} onClick={() => setToggleMenu(true)}  />
        } 
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;