import React, {useState} from 'react';
import { TabView, TabPanel } from './TabView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Layout from '../Layout';
import ImagesOfProduct from './ImagesOfProduct.js';
import CardProductUser from './CardProductUser';


import './ProductItem.css';

export default function ProductItem () {

  const [indexTab, setIndexTab] = useState(0);
  
  const productsList = [
    { title: 'Smartphone Motorola E6 Play, Android Pie 9',  price: '796,90' },
    { title: 'PlayStation 3 com 2 jogos 160GB',  price: '1.273,00' },
    { title: 'Crescimento barba, cabelo e sobrancelha 4 semanas',  price: '246,90' }
  ]

  const productItem = {
    publishAt: new Date(),
    user: 'Vinicios Engelage',
    product: {
      state: 'Produto Novo',
      title: 'Cartão De Visitas 4 X 4 Cores - Arte Inclusa',
      price: '49,97',
      promotion: '39,97',
    
    }

  };

  function showPrice() {

    let product = productItem.product;
    
    if(product.promotion) {
      return(
        <>
          <h5>R$ {product.price}</h5>
          <h2>R$ {product.promotion}</h2>
        </>
      );
    }

    else
      return (
        <h2>R$ {product.price}</h2>
      );
  }

  const user = productItem.user.split(' ').shift();
  const changePanel = (e) => setIndexTab(e);

  return(
    <Layout> 
      <section className="grid-product">
        <div className="img">
          <ImagesOfProduct />
        </div>
        <div id="post">
          <span >
              PUBLICADO EM 
              <b> 06 JUNHO </b> ÀS 
              <b> 19:31 </b>POR 
              <b> { productItem.user.toUpperCase() } </b>
          </span>
        </div>

        <div className="info"> 
          
          <p>{ productItem.product.state }</p>
          <h1>{ productItem.product.title }</h1>

          <div className="flex">            
            <div className="price">
              {showPrice()}
            </div>
            <div className="rating">
              Share
            </div>
          </div>
          <div className="buttons">
            <button type="text" className="btn-product wpp">
              <FontAwesomeIcon size="lg" className="wpp-ico" icon={ faWhatsapp }/>
              Enviar Mensagem
            </button>
            <button type="text" className="btn-product email">
              <i className="pi pi-envelope ico"></i>
              Enviar Email
            </button>
          </div>
        </div>
        <div className="details">
          <TabView indexTab={ indexTab } onChangePanel={ changePanel }>
            <TabPanel title="Decrição">
              <p>
                O Anúncio corresponde a 1.000 cartões de visita <br />
                Cartão de Visita Colorido Frente e Verso <br />
                
                Qualquer especificação diferente - mande-nos uma mensagem
                <br /><br />
                <b>ENTREGA MUITO RÁPIDA. APÓS ARTE E PAGAMENTO APROVADOS</b> <br />
                Em média de <b>4 DIAS ÚTEIS</b> efetuamos o envio .
              </p>  
            </TabPanel>
            <TabPanel title="Especificação Técnica" >
              <p>
              - 4 x 4 cor <br />
              - Papel Couchê 300g <br />
              - Com Verniz Total Frente <br />
              - Corte Reto<br />
              - Tamanho 9 x 5 cm <br />
              </p>
            </TabPanel>
          </TabView>
        </div>
        <div className="users-products">
         <CardProductUser title={`Mais de ${user}`}  products={productsList} />
        </div>
      </section>  
    </Layout>
  )
};