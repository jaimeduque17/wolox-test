import React from 'react';
import { useTranslation } from 'react-i18next';
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

const BodyContent = () => {

    // translations
    const { t } = useTranslation();

    return (
        <div className="body_content">
            <div className="techs_container">
                <p id="technologies">
                    {t('Home.body.searching')} <br />
                    {t('Home.body.to_incorporate')} <br />
                    {t('Home.body.amazing')} <br />
                    {t('Home.body.techs')} <br />
                </p>
                <img alt="technologies" className="tech_logo" src={techLogo} />
            </div>
            <div className="woloxers">
                <div className="programmer">
                    <p className="txt_twitter">{t('Home.body.quantity')} <span className="txt_blue">{t('Common.wolox')}</span></p>
                    <p className="container_twitter"><img alt="twitter logo" className="twitter_logo" src={twitterLogo} />
                        <span>{t('Home.body.twitter')}</span></p>
                    <a href="https://twitter.com/Wolox" className="follow_button">{t('Home.body.follow_us')}</a>
                </div>
                <div className="work_for">
                    <p>
                        {t('Home.body.work_for')}<br />
                        <span className="convert_txt">{t('Home.body.convert')}</span> <span className="ideas_txt">{t('Home.body.ideas')}</span> {t('Common.connectors.in')}<br />
                        {t('Home.body.products')}<br />
                    </p>
                </div>
            </div>
            <div className="benefits_container" id="benefits">
                <span className="benefits_title">{t('Home.body.about_benefits')} <span className="wink">;)</span></span>
                <div className="benefits_images">
                    <div className="benefit">
                        <img alt="flexible time" className="benefits_logo" src={clockLogo} />
                        {t('Home.body.good_time')}
                    </div>
                    <div className="benefit">
                        <img alt="home office" className="benefits_logo" src={deskLogo} />
                        {t('Home.body.home_office')}
                    </div>
                    <div className="benefit">
                        <img alt="latest technologies" className="benefits_logo" src={workshopsLogo} />
                        {t('Home.body.workshops')}
                    </div>
                    <div className="benefit">
                        <img alt="snacks" className="benefits_logo" src={snacksLogo} />
                        {t('Home.body.snacks')}
                    </div>
                    <div className="benefit">
                        <img alt="remote week" className="benefits_logo" src={remoteLogo} />
                        {t('Home.body.remote')}
                    </div>
                    <div className="benefit">
                        <img alt="latest technologies" className="benefits_logo" src={brainLogo} />
                        {t('Home.body.trend')}
                    </div>
                </div>
                <div className="line" />
            </div>
            <div className="requirements_container" id="requirements">
                <div className="requirement_margin">
                    <span className="req_txt">{t('Home.header.requirements')}</span>
                </div>
                <div>
                    <div className="requirement">
                        <img alt="bullet green" className="bullet" src={bulletGreen} />
                        {t('Home.body.advanced')}<br /> {t('Home.body.career')}
                    </div>
                    <div className="requirement">
                        <img alt="bullet black" className="bullet" src={bulletBlack} />
                        {t('Home.body.english')}
                    </div>
                    <div className="requirement">
                        <img alt="bullet blue" className="bullet" src={bulletBlue} />
                        {t('Home.body.agile')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyContent;