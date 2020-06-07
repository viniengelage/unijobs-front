import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProdutosRecentes from '../components/ProdutosRecentes';

import './LandingPage.css'
import Layout from '../components/Layout';

function LandingPage(props) {
    return (
        <>
            <Header />
            {/* Slider */}
            <ProdutosRecentes />
            {/* <ProdutosDestaque />*/}
            <Footer /> 
        </>
    );
}

export default LandingPage;