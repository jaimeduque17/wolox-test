import React from 'react';
import { useTranslation } from 'react-i18next';
import peopleLogo from '../../assets/images/Ic_ilustra_Hero@3x.png';
import Burger from './Burger';
import './style.scss';

const Header = () => {

    // translations
    const { t } = useTranslation();

    return (
        window.screen.width <= 768 ? (<nav>
            <Burger />
            <div className="content" id="init">
                <p className="content_text">
                    <span>{t('Home.header.welcome_to')}</span> <br />
                    <span className="txt_bold">{t('Home.header.interview')}</span> {t('Common.connectors.in')} <br />
                    <span className="txt_green">{t('Common.wolox')}</span>
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
                            <span>{t('Home.header.welcome_to')}</span> <br />
                            <span className="txt_bold">{t('Home.header.interview')}</span> {t('Common.connectors.in')} <br />
                            <span className="txt_green">{t('Common.wolox')}</span>
                        </p>
                        <img alt="people logo" className="people_logo" src={peopleLogo} />
                    </div>

                </div>
            )
    );
}

export default Header;