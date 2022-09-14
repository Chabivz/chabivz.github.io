import React from 'react'
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
function Blog() {
  const projectData = [
    {
      title: "MySQL Employee Tracker",
      about: "A terminal based Content Management System using node, inquirer, and MySQL. The Employee Tracker is a way to display information stored in the database for non-developers. The project will be using the CRUD",
      github: "https://github.com/Chabivz/012-MySQLEmployeeTracker",
      date: "01/01/2022",
      img: blog01,
    },
    {
      title: "Tech Blog",
      about: "A web app where I can write and share information about coding and desing. Published on Heroku app using handlebars, mySQL and Express",
      github: "https://github.com/Chabivz/014-TechBlog",
      date: "",
      img: blog02,
    },
    {
      title: "Budget Tracker ",
      about: "",
      github: "https://github.com/Chabivz/019-PWA-BudgetTracker",
      date: "",
      img: blog03,
    },
    {
      title: "Budget Tracker ",
      about: "",
      github: "https://github.com/Chabivz/019-PWA-BudgetTracker",
      date: "",
      img: blog04,
    },
    {
      title: "Budget Tracker ",
      about: "",
      github: "https://github.com/Chabivz/019-PWA-BudgetTracker",
      date: "",
      img: blog05,
    },
  ];
  
  return (
    <div className='gpt3__blog section__padding' id="project">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date={projectData[0].date} title={projectData[0].title} about={projectData[0].about} link={projectData[0].github}/>
        </div>
        <div className='gpt3__blog-container_groupB'>
        {projectData.map(projectData => (
          
          <Article imgUrl={projectData.img} date={projectData.date} about={projectData.about} title={projectData.title} link={projectData.github}/>
          
        ))}
        
        
        </div>
      </div>
    </div>
  )
}

export default Blog