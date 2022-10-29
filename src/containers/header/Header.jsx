import React from "react";


import { motion } from "framer-motion";
import "./header.scss";

const offscreen = {
  x: 500,
  opacity: 0
}
const onscreen = {
  x: 0,
  opacity: 1,
}
const card1 = {
  offscreen: {
    x: 500,
    opacity: 0
  }, onscreen: {
    x: [500,0,0,0],
    opacity: [0,1,1,0.5],
    transition:{
      duration:4,
      delay:0
    },
  },
};
const card2 = {
  offscreen: {
    x: 500,
    opacity: 0
  }, onscreen: {
    x: [500,0,0,0],
    opacity: [0,1,1,0.5],
    transition:{
      duration:4,
      delay:2
    },
  },
};

const card3 = {
  offscreen: {
    x: 500,
    opacity: 0
  }, onscreen: {
    x: [500,0,0,0],
    opacity: [0,1,1,0.5],
    transition:{
      duration:4,
      delay:4
    },
  },
};

const card4 = {
  offscreen: {
    x: 500,
    opacity: 0
  }, onscreen: {
    x: [-500,0,0,0,0,0],
    opacity: [0, 0.5, 0.7, 0.9, 0.8, 0.7],
    transition:{
      duration:8,
      delay:6
    },
  },
};








const Header = () => {



  return (
    <div className="gpt3__header" id="Home"


    >
      <div className="content">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"





          className="quality">
          <motion.div className="quality" variants={card1}>
            <h3>Precisão</h3>
          </motion.div>

        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"

          className="quality">
          <motion.div className="quality" variants={card2}>
            <h3>Confiança</h3>
          </motion.div>


        </motion.div>
        <motion.div initial="offscreen"
          whileInView="onscreen"

          className="quality"
        >
          <motion.div className="quality" variants={card3}>
            <h3>Profissionalismo</h3>
          </motion.div>

        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"

          className="quest"

        >
          <motion.div variants={card4}>
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
