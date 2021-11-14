import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand" to={"/"}><span><h4>JewelTools</h4></span><img className="icon-img" src="/IMG/logo.png" alt="" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active ml-8">
                <NavLink  to={"/"} className="nav-link">Inicio</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={"/compras"} className="nav-link">Compras</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>Contacto</NavLink>
              </li>
            </ul>
            <CartWidget/>
          </div>
        </nav>
      </header>
  );
};

export default NavBar;