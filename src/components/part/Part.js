import React from 'react'
import { RiCheckboxLine } from "react-icons/ri";
import './part.scss';

const Part = ({title, items}) => {
  return (
    <div className="part">
    <h3 className='gradient__text2'>{title}</h3>
    <div style={{marginTop:"1rem"}}>
    {items.map((item) => (
    <div className="item"> 
      <RiCheckboxLine/>
      <p>{item.text}</p>
      </div>
    ))}
    </div>
    
  </div>
  )
}

export default Part