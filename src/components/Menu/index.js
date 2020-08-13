import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png'
import Buttonlink from '../ButtonLink';

import './styles.css'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/" >
                <img className="Logo" src={Logo} alt="logo da aluraflix" />
            </Link>

            <Buttonlink as={Link} className="ButtonLink" to="/">
                Novo Vídeo    
            </Buttonlink>
        </nav>
    )
}

export default Menu;