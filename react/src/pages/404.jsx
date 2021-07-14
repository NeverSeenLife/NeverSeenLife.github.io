import React from 'react';
import { Helmet } from 'react-helmet';


const NotFound = () => {
    return (
        <>
        <Helmet>
            <title>Fileloader | Error 404</title>
        </Helmet>    
        <div className="container-info">
        <div className="logo">
            <h1><img src="img/logo.svg" title="Mainsoft" className="logo-img" alt="Logo Mainsoft" /></h1>
        </div>
        <div className="box">
        </div>
            <h2 title="Błąd 404">Błąd 404</h2>
            <p title="Strony nie znaleziono!">Strony nie znaleziono!</p><a href="https://mainsoft.pl/" className="btn-mainsoft">MAINSOFT.PL</a>
        </div>
        </>
    )
}

export default NotFound;