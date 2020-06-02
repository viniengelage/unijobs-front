import React from 'react';

function ProdutoRecente(props) {
    return (
        <>
            <img src={props.imagem} alt={props.nome} />
            <p>{props.categoria} - {props.nome}</p>
            <p>{props.descricao}</p>
            <p>Publicado por: {props.usuario}</p>
            <p>Estrelas: {props.avaliacao}</p>
        </>
    );
}

export default ProdutoRecente;