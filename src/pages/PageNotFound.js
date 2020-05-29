import React from 'react';
import robo from '../imgs/mr-roboto2.svg';
import './PageNotFound.css';
import Header from '../components/Header';

function PageNotFound(props){
    return (
        <>
            <div style={ {width: '100%', background: '#0E346A'}}>
            <Header style={{ color: '#fff' }}/>
            </div>
            <div className="PageNotFound">
                <img src={robo} alt="Robo" />
                <h1>Error 404</h1>
                <h2>Ohh no!!!</h2>
                <span>Parece que a página que você estava procurando não foi encontrada.</span>
            </div>
            {/* <Footer /> */}
        </>
    );
} export default PageNotFound;