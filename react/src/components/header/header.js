import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

const navBar = () => {
    document.querySelector('.navbar-menu').classList.toggle('active');
};

const Header = () => {
    return(
        <header className="header w-100 bg-white d-flex justify-content-center align-items-center"> 

            <nav className="navbar fixed-top bg-white shadow-sm navbar-light">
                <section className="container-lg">
                    <Link to="/" className="navbar-brand">Logo</Link>

                    <button type="button" onClick={navBar} className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </section>

                <section className="container-lg bg-white navbar-menu">
                    <ul>
                        <li><Link to="/login">Zaloguj się</Link></li>
                        <li><Link to="/yolo">Pomoc</Link></li>
                    </ul>

                </section>
            </nav>

            <section className="main-text d-flex flex-column justify-content-center align-items-center">
                
                <h1 className="main-h1">Pliki, pliki wszedzie</h1>

                <Link to="/yolo" className="header-btn">YOLO</Link>
                
            </section>            

        </header>
    );
};

export default Header;