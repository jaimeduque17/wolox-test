import React from 'react';
import { useTranslation } from 'react-i18next';
import woloxLogo from '../../assets/images/Ic_Wolox_Footer.svg';
import './style.scss';

const Footer = () => {

    // translations
    const { t } = useTranslation();

    return (
        <div className="container_footer">
            <p className="footer_text">
                <span className="footer_thks">{t('Home.footer.thanks')} <span className="footer_blue_txt">{t('Home.footer.complete')}</span></span> <br />
                {t('Home.footer.invite_you')}<br />
            </p>
            <a href="https://www.wolox.com.ar" className="wolox_webpage">{t('Home.footer.learn_more')}</a>
            <img alt="wolox logo" className="wolox_footer" src={woloxLogo} />
        </div>
    );
}

export default Footer;