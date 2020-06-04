import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LandingPage.css'
import ProdutosRecentes from '../components/ProdutosRecentes';

function LandingPage(props) {
    return (
        <div className="LandingPage">
            <Header />
            {/* Slider */}
            <ProdutosRecentes />
            {/* <ProdutosDestaque />*/}
            <Footer /> 
        </div>
    );
}

export default LandingPage;