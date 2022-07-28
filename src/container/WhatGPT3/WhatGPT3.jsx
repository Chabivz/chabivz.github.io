import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="about">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">About me</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="" text="Hello! My name is Chris. My interest in computer science started back in 2005 when my parents brought me to a near community college. I was taught how to open .EXE file on command promt and was taught on how easy to write series of command and save it on a bat file." />
      <Feature title="" text="After working for different line of work; food industry, warehouse operations, and production operation -- I have learned that I could still create a series of computer instruction to  build and develop web applications!" />
      <Feature title="" text="Recently certified by University of Washington Bootcamps with proficiency across the MERN stack (MongoDB, Express.js, React, Node.js)." />
    </div>
  </div>
);

export default WhatGPT3;