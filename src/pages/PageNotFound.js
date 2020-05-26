import React from 'react';
import robo from '../imgs/mr-roboto2.svg';
import './PageNotFound.css';

function PageNotFound(props){
    return (
        <div className="PageNotFound">
            <img src={robo} alt="Robo" />
            <h1>Error 404</h1>
            <h2>Ohh no!!! Parece que a página que você estava procurando não foi encontrada.</h2>
        </div>

        /** Lista Componentes React:
            Header (Logo e Menu)
            <div className="PageNotFound">
                <img src={robo} alt="Robo" />
                <h1>Error 404</h1>
                <h2>Ohh no!!! Parece que a página que você estava procurando não foi encontrada.</h2>
            </div>
            Footer
        */
    );
} export default PageNotFound;