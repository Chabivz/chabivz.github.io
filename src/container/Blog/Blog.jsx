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
    <div className='gpt3__blog section__padding' id="project">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="August 2022" title="Title01"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="August 2022" title="Title02"/>
          <Article imgUrl={blog03} date="August 2022" title="Title03"/>
          <Article imgUrl={blog04} date="August 2022" title="Title04"/>
          <Article imgUrl={blog05} date="August 2022" title="Title05"/>
        </div>
      </div>
    </div>
  )
}

export default Blog