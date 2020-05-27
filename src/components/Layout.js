import React from 'react';

function Layout({ children }) {
    return(
        <div className="Layout container">
            { children }
        </div>
    );
}

export default Layout;