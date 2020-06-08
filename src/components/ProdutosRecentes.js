import React from 'react';
import ProdutoRecente from './ProdutoRecente';
import './ProdutosRecentes.css';
import Layout from '../components/Layout'

function ProdutosRecentes() {
    return (
        <section className="ProdutosRecentes">
            <Layout>
                <div className="produtos">
                    <h1>Adicionados Recentemente</h1>
                    <span>Ver todos</span>
                </div>
                <ProdutoRecente
                    categoria="Alimentação"
                    nome="Doces Gourmet"
                    descricao="Brigadeiro e beijinho"
                    usuario="Joana Sobrenome"
                    avaliacao="5"
                    imagem=""
                />
                <ProdutoRecente
                    categoria="Design"
                    nome="Criação de logo"
                    descricao="Criação de logo para produtos e serviços"
                    usuario="Fulana Sobrenome"
                    avaliacao="4,5"
                    imagem=""
                />
                <ProdutoRecente
                    categoria="Aulas Particulares"
                    nome="Aula Particular de Programação"
                    descricao="Hora aula de ReactJS"
                    usuario="José Sobrenome"
                    avaliacao="5"
                    imagem=""
                />
            </Layout>
        </section>
        );
    }
    
    export default ProdutosRecentes;