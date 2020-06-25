import React from 'react';
import ProdutoRecente from './ProdutoRecente';
import './ProdutosRecentes.css';
import Layout from '../components/Layout'

function ProdutosRecentes() {

    const product = {
        categoria: "Curso / Gastronomia",
        nome: "Insira um título de máximo 60 caracteres",
        descricao: "Este pequeno bloco tem espaço para mostrar no máximo os 118 primeiros caracteres da descrição do seu produto ....",
        usuario: "Joana Sobrenome",
        avaliacao: "5",
        preco: '39,90',
        promocao: '19,90',
        link: "/product-view",
        imagem: "https://www.montarumnegocio.com/wp-content/uploads/2019/01/doces-para-vender-na-rua.jpg.webp"
    }

    return (
        <section className="ProdutosRecentes">
            <Layout>
                <div className="produtos">
                    <h1>Adicionados Recentemente</h1>
                    <span>Ver todos</span>
                </div>
                <div id="grid-pr">
                    <ProdutoRecente
                        categoria={product.categoria}
                        nome={product.nome}
                        descricao={product.descricao}
                        usuario={product.usuario}
                        avaliacao={product.avaliacao}
                        imagem={product.imagem}
                        link={product.link}
                        preco={product.preco}
                        promocao={product.promocao}
                    />
                    <ProdutoRecente
                        categoria={product.categoria}
                        nome={product.nome}
                        descricao={product.descricao}
                        usuario={product.usuario}
                        avaliacao={product.avaliacao}
                        imagem={product.imagem}
                        preco={product.preco}
                    />
                    <ProdutoRecente
                        categoria="Design"
                        nome="Criação de logo"
                        descricao="Criação de logo para produtos e serviços"
                        usuario="Fulana Sobrenome"
                        avaliacao="4,5"
                        preco="60,00"
                        promocao="40,00"
                        imagem="https://www.montarumnegocio.com/wp-content/uploads/2019/01/doces-para-vender-na-rua.jpg.webp"
                    />
                    <ProdutoRecente
                        categoria="Aulas Particulares"
                        nome="Aula Particular de Programação"
                        descricao="Hora aula de ReactJS"
                        usuario="José Sobrenome"
                        avaliacao="5"
                        preco="40,00"
                        imagem="https://www.montarumnegocio.com/wp-content/uploads/2019/01/doces-para-vender-na-rua.jpg.webp"
                    />
                </div>
            </Layout>
        </section>
        );
    }
    
    export default ProdutosRecentes;