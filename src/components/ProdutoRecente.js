import React from 'react';
import './ProdutoRecente.css'

function ProdutoRecente(props) {

    const image = {
        background: `url("${props.imagem}")`,
        backgroundposition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      };

    const price = () => {
        if(props.promocao){
            return (
                <>
                    R$ { props.preco }
                    <strong> R$ { props.promocao } </strong>                    
                </>
            )
        } else {
            return (
                <>
                    <strong> R$ { props.preco } </strong>                    
                </>
            )
        }
    }

    return (
        <div className="ProdutoRecente">
            <div style={image} className="img-pr"></div>
            <div className="title">
                <strong className="categoria">{props.categoria}</strong>
                <h4>{props.nome}</h4>
                <p className="descricao">{props.descricao}</p>
                <div className="info-detalhes">
                    <a className="linkProduct" href={props.link}>+ informações</a>
                    <p className="preco-detalhes">
                        { price() }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProdutoRecente;