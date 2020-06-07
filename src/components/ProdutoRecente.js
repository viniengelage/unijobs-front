import React from 'react';
import './ProdutoRecente.css'

function ProdutoRecente(props) {
    return (
        <div className="ProdutoRecente">
            <img src={props.imagem} alt={props.nome} />
            <div className="title">
                <strong className="categoria">{props.categoria}  <span>{props.nome}</span></strong>
                <p className="descricao">{props.descricao}</p>
                <strong className="publicado">Publicado por: <span>{props.usuario}</span></strong>
                <p className="avaliacao">Estrelas: {props.avaliacao}</p>
            </div>
        </div>
    );
}

export default ProdutoRecente;