import React from 'react';
import './nav.css';

export const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-title">Blog del Programador</h1>
                <ul className="navbar-list">
                    <li><a href="#" className="navbar-item">Inicio</a></li>
                    <li><a href="#" className="navbar-item">Acerca de</a></li>
                    <li><a href="#" className="navbar-item">Servicios</a></li>
                    <li><a href="#" className="navbar-item">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
