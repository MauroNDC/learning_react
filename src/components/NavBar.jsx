import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="/"><span><h4>JewelTools</h4></span><img className="icon-img" src="IMG/logo.png" alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active ml-8">
                <Link to={"/"} className="nav-link">Inicio</Link>
              </li>
              <li className="nav-item">
              <Link to={"/compras"} className="nav-link">Compras</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contacto</a>
              </li>
            </ul>
            <CartWidget/>
          </div>
        </nav>
      </header>
  );
};

export default NavBar;