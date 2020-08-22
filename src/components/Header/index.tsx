import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import woloxLogo from '../../assets/images/logo_full_color.svg';
import peopleLogo from '../../assets/images/Ic_ilustra_Hero@3x.png';
import { HOME } from '../../routes';
import './style.scss';

export interface HeaderProps {

}

const Header: SFC<HeaderProps> = () => {
    return (
        <div className="container">
            <div className="menu_options">
                <img alt="wolox logo" className="wolox_logo" src={woloxLogo} />
                <Link to={HOME} className="home">Inicio</Link>
                <Link to={HOME} className="home">Tecnologías</Link>
                <Link to={HOME} className="home">Beneficios</Link>
                <Link to={HOME} className="home">Requerimientos</Link>
                <button className="login_button">
                    Login
                </button>
            </div>
            <div className="content">
                <p className="content_text">
                    <span>Bienvenido a tu</span> <br />
                    <span className="txt_bold">Entrevista Técnica</span> en <br />
                    <span className="txt_green">Wolox</span>
                </p>
                <img alt="people logo" className="people_logo" src={peopleLogo} />
            </div>

        </div>
    );
}

export default Header;