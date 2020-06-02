import React from 'react';
import ProdutoRecente from './ProdutoRecente';

function ProdutosRecentes() {
    return (
        <section className="ProdutosRecentes container">
            <h1>Adicionados Recentemente</h1>
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
        </section>
    );
}

export default ProdutosRecentes;