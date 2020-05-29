import React from 'react';
import './Menu.css'

function Menu({ style }) {
    return(
        <div className="Menu" >
            <ul >
                <li style={style}>Categorias</li>
                <li style={style}>Comece a vender</li>
            </ul>
            <button type="button" id="btn-menu">Faça login</button>
        </div>
    );
}

export default Menu;