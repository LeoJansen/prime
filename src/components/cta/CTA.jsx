import React from "react";
import { motion } from 'framer-motion';
import { facebook, instagram, whats } from "../../assets/constants";
import "./cta.scss";

const CTA = () => {
  return (
    <motion.div className="gpt3__cta" id="cta"
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}>
      <div className="container">


        <div className="content">

          <h3>Acesse nossas redes sociais </h3>
        </div>
        <div className="btns">
          <div className="instagram">
            <a href="https://instagram.com/prime.ret?igshid=YmMyMTA2M2Y=" target="_blank"><img src={instagram} /></a>
          </div>
          <div className="whatsapp">
            <a href="https://wa.me/5521979761500" target="_blank"><img src={whats} /></a>
          </div>
          <div className="facebook">
            <a href="https://www.facebook.com/prime.ret/" target="_blank"><img src={facebook} /></a>
          </div>



        </div>
      </div>
    </motion.div>
  );
};

export default CTA;
