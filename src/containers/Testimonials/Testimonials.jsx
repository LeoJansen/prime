import React, { useState, useEffect } from "react";
import { testimonials } from "../../assets/constants/testimonialsArrays";
import backlogo from '../../assets/backlogo.jpg'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import "./Testimonials.scss";

const Testimonials = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  

  
  const handleclick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item">
            <img src={testimonials[currentIndex].imgUrl} alt="testimonial"/>
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleclick( currentIndex === 0  ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() => handleclick( currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Testimonials;