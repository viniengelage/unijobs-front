import React from 'react';
import './LandingPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProdutosRecentes from '../components/ProdutosRecentes';
import Categorias from '../components/Categorias';
import Layout from '../components/Layout';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function LandingPage(props) {
    return (
        <>
            <Header />

            <section className="img-slider">
                <Layout>
                    <Carousel className="carousel">
                        <Carousel.Item>
                            <img src="" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="" alt="" />
                        </Carousel.Item>
                    </Carousel>
                </Layout>
            </section>
            
            <ProdutosRecentes />
            <Categorias />
            {/* <ProdutosDestaque />*/}
            <Footer /> 
        </>
    );
}

export default LandingPage;