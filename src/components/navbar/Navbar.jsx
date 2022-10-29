import React, { useState, useRef } from "react";
import {motion, useInView} from 'framer-motion';
import logo from "../../assets/prime.png";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import "./navbar.scss";

const Menu = ({setToggle}) => (
  <ul>
    <li> <a href="#home" onClick={() => setToggle(false)}>Home</a></li>
    <li><a href="#feature" onClick={() => setToggle(false)}>Nosso trabalho</a></li>
    <li><a href="#testimonial" onClick={() => setToggle(false)}>Nossos Parceiros</a></li>
    <li><a href="#cta" onClick={() => setToggle(false)}>Redes Sociais</a></li>
    <li><a href="#footer" onClick={() => setToggle(false)}>Contatos</a></li>

  </ul>
)



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

 
    /**/
  return (
  <motion.div className="gpt3__navbar"
  ref={ref}
  style={{
   
    opacity: isInView ? 1 : 0,
    transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 11s"
  }}

  
>
      <div className="logo">
          <img src={logo} />
        </div>
      <div className="links">
        
      
          <Menu />
     
      </div>

      <div className="menu">
        {!toggleMenu &&  <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="menu_container">
            <div className="menu_container-links">
              <Menu setToggle={setToggleMenu} />
            </div>
            
          </div>
        )}

      </div>
    </motion.div>
  );
};

export default Navbar;
