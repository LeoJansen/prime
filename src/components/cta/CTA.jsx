import React from "react";
import { facebook, instagram, whats } from "../../assets/constants";
import "./cta.scss";

const CTA = () => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        
        <h3>Acesse nossas redes sociais </h3>
      </div>
      <div className="gpt3__cta-btn">
        <img src={facebook}/>
        <img src={instagram}/>
        <img src={whats}/>
        
      </div>
    </div>
  );
};

export default CTA;
