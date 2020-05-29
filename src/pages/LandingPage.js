import React from 'react';
import Header from '../components/Header';

function LandingPage(props) {
    return (
        <>
            <Header />
            <h1>Hello React World! LandingPage</h1>
        </>
    );

    /** Lista Componentes React:
            <Header /> (Logo e <Menu />)
            Slider
            ItensRecentes (ItemRecente)
            ItensDestaque (ItemDestaque)
            Footer
    */
}

export default LandingPage;