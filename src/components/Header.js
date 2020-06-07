import React from 'react';
import Menu from './Menu';
import './Header.css';
import Logo from '../imgs/UniJobs.svg';
import Layout from '../components/Layout'

function Header({ style }) {
    return (
        <div className="bg-menu">
            <Layout>
                <div className="Header">
                    <img src={Logo} alt="logo UniAmerica" />
                    <Menu style={style} />
                </div>
            </Layout>
        </div>
    );
}

export default Header;