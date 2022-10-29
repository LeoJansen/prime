import React from "react";
import {motion} from 'framer-motion';
import { facebook, instagram, whats } from "../../assets/constants";
import "./cta.scss";

const CTA = () => {
  return (
    <motion.div className="gpt3__cta" id="cta"
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 0.5 }}>
      <div className="gpt3__cta-content">
        
        <h3>Acesse nossas redes sociais </h3>
      </div>
      <div className="gpt3__cta-btn">
        <div className="instagram">
            <a href="https://instagram.com/prime.ret?igshid=YmMyMTA2M2Y="><img src={instagram}/></a>
        </div>
      <div className="whatsapp">
      <a href="https://wa.me/5521979761500"><img src={whats}/></a>
      </div>
      <div className="facebook">
        <a href="https://www.facebook.com/prime.ret/"><img src={facebook}/></a>
      </div>
      
        
        
        
      </div>
    </motion.div>
  );
};

export default CTA;
