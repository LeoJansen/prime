import React from "react";
import Article from '../../components/article/Article'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.scss'
import { cabecotes } from "../../assets/constants/parts";

const Blog = () => {
  return (
    <div className="gpt3__blog" id="blog">
      <div className="heading">
        <h1 className="title"> Quer ter uma ideia de como funciona um <span>serviço qualificado</span> de retífica de motor?</h1>
      </div>
      <div className="container">
        <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog01}  itens={cabecotes.slice(0,2)}/>
        </div>
        <div className="gpt3__blog-container_groupB">
            <Article imgUrl={blog02} itens={cabecotes.slice(2,4)}/>
            <Article imgUrl={blog03} itens={cabecotes.slice(4,6)}/>
            <Article imgUrl={blog04} itens={cabecotes.slice(6,8)}/>
            <Article imgUrl={blog05} itens={cabecotes.slice(9,11)}/>
        </div>    
          
      </div>
    </div>
  );
};

export default Blog;
