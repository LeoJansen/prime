import React from "react";


import { motion } from "framer-motion";
import "./header.scss";

const offscreen = {
  x:500,
  opacity:0
}
const onscreen = {
  x: 0, 
  opacity:1,
}
const card1 = {offscreen, onscreen: {...onscreen, transition: {duration:2, delay: 0.5}}};
const card2 = { offscreen, onscreen : {...onscreen, transition: { duration:2, delay:2.5  }}};
const card3 = { offscreen, onscreen : {...onscreen, transition: { duration:2, delay:4.5  }}};
const card4 = { offscreen: {x:-500, opacity:0}, onscreen : {...onscreen, transition: { duration:2, delay:6.5  }}};

const Header = () => {

  

  return (
    <div className="gpt3__header" id="Home"  
      

    >
      <div className="content">
        <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}

          

          
          className="quality">
            <motion.div  className="quality" variants={card1}>
            <h3>Precisão</h3>
            </motion.div>
          
        </motion.div>
        <motion.div 
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ amount: 0.8 }}
         className="quality">
          <motion.div  className="quality" variants={card2}>
          <h3>Confiança</h3>
          </motion.div>
          

        </motion.div>
        <motion.div  initial="offscreen"
         whileInView="onscreen"
         viewport={{ amount: 0.8 }}
         className="quality" 
         >
          <motion.div  className="quality" variants={card3}>
          <h3>Profissionalismo</h3>
          </motion.div>
          
        </motion.div>

        <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
        className="quest" 

          >
            <motion.div   variants={card4}>
            <h1 className="gradient__text">
            Vamos consertar juntos?
          </h1>
            </motion.div>
          
        </motion.div>



      </div>

    </div>
  );
};

export default Header;
