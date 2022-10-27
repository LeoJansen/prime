import React from 'react';
import { BsFillCheckSquareFill } from "react-icons/bs";


import './article.scss';

const Article = ({imgUrl, itens}) => {
  return (
    <div className='gpt3__blog-container_article gradient__bg2'>
        <div className='image'>
            <img src={imgUrl} alt="blog" />
        </div>
        <div className="content" >
            <div>
                <h3 className="gradient__text3">Ítens de Verificação</h3>
            </div>
            {itens?.map((item) => (
              <div className="item">
                 <BsFillCheckSquareFill  className="icon"/> <p>{item.text}</p>
              </div>
            ))}
            
        </div>
    </div>
  )
}

export default Article