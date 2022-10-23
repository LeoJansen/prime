import React, { useState } from "react";
import logo from "../../assets/prime.png";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import "./navbar.scss";

const Menu = () => (
  <ul>
    <li> <a href="#home">Home</a></li>
    <li><a href="#wgpt3">Quem Somos?</a></li>
    <li><a href="#possibility">Localização</a></li>
    <li><a href="#features">Contatos</a></li>

  </ul>
)



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="logo">
          <img src={logo} />
        </div>
      <div className="links">
        
      
          <Menu />
     
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
