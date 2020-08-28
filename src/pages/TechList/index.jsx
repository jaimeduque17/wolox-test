import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import woloxLogo from '../../assets/images/logo_full_color.svg';
import AuthContext from '../../context/authentication/authContext';
import TechContext from '../../context/technologies/techContext';
import Technology from '../../components/Technology';
import { HOME } from '../../routes';
import './style.scss';

const TechList = () => {

     // translations
     const { t } = useTranslation();

    // Extract values of the context
    const techContext = useContext(TechContext);
    const { getTechs, techs } = techContext;

    const authContext = useContext(AuthContext);
    const { logOut } = authContext;

    // Get techs when charge the component
    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="header_techlist">
                <Link className="list_to_home" to={HOME}><img alt="wolox logo" className="img_wlx_list" src={woloxLogo} /></Link>
                <button
                    className="logout_btn"
                    onClick={() => logOut()}
                >{t('Common.logout')}
                </button>
            </div>
            <div className="list_container">
                {techs.map(tech => (
                    <div className="tech_list_content"
                        key={tech.tech}>
                        <Technology
                            technology={tech}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default TechList;