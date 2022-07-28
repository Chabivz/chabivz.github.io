import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Front End',
    text: 'HTML, XML, DOM, CSS, JS, jQuery, Bootstrap, React, UX/UI',
  },
  {
    title: 'Back End',
    text: 'Node, Express, RestfulAPI, Apollo Server',
  },
  {
    title: 'Database',
    text: 'MySQL, Mongoose, MongoDB',
  },
  {
    title: 'Development & Operations',
    text: 'Git, Github, Scrum, Agile, Heroku, GraphQL, Robo3T, MongoDB Atlas, Insomnia',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Skills</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;