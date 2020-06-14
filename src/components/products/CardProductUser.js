import React from 'react';

import './CardProductUser.css'

const CardProductUser = ({ title, products }) => {

  const list = products.map( (product, index) => {
    return (
      <div className="product-user" key={ index } >
        <div className="imagem-bg"></div>
        <div className="info-product-user">
          <h4>{ product.title }</h4>
          <span>R$ { product.price }</span>
        </div>
      </div>
    )
  } )


  return (
    <section id="products-user"> 
      <h3> { title } </h3>
      { list }
    </section>
  )
}

export default CardProductUser;