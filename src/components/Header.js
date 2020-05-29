import React from 'react';
import Menu from './Menu';
import './Header.css';
import Logo from '../imgs/UniJobs.svg';
import Layout from './Layout';

function Header({ style }, ...props) {
    return (
        <Layout>
        <div className="Header">
            <img src={Logo} alt="logo UniAmerica" />
            <Menu style={style} />
        </div>
        </Layout>
    );
}

export default Header;