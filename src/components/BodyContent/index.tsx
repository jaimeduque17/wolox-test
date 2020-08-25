import React, { SFC } from 'react';
import techLogo from '../../assets/images/Ic_Tecnologys.svg';
import twitterLogo from '../../assets/images/twitter.svg';
import clockLogo from '../../assets/images/Ic_Hour.svg';
import deskLogo from '../../assets/images/Ic_HomeOffice.svg';
import workshopsLogo from '../../assets/images/Ic_Workshops.svg';
import snacksLogo from '../../assets/images/Ic_DrinkSnacks.svg';
import remoteLogo from '../../assets/images/Ic_laptop.svg';
import brainLogo from '../../assets/images/Ic_brain.svg';
import bulletGreen from '../../assets/images/Ic_Bullet_1.svg';
import bulletBlack from '../../assets/images/Ic_Bullet_2.svg';
import bulletBlue from '../../assets/images/Ic_Bullet_3.svg';
import './style.scss';

export interface BodyContentProps {

}

const BodyContent: SFC<BodyContentProps> = () => {
    return (
        <div className="body_content">
            <div className="techs_container">
                <p id="technologies">
                    Estamos buscando <br />
                    para incorporar gente <br />
                    increíble para estas <br />
                    tecnologías: <br />
                </p>
                <img alt="technologies" className="tech_logo" src={techLogo} />
            </div>
            <div className="woloxers">
                <div className="programmer">
                    <p className="txt_twitter">350 + <span className="txt_blue">Woloxers</span></p>
                    <p className="container_twitter"><img alt="twitter logo" className="twitter_logo" src={twitterLogo} />
                        <span>@wolox</span></p>
                    <a href="https://twitter.com/Wolox" className="follow_button">Siguenos</a>
                </div>
                <div className="work_for">
                    <p>
                        Trabajamos para<br />
                        <span className="convert_txt">convertir</span> <span className="ideas_txt">ideas</span> en<br />
                        productos.<br />
                    </p>
                </div>
            </div>
            <div className="benefits_container" id="benefits">
                <span className="benefits_title">Entre los beneficios que ofrecemos se encuentran <span className="wink">;)</span></span>
                <div className="benefits_images">
                    <div className="benefit">
                        <img alt="flexible time" className="benefits_logo" src={clockLogo} />
                        Flexibilidad Horaria
                    </div>
                    <div className="benefit">
                        <img alt="home office" className="benefits_logo" src={deskLogo} />
                        Home Office
                    </div>
                    <div className="benefit">
                        <img alt="latest technologies" className="benefits_logo" src={workshopsLogo} />
                        Capacitaciones y workshops
                    </div>
                    <div className="benefit">
                        <img alt="snacks" className="benefits_logo" src={snacksLogo} />
                        Snacks, frutas y bebidas gratis
                    </div>
                    <div className="benefit">
                        <img alt="remote week" className="benefits_logo" src={remoteLogo} />
                        Semana Remota
                    </div>
                    <div className="benefit">
                        <img alt="latest technologies" className="benefits_logo" src={brainLogo} />
                        Trabajar en ultimas tecnologías
                    </div>
                </div>
                <div className="line" />
            </div>
            <div className="requirements_container" id="requirements">
                <div className="requirement_margin">
                    <span className="req_txt">Requerimientos</span>
                </div>
                <div>
                    <div className="requirement">
                        <img alt="bullet green" className="bullet" src={bulletGreen} />
                    Estudiantes avanzados o recibidos de carreras del rubro<br /> informático, sistemas o electrónicos.
                </div>
                    <div className="requirement">
                        <img alt="bullet black" className="bullet" src={bulletBlack} />
                    Inglés intermedio/avanzado
                </div>
                    <div className="requirement">
                        <img alt="bullet blue" className="bullet" src={bulletBlue} />
                    Conocimiento en metodologías ágiles (deseable)
                </div>
                </div>
            </div>
        </div>
    );
}

export default BodyContent;