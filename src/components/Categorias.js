import React from 'react';
import {Carousel} from 'primereact/carousel';
import Layout from './Layout';

import './Categorias.css';

const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];


function Categorias({ categories }) { 

    const category = (item) => {
        return (
            <a href="#/" className="card-category">
                <p>{item}</p>
            </a>
        )
    }

    return (
        <section className="Categorias">
            <Layout>
                <div className="categorias-title">
                    <h1>Categorias</h1>
                    <span>Ver todas</span>
                </div>
                
                <Carousel   value={ categories }
                            circular={ true }
                            numScroll={ 3 }
                            numVisible={ 5 } 
                            itemTemplate={ category }
                            responsiveOptions={ responsiveOptions } >
                </Carousel>


                {/* Criar carousel de categorias com: 
                https://www.primefaces.org/primereact/showcase/#/carousel
                ou
                https://github.com/maxmarinich/react-alice-carousel */}
            </Layout>
        </section>
    );
};

export default Categorias;