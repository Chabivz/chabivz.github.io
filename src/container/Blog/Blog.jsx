import React from 'react'
import './blog.css';
function Blog() {
  const projectData = [
    {
      title: "MySQL Employee Tracker",
      about: "A terminal based Content Management System using node, inquirer, and MySQL. The Employee Tracker is a way to display information stored in the database for non-developers. The project will be using the CRUD",
      github: "https://github.com/Chabivz/012-MySQLEmployeeTracker",
      link: "https://github.com/Chabivz/012-MySQLEmployeeTracker",
    },
    {
      title: "",
      about: "",
      github: "",
      link: "",
    },
    {
      title: "",
      about: "",
      github: "",
      link: "",
    },
  ];
  return (
    <div className='project__container'>
      <div>
        <p>Featured Project</p>
      </div>
      <div className='project__cards'>
        <div></div>
      </div>
    </div>
  )
}

export default Blog