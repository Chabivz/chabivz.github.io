import React from 'react';
import './article.css'

const Article = ({imgUrl, date, title, github, about}) =>  {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt__blog-container_article-image'>
        <img src={imgUrl} alt="Projects"/>
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>{about}</p>
          <p><a href={github} target="_blank" rel="noreferrer">Read More</a></p>
        </div>
      </div>
    </div>
  )
}

export default Article;