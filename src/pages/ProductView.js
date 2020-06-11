import React from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'
import NavHeader from '../components/NavHeader'
import ProductItem from '../components/products/ProductItem'

const ProductView = () => {

  const itemLeft = [ 'Categorias', 'Ofertas do dia', 'Destaques da semana' ];
  const itemRight = [ 'Crie sua conta', 'Favoritos', 'Começe a vender' ];

  return(
    <>
      <Header />
      <NavHeader leftMenu={itemLeft} rightMenu={itemRight} />
      { /* navegação */ }

      <ProductItem />
      { /* Relacionados */ }
      <Footer />
    </>
  );
}

export default ProductView;