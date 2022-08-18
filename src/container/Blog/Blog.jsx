import React from 'react'
import './blog.css';
import Project from '../../components/project/Project'

function Blog() {
  const projectData = [
    {
      title: "MySQL Employee Tracker",
      about: "A terminal based Content Management System using node, inquirer, and MySQL. The Employee Tracker is a way to display information stored in the database for non-developers. The project will be using the CRUD",
      github: "https://github.com/Chabivz/012-MySQLEmployeeTracker",
      link: "https://github.com/Chabivz/012-MySQLEmployeeTracker",
    },
    {
      title: "Tech Blog",
      about: "A web app where I can write and share information about coding and desing. Published on Heroku app using handlebars, mySQL and Express",
      github: "https://github.com/Chabivz/014-TechBlog",
      link: "https://limitless-citadel-24664.herokuapp.com/articles/13",
    },
    {
      title: "Budget Tracker ",
      about: "",
      github: "https://github.com/Chabivz/019-PWA-BudgetTracker",
      link: "",
    },
  ];
  return (
    <div className='project__container'>
      <div>
        <p>Featured Project</p>
      </div>
      <div className='project__cards'>
        {projectData.map((item, index) => (
          <Project />
        ))};
      </div>
    </div>
  )
}

export default Blog