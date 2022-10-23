import React from "react";
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import { motion } from "framer-motion";
import "./header.scss";

const Header = () => {
  return (
    <div className="gpt3__header" id="Home">
    <div className="content">
     <motion.div whileInView={{ x: [500, 0, 0, 0,0,0],  opacity: [0,0.5, 1,1,1,0.5] }}
        transition={{        
          duration: 15,
          delay:2,
        }} className="quality">
     <h3>Precisão</h3>
     </motion.div>
     <motion.div whileInView={{ x: [500, 0, 0, 0,0,0],  opacity: [0,0.5, 1,1,1,0.5] }}
        transition={{
        
          duration: 15,
          delay:6,
         
       
        }} className="quality">
          <h3>Confiança</h3>

        </motion.div>
        <motion.div whileInView={{ x: [500, 0, 0, 0,0,0],  opacity: [0,0.5, 1,1,0.8,0.3] }}
        transition={{
        
          duration: 15,
          delay:10,
         
       
        }} className="quality">
          <h3>Profissionalismo</h3>
        </motion.div>
        
     <motion.div whileInView={{ x: [-700,0,0], opacity: [0,0.5,1] }}
        transition={{
        
          duration: 10,
          delay:15,
         
       
        }}
        className="quest">
     <h1 className="gradient__text">
       Vamos consertar juntos?
     </h1>
     </motion.div>
     
    
           
   </div> 
  
 </div>
  );
};

export default Header;
