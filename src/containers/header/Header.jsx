import React from "react";
import { motion } from "framer-motion";
import { card1, card2, card3, card4 } from "../../assets/constants/framerVariants";
import "./header.scss";



const Header = () => {



  return (
    <div className="gpt3__header" id="Home">
      <div className="content">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          className="quality">
          <motion.div className="quality2" variants={card1}>
            <h3>Precisão</h3>
          </motion.div>

        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"

          className="quality">
          <motion.div className="quality2" variants={card2}>
            <h3>Confiança</h3>
          </motion.div>


        </motion.div>
        <motion.div initial="offscreen"
          whileInView="onscreen"

          className="quality"
        >
          <motion.div className="quality2" variants={card3}>
            <h3>Profissionalismo</h3>
          </motion.div>

        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"

          className="quest"

        >
          <motion.div className="quest2" variants={card4}>
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
