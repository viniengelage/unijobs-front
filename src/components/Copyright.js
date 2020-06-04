import React from 'react';
import './Copyright.css';

function Copyright() {
    return (
      <div className="copyright">
        <div className="container">
          <h5>© {new Date().getFullYear()} Unijobs. Todos os direitos reservados.</h5>
        </div>
      </div>
    );
}

export default Copyright;