import React, { useState, useEffect } from "react";
import { testimonials } from "../../assets/constants/testimonialsArrays";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import {motion} from 'framer-motion';
import "./Testimonials.scss";

const Testimonials = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  

  
  const handleclick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <motion.div className="testimonial"
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 0.5 }} id="testimonial">
    
     
      {testimonials.length && (
        <div className="container">
          <div className="testimonial-item">
            <img src={testimonials[currentIndex].imgUrl} alt="testimonial"/>
            <div className="content">
              <p className="gradient__text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].companyPosition}</h5>
                <h5>{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns">
            <div className="gradient__text" onClick={() => handleclick( currentIndex === 0  ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="button" onClick={() => handleclick( currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Testimonials;