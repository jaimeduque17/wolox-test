import React from 'react';
import peopleLogo from '../../assets/images/Ic_ilustra_Hero@3x.png';
import Burger from './Burger';
import './style.scss';

const Header = () => {
    return (
        window.screen.width <= 768 ? (<nav>
            <Burger />
            <div className="content" id="init">
                <p className="content_text">
                    <span>Bienvenido a tu</span> <br />
                    <span className="txt_bold">Entrevista Técnica</span> en <br />
                    <span className="txt_green">Wolox</span>
                </p>
                <img alt="people logo" className="people_logo" src={peopleLogo} />
            </div>
        </nav>)
            : (
                <div className="container">
                    <div className="menu_options">
                        <Burger />
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
            )
    );
}

export default Header;