import React, { SFC } from 'react';
import woloxLogo from '../../assets/images/Ic_Wolox_Footer.svg';
import './style.scss';

export interface FooterProps {

}

const Footer: SFC<FooterProps> = () => {
    return (
        <div className="container_footer">
            <p className="footer_text">
                <span className="footer_thks">Gracias por <span className="footer_blue_txt">completar el ejercicio</span></span> <br />
                Te invitamos a ver mas información<br />
            </p>
            <a href="https://www.wolox.com.ar" className="wolox_webpage">conocer más</a>
            <img alt="wolox logo" className="wolox_footer" src={woloxLogo} />
        </div>
    );
}

export default Footer;