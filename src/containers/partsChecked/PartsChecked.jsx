import React from "react";
import partsChecked from "../../assets/carLight.jpg";
import {bielas, cabecotes, bloco, virabrequim, bombaDeOleo} from '../../assets/constants'

import Part from "../../components/part/Part";
import "./partsChecked.scss";


const PartsChecked = () => {
  return (
    <div className="gpt3__partsChecked">
      <div className="container">
        <div className="part">
          <Part title="Bielas" items={bielas}/>
        </div>
      
      <div className="image">
        <img src={partsChecked} alt="partsChecked" />
      </div>
      
      </div>
      
      
    </div>
  );
};

export default PartsChecked;
