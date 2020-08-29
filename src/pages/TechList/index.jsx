import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import woloxLogo from '../../assets/images/logo_full_color.svg';
import AuthContext from '../../context/authentication/authContext';
import TechContext from '../../context/technologies/techContext';
import Languages from '../../components/Language';
import SearchBar from '../../components/SearchBar';
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

    const [word, setWord] = useState('');

    const [filterDisplay, setFilterDisplay] = useState([]);

    // Get techs when charge the component
    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    const handleChange = e => {
        setWord(e);
        let oldList = techs.map(tech => {
            return { logo: tech.logo, tech: tech.tech.toLowerCase(), year: tech.year, author: tech.author, license: tech.license, language: tech.language, type: tech.type.toLowerCase() }
        });
        if (word !== "") {
            let newList = [];

            newList = oldList.filter(tech =>
                tech.tech.includes(word.toLowerCase()) ||
                tech.type.includes(word.toLowerCase())
            );
            setFilterDisplay(newList);
        } else {
            setFilterDisplay(techs);
        }
    }

    return (
        <>
            <div className="header_techlist">
                <Languages />
                <Link className="list_to_home" to={HOME}><img alt="wolox logo" className="img_wlx_list" src={woloxLogo} /></Link>
                <button
                    className="logout_btn"
                    onClick={() => logOut()}
                >{t('Common.logout')}
                </button>
            </div>
            <SearchBar value={word} handleChange={e => handleChange(e.target.value)} />
            <div className="list_container">
                <Technology
                    technologies={word.length < 1 ? techs : filterDisplay}
                />
                {filterDisplay.length == 1
                    ? <h1>{` ${t('Search.there_is')} ${filterDisplay.length} ${t('Search.element')}`}</h1>
                    : filterDisplay.length > 1
                        ? <h1>{` ${t('Search.there_are')} ${filterDisplay.length} ${t('Search.elements')}`}</h1>
                        : null}
            </div>
        </>
    );
}

export default TechList;