import React from "react";
import { MdOutlineMailOutline } from 'react-icons/md';
import { motion } from 'framer-motion';

import "./footer.scss";

const Footer = () => {
  return (
    <motion.div className="gpt3__footer" id="footer"
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}>
      <div className="container">
        <div className="heading">
          <h1 className="gradient__text">
            A parceria que você precisa está aqui.
          </h1>
        </div>
        <div className="btn">
          <MdOutlineMailOutline />
          <p>primeretifica@gmail.com</p>
        </div>
        <div className="links">
          <div className="maps">
            <p>Vem pra Prime?<span> A gente te ajuda.</span></p>
       
            <div classname="google">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.429015677506!2d-43.0742912!3d-22.823611899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x999b1449711601%3A0x5d5c67c62093940b!2sR.%20Cap.%20Jo%C3%A3o%20Manoel%2C%202555%20-%20Porto%20Novo%2C%20S%C3%A3o%20Gon%C3%A7alo%20-%20RJ%2C%2024435-550!5e0!3m2!1sen!2sbr!4v1666960892045!5m2!1sen!2sbr"
                style={{ display: "flex", border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="funcionamento">
            <h4>Horários de Funcionamento</h4>
            <div><h5>seg</h5><p>08:00 - 17:00</p></div>
            <div><h5>ter</h5><p>08:00 - 17:00</p></div>
            <div><h5>qua</h5><p>08:00 - 17:00</p></div>
            <div><h5>qui</h5><p>08:00 - 17:00</p></div>
            <div><h5>sex</h5><p>08:00 - 17:00</p></div>
            <div><h5>sáb</h5><p>Fechado</p></div>
            <div><h5>dom</h5><p>Fechado</p></div>
          </div>
          <div className="dados">
            <h4>Prime Retífica de Cabeçotes</h4>
            <p>Rua Capitão João Manoel, 2555, Porto Novo.</p>
            <p> São Gonçalo RJ, 24431, Brasil</p>
            <p>24435-550</p>
            <p>primeretifica@gmail.com</p>
            <p>(21) 97976-1500</p>
          </div>
        </div>
       

      </div>
      <div className="copyright">
          <p>Desenvolvido por Léo Jansen</p>
          <p>www.leonardojansen.com</p>
          <p>© 2022 Léo Jansen. Todos os Direitos Reservados.</p>
        </div>

    </motion.div>
  );
};

export default Footer;
