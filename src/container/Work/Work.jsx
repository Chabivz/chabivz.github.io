import React from 'react';
import './work.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, mysqlemptracker, techbloggif } from './imports';

function Blog() {
  const projectData = [
    {
      title: "Travel Advisor",
      about: "An app that helps look for restaurants, hotels and attractions using Google Maps.",
      github: "https://github.com/Chabivz/travel-advisor",
      date: "09/12/2022",
      img: blog01,
    },
    {
      title: "MySQL Employee Tracker",
      about: "A terminal based Content Management System using node, inquirer, and MySQL. The Employee Tracker is a way to display information stored in the database for non-developers. The project will be using the CRUD",
      github: "https://github.com/Chabivz/012-MySQLEmployeeTracker",
      date: "01/01/2022",
      img: mysqlemptracker,
    },
    {
      title: "Tech Blog",
      about: "A web app where I can write and share information about coding and design. Published on Heroku app using handlebars, mySQL and Express",
      github: "https://github.com/Chabivz/014-TechBlog",
      date: "01/01/2022",
      img: techbloggif,
    },
    {
      title: "Budget Tracker",
      about: "A web app where I can write and share information about coding and desing. Published on Heroku app using handlebars, mySQL and Express",
      github: "https://github.com/Chabivz/019-PWA-BudgetTracker",
      date: "01/01/2022",
      img: blog03,
    },
    {
      title: "Team Profile Generator",
      about: "A Node.js command-line application that takes in information about employees on a software engineering team, that generates an HTML webpage that diesplays summaries for each person.",
      github: "https://github.com/Chabivz/TeamProfileGenerator",
      date: "01/01/2022",
      img: blog02,
    },
    
    {
      title: "E-Commerce Backend",
      about: "A Node.js command-line application that takes in information about employees on a software engineering team, that generates an HTML webpage that diesplays summaries for each person.",
      github: "https://github.com/Chabivz/E-CommerceBackEnd",
      date: "01/01/2022",
      img: blog03,
    },
  ];
  
  return (
    <div className='gpt3__blog section__padding' id="work">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Work & Projects</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className='gpt3__blog-container_groupB'>
        {projectData.map(projectData => (
          
          <Article imgUrl={projectData.img} date={projectData.date} about={projectData.about} title={projectData.title} github={projectData.github}/>
          
        ))}
        </div>
      </div>
    </div>
    
  )

  
}

export default Blog