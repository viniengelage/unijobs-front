import React from 'react';
import robo from '../imgs/mr-roboto2.svg';
import './PageNotFound.css';
import Header from '../components/Header';

function PageNotFound(props){
    return (
        <>
            <div className="retangulo" ></div>
            <div>
                <Header />
                <div className="PageNotFound">
                    <img src={robo} alt="Robo" />
                    <h1>Error 404</h1>
                    <h2>Ohh no!!! Parece que a página que você estava procurando não foi encontrada.</h2>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
} export default PageNotFound;