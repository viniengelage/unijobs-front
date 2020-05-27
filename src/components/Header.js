import React from 'react';
import Menu from './Menu';
import './Header.css';
import Logo from '../imgs/UniJobs.svg';
import Layout from './Layout';

function Header() {
    return (
        <Layout>
        <div className="Header">
            <img src={Logo} alt="logo UniAmérica" />
            <Menu />
        </div>
        </Layout>
    );
}

export default Header;