import React from 'react';
import robo from '../../imgs/mr-roboto2.svg';
import './index.css';

function PageNotFound(props){
    return (
        <div className="NotFound">
            <img src={robo} className="" alt="Robo" />
            <h1>Error 404</h1>
            <h2>Ohh no!!! Parece que a página que você estava procurando não foi encontrada.</h2>
        </div>
    );
} export default PageNotFound;