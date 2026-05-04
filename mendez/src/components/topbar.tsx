import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <header className="topbar">
      <Link to="/" className="brand">EcoSite</Link>
      <nav className="links">
        <Link to="/">Inicio</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/products">Productos</Link>
      </nav>
    </header>
  );
};

export default Topbar;