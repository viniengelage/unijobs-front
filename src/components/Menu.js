import React from 'react';
import './Menu.css'

function Menu() {
    return(
        <div className="Menu" >
            <ul>
                <li>Categorias</li>
                <li>Comece a Vender</li>
            </ul>
            <button type="button">Faça login</button>
        </div>
    );
}

export default Menu;