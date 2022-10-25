import React, { useState, useEffect } from "react";
import { testimonials } from "../../assets/constants/testimonialsArrays";
import carLight from '../../assets/carLight.jpg'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import "./Testimonials.scss";

const Testimonials = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  

  
  const handleclick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial">
    
     
      {testimonials.length && (
        <>
          <div className="testimonial-item">
            <img src={testimonials[currentIndex].imgUrl} alt="testimonial"/>
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns">
            <div className="button" onClick={() => handleclick( currentIndex === 0  ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="button" onClick={() => handleclick( currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Testimonials;