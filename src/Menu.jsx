import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './indice.css';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <title>Menu</title>
      <label>
        <input
          type="checkbox"
          checked={menuOpen}
          onChange={toggleMenu}
        />
        <div className="toggle">
          <span className="top_line common"></span>
          <span className="middle_line common"></span>
          <span className="bottom_line common"></span>
        </div>
        <div className={`slide ${menuOpen ? 'open' : ''}`}>
          <h1>MENU</h1>
          <ul>
            <li>
              <NavLink to="/home">
                <i className="fas fa-home"></i> Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/digguardian/objetivos">
                <i className="fas fa-user"></i> Objetivos
              </NavLink>
            </li>
            <li>
              <NavLink to="/digguardian/mediciones">
                <i className="fas fa-clock"></i> Mediciones
              </NavLink>
            </li>
            <li>
              <NavLink to="/digguardian/acerca">
                <i className="fas fa-briefcase"></i> Acerca de
              </NavLink>
            </li>
          </ul>
        </div>
      </label>
    </div>
  );
};

export default Menu;
