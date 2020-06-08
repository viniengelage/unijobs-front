import React from 'react';
import './Categorias.css';
import Layout from './Layout';

function Categorias() {
    return (
        <section className="Categorias">
            <Layout>
                <div className="categorias-title">
                    <h1>Categorias</h1>
                    <span>Ver todas</span>
                </div>
                {/* Criar carousel de categorias com: 
                https://www.primefaces.org/primereact/showcase/#/carousel
                ou
                https://github.com/maxmarinich/react-alice-carousel */}
            </Layout>
        </section>
    );
};

export default Categorias;