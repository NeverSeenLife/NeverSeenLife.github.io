import React from 'react';
import './login.css';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import loginImg from './login.svg';


const login = () => {
    const handleSubmit = event => {
        event.preventDefault();
        window.location.href = "/yolo";
    }
    return (
        <div>
        <Helmet>
            <title>Fileloader | Login</title>
        </Helmet>    
            <div className="d-flex align-items-center container-login flex-column">
                
                <div className="container-logo">
                    <Link to="/" className="logo"><h2>Fileloader</h2></Link>
                </div>

                <div className="container-form d-flex">

                    <form className="l-form" onSubmit={handleSubmit}>

                        <h4 className="l-text">Zaloguj się</h4>

                        <input type="text" name="name1" defaultValue="Neverseen" id="nick" className="l-input" placeholder="Login: " required/>

                        <input type="password" name="name" className="l-input" placeholder="Hasło: " required/>

                        <input type="submit" className="s-input" value="Zaloguj się" />

                    </form>

                    <div className="container-img">
                        <img src={loginImg} alt="XD" className="l-img" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default login;