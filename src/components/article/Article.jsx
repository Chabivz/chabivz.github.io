import React from 'react';
import './article.css'

const Article = ({imgUrl, date, title}) =>  {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt__blog-container_article-image'>
        <img src={imgUrl} alt="Projects"/>
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>Read Full Project</p>
        </div>
      </div>
    </div>
  )
}

export default Article;