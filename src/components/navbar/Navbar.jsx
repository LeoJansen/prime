import React, { useState, useRef } from "react";
import {motion, useInView} from 'framer-motion';
import logo from "../../assets/prime.png";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import "./navbar.scss";

const Menu = () => (
  <ul>
    <li> <a href="#home">Home</a></li>
    <li><a href="#feature">Nosso trabalho</a></li>
    <li><a href="#testimonial">Nossos Parceiros</a></li>
    <li><a href="#cta">Redes Sociais</a></li>
    <li><a href="#footer">Contatos</a></li>

  </ul>
)



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

 
    /*<motion.div className="gpt3__navbar"
    ref={ref}
    style={{
     
      opacity: isInView ? 1 : 0,
      transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 11s"
    }}

    
  >*/
  return (
  <div className="gpt3__navbar">
      <div className="logo">
          <img src={logo} />
        </div>
      <div className="links">
        
      
          <Menu />
     
      </div>

      <div className="menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="menu_container scale-up-center">
            <div className="menu_container-links">
              <Menu />
            </div>
            
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
