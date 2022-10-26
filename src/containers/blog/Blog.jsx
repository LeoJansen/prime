import React from "react";
import Article from '../../components/article/Article'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.scss'

const Blog = () => {
  return (
    <div className="gpt3__blog" id="blog">
      <div className="heading">
        <h1 className="title"> Quer ter uma ideia de como funciona um <span>serviço qualificado</span> de retífica de motor?</h1>
      </div>
      <div className="container">
        <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog01}  date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
            <Article imgUrl={blog02} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
            <Article imgUrl={blog03} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
            <Article imgUrl={blog04} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
            <Article imgUrl={blog05} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
        </div>    
          
      </div>
    </div>
  );
};

export default Blog;
