import React from 'react';
import './article.css';

const Article = ({imgUrl, date, title, github, about, page}) =>  {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt__blog-container_article-image'>
        <img className='photo' src={imgUrl} alt="Projects"/>
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>{about}</p>
          <p><a href={github} target="_blank" rel="noreferrer">Github Link</a></p>
          <p><a href={page} target="_blank" rel="noreferrer">Live Page</a></p>
        </div>
      </div>
    </div>
  )
}

export default Article;