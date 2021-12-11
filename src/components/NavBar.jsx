import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
      <header>
          <nav className="navbar navbar-inverse navbar-expand navbar-dark">
            <Link className="navbar-brand mr-6" to={"/"}><span><h4>JewelTools</h4></span><img className="icon-img" src="/IMG/logo.png" alt="" /></Link>
            <div>
              <ul className="navbar-nav nav">
                <li className="nav-item ml-8 active">
                  <NavLink  to={"/"} className="nav-link">Inicio</NavLink>
                </li>
                <li className="nav-item ml-8 active">
                  <NavLink className="nav-link" to={"/contact"}>Contacto</NavLink>
                </li>
                <li className="nav-item ml-8 active">
                  <NavLink className="nav-link" to={"/aboutus"}>Sobre Nosotros</NavLink>
                </li>
              </ul>
              <CartWidget/>
            </div>
          </nav>
      </header>
  );
};

export default NavBar;